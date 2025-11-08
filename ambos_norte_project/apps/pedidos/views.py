from django.shortcuts import render
from rest_framework import viewsets
from .models import Pedido, ItemPedido, HistorialEstadoPedido
from .serializers import PedidoSerializer, ItemPedidoSerializer, HistorialEstadoPedidoSerializer

class PedidoViewSet(viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer

class ItemPedidoSetView(viewsets.ModelViewSet):
    queryset = ItemPedido.objects.all()
    serializer_class = ItemPedidoSerializer

class HistorialEstadoPedidoViewSet(viewsets.ModelViewSet):
    queryset = HistorialEstadoPedido.objects.all()
    serializer_class = HistorialEstadoPedidoSerializer


# Create your views here.
