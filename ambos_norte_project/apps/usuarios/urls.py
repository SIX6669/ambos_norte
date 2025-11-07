from rest_framework.routers import DefaultRouter
from .views import UsuarioViewSet, DireccionViewSet

router = DefaultRouter()

router.register(r'usuario', UsuarioViewSet, basename='usuario')
router.register(r'direccion', DireccionViewSet, basename='direccion')

urlpatterns = router.urls