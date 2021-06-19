from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic.base import TemplateView
from rest_framework.documentation import get_schema_view
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("blog.urls")),
    path('api/account/', include("account.urls")),

    path('^et/', include('jet.urls')),  # Django JET URLS
    path('openapi', get_schema_view(
            title="Blog Project",
            description="API for all things …",
            version="1.0.0"
        ), name='openapi-schema'),
    path('', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url':'openapi-schema'}
    ), name='swagger-ui'),

    # token
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('ckeditor/', include('ckeditor_uploader.urls')),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
