from .views import ProfileAPIView, UserAPIView
from django.urls import path

urlpatterns = [
    # user
    path('user/',UserAPIView.as_view() ),
    path('user/<str:username>/',UserAPIView.as_view() ),

    # profile
    path('profile/',ProfileAPIView.as_view() ),
   
]
