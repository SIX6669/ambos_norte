from rest_framework import serializers
from .models import Usuario,Direccion

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'
        read_only = ('fecha_registro',)

class DireccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Direccion
        fields = '__all__'
        read_only = ('fecha_creacion','usuario')