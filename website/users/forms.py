from django import forms
from .models import User

#signup form class
class SignupForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('fullname','email', 'password')

#login form class
class LoginForm(forms.Form):
    email = forms.CharField(max_length=255)
    password = forms.CharField(max_length=255)

