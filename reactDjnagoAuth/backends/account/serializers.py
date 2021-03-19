from rest_framework import serializers
from .models import NewUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ("id",'email','password')
        extra_kwargs = {'password':{'write_only':True,'required':True}}

    def create(self,validated_data):
        user = NewUser.objects.create_user(**validated_data)
        return user