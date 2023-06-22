from flask import Flask
import os


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = os.urandom(24)
    from .views import views
    app.register_blueprint(views, url_prefix='/')
    return app
