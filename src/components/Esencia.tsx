import Reveal from './Reveal';

const Esencia = () => {
  return (
    <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 bg-[#f4f1ea] overflow-hidden">
      
      {/* CAPA DE TEXTURA DOBLE */}
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
          className="absolute inset-0 opacity-[0.25] mix-blend-multiply hidden md:block"
          style={{ 
            backgroundImage: "url('/paper-texture.webp')", 
            backgroundRepeat: 'repeat',
            backgroundSize: '1920px 1280px'
          }} 
        />
      </div>

      <div className="relative z-10 max-w-6xl px-8 mx-auto">
        
        {/* CABECERA */}
        <Reveal>
          <div className="flex flex-col items-center mb-16 text-center md:mb-24">
            <h3 className="font-serif italic text-4xl md:text-5xl text-[#46627f] mb-6">
              Tres cositas importantes...
            </h3>
            <p className="text-[11px] md:text-[12px] uppercase tracking-[0.5em] text-[#46627f]/60 font-extrabold">
              Para que disfrutemos juntos al máximo
            </p>
            <div className="mt-10 w-12 h-[1px] bg-[#46627f]/30"></div>
          </div>
        </Reveal>

        {/* CONTENIDO CON EL NUEVO AZUL */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          
          {/* 01. DRESS CODE */}
          <Reveal delay={0.2}>
            <div className="flex flex-col items-center p-8 text-center transition-all duration-700 group hover:bg-white/40 rounded-2xl border border-transparent hover:border-[#46627f]/10">
              <div className="w-14 h-14 mb-10 flex items-center justify-center rounded-full border border-[#46627f]/20 text-[#46627f] font-serif italic text-2xl transition-all duration-500 group-hover:bg-[#46627f] group-hover:text-[#f4f1ea]">
                1.
              </div>
              <h4 className="text-[12px] uppercase tracking-[0.4em] text-[#46627f] font-black mb-8">¿Qué me pongo?</h4>
              <p className="font-serif italic text-[#2d2d2d]/80 text-xl md:text-2xl leading-relaxed">
                Queremos que estéis guapos, pero sobre todo <span className="text-[#46627f] font-semibold">que estéis cómodos</span>. Elige algo elegante pero fresquito para disfrutar entre olivos.
              </p>
            </div>
          </Reveal>

          {/* 02. PEQUEÑOS INVITADOS */}
          <Reveal delay={0.4}>
            <div className="group flex flex-col items-center text-center p-8 border-y md:border-y-0 md:border-x border-[#46627f]/10 transition-all duration-700 hover:bg-white/40 rounded-2xl">
              <div className="w-14 h-14 mb-10 flex items-center justify-center rounded-full border border-[#46627f]/20 text-[#46627f] font-serif italic text-2xl transition-all duration-500 group-hover:bg-[#46627f] group-hover:text-[#f4f1ea]">
                2.
              </div>
              <h4 className="text-[12px] uppercase tracking-[0.4em] text-[#46627f] font-black mb-8">Pequeños invitados</h4>
              <p className="font-serif italic text-[#2d2d2d]/80 text-xl md:text-2xl leading-relaxed">
                Como sabéis, <span className="text-[#46627f] font-semibold">Carla e Iván</span> estarán con nosotros. Los niños son bienvenidos, solo os pedimos que nos aviséis para tenerlo todo listo.
              </p>
            </div>
          </Reveal>

          {/* 03. CONFIRMACIÓN */}
          <Reveal delay={0.6}>
            <div className="flex flex-col items-center p-8 text-center transition-all duration-700 group hover:bg-white/40 rounded-2xl border border-transparent hover:border-[#46627f]/10">
              <div className="w-14 h-14 mb-10 flex items-center justify-center rounded-full border border-[#46627f]/20 text-[#46627f] font-serif italic text-2xl transition-all duration-500 group-hover:bg-[#46627f] group-hover:text-[#f4f1ea]">
                3.
              </div>
              <h4 className="text-[12px] uppercase tracking-[0.4em] text-[#46627f] font-black mb-8">¿Nos acompañas?</h4>
              <p className="font-serif italic text-[#2d2d2d]/80 text-xl md:text-2xl leading-relaxed">
                Nos harías muy felices si nos confirmas <span className="text-[#46627f] font-semibold">lo antes posible</span>. ¡Los tres estamos deseando darte un abrazo gigante!
              </p>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
};

export default Esencia;