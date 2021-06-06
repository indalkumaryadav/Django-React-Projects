from .serializers import UserProfileSerializer, UserSerializer
from .models import User, UserProfile
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
# Create your views here.


class UserAPIView(APIView):
  
    def get(self,request,username=None):
        if username is not None:
            user=User.objects.get(username=username)
            user_ser=UserSerializer(user,context={'request':request})
            return Response(user_ser.data)
        user=User.objects.get(id=request.user.id)
        user_ser=user_ser=UserSerializer(user,context={'request':request})
        return Response(user_ser.data)


class ProfileAPIView(APIView):
    permission_classes=[IsAuthenticated]
    authentication_classes=[JWTAuthentication]

    def get(self,request):
        user=User.objects.get(id=request.user.id)
        user_ser=UserSerializer(user,context={'request':request})
        return Response(user_ser.data)