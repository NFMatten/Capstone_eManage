from django.db import models

class Calendar(models.Model):
    employee_name=models.CharField(max_length=255)
    start=models.DateTimeField()
    end=models.DateTimeField()