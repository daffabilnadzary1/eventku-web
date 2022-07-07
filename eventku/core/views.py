from django.shortcuts import render, redirect
from django.views import View

# Create your views here.

class Home(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'index.html')

class eventDetail(View):
    def get(self, request,*args, **kwargs):
        return render(request, 'eventDetail.html')

class paymentSuccess(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'paymentSuccess.html')