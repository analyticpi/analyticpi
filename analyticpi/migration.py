from analyticpi.models.page_view import PageView
from db import database


def initialize():
    database.create_tables([PageView], safe=True)


def migrate():
    database.create_tables([PageView], safe=True)
    database.close()


if __name__ == '__main__':
    migrate()
