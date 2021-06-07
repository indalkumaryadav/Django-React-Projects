import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
import django
django.setup()
import random
from faker import Faker
from account.models import User,UserProfile
from blog.models import Blog

fake = Faker()
def populate(N = 100):
    for entry in range(N):
        fake_user=User.objects.get(id=1)
        fake_user_profile=UserProfile.objects.get(id=1)
        fake_title = fake.text()
        Blog.objects.get_or_create(user=fake_user, profile=fake_user_profile, title=fake_title)
        User.objects.create(username=fake.name(),email=fake.email(),password="indal1")

        

if __name__ == '__main__':
    print('Populating data...')
    populate()
    print('Populating complete')


# # fake.name()
# # fake.address()
# # fake.email()
# # fake.text()
# # fake.country()


