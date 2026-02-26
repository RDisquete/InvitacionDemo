import Reveal from '../components/Reveal';

const SectionTexture = ({ opacity = "opacity-[0.25]", blendMode = "mix-blend-multiply" }) => (
  <div className={`absolute inset-0 z-40 pointer-events-none overflow-hidden select-none ${opacity} ${blendMode}`}>
    <div 
      className="absolute inset-0" 
      style={{ 
        backgroundImage: "url('/paper-texture.webp')", 
        backgroundRepeat: 'repeat', 
        backgroundSize: '1200px',
        // Esto difumina los bordes de la textura para que no se noten los cortes entre secciones
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
      }} 
    />
  </div>
);

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#2d2d2d] font-serif">

{/* 1. HERO: CINEMATIC NOIR - POSICIÓN INFERIOR */}
<section className="relative w-full h-[100svh] flex flex-col justify-end pb-24 md:pb-32 overflow-hidden bg-[#0b0e06]">
  {/* Textura sutil en modo pantalla para que vibre sobre lo oscuro */}
  <SectionTexture opacity="opacity-[0.12]" blendMode="mix-blend-screen" />
  
  <div className="absolute inset-0 z-0">
    <img 
      src="/fotos/home-7.webp" 
      alt="Hero" 
      className="object-cover w-full h-full scale-105 brightness-[0.7] grayscale-[10%]" 
    />
    
    {/* CAPA DE COLOR: Unifica tonos azules/crema */}
    <div className="absolute inset-0 bg-[#46627f]/15 mix-blend-multiply"></div>
    
    {/* VIÑETEADO RADIAL: Oscurece bordes, no es degradado blanco */}
    <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_30%,_rgba(0,0,0,0.5)_100%)]"></div>
    
    {/* GRADIENTE INFERIOR: Sutil sombra negra (no blanca) para despegar el texto */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
  </div>

  <div className="relative z-20 w-full px-6 text-center">
    <Reveal>
      {/* Etiqueta superior sutil */}
      <span className="text-[10px] md:text-[12px] uppercase tracking-[1em] font-black text-white/70 mb-6 block drop-shadow-md">
        Crónica de un Hallazgo
      </span>
      
      <div className="flex flex-col items-center">
        {/* "Donde todo" más pequeño y elegante */}
        <h1 className="text-[14vw] md:text-[9vw] text-white/95 leading-none tracking-tight drop-shadow-2xl">
          Donde todo
        </h1>
        
        {/* "comenzó" protagonista, justo encima del final del scroll */}
        <h1 className="text-[18vw] md:text-[12vw] font-serif italic text-[#46627f] leading-[0.6] tracking-tighter mt-2 brightness-150 drop-shadow-2xl">
          comenzó
        </h1>
      </div>
      
      {/* Indicador de scroll minimalista */}
      <div className="mt-12 flex justify-center opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </Reveal>
  </div>
</section>

      {/* 2. ACTO I: EL ENCUENTRO DE LOS OPUESTOS */}
      <section className="relative py-32 px-6 overflow-hidden">
        <SectionTexture opacity="opacity-[0.12]" />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <Reveal>
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-6xl italic leading-tight text-[#0e1107]">Dos mundos <br /> en colisión.</h2>
                  <div className="h-px w-20 bg-[#46627f]/60"></div>
                  <p className="text-xl md:text-2xl text-[#2d2d2d] leading-relaxed font-light opacity-90">
                    Ella era el <span className="text-[#46627f] font-bold">ruido</span> de la ciudad, la prisa y la agenda llena.
                    Él era el <span className="text-[#46627f] font-bold">silencio</span> de la pausa, la calma y el tiempo lento.
                  </p>
                  <p className="text-lg italic text-[#2d2d2d]/60">
                    Un error de cálculo que resultó ser la respuesta a todo.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <Reveal delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  <img src="/fotos/home-5.webp" className="w-full aspect-[3/4] object-cover shadow-2xl mt-12 hover:scale-[1.02] transition-transform duration-700" alt="Foto" />
                  <img src="/fotos/home-9.webp" className="w-full aspect-[3/4] object-cover shadow-2xl hover:scale-[1.02] transition-transform duration-700" alt="Foto" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACTO II: LA GEOGRAFÍA (TEXTO SOBRE AZUL) */}
      <section className="relative py-32 bg-[#46627f] text-[#f4f1ea]">
        <SectionTexture blendMode="mix-blend-overlay" opacity="opacity-[0.3]" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-2xl md:text-4xl italic font-light leading-snug drop-shadow-md">
              "De estaciones de tren a mudanzas improvisadas.<br />
              Descubrimos que <span className="font-bold border-b border-white/40">el hogar</span> no es un sitio,<br />
              es la persona que te espera al final del mapa."
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. GALERÍA EDITORIAL: LA COTIDIANIDAD */}
      <section className="relative py-32 px-6 bg-[#f4f1ea]">
        <SectionTexture opacity="opacity-[0.15]" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <Reveal>
                <div className="overflow-hidden shadow-xl">
                   <img src="/fotos/home-6.webp" className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Foto" />
                </div>
                <h4 className="text-2xl italic text-[#46627f]">La lógica y el azar.</h4>
                <p className="opacity-70 leading-relaxed">Ella organiza los domingos por colores; él prefiere que el azar dicte el menú.</p>
              </Reveal>
            </div>

            <div className="md:mt-24">
              <Reveal delay={0.2}>
                <img src="/fotos/home-8.webp" className="w-full aspect-[2/3] object-cover shadow-3xl" alt="Foto Central" />
              </Reveal>
            </div>

            <div className="space-y-6 flex flex-col justify-end">
              <Reveal delay={0.4}>
                <div className="p-8 border-l border-[#46627f]/20 mb-8 bg-white/30 backdrop-blur-sm">
                  <p className="text-xl italic opacity-80 leading-relaxed">
                    "No buscamos ser iguales, sino ser el equipo que sabe cuándo sostener y cuándo soltar."
                  </p>
                </div>
                <img src="/fotos/home-11.webp" className="w-full aspect-square object-cover shadow-xl" alt="Foto" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CIERRE: EL CAPÍTULO FINAL */}
      <section className="relative py-48 bg-[#0b0e06] text-[#f4f1ea] text-center overflow-hidden">
        <SectionTexture blendMode="mix-blend-overlay" opacity="opacity-[0.25]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[1.2em] text-[#46627f] block font-black mb-8 brightness-125">10.10.2026</span>
            <h2 className="text-7xl md:text-[10vw] italic leading-none tracking-tighter mb-12 drop-shadow-2xl text-white">
              Escribirnos.
            </h2>
            <p className="text-xl md:text-2xl text-white/70 italic max-w-xl mx-auto leading-relaxed">
              Lo que empezó como una casualidad, <br /> terminó siendo nuestra mejor decisión.
            </p>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

export default Nosotros;