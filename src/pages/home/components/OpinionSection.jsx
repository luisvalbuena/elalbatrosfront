import React from 'react';

const OpinionSection = () => {
  // Array vacío para simular el estado de búsqueda de colaboradores
  const columns = []; 

  if (columns.length === 0) {
    return (
      <section className="my-10 py-16 bg-[#f9f9f9] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            {/* Header de sección refinado */}
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#002855] mb-12">
              Opinión y Análisis
            </h2>
            
            <div className="max-w-xl bg-white border border-gray-100 shadow-sm p-10 md:p-16 relative overflow-hidden">
              {/* Marca de agua tipográfica sutil en el fondo */}
              <span className="absolute -top-4 -right-4 text-[120px] font-serif font-black text-gray-50 select-none">
                “
              </span>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold italic text-gray-900 mb-6">
                  Buscamos las firmas del mañana
                </h3>
                
                <div className="w-12 h-[2px] bg-[#002855] mx-auto mb-8"></div>
                
                <p className="text-sm text-gray-500 font-serif leading-relaxed mb-10">
                  En El Albatros creemos en el periodismo humano y el análisis crítico. 
                  Si tienes una columna que el mundo necesita leer, queremos escucharte. 
                  Buscamos voces locales e internacionales para definir el criterio de nuestra edición digital.
                </p>
                
                <button className="text-[10px] font-black uppercase tracking-widest bg-[#002855] text-white px-8 py-4 hover:bg-[#003d82] transition-colors duration-300">
                  Enviar propuesta editorial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Render original (se activa cuando columns.length > 0)
  return (
    <section className="my-10 py-12 bg-[#f9f9f9] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xs">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#002855] mb-2">
              Opinión y Análisis
            </h2>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
              Las firmas que definen el criterio de El Albatros
            </p>
          </div>
          <button className="text-[10px] font-black uppercase tracking-widest text-[#002855] border-b-2 border-[#002855]/20 hover:border-[#002855] transition-all pb-1">
            Ver todos los columnistas
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {columns.map((column, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="flex flex-col">
                <div className="relative mb-6 mx-auto md:mx-0">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#002855]/10 grayscale group-hover:grayscale-0 group-hover:border-[#002855] transition-all duration-700 shadow-lg">
                    <img 
                      src={column.image} 
                      alt={column.author} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#002855] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-serif text-xl leading-none">“</span>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#002855] mb-1">
                    {column.author}
                  </p>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter mb-4">
                    {column.role}
                  </p>
                  <h3 className="text-xl md:text-2xl font-serif font-bold italic leading-tight text-gray-900 group-hover:text-[#002855] transition-colors mb-4">
                    {column.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-serif leading-relaxed line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity">
                    {column.excerpt}
                  </p>
                </div>
                <div className="w-12 h-px bg-gray-200 mt-8 mx-auto md:mx-0 md:hidden"></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpinionSection;