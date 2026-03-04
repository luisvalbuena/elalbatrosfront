import React, { useState } from 'react';

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
    <section className="flex flex-col items-center w-full animate-fade-in">
      
      {/* 1. Barra Superior (Adaptada) */}
      <div className="w-full flex justify-between items-center py-2 border-b border-gray-100 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] text-gray-500">
        <span className="hidden sm:inline">{currentDate}</span>
        <span className="sm:hidden">Edición Digital</span>
        <div className="flex gap-3 md:gap-4">
          <span className="hover:text-[#002855] cursor-pointer transition-colors">Suscripción</span>
          <span className="text-[#002855]">•</span>
          <span className="hover:text-[#002855] cursor-pointer transition-colors font-black">Entrar</span>
        </div>
      </div>

      {/* 2. Logotipo Central (Ajuste de escala móvil) */}
      <div className="py-8 md:py-12 group">
        <div className="relative inline-block">
          <img 
            src="/elabatroshero.png" 
            alt="EL ALBATROS LIVE" 
            className="h-20 sm:h-28 md:h-36 object-contain transition-transform duration-700 group-hover:scale-[1.01]"
          />
          <div className="absolute -right-6 md:-right-8 top-1/2 -translate-y-1/2 flex items-center gap-1.5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-[8px] md:text-[10px] font-black text-red-600 tracking-tighter">LIVE</span>
          </div>
        </div>
      </div>

      {/* 3. Barra de Navegación (Responsive) */}
      <nav className="w-full border-t border-b-4 border-[#002855] py-2 md:py-3 sticky top-0 bg-white z-50">
        <div className="flex justify-between md:justify-center items-center px-4 md:px-0">
          
          {/* Botón Menú Móvil */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-[#002855] p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex justify-center items-center gap-6 lg:gap-10">
            {categories.map((cat, index) => (
              <React.Fragment key={cat.slug}>
                <a href={`/category/${cat.slug}`} className="text-xs font-black uppercase tracking-[0.15em] text-[#002855] hover:text-blue-700 transition-all relative group">
                  {cat.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#002855] transition-all group-hover:w-full"></span>
                </a>
                {index < categories.length - 1 && <span className="h-3 w-[1px] bg-gray-200"></span>}
              </React.Fragment>
            ))}
          </div>

          {/* Icono Buscar (Visible en ambos) */}
          <div className="md:ml-4 md:pl-4 md:border-l border-gray-200 cursor-pointer text-[#002855] hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </div>
        </div>
      </nav>

      {/* 4. Menú Lateral Móvil (Drawer) */}
      <div className={`fixed inset-0 bg-[#002855] z-[60] transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <button onClick={() => setIsMenuOpen(false)} className="text-white mb-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col gap-6">
            {categories.map((cat) => (
              <a 
                key={cat.slug} 
                href={`/category/${cat.slug}`} 
                className="text-2xl font-black uppercase tracking-tighter text-white hover:text-blue-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {cat.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* 5. Última Hora (Scroll infinito en móvil) */}
      <div className="w-full bg-gray-50 border-b border-gray-200 py-2 flex items-center">
        <span className="px-3 text-[8px] font-black bg-[#002855] text-white py-0.5 ml-4 rounded-sm italic shrink-0">LATEST</span>
        <marquee className="px-4 text-[10px] md:text-[11px] font-medium text-[#002855] italic">
          Guerra en Ucrania: Zelenski pide más defensas aéreas ante los nuevos ataques en Kiev... • Mercados en vilo ante la reunión de la FED...
        </marquee>
      </div>

    </section>
  );
};

export default MainHero;