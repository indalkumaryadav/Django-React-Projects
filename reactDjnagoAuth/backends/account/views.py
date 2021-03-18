from django.shortcuts import render
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

class UserAPIView(APIView):
    
    def post(self,request):
        user=User.objects.create()
        user_serializer=UserSerializer(user,many=True)
        return Response(user_serializer.data)