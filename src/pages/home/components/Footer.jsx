import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Definición de rutas normalizadas para que coincidan con los slugs de la CategoryPage
  const sections = {
    "Actualidad": [
      { name: "Valladolid", path: "/category/valladolid" },
      { name: "Castilla y León", path: "/category/castilla-y-leon" },
      { name: "Nacional", path: "/category/nacional" },
      { name: "Internacional", path: "/category/internacional" }
    ],
    "Análisis": [
      { name: "Opinión", path: "/category/opinion" },
      { name: "Editoriales", path: "/category/editoriales" },
      { name: "Tribuna Libre", path: "/category/tribuna-libre" },
      { name: "Economía", path: "/category/economia" }
    ],
    "Cultura": [
      { name: "Arte", path: "/category/arte" },
      { name: "Gastronomía", path: "/category/gastronomia" },
      { name: "Cine y Series", path: "/category/cine-y-series" },
      { name: "Música", path: "/category/musica" }
    ],
    "Servicios": [
      { name: "Última Hora", path: "/last-hour" },
      { name: "Newsletter", path: "/newsletter" },
      { name: "Publicidad", path: "/contacto" },
      { name: "Acceso Redacción", path: "/login" }
    ]
  };

  return (
    <footer className="bg-[#002855] text-white pt-20 pb-10 px-4 md:px-0 mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Nivel 1: Identidad */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="text-center md:text-left">
            <Link to="/">
              <h2 className="text-4xl font-serif font-black tracking-tighter mb-4">
                EL ALBATROS<span className="text-red-500">.</span>
              </h2>
            </Link>
            <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.3em] max-w-xs leading-loose">
              Periodismo de referencia desde el corazón de Valladolid. Rigor, pausa y análisis en la era digital.
            </p>
          </div>
          
          <div className="flex gap-8">
            {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a 
                key={social} 
                href={`https://${social.toLowerCase()}.com`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-black uppercase tracking-widest hover:text-red-400 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Nivel 2: Mapa del Sitio - Ahora con Links funcionales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {Object.entries(sections).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-6 text-white/40">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-sm font-serif hover:text-red-400 transition-colors opacity-70 hover:opacity-100"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Nivel 3: Legal y Créditos */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
            <Link to="/legal" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            <Link to="/etica-editorial" className="hover:text-white transition-colors">Ética Editorial</Link>
          </div>
          
          <div className="text-right">
            <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.5em]">
              © 2026 EL ALBATROS LIVE • SOZZLY GROUP
            </p>
          </div>
        </div>

        {/* Icono final */}
        <div className="mt-12 flex justify-center opacity-10">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10C10 10 15 0 20 0C25 0 30 10 40 10C30 10 25 20 20 20C15 20 10 10 0 10Z" fill="white"/>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;