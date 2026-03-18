import React from 'react';

// Importación de componentes existentes
import LiveTicker from './components/LiveTicker';
import MainHero from './components/MainHero';
import FeaturedArticle from './components/FeaturedArticle';
import SecondaryNewsGrid from './components/SecondaryNewsGrid';
import EditorialBlock from './components/EditorialBlock';
import OpinionSection from './components/OpinionSection';
import PodcastSection from './components/PodcastSection';
import VideoSection from './components/VideoSection'; // Nuevo componente
import NewsletterSubscribe from './components/NewsletterSubscribe';
import CollaborateSection from './components/CollaborateSection';
import SearchNews from './components/SearchNews';
import ContactBrief from './components/ContactBrief';
import Footer from './components/Footer';

/**
 * HomePage - EL ALBATROS LIVE 2026
 * Coordina la experiencia completa del diario con una jerarquía de alta gama.
 */
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-[#002855] font-sans antialiased">
      
      {/* 0. El Pulso: Última hora siempre visible arriba */}
      <LiveTicker />

      {/* Contenedor principal limitado a 1100px para máxima legibilidad editorial */}
      <main className="max-w-[1100px] mx-auto px-4 md:px-6 pt-6 pb-20">
        
        {/* 1. Cabecera Institucional (Logo y Menú) */}
        <MainHero />

        {/* 2. Gran Portada: La noticia que define la jornada */}
        <FeaturedArticle />

        {/* 3. Actualidad: El bloque de 3 columnas */}
        <SecondaryNewsGrid />

        {/* --- Bloque de Identidad --- */}
        {/* 4. El Alma: El pensamiento del diario */}
        <EditorialBlock />

        {/* 5. Suscripción: Interrupción elegante para captar socios */}
        <NewsletterSubscribe />

        {/* 6. Voces: La sección de firmas y análisis con estado "Buscamos colaboradores" */}
        <OpinionSection />

        {/* --- Multimedia y Experiencia --- */}
        {/* 7. Audio: Experiencia inmersiva de Podcast con estado "Próximamente" */}
        <PodcastSection />

        {/* 8. Vídeo: Narrativa cinematográfica El Albatros TV */}
        <VideoSection />

        {/* --- Comunidad e Historia --- */}
        {/* 9. Participación: Espacio para talento local */}
        <CollaborateSection />

        {/* 10. Hemeroteca: Buscador de noticias histórico */}
        <SearchNews />

        {/* 11. Cercanía: Punto de contacto directo en Valladolid */}
        <ContactBrief />

      </main>

      {/* 12. Cierre Institucional: Créditos de Sozzly Group */}
      <Footer />
    </div>
  );
};

export default HomePage;