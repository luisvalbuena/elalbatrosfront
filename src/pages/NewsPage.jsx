import React from 'react';
import { Link } from 'react-router-dom';

// Datos de ejemplo (Simulando una API de Sozzly)
const ARTICLES = [
  {
    id: 'expo-2026-updates',
    category: 'Tecnología',
    title: 'Revolución en el desarrollo móvil: El impacto de Sozzly en el ecosistema Expo',
    excerpt: 'Exploramos cómo las nuevas herramientas de automatización están cambiando la forma en que los desarrolladores gestionan sus flujos de trabajo en 2026.',
    author: 'Redacción Sozzly',
    date: '4 Mar, 2026',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
    featured: true
  },
  {
    id: 'ai-news-1',
    category: 'IA',
    title: 'La inteligencia artificial llega a los chats de Sozzly',
    date: '3 Mar, 2026',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'vite-tips',
    category: 'Dev',
    title: 'Optimización extrema con Vite y React Router v7',
    date: '2 Mar, 2026',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'design-trends',
    category: 'Diseño',
    title: 'Minimalismo en 2026: ¿Menos es realmente más?',
    date: '1 Mar, 2026',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=400'
  }
];

const NewsPage = () => {
  const featuredArticle = ARTICLES.find(a => a.featured);
  const sideArticles = ARTICLES.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* --- SECCIÓN HERO / NOTICIA PRINCIPAL --- */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Columna Izquierda: Noticia Destacada */}
          <div className="lg:col-span-8">
            <Link to={`/article/${featuredArticle.id}`} className="group block">
              <div className="relative overflow-hidden rounded-3xl bg-gray-100 aspect-[16/9] mb-6">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    Destacado
                  </span>
                </div>
              </div>
              <div className="max-w-2xl">
                <span className="text-blue-600 font-bold text-sm uppercase">{featuredArticle.category}</span>
                <h2 className="text-4xl md:text-5xl font-black mt-2 leading-tight group-hover:text-blue-700 transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-500" />
                  <div>
                    <p className="text-sm font-bold">{featuredArticle.author}</p>
                    <p className="text-xs text-gray-400">{featuredArticle.date} • 6 min lectura</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Columna Derecha: Listado Lateral */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-600 inline-block"></span>
              LO ÚLTIMO
            </h3>
            <div className="space-y-8">
              {sideArticles.map((article) => (
                <Link key={article.id} to={`/article/${article.id}`} className="group flex gap-4">
                  <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-tighter">
                      {article.category}
                    </span>
                    <h4 className="font-bold text-sm md:text-base leading-snug group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-[11px] text-gray-400 mt-1">{article.date}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Banner de Suscripción */}
            <div className="mt-10 p-6 rounded-3xl bg-gray-900 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-lg font-bold mb-2">Newsletter Sozzly</h4>
                <p className="text-xs text-gray-400 mb-4">Recibe las actualizaciones de la comunidad Expo.</p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-gray-800 border-none rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-bold text-sm transition-colors">
                    OK
                  </button>
                </form>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN SECUNDARIA (GRID) --- */}
      <section className="bg-gray-50 border-t border-gray-100 mt-12 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h3 className="text-3xl font-black tracking-tighter">MÁS HISTORIAS</h3>
              <p className="text-gray-500">Contenido seleccionado para la comunidad</p>
            </div>
            <Link to="/archive" className="text-blue-600 font-bold text-sm hover:underline">
              Ver todo el archivo →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Repetimos algunos artículos para llenar el grid */}
            {[...sideArticles, featuredArticle].map((article, idx) => (
              <Link key={idx} to={`/article/${article.id}`} className="group">
                <div className="overflow-hidden rounded-2xl aspect-video mb-4 bg-gray-200">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:rotate-1 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{article.category}</span>
                  <h4 className="text-xl font-bold leading-tight group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {article.excerpt || "Descubre los detalles más profundos sobre esta noticia en nuestra sección exclusiva para la app Sozzly."}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-sm font-medium">
          © 2026 Sozzly App. Desarrollado con Vite + React.
        </p>
      </footer>
    </div>
  );
};

export default NewsPage;