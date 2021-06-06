from account.models import UserProfile
from django.db import models
from account.models import User
# Create your models here.

class Blog(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE,related_name="post")
    profile=models.ForeignKey(UserProfile, on_delete=models.CASCADE,related_name="userprofile")
    title=models.CharField(max_length=250)
    image=models.ImageField(upload_to="blog/")
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)