import hashlib
import uuid

SALT = "e54a06c2b99e4c459ce8b23934b88b74"

def get_hashed(content):
    return hashlib.sha512(content + SALT).hexdigest()
