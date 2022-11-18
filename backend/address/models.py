from django.db import models

# Create your models here.
class Address(models.Model):
    street_address=models.CharField(max_length=255)
    city=models.CharField(max_length=255)
    state=models.CharField(max_length=2)
    zip=models.CharField(max_length=5)