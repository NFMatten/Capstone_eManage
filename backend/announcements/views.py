from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import Announcement
from .serializers import AnnouncementSerializer

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def announcements_list(request):
    if request.method == 'GET':
        announcements = Announcement.objects.all()
        serializer = AnnouncementSerializer(announcements, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = AnnouncementSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)