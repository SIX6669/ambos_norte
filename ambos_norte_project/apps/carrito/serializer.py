from rest_framework import serializers
from .models import Carrito, ItemCarrito

class CarritoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrito
        fields = '__all__'
        read_only = ('fecha_creacion','fecha_modificacion',)

class ItemCarritoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemCarrito
        fields = '__all__'
        read_only = ('fecha_agregado',)