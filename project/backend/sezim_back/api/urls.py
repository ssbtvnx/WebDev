from django.urls import path, re_path 
from api.views import * 
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView 
 
urlpatterns = [ 
    path('categories/', bouquet_category_list), 
    path('categories/<int:pk>', bouquet_category_detail), 
    path('bouquet/', bouquet_list), 
    path('bouquet/<str:id>/', bouquet_by_id), 
    path('order_item/', OrderItemList.as_view()), 
    path('order_item/<int:pk>', OrderItemDetail.as_view()), 
    path('order/', OrderListView.as_view()), 
    path('order/<int:pk>',OrderView.as_view()), 
    path('login/', TokenObtainPairView.as_view()), 
    path('refresh/', TokenRefreshView.as_view()), 
]
