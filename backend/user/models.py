from django.db import models
from address.models import Address
from emergency_contact.models import EmergencyContact

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    phone_number = models.CharField(max_length=12)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    dob = models.DateField()
    employee_role = models.CharField(max_length=255)
    salary = models.DecimalField(max_digits=4, decimal_places=2)
    hire_date = models.DateField()
    emergency_contact = models.ForeignKey(EmergencyContact, on_delete=models.CASCADE)
    is_manager = models.BooleanField()