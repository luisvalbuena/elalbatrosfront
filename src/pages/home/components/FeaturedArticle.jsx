import React from 'react';
import { Link } from 'react-router-dom';
import { usePortada } from '../../../hooks/usePortada'; 

const FeaturedArticle = () => {
  const { portadaNews, loading, error } = usePortada();

  if (loading || error || portadaNews.length === 0) return null;

  const mainArticle = portadaNews[0];

  return (
    <section className="mb-10 md:mb-14 animate-fade-in-up px-4 md:px-0">
      {/* CAMBIO CLAVE: Cambiamos /noticia/ por /news/ para que coincida con App.js */}
      <Link to={`/news/${mainArticle.slug}`} className="group block">
        <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-gray-100 relative overflow-hidden border-b-4 border-[#002855]">
          <img 
            src={mainArticle.mainImage} 
            alt={mainArticle.title} 
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 md:top-4 md:left-4">
            <span className="bg-[#002855] text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] px-2 md:px-3 py-1 md:py-1.5 shadow-xl">
              {mainArticle.category}
            </span>
          </div>
        </div>

        <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <div className="md:col-span-8">
            <h2 className="text-2xl md:text-5xl font-black leading-tight text-gray-900 group-hover:text-[#002855] transition-colors duration-300">
              {mainArticle.title}
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600 font-serif leading-relaxed line-clamp-2 md:line-clamp-3">
              {mainArticle.subtitle}
            </p>
          </div>

          <div className="md:col-span-4 flex flex-row md:flex-col justify-between md:justify-end items-center md:items-end md:text-right md:border-l border-gray-100 md:pl-6 pt-4 md:pt-0 border-t md:border-t-0">
            <div className="flex flex-col gap-0.5 md:gap-1">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#002855]">
                {mainArticle.author?.name || "Redacción El Albatros"}
              </span>
              <span className="text-[9px] md:text-[11px] text-gray-400 font-bold uppercase">
                {new Date(mainArticle.createdAt).toLocaleDateString()} • 8 min
              </span>
            </div>
            <div className="text-xl md:text-lg text-gray-400 group-hover:text-[#002855] transition-colors">→</div>
          </div>
        </div>
      </Link>
      <div className="w-full h-px bg-gray-100 mt-8 md:mt-10"></div>
    </section>
  );
};

export default FeaturedArticle;