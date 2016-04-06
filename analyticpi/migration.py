from db import database
from page_view import PageView


def initialize():
    database.create_tables([PageView], safe=True)


def migrate():
    database.create_tables([PageView], safe=True)
    database.close()


if __name__ == '__main__':
    migrate()
