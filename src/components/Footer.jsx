import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Info de Marca */}
          <div className="max-w-xs">
            <Link to="/">
              <img 
                src="/elabatroshero.png" 
                alt="El Albatros" 
                className="h-10 grayscale mb-6 opacity-60 hover:opacity-100 transition-opacity" 
              />
            </Link>
            <p className="text-sm text-gray-500 font-serif leading-relaxed italic">
              Periodismo independiente, riguroso y comprometido con la verdad. 
              La crónica de una nueva era digital desde el corazón de Valladolid.
            </p>
          </div>

          {/* Enlaces Rápidos y Categorías */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-20">
            
            {/* Secciones Dinámicas */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#002855]">Secciones</h4>
              <Link to="/category/valladolid" className="text-xs text-gray-500 hover:text-black uppercase font-bold tracking-tighter transition-colors">Valladolid</Link>
              <Link to="/category/castilla-y-leon" className="text-xs text-gray-500 hover:text-black uppercase font-bold tracking-tighter transition-colors">Castilla y León</Link>
              <Link to="/category/nacional" className="text-xs text-gray-500 hover:text-black uppercase font-bold tracking-tighter transition-colors">España</Link>
              <Link to="/category/economia" className="text-xs text-gray-500 hover:text-black uppercase font-bold tracking-tighter transition-colors">Economía</Link>
              <Link to="/last-hour" className="text-xs text-red-600 hover:text-red-800 uppercase font-bold tracking-tighter transition-colors">Última Hora</Link>
            </div>

            {/* Institucional */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#002855]">Nosotros</h4>
              <Link to="/etica-editorial" className="text-xs text-gray-500 hover:text-black uppercase font-bold tracking-tighter transition-colors">Ética Editorial</Link>
              <Link to="/contacto" className="text-xs text-gray-500 hover:text-black uppercase font-bold tracking-tighter transition-colors">Contacto</Link>
              <Link to="/publicidad" className="text-xs text-gray-500 hover:text-black uppercase font-bold tracking-tighter transition-colors">Publicidad</Link>
              <Link to="/login" className="text-xs text-gray-400 hover:text-[#002855] uppercase font-bold tracking-tighter transition-colors mt-2">Redacción</Link>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Legal y Copyright */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]">
            © 2026 El Albatros News — Sozzly Group. Valladolid, España.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-[9px] font-black text-gray-400 uppercase tracking-widest">
            <Link to="/privacidad" className="hover:text-[#002855] transition-colors">Privacidad</Link>
            <Link to="/cookies" className="hover:text-[#002855] transition-colors">Cookies</Link>
            <Link to="/legal" className="hover:text-[#002855] transition-colors">Aviso Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;