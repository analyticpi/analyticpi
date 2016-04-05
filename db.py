import os
import urlparse

import peewee

APP_DIR = os.path.dirname(__file__)

urlparse.uses_netloc.append('postgres')
url = urlparse.urlparse(os.environ['DATABASE_URL'])
database = peewee.PostgresqlDatabase(url.path[1:], user=url.username, password=url.password, host=url.hostname, port=url.port)
