from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from .models import Event

# Create your views here.

@method_decorator(login_required,name='dispatch')
class Home(View):
    def get(self, request, *args, **kwargs):
        events = Event.objects.all()

        return render(request, 'index.html', {
            'events':events
        })

class eventDetail(View):
    def get(self, request,*args, **kwargs):
        return render(request, 'eventDetail.html')

class paymentSuccess(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'paymentSuccess.html')

class login(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'login.html')