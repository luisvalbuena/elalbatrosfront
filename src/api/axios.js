import axios from 'axios';

const clienteAxios = axios.create({
  // Asegúrate de que este puerto coincida con el de tu backend
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para añadir el token a cada petición si existe
clienteAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('albatros_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default clienteAxios;