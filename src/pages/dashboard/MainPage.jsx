import { FileText, PlusCircle, Eye, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. Importamos el hook
import { useAuth } from '../../hooks/useAuth';

export default function MainPage() {
  const { user } = useAuth();
  const navigate = useNavigate(); // 2. Inicializamos la navegación

  const stats = [
    { label: 'Mis Noticias', value: '12', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Visualizaciones', value: '1.2k', icon: Eye, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Comentarios', value: '45', icon: MessageSquare, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  return (
    <div className="space-y-8 p-6 lg:p-10 max-w-7xl mx-auto">
      {/* Bienvenida */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            ¡Hola de nuevo, {user?.name?.split(' ')[0] || 'Redactor'}! 👋
          </h1>
          <p className="text-slate-500 text-sm mt-1">Aquí tienes un resumen de tu actividad editorial.</p>
        </div>
        
        {/* 3. Agregamos el evento onClick para navegar a /dashboard/create */}
        <button 
          onClick={() => navigate('/dashboard/create')}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]"
        >
          <PlusCircle size={18} />
          Crear Nueva Noticia
        </button>
      </header>

      {/* Grid de Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-5">
            <div className={`p-4 rounded-2xl ${item.bg} ${item.color}`}>
              <item.icon size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
              <h3 className="text-2xl font-black text-slate-900 mt-1">{item.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder para últimas tareas */}
      <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2">Consejo Editorial</h3>
          <p className="text-slate-400 text-sm max-w-md">
            Recuerda que las imágenes de portada deben tener una resolución mínima de 1200px para mantener la calidad en la web pública.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-8 opacity-10">
            <FileText size={120} />
        </div>
      </div>
    </div>
  );
}