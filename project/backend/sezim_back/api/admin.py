from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Bouquet)
admin.site.register(BouquetCategory)
admin.site.register(Order)
admin.site.register(OrderItem)