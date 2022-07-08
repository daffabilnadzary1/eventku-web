from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from .models import Event
from .forms import emailForm
from .flask_mail import generate_mail

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

# def translate_post(request):
#     if request.method == 'POST':
#         form = TranslatorInputForm(request.POST, request.FILES)
#         if form.is_valid():
#             translation_result = translate(request.POST['text'], request.POST['source_language'], request.POST['target_language'])
#             context['result'] = translation_result
#             context['selected_source'] = request.POST['source_language']
#             context['selected_target'] = request.POST['target_language']
#         return redirect(reverse('index'))

class paymentSuccess(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'paymentSuccess.html')

    def post(self, request, *args, **kwargs):
        email_form = emailForm(request.POST)
        if email_form.is_valid():
            email = email_form.cleaned_data['email']
            print(email)
            generate_mail(email)
        return render(request, 'paymentSuccess.html')

class login(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'login.html')