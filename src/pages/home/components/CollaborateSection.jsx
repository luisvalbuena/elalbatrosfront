import React from 'react';

const CollaborateSection = () => {
  return (
    <section className="my-20 px-4">
      <div className="max-w-5xl mx-auto border-2 border-[#002855] p-8 md:p-12 relative overflow-hidden">
        {/* Decoración institucional */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#002855]/5 rounded-full -mr-16 -mt-16"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-2/3">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#002855] mb-4">
              Tribuna Abierta
            </h2>
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              ¿Tiene una perspectiva que el mundo debe conocer? <br/>
              <span className="italic">Colabore con El Albatros.</span>
            </h3>
            <p className="text-gray-600 font-serif leading-relaxed mb-6">
              Buscamos analistas, académicos y voces de la sociedad civil que deseen aportar profundidad al debate público. Enviamos sus propuestas de columna o reportaje de investigación.
            </p>
          </div>
          
          <div className="md:w-1/3 flex justify-center">
            <button className="group border-2 border-[#002855] text-[#002855] px-10 py-4 font-black text-xs uppercase tracking-widest hover:bg-[#002855] hover:text-white transition-all duration-500">
              Enviar propuesta →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;