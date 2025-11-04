from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Usuario, Direccion

class DireccionInline(admin.TabularInline):
    model = Direccion
    extra = 0

@admin.register(Usuario)
class UsuarioAdmin(UserAdmin):
    list_display = ['username', 'email', 'tipo_usuario', 'telefono', 'is_active']
    list_filter = ['tipo_usuario', 'is_active', 'is_staff']
    search_fields = ['username', 'email', 'telefono']
    
    fieldsets = UserAdmin.fieldsets + (
        ('Información Adicional', {
            'fields': ('telefono', 'tipo_usuario')
        }),
    )
    
    inlines = [DireccionInline]

@admin.register(Direccion)
class DireccionAdmin(admin.ModelAdmin):
    list_display = ['usuario', 'calle', 'numero', 'ciudad', 'provincia', 'es_predeterminada']
    list_filter = ['provincia', 'ciudad', 'es_predeterminada']
    search_fields = ['usuario__username', 'calle', 'ciudad']
