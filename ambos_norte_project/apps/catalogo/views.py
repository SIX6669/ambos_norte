from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.core.exceptions import ValidationError
from .models import Categoria, Producto, ImagenProducto
from .serilizer import CategoriaSerializar, ProductoSerializer, ImagenProductoSerializer
from analytics.utils import AnalyticsTracker

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializar

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

    def retrieve(self, request, *args, **kwargs):
        """Override para trackear vista de producto"""
        instance = self.get_object()
        
        AnalyticsTracker.track_vista_producto(
            producto=instance,
            usuario=request.user if request.user.is_authenticated else None,
            session_id=request.session.session_key,
            request=request
        )
        
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def buscar(self, request):
        """
        Búsqueda de productos con tracking
        GET /api/producto/buscar/?q=remera
        """
        query = request.query_params.get('q', '')
        
        if not query:
            return Response({'error': 'Parámetro "q" requerido'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Buscar productos
        productos = Producto.objects.filter(
            nombre__icontains=query,
            activo=True
        ) | Producto.objects.filter(
            descripcion__icontains=query,
            activo=True
        )
        
        # ✨ Registrar búsqueda
        AnalyticsTracker.track_busqueda(
            query=query,
            usuario=request.user if request.user.is_authenticated else None,
            session_id=request.session.session_key,
            resultados_count=productos.count()
        )
        
        serializer = self.get_serializer(productos, many=True)
        return Response({
            'query': query,
            'count': productos.count(),
            'resultados': serializer.data
        })

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
