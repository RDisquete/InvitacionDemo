import Reveal from './Reveal';

const NosotrosHome = () => {
    return (
      <section className="relative w-full py-24 md:py-32 bg-[#f4f1ea] overflow-hidden" id="nosotros">
        
        {/* 1. TEXTURA DE FONDO GLOBAL */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Móvil */}
          <div 
            className="absolute inset-0 opacity-[0.15] mix-blend-multiply block md:hidden"
            style={{ 
              backgroundImage: "url('/paper-texture-mobile.webp')", 
              backgroundRepeat: 'repeat',
              backgroundSize: '400px 600px'
            }} 
          />
          {/* Escritorio */}
          <div 
            className="absolute inset-0 opacity-[0.2] mix-blend-multiply hidden md:block"
            style={{ 
              backgroundImage: "url('/paper-texture.webp')", 
              backgroundRepeat: 'repeat',
              backgroundSize: '1920px 1280px'
            }} 
          />
        </div>
  
        <div className="relative z-10 grid items-center grid-cols-1 gap-16 px-6 mx-auto max-w-7xl md:grid-cols-2 md:gap-12">
          
          {/* IMAGEN DE LA IZQUIERDA */}
          <Reveal delay={0.1}>
            <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden shadow-2xl shadow-[#46627f]/5 group rounded-sm">
          
              <div className="absolute inset-0 z-20 pointer-events-none mix-blend-multiply opacity-[0.40] group-hover:opacity-25 transition-opacity duration-700">
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
                src="/fotos/home-2.webp" 
                alt="Nosotros" 
                className="relative z-10 object-cover object-center w-full h-full transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay de color azul muy sutil para unificar tonos con el diseño */}
              <div className="absolute inset-0 z-15 bg-[#46627f]/5 mix-blend-multiply pointer-events-none"></div>
            </div>
          </Reveal>
  
          {/* CONTENIDO DE TEXTO Y BOTÓN */}
          <div className="flex flex-col items-start text-left md:pl-16">
            
            <Reveal delay={0.3}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-[#46627f]/30"></div>
                <span className="text-[11px] uppercase tracking-[0.6em] text-[#46627f]/70 font-bold">
                  Nosotros
                </span>
              </div>
            </Reveal>
  
            <Reveal delay={0.4}>
              <h3 className="font-serif italic text-4xl md:text-6xl text-[#46627f] leading-[1.1] mb-10">
                Lo que siempre fue <br />
                <span className="font-bold not-italic text-[#2d2d2d]">lo que por fin es.</span>
              </h3>
            </Reveal>
            
            <Reveal delay={0.5}>
              <p className="font-serif text-[#2d2d2d]/80 text-xl md:text-2xl leading-relaxed max-w-lg mb-12 italic">
                "Hay historias que no necesitan presentación porque se escriben solas. Lo nuestro ha sido un viaje de complicidad y calma, y no entendemos este paso sin las personas que habéis sido testigos de cada kilómetro recorrido."
              </p>
            </Reveal>
  
            <Reveal delay={0.6}>
              <a 
                href="/nosotros" 
                className="flex flex-col items-start gap-3 group"
              >
                <span className="text-[12px] uppercase tracking-[0.6em] text-[#46627f] font-black transition-colors duration-300 group-hover:text-[#2d2d2d]">
                  Nuestra historia completa
                </span>
                <div className="h-[1px] w-40 bg-[#46627f]/20 overflow-hidden">
                  <div className="h-full w-full bg-[#46627f] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    );
  };
  
  export default NosotrosHome;