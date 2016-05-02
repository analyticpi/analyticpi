import uuid
from datetime import datetime

from peewee import *

from analyticpi.db import database
from analyticpi.models.user import User

TRACKING_JS = "<script src=\"http://localhost:8000/track.js?site={uuid}\"></script>"


class Site(Model):
    name = CharField()
    uuid = UUIDField(default=uuid.uuid4())
    domain = CharField(unique=True)
    created_at = DateTimeField(default=datetime.now())

    class Meta:
        database = database

    @property
    def tracking_code(self):
        return TRACKING_JS.format(uuid=self.uuid)


class SiteUser(Model):
    site = ForeignKeyField(Site)
    user = ForeignKeyField(User)

    class Meta:
        database = database
        db_table = 'site_users'

