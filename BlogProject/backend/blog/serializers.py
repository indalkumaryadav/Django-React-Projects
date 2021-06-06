from account.serializers import UserProfileSerializer
from .models import Blog
from rest_framework import serializers

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model=Blog
        fields=['id','title','created_at','image','user','profile']
        depth=2
    def getimage(self, *args, **kwargs):
        request = self.context.get('request')
        return request.url(image)

