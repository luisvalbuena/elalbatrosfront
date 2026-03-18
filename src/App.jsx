import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

// Layout Profesional (Navbar + Footer)
import PublicLayout from './components/PublicLayout';

// Vistas del Periódico (PÚBLICAS)
import HomePage from './pages/home/HomePage';
import CategoryPage from './pages/category/CategoryPage';
import Login from './pages/auth/Login';
import NewsPage from './pages/news/News'; 
import LastHourPage from './pages/news/LastHourPage';

// Vistas Legales
import AvisoLegal from './pages/legal/AvisoLegal';
import Privacidad from './pages/legal/Privacidad';
import Cookies from './pages/legal/Cookies';
import EticaEditorial from './pages/legal/EticaEditorial';

// Vistas de Dashboard
import DashboardNavbar from './pages/dashboard/DashboardNavbar';
import MainPage from './pages/dashboard/MainPage';
import CreateNews from './pages/dashboard/CreateNews'; 
import MyNews from './pages/dashboard/MyNews';
import CookieConsent from './components/CookieConsent';

// Vigilante del Scroll
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="h-8 w-8 border-2 border-[#002855] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* El banner vive aquí para estar presente en todo el sitio */}
      <CookieConsent />
      <Routes>
        {/* --- 1. PORTADA --- */}
        <Route path="/" element={<HomePage />} />

        {/* --- 2. VISTAS PÚBLICAS (Envolviendo manualmente con PublicLayout) --- */}
        <Route path="/category/:id" element={<PublicLayout><CategoryPage /></PublicLayout>} />
        <Route path="/news/:slug" element={<PublicLayout><NewsPage /></PublicLayout>} />
        <Route path="/last-hour" element={<PublicLayout><LastHourPage /></PublicLayout>} />
        <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />

        {/* --- BLOQUE LEGAL --- */}
        <Route path="/legal" element={<PublicLayout><AvisoLegal /></PublicLayout>} />
        <Route path="/privacidad" element={<PublicLayout><Privacidad /></PublicLayout>} />
        <Route path="/cookies" element={<PublicLayout><Cookies /></PublicLayout>} />
        <Route path="/etica-editorial" element={<PublicLayout><EticaEditorial /></PublicLayout>} />

        {/* --- 3. DASHBOARD (PROTEGIDO) --- */}
        <Route 
          path="/dashboard/*" 
          element={
            <PrivateRoute>
              <div className="min-h-screen bg-slate-50 flex flex-col">
                <DashboardNavbar />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="create" element={<CreateNews />} /> 
                    <Route path="my-news" element={<MyNews />} /> 
                  </Routes>
                </main>
              </div>
            </PrivateRoute>
          } 
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;