import React from 'react';

/**
 * SearchNews - Nivel: Hemeroteca de Referencia
 * Un componente de transición diseñado para captar la atención del lector
 * antes de llegar al cierre del diario.
 */
const SearchNews = () => {
  return (
    <section className="py-20 md:py-32 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Etiqueta de sección con estética de archivo */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-8 bg-[#002855] opacity-20"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#002855]">
            Hemeroteca Live
          </span>
          <div className="h-[1px] w-8 bg-[#002855] opacity-20"></div>
        </div>

        {/* Titular de invitación */}
        <h2 className="text-3xl md:text-5xl font-serif font-black text-gray-900 mb-12 leading-tight">
          Explore el rastro de la noticia. <br/>
          <span className="italic text-[#002855]/80">Toda la historia de El Albatros.</span>
        </h2>

        {/* Contenedor del Buscador de Alta Gama */}
        <div className="relative group max-w-3xl mx-auto">
          <div className="relative flex items-center">
            {/* Input Estilizado */}
            <input 
              type="text" 
              placeholder="Ej: Transformación digital en Valladolid..."
              className="w-full h-16 md:h-24 bg-gray-50 border-b-4 border-[#002855] px-6 md:px-10 text-xl md:text-2xl font-serif italic text-[#002855] 
                         placeholder-[#002855]/20 outline-none transition-all duration-500 
                         focus:bg-white focus:shadow-[0_20px_50px_rgba(0,40,85,0.1)] focus:pr-20"
            />
            
            {/* Botón de Acción Integrado */}
            <button className="absolute right-4 md:right-6 p-4 text-[#002855] hover:scale-110 transition-transform">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" height="32" 
                fill="none" viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Sugerencias Rápidas (Toque de personalización) */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 opacity-0 group-focus-within:opacity-100 transition-opacity duration-700">
            <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Tendencias:</span>
            {['Economía VLL', 'IA y Ética', 'Cultura Local', 'Sostenibilidad'].map((tag) => (
              <button 
                key={tag} 
                className="text-[9px] font-black uppercase tracking-widest text-[#002855] hover:text-red-600 transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Contador de artículos (Simulado para dar peso) */}
        <p className="mt-16 text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">
          Más de <span className="text-gray-400 font-black">12.450 artículos</span> documentados desde nuestra fundación
        </p>
      </div>
    </section>
  );
};

export default SearchNews;