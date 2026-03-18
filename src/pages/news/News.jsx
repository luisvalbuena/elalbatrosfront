import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useNews } from '../../hooks/useNews';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';

export default function News() {
  const { slug } = useParams();
  const { getNewsBySlug, newsItem, loading, error } = useNews();

  useEffect(() => {
    if (slug) getNewsBySlug(slug);
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="h-8 w-8 border-2 border-[#002855] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (error || !newsItem) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-serif text-gray-900 mb-4 font-bold">Noticia no encontrada</h2>
      <Link to="/" className="text-sm font-bold uppercase tracking-widest text-[#002855] hover:underline">
        Volver a la portada
      </Link>
    </div>
  );

  return (
    <article className="min-h-screen bg-white font-sans text-gray-900 pb-20 animate-fade-in">
      
      {/* Contenedor Principal (Sin el Navbar local) */}
      <div className="max-w-[800px] mx-auto px-4 pt-12 md:pt-16">
        
        {/* 1. Antetítulo y Título */}
        <div className="mb-10 text-center">
          <span className="text-[#002855] text-[11px] font-black uppercase tracking-[0.2em] mb-4 block">
            {newsItem.category || 'España'}
          </span>
          <h1 className="text-3xl md:text-[52px] font-serif font-bold leading-[1.1] tracking-tight mb-6 text-slate-900">
            {newsItem.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-8 italic">
            {newsItem.subtitle}
          </h2>
        </div>

        {/* 2. Firma y Metadatos */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6 border-t border-b border-gray-100 mb-10 text-[13px]">
          <div className="flex items-center gap-2 font-bold uppercase tracking-wider">
            <span className="text-gray-400 font-medium italic lowercase">por</span>
            <span className="text-slate-900">{newsItem.author?.name || 'Redacción'}</span>
          </div>
          <span className="hidden md:inline text-gray-300">|</span>
          <div className="text-gray-500 flex items-center gap-4">
            <time className="uppercase tracking-widest">
              {new Date(newsItem.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}
            </time>
            <span className="flex items-center gap-1">
               <Clock size={14} /> {Math.max(1, Math.ceil(((newsItem.paragraph1?.length || 0) + (newsItem.paragraph2?.length || 0)) / 800))} min
            </span>
          </div>
        </div>

        {/* 3. Imagen Principal Optimizada */}
        <figure className="mb-12">
          <div className="relative overflow-hidden bg-gray-50 rounded-sm">
            <img 
              src={newsItem.mainImage} 
              alt={newsItem.title} 
              className="w-full h-auto max-h-[520px] object-cover object-top shadow-sm"
            />
          </div>
          <figcaption className="mt-4 text-[11px] text-gray-400 italic font-sans flex justify-between border-b border-gray-50 pb-2">
            <span>© Foto: Archivo El Albatros</span>
            <span className="uppercase tracking-widest font-black text-[#002855] text-[9px]">Exclusiva</span>
          </figcaption>
        </figure>

        {/* 4. Cuerpo del Artículo */}
        <div className="max-w-none">
          {/* PÁRRAFO 1 CON LETRA CAPITAL */}
          {newsItem.paragraph1 && (
            <p className="font-serif text-[21px] leading-[1.6] text-slate-800 mb-10 selection:bg-blue-100
                          first-letter:text-7xl first-letter:font-black first-letter:text-[#002855] 
                          first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] 
                          first-letter:mt-3">
              {newsItem.paragraph1}
            </p>
          )}

          {/* RESTO DEL CUERPO */}
          <div className="font-serif text-[19px] leading-[1.8] text-gray-800 space-y-8">
            {newsItem.paragraph2 && <p>{newsItem.paragraph2}</p>}
            
            {newsItem.secondaryImage && (
              <figure className="my-12">
                <img 
                  src={newsItem.secondaryImage} 
                  alt="Imagen de apoyo" 
                  className="w-full h-auto rounded-sm shadow-sm"
                />
              </figure>
            )}
            
            {newsItem.paragraph3 && <p>{newsItem.paragraph3}</p>}
          </div>
        </div>

        {/* 5. Footer de autoría (Bio del redactor) */}
        <footer className="mt-20 pt-10 border-t border-gray-200">
          <div className="flex items-center gap-5 p-8 bg-slate-50 rounded-lg">
            <div className="h-14 w-14 bg-[#002855] rounded-full flex items-center justify-center text-white text-2xl font-serif shadow-lg shadow-blue-900/10">
              {newsItem.author?.name?.charAt(0) || 'A'}
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] mb-1">Redactor Jefe</p>
              <p className="text-base font-bold text-slate-900 uppercase tracking-tight">
                {newsItem.author?.name || 'Redacción Albatros'}
              </p>
            </div>
          </div>
        </footer>

      </div>
    </article>
  );
}