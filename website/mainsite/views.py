from django.shortcuts import render, redirect, HttpResponse
from django.views.generic import TemplateView

# Create your views here.

#handle ajax requests
def is_ajax(request):
    return request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'

#Index View
def welcome(request):
    if request.method == 'GET':
        return render(request, 'index.html')
def Home(request):
    if request.method == 'GET':
        return render(request, 'adminHome.html')

#multiple choice handler
def MCQuestionView(request):
    if request.method == 'GET':
        return render(request, 'multipleChoice.html')