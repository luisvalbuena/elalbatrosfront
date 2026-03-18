import React from 'react';

/**
 * SectionDivider Component
 * Renderiza el título de una sección seguido de una línea divisoria 
 * horizontal que ocupa todo el ancho, según el boceto.
 */
const SectionDivider = ({ title }) => {
  return (
    <div className="w-full mb-8 animate-fade-in">
      <div className="flex flex-col items-start">
        {/* Título de la sección: negrita, mayúsculas e itálica */}
        <h2 className="text-2xl font-black uppercase italic tracking-tight text-[#002855] mb-2">
          {title}
        </h2>
        
        {/* Línea divisoria principal que cruza la página */}
        <div className="w-full border-t-2 border-[#002855]"></div>
        
        {/* Líneas decorativas adicionales (opcionales) para dar el efecto de "periódico" */}
        <div className="w-full border-t border-[#002855]/10 mt-1"></div>
      </div>
    </div>
  );
};

export default SectionDivider;