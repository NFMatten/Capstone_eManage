from django.urls import path
from . import views

urlpatterns = [
    path('', views.payroll_list),
    path('<int:pk>/', views.payroll_detail)
]