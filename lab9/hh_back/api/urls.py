from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', list_company),
    path('companies/<int:id>/', get_company),
    path('companies/<int:id>/vacancies/', vacancies_of_company),
    path('vacancies/', list_vacancy),
    path('vacancies/<int:id>/', get_vacancy),
    path('vacancies/top_ten/', top_ten_vacancies),
]