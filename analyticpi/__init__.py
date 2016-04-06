import os
import sys
import logging

from peewee import *
from flask import render_template
from flask import Flask, Response, abort, request

from analyticpi.db import database
from analyticpi.models.page_view import PageView
from analyticpi.views import tracking_view

# Flask application settings.
DEBUG = bool(os.environ.get('DEBUG'))

ROOT_URL = os.environ['ROOT_URL']
SECRET_KEY = os.environ['SECRET_KEY']

app = Flask(__name__)
app.config.from_object(__name__)
app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)


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
    return (query.select(PageView.ip).group_by(PageView.ip).count())


def top_pages(query, limit):
    return (query.select(PageView.title, fn.COUNT(PageView.id))
            .group_by(PageView.title).order_by(fn.COUNT(PageView.id).desc())
            .tuples().limit(limit))


@app.route('/')
def home():
    query = get_query(None, None)
    return render_template('index.html',
                           page_views=page_views(query),
                           unique_ips=unique_ips(query),
                           top_pages=top_pages(query, 20), )


@app.errorhandler(404)
def not_found(e):
    return Response('Not found.')

app.register_blueprint(tracking_view)
