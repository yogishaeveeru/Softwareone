from django_extensions.db.models import TimeStampedModel
from simple_history.models import HistoricalRecords

from django.db import models
from softwareoneauth.models import OneappUser

class Customer(TimeStampedModel):
    history = HistoricalRecords()
    user = models.ForeignKey(OneappUser, on_delete=models.CASCADE)
    account_number = models.CharField(max_length=20)
    username = models.CharField(max_length=100)
    access_key = models.CharField(max_length=50)
    secret_key = models.CharField(max_length=50)

    def __str__(self):
        return self.username
