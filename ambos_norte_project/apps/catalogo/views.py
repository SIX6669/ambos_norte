from django.shortcuts import render
from rest_framework import viewsets
from .models import Categoria, Producto, ImagenProducto
from .serilizer import CategoriaSerializar, ProductoSerializer, ImagenProductoSerializer

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializar

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class ImagenProductoViewSet(viewsets.ModelViewSet):
    queryset = ImagenProducto.objects.all()
    serializer_class = ImagenProductoSerializer
# Create your views here.
