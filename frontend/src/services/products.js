import api from './api';

const productsService = {
  // Obtener todos los productos
  getAll: async (filters = {}) => {
    const params = new URLSearchParams(filters);
    const response = await api.get(`/catalogo/producto/?${params}`);
    return response.data;
  },

  // Obtener un producto por ID
  getById: async (id) => {
    const response = await api.get(`/catalogo/producto/${id}/`);
    return response.data;
  },

  // Buscar productos
  search: async (query) => {
    const response = await api.get(`/catalogo/producto/buscar/?q=${query}`);
    return response.data;
  },

  // Obtener categorías
  getCategories: async () => {
    const response = await api.get('/catalogo/categoria/');
    return response.data;
  },

  // Crear producto (admin)
  create: async (productData) => {
    const response = await api.post('/catalogo/producto/', productData);
    return response.data;
  },

  // Actualizar producto (admin)
  update: async (id, productData) => {
    const response = await api.put(`/catalogo/producto/${id}/`, productData);
    return response.data;
  },

  // Eliminar producto (admin)
  delete: async (id) => {
    const response = await api.delete(`/catalogo/producto/${id}/`);
    return response.data;
  },

  // Reducir stock
  reduceStock: async (id, cantidad) => {
    const response = await api.post(`/catalogo/producto/${id}/reducir_stock/`, { cantidad });
    return response.data;
  },

  // Aumentar stock
  increaseStock: async (id, cantidad) => {
    const response = await api.post(`/catalogo/producto/${id}/aumentar_stock/`, { cantidad });
    return response.data;
  }
};

export default productsService;