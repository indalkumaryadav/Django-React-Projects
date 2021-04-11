from django.contrib import admin
from django.urls import path
from .views import CreateUserAPIView

urlpatterns = [

    path('user/create/',CreateUserAPIView.as_view()),
]
