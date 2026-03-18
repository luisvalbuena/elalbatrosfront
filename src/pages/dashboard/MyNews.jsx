import React, { useEffect } from 'react';
import { Edit3, Trash2, ExternalLink, Plus, Search, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNews } from '../../hooks/useNews';

export default function MyNews() {
  const { getMyNews, myNews, loading} = useNews();

  useEffect(() => {
    getMyNews();
  }, []);

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Mis Noticias</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Gestiona y edita tus publicaciones editoriales.</p>
        </div>
        <Link 
          to="/dashboard/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2 w-fit"
        >
          <Plus size={18} /> Redactar Nueva
        </Link>
      </div>

      {/* Tabla de Noticias */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Noticia</th>
                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Estado</th>
                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Fecha</th>
                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr>
                  <td colSpan="4" className="p-20 text-center text-slate-400 font-medium">Cargando tus noticias...</td>
                </tr>
              ) : myNews.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-20 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <Newspaper size={48} className="text-slate-200" />
                      <p className="text-slate-400 font-medium">Aún no has publicado ninguna noticia.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                myNews.map((news) => (
                  <tr key={news._id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <img 
                          src={news.mainImage} 
                          alt={news.title} 
                          className="w-14 h-14 rounded-xl object-cover bg-slate-100"
                        />
                        <div className="max-w-xs">
                          <h3 className="font-bold text-slate-900 truncate">{news.title}</h3>
                          <p className="text-xs text-slate-400 font-medium">{news.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                        news.status === 'published' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                      }`}>
                        {news.status === 'published' ? 'Publicado' : 'Borrador'}
                      </span>
                    </td>
                    <td className="p-6">
                      <p className="text-sm text-slate-500 font-medium">
                        {new Date(news.createdAt).toLocaleDateString()}
                      </p>
                    </td>
                    <td className="p-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                          <Edit3 size={18} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                          <Trash2 size={18} />
                        </button>
                        <Link 
                          to={`/news/${news.slug}`} 
                          target="_blank"
                          className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
                        >
                          <ExternalLink size={18} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}