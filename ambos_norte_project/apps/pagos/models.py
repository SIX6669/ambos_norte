from django.db import models
from pedidos.models import Pedido
# Create your models here.
class Pago(models.Model):
    
    ESTADO_CHOICES = [
        ('pendiente', 'Pendiente'),
        ('aprobado', 'Aprobado'),
        ('rechazado', 'Rechazado'),
        ('reembolsado', 'Reembolsado'),
    ]
    
    pedido = models.OneToOneField(
        Pedido, 
        on_delete=models.CASCADE, 
        related_name='pago'
    )
    id_mercadopago = models.CharField(max_length=255, unique=True, blank=True, null=True)
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    metodo_pago = models.CharField(max_length=100, blank=True, null=True)
    estado_pago = models.CharField(
        max_length=20, 
        choices=ESTADO_CHOICES, 
        default='pendiente'
    )
    fecha_pago = models.DateTimeField(blank=True, null=True)
    datos_mercadopago = models.JSONField(blank=True, null=True)  # Almacenar respuesta completa de MP
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'pagos'
        verbose_name = 'Pago'
        verbose_name_plural = 'Pagos'
        ordering = ['-fecha_creacion']
    
    def __str__(self):
        return f"Pago {self.id_mercadopago} - {self.pedido.numero_pedido}"