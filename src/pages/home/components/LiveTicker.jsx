import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Supongo que tienes una instancia de axios configurada como 'api'
// Si no, puedes usar fetch directamente
import api from '../../../api/axios'; // Ajusta la ruta a tu instancia de axios

const LiveTicker = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getTickerData = async () => {
      try {
        setLoading(true);
        
        // Llamamos a tu nuevo endpoint centralizado
        // La URL final será algo como: http://localhost:5000/api/external/teletipo
        const response = await api.get('/external/teletipo');
        
        // Con Axios los datos vienen en .data, con fetch sería await response.json()
        const data = response.data;
        
        if (Array.isArray(data)) {
          setHeadlines(data);
        }
      } catch (error) {
        console.error("Error en el pulso del Ticker (Backend):", error);
      } finally {
        setLoading(false);
      }
    };

    getTickerData();
  }, []);

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const goToLastHour = () => {
    navigate('/last-hour');
  };

  return (
    <div 
      onClick={goToLastHour}
      className="w-full bg-[#002855] border-b border-white/10 shadow-lg overflow-hidden cursor-pointer group/ticker"
    >
      <div className="max-w-7xl mx-auto flex items-center h-10">
        
        <div className="relative flex items-center gap-2 px-4 h-full bg-red-600 shrink-0 z-20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
            Última hora
          </span>
          <div className="absolute left-full top-0 w-0 h-0 border-t-[20px] border-t-transparent border-l-[12px] border-l-red-600 border-b-[20px] border-b-transparent"></div>
        </div>

        <div className="flex-grow overflow-hidden relative h-full flex items-center">
          {loading ? (
            <div className="ml-8 text-white/30 text-[10px] uppercase font-black tracking-widest animate-pulse">
              Sincronizando cables...
            </div>
          ) : (
            <div className="flex items-center gap-16 whitespace-nowrap animate-ticker-scroll hover:pause-animation">
              {headlines.length > 0 ? (
                // Duplicamos para el efecto infinito
                [...headlines, ...headlines].map((article, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-white/40 font-mono text-[10px]">
                      {formatTime(article.publishedAt)}
                    </span>
                    <span className="text-white text-[11px] font-bold uppercase tracking-wider group-hover/ticker:text-red-300 transition-colors">
                      {article.title}
                    </span>
                    <span className="text-red-500 font-black">•</span>
                  </div>
                ))
              ) : (
                <span className="text-white/20 text-[10px] ml-8 uppercase italic">No hay despachos recientes</span>
              )}
            </div>
          )}
        </div>

        <div className="hidden md:flex items-center px-6 h-full border-l border-white/10 text-white/50 font-mono text-[10px] tracking-widest uppercase z-20 bg-[#002855]">
           {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker-scroll {
          display: flex;
          width: max-content;
          animation: ticker-scroll 150s linear infinite;
        }
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LiveTicker;