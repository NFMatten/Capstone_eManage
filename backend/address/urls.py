from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_of_addresses),
    path('<int:user_id>/', views.address_detail)
]