import React from 'react';
import SectionDivider from './SectionDivider';

const PodcastSection = () => {
  return (
    <section className="mb-16 animate-fade-in px-4 md:px-0">
      <SectionDivider title="El Albatros Podcast" />
      
      <div className="relative overflow-hidden group">
        {/* Contenedor Principal */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center bg-[#002855] p-6 md:p-10 rounded-lg shadow-2xl relative z-10">
          
          {/* 1. Arte del Podcast (Imagen con efecto Glassmorphism) */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 shrink-0 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
            <img 
              src="https://picsum.photos/id/450/400/400" 
              alt="Podcast Cover" 
              className="w-full h-full object-cover rounded-lg border border-white/10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            {/* Botón Play Central Estilizado */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white hover:text-[#002855] transition-all cursor-pointer">
                <span className="text-2xl ml-1">▶</span>
              </div>
            </div>
          </div>

          {/* 2. Información y Controles */}
          <div className="flex-grow w-full text-center md:text-left text-white">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <span className="px-2 py-0.5 bg-red-600 text-[9px] font-black uppercase tracking-widest rounded-sm animate-pulse">
                Nuevo Episodio
              </span>
              <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">
                Temporada 3 • Ep. 42
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black font-serif leading-tight mb-3 hover:text-blue-200 cursor-pointer transition-colors">
              El futuro de la comunicación digital: ¿Hacia dónde va la IA?
            </h3>
            
            <p className="text-white/70 text-sm md:text-base font-serif mb-6 line-clamp-2 md:line-clamp-none">
              Hablamos con expertos sobre cómo la automatización redefine la interacción con el lector en 2026.
            </p>

            {/* 3. Reproductor Visual (Visualizer) */}
            <div className="space-y-4">
              {/* Onda de audio (Simulada con flex) */}
              <div className="flex items-end gap-1 h-8 opacity-50">
                {[...Array(30)].map((_, i) => (
                  <div 
                    key={i} 
                    className="flex-grow bg-white rounded-full animate-wave"
                    style={{ 
                      height: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.05}s` 
                    }}
                  ></div>
                ))}
              </div>

              {/* Barra de progreso interactiva */}
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between text-[10px] font-bold uppercase tracking-tighter text-white/40">
                  <span>12:45</span>
                  <span>45:00</span>
                </div>
                <div className="overflow-hidden h-1.5 mb-4 text-xs flex rounded bg-white/10">
                  <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Fondo Decorativo (Efecto de profundidad) */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Estilos CSS Inline para la animación de la onda */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1.2); }
        }
        .animate-wave {
          animation: wave 1.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PodcastSection;