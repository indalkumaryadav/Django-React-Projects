from rest_framework import serializers
from .models import Follower, Post,Story,Like,Comment

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Post
        fields=["id","title","image","like","comment","user","profile"]
        depth=5
    
    def getimage(self, *args, **kwargs):
        request = self.context.get('request')
        return request.url(image)

class UserStorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Story
        fields="__all__"
        depth=2
    
    def getimage(self, *args, **kwargs):
        request = self.context.get('request')
        return request.url(image)


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Like
        fields=["id","liked_by","user","post"]
        depth=3

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Comment
        fields=["id","post","value"]
        
class FollowerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Follower
        fields=["id","user","followed_by"]