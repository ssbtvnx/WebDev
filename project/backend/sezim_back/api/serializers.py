from rest_framework import serializers
from .models import Bouquet, BouquetCategory, Order, OrderItem

class BouquetSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=BouquetCategory.objects.all())
    class Meta:
        model = Bouquet
        fields = '__all__'

class BouquetCategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)

    def create(self, validated_data):
        return BouquetCategory.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

    def create(self, validated_data):
        bouquets = validated_data.pop('bouquets')
        order = Order.objects.create(**validated_data)
        order.user = self.context['request'].user
        for bouquet in bouquets:
            order.products.add(bouquet)
        return order
    
class OrderItemSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    quantity = serializers.IntegerField()
    bouquet_id = serializers.PrimaryKeyRelatedField(queryset=Bouquet.objects.all())

    def create(self, validated_data):
        return OrderItem.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.quantity = validated_data.get('quantity', instance.quantity)
        instance.bouquet_id = validated_data.get('bouquet_id', instance.bouquet_id)
        instance.save()
        return instance

    # def delete(self, instance):

        
