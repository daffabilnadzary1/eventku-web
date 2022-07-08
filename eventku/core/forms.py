from django.forms import ModelForm
from django import forms

class emailForm(forms.Form):
   email = forms.CharField(max_length = 100)