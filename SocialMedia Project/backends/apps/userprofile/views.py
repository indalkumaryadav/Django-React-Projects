from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from apps.account.models import User
from apps.account.serializers import UserSerializer
from .serializers import UserProfileSerializer
from .models import UserProfile


class ProfileAPIView(APIView):
    permission_classes=[IsAuthenticated]
    authentication_classes=[JWTAuthentication]

    def get(self,request,pk=None):
        if pk is not None:
            user_obj=User.objects.get(id=pk)
            user_ser=UserSerializer(user_obj,context={'request':request})
            return Response(user_ser.data)
        user_obj=User.objects.get(id=request.user.id)
        user_ser=UserSerializer(user_obj,context={'request':request})
        return Response(user_ser.data)
       
    def patch(self,request,pk=None):
        profile=UserProfile.objects.get(id=pk)
        profile_ser=UserProfileSerializer(profile,data=request.data ,partial=True,context={'request':request})
        if profile_ser.is_valid():
            profile_ser.save()
            return Response({'error':False,'message':'successfully updated!'})
        return Response(profile_ser.errors)
    
