import React from 'react';
import SectionDivider from './SectionDivider';

const VideoSection = () => {
  // Estado inicial: null para mostrar el mensaje de "Próximamente"
  const featuredVideo = null;

  return (
    <section className="mb-16 animate-fade-in px-4 md:px-0">
      <SectionDivider title="El Albatros TV" />

      <div className="relative group overflow-hidden rounded-lg bg-[#f4f4f4] border border-gray-200">
        {!featuredVideo ? (
          /* --- ESTADO: PRÓXIMAMENTE (ESTÉTICA CLARA) --- */
          <div className="relative aspect-video flex flex-col items-center justify-center p-8 md:p-20 overflow-hidden">
            
            {/* Fondo con textura sutil y scanline suave */}
            <div className="absolute inset-0 opacity-[0.03] animate-scanline pointer-events-none bg-black"></div>

            <div className="relative z-10 text-center">
              {/* Visor de Cámara Minimalista en Azul Marino */}
              <div className="mb-8 relative inline-block">
                <div className="w-16 h-16 border border-[#002855]/10 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#002855] rounded-full animate-pulse opacity-40"></div>
                </div>
                {/* Esquinas de encuadre finas */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#002855]/20"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#002855]/20"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#002855]/20"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#002855]/20"></div>
              </div>

              <h3 className="text-2xl md:text-5xl font-black font-serif text-[#002855] mb-4 tracking-tighter uppercase italic">
                La mirada de El Albatros
              </h3>
              
              <div className="w-12 h-px bg-[#002855]/20 mx-auto mb-6"></div>

              <p className="text-gray-500 text-xs md:text-sm font-serif max-w-sm mx-auto leading-relaxed tracking-[0.1em] uppercase">
                Reportajes y entrevistas en alta resolución. 
                Nuestra unidad audiovisual está en fase de edición.
              </p>
              
              <div className="mt-10 flex items-center justify-center gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-[#002855]/40">
                <span>2026</span>
                <span className="w-1 h-1 bg-[#002855]/20 rounded-full"></span>
                <span>UHD PRODUCTION</span>
              </div>
            </div>
          </div>
        ) : (
          /* --- ESTADO: VIDEO ACTIVO (Más integrado) --- */
          <div className="relative aspect-video group cursor-pointer bg-white">
            <img 
              src={featuredVideo.thumbnail} 
              alt={featuredVideo.title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-1000 grayscale-[0.5] group-hover:grayscale-0"
            />
            {/* Overlay más suave, no tan negro */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/60 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
              <span className="text-white font-black text-[9px] tracking-[0.3em] uppercase mb-3 block opacity-80">
                {featuredVideo.category}
              </span>
              <h3 className="text-2xl md:text-4xl font-serif font-black text-white italic mb-6 max-w-2xl drop-shadow-md">
                {featuredVideo.title}
              </h3>
              <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
                <span className="text-[#002855] ml-1 text-xl">▶</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scanline {
          width: 100%;
          height: 8px;
          animation: scanline 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default VideoSection;