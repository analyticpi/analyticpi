from datetime import datetime

from peewee import *

from analyticpi.db import database
from analyticpi.models.user import User


class Site(Model):
    email = CharField()
    name = CharField()
    main_url = CharField()
    created_at = DateTimeField(default=datetime.now())

    class Meta:
        database = database


class SiteUser(Model):
    site = ForeignKeyField(Site)
    user = ForeignKeyField(User)

    class Meta:
        database = database
        db_table = 'site_users'

