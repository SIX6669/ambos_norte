from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.core.exceptions import ValidationError
from .models import Categoria, Producto, ImagenProducto
from .serilizer import CategoriaSerializar, ProductoSerializer, ImagenProductoSerializer

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializar

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

    @action(detail=True, methods=['post'])
    def reducir_stock(self, request, pk=None):
        producto = self.get_object()
        cantidad = int(request.data.get('cantidad',1))
        try:
            producto.reducir_stock(cantidad)
            return Response({'mensaje': 'Stock reducido correctamente.'})
        except ValidationError as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['post'])
    def aumentar_stock(self, request, pk=None):
        producto = self.get_object()
        cantidad = int(request.data.get('cantidad',1))
        try:
            producto.aumentar_stock(cantidad)
            return Response({'La cantidad del estock bajo'})
        except ValidationError as e:
            return Response({'Error por aqui': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class ImagenProductoViewSet(viewsets.ModelViewSet):
    queryset = ImagenProducto.objects.all()
    serializer_class = ImagenProductoSerializer
# Create your views here.
