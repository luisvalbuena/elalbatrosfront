import { useState } from 'react'; // 1. Importamos useState
import { LogOut, User, Bell, Menu, LayoutDashboard, Newspaper, X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Link, useLocation } from 'react-router-dom';

export default function DashboardNavbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 2. Estado del menú

  const activeLink = (path) => 
    location.pathname === path 
      ? "text-blue-600 bg-blue-50" 
      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50";

  // Función para cerrar el menú al hacer clic en un link
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          {/* 3. Botón que abre el menú en móvil */}
          <Menu 
            className="text-slate-500 lg:hidden cursor-pointer hover:text-blue-600 transition-colors" 
            size={24} 
            onClick={() => setIsMobileMenuOpen(true)}
          />
          <Link to="/dashboard" className="flex items-center gap-2">
            <h2 className="text-sm font-black italic tracking-tighter text-slate-900">
              ALBATROS <span className="text-blue-600">STUDIO</span>
            </h2>
          </Link>
        </div>

        {/* Links Escritorio (Desktop) */}
        <div className="hidden lg:flex items-center gap-1">
          <Link to="/dashboard" className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeLink('/dashboard')}`}>
            <LayoutDashboard size={16} /> Inicio
          </Link>
          <Link to="/dashboard/my-news" className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeLink('/dashboard/my-news')}`}>
            <Newspaper size={16} /> Mis Noticias
          </Link>
        </div>
      </div>

      {/* --- MENÚ MÓVIL (Overlay + Sidebar) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Fondo oscuro (Backdrop) */}
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={closeMenu}></div>
          
          {/* Contenido del Menú Lateral */}
          <div className="fixed inset-y-0 left-0 w-72 bg-white shadow-2xl p-6 animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-sm font-black italic text-slate-900">MENÚ</h2>
              <X className="text-slate-400 cursor-pointer" onClick={closeMenu} />
            </div>
            
            <div className="flex flex-col gap-2">
              <Link to="/dashboard" onClick={closeMenu} className={`flex items-center gap-3 px-4 py-4 rounded-2xl text-sm font-bold ${activeLink('/dashboard')}`}>
                <LayoutDashboard size={20} /> Inicio
              </Link>
              <Link to="/dashboard/my-news" onClick={closeMenu} className={`flex items-center gap-3 px-4 py-4 rounded-2xl text-sm font-bold ${activeLink('/dashboard/my-news')}`}>
                <Newspaper size={20} /> Mis Noticias
              </Link>
              <hr className="my-4 border-slate-100" />
              <button onClick={logout} className="flex items-center gap-3 px-4 py-4 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all">
                <LogOut size={20} /> Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-6">
        {/* Notificaciones y Perfil (Igual que antes) */}
        <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
          <div className="text-right hidden md:block">
            <p className="text-xs font-bold text-slate-900 leading-none">{user?.name}</p>
            <p className="text-[10px] text-slate-400 uppercase mt-1 tracking-wider">{user?.role}</p>
          </div>
          <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center text-blue-600 border border-slate-200">
            <User size={18} />
          </div>
          <button onClick={logout} className="hidden lg:block p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"><LogOut size={18} /></button>
        </div>
      </div>
    </nav>
  );
}