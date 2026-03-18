import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'; 

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result && result.success) {
      navigate('/dashboard');
    }
  };

  return (
    // min-h-[80vh] asegura que no se pegue al footer, p-4 para margen en móviles
    <div className="min-h-[85vh] flex items-center justify-center p-4 sm:p-8 font-serif bg-[#FDFDFD]">
      <div className="w-full max-w-md transition-all duration-300">
        
        {/* Cabecera Sutil */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#002855] font-sans">
            Terminal de Redacción
          </p>
          <div className="h-px w-10 bg-gray-200 mx-auto mt-4"></div>
        </div>

        {/* Caja de Login */}
        <div className="bg-white border border-gray-100 p-6 md:p-14 shadow-[0_10px_50px_-20px_rgba(0,0,0,0.04)]">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 mb-2 italic">
              Identificación
            </h2>
            <p className="text-[10px] text-gray-400 font-sans uppercase tracking-[0.2em]">
              Acceso Restringido
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-8 border-l-2 border-red-600 bg-red-50/50 p-3 md:p-4 animate-in fade-in slide-in-from-top-1">
              <p className="text-[9px] md:text-[10px] text-red-700 font-sans font-bold uppercase tracking-tight">
                {error}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10 font-sans">
            {/* Campo Email */}
            <div className="space-y-2">
              <label className="text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">
                Correo Corporativo
              </label>
              <div className="relative border-b border-gray-100 focus-within:border-[#002855] transition-all">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="redactor@elalbatros.es"
                  className="w-full py-2.5 md:py-3 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-200"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            {/* Campo Password */}
            <div className="space-y-2">
              <label className="text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">
                Contraseña
              </label>
              <div className="relative border-b border-gray-100 focus-within:border-[#002855] transition-all">
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pr-10 py-2.5 md:py-3 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-200"
                  required
                  disabled={loading}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-200 hover:text-[#002855]"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Botón */}
            <button 
              type="submit"
              disabled={loading}
              className={`w-full py-4 md:py-5 font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-4 ${
                loading 
                ? 'bg-gray-50 text-gray-300 cursor-not-allowed border border-gray-100' 
                : 'bg-[#002855] text-white hover:bg-black shadow-md hover:shadow-xl'
              }`}
            >
              {loading ? (
                <Loader2 className="animate-spin" size={16} />
              ) : (
                <>
                  Entrar al Panel
                  <ArrowRight size={14} className="hidden sm:block" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer Técnico */}
        <div className="mt-12 md:mt-16 flex flex-col items-center gap-4 border-t border-gray-50 pt-8">
          <div className="flex items-center gap-2.5 text-gray-200">
            <ShieldCheck size={11} />
            <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.3em]">
              Encripción SSL activa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}