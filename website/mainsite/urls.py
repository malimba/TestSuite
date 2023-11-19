from django.urls import path
from .views import *

app_name = 'mainsite'

urlpatterns = [
    path('', welcome, name='welcome'),
    path('home', Home, name='Home'),
    path('lms/newmultquestions', MCQuestionView, name="newmultquest")
]