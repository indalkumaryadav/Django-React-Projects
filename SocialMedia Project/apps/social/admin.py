from django.contrib import admin
from .models import Following, Post,Story,Like,Comment,Follower
# Register your models here.

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display=["id","user","image","title","created_at"]

@admin.register(Like)
class LikeAdmin(admin.ModelAdmin):
    list_display=["user","post","liked_by"]

admin.site.register(Story)
admin.site.register(Comment)
admin.site.register(Follower)
admin.site.register(Following)