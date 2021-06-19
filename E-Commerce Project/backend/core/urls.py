from django.conf.urls import include
from django.contrib import admin
from django.urls import path,include
from rest_framework.documentation import get_schema_view
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("store.urls")),
    path('', include_docs_urls(title='Product API')),
    # path('docs/', get_schema_view(title="My API",version=1),name="openapi-schema"),
]
