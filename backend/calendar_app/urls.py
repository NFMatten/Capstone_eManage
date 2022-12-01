from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_of_events),
    path('<int:pk>/', views.event_detail)
]