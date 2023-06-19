from flask import Blueprint, render_template
from calendar import monthcalendar

views = Blueprint('views', __name__)


@views.route('/')
def home():
    return render_template('home.html')


@views.route('/calendar')
def calendar():
    days = monthcalendar(2023, 6)
    return render_template('calendar.html', days=days)
