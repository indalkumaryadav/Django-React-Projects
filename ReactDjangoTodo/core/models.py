from django.db import models

# Create your models here.
class Todo(models.Model):
    title=models.CharField(max_length=200)
    date=models.DateTimeField(auto_now_add=True)
    complete=models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title}"