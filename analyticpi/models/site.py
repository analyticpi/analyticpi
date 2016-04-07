from datetime import datetime

from peewee import *

from analyticpi.db import database


class Site(Model):
    email = CharField()
    name = CharField()
    main_url = CharField()
    created_at = DateTimeField(default=datetime.now())

    class Meta:
        database = database
