from flask import Response, render_template, request, redirect, url_for, abort, jsonify
from flask.ext.login import login_required, current_user

from analyticpi.views import site_view
from analyticpi.models import Site, SiteUser, User, PageView
from analyticpi.reports import *
from flask.ext.login import current_user


@site_view.route('/sites')
@login_required
def show():
    sites = (Site.select().join(SiteUser).join(User).where(SiteUser.user == current_user.id))
    return render_template('/sites/show.html', sites=sites)


@site_view.route('/site/new/')
@login_required
def create_site():
    return render_template('/sites/create_site.html')


@site_view.route('/site/create/', methods=['POST'])
@login_required
@database.atomic()
def create_site_as_post():
    name = request.form.get('name')
    domain = request.form.get('domain')
    site = Site.create(name=name, domain=domain)
    SiteUser.create(site=site.id, user=current_user.id)
    return redirect(url_for('site.show_site', site_domain=site.domain))


@site_view.route('/site/<site_domain>/pageviews/', methods=['GET'])
@login_required
def show_page_views(site_domain):
    site = Site.get(domain=site_domain)
    try:
        SiteUser.get(site=site.id, user=current_user.id)
    except SiteUser.UserDoesNotExist:
        abort(404)
    return render_template('/sites/pageviews.html', site=site)


@site_view.route('/site/<site_domain>/')
@login_required
def show_site(site_domain):
    site = Site.get(domain=site_domain)
    try:
        SiteUser.get(site=site.id, user=current_user.id)
    except SiteUser.UserDoesNotExist:
        abort(404)
    query = get_query(None, None, site)
    return render_template('/sites/site.html', site=site,
                           page_views=page_view_count(query),
                           unique_ips=unique_ips(query),
                           top_pages=top_pages(query, 20))


@site_view.route('/site/<site_domain>/traffic_hours/')
@login_required
def show_traffic_hours(site_domain):
    site = Site.get(domain=site_domain)
    try:
        SiteUser.get(site=site.id, user=current_user.id)
    except SiteUser.UserDoesNotExist:
        abort(404)
    return render_template('/sites/traffic_hours.html', site=site)


@site_view.route('/site/<site_domain>/tracking_code/')
@login_required
def tracking_code(site_domain):
    site = Site.get(domain=site_domain)
    try:
        SiteUser.get(site=site.id, user=current_user.id)
    except SiteUser.UserDoesNotExist:
        abort(404)
    return render_template('/sites/tracking_code.html', site=site)


@site_view.route('/site/<site_domain>/api/stats/')
@login_required
def api_stats(site_domain):
    site = Site.get(domain=site_domain)
    try:
        SiteUser.get(site=site.id, user=current_user.id)
    except SiteUser.UserDoesNotExist:
        abort(404)
    query = get_query(None, None, site)
    stats = {
        'page_views': page_view_count(query),
        'unique_ips': unique_ips(query),
        'user_agents': dict(user_agents(query, 10)),
    }
    return jsonify(**stats)


@site_view.route('/site/<site_domain>/realtime/', methods=['GET'])
@login_required
def show_realtime(site_domain):
    site = Site.get(domain=site_domain)
    try:
        SiteUser.get(site=site.id, user=current_user.id)
    except SiteUser.UserDoesNotExist:
        abort(404)
    return render_template('/sites/realtime.html', site=site)


@site_view.route('/site/<site_domain>/api/pageview')
@login_required
def api_pageview(site_domain):
    site = Site.get(domain=site_domain)
    try:
        SiteUser.get(site=site.id, user=current_user.id)
    except SiteUser.UserDoesNotExist:
        abort(404)
    unit = request.args.get('unit', '')
    count = int(request.args.get('count', 0))
    if unit == 'day':
        stats = {
            'page_views': get_page_views(site, "%Y-%m-%d", unit, count),
        }
        return jsonify(**stats)
    if unit == 'hour':
        stats = {
            'page_views': get_page_views(site, "%Y-%m-%dT%H:00:00", unit, count),
        }
        return jsonify(**stats)
    if unit == 'minute':
        stats = {
            'page_views': get_page_views(site, "%Y-%m-%dT%H:%M:00", unit, count),
        }
        return jsonify(**stats)
    if unit == 'second':
        stats = {
            'page_views': get_page_views(site, "%Y-%m-%dT%H:%M:%S", unit, count),
        }
        return jsonify(**stats)
    return jsonify(**{'status': 'error', 'message': "Bad request"}), 400


@site_view.route('/site/<site_domain>/api/traffic_hours')
@login_required
def api_traffic_hours(site_domain):
    site = Site.get(domain=site_domain)
    try:
        SiteUser.get(site=site.id, user=current_user.id)
    except SiteUser.UserDoesNotExist:
        abort(404)
    query = get_query(None, None, site)
    top_traffic_times(query)
    return jsonify(**{
        'traffic_hours': top_traffic_times(query)})
