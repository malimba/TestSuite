from django.urls import path
from .views import *

app_name = "users"

urlpatterns = [
    path('signup', Signup, name="Signup"),
    path('login', Login, name="Login"),
]