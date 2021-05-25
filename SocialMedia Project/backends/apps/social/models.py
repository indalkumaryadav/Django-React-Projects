from django.db import models
from apps.account.models import User
from apps.userprofile.models import UserProfile
# Create your models here.

class Post(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name="post")
    profile=models.ForeignKey(UserProfile,on_delete=models.CASCADE,related_name="profile")
    image=models.ImageField(upload_to="post/")
    title=models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title}--{ self.user }"

class Story(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name="story")
    image=models.ImageField(upload_to="story/")

    def __str__(self):
        return f"{ self.user }"


class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name="like")
    post = models.ForeignKey(Post, on_delete=models.CASCADE,related_name="like")
    profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE,related_name="like_profile")
    liked_by=models.ForeignKey(User, on_delete=models.CASCADE,related_name="liked_by")
    create = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{ self.post } liked_by-{ self.liked_by }"


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name="user_comment")
    post = models.ForeignKey(Post, on_delete=models.CASCADE,related_name="comment")
    title = models.CharField(max_length=200)
    commented_by=models.ForeignKey(User, on_delete=models.CASCADE,related_name="commented_by")
    profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE,related_name="comment_profile")
    create = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{ self.post }- commented_by -{ self.user.email }"


class Follower(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name="follower")
    followed_by=models.ForeignKey(User,on_delete=models.CASCADE,related_name="followed_by")
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.followed_by}"
    
class Following(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name="following")
    following_by=models.ForeignKey(User,on_delete=models.CASCADE,related_name="following_by")
    is_following=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.following_by}"
