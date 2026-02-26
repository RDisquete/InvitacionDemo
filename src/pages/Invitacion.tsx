import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const RevealSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentRef) observer.unobserve(currentRef);
        }
      });
    }, { threshold: 0.1 });

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

const Invitacion: React.FC = () => {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f4f1ea] text-[#2d2d2d] overflow-hidden">

      <div
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.3] mix-blend-multiply"
        style={{ backgroundImage: "url('/paper-texture.webp')", backgroundRepeat: 'repeat' }}
      ></div>

      <section className={`relative flex items-center h-[100svh] overflow-hidden transition-all duration-[1500ms] ease-in-out ${heroReady ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'}`}>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none md:hidden opacity-[0.03] z-0 text-[#46627f]">
            <span className="font-serif text-[120vw] font-bold leading-none select-none italic">26</span>
        </div>

        <div className="grid w-full h-full grid-cols-1 md:grid-cols-12 relative z-10">
          <div className="z-20 flex flex-col justify-center px-8 md:col-span-7 md:px-20">
            <span className="text-[10px] uppercase tracking-[1em] text-[#46627f] mb-10 md:mb-12 block font-black text-center md:text-left">
              La Invitación
            </span>
            
            <div className="relative flex flex-col items-center md:items-start">
              <div className="flex items-center md:block">
                <h1 className="font-serif text-[35vw] md:text-[18vw] leading-[0.7] tracking-tighter text-[#2d2d2d]">26</h1>
                <div className="flex flex-col ml-4 md:ml-0 md:absolute md:top-1/2 md:left-[40%] md:-translate-y-1/2">
                  <span className="font-serif text-5xl md:text-8xl italic leading-none text-[#46627f] md:bg-[#f4f1ea] md:pr-4">Diciembre</span>
                  <span className="font-serif text-5xl md:text-8xl leading-none text-[#2d2d2d]">2026</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mt-16 md:mt-24 border-t border-[#46627f]/10 md:border-none pt-12 md:pt-0">
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-[9px] uppercase tracking-[0.4em] font-black text-[#46627f]">Enlace Civil</span>
                    <span className="font-serif text-6xl md:text-7xl mt-1 italic leading-none text-[#2d2d2d]">18:00h</span>
                </div>
                <div className="hidden md:block w-px h-16 bg-[#46627f]/20"></div>
                <p className="max-w-[240px] md:max-w-[180px] font-serif text-xl md:text-lg italic leading-tight text-[#2d2d2d]/50 text-center md:text-left">
                  "Promesas bajo el cielo de Extremadura."
                </p>
            </div>
          </div>

          <div className="hidden md:flex md:col-span-5 relative bg-[#e5e1d8] items-center justify-center overflow-hidden border-l border-[#46627f]/5">
            <div className="absolute w-[150%] h-[150%] bg-gradient-to-tr from-[#46627f]/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute right-[-5%] flex flex-col gap-10">
              <span className="font-serif text-[15vw] leading-none text-white opacity-40 select-none">C&A</span>
              <span className="font-serif text-[15vw] leading-none text-white opacity-40 select-none italic">2026</span>
            </div>
            <div className="relative z-10 w-full max-w-sm p-12 mx-8 border shadow-2xl bg-white/40 backdrop-blur-xl border-white/30 rounded-sm">
              <div className="flex flex-col gap-8 text-center md:text-left">
                <div className="border-b border-[#46627f]/10 pb-8 text-center">
                    <p className="text-[10px] uppercase tracking-[0.8em] text-[#46627f] font-black mb-4">Hora</p>
                    <p className="font-serif text-6xl italic leading-none text-[#2d2d2d]">18:00</p>
                </div>
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.6em] text-[#46627f] font-black mb-2">Ubicación</p>
                    <p className="font-serif text-xl italic leading-tight text-[#2d2d2d]">Badajoz.</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.6em] text-[#46627f] font-black mb-2">Coordenadas</p>
                    <p className="font-serif text-[11px] leading-relaxed tracking-widest uppercase opacity-60 text-[#2d2d2d]">39° 21' 35.1" N / 7° 08' 20.3" W</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#f4f1ea] px-6 py-20 md:py-40">
        <div className="mx-auto max-w-7xl">
          <RevealSection>
            <div className="relative flex flex-col items-start mb-30 md:mb-40">
              <span className="absolute top-0 right-0 font-serif text-[20vw] leading-none text-[#46627f]/5 italic select-none hidden md:block">
                Enlace
              </span>
              <div className="relative z-10 grid items-center w-full grid-cols-1 gap-0 md:grid-cols-12">
                <div className="md:col-span-8">
                  <h2 className="font-serif text-7xl md:text-[10vw] leading-[0.8] tracking-tighter mb-10 text-[#2d2d2d]">
                    Palacio de <br /> <span className="ml-[10%] md:ml-[20%] text-[#46627f]">Congresos.</span>
                  </h2>
                  <div className="flex flex-col md:flex-row md:items-end gap-12 ml-[5%]">
                    <div className="flex flex-col gap-4">
                      <p className="max-w-md font-serif text-2xl italic md:text-4xl opacity-60 text-[#2d2d2d]">"Sí, quiero. Frente a los nuestros."</p>
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 text-[#2d2d2d]">Ronda del Pilar, s/n <br /> 06002 Badajoz</p>
                    </div>
                    <div className="flex flex-col items-start pb-2">
                      <span className="text-[11px] uppercase tracking-[0.5em] font-black mb-4 text-[#46627f]">18:00H</span>
                      <a href="https://maps.app.goo.gl/jt2e2pa7cBKGy9JR9" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.4em] border-b border-[#2d2d2d] pb-1 hover:text-[#46627f] hover:border-[#46627f] transition-all">
                        <span>Ver mapa</span>
                        <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative mt-20 md:col-span-4 md:mt-0 group">
                  <img 
                    src="/palacio.webp" 
                    alt="Palacio de Congresos Badajoz" 
                    className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-[30px_30px_0px_0px_rgba(70,98,127,0.08)]" 
                  />
                </div>
              </div>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="relative flex flex-col items-end top-10">
              <span className="absolute top-0 left-0 font-serif text-[20vw] leading-none text-[#46627f]/5 select-none hidden md:block">
                Fiesta
              </span>
              <div className="relative z-10 grid items-center w-full grid-cols-1 gap-0 md:grid-cols-12">
                <div className="order-2 mt-20 md:col-span-5 md:order-1 md:mt-0">
                  <div className="relative group">
                    <div className="absolute -inset-2 border border-[#46627f]/10 -translate-x-4 translate-y-4 pointer-events-none transition-transform duration-700 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
                    <img
                      src="/cortijo.webp"
                      alt="Celebración en Badajoz"
                      className="relative z-10 w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-[-30px_30px_0px_0px_rgba(70,98,127,0.08)]"
                    />
                  </div>
                </div>
                <div className="order-1 md:col-span-7 md:order-2 md:pl-20">
                  <h2 className="font-serif text-7xl md:text-[10vw] leading-[0.8] tracking-tighter mb-10 md:text-right text-[#2d2d2d]">
                    Cortijo de <br /> <span className="mr-[10%] md:mr-[20%] italic text-[#46627f]">Tapia.</span>
                  </h2>
                  <div className="flex flex-col gap-12 md:flex-row-reverse md:items-end md:text-right">
                    <div className="flex flex-col gap-4">
                      <p className="max-w-md font-serif text-2xl italic md:text-4xl opacity-60 text-[#2d2d2d]">"Cena, baile y alegría extremeña."</p>
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 text-[#2d2d2d]">
                        Ctra. de Sevilla, km 5 <br /> 06009 Badajoz
                      </p>
                    </div>

                    <div className="flex flex-col items-start pb-2 md:items-end">
                      <span className="text-[11px] uppercase tracking-[0.5em] font-black mb-4 text-[#46627f]">20:00H</span>
                      <a
                        href="https://maps.app.goo.gl/KPDD7Hrg51tN4ytL8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.4em] border-b border-[#2d2d2d] pb-1 hover:text-[#46627f] hover:border-[#46627f] transition-all duration-300"
                      >
                        <svg className="w-3 h-3 transition-transform duration-300 rotate-180 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        <span>Cómo llegar</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <RevealSection>
        <section className="relative py-48 bg-[#2d2d2d] text-[#f4f1ea] overflow-hidden">
          <div className="relative z-10 flex flex-col items-center max-w-4xl px-6 mx-auto text-center">
           
            <h2 className="font-serif text-5xl md:text-[7vw] italic mb-16 leading-tight">
              ¿Contamos contigo?
            </h2>
            <Link to="/contacto" className="flex flex-col items-center gap-2 cursor-pointer group">
              <span className="text-[11px] md:text-[13px] uppercase tracking-[0.6em] text-white font-bold group-hover:text-[#46627f] transition-colors duration-300">
                Confirmar asistencia
              </span>
              <div className="h-[1px] w-full bg-white/20 overflow-hidden">
                <div className="h-full w-full bg-[#46627f] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
              </div>
            </Link>
          </div>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-serif italic text-white/[0.03] pointer-events-none select-none">
            26
          </span>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="flex flex-col items-center px-6 py-32 bg-[#f4f1ea]">
          <div className="grid grid-cols-1 gap-20 text-center max-w-8xl md:grid-cols-3">
            <div>
              <p className="text-[20px] uppercase tracking-[0.4em] text-[#46627f] mb-4 font-bold">Estancia</p>
              <p className="font-serif italic text-[#2d2d2d]/50 text-m">Hoteles en el centro histórico de la ciudad.</p>
            </div>
            <div>
              <p className="text-[20px] uppercase tracking-[0.4em] text-[#46627f] mb-4 font-bold">Bus</p>
              <p className="font-serif italic text-[#2d2d2d]/50 text-m">Salida única a las 17:15h desde Puerta de Palmas.</p>
            </div>
            <div>
              <p className="text-[20px] uppercase tracking-[0.4em] text-[#46627f] mb-4 font-bold">Detalles</p>
              <p className="font-serif italic text-[#2d2d2d]/50 text-m">Confirmar alergias antes del 1 de diciembre.</p>
            </div>
          </div>
        </section>
      </RevealSection>

    </div>
  );
};

export default Invitacion;