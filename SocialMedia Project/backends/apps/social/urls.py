from django.contrib import admin
from django.urls import path
from .views import CommentAPIView, FollowerAPIView, FollowingAPIView, PostAPIView,LikeAPIView, SearchAPIView, StoryAPIView

urlpatterns = [
    path('user/post/',PostAPIView.as_view() ),
    path('user/post/<int:pk>/',PostAPIView.as_view() ),

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
    
    # followers
    path('user/following/',FollowingAPIView.as_view() ),
    path('user/following/<int:pk>/',FollowingAPIView.as_view() ),

    # search
    path('users/<str:q>/',SearchAPIView.as_view() ),

]
