from django.shortcuts import render
from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken

from .models import Usuario, Direccion
from .serializer import (
    UsuarioSerializer, 
    DireccionSerializer,
    LoginSerializer,
    RegistroSerializer
)


def get_tokens_for_user(user):
    """Genera tokens JWT para un usuario"""
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    
    def get_permissions(self):
        # Permitir acceso sin autenticación para login y registro
        if self.action in ['login', 'registro']:
            return [AllowAny()]
        return [IsAuthenticated()]
    
    @action(detail=False, methods=['post'], permission_classes=[AllowAny])
    def login(self, request):
        """
        Endpoint de login para administradores y clientes
        POST /api/usuario/login/
        Body: { "email": "user@example.com", "password": "password123" }
        """
        serializer = LoginSerializer(data=request.data)
        
        if serializer.is_valid():
            user = serializer.validated_data['user']
            tokens = get_tokens_for_user(user)
            
            return Response({
                'access': tokens['access'],
                'refresh': tokens['refresh'],
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email,
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                    'tipo_usuario': user.tipo_usuario,
                    'is_staff': user.is_staff,
                    'telefono': user.telefono,
                }
            }, status=status.HTTP_200_OK)
        
        return Response(
            {'detail': serializer.errors.get('non_field_errors', ['Credenciales incorrectas'])[0]},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    @action(detail=False, methods=['post'], permission_classes=[AllowAny])
    def registro(self, request):
        """
        Endpoint de registro de nuevos usuarios
        POST /api/usuario/registro/
        """
        serializer = RegistroSerializer(data=request.data)
        
        if serializer.is_valid():
            user = serializer.save()
            tokens = get_tokens_for_user(user)
            
            return Response({
                'access': tokens['access'],
                'refresh': tokens['refresh'],
                'user': UsuarioSerializer(user).data,
                'message': 'Usuario registrado exitosamente'
            }, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated])
    def me(self, request):
        """
        Obtener información del usuario autenticado
        GET /api/usuario/me/
        """
        serializer = UsuarioSerializer(request.user)
        return Response(serializer.data)


class DireccionViewSet(viewsets.ModelViewSet):
    queryset = Direccion.objects.all()
    serializer_class = DireccionSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        # Filtrar direcciones solo del usuario autenticado
        return Direccion.objects.filter(usuario=self.request.user)
    
    def perform_create(self, serializer):
        # Asignar automáticamente el usuario autenticado
        serializer.save(usuario=self.request.user)
