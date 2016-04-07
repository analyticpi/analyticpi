from flask import Blueprint

tracking_view = Blueprint('tracking', __name__, template_folder='templates')

from analyticpi.views import tracking

auth_view = Blueprint('auth', __name__, template_folder='templates')

from analyticpi.views import auth

home_view = Blueprint('home', __name__, template_folder='templates')

from analyticpi.views import home

site_view = Blueprint('site', __name__, template_folder='templates')

from analyticpi.views import site
