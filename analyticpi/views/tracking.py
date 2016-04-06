from base64 import b64decode

from flask import Response, Blueprint, abort, request

from analyticpi import app
from analyticpi.db import database
from analyticpi.models import PageView
from analyticpi.views import tracking_view

# 1 pixel GIF, base64-encoded.
BEACON = b64decode(
    'R0lGODlhAQABAIAAANvf7wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==')

JAVASCRIPT = """(function(){
    var d=document,i=new Image,e=encodeURIComponent;
    i.src='%s/track.gif?url='+e(d.location.href)+'&ref='+e(d.referrer)+'&t='+e(d.title);
    })()""".replace('\n', '')


@tracking_view.route('/track.gif')
def analyze():
    if not request.args.get('url'):
        abort(404)

    with database.transaction():
        PageView.create_from_request()

    response = Response(BEACON, mimetype='image/gif')
    response.headers['Cache-Control'] = 'private, no-cache'
    return response


@tracking_view.route('/track.js')
def script():
    return Response(JAVASCRIPT % (app.config['ROOT_URL']),
                    mimetype='text/javascript')
