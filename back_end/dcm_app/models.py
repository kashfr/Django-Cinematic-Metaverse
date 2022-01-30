import datetime
import django.utils.timezone
from datetime import timedelta
from django.db import models
from django.utils.timezone import now
from pytz import timezone

now = datetime.datetime.now()
# now = timezone.now()
# now + timedelta(days=3)
# three_days = now + timedelta(days=3)


INTERVAL_CHOICES = (('one_day', '1 Day'), ('two_days', '2 Days'), ('three_days', '3 Days'), ('four_days', '4 Days'), ('five_days', '5 Days'), ('six_days', '6 Days'), ('one-week', '1 Week'),
                    ('two_weeks', '2 Weeks'), ('three_weeks', '3 Weeks'), ('four_weeks', '4 Weeks'), ('five_weeks',
                                                                                                      '5 Weeks'), ('six_weeks', '6 Weeks'), ('eight_weeks', '8 Weeks'), ('twelve_weeks', '12 Weeks')
                    )


# Create your models here.

class Avatar(models.Model):
    username = models.CharField(
        max_length=128)
    email_address = models.EmailField(max_length=254)

    def __str__(self):
        return self.username


class NFT(models.Model):
    avatar = models.ForeignKey(
        Avatar, on_delete=models.CASCADE, blank=True, null=True, related_name='avatar')
    name = models.CharField(max_length=128)
    image_url = models.URLField(max_length=200)
    current_bid = models.CharField(max_length=128)
    start_date = models.DateField(
        auto_now_add=False, default=datetime.date.today)
    # observations = models.ForeignKey(
    #     Observation, on_delete=models.CASCADE, blank=True, null=True, related_name='observation')
    # auction_duration = models.DurationField(
    #     choices=INTERVAL_CHOICES, null=True)

    def __str__(self):
        return self.name


class Observation(models.Model):
    nft = models.ForeignKey(NFT, on_delete=models.CASCADE,
                            related_name='observations')
    username = models.CharField(max_length=128)
    text = models.TextField(max_length=1000)

    class Meta:
        ordering = ['text']

        def __str__(self):
            return self.username


# class Observation(models.Model):
#     nft = models.ForeignKey(NFT, on_delete=models.CASCADE,
#                             related_name='observations')
#     name = models.CharField(max_length=80)
#     email = models.EmailField()
#     body = models.TextField()
#     # created_on = models.DateTimeField(
#     #     auto_now_add=False, null=True, blank=True)
#     active = models.BooleanField(default=False)

#     class Meta:
#         ordering = ['created_on']

#     def __str__(self):
#         return 'Observation {} by {}'.format(self.body, self.name)
