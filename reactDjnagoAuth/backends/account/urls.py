from django.contrib import admin
from django.urls import path
from .views import UserAPIView

urlpatterns = [
    path('register/',UserAPIView.as_view())
]
