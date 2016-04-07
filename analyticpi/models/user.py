from datetime import datetime

from peewee import *
from flask.ext.login import UserMixin

from analyticpi.db import database
from analyticpi.utils.hashing import get_hashed


class User(Model, UserMixin):
    email = CharField()
    name = CharField()
    password = CharField()
    token_auth = CharField(null=True, default="")
    date_registered = DateTimeField(default=datetime.now())

    class Meta:
        database = database
        db_table = 'users'

    @classmethod
    def authenticate(cls, email):
        user = cls.get(cls.email == email)
        return user

    @classmethod
    def exists(cls, email, password):
        try:
            user = cls.get(cls.email == email, cls.password == get_hashed(password))
        except User.DoesNotExist:
            return None
        return user

    def save(self, *args, **kwargs):
        self.password = get_hashed(self.password)
        return super(User, self).save(*args, **kwargs)


