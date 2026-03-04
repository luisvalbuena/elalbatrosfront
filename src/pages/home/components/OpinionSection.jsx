import React from 'react';

/**
 * OpinionSection - Las firmas de El Albatros.
 * Enfoque en tipografía clásica (Serif) y retratos de autor.
 */
const OpinionSection = () => {
  const columns = [
    {
      author: "Julia Valladares",
      role: "Analista Política",
      title: "El silencio administrativo y la Plaza Mayor",
      excerpt: "La gestión del tiempo en las instituciones locales requiere una reforma que trascienda la legislatura...",
      image: "https://picsum.photos/id/64/400/400"
    },
    {
      author: "Ricardo S. Albatros",
      role: "Director",
      title: "2026: El año de la soberanía digital",
      excerpt: "No podemos delegar nuestra capacidad crítica a los algoritmos de recomendación. El periodismo es, ante todo, humano.",
      image: "https://picsum.photos/id/91/400/400"
    },
    {
      author: "Elena Rivas",
      role: "Corresponsal Cultura",
      title: "El renacimiento del Pisuerga",
      excerpt: "Valladolid vuelve a mirar a su río no como una frontera, sino como el eje de su nueva explosión artística.",
      image: "https://picsum.photos/id/177/400/400"
    }
  ];

  return (
    <section className="my-20 py-16 bg-[#f9f9f9] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Cabecera de Sección */}
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

        {/* Grid de Columnistas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {columns.map((column, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="flex flex-col">
                
                {/* Retrato de Autor: Círculo Perfecto en B&N */}
                <div className="relative mb-6 mx-auto md:mx-0">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#002855]/10 grayscale group-hover:grayscale-0 group-hover:border-[#002855] transition-all duration-700 shadow-lg">
                    <img 
                      src={column.image} 
                      alt={column.author} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Decorativo: Comilla tipográfica */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#002855] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-serif text-xl leading-none">“</span>
                  </div>
                </div>

                {/* Info de la Columna */}
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

                {/* Separador móvil */}
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