import React, { useState, Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- PÁGINAS ---
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
const Invitacion = lazy(() => import('./pages/Invitacion'));
const Fotos = lazy(() => import('./pages/Fotos'));
const Contacto = lazy(() => import('./pages/Contacto'));
const Compartir = lazy(() => import('./pages/Compartir'));

// --- COMPONENTES ---
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


const TextureWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full min-h-screen bg-[#f4f1ea]">
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-multiply block md:hidden"
        style={{ 
          backgroundImage: "url('/paper-texture-mobile.webp')", 
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 600px'
        }} 
      />
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-multiply hidden md:block"
        style={{ 
          backgroundImage: "url('/paper-texture.webp')", 
          backgroundRepeat: 'repeat',
          backgroundSize: '1920px 1280px'
        }} 
      />
    </div>
    
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const PageLoader = () => <div className="min-h-screen bg-transparent" />;

const AppContent = () => {
  const location = useLocation();
  const isCompartirPage = location.pathname === '/compartir';

  const [loading, setLoading] = useState<boolean>(() => {
    if (window.location.pathname === '/compartir') return false;
    return sessionStorage.getItem('hasSeenAnimation') === null;
  });

  const [showContent, setShowContent] = useState<boolean>(() => {
    if (window.location.pathname === '/compartir') return true;
    return sessionStorage.getItem('hasSeenAnimation') === 'true';
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0); 
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setShowContent(true); 
        sessionStorage.setItem('hasSeenAnimation', 'true');
      }, 700); 
    }, 1200);
  };

  const isHiddenPage = location.pathname === '/compartir';

  return (
    <TextureWrapper>
      <div className="relative antialiased bg-transparent">
        {!isCompartirPage && loading && (
          <AnimatePresence mode="wait">
            <motion.div
              key="envelope-intro"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 z-[200] flex items-center justify-center bg-[#f4f1ea] touch-none"
            >
              <div className="absolute inset-0 bg-repeat opacity-50 pointer-events-none hidden md:block" style={{ backgroundImage: "url('/paper-texture.webp')" }} />
              <div className="absolute inset-0 bg-repeat opacity-30 pointer-events-none block md:hidden" style={{ backgroundImage: "url('/paper-texture-mobile.webp')", backgroundSize: '400px' }} />

              <div className="relative flex flex-col items-center justify-center group">
                
                {/* EL SOBRE */}
                <motion.div 
                  className="relative w-[320px] h-[220px] md:w-[500px] md:h-[340px] cursor-pointer z-20" 
                  onClick={!isOpen ? handleOpen : undefined}
                  whileHover={!isOpen ? { scale: 1.03, y: -5 } : {}}
                  whileTap={!isOpen ? { scale: 0.98 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {/* Cuerpo del sobre en el nuevo Azul Petróleo */}
                  <div className="absolute inset-0 bg-[#46627f] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] border border-black/10 z-10" style={{ backgroundImage: "url('/paper-texture.webp')", backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
                    
                    <motion.div 
                      animate={{ y: isOpen ? -140 : 0 }} 
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }} 
                      className="absolute inset-x-4 top-4 bottom-4 bg-white shadow-2xl flex flex-col items-center justify-start pt-12 md:pt-28 p-8 border border-[#46627f]/10"
                    >
                      <img src="/RMlogo.webp" alt="Logo" className="object-contain h-12 mb-6 md:h-16 opacity-90" />
                      <h2 className="font-serif italic text-lg md:text-2xl text-[#46627f] leading-tight text-center">Rafa + Marta</h2>
                    </motion.div>

                    {/* Solapa del sobre en un tono sutilmente más oscuro para dar volumen */}
                    <motion.div 
                      animate={{ rotateX: isOpen ? 180 : 0 }} 
                      transition={{ duration: 0.8, ease: "easeInOut" }} 
                      className="absolute top-0 left-0 w-full h-1/2 bg-[#354a60] z-30 origin-top shadow-[0_15px_30px_rgba(0,0,0,0.2)]" 
                      style={{ 
                        clipPath: 'polygon(0 0, 100% 0, 50% 100%)', 
                        backgroundImage: "url('/paper-texture.webp')", 
                        backgroundBlendMode: 'multiply', 
                        backfaceVisibility: 'hidden' 
                      }} 
                    />

                    {!isOpen && (
                      <div className="absolute z-40 flex flex-col items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#f4f1ea] rounded-full shadow-2xl border-2 border-[#46627f] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <img 
                            src="/RMlogo.webp" 
                            alt="R+M" 
                            className="w-full h-full object-contain grayscale scale-[1]" 
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>

                {!isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="absolute top-[105%] w-full text-center pointer-events-none transition-all duration-500 ease-out group-hover:translate-y-2 group-hover:opacity-100 opacity-70"
                  >
                    <p className="font-serif italic text-lg md:text-xl text-[#46627f] leading-relaxed px-4">
                      Un mensaje espera por ti... <br />
                      <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold opacity-60 not-italic block mt-3">
                        Pulsa el sobre para abrirlo
                      </span>
                    </p>
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="mt-3 text-[#46627f]/40 flex justify-center"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                      </svg>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* CONTENIDO PRINCIPAL */}
        <div className={`flex flex-col min-h-screen transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {!isHiddenPage && <Header />}
          {!isHiddenPage && <ScrollToTop />}
          
          <main className="relative flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/invitacion" element={<Invitacion />} />
                <Route path="/fotos" element={<Fotos />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/compartir" element={<Compartir />} />
              </Routes>
            </Suspense>
          </main>

          {!isHiddenPage && <Footer />}
        </div>
      </div>
    </TextureWrapper>
  );
};

const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;