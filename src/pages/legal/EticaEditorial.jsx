import React from 'react';

const EticaEditorial = () => {
  return (
    <article className="max-w-3xl mx-auto px-6 py-24 font-serif text-gray-800 leading-relaxed">
      <header className="text-center mb-20">
        <h1 className="text-[11px] font-black uppercase tracking-[0.6em] text-[#002855] mb-6">
          Manifiesto El Albatros
        </h1>
        <h2 className="text-5xl font-black italic text-gray-900 tracking-tight">Ética Editorial</h2>
      </header>

      <div className="space-y-16">
        <section className="relative">
          <span className="text-6xl text-gray-100 font-black absolute -top-8 -left-8 select-none">01</span>
          <h3 className="text-xl font-bold mb-4 relative z-10">Compromiso con la Verdad</h3>
          <p className="text-gray-600">
            En un entorno saturado de información instantánea, nuestra prioridad es la verificación. No publicamos rumores. Cada pieza firmada por El Albatros conlleva un proceso de contraste humano, ajeno a los sesgos de la automatización masiva.
          </p>
        </section>

        <section className="relative">
          <span className="text-6xl text-gray-100 font-black absolute -top-8 -left-8 select-none">02</span>
          <h3 className="text-xl font-bold mb-4 relative z-10">Independencia de Criterio</h3>
          <p className="text-gray-600">
            Nuestra lealtad pertenece exclusivamente al lector. Sozzly Group garantiza la total independencia de la redacción frente a presiones comerciales o políticas. El periodismo, para ser útil, debe ser libre.
          </p>
        </section>

        <div className="bg-[#002855] text-white p-12 rounded-sm text-center">
          <p className="text-2xl font-bold italic mb-4 font-serif">"Escribir es un acto de responsabilidad."</p>
          <div className="w-10 h-1 bg-white/30 mx-auto"></div>
        </div>
      </div>
    </article>
  );
};

export default EticaEditorial;