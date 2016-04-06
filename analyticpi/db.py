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
except KeyError:
    database = peewee.MySQLDatabase(os.environ["MYSQL_DATABASE"],
                                    os.environ["MYSQL_HOST"],
                                    user=os.environ["MYSQL_USER"],
                                    passwd=os.environ["MYSQL_PASSWD"])