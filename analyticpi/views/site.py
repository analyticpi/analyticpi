from flask import render_template, request, redirect, url_for, abort
from flask.ext.login import login_required, current_user

from analyticpi.views import site_view
from analyticpi.db import database
from analyticpi.models import Site, SiteUser, User


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
    main_url = request.form.get('domain')
    site = Site.create(name=name, main_url=main_url)
    SiteUser.create(site=site.id, user=current_user.id)
    return redirect(url_for('site.show_site', site_id=site.id))


@site_view.route('/site/<site_domain>/')
@login_required
def show_site(site_domain):
    site = Site.get(domain=site_domain)
    try:
        site_user = SiteUser.get(site=site.id, user=current_user.id)
    except SiteUser.UserDoesNotExist:
        abort(404)
    return render_template('/sites/site.html', site=site)
