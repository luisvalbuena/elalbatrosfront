import { useState, useEffect, useCallback } from 'react';
import api from '../api/axios'; 

export const usePortada = () => {
  const [portadaNews, setPortadaNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPortada = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.get('/news');

      // 💡 CAMBIO CLAVE: Filtramos por el campo booleano, no por el nombre de la categoría
      // Esto permite que una noticia sea 'Internacional' o 'Valladolid' y esté en Portada a la vez.
      const filtered = response.data.filter(item => item.isPortada === true);
      
      // Ordenamos por fecha de creación (más reciente primero) por si acaso el backend no lo hace
      const sorted = filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      setPortadaNews(sorted);
    } catch (err) {
      console.error("Error al obtener la portada de El Albatros:", err);
      setError(err.response?.data?.message || "Error al conectar con la redacción.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPortada();
  }, [fetchPortada]);

  return { 
    portadaNews, 
    loading, 
    error, 
    refresh: fetchPortada 
  };
};