from .serializers import ProductSerializer
from .models import Product
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination


class ProductAPIView(APIView):
    
    def get(self,request):
        obj=Product.objects.all()
        paginator = PageNumberPagination()
        paginator.page_size = 1
        result = paginator.paginate_queryset(obj, request)
        obj_ser=ProductSerializer(result,many=True)
        return paginator.get_paginated_response(obj_ser.data)

    
    def post(self,request):
        pass


    def update(self,request):
        pass
    

    def delete(self,request):
        pass
    
    def patch(self,request):
        pass