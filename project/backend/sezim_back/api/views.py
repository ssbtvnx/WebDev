from django.shortcuts import render
from django.http import JsonResponse, Http404
from django.shortcuts import get_object_or_404
from api.models import BouquetCategory, Bouquet, Order, OrderItem
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .serializers import BouquetSerializer, BouquetCategorySerializer, OrderSerializer, OrderItemSerializer
from rest_framework import response

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated, ])
def bouquet_category_list(request):
    if request.method == 'GET':
        categories =  BouquetCategory.objects.all()
        serializer = BouquetCategorySerializer(categories, many=True )
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = BouquetCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated, ])
def bouquet_list(request):
    if request.method == 'GET':
        bouquets = Bouquet.objects.all()
        serializer = BouquetSerializer(bouquets, many = True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = BouquetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view() 
@permission_classes([IsAuthenticated, ])
def bouquet_by_id(request, id): 
    if request.method == 'GET': 
        bouquet = Bouquet.objects.filter(id = int(id))[0] 
        serializer = BouquetSerializer(bouquet) 
        return Response(serializer.data) 


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated, ])
def bouquet_category_detail(request, pk):
    try:
        category = BouquetCategory.objects.get(pk=pk)
        bouquets = Bouquet.objects.filter(category=category)
    except BouquetCategory.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = BouquetSerializer(bouquets, many = True)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = BouquetCategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class OrderItemList(APIView):
    permission_classes = (IsAuthenticated, )
    def get(self, request):
        order_items = OrderItem.objects.all()
        serializer = OrderItemSerializer(order_items, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = OrderItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OrderItemDetail(APIView):
    permission_classes = (IsAuthenticated, )
    def get_object(self, pk):
        try:
            return OrderItem.objects.get(pk=pk)
        except OrderItem.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        order_item = self.get_object(pk)
        serializer = OrderItemSerializer(order_item)
        return Response(serializer.data)

    def put(self, request, pk):
        order_item = self.get_object(pk)
        serializer = OrderItemSerializer(order_item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        order_item = self.get_object(pk)
        order_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class OrderView(APIView):
    permission_classes = (IsAuthenticated, )
    def get(self, request, pk=None):
        try:
            order = Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        serializer = OrderSerializer(order)
        return Response(serializer.data)
    
    def post(self, request, pk = None):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        try:
            order = Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def put(self, request, pk=None):
        try:
            order = Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderListView(APIView):
    permission_classes = (IsAuthenticated, )
    def get(self, request):
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = OrderSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# def bouquet_list(request):

# Create your views here.
