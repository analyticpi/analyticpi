import sys
import math
import random
import datetime

from peewee import fn

from analyticpi.models.page_view import PageView

def is_time_in_range(start, end, x):
    #true if x is in range
    if start <= end:
         return start <= x.time() <= end
    else:
         return start <= x.time() or x.time() <= end # Understand this part.


def generate_fake_data():
    dt = datetime.datetime.now()
    start = datetime.time(23, 0, 0)
    end = datetime.time(8, 0, 0)
    time = datetime.time(20, 0, 0)
    while True:
        busy = abs(dt.hour - 21)
        minute = int(math.log(int((random.random() * busy + 3))) * 10)
        dt = dt - datetime.timedelta(minutes=minute)
        p = PageView.select().order_by(fn.Random()).get()
        sys.stdout.write('.')
        print dt.day
        PageView.create(
            site=p.site.id,
            timestamp=dt,
            domain=p.domain,
            url=p.url,
            title=p.title,
            ip=p.ip,
            referrer=p.referrer,
            headers=p.headers,
            params=p.params)
        if dt < datetime.datetime.now() - datetime.timedelta(days=30):
            break
