import React, { useState, useEffect } from 'react';
// Asumimos que usas tu instancia de axios personalizada
import api from '../../api/axios'; 

const LastHourPage = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        setLoading(true);
        setError(null);

        // Llamada directa a tu "Escudo de Noticias" en el Backend
        const response = await api.get('/external/teletipo');
        
        // El controlador ya devuelve el array de artículos filtrado y cacheado
        setHeadlines(response.data);

      } catch (err) {
        console.error("Fallo técnico en el teletipo de El Albatros:", err);
        setError("No se ha podido establecer conexión con el servicio de agencias.");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestNews();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#F9F9F9] py-12 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabecera del Teletipo */}
        <header className="border-b-4 border-[#002855] mb-10 pb-6 text-center md:text-left flex flex-col md:flex-row justify-between items-end">
          <div>
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600">
                Teletipo Directo • 24H
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-gray-900">
              Última Hora<span className="text-[#002855]">.</span>
            </h1>
          </div>
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-4 md:mt-0">
            Servicio de Información Continua
          </p>
        </header>

        {/* --- ESTADOS DE CARGA Y ERROR --- */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="h-10 w-10 border-4 border-[#002855] border-t-transparent rounded-full animate-spin"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Recibiendo despachos...</span>
          </div>
        )}

        {error && !loading && (
          <div className="bg-white border-l-4 border-red-600 p-8 shadow-sm">
            <h3 className="text-red-600 font-black uppercase text-xs mb-2 tracking-widest">Aviso de Servicio</h3>
            <p className="text-gray-900 font-serif italic text-lg leading-tight">{error}</p>
            <p className="mt-4 text-[10px] text-gray-400 font-bold uppercase underline">El equipo técnico de El Albatros está trabajando en la señal.</p>
          </div>
        )}

        {/* --- LISTADO DE TITULARES --- */}
        {!loading && !error && headlines.length > 0 && (
          <div className="bg-white shadow-2xl border border-gray-100 relative">
            <div className="absolute top-0 left-8 w-[1px] h-full bg-gray-200"></div>
            
            <ul className="divide-y divide-gray-100">
              {headlines.map((article, index) => {
                const publishDate = new Date(article.publishedAt);
                const formattedTime = publishDate.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
                
                return (
                  <li key={index} className="group relative p-6 md:p-10 hover:bg-slate-50 transition-all duration-300 pl-12 md:pl-20">
                    <div className="absolute left-0 top-0 h-full w-12 md:w-20 flex items-start justify-center pt-8 md:pt-12">
                      <span className="text-[9px] font-black text-[#002855]/40 transform -rotate-90 origin-center whitespace-nowrap tracking-widest group-hover:text-red-600 transition-colors">
                        {formattedTime} HRS
                      </span>
                    </div>

                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <h2 className="text-xl md:text-2xl font-bold font-serif leading-tight text-gray-900 group-hover:text-[#002855] transition-colors mb-3">
                            {article.title}
                          </h2>
                          <p className="text-gray-500 font-serif text-sm line-clamp-2 leading-relaxed mb-4 italic">
                            {article.description}
                          </p>
                          <div className="flex items-center gap-4">
                            <span className="text-[9px] font-black uppercase tracking-widest bg-gray-900 text-white px-2 py-0.5">
                              {article.source?.name || 'Agencia'}
                            </span>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300">
                              Cables Externos
                            </span>
                          </div>
                        </div>
                        
                        {article.image && (
                          <div className="w-full md:w-32 h-20 overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all">
                            <img src={article.image} alt="" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Cierre Institucional */}
        <footer className="mt-16 text-center border-t border-gray-200 pt-10 opacity-30">
          <p className="text-[9px] font-black uppercase tracking-[0.6em] text-[#002855]">
            © 2026 EL ALBATROS LIVE • Valladolid, España
          </p>
        </footer>
      </div>
    </main>
  );
};

export default LastHourPage;