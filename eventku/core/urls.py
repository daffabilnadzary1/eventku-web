from django.urls import path
from .views import Home, eventDetail, paymentSuccess, login

app_name = 'core'

urlpatterns = [
    path('', Home.as_view()),
    path('detail/', eventDetail.as_view(), name = 'event_detail'),
    path('payment_success/', paymentSuccess.as_view(), name = 'payment_success'),
    path('login/', login.as_view(), name = "login"),
]