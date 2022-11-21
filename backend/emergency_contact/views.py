from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import EmergencyContact
from .serializers import EmergencyContactSerializer

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def emergency_contact_list(request):
    if request.method == 'GET':
        emergency_contacts = EmergencyContact.objects.all()
        serializer = EmergencyContactSerializer(emergency_contacts,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = EmergencyContactSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def emergency_contact_detail(request, pk):
    emergency_contacts = get_object_or_404(EmergencyContact, pk=pk)
    if request.method == 'GET':
        serializer = EmergencyContactSerializer(emergency_contacts)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = EmergencyContactSerializer(emergency_contacts, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        emergency_contacts.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)