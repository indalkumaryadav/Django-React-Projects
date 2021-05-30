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

    def put(self,request,pk):
        profile=UserProfile.objects.get(user=request.user)
        profile_ser=UserProfileSerializer(profile,data=request.data ,partial=True,context={'request':request})
        if profile_ser.is_valid():
            profile_ser.save()
            return Response(profile_ser.data)
        return Response(profile_ser.errors)
    
