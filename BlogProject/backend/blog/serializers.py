from account.serializers import UserSerializer
from account.serializers import UserProfileSerializer
from .models import Blog, BlogComment, BlogLike
from rest_framework import serializers

class BlogCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model=BlogComment
        fields=['id','content','profile']
        
class BlogLikeSerializer(serializers.ModelSerializer):
    liked_by=UserSerializer()
    class Meta:
        model=BlogLike
        fields=['id','liked_by']


class BlogSerializer(serializers.ModelSerializer):
    comment=BlogCommentSerializer(many=True)
    like=BlogLikeSerializer(many=True)
    profile=UserProfileSerializer()
    class Meta:
        model=Blog
        fields=['id','title','created_at','image','user','comment','profile','like']
        
    def getimage(self, *args, **kwargs):
        request = self.context.get('request')
        return request.url(image)

