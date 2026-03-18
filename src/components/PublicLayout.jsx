import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar Profesional */}
      <Navbar />

      {/* Contenido Dinámico */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer Profesional */}
      <Footer />
    </div>
  );
};

export default PublicLayout;