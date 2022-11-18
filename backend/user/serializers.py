from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','first_name','last_name','phone_number','address','dob','employee_role','salary','hire_date','emergency_contact','is_manager']