from flask import Blueprint
from calendar import monthcalendar

months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


def get_days_of_the_month(year, month):
    days = monthcalendar(year, month)
    return days


def get_monthdays_for_year(year):
    monthdays_for_year = []

    for month in months:
        days = get_days_of_the_month(year, month)
        monthdays_for_year.append(days)
    return monthdays_for_year
