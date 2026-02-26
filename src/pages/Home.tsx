import { motion } from 'framer-motion';
import ContactoHome from "../components/ContactoHome";
import Esencia from "../components/Esencia";
import FotosHome from "../components/FotosHome";
import ManifiestoYCuentaAtras from "../components/ManifiestoYCuentaAtras";
import NosotrosHome from "../components/NosotrosHome";
import Reveal from "../components/Reveal";

const GlobalTexture = () => (
  <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
    <div 
      className="absolute inset-0 opacity-[0.08] mix-blend-multiply block md:hidden"
      style={{ backgroundImage: "url('/paper-texture-mobile.webp')", backgroundRepeat: 'repeat', backgroundSize: '400px 600px' }} 
    />
    <div 
      className="absolute inset-0 opacity-[0.08] mix-blend-multiply hidden md:block"
      style={{ backgroundImage: "url('/paper-texture.webp')", backgroundRepeat: 'repeat', backgroundSize: '1920px 1280px' }} 
    />
  </div>
);

const Home = () => {
  // Imagen única para impacto editorial
  const heroImage = '/fotos/home-1.webp';

  return (
    <main className="relative w-full bg-[#f4f1ea] min-h-screen overflow-x-hidden">
      <GlobalTexture />

      {/* 1. HERO SECTION: IMPACTO CINEMATOGRÁFICO */}
      <section className="relative flex flex-col justify-end pb-20 md:pb-28 w-full h-[100svh] overflow-hidden bg-black">
        
        <div className="absolute inset-0 z-0">
          {/* Efecto Ken Burns: Zoom suave de 1.1 a 1 */}
          <motion.img
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            src={heroImage}
            alt="Portada Portfolio"
            className="w-full h-full object-cover brightness-[0.5] grayscale-[5%]"
          />

          {/* Marca de agua sutil '26' */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08] z-10">
             <Reveal delay={0.4} duration={2}>
                <span className="font-serif text-[75vw] md:text-[50vw] text-[#46627f] italic font-bold">26</span>
             </Reveal>
          </div>

          {/* Gradientes de profundidad */}
          <div className="absolute inset-0 z-20 bg-[radial-gradient(circle,_transparent_30%,_rgba(0,0,0,0.4)_100%)]"></div>
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        </div>

        {/* CONTENIDO POSICIONADO EN EL TERCIO INFERIOR */}
        <div className="relative z-30 flex flex-col items-center w-full px-6 text-center">
          <div className="flex flex-col items-center">
            
            {/* Título Principal */}
            <Reveal delay={0.6} duration={1.5}>
              <div className="flex items-center gap-4 md:gap-10 mb-4">
                <div className="w-8 md:w-20 h-[1px] bg-white/20"></div>
                <h1 className="font-serif text-4xl md:text-8xl italic text-white tracking-tighter drop-shadow-2xl">
                   Veintiseis Diciembre
                </h1>
                <div className="w-8 md:w-20 h-[1px] bg-white/20"></div>
              </div>
            </Reveal>

            {/* Año y Slogan */}
            <Reveal delay={0.8} duration={1.2}>
              <div className="flex flex-col items-center">
                <span className="text-white/60 text-[12px] md:text-[16px] tracking-[0.9em] font-light uppercase mb-12">
                  Dos Mil Veintiseis
                </span>
                
                <div className="flex flex-col items-center gap-1">
                  <span className="text-white/40 text-[9px] md:text-[11px] uppercase tracking-[0.5em] font-bold">
                    No es negociable:
                  </span>
                  <span className="text-[#46627f] font-serif italic text-[28px] md:text-[45px] leading-none brightness-150 lowercase tracking-tight drop-shadow-sm">
                    me quedo contigo.
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Indicador de Scroll Minimalista */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30 opacity-40">
           <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* 2. RESTO DE SECCIONES */}
      <div className="relative z-10 bg-[#f4f1ea]">
        <ManifiestoYCuentaAtras />
        <Esencia />
        <NosotrosHome />
        <FotosHome />
        <ContactoHome />
      </div>
    </main>
  );
};

export default Home;