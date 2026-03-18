import React from 'react';

const NewsletterSubscribe = () => {
  return (
    <section className="my-16 bg-slate-50 border-y border-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-grow">
          <h3 className="text-2xl font-serif font-black text-gray-900 mb-2 italic">
            La síntesis de la mañana.
          </h3>
          <p className="text-sm text-gray-600 font-serif leading-relaxed">
            Reciba cada día a las 8:00 AM el análisis exclusivo de nuestros editores sobre la actualidad de Valladolid y el mundo. Sin ruido, solo criterio.
          </p>
        </div>
        
        <div className="w-full md:w-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Su correo electrónico" 
              className="px-6 py-3 bg-white border border-gray-300 focus:border-[#002855] outline-none text-sm font-serif w-full md:w-64 transition-all"
            />
            <button className="bg-[#002855] text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#003d82] transition-colors shadow-lg">
              Suscribirse
            </button>
          </div>
          <p className="mt-3 text-[9px] text-gray-400 uppercase tracking-tighter text-center md:text-left">
            Respetamos su privacidad. Cancele en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;