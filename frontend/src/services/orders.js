import api from './api';

const ordersService = {
  // Obtener todos los pedidos (con filtros opcionales)
  getAll: async (filters = {}) => {
    const params = new URLSearchParams(filters);
    const response = await api.get(`/pedido/?${params}`);  // ✅ Sin /pedidos/
    return response.data;
  },

  // Obtener un pedido por ID
  getById: async (id) => {
    const response = await api.get(`/pedido/${id}/`);  // ✅ Sin /pedidos/
    return response.data;
  },

  // Crear un nuevo pedido
  create: async (orderData) => {
    const response = await api.post('/pedido/', orderData);  // ✅ Sin /pedidos/
    return response.data;
  },

  // Actualizar un pedido
  update: async (id, orderData) => {
    const response = await api.put(`/pedido/${id}/`, orderData);  // ✅ Sin /pedidos/
    return response.data;
  },

  // Actualizar parcialmente un pedido
  partialUpdate: async (id, orderData) => {
    const response = await api.patch(`/pedido/${id}/`, orderData);  // ✅ Sin /pedidos/
    return response.data;
  },

  // Eliminar un pedido
  delete: async (id) => {
    const response = await api.delete(`/pedido/${id}/`);  // ✅ Sin /pedidos/
    return response.data;
  },

  // Cambiar estado de un pedido
  cambiarEstado: async (id, nuevoEstado, comentario = '') => {
    const response = await api.post(`/pedido/${id}/cambiar_estado/`, {  // ✅ Sin /pedidos/
      nuevo_estado: nuevoEstado,
      comentario: comentario
    });
    return response.data;
  },

  // Obtener historial de un pedido
  getHistorial: async (id) => {
    const response = await api.get(`/pedido/${id}/historial/`);  // ✅ Sin /pedidos/
    return response.data;
  },

  // Obtener estadísticas de pedidos
  getEstadisticas: async (fecha = null) => {
    const params = fecha ? `?fecha=${fecha}` : '';
    const response = await api.get(`/pedido/estadisticas/${params}`);  // ✅ Sin /pedidos/
    return response.data;
  },

  // Obtener items de un pedido
  getItems: async (pedidoId) => {
    const response = await api.get(`/item-pedido/?pedido=${pedidoId}`);  // ✅ Sin /pedidos/
    return response.data;
  },

  // Estados disponibles
  getEstados: () => [
    { value: 'pendiente', label: 'Pendiente', color: 'gray' },
    { value: 'pagado', label: 'Pagado', color: 'blue' },
    { value: 'en_preparacion', label: 'En Preparación', color: 'yellow' },
    { value: 'enviado', label: 'Enviado', color: 'purple' },
    { value: 'entregado', label: 'Entregado', color: 'green' },
    { value: 'cancelado', label: 'Cancelado', color: 'red' },
  ]
};

export default ordersService;