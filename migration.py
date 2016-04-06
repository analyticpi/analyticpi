from db import database
from page_view import PageView

if __name__ == '__main__':
    database.create_tables([PageView], safe=True)
    database.close()
