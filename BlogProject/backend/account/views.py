from backend.account.serializers import UserProfileSerializer, UserSerializer
from django.shortcuts import render
from .models import User, UserProfile
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
# Create your views here.


class UserAPIView(APIView):
    
    def get(self,request,pk=None):
        if pk is not None:
            user=User.objects.get(pk=pk)
            user_ser=UserSerializer(user,context={'request':request})
            return Response(user_ser.data)

        user=User.objects.all()
        user_ser=user_ser=UserSerializer(user,many=True,context={'request':request})
        return Response(user_ser.data)

    def post(self,request):
        user=UserSerializer(data=request.data,context={'request':request})
        if user.is_valid():
            user.save()
            return Response({
                'message':True,
                'data':user.data
            })
        return Response({
            'message':False,
            'data':user.errors
        })

    def patch(sefl,request,pk=None):
        user=User.objects.get(pk=pk)
        user_ser=UserSerializer(user,data=request.data,context={'request':request},partial=True)
        if user_ser.is_valid():
            user_ser.save()
            return Response(user_ser.data)
        return Response(user.errors)
        

    def delete(self,request,pk=None):
        try:
            if pk is not None:
                user=User.objects.get(pk=pk)
                user.delete()
                return Response({'error':False,'message':'successfully user deleted'})
        except User.DoesNotExist:
            return Response({'error':True,'message':'user not exists!'})


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
    
