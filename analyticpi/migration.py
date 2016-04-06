from db import database
from analyticpi.models import PageView


def initialize():
    database.create_tables([PageView], safe=True)


if __name__ == '__main__':
    initialize()
