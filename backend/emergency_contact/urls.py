from django.urls import path
from . import views

urlpatterns = [
    path('', views.emergency_contact_list),
    path('user/<int:user_id>/', views.user_ec_detail),
    path('<int:pk>/', views.employees_ec_details)
]