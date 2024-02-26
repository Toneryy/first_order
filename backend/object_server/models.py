from django.db import models

class PhoneEntity(models.Model):
    phoneNumber = models.CharField(primary_key=True, max_length=20)
    status = models.CharField(max_length=255)

class RequestEntity(models.Model):
    name = models.CharField(max_length=30)
    location = models.CharField(max_length=50)
    phoneNumber = models.CharField(primary_key=True, max_length=20)
    date = models.DateField()
    status = models.CharField(max_length=255)
