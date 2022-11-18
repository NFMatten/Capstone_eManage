from django.db import models

# Create your models here.
class EmergencyContact(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    phone_number = models.CharField(max_length=12)