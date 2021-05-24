from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User
from rest_framework import status
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
        # if pk is not None:
        #     user=User.objects.get(pk=pk)
        #     user_ser=UserSerializer(user,data=request.data,context={'request':request},partial=True)
        #     if user_ser.is_valid():
        #         user_ser.save()
        #         return Response(user_ser.data)
        # return Response(user.errors)
        return Response({'message':'somethings went wrong!'})
        

    def delete(self,request,pk=None):
        try:
            if pk is not None:
                user=User.objects.get(pk=pk)
                user.delete()
                return Response({'error':False,'message':'successfully user deleted'})
        except User.DoesNotExist:
            return Response({'error':True,'message':'user not exists!'})