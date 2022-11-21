from rest_framework import serializers
from .models import Address
from authentication.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name']

class AddressSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False,read_only=True)
    class Meta:
        model = Address
        fields = ['id', 'user', 'street_address', 'city','state','zip', 'user_id']
        depth = 1
    user_id = serializers.IntegerField(write_only=True)