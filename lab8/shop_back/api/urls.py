from django.urls import path
from . views import *

urlpatterns = [
    path('products/', product_list, name='product_list'),
    path('products/<int:id>/', get_product, name='get_product'),
    path('categories/', category_list, name='category_list'),
    path('categories/<int:id>/', get_category, name='get_category'),
    path('categories/<int:id>/products/', category_products, name='category_products'),
]