from django.urls import path
from .views import Home, eventDetail, paymentSuccess, login

app_name = 'core'

urlpatterns = [
    path('', Home.as_view()),
    path('detail/<str:event_id>/', eventDetail.as_view(), name = 'event_detail'),
    #path('email_invite', inviteEmail.as_view(), name = 'email_invite'),
    #path('detail/<str:event_id>/email_invite/<str:email>/', inviteEmail),
    path('detail/<str:event_id>/payment_success/', paymentSuccess.as_view(), name = 'payment_success'),
]