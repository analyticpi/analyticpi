import os

import peewee

APP_DIR = os.path.dirname(__file__)

try:
    import urlparse
    import psycopg2
    urlparse.uses_netloc.append('postgres')
    url = urlparse.urlparse(os.environ["DATABASE_URL"])
    database = peewee.PostgresqlDatabase(database=url.path[1:],
                                         user=url.username,
                                         password=url.password,
                                         host=url.hostname,
                                         port=url.port)
except:
    database = peewee.SqliteDatabase('my_app.db')
