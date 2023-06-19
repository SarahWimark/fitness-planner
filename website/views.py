from flask import Blueprint, render_template
from website.calendar_functions import get_monthdays_for_year, get_days_of_the_month

views = Blueprint('views', __name__)


@views.route('/')
def home():
    return render_template('home.html')


@views.route('/calendar')
def calendar():
    days = get_days_of_the_month(2023, 6)
    print(get_monthdays_for_year(2023))
    return render_template('calendar.html', days=days)
