import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../api/axios'; // Ajusta la ruta según tu estructura

const CategoryPage = () => {
  const { id } = useParams(); // Captura el ID o nombre de la categoría de la URL
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        setLoading(true);
        // Obtenemos todas y filtramos (o podrías crear un endpoint en el backend: /news/category/:cat)
        const response = await api.get('/news');
        const filtered = response.data.filter(
          item => item.category.toLowerCase() === id.toLowerCase()
        );
        setNews(filtered);
      } catch (error) {
        console.error("Error al cargar la categoría:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryNews();
    // Scroll al inicio al cambiar de categoría
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="h-10 w-10 border-4 border-[#002855] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
      {/* Encabezado de Sección */}
      <header className="border-b-4 border-[#002855] mb-12 pb-4">
        <h1 className="text-5xl font-black uppercase tracking-tighter text-gray-900">
          {id} 
          <span className="text-[#002855]">.</span>
        </h1>
        <p className="text-gray-500 font-serif mt-2 italic">
          Crónicas y análisis de actualidad sobre {id.toLowerCase()}
        </p>
      </header>

      {news.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {news.map((item) => (
            <Link key={item._id} to={`/news/${item.slug}`} className="group">
              <article className="flex flex-col h-full">
                {/* Imagen */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 mb-4">
                  <img 
                    src={item.mainImage} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 border-b-4 border-transparent group-hover:border-[#002855] transition-all"></div>
                </div>

                {/* Texto */}
                <h2 className="text-2xl font-bold font-serif leading-tight text-gray-900 group-hover:text-[#002855] transition-colors mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3 mb-6 font-serif">
                  {item.subtitle}
                </p>

                {/* Meta */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    {item.author?.name || "Redacción"}
                  </span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-2xl font-serif text-gray-400 italic">No hay noticias publicadas en esta sección por ahora.</p>
          <Link to="/" className="inline-block mt-6 text-[#002855] font-black uppercase tracking-widest text-xs border-b-2 border-[#002855]">
            Volver a Portada
          </Link>
        </div>
      )}
    </main>
  );
};

export default CategoryPage;