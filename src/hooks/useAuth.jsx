import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import clienteAxios from '../api/axios';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Cargar usuario del localStorage al iniciar la app
  useEffect(() => {
    const savedUser = localStorage.getItem('albatros_user');
    const token = localStorage.getItem('albatros_token');
    
    if (savedUser && token) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Función para iniciar sesión
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await clienteAxios.post('/auth/login', { email, password });
      
      // Guardar en estado y persistencia
      setUser(data.user);
      localStorage.setItem('albatros_token', data.token);
      localStorage.setItem('albatros_user', JSON.stringify(data.user));
      
      // Redirigir a la portada (o a una zona privada si la hubiera)
      navigate('/');
      return { success: true };
    } catch (err) {
      const msg = err.response?.data?.message || 'Error al conectar con el servidor';
      setError(msg);
      return { success: false, message: msg };
    } finally {
      setLoading(false);
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('albatros_token');
    localStorage.removeItem('albatros_user');
    navigate('/login');
  };

  return {
    user,
    login,
    logout,
    loading,
    error,
    isAuthenticated: !!user
  };
};