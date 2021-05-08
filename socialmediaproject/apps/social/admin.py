from django.contrib import admin
from .models import Story,Post
# Register your models here.

admin.site.register(Post)
admin.site.register(Story)