import React from 'react';

const FeaturedArticle = ({ 
  title = "El Albatros Live: La nueva era del periodismo digital en 2026", 
  subtitle = "Analizamos el impacto de las nuevas plataformas de streaming y la automatización en las redacciones modernas.",
  imageUrl = "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=2000", 
  category = "Investigación",
  author = "Redacción El Albatros"
}) => {
  return (
    <section className="mb-10 md:mb-14 animate-fade-in-up px-4 md:px-0">
      <div className="group cursor-pointer">
        
        {/* 1. Contenedor de Imagen: Ajuste de ratio según dispositivo */}
        {/* En móvil usamos 16:9 para que se vea más, en escritorio 21:9 para elegancia */}
        <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-gray-100 relative overflow-hidden border-b-4 border-[#002855]">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          />
          
          {/* Badge: Más pequeño en móvil */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4">
            <span className="bg-[#002855] text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] px-2 md:px-3 py-1 md:py-1.5 shadow-xl">
              {category}
            </span>
          </div>
        </div>

        {/* 2. Cuerpo de la Noticia: Grid flexible */}
        <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
          {/* Titular y Subtítulo */}
          <div className="md:col-span-8">
            <h2 className="text-2xl md:text-5xl font-black leading-tight text-gray-900 group-hover:text-[#002855] transition-colors duration-300">
              {title}
            </h2>
            
            {/* El subtítulo se oculta o se acorta en pantallas muy pequeñas para ahorrar espacio */}
            <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600 font-serif leading-relaxed line-clamp-2 md:line-clamp-3">
              {subtitle}
            </p>
          </div>

          {/* Metadata: En móvil aparece como una fila simple, en escritorio como columna lateral */}
          <div className="md:col-span-4 flex flex-row md:flex-col justify-between md:justify-end items-center md:items-end md:text-right md:border-l border-gray-100 md:pl-6 pt-4 md:pt-0 border-t md:border-t-0">
            <div className="flex flex-col gap-0.5 md:gap-1">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#002855]">
                {author}
              </span>
              <span className="text-[9px] md:text-[11px] text-gray-400 font-bold uppercase">
                4 Mar, 2026 • 8 min
              </span>
            </div>
            
            {/* Botón flecha: Solo icono en móvil para limpiar el diseño */}
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-[#002855] transition-colors">
              <span className="hidden md:inline">Leer más</span>
              <span className="text-xl md:text-lg">→</span>
            </button>
          </div>

        </div>

        {/* Separador */}
        <div className="w-full h-px bg-gray-100 mt-8 md:mt-10"></div>
      </div>
    </section>
  );
};

export default FeaturedArticle;