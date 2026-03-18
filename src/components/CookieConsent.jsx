import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent-v2');
    if (!consent) {
      // Bloqueamos el scroll del cuerpo mientras el modal está activo
      document.body.style.overflow = 'hidden';
      setIsVisible(true);
    }
  }, []);

  const handleAction = (type) => {
    localStorage.setItem('cookie-consent-v2', type);
    document.body.style.overflow = 'unset';
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white max-w-2xl w-full shadow-2xl border-t-4 border-[#002855] animate-fade-in-up">
        <div className="p-8 md:p-12">
          {/* Logo / Cabecera */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-black tracking-tighter text-gray-900">
              EL ALBATROS<span className="text-red-600">.</span>
            </h2>
            <div className="h-px w-12 bg-gray-200 mx-auto mt-4"></div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center uppercase tracking-widest text-[11px]">
            Su privacidad es nuestra prioridad
          </h3>

          <div className="space-y-4 text-sm font-serif text-gray-600 leading-relaxed text-center md:text-left">
            <p>
              En <strong>El Albatros</strong>, como parte de nuestro compromiso con el rigor informativo, también protegemos su entorno digital. Nosotros y nuestros socios procesamos datos para:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-[12px] opacity-80 list-disc pl-5">
              <li>Almacenar información en su dispositivo</li>
              <li>Personalizar anuncios y contenido</li>
              <li>Medir el rendimiento del contenido</li>
              <li>Desarrollar y mejorar nuestros productos</li>
            </ul>
            <p className="text-[11px] pt-4 italic">
              Al hacer clic en "Aceptar y continuar", usted consiente el uso de todas las cookies. Puede configurar sus preferencias o rechazarlas en "Configurar opciones".
            </p>
          </div>

          {/* Botonera Profesional */}
          <div className="mt-10 flex flex-col gap-3">
            <button 
              onClick={() => handleAction('all')}
              className="w-full bg-[#002855] text-white font-black uppercase tracking-[0.2em] text-[11px] py-4 hover:bg-gray-900 transition-all shadow-lg"
            >
              Aceptar y continuar leyendo
            </button>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => handleAction('essential')}
                className="flex-1 bg-gray-100 text-gray-800 font-black uppercase tracking-[0.2em] text-[10px] py-4 hover:bg-gray-200 transition-all"
              >
                Solo esenciales
              </button>
              <Link 
                to="/cookies"
                className="flex-1 border border-gray-200 text-gray-500 font-black uppercase tracking-[0.2em] text-[10px] py-4 hover:bg-gray-50 transition-all text-center"
                onClick={() => handleAction('custom')}
              >
                Configurar opciones
              </Link>
            </div>
          </div>

          <footer className="mt-8 text-center">
            <p className="text-[9px] text-gray-400 uppercase tracking-widest">
              Socio tecnológico de confianza • Sozzly Group 2026
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;