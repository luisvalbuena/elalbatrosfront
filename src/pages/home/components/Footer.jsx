import React from 'react';

const Footer = () => {
  const sections = {
    "Actualidad": ["Valladolid", "Castilla y León", "Nacional", "Internacional"],
    "Análisis": ["Opinión", "Editoriales", "Tribuna Libre", "Economía"],
    "Cultura": ["Arte", "Gastronomía", "Cine y Series", "Música"],
    "Servicios": ["Hemeroteca", "Newsletter", "Publicidad", "Contacto"]
  };

  return (
    <footer className="bg-[#002855] text-white pt-20 pb-10 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        
        {/* Nivel 1: Identidad y Redes */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-serif font-black tracking-tighter mb-4">
              EL ALBATROS<span className="text-red-500">.</span>
            </h2>
            <p className="text-white/50 text-xs font-bold uppercase tracking-[0.3em] max-w-xs leading-loose">
              Periodismo de referencia desde el corazón de Valladolid. Rigor, pausa y análisis en la era digital.
            </p>
          </div>
          
          <div className="flex gap-8">
            {['Twitter', 'Instagram', 'LinkedIn', 'RSS'].map((social) => (
              <a key={social} href="#" className="text-[10px] font-black uppercase tracking-widest hover:text-red-400 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Nivel 2: Mapa del Sitio (Grid de Secciones) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {Object.entries(sections).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-6 text-white/40">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm font-serif hover:text-red-400 transition-colors opacity-80 hover:opacity-100">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Nivel 3: Footer Inferior (Legal y Créditos) */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Ética Editorial</a>
          </div>
          
          <div className="text-right">
            <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.5em]">
              © 2026 EL ALBATROS LIVE • SOZZLY GROUP
            </p>
          </div>
        </div>

        {/* Detalle final: El Albatros en vuelo (Icono sutil) */}
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