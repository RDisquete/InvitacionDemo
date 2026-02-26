import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Compartir = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const galleryPassword = import.meta.env.VITE_GALLERY_PASSWORD || "Demordisquete";

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    try {
      setUploading(true);
      const files = Array.from(e.target.files);
      
      const uploadPromises = files.map(async (file) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `foto-${Date.now()}-${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
        
        return supabase.storage
          .from('wedding-photos') 
          .upload(`invitados/${fileName}`, file, {
            cacheControl: '3600',
            upsert: false
          });
      });

      const results = await Promise.all(uploadPromises);
      const hasErrors = results.some(res => res.error);
      if (hasErrors) throw new Error("Error en la subida");

      sessionStorage.setItem('wedding_auth', 'true');

      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/fotos');
      }, 4000);

    } catch (err) {
      console.error(err);
      alert("Hubo un problema al subir las fotos.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="fixed inset-0 bg-[#f4f1ea] text-[#2d2d2d] flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply block md:hidden" style={{ backgroundImage: "url('/paper-texture-mobile.webp')", backgroundRepeat: 'repeat', backgroundSize: '400px 600px' }} />
        <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply hidden md:block" style={{ backgroundImage: "url('/paper-texture.webp')", backgroundRepeat: 'repeat', backgroundSize: '1920px 1280px' }} />
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#46627f] text-[#f4f1ea] px-8 text-center"
          >
            {[...Array(8)].map((_, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], y: -100 }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }} className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]" style={{ left: `${Math.random() * 100}%`, bottom: '20%' }} />
            ))}
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
              <span className="text-[10px] uppercase tracking-[0.8em] font-black opacity-50 mb-6 block">Archivo guardado</span>
              <h2 className="font-serif text-5xl md:text-7xl italic leading-tight mb-8">¡Mil gracias por <br/> este recuerdo!</h2>
              <div className="w-20 h-[0.5px] bg-[#f4f1ea]/40 mx-auto mb-8"></div>
              <p className="font-serif text-lg opacity-80 italic max-w-sm mx-auto tracking-wide">Tu mirada ya forma parte de nuestra historia.</p>
              <p className="mt-12 text-[9px] uppercase tracking-[0.4em] opacity-40 animate-pulse">Entrando al álbum...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`relative z-10 flex flex-col items-center justify-between w-full h-full px-6 py-6 text-center transition-all duration-700 ${showSuccess ? 'blur-xl scale-110 opacity-0' : 'opacity-100'}`}>
        <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex flex-col items-center w-full mt-2">
          <img src="/RMlogo.png" alt="Logo" className="w-auto h-12 mb-3 grayscale" />
          <span className="text-[8px] uppercase tracking-[0.6em] text-[#46627f] font-bold block mb-1">Álbum de Invitados</span>
          <h1 className="font-serif text-4xl font-light leading-tight tracking-tight">Vuestra <span className="italic">mirada</span></h1>
        </motion.div>

        <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="w-full max-w-[320px] relative">
          <div className="absolute -inset-2 border-[0.5px] border-[#46627f]/20 pointer-events-none"></div>
          <div className="p-5 border shadow-sm bg-white/20 backdrop-blur-sm border-white/40">
            <p className="font-serif text-[15px] text-[#2d2d2d]/80 italic leading-snug mb-4 px-2">"Hay momentos que se nos escapan. Ayúdanos a recordarlos subiendo tus fotos."</p>
            <div className="pt-4 border-t border-[#46627f]/10">
              <p className="text-[8px] uppercase tracking-[0.3em] text-[#46627f]/60 font-black mb-2">Código de acceso</p>
              <p className="text-xl tracking-[0.15em] font-serif text-[#2d2d2d] leading-tight uppercase font-medium">{galleryPassword}</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-col items-center w-full max-w-[300px] mb-4 relative">
          
          <input 
            type="file" 
            multiple 
            accept="image/*" 
            className="hidden" 
            ref={fileInputRef} 
            onChange={handleUpload}
            disabled={uploading}
          />

          <button 
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="group relative w-full py-4 bg-[#2d2d2d] text-white overflow-hidden shadow-lg active:scale-[0.96] transition-all disabled:opacity-80"
          >
            <div className={`absolute inset-0 bg-[#46627f] transition-transform duration-500 ${uploading ? 'translate-x-0' : 'translate-x-[-100%] group-hover:translate-x-0'}`}></div>
            <span className="relative z-10 text-[10px] uppercase tracking-[0.5em] font-black flex items-center justify-center gap-3">
              {uploading ? (
                <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )}
              {uploading ? 'Guardando recuerdos...' : 'Sube tu mirada'}
            </span>
          </button>
          
          <button 
            onClick={() => { sessionStorage.setItem('wedding_auth', 'true'); navigate('/fotos'); }} 
            className="mt-12 text-[9px] uppercase tracking-[0.4em] text-[#2d2d2d]/50 font-bold hover:text-[#46627f] transition-colors"
          >
            Solo ver el álbum
          </button>
        </motion.div>
        <div className="w-10 h-[0.5px] bg-[#46627f]/20 mb-2"></div>
      </div>
    </div>
  );
};

export default Compartir;