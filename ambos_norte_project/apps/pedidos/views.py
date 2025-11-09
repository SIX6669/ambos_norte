from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Pedido
from .serializers import PedidoSerializer, CrearPedidoSerializer


class PedidoListCreateView(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Pedido.objects.all().order_by('-fecha_pedido')
    serializer_class = PedidoSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        user = self.request.user
        if user and user.is_authenticated:
            return qs.filter(usuario=user)
        return qs.none()

    def create(self, request, *args, **kwargs):
        crear_serializer = CrearPedidoSerializer(data=request.data, context={'request': request})
        crear_serializer.is_valid(raise_exception=True)
        pedido = crear_serializer.save()
        out = PedidoSerializer(pedido)
        return Response(out.data, status=201)