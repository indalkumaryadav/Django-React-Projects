from .views import ProfileAPIView, UserAPIView
from django.contrib import admin
from django.urls import path

urlpatterns = [
    # user
    path('',UserAPIView.as_view() ),
    path('<int:pk>/',UserAPIView.as_view() ),

    # user profile
    path('profile/',ProfileAPIView.as_view() ),
    path('profile/<int:pk>/',ProfileAPIView.as_view() ),
]
