from rest_framework import serializers
from .models import Announcement
from authentication.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class AnnouncementSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    class Meta:
        model = Announcement
        fields = ['id', 'user', 'announcement']
        depth = 1
    