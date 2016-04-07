import re

import flask
from flask import render_template, redirect, url_for, flash, session, abort
import flask.ext.login as flask_login

from analyticpi.views import auth_view
from analyticpi.models.user import User
from analyticpi.extensions import login_manager


@login_manager.user_loader
def user_loader(email):
    try:
        user = User.get(User.email == email)
    except User.DoesNotExist:
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


@login_manager.unauthorized_handler
def unauthorized():
    abort(404)


@auth_view.route('/login')
def login():
    if not flask_login.current_user.is_anonymous:
        return redirect(url_for('home.home'))
    return render_template('login.html')


@auth_view.route('/login', methods=['POST'])
def login_as_post():
    email = flask.request.form['email']
    password = flask.request.form['password']
    user = User.exists(email, password)
    if user:
        user.id = email
        flask_login.login_user(user)
        return flask.redirect(flask.url_for('home.home'))
    flash("Wrong email & password combination.")
    return redirect(url_for('auth.login_as_post'))


@auth_view.route('/logout')
def logout():
    flask_login.logout_user()
    return redirect(url_for('home.home'))


@auth_view.route('/signup')
def signup():
    return render_template('signup.html')


@auth_view.route('/signup', methods=['POST'])
def signup_as_post():
    email = flask.request.form['email']
    name = flask.request.form['name']
    password = flask.request.form['password']

    # TODO: We should handle this error checking in a more gracefully way.
    error = False
    if len(password) < 7:
        flash('Password is too short (minimum is 7 characters)', 'error')
        error = True

    if len(password) > 32:
        flash('Password is too long (maximum is 32 characters)', 'error')
        error = True

    if not name:
        flash('Name can\'t be blank', 'error')
        error = True

    if not re.match(r'[^@]+@[^@]+\.[^@]+', email):
        flash('Please fill in a valid email address.', 'error')
        error = True

    try:
        User.get(User.email == email)
        flash('Email address already exists.', 'error')
        error = True
    except User.DoesNotExist:
        pass

    try:
        User.get(User.name == name)
        flash('Username already exists.', 'error')
        error = True
    except User.DoesNotExist:
        pass

    if error:
        return redirect(url_for('auth.signup'))
    User.create(email=email, password=password, name=name)
    flash('Welcome to Analytic Pi')
    session['email'] = email
    return redirect(url_for('home.home'))

