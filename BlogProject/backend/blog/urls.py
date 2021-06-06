from .views import BlogAPIView
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('blog/',BlogAPIView.as_view() ),
    path('blog/<int:pk>/',BlogAPIView.as_view() ),
]
