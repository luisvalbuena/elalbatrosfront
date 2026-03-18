import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../api/axios'; // Ajusta la ruta a tu instancia de axios

const SearchNews = () => {
  const [query, setQuery] = useState('');
  const [allNews, setAllNews] = useState([]);
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  // 1. Cargamos las noticias al montar el componente
  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await api.get('/news');
        setAllNews(response.data);
      } catch (error) {
        console.error("Error al conectar con la hemeroteca:", error);
      }
    };
    loadNews();
  }, []);

  // 2. Lógica de filtrado
  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (!query.trim()) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    const filtered = allNews.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle?.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
    setHasSearched(true);
  };

  // Buscar automáticamente mientras escribe (Debounce opcional, aquí es directo)
  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Cabecera del Buscador */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-8 bg-[#002855] opacity-20"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#002855]">
            Hemeroteca Live
          </span>
          <div className="h-[1px] w-8 bg-[#002855] opacity-20"></div>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif font-black text-gray-900 mb-12 leading-tight italic">
          Explore el rastro de la noticia.
        </h2>

        {/* Input de Búsqueda */}
        <div className="relative group max-w-3xl mx-auto mb-16">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ej: Economía, Valladolid, Tecnología..."
            className="w-full h-16 md:h-24 bg-gray-50 border-b-4 border-[#002855] px-6 md:px-10 text-xl md:text-2xl font-serif italic text-[#002855] outline-none transition-all focus:bg-white focus:shadow-xl"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[#002855] opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* --- ÁREA DE RESULTADOS --- */}
        <div className="min-h-[200px] transition-all duration-500">
          {hasSearched ? (
            results.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
                {results.map((item) => (
                  <Link key={item._id} to={`/news/${item.slug}`} className="group text-left">
                    <div className="aspect-video overflow-hidden bg-gray-100 mb-3 border-b-2 border-transparent group-hover:border-[#002855] transition-all">
                      <img 
                        src={item.mainImage} 
                        alt={item.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <span className="text-[8px] font-black uppercase text-[#002855] tracking-widest">{item.category}</span>
                    <h4 className="text-xs md:text-sm font-bold font-serif leading-tight text-gray-900 line-clamp-2 mt-1 group-hover:text-[#002855]">
                      {item.title}
                    </h4>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-10 animate-pulse">
                <p className="text-xl font-serif italic text-gray-400">
                  "No hay registros que coincidan con su búsqueda en el archivo."
                </p>
                <button 
                  onClick={() => setQuery('')}
                  className="mt-4 text-[10px] font-black uppercase tracking-widest text-[#002855] border-b border-[#002855]"
                >
                  Limpiar filtros
                </button>
              </div>
            )
          ) : (
            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">
              Ingrese un término para buscar en la hemeroteca
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchNews;