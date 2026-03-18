import React from 'react';

const Cookies = () => {
  return (
    <article className="max-w-3xl mx-auto px-6 py-24 font-serif text-gray-800 leading-relaxed">
      <h1 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#002855] mb-12 text-center">
        Transparencia Digital
      </h1>
      
      <div className="border border-gray-100 p-10 md:p-16 bg-white shadow-sm">
        <h2 className="text-3xl font-bold italic mb-8 text-center">Uso de Cookies</h2>
        
        <p className="mb-8 text-center text-gray-500">
          Utilizamos cookies propias y de terceros para mejorar nuestros servicios mediante el análisis de sus hábitos de navegación.
        </p>

        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-gray-200 uppercase tracking-widest text-[#002855]">
              <th className="py-4">Tipo</th>
              <th className="py-4">Finalidad</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-b border-gray-100">
              <td className="py-4 font-bold">Técnicas</td>
              <td className="py-4">Permiten la navegación y el uso de las diferentes opciones de la web.</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-4 font-bold">Analíticas</td>
              <td className="py-4">Miden el impacto de nuestras noticias para mejorar la relevancia editorial.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default Cookies;