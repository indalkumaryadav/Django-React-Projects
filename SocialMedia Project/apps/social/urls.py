from django.contrib import admin
from django.urls import path
from .views import CommentAPIView, FollowerAPIView, PostAPIView,LikeAPIView, StoryAPIView

urlpatterns = [
    path('user/post/',PostAPIView.as_view() ),

    # likes
    path('post/likes/',LikeAPIView.as_view() ),
    path('post/likes/<int:id>/',LikeAPIView.as_view() ),

    # comment
    path('comment/',CommentAPIView.as_view() ),
    path('comment/<int:id>/',CommentAPIView.as_view() ),
    
    # story
    path('user/stories/',StoryAPIView.as_view() ),
    
    # followers
    path('user/followers/',FollowerAPIView.as_view() ),
]
