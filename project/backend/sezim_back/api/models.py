from django.db import models
from django.contrib.auth.models import User

class BouquetCategory(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Bouquet(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    quantity = models.IntegerField()
    in_stock = models.BooleanField()
    image = models.TextField()
    category = models.ForeignKey(BouquetCategory, on_delete=models.CASCADE)
    # image = models.ImageField()

    def __str__(self):
        return self.name


class Order(models.Model):
    order_number = models.IntegerField()
    total = models.FloatField()
    adress = models.TextField()
    phone_number = models.TextField()
    customer_name = models.CharField(max_length=255)

    user = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name='order', 
        null=True, 
        blank=True
    )

    def __str__(self):
        return self.order_number 
    

class OrderItem(models.Model):
    quantity = models.IntegerField()
    bouquet = models.ForeignKey(Bouquet, on_delete=models.CASCADE)

    def __str__(self):
        return self.bouquet.name


# class BouquetManager(models.Manager):
#     def get_queryset(self):
#         return super().get_queryset().filter()
    


# Create your models here.
