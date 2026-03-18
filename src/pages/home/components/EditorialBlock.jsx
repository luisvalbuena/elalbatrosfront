import React from 'react';

const EditorialBlock = () => {
  return (
    <section className="my-20 max-w-5xl mx-auto px-4">
      {/* Contenedor con borde sutil y fondo "papel" */}
      <div className="relative bg-[#fcfcfc] border border-gray-100 p-8 md:p-16 shadow-sm overflow-hidden">
        
        {/* Marca de agua decorativa: El Albatros */}
        <div className="absolute top-0 right-0 opacity-[0.02] -mr-10 -mt-10 select-none pointer-events-none">
          <span className="text-[200px] font-serif font-black italic">A</span>
        </div>

        {/* Cabecera del Editorial */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-12 h-px bg-[#002855] mb-6"></div>
          <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#002855] text-center">
            Editorial de El Albatros
          </h2>
          <div className="mt-8 text-center max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-serif font-bold leading-tight text-gray-900 italic">
              "La veracidad como único refugio frente al ruido algorítmico"
            </h3>
          </div>
        </div>

        {/* Cuerpo del Texto: Estilo Doble Columna */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="relative">
            <p className="text-gray-800 font-serif leading-relaxed text-lg first-letter:text-7xl first-letter:font-black first-letter:text-[#002855] first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
              En el umbral de este 2026, la información se ha convertido en un torrente indistinguible donde la velocidad prima sobre el rigor. 
              <strong> El Albatros</strong> nace de la convicción de que el lector merece una pausa, un análisis que trascienda la superficie de la notificación inmediata.
            </p>
          </div>
          
          <div className="flex flex-col justify-between">
            <p className="text-gray-700 font-serif leading-relaxed text-lg italic opacity-90">
              "No somos recolectores de datos, somos intérpretes de la realidad local y global desde nuestra sede en Valladolid. Nuestro compromiso es con la palabra empeñada y el dato verificado."
            </p>
            
            {/* Firma Institucional */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#002855] rounded-full flex items-center justify-center text-white font-serif italic font-bold">
                  A
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#002855]">
                    Consejo Editorial
                  </p>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">
                    Valladolid, 4 de Marzo de 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cierre: Botón de Archivo */}
        <div className="mt-16 flex justify-center">
          <button className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-[#002855] transition-colors flex items-center gap-4 group">
            <span className="w-8 h-px bg-gray-200 group-hover:bg-[#002855] transition-all"></span>
            Ver histórico de editoriales
            <span className="w-8 h-px bg-gray-200 group-hover:bg-[#002855] transition-all"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditorialBlock;