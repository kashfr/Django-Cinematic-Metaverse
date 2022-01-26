import datetime
from datetime import timedelta
from django import forms
from django.db import models


INTERVAL_CHOICES = (('one_day', '1 Day'), ('two_days', '2 Days'), ('three_days', '3 Days'), ('four_days', '4 Days'), ('five_days', '5 Days'), ('six_days', '6 Days'), ('one-week', '1 Week'),
                    ('two_weeks', '2 Weeks'), ('three_weeks', '3 Weeks'), ('four_weeks', '4 Weeks'), ('five_weeks',
                                                                                                      '5 Weeks'), ('six_weeks', '6 Weeks'), ('eight_weeks', '8 Weeks'), ('twelve_weeks', '12 Weeks')
                    )

# Create your models here.


class MetaverseAvatar(models.Model):
    username = models.CharField(max_length=128)
    email_address = models.EmailField()


class Character(models.Model):
    name = models.CharField(max_length=128)
    image_url = models.URLField(max_length=200)
    current_bid = models.CharField(max_length=128)
    start_date = forms.DateField(
        initial=datetime.date.today, label="Start Date")
    auction_duration = forms.ChoiceField(
        choices=INTERVAL_CHOICES, initial='one_day', label="Interval")
    # auction_duration = forms.ChoiceField(
    #     choices=INTERVAL_CHOICES, initial='one_day', label="Interval")

    def __str__(self):
        return self.name
