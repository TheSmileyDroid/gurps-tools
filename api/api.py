import time
from flask import flask

app = Flask(__name__)


@app.route('/time')
def time():
    return {'time': time.time()}
