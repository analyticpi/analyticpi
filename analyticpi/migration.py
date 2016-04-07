from db import database
from analyticpi.models import PageView, User


def initialize():
    database.create_tables([User, PageView], safe=True)

if __name__ == '__main__':
    initialize()
