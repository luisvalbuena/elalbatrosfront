import React from 'react';

const Privacidad = () => {
  return (
    <article className="max-w-3xl mx-auto px-6 py-24 font-serif text-gray-800 leading-relaxed">
      <header className="mb-16">
        <h1 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#002855] mb-4">
          Protección de Datos
        </h1>
        <h2 className="text-4xl font-bold italic text-gray-900 tracking-tighter">Privacidad</h2>
      </header>

      <div className="space-y-8">
        <p className="italic text-lg text-gray-600 border-l-4 border-gray-100 pl-6">
          "La privacidad de nuestros lectores es la base de nuestra confianza editorial."
        </p>

        <section>
          <h3 className="font-bold text-[#002855] uppercase text-xs tracking-widest mb-4">Responsable del Tratamiento</h3>
          <p className="text-sm">
            Los datos personales que se pudieran recabar directamente del redactor a través de esta web serán tratados de forma confidencial y quedarán incorporados a la actividad de tratamiento titularidad de El Albatros.
          </p>
        </section>

        <section>
          <h3 className="font-bold text-[#002855] uppercase text-xs tracking-widest mb-4">Sus Derechos</h3>
          <p className="text-sm">
            Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando sus datos. Podrá ejercer sus derechos de acceso, rectificación o supresión enviando un correo a nuestra redacción.
          </p>
        </section>
      </div>
    </article>
  );
};

export default Privacidad;