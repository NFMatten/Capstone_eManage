from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer

@api_view(['GET', 'POST'])
def employee_list(request):
    if request.method == 'GET':
        employees = User.objects.all()
        serializer = UserSerializer(employees, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET','PUT','DELETE'])
def employee_detail(request, pk):
    employee = get_object_or_404(User, pk)
    if request.method == 'GET':
        serializer = UserSerializer(employee)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = UserSerializer(employee, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)