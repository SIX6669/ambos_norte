from rest_framework import serializers
from .models import Pedido, ItemPedido, HistorialEstadoPedido

class PedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedido
        fields = '__all__'
        read_only = ('numero_pedido','fecha_pedido','fecha_actualizacion')

class ItemPedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemPedido
        fields = '__all__'

class HistorialEstadoPedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemPedido
        fields = '__all__'
        reas_only = ('estado_anterior', 'fecha_cambio')