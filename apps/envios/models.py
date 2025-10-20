from django.db import models
from pedidos.models import Pedido
# Create your models here.
class Envio(models.Model):
    """
    Información de envíos
    """
    ESTADO_CHOICES = [
        ('pendiente', 'Pendiente'),
        ('en_preparacion', 'En Preparación'),
        ('en_transito', 'En Tránsito'),
        ('entregado', 'Entregado'),
        ('devuelto', 'Devuelto'),
    ]
    
    pedido = models.OneToOneField(
        Pedido, 
        on_delete=models.CASCADE, 
        related_name='envio'
    )
    metodo_envio = models.CharField(max_length=100, blank=True, null=True)
    numero_seguimiento = models.CharField(max_length=100, blank=True, null=True)
    empresa_envio = models.CharField(max_length=100, blank=True, null=True)
    
    estado_envio = models.CharField(
        max_length=20, 
        choices=ESTADO_CHOICES, 
        default='pendiente'
    )
    
    fecha_envio = models.DateTimeField(blank=True, null=True)
    fecha_entrega_estimada = models.DateField(blank=True, null=True)
    fecha_entrega_real = models.DateTimeField(blank=True, null=True)
    
    notas = models.TextField(blank=True, null=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'envios'
        verbose_name = 'Envío'
        verbose_name_plural = 'Envíos'
        ordering = ['-fecha_creacion']
    
    def __str__(self):
        return f"Envío {self.numero_seguimiento or 'S/N'} - Pedido {self.pedido.numero_pedido}"