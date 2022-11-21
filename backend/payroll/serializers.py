from rest_framework import serializers
from .models import Payroll
from authentication.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'first_name', 'last_name']

class PayrollSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    class Meta:
        model = Payroll
        fields = ['id', 'period_start', 'period_end', 'user', 'salary', 'hours_worked', 'tips_received', 'total_before_taxes', 'user_id']
        depth = 1
    user_id = serializers.IntegerField(write_only=True)