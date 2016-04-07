from db import database
from analyticpi.models import PageView, User, Site


def initialize():
    database.create_tables([User, PageView, Site], safe=True)

if __name__ == '__main__':
    initialize()
