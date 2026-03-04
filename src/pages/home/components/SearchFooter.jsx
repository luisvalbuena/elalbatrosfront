import React from 'react';
import SectionDivider from './SectionDivider';

/**
 * SearchFooter - El cierre institucional de EL ALBATROS.
 * Combina la funcionalidad de búsqueda con la conversión de suscriptores.
 */
const SearchFooter = () => {
  return (
    <section className="mt-20 pb-24 animate-fade-in px-4 md:px-0">
      {/* Título institucional con la línea del boceto */}
      <SectionDivider title="Archivo y Memoria" />
      
      <div className="max-w-3xl mx-auto pt-12 relative">
        
        {/* 1. Área de Búsqueda Estilizada */}
        <div className="relative group">
          <p className="text-center font-black text-[#002855] mb-6 uppercase tracking-[0.3em] text-[10px] italic opacity-80">
            Explora la hemeroteca
          </p>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="¿Qué noticia buscas hoy?"
              className="w-full h-16 md:h-20 bg-white border-2 border-[#002855] rounded-full px-8 md:px-12 text-lg md:text-xl font-serif italic text-[#002855] 
                         placeholder-[#002855]/20 outline-none shadow-sm focus:shadow-2xl focus:shadow-[#002855]/5 transition-all duration-500
                         focus:ring-4 focus:ring-[#002855]/5"
            />
            
            {/* Icono de búsqueda minimalista */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[#002855]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* 2. Sección CTA (Call to Action) */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-8 border-t border-gray-100 pt-10">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-2xl font-bold text-gray-900 mb-1">
              Periodismo independiente, <br className="hidden md:block"/> hecho por personas.
            </h4>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-tighter">
              Únete a la comunidad de **Sozzly** hoy mismo.
            </p>
          </div>

          <button 
            className="group relative overflow-hidden bg-[#002855] text-white border-2 border-[#002855] rounded-full px-12 py-4 font-black text-xs uppercase tracking-[0.2em] 
                       hover:bg-white hover:text-[#002855] transition-all duration-500 transform hover:-translate-y-1 shadow-xl active:scale-95"
          >
            <span className="relative z-10">Hazte socio</span>
            {/* Efecto de brillo al pasar el ratón */}
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
        </div>

        {/* 3. Créditos Finales Sutiles */}
        <div className="mt-20 text-center">
          <div className="flex justify-center gap-6 mb-4 opacity-30 grayscale hover:grayscale-0 transition-all">
            <span className="text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-[#002855]">Aviso Legal</span>
            <span className="text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-[#002855]">Privacidad</span>
            <span className="text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-[#002855]">Cookies</span>
          </div>
          <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.5em]">
            © 2026 EL ALBATROS LIVE • VALLADOLID
          </p>
        </div>

      </div>
    </section>
  );
};

export default SearchFooter;