import React from 'react';

const ContactBrief = () => {
  return (
    <section className="my-20 bg-white border border-gray-100 shadow-xl max-w-6xl mx-auto overflow-hidden rounded-sm">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Lado A: Info Directa */}
        <div className="p-10 md:p-16 bg-[#002855] text-white">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 opacity-60">Contacto</h2>
          <div className="space-y-8">
            <div>
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-2">Canal Ético</p>
              <p className="text-xl font-serif italic">redaccion@elalbatros.live</p>
            </div>
            <div>
            </div>
          </div>
        </div>

        {/* Lado B: Mini Formulario */}
        <div className="p-10 md:p-16">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-8">Mensaje Directo a Dirección</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Nombre completo" className="w-full border-b border-gray-200 py-3 text-sm font-serif outline-none focus:border-[#002855] transition-colors" />
            <input type="email" placeholder="Email corporativo" className="w-full border-b border-gray-200 py-3 text-sm font-serif outline-none focus:border-[#002855] transition-colors" />
            <textarea placeholder="Asunto de interés institucional..." rows="3" className="w-full border-b border-gray-200 py-3 text-sm font-serif outline-none focus:border-[#002855] transition-colors resize-none"></textarea>
            <button className="mt-6 w-full md:w-auto bg-[#002855] text-white px-12 py-4 text-[10px] font-black uppercase tracking-widest shadow-md hover:shadow-2xl transition-all active:scale-95">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactBrief;