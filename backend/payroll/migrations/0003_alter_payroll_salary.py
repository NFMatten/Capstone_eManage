# Generated by Django 4.0.4 on 2022-11-21 20:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payroll', '0002_rename_salaray_payroll_salary'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payroll',
            name='salary',
            field=models.DecimalField(decimal_places=2, max_digits=6),
        ),
    ]
