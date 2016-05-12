import os
import uuid
from datetime import datetime

from peewee import *

from analyticpi.db import database
from analyticpi.models.user import User


JAVASCRIPT = """(function(){
    var d=document,i=new Image,e=encodeURIComponent;
    i.src='%s/track.gif?site=%s&url='+e(d.location.href)+'&ref='+e(d.referrer)+'&t='+e(d.title);
    })()"""

class Site(Model):
    name = CharField()
    uuid = UUIDField(default=uuid.uuid4())
    domain = CharField(unique=True)
    created_at = DateTimeField(default=datetime.now())

    class Meta:
        database = database

    @property
    def tracking_code(self):
        return "<script src=\"http://{root_url}/track.js?site={uuid}\"></script>".format(root_url=os.getenv('ROOT_URL'), uuid=self.uuid)

    @property
    def tracking_js(self):
        return JAVASCRIPT % (os.getenv('ROOT_URL'), self.id)


class SiteUser(Model):
    site = ForeignKeyField(Site)
    user = ForeignKeyField(User)

    class Meta:
        database = database
        db_table = 'site_users'

