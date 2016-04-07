import os
import sys
import logging

from peewee import *
from flask import Flask

from analyticpi.db import database
from analyticpi.models.page_view import PageView
from analyticpi.extensions import login_manager

# Flask application settings.
DEBUG = bool(os.environ.get('DEBUG'))

ROOT_URL = os.environ['ROOT_URL']
SECRET_KEY = os.environ['SECRET_KEY']

app = Flask(__name__)
app.config.from_object(__name__)
app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)
login_manager.init_app(app)


def page_views(query):
    return query.count()


def unique_ips(query):
    return query.select(PageView.ip).group_by(PageView.ip).count()


def top_pages(query, limit):
    return (query.select(PageView.title, fn.COUNT(PageView.id))
            .group_by(PageView.title).order_by(fn.COUNT(PageView.id).desc())
            .tuples().limit(limit))


from analyticpi.views import tracking_view, auth_view, home_view

app.register_blueprint(tracking_view)
app.register_blueprint(auth_view)
app.register_blueprint(home_view)
