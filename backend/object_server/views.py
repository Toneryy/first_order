from django.shortcuts import render
import json

# Create your views here.
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .models import *

@csrf_exempt
def savePhoneEntity(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        obj = PhoneEntity.objects.create(
            phoneNumber=data['phoneNumber'], 
            status="Ожидает ответа"
        )

@csrf_exempt
def saveFullRequsetEntity(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        obj = RequestEntity.objects.create(
            name=data['name'],
            phoneNumber=data['phoneNumber'], 
            location=data['location'], 
            date=data['date'],
            status="Ожидает ответа"
        )

def index(request):
    return render(request, "index.html")