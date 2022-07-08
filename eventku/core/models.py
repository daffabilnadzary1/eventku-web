from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

AGE_CHOICES = (
    ('All', 'All'),
    ('Kids', 'Kids')
)

MOVIE_CHOICES = (
    ('seasonal', 'Seasonal'),
    ('single', 'Single')
)

# Create your models here.
class CustomUser(AbstractUser):
    profiles = models.ManyToManyField('Profile', blank = True)

class Profile(models.Model):
    name = models.CharField(max_length = 225)
    age_limit = models.CharField(max_length = 10, choices = AGE_CHOICES)
    uuid = models.UUIDField(default = uuid.uuid4)

class Event(models.Model):
    title = models.CharField(max_length=225)
    description = models.TextField(blank = True, null = True)
    uuid = models.UUIDField(default = uuid.uuid4)
    location = models.CharField(max_length = 225)
    terms = models.TextField(blank = True, null = True)
    event_pic = models.ImageField(upload_to = 'events')
    venue_pic = models.ImageField(upload_to = 'venues')
    date = models.DateField()
    time = models.TimeField()