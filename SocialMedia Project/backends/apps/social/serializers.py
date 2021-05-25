from apps.userprofile.serializers import UserProfileSerializer
from apps.account.serializers import UserSerializer
from rest_framework import serializers
from .models import Follower, Following, Post,Story,Like,Comment


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Like
        fields=["id","liked_by","user","post"]
        depth=3


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model=Post
        fields=["id","title","image","like","comment","user","profile"]
        depth=6
    
    def getimage(self, *args, **kwargs):
        request = self.context.get('request')
        return request.url(image)

class UserStorySerializer(serializers.ModelSerializer):
    story=UserSerializer(read_only=True)
    class Meta:
        model=Story
        fields=["id","image","story","user"]
        depth=2
    
    def getimage(self, *args, **kwargs):
        request = self.context.get('request')
        return request.url(image)



class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Comment
        fields=["id","post","title","commented_by"]
        
class FollowerSerializer(serializers.ModelSerializer):
    followed_by=UserSerializer(read_only=True)
    class Meta:
        model=Follower
        fields=["id","followed_by","user"]
        depth=2
        

class FollowingSerializer(serializers.ModelSerializer):
    following_by=UserSerializer(read_only=True)

    class Meta:
        model=Following
        fields=["id","following_by","user","is_following"]
        depth=2