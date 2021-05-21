from django.contrib import admin
from django.urls import path
from .views import UserAPIView

urlpatterns = [
    path('user/',UserAPIView.as_view() ),
    path('user/<int:pk>/',UserAPIView.as_view() ),
]
