from django.db import models

# Create your models here.
from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)

    def str(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=100)

    def str(self):
        return self.name
