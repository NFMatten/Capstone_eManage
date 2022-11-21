from django.db import models
from authentication.models import User

class Payroll(models.Model):
    period_start = models.DateField()
    period_end = models.DateField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    salaray = models.DecimalField(max_digits=4, decimal_places=2, default=12.50)
    hours_worked = models.DecimalField(max_digits=3, decimal_places=2)
    tips_received = models.DecimalField(max_digits=6, decimal_places=2)
    total_before_taxes = models.DecimalField(max_digits=6, decimal_places=2)