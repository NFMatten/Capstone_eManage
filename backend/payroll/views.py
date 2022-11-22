from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .serializers import PayrollSerializer
from .models import Payroll

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def payroll_list(request):
    if request.method == 'GET':
        payroll = Payroll.objects.all()
        serializer = PayrollSerializer(payroll, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        request.data["total_before_taxes"] = (request.data["salary"] * request.data["hours_worked"]) + request.data["tips_received"]
        serializer = PayrollSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def payroll_detail(request, pk):
    payroll = get_object_or_404(Payroll, pk=pk)
    if request.method == 'GET':
        serializer = PayrollSerializer(payroll)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PayrollSerializer(payroll, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        payroll.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)