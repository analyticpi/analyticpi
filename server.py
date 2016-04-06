import os

from dotenv import load_dotenv


if __name__ == '__main__':
    dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
    load_dotenv(dotenv_path)

    from analyticpi import database, app, migration

    migration.initialize()
    app.debug = bool(os.environ.get('DEBUG', True))
    app.run(port=int(os.environ['PORT']))
    database.close()
