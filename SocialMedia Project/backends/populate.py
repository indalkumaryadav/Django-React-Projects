import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')
import django
django.setup()
import random
from faker import Faker
from apps.account.models import User

fake = Faker()

def populate(N = 20):
    for entry in range(N):
        fake_username = fake.name()
        fake_email= fake.email()
        user = User.objects.get_or_create(username=fake_username, email=fake_email, password="indal1")

if __name__ == '__main__':
    print('Populating data...')
    populate(20)
    print('Populating complete')




# fake.name()
# fake.address()
# fake.email()
# fake.text()
# fake.country()