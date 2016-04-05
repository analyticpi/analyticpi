from base64 import b64decode
import datetime
import json
import os
from urlparse import parse_qsl, urlparse

from flask import Flask, Response, abort, request
from flask import render_template
from peewee import *

from db import database
from page_view import PageView


# 1 pixel GIF, base64-encoded.
BEACON = b64decode('R0lGODlhAQABAIAAANvf7wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==')

DOMAIN = 'http://analyticpi.com'  # TODO: change me.

# Simple JavaScript which will be included and executed on the client-side.
JAVASCRIPT = """(function(){
    var d=document,i=new Image,e=encodeURIComponent;
    i.src='%s/track.gif?url='+e(d.location.href)+'&ref='+e(d.referrer)+'&t='+e(d.title);
    })()""".replace('\n', '')

# Flask application settings.
DEBUG = bool(os.environ.get('DEBUG'))
SECRET_KEY = 'secret - change me'  # TODO: change me.

app = Flask(__name__)
app.config.from_object(__name__)

def get_query(start, end):
    query = PageView.select()
    if start and end:
        query = query.where(PageView.timestamp.between(start, end))
    elif start:
        query = query.where(PageView.timestamp >= start)
    elif end:
        query = query.where(PageView.timestamp <= end)
    return query

def page_views(query):
    return query.count()

def unique_ips(query):
    return (query
            .select(PageView.ip)
            .group_by(PageView.ip)
            .count())

def top_pages(query, limit):
    return (query
            .select(PageView.title, fn.COUNT(PageView.id))
            .group_by(PageView.title)
            .order_by(fn.COUNT(PageView.id).desc())
            .tuples()
            .limit(limit))



@app.route('/track.gif')
def analyze():
    if not request.args.get('url'):
        abort(404)

    with database.transaction():
        PageView.create_from_request()

    response = Response(app.config['BEACON'], mimetype='image/gif')
    response.headers['Cache-Control'] = 'private, no-cache'
    return response

@app.route('/track.js')
def script():
    return Response(
        app.config['JAVASCRIPT'] % (app.config['DOMAIN']),
        mimetype='text/javascript')

@app.route('/')
def home():
    query = get_query(None, None)
    return render_template('index.html',
            page_views = page_views(query),
            unique_ips = unique_ips(query),
            top_pages = top_pages(query, 20),
            )

@app.errorhandler(404)
def not_found(e):
    return Response('Not found.')

if __name__ == '__main__':
    database.create_tables([PageView], safe=True)
    app.debug = True
    app.run(port=8080)  # Use Flask's builtin WSGI server.
    # Or for gevent,
    # from gevent.wsgi import WSGIServer
    # WSGIServer(('', 5000), app).serve_forever()
    database.close()
