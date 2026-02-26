import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Reveal from '../components/Reveal';

const LocalTexture = ({ opacity = "opacity-[0.15]", blendMode = "mix-blend-multiply" }) => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div 
      className={`absolute inset-0 ${opacity} ${blendMode} block md:hidden`}
      style={{ 
        backgroundImage: "url('/paper-texture-mobile.webp')", 
        backgroundRepeat: 'repeat',
        backgroundSize: '400px 600px'
      }} 
    />
    <div 
      className={`absolute inset-0 ${opacity} ${blendMode} hidden md:block`}
      style={{ 
        backgroundImage: "url('/paper-texture.webp')", 
        backgroundRepeat: 'repeat',
        backgroundSize: '1920px 1280px'
      }} 
    />
  </div>
);

const Contacto: React.FC = () => {
  const formKey = import.meta.env.VITE_FORMSPREE_ID;

  const [state, handleSubmit] = useForm(formKey || "");
  
  // ESTADOS DE LA DEMO (Cambiados de Alergia/Niños a TipoEvento/Interés)
  const [tipoEvento, setTipoEvento] = useState<string | null>(null);
  const [showErrorEvento, setShowErrorEvento] = useState(false);
  const [servicioInteres, setServicioInteres] = useState<string | null>(null);
  const [showErrorInteres, setShowErrorInteres] = useState(false);

  const validateAndSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false;
    if (tipoEvento === null) { setShowErrorEvento(true); hasError = true; }
    if (servicioInteres === null) { setShowErrorInteres(true); hasError = true; }
    if (!hasError) handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div className="relative min-h-screen bg-[#46627f] flex flex-col items-center justify-center text-center p-6 overflow-hidden">
        <LocalTexture opacity="opacity-[0.2]" blendMode="mix-blend-overlay" />
        <Reveal>
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo de la Demo */}
            <img src="/RMlogo.png" className="h-24 mb-12 opacity-40 brightness-0 invert" alt="Logo" />
            <h2 className="font-serif text-5xl md:text-8xl italic text-[#f4f1ea] mb-6 tracking-tighter">
              ¡Gracias por <br className="md:hidden" /> escribirnos!
            </h2>
            <p className="font-serif text-xl md:text-2xl text-[#f4f1ea]/70 mb-16 italic max-w-lg">
              Hemos recibido vuestro mensaje correctamente. Nos hace mucha ilusión leeros.
            </p>
            <a href="/" className="group relative text-[11px] uppercase tracking-[0.6em] text-[#f4f1ea] font-bold pb-2 overflow-hidden">
              <span className="relative z-10">Volver al inicio</span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#f4f1ea]/30"></div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#f4f1ea] -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
          </div>
        </Reveal>
        <div className="absolute top-10 left-10 text-[#f4f1ea]/10 font-serif italic text-9xl hidden lg:block">“</div>
        <div className="absolute bottom-10 right-10 text-[#f4f1ea]/10 font-serif italic text-9xl hidden lg:block">”</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#f4f1ea] text-[#2d2d2d] overflow-hidden">
      <LocalTexture />

      <section className="relative z-10 px-6 pt-32 pb-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h1 className="font-serif text-6xl md:text-[10vw] leading-[0.8] tracking-tighter mb-12 text-[#46627f]">
              Estamos <br />aquí.
            </h1>
            <div className="w-20 h-[1px] bg-[#46627f]"></div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-40 mx-auto max-w-7xl md:px-16">
        <div className="grid items-start grid-cols-1 gap-20 md:grid-cols-12">
          
          <div className="space-y-16 md:col-span-5">
            <Reveal delay={0.2}>
              <div>
                <h2 className="mb-6 font-serif text-2xl italic text-[#46627f]">Solicitud de Información</h2>
                <p className="font-serif text-lg text-[#2d2d2d]/70 leading-relaxed italic">
                  "Si estás interesado en este servicio y buscas un diseño único para tu gran día, estás en el lugar adecuado. Cuéntanos tu idea."
                </p>
              </div>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={0.3}>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-[#46627f] font-bold">WhatsApp Demo</span>
                  <span className="font-serif text-xl italic">+34 000 000 000</span>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-[#46627f] font-bold">Email Demo</span>
                  <span className="font-serif text-xl italic">hola@vuestramarca.com</span>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.4}>
              <div className="bg-white/40 p-8 md:p-12 border border-[#46627f]/10 shadow-2xl relative backdrop-blur-sm">
                <form onSubmit={validateAndSubmit} className="space-y-12">
                  
                  <div className="relative">
                    <input required id="full-name" type="text" name="nombre" placeholder="Vuestro nombre"
                      className="w-full bg-transparent border-b border-[#2d2d2d]/20 py-4 font-serif text-xl focus:outline-none focus:border-[#46627f] transition-colors placeholder:text-[#2d2d2d]/50"
                    />
                  </div>
                  
                  <div className="relative">
                    <input required id="email" type="email" name="email" placeholder="Email de contacto"
                      className="w-full bg-transparent border-b border-[#2d2d2d]/20 py-4 font-serif text-xl focus:outline-none focus:border-[#46627f] transition-colors placeholder:text-[#2d2d2d]/50"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-2 text-xs text-red-500" />
                  </div>

                  {/* SELECCIÓN 1 (Estilo Original): TIPO EVENTO */}
                  <div className="space-y-6">
                    <p className={`text-[10px] uppercase tracking-[0.4em] font-black transition-colors ${showErrorEvento && tipoEvento === null ? 'text-red-500' : 'text-[#46627f]'}`}>
                      ¿Qué estás planeando? {showErrorEvento && tipoEvento === null && <span className="italic normal-case ml-2 text-xs">(Selecciona una opción)</span>}
                    </p>
                    <input type="hidden" name="tipo_evento" value={tipoEvento || ""} />
                    <div className="flex gap-4">
                      <button type="button" onClick={() => { setTipoEvento('Boda'); setShowErrorEvento(false); }}
                        className={`flex-1 py-3 border transition-all duration-300 font-serif italic text-lg ${tipoEvento === 'Boda' ? 'bg-[#46627f] text-white border-[#46627f] shadow-lg scale-[1.02]' : 'border-[#2d2d2d]/10 text-[#2d2d2d]/40 hover:border-[#46627f]/40'}`}
                      >Una Boda</button>
                      <button type="button" onClick={() => { setTipoEvento('Otro Evento'); setShowErrorEvento(false); }}
                        className={`flex-1 py-3 border transition-all duration-300 font-serif italic text-lg ${tipoEvento === 'Otro Evento' ? 'bg-[#46627f] text-white border-[#46627f] shadow-lg scale-[1.02]' : 'border-[#2d2d2d]/10 text-[#2d2d2d]/40 hover:border-[#46627f]/40'}`}
                      >Otro Evento</button>
                    </div>
                  </div>

                  {/* SELECCIÓN 2 (Estilo Original): SERVICIO */}
                  <div className="space-y-6">
                    <p className={`text-[10px] uppercase tracking-[0.4em] font-black transition-colors ${showErrorInteres && servicioInteres === null ? 'text-red-500' : 'text-[#46627f]'}`}>
                      ¿Qué servicio te interesa? {showErrorInteres && servicioInteres === null && <span className="italic normal-case ml-2 text-xs">(Selecciona una opción)</span>}
                    </p>
                    <input type="hidden" name="servicio_interes" value={servicioInteres || ""} />
                    <div className="flex gap-4">
                      <button type="button" onClick={() => { setServicioInteres('Web de Boda'); setShowErrorInteres(false); }}
                        className={`flex-1 py-3 border transition-all duration-300 font-serif italic text-lg ${servicioInteres === 'Web de Boda' ? 'bg-[#46627f] text-white border-[#46627f] shadow-lg scale-[1.02]' : 'border-[#2d2d2d]/10 text-[#2d2d2d]/40 hover:border-[#46627f]/40'}`}
                      >Web de Boda</button>
                      <button type="button" onClick={() => { setServicioInteres('Invitación Digital'); setShowErrorInteres(false); }}
                        className={`flex-1 py-3 border transition-all duration-300 font-serif italic text-lg ${servicioInteres === 'Invitación Digital' ? 'bg-[#46627f] text-white border-[#46627f] shadow-lg scale-[1.02]' : 'border-[#2d2d2d]/10 text-[#2d2d2d]/40 hover:border-[#46627f]/40'}`}
                      >Invitación Digital</button>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea required id="message" name="mensaje" rows={4} placeholder="Escribid vuestro mensaje aquí..."
                      className="w-full bg-transparent border-b border-[#2d2d2d]/20 py-4 font-serif text-xl focus:outline-none focus:border-[#46627f] transition-colors resize-none placeholder:text-[#2d2d2d]/50"
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <button type="submit" disabled={state.submitting}
                    className={`flex items-center gap-4 mt-8 cursor-pointer group w-fit ${state.submitting ? 'opacity-70 pointer-events-none' : ''}`}
                  >
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-[11px] uppercase tracking-[0.6em] text-[#46627f] font-black transition-colors duration-300 group-hover:text-[#2d2d2d]">
                        {state.submitting ? 'Enviando...' : 'Solicitar Información'}
                      </span>
                      <div className="h-[1px] w-full bg-[#46627f]/20 overflow-hidden relative">
                        <div className={`h-full w-full bg-[#46627f] transition-transform duration-500 ease-in-out ${state.submitting ? 'animate-pulse' : '-translate-x-full group-hover:translate-x-0'}`}></div>
                      </div>
                    </div>

                    {state.submitting && (
                      <div className="w-5 h-5 border-2 border-[#46627f]/20 border-t-[#46627f] rounded-full animate-spin"></div>
                    )}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;