from django.db import models

# Create your models here.

def directory_path(instance,filename):
    return f'{instance.id}/{filename}'

class ProductCategory(models.Model):
    title=models.CharField(max_length=100)
    category_image=models.ImageField(upload_to=directory_path)

class Product(models.Model):
    title=models.CharField(max_length=200)