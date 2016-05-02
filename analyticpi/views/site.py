from flask import Response, render_template, request, redirect, url_for, abort, jsonify
from flask.ext.login import login_required, current_user

from analyticpi.views import site_view
from analyticpi.db import database
from analyticpi.models import Site, SiteUser, User, PageView
from analyticpi.reports import page_views, unique_ips, top_pages, get_query, user_agents
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


@site_view.route('/site/<site_domain>/')
@login_required
def show_site(site_domain):
    site = Site.get(domain=site_domain)
    try:
        site_user = SiteUser.get(site=site.id, user=current_user.id)
    except SiteUser.UserDoesNotExist:
        abort(404)
    query = get_query(None, None, site)
    return render_template('/sites/site.html', site=site,
                           page_views=page_views(query),
                           unique_ips=unique_ips(query),
                           top_pages=top_pages(query, 20))

@site_view.route('/site/<site_domain>/tracking_code/')
@login_required
def tracking_code(site_domain):
    site = Site.get(domain=site_domain)
    try:
        site_user = SiteUser.get(site=site.id, user=current_user.id)
    except SiteUser.UserDoesNotExist:
        abort(404)
    return render_template('/sites/tracking_code.html', site=site)


@site_view.route('/site/<site_domain>/stats/')
@login_required
def stats(site_domain):
    site = Site.get(domain=site_domain)
    try:
        site_user = SiteUser.get(site=site.id, user=current_user.id)
    except SiteUser.UserDoesNotExist:
        abort(404)
    query = get_query(None, None, site)
    stats = {
        'page_views': page_views(query),
        'unique_ips': unique_ips(query),
        'user_agents': dict(user_agents(query, 10)),
    }
    return jsonify(**stats)

