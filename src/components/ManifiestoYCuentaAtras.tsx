import { useState, useEffect } from 'react';
import Reveal from './Reveal'; 

const ManifiestoYCuentaAtras = () => {
  const [timeLeft, setTimeLeft] = useState({ dias: '00', horas: '00', minutos: '00' });

  useEffect(() => {
    const targetDate = new Date("2026-12-26T13:30:00");
  
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
  
      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  
        setTimeLeft({
          dias: d.toString().padStart(2, '0'),
          horas: h.toString().padStart(2, '0'),
          minutos: m.toString().padStart(2, '0'),
        });
      } else {
        setTimeLeft({ dias: '00', horas: '00', minutos: '00' });
        clearInterval(timer);
      }
    }, 1000);
  
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden bg-[#f4f1ea]">
      
      {/* BLOQUE IZQUIERDO: AZUL PETRÓLEO PROFUNDO */}
      <div className="relative w-full md:w-[45%] bg-[#46627f] flex flex-col justify-center p-10 md:p-20 text-[#f4f1ea] overflow-hidden">
        
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.07] mix-blend-overlay block md:hidden"
            style={{ backgroundImage: "url('/paper-texture-mobile.webp')", backgroundRepeat: 'repeat', backgroundSize: '400px 600px' }} 
          />
          <div 
            className="absolute inset-0 opacity-[0.07] mix-blend-overlay hidden md:block"
            style={{ backgroundImage: "url('/paper-texture.webp')", backgroundRepeat: 'repeat', backgroundSize: '1920px 1280px' }} 
          />
        </div>

        <div className="relative z-20">
          <Reveal delay={0.2}>
            <div className="w-12 h-[1px] bg-[#f4f1ea]/30 mb-8"></div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8 italic">
              Lo nuestro no tiene manual ni espera el permiso de nadie. <br /> 
              <span className="not-italic font-bold tracking-tight text-[#f4f1ea]">a nuestra manera.</span>
            </h3>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="max-w-md border-l border-[#f4f1ea]/20 pl-6">
              <p className="font-serif text-[#f4f1ea]/70 text-xl md:text-2xl leading-relaxed italic">
                "Menos ceremonia y más nosotros. Queremos que el tiempo se detenga en ese instante donde no hace falta decir nada porque ya lo somos todo."
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="flex items-center gap-3 mt-12">
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#f4f1ea]/40 font-bold italic">26 . 12 . 2026</span>
              <div className="w-12 h-[1px] bg-[#f4f1ea]/20"></div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* BLOQUE DERECHO: CUENTA ATRÁS */}
      <div className="relative w-full md:w-[55%] flex flex-col justify-center items-center p-12 md:p-20 bg-[#f4f1ea] overflow-hidden">
        
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.25] mix-blend-multiply block md:hidden"
            style={{ backgroundImage: "url('/paper-texture-mobile.webp')", backgroundRepeat: 'repeat', backgroundSize: '400px 600px' }} 
          />
          <div 
            className="absolute inset-0 opacity-[0.35] mix-blend-multiply hidden md:block"
            style={{ backgroundImage: "url('/paper-texture.webp')", backgroundRepeat: 'repeat', backgroundSize: '1920px 1280px' }} 
          />
        </div>

        <div className="relative z-20 flex flex-col items-center w-full max-w-xl text-center">
          
          <Reveal>
            <div className="inline-block mb-12 md:mb-16">
              <p className="text-[#46627f]/80 text-[11px] uppercase tracking-[0.8em] font-black mb-4">
                La espera termina en
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="h-[1px] w-6 bg-[#46627f]/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#46627f]/40"></div>
                <div className="h-[1px] w-6 bg-[#46627f]/20"></div>
              </div>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-3 gap-6 mb-16 md:gap-12">
            {[
              { label: 'Días', value: timeLeft.dias, d: 0.2 },
              { label: 'Horas', value: timeLeft.horas, d: 0.3 },
              { label: 'Minutos', value: timeLeft.minutos, d: 0.4 }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <Reveal delay={item.d}>
                  <div className="flex flex-col items-center">
                    <span className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#46627f] tracking-tighter leading-none font-light">
                      {item.value}
                    </span>
                    <span className="mt-6 px-4 py-1.5 bg-[#46627f] text-[#f4f1ea] text-[9px] uppercase tracking-[0.3em] font-black">
                      {item.label}
                    </span>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

          <Reveal delay={0.6}>
            <div className="space-y-10">
              <p className="font-serif italic text-[#46627f]/60 text-lg">
                Comienza la cuenta atrás para el gran día.
              </p>

              <a 
                href="/invitacion" 
                className="relative inline-flex flex-col items-center cursor-pointer group"
              >
                <span className="text-[11px] uppercase tracking-[0.6em] text-[#46627f]/80 font-bold">
                  Abrir invitación
                </span>
                <span className="mt-3 h-[1px] w-full bg-[#46627f]/10 relative overflow-hidden">
                  <span className="absolute inset-0 bg-[#46627f]/40 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ManifiestoYCuentaAtras;