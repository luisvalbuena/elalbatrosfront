import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MainHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: 'Política', slug: 'politica' },
    { name: 'Economía', slug: 'economia' },
    { name: 'Cultura', slug: 'cultura' },
    { name: 'Deportes', slug: 'deportes' },
    { name: 'Opinión', slug: 'opinion' },
    { name: 'Mundo', slug: 'mundo' },
    { name: 'Tecnología', slug: 'tecnologia' }
  ];

  const currentDate = new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }).format(new Date());

  return (
    <section className="flex flex-col items-center w-full animate-fade-in mb-3 md:mb-5">
      
      {/* 1. Barra Superior */}
      <div className="w-full flex justify-between items-center py-2 border-b border-gray-100 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] text-gray-500">
        <span className="hidden sm:inline italic">{currentDate}</span>
        <span className="sm:hidden">Edición Digital</span>
        <div className="flex gap-3 md:gap-4">
          <Link to="/login" className="hover:text-[#002855] font-black no-underline transition-colors">
            LOG IN
          </Link>
        </div>
      </div>

      {/* 2. Logotipo Central (Recuperamos tamaño original) */}
      <div className="py-8 md:py-12 group">
        <Link to="/" className="relative inline-block cursor-pointer">
          <img 
            src="/elabatroshero.png" 
            alt="EL ALBATROS" 
            className="h-20 sm:h-28 md:h-36 object-contain transition-transform duration-700 group-hover:scale-[1.01]"
          />
        </Link>
      </div>

      {/* 3. Barra de Navegación (Margen inferior reducido a la mitad) */}
      <nav className="w-full border-t border-b-4 border-[#002855] py-2 md:py-3 sticky top-0 bg-white z-50 mb-3 md:mb-5">
        <div className="flex justify-between md:justify-center items-center px-4 md:px-0">
          
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-[#002855] p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <div className="hidden md:flex justify-center items-center gap-6 lg:gap-10">
            {categories.map((cat, index) => (
              <React.Fragment key={cat.slug}>
                <Link 
                  to={`/category/${cat.name}`} 
                  className="text-xs font-black uppercase tracking-[0.15em] text-[#002855] hover:text-blue-700 transition-all relative group no-underline"
                >
                  {cat.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#002855] transition-all group-hover:w-full"></span>
                </Link>
                {index < categories.length - 1 && <span className="h-3 w-[1px] bg-gray-200"></span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </nav>

      {/* 4. Menú Lateral Móvil */}
      <div className={`fixed inset-0 bg-[#002855] z-[60] transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <button onClick={() => setIsMenuOpen(false)} className="text-white mb-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col gap-6">
            {categories.map((cat) => (
              <Link 
                key={cat.slug} 
                to={`/category/${cat.name}`} 
                className="text-3xl font-black uppercase tracking-tighter text-white hover:text-blue-300 no-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

    </section>
  );
};

export default MainHero;