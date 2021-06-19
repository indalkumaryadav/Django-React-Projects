from .views import BlogAPIView,BlogLikeAPIView,BlogCommentAPIView
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('blog/',BlogAPIView.as_view() ),
    path('blog/<int:pk>/',BlogAPIView.as_view() ),
    path('blog/like/',BlogLikeAPIView.as_view() ),
    path('blog/comment/',BlogCommentAPIView.as_view() ),
]
