import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const FotosHome = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const fotos = {
    vertical: "/fotos/home-3.webp",  
    horizontal: "/fotos/home-4.webp",  
    cuadrada: "/fotos/home-5.webp",   
    pequena: "/fotos/home-6.webp",     
    larga: "/fotos/home-8.webp"    
  };

  const closeModal = () => setSelectedImg(null);

  return (
    <section className="relative w-full py-24 bg-[#f4f1ea] overflow-hidden" id="fotos">
      
      {/* 1. TEXTURA DE FONDO GLOBAL */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.25] mix-blend-multiply block md:hidden"
          style={{ 
            backgroundImage: "url('/paper-texture-mobile.webp')", 
            backgroundRepeat: 'repeat',
            backgroundSize: '400px 600px'
          }} 
        />
        <div 
          className="absolute inset-0 opacity-[0.2] mix-blend-multiply hidden md:block"
          style={{ 
            backgroundImage: "url('/paper-texture.webp')", 
            backgroundRepeat: 'repeat',
            backgroundSize: '1920px 1280px'
          }} 
        />
      </div>

      <div className="relative z-10 max-w-6xl px-6 mx-auto">
         
        <Reveal>
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-[10px] uppercase tracking-[0.8em] text-[#46627f] font-black mb-4">
              Galería
            </span>
            <h3 className="font-serif italic text-4xl md:text-5xl text-[#2d2d2d]">
              Recuerdos para siempre
            </h3>
            <div className="mt-8 w-12 h-[1px] bg-[#46627f]/20"></div>
          </div>
        </Reveal>

        {/* COMPOSICIÓN DE COLLAGE */}
        <div className="grid grid-cols-2 gap-4 mb-16 md:grid-cols-4 md:gap-6">
          
          {[
            { id: 'vertical', class: 'col-span-1 row-span-2 aspect-[3/4]', delay: 0.2, src: fotos.vertical },
            { id: 'horizontal', class: 'col-span-1 md:col-span-2 aspect-video md:aspect-auto h-full', delay: 0.4, src: fotos.horizontal },
            { id: 'cuadrada', class: 'col-span-1 aspect-square', delay: 0.5, src: fotos.cuadrada },
            { id: 'pequena', class: 'hidden md:block col-span-1 aspect-square', delay: 0.6, src: fotos.pequena },
            { id: 'larga', class: 'col-span-2 aspect-video', delay: 0.7, src: fotos.larga }
          ].map((item) => (
            <div key={item.id} className={item.class}>
              <Reveal delay={item.delay}>
                <div 
                  onClick={() => setSelectedImg(item.src)}
                  className="relative h-full w-full overflow-hidden rounded-sm group cursor-zoom-in shadow-sm border border-[#46627f]/5"
                >
                  {/* TEXTURA SOBRE LA FOTO */}
                  <div className="absolute inset-0 z-20 pointer-events-none mix-blend-multiply opacity-[0.45] group-hover:opacity-30 transition-opacity duration-700">
                    <div 
                      className="absolute inset-0 block md:hidden"
                      style={{ backgroundImage: "url('/paper-texture-mobile.webp')", backgroundSize: '300px' }}
                    />
                    <div 
                      className="absolute inset-0 hidden md:block"
                      style={{ backgroundImage: "url('/paper-texture.webp')", backgroundSize: '400px' }}
                    />
                  </div>
                  
                  <img 
                    src={item.src} 
                    alt="Galería" 
                    className="object-cover w-full h-full transition-all duration-1000 group-hover:scale-105"
                  />
                  {/* Overlay azul sutil al hacer hover */}
                  <div className="absolute inset-0 z-10 bg-[#46627f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delay={0.8}>
          <div className="flex flex-col items-center max-w-xl mx-auto text-center">
            <p className="font-serif text-[#2d2d2d]/70 text-xl md:text-2xl leading-relaxed mb-12 italic">
              "Dicen que una imagen vale más que mil palabras..."
            </p>
            <a href="/fotos" className="flex flex-col items-center gap-3 group">
              <span className="text-[11px] uppercase tracking-[0.5em] text-[#46627f] font-black transition-colors group-hover:text-[#2d2d2d]">
                Ver galería completa
              </span>
              <div className="h-[1px] w-12 bg-[#46627f]/40 overflow-hidden transition-all duration-500 group-hover:w-32">
                <div className="h-full w-full bg-[#46627f] -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </div>
            </a>
          </div>
        </Reveal>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#f4f1ea]/95 backdrop-blur-md p-4"
          >
            <button className="absolute top-6 right-6 text-[#46627f] z-[220] hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden shadow-2xl border border-[#46627f]/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 z-10 pointer-events-none mix-blend-multiply opacity-60">
                <div className="absolute inset-0 block md:hidden" style={{ backgroundImage: "url('/paper-texture-mobile.webp')", backgroundSize: '400px' }} />
                <div className="absolute inset-0 hidden md:block" style={{ backgroundImage: "url('/paper-texture.webp')", backgroundSize: '600px' }} />
              </div>
              <img src={selectedImg} alt="En grande" className="object-contain w-full h-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FotosHome;