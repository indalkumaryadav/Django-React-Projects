from .serializers import BlogSerializer
from .models import Blog
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.settings import api_settings
from rest_framework.pagination import PageNumberPagination
from .mixins import MyPaginationMixin

# in order to implements mixins we have to pass the MyPaginationMixin
class BlogAPIView(APIView): 
    # queryset = Blog.objects.all()
    # serializer_class = BlogSerializer
    pagination_class = api_settings.DEFAULT_PAGINATION_CLASS
    
    def get(self,request,pk=None):
        # page = self.paginate_queryset(self.queryset)
        # if page is not None:
        #     serializer = self.serializer_class(page, many=True)
        #     return self.get_paginated_response(serializer.data)

        if pk is not None:
            blog=Blog.objects.get(id=pk)
            blog_ser=BlogSerializer(blog,context={'request':request})
            return Response(blog_ser.data)

        page = self.paginate_queryset(Blog.objects.all())
        if page is not None:
            serializer = BlogSerializer(page, many=True,context={'request':request})
            return self.get_paginated_response(serializer.data)

        serializer = BlogSerializer(Blog.objects.all(), many=True,context={'request':request})
        return Response(serializer.data)

    
    @property
    def paginator(self):
        """
        The paginator instance associated with the view, or `None`.
        """
        if not hasattr(self, '_paginator'):
            if self.pagination_class is None:
                self._paginator = None
            else:
                self._paginator = self.pagination_class()
        return self._paginator

    def paginate_queryset(self, queryset):
        """
        Return a single page of results, or `None` if pagination is disabled.
        """
        if self.paginator is None:
            return None
        return self.paginator.paginate_queryset(queryset, self.request, view=self)

    def get_paginated_response(self, data):
        """
        Return a paginated style `Response` object for the given output data.
        """
        assert self.paginator is not None
        return self.paginator.get_paginated_response(data)