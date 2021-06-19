from account.models import UserProfile
from django.db import models
from account.models import User
from ckeditor.fields import RichTextField
# Create your models here.

class Blog(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE,related_name="post")
    profile=models.ForeignKey(UserProfile, on_delete=models.CASCADE,related_name="userprofile")
    title=models.TextField(max_length=200)
    content=RichTextField()
    image=models.ImageField(upload_to="blog/",blank=True,null=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    def comment(self):
        return self.blogcomment_set.all()

   

class BlogComment(models.Model):
    blog=models.ForeignKey(Blog,on_delete=models.CASCADE,related_name="comment")
    commented_by=models.ForeignKey(User, on_delete=models.CASCADE,related_name="commented_by")
    profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE,related_name="comment_profile")
    content = models.TextField(max_length=1000)
    created_at=models.DateTimeField(auto_now_add=True)

class BlogLike(models.Model):

    blog=models.ForeignKey(Blog,on_delete=models.CASCADE,related_name="like")
    print(blog)
    liked_by=models.ForeignKey(User, on_delete=models.CASCADE,related_name="liked_by")
    created_at=models.DateTimeField(auto_now_add=True)