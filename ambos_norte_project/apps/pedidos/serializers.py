from rest_framework import serializers
from .models import Pedido, ItemPedido, HistorialEstadoPedido


class ItemPedidoSerializer(serializers.ModelSerializer):
    """Serializer para items de pedido"""
    nombre_producto = serializers.CharField(source='producto.nombre', read_only=True)
    
    class Meta:
        model = ItemPedido
        fields = '__all__'


class HistorialEstadoPedidoSerializer(serializers.ModelSerializer):
    """Serializer para historial con info del usuario"""
    usuario_nombre = serializers.SerializerMethodField()
    
    class Meta:
        model = HistorialEstadoPedido
        fields = '__all__'
        read_only_fields = ('fecha_cambio',)
    
    def get_usuario_nombre(self, obj):
        if obj.usuario_modificador:
            if obj.usuario_modificador.first_name:
                return f"{obj.usuario_modificador.first_name} {obj.usuario_modificador.last_name}".strip()
            return obj.usuario_modificador.username
        return "Sistema"


class PedidoSerializer(serializers.ModelSerializer):
    """Serializer completo para pedidos"""
    items = ItemPedidoSerializer(many=True, read_only=True)
    usuario_nombre = serializers.SerializerMethodField()
    usuario_email = serializers.SerializerMethodField()
    estado_display = serializers.CharField(source='get_estado_pedido_display', read_only=True)
    total_items = serializers.SerializerMethodField()
    direccion_info = serializers.SerializerMethodField()
    
    class Meta:
        model = Pedido
        fields = '__all__'
        read_only_fields = ('numero_pedido', 'fecha_pedido', 'fecha_actualizacion')
    
    def get_usuario_nombre(self, obj):
        if obj.usuario:
            if obj.usuario.first_name:
                return f"{obj.usuario.first_name} {obj.usuario.last_name}".strip()
            return obj.usuario.username
        return "Cliente Invitado"
    
    def get_usuario_email(self, obj):
        if obj.usuario:
            return obj.usuario.email
        return obj.email_contacto
    
    def get_total_items(self, obj):
        try:
            return obj.items.count()
        except:
            return 0
    
    def get_direccion_info(self, obj):
        """
        Devuelve la información de la dirección
        ✅ Solo con los campos que EXISTEN en el modelo Direccion
        """
        if obj.direccion:
            return {
                'id': obj.direccion.id,
                'calle': obj.direccion.calle,
                'numero': obj.direccion.numero,
                'piso_depto': obj.direccion.piso_depto,
                'ciudad': obj.direccion.ciudad,
                'provincia': obj.direccion.provincia,
                'codigo_postal': obj.direccion.codigo_postal,
            }
        return None