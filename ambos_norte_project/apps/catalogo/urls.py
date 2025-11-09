from django.urls import path
from .views import ProductoListView, ProductoDetailView

urlpatterns = [
    path('productos/', ProductoListView.as_view(), name='producto-lista'),
    path('productos/<int:pk>/', ProductoDetailView.as_view(), name='producto-detalle'),
]
