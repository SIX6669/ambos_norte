from django.contrib import admin
from .models import Pago
# Register your models here.
@admin.register(Pago)
class PagoAdmin(admin.ModelAdmin):
    list_display = ['id_mercadopago', 'pedido', 'monto', 'estado_pago', 'fecha_pago']
    list_filter = ['estado_pago']
    search_fields = ['id_mercadopago', 'pedido__numero_pedido']