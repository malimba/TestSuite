from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth import authenticate, login
from .forms import *
import json

# Create your views here.

#handle ajax requests
def is_ajax(request):
    return request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'

#signup view
def Signup(request):
    if request.method == 'GET':
        return render(request, 'getstarted.html')
    if is_ajax(request) and request.method == "POST":
        #init empty form
        form = SignupForm(request.POST or None)
        #return values for ajax request
        successful_json = {'value': True}
        unsuccessful_json = {'value':False}
        if form.is_valid():
            new_user = form.save(commit=False)
            #generate user hash
            new_user.hash_password()
            new_user.save()
            return HttpResponse(json.dumps(successful_json))
        return HttpResponse(json.dumps(unsuccessful_json))

#login view
def Login(request):
    if request.method == 'GET':
        return render(request, 'loginPage.html')
    if request.method == "POST":
        return redirect('mainsite:Home')
    if is_ajax(request) and request.method == "POST":
        #for ajax response
        successful_json = {'value':True}
        unsuccessful_json = {'value':False}
        form = LoginForm(request.POST or None)
        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            user = authenticate(request, email=email, password=password)
            if user is not None:
                login(request, user)
                #send success message to ajax server
                return HttpResponse(json.dumps(successful_json))
            #send unsuccess message to ajax server
            return HttpResponse(json.dumps(unsuccessful_json))