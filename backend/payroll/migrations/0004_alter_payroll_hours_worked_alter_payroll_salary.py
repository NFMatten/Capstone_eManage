# Generated by Django 4.0.4 on 2022-11-21 20:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payroll', '0003_alter_payroll_salary'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payroll',
            name='hours_worked',
            field=models.DecimalField(decimal_places=2, max_digits=5),
        ),
        migrations.AlterField(
            model_name='payroll',
            name='salary',
            field=models.DecimalField(decimal_places=2, max_digits=4),
        ),
    ]