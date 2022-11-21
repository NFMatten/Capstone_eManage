from django.db import models
from authentication.models import User

# Create your models here.
class Address(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    street_address=models.CharField(max_length=255)
    city=models.CharField(max_length=255)
    state=models.CharField(max_length=2)
    zip=models.CharField(max_length=5)