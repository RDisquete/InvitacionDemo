import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import imageCompression from 'browser-image-compression';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import Reveal from '../components/Reveal';

// Configuración Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
const supabase = (supabaseUrl && supabaseAnonKey) ? createClient(supabaseUrl, supabaseAnonKey) : null;

const LocalTexture = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div className={`absolute inset-0 opacity-[0.15] mix-blend-multiply block md:hidden`}
      style={{ backgroundImage: "url('/paper-texture-mobile.webp')", backgroundRepeat: 'repeat', backgroundSize: '400px 600px' }} 
    />
    <div className={`absolute inset-0 opacity-[0.25] mix-blend-multiply hidden md:block`}
      style={{ backgroundImage: "url('/paper-texture.webp')", backgroundRepeat: 'repeat', backgroundSize: '1920px 1280px' }} 
    />
  </div>
);

const Fotos = () => {
  const [supabasePhotos, setSupabasePhotos] = useState<string[]>([]); 
  const [uploading, setUploading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedImg, setSelectedImg] = useState<number | null>(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const publicPhotos = [
    "/fotos/fotos-1.webp", 
    "/fotos/fotos-2.webp", 
    "/fotos/fotos-3.webp", 
    "/fotos/fotos-4.webp", 
    "/fotos/fotos-5.webp", 
    "/fotos/fotos-6.webp",
    "/fotos/fotos-7.webp",
    "/fotos/fotos-8.webp",];

  const fetchPhotos = useCallback(async () => {
    if (!supabase) return;
    try {
      const { data, error: fetchError } = await supabase.storage
        .from('fotos')
        .list('', { 
          limit: 100, 
          sortBy: { column: 'name', order: 'desc' } 
        });

      if (fetchError) throw fetchError;
      
      if (data) {
        const urls = data
          .filter(f => f.name !== '.emptyFolderPlaceholder')
          .map(f => supabase.storage.from('fotos').getPublicUrl(f.name).data.publicUrl);
        
        setSupabasePhotos(urls);
      }
    } catch (err) { 
      console.log("Error al cargar fotos:", err); 
    }
  }, []);

  useEffect(() => {
    const auth = sessionStorage.getItem('wedding_auth');
    if (auth === 'true') {
        setIsAuthorized(true);
    }
    fetchPhotos();
  }, [fetchPhotos]);

  const photosToDisplay = isAuthorized ? supabasePhotos : publicPhotos;

  const nextImage = useCallback(() => {
    setSelectedImg((prev) => (prev === null ? null : (prev + 1) % photosToDisplay.length));
  }, [photosToDisplay.length]);

  const prevImage = useCallback(() => {
    setSelectedImg((prev) => (prev === null ? null : (prev - 1 + photosToDisplay.length) % photosToDisplay.length));
  }, [photosToDisplay.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImg === null) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setSelectedImg(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImg, nextImage, prevImage]);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_GALLERY_PASSWORD;
    if (passwordInput.toUpperCase() === correctPassword?.toUpperCase()) {
      setIsAuthorized(true);
      sessionStorage.setItem('wedding_auth', 'true');
      setShowPasswordModal(false);
      setPasswordInput("");
    } else { alert("Contraseña incorrecta"); }
  };

  const uploadPhoto = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!supabase || !isAuthorized) return;
    const files = event.target.files;
    if (!files || files.length === 0) return;
    try {
      setUploading(true);
      const options = { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true };
      
      for (const file of Array.from(files)) {
        const compressedFile = await imageCompression(file, options);
        const fileExt = file.name.split('.').pop();
        const uniqueName = `foto-${Date.now()}-${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
        
        await supabase.storage.from('fotos').upload(uniqueName, compressedFile);
      }
      
      await fetchPhotos();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4500);
    } catch (err) { 
      alert("Error al subir"); 
      console.error(err);
    } finally {
      setUploading(false);
      if (event.target) event.target.value = "";
    }
  };

  const downloadImage = async (url: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `recuerdo-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch { window.open(url, '_blank'); }
  };

  const dragX = useMotionValue(0);
  const dragThreshold = 100;

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -dragThreshold) {
      nextImage();
    } else if (x >= dragThreshold) {
      prevImage();
    }
    dragX.set(0);
  };

  return (
    <div className={`relative min-h-screen bg-[#f4f1ea] text-[#2d2d2d] ${selectedImg !== null || showPasswordModal || showSuccess ? 'overflow-hidden' : ''}`}>
      <LocalTexture />

      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[#46627f] text-[#f4f1ea] px-8 text-center"
          >
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <h2 className="font-serif text-5xl md:text-7xl italic leading-tight mb-8">¡Mil gracias por <br/> este recuerdo!</h2>
              <p className="font-serif text-lg md:text-xl opacity-80 italic max-w-sm mx-auto">Tu mirada ya forma parte de nuestra historia.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTENEDOR PRINCIPAL CON PADDING SUPERIOR EXTRA PARA QUE NO ESTÉ PEGADO ARRIBA */}
      <div className={`relative z-10 max-w-7xl px-6 pt-32 md:pt-48 pb-24 mx-auto transition-all duration-700 
        ${(showPasswordModal || selectedImg !== null || showSuccess) ? 'blur-md opacity-20 scale-95' : 'opacity-100'}`}>
        
        <Reveal>
          <header className="flex flex-col items-center mb-16 text-center">
            <h1 className="font-serif text-6xl md:text-[8vw] italic leading-none tracking-tighter mb-12 text-[#2d2d2d]">
              {isAuthorized ? 'Carrete de Invitados' : 'Momentos compartidos'}
            </h1>
            
            {/* FRASE POÉTICA RECUPERADA */}
            <div className="max-w-2xl px-4 mx-auto mb-16">
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-[#46627f] italic opacity-80">
                "Dicen que la belleza de los recuerdos reside en compartirlos. 
                Este es nuestro rincón para atesorar cada sonrisa y cada instante."
              </p>
            </div>

            <div className="flex flex-col items-center">
              {isAuthorized ? (
                <div className="space-y-6 text-center">
                  <label className="relative inline-flex flex-col items-center cursor-pointer group">
                    <span className="text-[11px] md:text-[13px] uppercase tracking-[0.6em] font-black mb-2 group-hover:text-[#46627f] transition-colors">
                      {uploading ? 'Guardando recuerdos...' : 'Compartir mis fotos'}
                    </span>
                    <div className="h-[1px] w-full bg-[#2d2d2d]/20 overflow-hidden">
                      <div className="h-full w-full bg-[#46627f] -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    </div>
                    <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={uploadPhoto} className="hidden" disabled={uploading} />
                  </label>
                  <button onClick={() => { sessionStorage.removeItem('wedding_auth'); setIsAuthorized(false); }} className="block w-full text-[9px] uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity italic">
                    Cerrar sesión
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <button onClick={() => setShowPasswordModal(true)} className="relative flex flex-col items-center px-4 py-2 group mb-10">
                    <span className="relative z-10 text-[11px] md:text-[13px] uppercase tracking-[0.8em] font-black transition-all duration-500 group-hover:tracking-[1em] group-hover:text-[#46627f]">
                      Acceso Galería Privada
                    </span>
                    <div className="mt-4 w-16 h-[1px] bg-[#2d2d2d]/30 transition-all duration-700 group-hover:w-full group-hover:bg-[#46627f]"></div>
                  </button>
                  
                  {/* TEXTO DE CONTRASEÑA DEMO INTEGRADO */}
                  <div className="flex flex-col items-center py-4 border-t border-black/5">
                    <span className="text-[9px] uppercase tracking-[0.3em] opacity-30 font-serif italic">
                      Contraseña demo: <span className="font-sans font-bold">demordisquete</span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </header>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 gap-2 md:gap-3 mb-2 md:grid-cols-12 md:h-[110vh]">
            {photosToDisplay.length > 0 ? (
              <>
                <div onClick={() => setSelectedImg(0)} className="relative col-span-2 overflow-hidden border md:col-span-5 md:row-span-2 group bg-stone-200 cursor-zoom-in border-black/5">
                  <img src={photosToDisplay[0]} alt="01" className={`object-cover w-full h-full transition-all duration-1000 group-hover:scale-105 ${!isAuthorized ? '' : ''}`} />
                </div>
                {photosToDisplay[1] && (
                  <div onClick={() => setSelectedImg(1)} className="relative col-span-2 overflow-hidden border md:col-span-7 md:row-span-1 group bg-stone-200 cursor-zoom-in border-black/5">
                    <img src={photosToDisplay[1]} alt="02" className={`object-cover w-full h-full transition-all duration-1000 group-hover:scale-105 ${!isAuthorized ? '' : ''}`} />
                  </div>
                )}
                {photosToDisplay[2] && (
                  <div onClick={() => setSelectedImg(2)} className="relative col-span-1 overflow-hidden border md:col-span-3 md:row-span-1 group bg-stone-200 cursor-zoom-in border-black/5">
                    <img src={photosToDisplay[2]} alt="03" className={`object-cover w-full h-full transition-all duration-1000 group-hover:scale-105 ${!isAuthorized ? '' : ''}`} />
                  </div>
                )}
                {photosToDisplay[3] && (
                  <div onClick={() => setSelectedImg(3)} className="relative col-span-1 overflow-hidden border md:col-span-4 md:row-span-1 group bg-stone-200 cursor-zoom-in border-black/5">
                    <img src={photosToDisplay[3]} alt="04" className={`object-cover w-full h-full transition-all duration-1000 group-hover:scale-110 ${!isAuthorized ? '' : ''}`} />
                  </div>
                )}
              </>
            ) : (
              <div className="col-span-12 py-32 font-serif italic text-center opacity-40">Aún no hay fotos en esta galería.</div>
            )}
          </div>
        </Reveal>

        {/* RESTO DE LA GALERÍA */}
        <Reveal>
          <div className="grid grid-cols-2 gap-2 mt-2 md:grid-cols-4 md:gap-3">
            {photosToDisplay.slice(4).map((url, i) => (
              <div key={i} onClick={() => setSelectedImg(i + 4)} className="group cursor-zoom-in relative aspect-[4/5] overflow-hidden bg-stone-200 border border-black/5">
                <img src={url} alt={`Ref ${i}`} className={`object-cover w-full h-full transition-all duration-1000 group-hover:scale-110 ${!isAuthorized ? '' : ''}`} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Modal de Password */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-[#f4f1ea]/80 backdrop-blur-md">
          <div className="relative z-10 w-full max-w-sm p-12 bg-white shadow-2xl border border-[#46627f]/10 text-center">
            <h3 className="mb-8 font-serif text-2xl italic text-[#2d2d2d]">Galería Privada</h3>
            <form onSubmit={handleAuth} className="space-y-6">
              <input autoFocus type="password" placeholder="Introduce el código" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} className="w-full bg-transparent border-b-2 border-[#46627f]/20 py-3 text-center font-serif focus:outline-none focus:border-[#46627f]" />
              <button type="submit" className="w-full py-4 bg-[#2d2d2d] text-white text-[10px] uppercase font-black tracking-widest hover:bg-[#46627f]">Entrar</button>
              <button onClick={() => setShowPasswordModal(false)} type="button" className="w-full text-[9px] opacity-30 italic">Cancelar</button>
            </form>
          </div>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#f4f1ea]/95 backdrop-blur-sm p-4"
          >
            <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-[220]">
              <button onClick={() => downloadImage(photosToDisplay[selectedImg!])} className="text-[#46627f] uppercase text-[9px] tracking-widest font-bold">Descargar</button>
              <button onClick={() => setSelectedImg(null)} className="text-[#46627f] uppercase text-[9px] tracking-widest font-bold">Cerrar</button>
            </div>
            
            <div className="relative z-[210] flex flex-col items-center w-full h-full justify-center overflow-hidden">
              <motion.img 
                key={selectedImg}
                src={photosToDisplay[selectedImg]} 
                drag="x" dragConstraints={{ left: 0, right: 0 }} onDragEnd={onDragEnd}
                className="object-contain max-w-full max-h-[80vh] shadow-2xl" 
              />
              <p className="mt-8 text-[10px] uppercase tracking-[0.6em] text-[#46627f]/40 font-black">{selectedImg + 1} / {photosToDisplay.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Fotos;