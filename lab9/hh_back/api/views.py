from django.shortcuts import render
from .models import *
from django.http import HttpResponse, JsonResponse

def list_company(request):
    companies = list(Company.objects.values())
    return JsonResponse(companies, safe=False)


def get_company(request, id):
    companies = list(Company.objects.filter(id = id).values())
    return JsonResponse(company, safe=False)


def vacancies_of_company(request, id):
    vacancies = list(Vacancy.objects.filter(company = id).values())
    return JsonResponse(vacancies, safe=False)
    
    
def list_vacancy(request):
    vacancies = list(Vacancy.objects.values())
    return JsonResponse(vacancies, safe=False)


def get_vacancy(request, id):
    vacancies = list(Vacancy.objects.filter(id = id).values())
    return JsonResponse(vacancy, safe=False)


def top_ten_vacancies(request):
    top_ten_vacancies = list(Vacancy.objects.order_by('-salary')[:10].values())
    return JsonResponse(top_ten_vacancies, safe=False)
