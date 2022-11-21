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
        serializer = PayrollSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

# @api_view(['GET','PUT','DELETE'])
# @permission_classes([IsAuthenticated])
# def payroll_detail(request, pk)