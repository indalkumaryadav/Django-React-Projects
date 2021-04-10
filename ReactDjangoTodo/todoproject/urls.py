from django.contrib import admin
from django.urls import path,include,re_path
from django.views.generic import RedirectView,TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("core.urls") ),
    re_path('.*', TemplateView.as_view(template_name="index.html")),
    
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
