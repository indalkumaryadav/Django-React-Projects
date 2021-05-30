from rest_framework import serializers
from apps.account.models import User
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserProfile
        fields='__all__'
        
    def getimage(self, *args, **kwargs):
        request = self.context.get('request')
        return request.url(image)
