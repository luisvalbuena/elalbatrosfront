import React from 'react';

/**
 * LiveTicker - El pulso de El Albatros.
 * Diseñado para situarse justo debajo del Header o en la parte superior absoluta.
 */
const LiveTicker = () => {
  const updates = [
    { time: "19:42", text: "Valladolid ampliará su zona de bajas emisiones en el centro histórico" },
    { time: "19:15", text: "El sector tecnológico local prevé un crecimiento del 12% para este trimestre" },
    { time: "18:50", text: "ÚLTIMA HORA: Resultados récord en la última subasta de energía limpia" },
    { time: "18:32", text: "El Albatros Podcast alcanza el millón de escuchas en su nueva temporada" },
  ];

  return (
    <div className="w-full bg-[#002855] border-b border-white/10 shadow-lg overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center h-10">
        
        {/* Etiqueta Fija de "EN DIRECTO" */}
        <div className="relative flex items-center gap-2 px-4 h-full bg-red-600 shrink-0">
          {/* El punto de pulsación "Live" */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
            Live
          </span>
          {/* Triángulo decorativo estilo flecha */}
          <div className="absolute left-full top-0 w-0 h-0 border-t-[20px] border-t-transparent border-l-[12px] border-l-red-600 border-b-[20px] border-b-transparent"></div>
        </div>

        {/* Contenedor del Carrusel (Marquee) */}
        <div className="flex-grow overflow-hidden relative h-full flex items-center ml-4">
          <div className="flex items-center gap-16 whitespace-nowrap animate-ticker-scroll hover:pause-animation">
            {/* Duplicamos el contenido para un loop infinito perfecto */}
            {[...updates, ...updates].map((item, index) => (
              <div key={index} className="flex items-center gap-3 group cursor-pointer">
                <span className="text-white/40 font-mono text-[10px]">{item.time}</span>
                <span className="text-white text-[11px] font-bold uppercase tracking-wider group-hover:text-red-400 transition-colors">
                  {item.text}
                </span>
                <span className="text-red-500 font-black">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reloj Digital (Opcional, añade peso institucional) */}
        <div className="hidden md:flex items-center px-6 h-full border-l border-white/10 text-white/50 font-mono text-[10px] tracking-widest uppercase">
          VLL — {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker-scroll {
          animation: ticker-scroll 40s linear infinite;
        }
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LiveTicker;