from flask import render_template, url_for
from flask import Response, redirect

from analyticpi.models.page_view import PageView
from analyticpi.views import home_view

from flask.ext.login import current_user


def get_query(start, end):
    query = PageView.select()
    if start and end:
        query = query.where(PageView.timestamp.between(start, end))
    elif start:
        query = query.where(PageView.timestamp >= start)
    elif end:
        query = query.where(PageView.timestamp <= end)
    return query


@home_view.route('/')
def home():
    if current_user.is_anonymous:
        return render_template('index.html')
    else:
        return redirect(url_for('site.show'))

@home_view.errorhandler(404)
def not_found(e):
    return Response('Not found.')
