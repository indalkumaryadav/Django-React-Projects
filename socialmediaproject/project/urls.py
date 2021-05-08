from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    # auth
    path('api/account/',include("apps.account.urls") ),
    path('api/user/',include("apps.userprofile.urls") ),
    # Oauth
    path('auth/', include('rest_framework_social_oauth2.urls')),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
