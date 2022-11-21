from django.urls import path
from . import views

urlpatterns = [
    path('', views.emergency_contact_list),
    path('<int:pk>/', views.emergency_contact_detail)
]