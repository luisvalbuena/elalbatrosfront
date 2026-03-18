import React, { useState } from 'react';
import { Save, Image as ImageIcon, Type, Layout, ArrowLeft, Send, Loader2, AlertCircle, Tag, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNews } from '../../hooks/useNews';

export default function CreateNews() {
  const { createNews, loading, error } = useNews();

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    category: '', 
    mainImage: '',
    paragraph1: '',
    secondaryImage: '',
    paragraph2: '',
    paragraph3: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNews(formData);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 lg:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <form onSubmit={handleSubmit}>
        {/* Header Institucional */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-slate-100">
          <div>
            <Link 
              to="/dashboard" 
              className="text-slate-400 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] mb-4 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={12} strokeWidth={3} /> Volver al panel de control
            </Link>
            <h1 className="text-5xl font-black text-slate-900 tracking-tight">Redacción</h1>
            <p className="text-slate-400 mt-2 font-medium">Gestión y publicación de contenidos editoriales</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              type="button"
              className="bg-white border border-slate-200 text-slate-500 px-6 py-3.5 rounded-xl font-bold text-xs hover:bg-slate-50 hover:text-slate-800 transition-all flex items-center gap-2"
            >
              <Save size={16} /> Guardar borrador
            </button>
            <button 
              type="submit"
              disabled={loading}
              className="bg-slate-900 hover:bg-black disabled:bg-slate-300 text-white px-10 py-3.5 rounded-xl font-bold text-xs shadow-2xl shadow-slate-200 transition-all flex items-center gap-2 active:scale-95"
            >
              {loading ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
              {loading ? 'Procesando...' : 'Publicar noticia'}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-10 bg-red-50 border-l-4 border-red-500 p-5 rounded-r-2xl flex items-center gap-4 text-red-700 text-sm font-semibold">
            <AlertCircle size={20} />
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Columna Principal: Contenido */}
          <div className="lg:col-span-8 space-y-12">
            <section className="space-y-8">
              <div className="flex items-center gap-3 opacity-40">
                <Type size={16} strokeWidth={3} />
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">Cuerpo del artículo</h2>
              </div>
              
              <div className="space-y-8">
                <div className="group space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 tracking-widest group-focus-within:text-blue-600 transition-colors">Titular de impacto</label>
                  <input 
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    type="text" 
                    placeholder="El título que definirá la noticia..."
                    className="w-full p-0 bg-transparent border-none outline-none text-3xl font-bold text-slate-900 placeholder:text-slate-200"
                  />
                  <div className="h-px bg-slate-100 group-focus-within:bg-blue-600 transition-all duration-500" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 tracking-widest">Entradilla (Subtítulo)</label>
                  <textarea 
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    required
                    rows="2"
                    placeholder="Un breve resumen que invite a la lectura..."
                    className="w-full p-5 bg-slate-50/50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-slate-300 transition-all text-base font-medium text-slate-600 resize-none leading-relaxed"
                  />
                </div>

                <div className="space-y-6 pt-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 tracking-widest font-serif italic">Inicio del relato</label>
                    <textarea 
                      name="paragraph1"
                      value={formData.paragraph1}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Comienza a escribir aquí..."
                      className="w-full p-8 bg-white border border-slate-100 rounded-[2rem] outline-none focus:ring-1 focus:ring-slate-200 transition-all text-lg leading-relaxed text-slate-700 font-serif"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 tracking-widest font-serif italic">Desarrollo y Cierre</label>
                    <textarea 
                      name="paragraph2"
                      value={formData.paragraph2}
                      onChange={handleChange}
                      rows="6"
                      className="w-full p-8 bg-white border border-slate-100 rounded-[2rem] outline-none focus:ring-1 focus:ring-slate-200 transition-all text-lg leading-relaxed text-slate-700 font-serif mb-4"
                      placeholder="Continúa la narración..."
                    />
                    <textarea 
                      name="paragraph3"
                      value={formData.paragraph3}
                      onChange={handleChange}
                      rows="6"
                      className="w-full p-8 bg-white border border-slate-100 rounded-[2rem] outline-none focus:ring-1 focus:ring-slate-200 transition-all text-lg leading-relaxed text-slate-700 font-serif"
                      placeholder="Conclusión de la noticia..."
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Columna Lateral: Configuración y Multimedia */}
          <div className="lg:col-span-4 space-y-10">
            {/* Widget de Categoría */}
            <div className="bg-slate-50 p-8 rounded-[2rem] space-y-6 border border-slate-100">
              <div className="flex items-center gap-3 opacity-60">
                <Tag size={16} />
                <h3 className="text-[10px] font-black uppercase tracking-widest">Clasificación</h3>
              </div>
              
              <div className="relative">
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full pl-0 pr-10 py-2 bg-transparent border-b-2 border-slate-200 outline-none focus:border-slate-900 transition-all text-sm font-bold text-slate-800 appearance-none cursor-pointer"
                >
                  <option value="" disabled>Seleccionar sección</option>
                  <option value="Portada">Portada Principal</option>
                  <option value="España">Sección España</option>
                  <option value="Economía">Sección Economía</option>
                  <option value="Mundo">Sección Mundo</option>
                  <option value="Sociedad">Sección Sociedad</option>
                  <option value="Cultura">Sección Cultura</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
              </div>
            </div>

            {/* Widget de Multimedia */}
            <div className="bg-white p-8 rounded-[2rem] space-y-6 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 opacity-60">
                <ImageIcon size={16} />
                <h3 className="text-[10px] font-black uppercase tracking-widest">Multimedia</h3>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Imagen Principal (URL)</label>
                  <input 
                    name="mainImage"
                    value={formData.mainImage}
                    onChange={handleChange}
                    required
                    type="url" 
                    placeholder="https://..."
                    className="w-full p-3 bg-slate-50 border border-transparent rounded-xl outline-none focus:bg-white focus:border-slate-200 transition-all text-xs font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Imagen de apoyo (Opcional)</label>
                  <input 
                    name="secondaryImage"
                    value={formData.secondaryImage}
                    onChange={handleChange}
                    type="url" 
                    placeholder="https://..."
                    className="w-full p-3 bg-slate-50 border border-transparent rounded-xl outline-none focus:bg-white focus:border-slate-200 transition-all text-xs font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Guía de Estilo Rápida */}
            <div className="p-8 border border-slate-100 rounded-[2rem]">
                <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-slate-400 italic">Nota Editorial</h4>
                <p className="text-[11px] leading-relaxed text-slate-400">
                    Recuerde que las noticias de <strong>Portada</strong> deben mantener un tono neutral y contar con al menos dos párrafos de desarrollo técnico.
                </p>
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-100 flex justify-center">
            <div className="flex items-center gap-4 grayscale opacity-30">
                <span className="text-[9px] font-black tracking-[0.4em] uppercase text-slate-900">El Albatros Editorial System</span>
            </div>
        </footer>
      </form>
    </div>
  );
}