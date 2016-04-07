from db import database
from analyticpi.models import PageView, User, Site, SiteUser


def initialize():
    database.create_tables([User, PageView, Site, SiteUser], safe=True)

if __name__ == '__main__':
    initialize()
