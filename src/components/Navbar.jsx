import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: "Valladolid", path: "/category/valladolid" },
    { name: "Castilla y León", path: "/category/castilla-y-leon" },
    { name: "Nacional", path: "/category/nacional" },
    { name: "Internacional", path: "/category/internacional" },
    { name: "Opinión", path: "/category/opinion" },
    { name: "Cultura", path: "/category/cultura" },
    { name: "Última Hora", path: "/last-hour" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-[60] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-24 flex justify-between items-center">
          
          {/* IZQUIERDA: Menú de Navegación */}
          <div className="flex items-center gap-6 flex-1">
            <button 
              onClick={toggleMenu}
              className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-900 group"
              aria-label="Abrir menú"
            >
              <Menu size={24} className="group-hover:scale-110 transition-transform" />
            </button>
            <span className="hidden md:inline text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 font-sans">
              Secciones
            </span>
          </div>

          {/* CENTRO: Logotipo Principal */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="/elabatroshero.png" 
                alt="El Albatros" 
                className="h-10 md:h-16 object-contain grayscale" 
              />
            </Link>
          </div>

          {/* DERECHA: Espacio equilibrado (o acceso a redacción) */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <Link 
              to="/login" 
              className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300 hover:text-[#002855] transition-colors font-sans"
            >
              Redacción
            </Link>
          </div>
        </div>
      </nav>

      {/* --- MENÚ LATERAL (DRAWER) --- */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={toggleMenu}
        />
        
        <aside className={`absolute top-0 left-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-10 h-full flex flex-col">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 italic font-sans">Directorio</h2>
              <button onClick={toggleMenu} className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-8 font-serif">
              {categories.map((cat) => (
                <Link 
                  key={cat.name} 
                  to={cat.path} 
                  onClick={toggleMenu}
                  className="text-3xl font-black italic text-slate-800 hover:text-[#002855] transition-all hover:translate-x-2"
                >
                  {cat.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-12 border-t border-slate-50 font-sans">
              <div className="grid grid-cols-2 gap-4">
                <Link to="/etica-editorial" onClick={toggleMenu} className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-[#002855]">
                  Ética
                </Link>
                <Link to="/privacidad" onClick={toggleMenu} className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-[#002855]">
                  Privacidad
                </Link>
              </div>
              <p className="text-[9px] text-slate-300 uppercase tracking-widest mt-6">
                © 2026 El Albatros • Valladolid
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;