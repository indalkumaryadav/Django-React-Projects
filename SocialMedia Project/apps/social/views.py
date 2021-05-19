from apps.account.serializers import UserSerializer
import re
from apps.userprofile.models import UserProfile
from apps.userprofile.serializers import UserProfileSerializer
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from apps.account.models import User
from .serializers import CommentSerializer, FollowerSerializer, FollowingSerializer, PostSerializer,LikeSerializer, UserStorySerializer
from .models import Comment, Follower, Following, Post,Like, Story
# Create your views here.

class PostAPIView(APIView):
    permission_classes=[IsAuthenticated]
    authentication_classes=[JWTAuthentication]

    def get(self,request, format=None):
        following=Following.objects.filter(user=request.user)

        allPost=[]
        for i in following:
            user=User.objects.get(email=i)
            post=Post.objects.filter(user=user)
            post_ser=PostSerializer(post,many=True,context={'request':request})
            allPost.append(post_ser.data)


        user_post_obj=Post.objects.filter(user=request.user).order_by('-id')
        user_post_sr=PostSerializer(user_post_obj,many=True,context={'request':request})
        return Response({
            'following_post':allPost,
            "current_user_post":user_post_sr.data
        })

    def post(self,request, format=None):
        Post.objects.create(
            user=request.user,
            profile=request.user.profile,
            title=request.data['title'],
            image=request.data['image']
        )
        return Response({
                'error':False,
                'message':"post added succesfully!",
            })


class LikeAPIView(APIView):
    permission_classes=[IsAuthenticated]
    authentication_classes=[JWTAuthentication]

    def get(self,request,id=None):
        post=Post.objects.get(id=id)
        like=Like.objects.filter(user=request.user).filter(post=post)
        like_ser=LikeSerializer(like,many=True)
        return Response(like_ser.data)
    
    def post(self,request):
        post=Post.objects.get(id=request.data['id'])
        like=Like.objects.filter(post=post)
        
        if like:
            liked_by=Like.objects.filter(user=request.user).filter(post=post)
            if(liked_by):
                return Response({
                'error':True,
                'message':'already liked'
            })
            else:
                Like.objects.create(
                user=request.user,
                profile=request.user.profile,
                post=post,
               liked_by=request.user
            )
            return Response({
                'message':'liked'
            })
        else:
            Like.objects.create(
                user=request.user,
                post=post,
                profile=request.user.profile,
                liked_by=request.user
            )
            return Response({
                'message':'liked'
            })
            
    def delete(self,request,id=None):
        post=Post.objects.get(id=id)
        like=Like.objects.filter(post=post).filter(user=request.user)
        like.delete()
        return Response({
            'message':'successfuly delete'
        })
        


class CommentAPIView(APIView):
    permission_classes=[IsAuthenticated]
    authentication_classes=[JWTAuthentication]

    def get(self,request,id=None):
        if id is not None:
            user_post=Post.objects.get(id=id)
            comment=Comment.objects.filter(post=user_post)
            comment_ser=CommentSerializer(comment,many=True)
            return Response(comment_ser.data)

    def post(self,request):
        id=request.data['id']
        title=request.data['title']
        user_post=Post.objects.get(id=id)
        comment=Comment.objects.create(
            user=request.user,
            post=user_post,
            value=title
        )
        comment_ser=CommentSerializer(comment)
        return Response({
            'error':False,
            'message':'success',
            'data':comment_ser.data
        })



# story api view
class StoryAPIView(APIView):
    permission_classes=[IsAuthenticated]
    authentication_classes=[JWTAuthentication]

    def get(self,request):
        user_obj=Story.objects.filter(user=request.user)
        user_story_ser=UserStorySerializer(user_obj,many=True,context={
            'request':request
        })
        return Response(user_story_ser.data)
    
    def post(self,request):
        user_story=Story.objects.create(
            user=request.user,
            image=request.data['image']
        )
        return Response({
            'error':False,
            'message':'successfully story created!'
        })


class FollowerAPIView(APIView):
    permission_classes=[IsAuthenticated]
    authentication_classes=[JWTAuthentication]

    def get(self,request):
        follower=Follower.objects.filter(user=request.user)
        follower_ser=FollowerSerializer(follower,many=True)
        return Response(follower_ser.data)

class FollowingAPIView(APIView):
    permission_classes=[IsAuthenticated]
    authentication_classes=[JWTAuthentication]

    def get(self,request,pk=None):
        if pk is not None:
            following=Following.objects.filter(id=pk)
            print(following)

            return Response({
                'message':'success'
            })
        following_user=Following.objects.filter(user=request.user)
        following_ser=FollowingSerializer(following_user,many=True,context={'request':request})
        return Response(following_ser.data)
    
    def post(self,request):
        user=User.objects.get(id=request.data['id'])
        print(user)
        following=Following.objects.filter(following_by=user)

        if following:
            following_by=Following.objects.filter(user=request.user).filter(following_by=user)
            if(following_by):
                return Response({
                'error':True,
                'message':'already following'
            })
            else:
                Following.objects.create(
                user=request.user,
                following_by=user,
            )
            return Response({
                'message':'following'
            })
        else:

            Following.objects.create(
                user=request.user,
                following_by=user,
            )
            return Response({
                'message':f'now you following {user}'
            })