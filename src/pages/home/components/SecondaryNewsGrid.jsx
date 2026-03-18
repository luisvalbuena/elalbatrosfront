import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Importamos Link
import { usePortada } from '../../../hooks/usePortada';

const SecondaryNewsGrid = () => {
  const { portadaNews, loading, error } = usePortada();

  if (loading || error || portadaNews.length < 2) return null;

  const secondaryItems = portadaNews.slice(1, 4);

  return (
    <section className="border-t-[3px] border-b border-[#002855] mb-12 md:mb-16 animate-fade-in px-4 md:px-0 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {secondaryItems.map((item) => (
          /* 2. Envolvemos la NewsCard con el Link usando /news/ */
          <Link key={item._id} to={`/news/${item.slug}`} className="block">
            <NewsCard item={item} />
          </Link>
        ))}
      </div>
    </section>
  );
};

const NewsCard = ({ item }) => {
  const [hasError, setHasError] = useState(false);
  const { title, category, mainImage, author } = item;
  const authorName = author?.name || "Redacción";

  return (
    /* Eliminamos 'group-pointer' del article porque el Link ya se encarga del cursor */
    <article className="group flex flex-row md:flex-col h-full hover:bg-slate-50 transition-all duration-500 overflow-hidden py-4 md:py-0 relative">
      
      <div className="relative w-28 h-28 md:w-full md:h-48 overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center">
        {!hasError ? (
          <img 
            src={mainImage} 
            alt={title} 
            onError={() => setHasError(true)}
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-[#002855] flex items-center justify-center text-white/20 font-black text-4xl italic">
            {category.charAt(0)}
          </div>
        )}
        <div className="absolute inset-0 bg-[#002855]/10 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

      <div className="pl-4 md:p-6 flex flex-col flex-grow justify-center md:justify-start">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 bg-[#002855] rounded-full"></span>
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#002855]">
            {category}
          </span>
        </div>
        
        <h3 className="text-sm md:text-lg font-bold font-serif leading-snug text-gray-900 group-hover:text-[#002855] transition-colors duration-300 line-clamp-2 md:line-clamp-3 md:mb-6">
          {title}
        </h3>
        
        <div className="hidden md:flex mt-auto pt-4 items-center gap-3 border-t border-gray-100">
          <div className="w-8 h-8 rounded-full bg-[#002855] flex items-center justify-center text-[10px] text-white font-bold uppercase">
            {authorName.charAt(0)}
          </div>
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-tighter">
            Por <span className="text-gray-900 group-hover:underline">{authorName}</span>
          </span>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-0 left-0 w-0 h-1 bg-[#002855] transition-all duration-500 group-hover:w-full"></div>
    </article>
  );
};

export default SecondaryNewsGrid;