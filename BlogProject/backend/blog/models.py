from django.db import models

# Create your models here.

class Blog(models.Model):
    title=models.CharField(max_length=250)
    image=models.ImageField(upload_to="blog/")
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)