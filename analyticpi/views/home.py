from flask import render_template
from flask import Response

from analyticpi.models.page_view import PageView
from analyticpi.reports import page_views, unique_ips, top_pages
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
    query = get_query(None, None)
    return render_template('index.html',
                           page_views=page_views(query),
                           unique_ips=unique_ips(query),
                           top_pages=top_pages(query, 20))


@home_view.errorhandler(404)
def not_found(e):
    return Response('Not found.')
