from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password
from .models import Usuario
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from apps.usuarios.serializers import UsuarioSerializer

class RegistroView(APIView):
    def post(self, request):
        data = request.data
        try:
            usuario = Usuario.objects.create(
                username=data.get('email'),
                email=data.get('email'),
                first_name=data.get('nombre') or data.get('first_name'),
                last_name=data.get('apellido') or data.get('last_name'),
                telefono=data.get('telefono') or data.get('phone'),
                password=make_password(data.get('password')),
                tipo_usuario='cliente'
            )
            return Response({'message': 'Usuario creado correctamente'}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(username=email, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email,
                    'tipo_usuario': user.tipo_usuario,
                }
            })
        else:
            return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)

class PerfilView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UsuarioSerializer(request.user)
        return Response(serializer.data)

    def put(self, request):
        usuario = request.user
        current_password = request.data.get('current_password')
        new_password = request.data.get('new_password')

        if current_password or new_password:
            if not current_password or not new_password:
                return Response({'error': 'Campos de contraseña incompletos'}, status=status.HTTP_400_BAD_REQUEST)
            if not usuario.check_password(current_password):
                return Response({'error': 'La contraseña actual es incorrecta'}, status=status.HTTP_400_BAD_REQUEST)
            if len(new_password) < 8:
                return Response({'error': 'La nueva contraseña debe tener al menos 8 caracteres'}, status=status.HTTP_400_BAD_REQUEST)
            usuario.set_password(new_password)
            usuario.save()
            return Response({'message': 'Contraseña actualizada correctamente'})

        serializer = UsuarioSerializer(usuario, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
