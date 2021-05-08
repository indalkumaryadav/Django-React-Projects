from django.db import models
from apps.account.models import User
# Create your models here.

class Post(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name="post")
    image=models.ImageField(upload_to="post/",blank=True,null=True)
    description=models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



class Story(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name="story")
    image=models.ImageField(upload_to="story/")