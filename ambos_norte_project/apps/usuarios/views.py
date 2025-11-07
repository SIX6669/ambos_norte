from django.shortcuts import render
from rest_framework import viewsets
from .models import Usuario, Direccion
from .serializer import UsuarioSerializer, DireccionSerializer

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class DireccionViewSet(viewsets.ModelViewSet):
    queryset = Direccion.objects.all()
    serializer_class = DireccionSerializer

# Create your views here.
