import json
import datetime
from urlparse import parse_qsl, urlparse

from peewee import *
from flask import request, abort

from analyticpi.db import database
from analyticpi.models.site import Site


class JSONField(TextField):
    """Store JSON data in a TextField."""

    def python_value(self, value):
        if value is not None:
            return json.loads(value)

    def db_value(self, value):
        if value is not None:
            return json.dumps(value)


class PageView(Model):
    site = ForeignKeyField(Site)
    domain = CharField()
    url = TextField()
    timestamp = DateTimeField(default=datetime.datetime.now, index=True)
    title = TextField(default='')
    ip = CharField(default='')
    referrer = TextField(default='')
    headers = JSONField()
    params = JSONField()

    class Meta:
        database = database

    @classmethod
    def create_from_request(cls):
        parsed = urlparse(request.args['url'])
        params = dict(parse_qsl(parsed.query))

        try:
            site = Site.get(uuid=request.args.get('site'))
        except Site.DoesNotExist:
            abort(400)

        return PageView.create(
            site=site.id,
            domain=parsed.netloc,
            url=parsed.path,
            title=request.args.get('t') or '',
            ip=request.headers.get('X-Real-IP', request.remote_addr),
            referrer=request.args.get('ref') or '',
            headers=dict(request.headers),
            params=params)


if __name__ == '__main__':
    p = PageView
