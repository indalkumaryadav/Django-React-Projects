from rest_framework import serializers
from .models import  User, UserProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields="__all__"
        extra_kwargs = {'password':{'write_only':True,'required':True}}
        depth=2
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserProfile
        fields='__all__'
        
    def getimage(self, *args, **kwargs):
        request = self.context.get('request')
        return request.url(image)