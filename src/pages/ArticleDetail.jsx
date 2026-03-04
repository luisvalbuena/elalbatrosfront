import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ArticleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Efecto para la barra de progreso de lectura
  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  // Simulamos la obtención de un artículo por su slug/id
  const article = {
    title: "Revolución en el desarrollo móvil: El impacto de Sozzly en el ecosistema Expo",
    category: "Tecnología",
    author: "Adrián Rivera",
    date: "4 de Marzo, 2026",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p>El panorama del desarrollo móvil ha dado un giro de 180 grados con la llegada de las nuevas herramientas de automatización en 2026. <strong>Sozzly</strong> se ha posicionado como el puente crítico entre la complejidad técnica de Expo y la necesidad de rapidez en el mercado actual.</p>
      
      <h3>¿Por qué Expo es el estándar ahora?</h3>
      <p>A diferencia de años anteriores, la estabilidad de los módulos nativos y la facilidad de despliegue han hecho que incluso las aplicaciones bancarias más robustas migren a este ecosistema. La integración con flujos de CI/CD personalizados permite que los equipos desplieguen cambios en segundos.</p>
      
      <blockquote>"La velocidad ya no es una ventaja competitiva, es el requisito mínimo para sobrevivir en la App Store."</blockquote>
      
      <p>En este artículo, desglosamos cómo las nuevas APIs de Sozzly permiten una gestión de estados compartidos entre chats y noticias nunca antes vista...</p>
    `
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Barra de progreso */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-600 z-[60] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero del Artículo */}
      <header className="max-w-4xl mx-auto px-4 pt-12">
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors mb-8 font-bold text-sm"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> VOLVER
        </button>

        <div className="space-y-4 mb-10">
          <span className="text-blue-600 font-black text-xs uppercase tracking-[0.2em]">
            {article.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1]">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
              <img src="https://i.pravatar.cc/150?u=adrian" alt="Author" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">{article.author}</p>
              <p className="text-xs text-gray-500">{article.date} • 8 min de lectura</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden aspect-[21/9] shadow-2xl">
          <img 
            src={article.image} 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Contenido */}
      <main className="max-w-2xl mx-auto px-4 mt-12">
        <article 
          className="prose prose-lg prose-blue max-w-none 
          prose-headings:font-black prose-headings:tracking-tighter 
          prose-p:text-gray-700 prose-p:leading-relaxed 
          prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:italic prose-blockquote:text-gray-900"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags / Compartir */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
          {['React', 'Expo', 'Sozzly', 'Mobile'].map(tag => (
            <span key={tag} className="px-4 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors">
              #{tag}
            </span>
          ))}
        </div>
      </main>

      {/* Footer del Artículo: Siguiente Noticia */}
      <section className="max-w-4xl mx-auto px-4 mt-20">
        <div className="bg-gray-900 rounded-[2rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <span className="text-blue-400 font-bold text-xs uppercase">Siguiente artículo</span>
            <h3 className="text-2xl font-bold mt-2">Optimización extrema con Vite y React Router v7</h3>
          </div>
          <Link 
            to="/article/vite-tips" 
            className="bg-white text-black px-8 py-4 rounded-2xl font-black hover:bg-blue-500 hover:text-white transition-all whitespace-nowrap"
          >
            Siguiente →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;