import React from 'react';
import SectionDivider from './SectionDivider';

const PodcastSection = () => {
  // Estado inicial: null para mostrar el mensaje de "Próximamente"
  const currentEpisode = null; 

  return (
    <section className="mb-16 animate-fade-in px-4 md:px-0">
      <SectionDivider title="El Albatros Podcast" />
      
      <div className="relative overflow-hidden group">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center bg-[#002855] p-8 md:p-14 rounded-lg shadow-2xl relative z-10 border border-white/5">
          
          {!currentEpisode ? (
            /* --- ESTADO REFINADO: PRÓXIMAMENTE --- */
            <div className="flex flex-col md:flex-row items-center gap-10 w-full">
              
              {/* Representación Abstracta de Audio */}
              <div className="relative w-32 h-32 shrink-0 flex items-center justify-center">
                <div className="flex items-center gap-1.5 h-16">
                  {[0.4, 0.7, 1, 0.6, 0.8, 0.5, 0.9, 0.4].map((h, i) => (
                    <div 
                      key={i} 
                      className="w-1.5 bg-blue-400/40 rounded-full"
                      style={{ height: `${h * 100}%` }}
                    ></div>
                  ))}
                </div>
                {/* Círculo sutil de rotación */}
                <div className="absolute inset-0 rounded-full border border-white/10 border-t-white/40 animate-spin-slow"></div>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-black font-serif text-white mb-4 tracking-tight">
                  Nuevas narrativas en camino
                </h3>
                <p className="text-white/50 text-sm md:text-lg font-serif max-w-xl leading-relaxed italic">
                  Estamos diseñando una experiencia sonora a la altura de nuestra redacción. Muy pronto, las voces que lideran el análisis llegarán a tus dispositivos.
                </p>
                <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300">
                     Estreno Primavera 2026
                   </span>
                   <div className="h-px w-12 bg-white/20"></div>
                </div>
              </div>
            </div>
          ) : (
            /* --- ESTADO: EPISODIO ACTIVO --- */
            <>
              {/* ... resto del código del episodio activo ... */}
            </>
          )}
        </div>

        {/* Fondos Ambientales */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PodcastSection;