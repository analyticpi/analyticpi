import os

from flask.ext.script import Manager

from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)

from analyticpi import database, app, migration

manager = Manager(app)


@manager.command
def runserver():
    migration.initialize()
    app.debug = bool(os.environ.get('DEBUG', True))
    app.run(port=int(os.environ['PORT']))
    database.close()


@manager.command
def migrate():
    migration.initialize()
    database.close()

@manager.command
def list_routes():
    import urllib
    from flask import url_for
    output = []
    for rule in app.url_map.iter_rules():

        options = {}
        for arg in rule.arguments:
            options[arg] = "[{0}]".format(arg)

        methods = ','.join(rule.methods)
        url = url_for(rule.endpoint, **options)
        line = urllib.unquote("{:50s} {:20s} {}".format(rule.endpoint, methods, url))
        output.append(line)

    for line in sorted(output):
        print line

if __name__ == "__main__":
    manager.run()