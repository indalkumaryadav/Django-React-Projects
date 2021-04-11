from django.shortcuts import render
from .models import User
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.

class CreateUserAPIView(APIView):

    def post(self,request):
        user=UserSerializer(data=request.data)

        if user.is_valid():
            user.save()
            return Response({
            'error':False,
            'message':f'User {user.data["email"]} Created successfully '
        })
        return Response({
            'error':True,
            'message':'email already exists!'
        })
