from django.urls import path
from .views import *

app_name = 'mainsite'

urlpatterns = [
    path('', welcome, name='welcome'),
    path('home', Home, name='Home'),
    path('courses', coursesView, name='courses'),
    path('details', courseOverview, name='cdetails'),
    path('checkout', checkout, name='checkout'),
]