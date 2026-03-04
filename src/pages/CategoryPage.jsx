import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';

// Simulamos una base de datos más amplia para categorías
const ALL_ARTICLES = [
  { id: '1', category: 'tech', title: 'El despliegue de 6G en 2026', date: 'Mar 4', image: 'https://picsum.photos/seed/tech1/600/400', excerpt: 'Cómo la nueva red cambiará el uso de Expo y Sozzly.' },
  { id: '2', category: 'tech', title: 'Vite vs Turbo: El duelo final', date: 'Mar 3', image: 'https://picsum.photos/seed/tech2/600/400', excerpt: 'Analizamos el rendimiento de los empaquetadores modernos.' },
  { id: '3', category: 'expo', title: 'EAS Update: Mejores prácticas', date: 'Mar 2', image: 'https://picsum.photos/seed/expo1/600/400', excerpt: 'Optimiza tus despliegues en Sozzly con estos trucos.' },
  { id: '4', category: 'comunidad', title: 'Meetup Sozzly en Madrid', date: 'Feb 28', image: 'https://picsum.photos/seed/com1/600/400', excerpt: 'Resumen del evento que reunió a 500 desarrolladores.' },
  { id: '5', category: 'tech', title: 'React 19 en producción', date: 'Feb 25', image: 'https://picsum.photos/seed/tech3/600/400', excerpt: 'Lo que hemos aprendido tras meses de pruebas.' },
];

const CategoryPage = () => {
  const { id } = useParams(); // 'tech', 'expo', o 'comunidad'

  // Filtramos los artículos por la categoría de la URL
  const filteredArticles = useMemo(() => {
    return ALL_ARTICLES.filter(article => article.category.toLowerCase() === id?.toLowerCase());
  }, [id]);

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER DE CATEGORÍA */}
      <header className="bg-gray-50 border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/" className="text-blue-600 font-bold text-sm mb-4 block hover:underline">
            ← Volver al inicio
          </Link>
          <h1 className="text-6xl font-black tracking-tighter uppercase italic">
            {id} <span className="text-blue-600">.</span>
          </h1>
          <p className="text-gray-500 mt-4 text-lg max-w-xl">
            Explora las últimas noticias, tutoriales y actualizaciones sobre <span className="text-black font-semibold">{id}</span> dentro del ecosistema de Sozzly.
          </p>
        </div>
      </header>

      {/* LISTADO DE ARTÍCULOS */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredArticles.map((article) => (
              <Link 
                key={article.id} 
                to={`/article/${article.id}`} 
                className="group flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-full md:w-1/2 aspect-video overflow-hidden rounded-2xl bg-gray-100">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-blue-600"></span>
                    <span className="text-xs font-black uppercase text-gray-400">{article.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold leading-tight group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <span className="inline-block text-black font-bold text-xs border-b-2 border-black pb-1 group-hover:text-blue-600 group-hover:border-blue-600 transition-all">
                    LEER MÁS
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-400">No hay artículos en esta categoría todavía.</h2>
            <Link to="/" className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-full font-bold">
              Explorar otras noticias
            </Link>
          </div>
        )}
      </main>

      {/* SECCIÓN DE SUSCRIPCIÓN RÁPIDA */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="bg-blue-600 rounded-[3rem] p-12 text-center text-white">
          <h3 className="text-3xl font-black mb-4">¿Te gusta lo que lees sobre {id}?</h3>
          <p className="mb-8 opacity-80">Únete a otros 5,000 desarrolladores de Sozzly.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-black hover:bg-gray-100 transition-colors">
            SUSCRIBIRSE AHORA
          </button>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;