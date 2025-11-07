from django.shortcuts import render
from rest_framework import viewsets
from .models import Carrito, ItemCarrito
from .serializer import CarritoSerializer,ItemCarritoSerializer

class CarritoViewSet(viewsets.ModelViewSet):
    queryset = Carrito.objects.all()
    serializer_class = CarritoSerializer

class ItemCarritoViewSet(viewsets.ModelViewSet):
    queryset = ItemCarrito.objects.all()
    serializer_class = ItemCarritoSerializer
# Create your views here.
