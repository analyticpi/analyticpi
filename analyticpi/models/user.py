from datetime import datetime

from peewee import *
from flask.ext.login import UserMixin

from analyticpi.db import database
from analyticpi.extensions import login_manager
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
        print email
        print password
        print get_hashed(password)
        try:
            user = cls.get(cls.email == email, cls.password == get_hashed(password))
        except User.DoesNotExist:
            return None
        return user

    def save(self, *args, **kwargs):
        self.password = get_hashed(self.password)
        return super(User, self).save(*args, **kwargs)


@login_manager.user_loader
def user_loader(email):
    user = User.get(User.email == email)
    if user is None:
        return
    return user


@login_manager.request_loader
def request_loader(request):
    email = request.cookies.get('email')
    if email is None:
        return
    user = User.authenticate(email)
    if user is None:
        return

    user = User()
    user.id = email
    user.is_authenticated = True
    return user
