import React from 'react';

const AvisoLegal = () => {
  return (
    <article className="max-w-3xl mx-auto px-6 py-24 font-serif text-gray-800 leading-relaxed">
      <header className="mb-16 border-b border-gray-100 pb-8">
        <h1 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#002855] mb-4">
          Información Institucional
        </h1>
        <h2 className="text-4xl font-bold italic text-gray-900 tracking-tighter">Aviso Legal</h2>
      </header>

      <section className="space-y-8 text-[15px]">
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se exponen los datos identificativos:
        </p>
        
        <div className="bg-[#f9f9f9] p-8 border-l-2 border-[#002855]">
          <p className="mb-2"><strong>Denominación Social:</strong> Sozzly Group / El Albatros</p>
          <p className="mb-2"><strong>Domicilio:</strong> Valladolid, España</p>
          <p className="mb-2"><strong>Email de contacto:</strong> redaccion@elalbatros.com</p>
        </div>

        <h3 className="text-xl font-bold text-[#002855] pt-4">Propiedad Intelectual</h3>
        <p>
          El código fuente, los diseños gráficos, las imágenes, las fotografías, los sonidos, las animaciones y los textos que integran <strong>El Albatros</strong> están protegidos por la legislación española sobre los derechos de propiedad intelectual e industrial a favor de Sozzly Group.
        </p>
      </section>
    </article>
  );
};

export default AvisoLegal;