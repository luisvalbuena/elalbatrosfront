import { useState } from 'react';
import clienteAxios from '../api/axios';
import { useNavigate } from 'react-router-dom';

export const useNews = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [myNews, setMyNews] = useState([]);
  const [newsItem, setNewsItem] = useState(null); // Estado para la noticia individual
  const navigate = useNavigate();

  const getMyNews = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const { data } = await clienteAxios.get('/news/user', config); 
      setMyNews(data);
    } catch (err) {
      setError("No se pudieron cargar tus noticias");
    } finally {
      setLoading(false);
    }
  };

  const createNews = async (newsData) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await clienteAxios.post('/news', newsData, config);
      navigate('/dashboard/my-news');
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.message || "Error al crear");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  const getNewsBySlug = async (slug) => {
    setLoading(true);
    try {
      const { data } = await clienteAxios.get(`/news/${slug}`);
      setNewsItem(data); // Guardamos la noticia encontrada
    } catch (err) {
      setError("La noticia no existe o fue eliminada");
    } finally {
      setLoading(false);
    }
  };

  const deleteNews = async (id) => {
    if (!window.confirm("¿Estás seguro de que quieres eliminar esta noticia? Esta acción no se puede deshacer.")) return;
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await clienteAxios.delete(`/news/${id}`, config);
      setMyNews(prev => prev.filter(news => news._id !== id));
      return { success: true };
    } catch (err) {
      setError("No se pudo eliminar la noticia");
      return { success: false };
    }
  };

  // ✅ RETORNO COMPLETO
  return {
    createNews,
    getMyNews,
    getNewsBySlug,
    deleteNews,
    myNews,
    newsItem, // 👈 ¡Indispensable para News.jsx!
    loading,
    error
  };
};