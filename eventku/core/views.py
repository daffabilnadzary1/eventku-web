from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from .models import Event
from .mailapp.app import send_group_invitation
from .forms import emailForm

# Create your views here.

@method_decorator(login_required,name='dispatch')
class Home(View):
    def get(self, request, *args, **kwargs):
        events = Event.objects.all()

        return render(request, 'index.html', {
            'events':events
        })

@method_decorator(login_required,name='dispatch')
class eventDetail(View):
    def get(self, request, event_id, *args, **kwargs):
        try:
            event = Event.objects.get(uuid = event_id)
            return render(request, 'eventDetail.html', {
                'event': event
            })
        except Event.DoesNotExist:
            return redirect('core:login')

    def post(self, request, event_id, *args, **kwargs):
        event = Event.objects.get(uuid = event_id)
        if request.method == "POST":
          # Get the posted form
            email_form = emailForm(request.POST)
            
            if email_form.is_valid():
                # do anything here
                email = email_form.cleaned_data['email']
                print(email)
                send_group_invitation()
                return render(request, 'eventDetail.html', {
                    'event': event
                })

class paymentSuccess(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'paymentSuccess.html')

class login(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'login.html')