from django.contrib import admin
from .models import Event, CustomUser

# Register your models here.
admin.site.register(Event)
admin.site.register(CustomUser)