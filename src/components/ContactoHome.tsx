import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const ContactoHome = () => {
  return (
    <section className="relative w-full py-32 bg-[#f4f1ea] overflow-hidden" id="contacto">
      
      {/* CAPA DE TEXTURA LOCAL */}
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
          className="absolute inset-0 opacity-[0.20] mix-blend-multiply hidden md:block"
          style={{ 
            backgroundImage: "url('/paper-texture.webp')", 
            backgroundRepeat: 'repeat',
            backgroundSize: '1920px 1280px'
          }} 
        />
      </div>

      <div className="relative z-10 max-w-4xl px-6 mx-auto">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            
            <div className="mb-16">
              <h3 className="font-serif italic text-5xl md:text-7xl text-[#46627f] leading-[1.1]">
                Con vuestra presencia, <br />
                <span className="not-italic font-light opacity-70 text-[#2d2d2d]">el día será perfecto.</span>
              </h3>
            </div>

            <div className="max-w-2xl mx-auto mb-20">
              <p className="font-serif text-[#2d2d2d]/70 text-xl md:text-2xl leading-relaxed italic">
                "Si tienes alguna duda sobre el menú, el transporte o simplemente quieres decirnos algo, estamos al otro lado."
              </p>
            </div>

            <div className="relative group">
              <Link 
                to="/contacto"
                className="relative flex flex-col items-center justify-center p-12 transition-all duration-700 transform group-hover:scale-105"
              >
                {/* Círculos decorativos en azul */}
                <div className="absolute inset-0 border border-[#46627f]/30 rounded-full transition-all duration-1000 group-hover:rotate-90 group-hover:scale-110 group-hover:border-[#46627f]/50"></div>
                <div className="absolute inset-4 border border-[#46627f]/10 rounded-full transition-all duration-1000 group-hover:-rotate-90 group-hover:scale-105"></div>
                
                <img 
                  src="/RMlogo.webp" 
                  alt="Sello" 
                  className="relative z-10 object-contain transition-all duration-700 opacity-90 w-48 h-40 md:w-56 md:h-48 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100" 
                />
                
                <div className="absolute flex flex-col items-center transition-all duration-500 -bottom-14 group-hover:-bottom-16">
                  <span className="text-[12px] uppercase tracking-[0.8em] text-[#46627f] font-black group-hover:tracking-[1em] transition-all duration-700">
                    Confirmar
                  </span>
                  <div className="w-0 h-[1px] bg-[#46627f] mt-3 transition-all duration-700 group-hover:w-32 opacity-30"></div>
                </div>
              </Link>
            </div>

            {/* FOOTER DEL COMPONENTE */}
            <div className="mt-48 pt-16 border-t border-[#46627f]/10 w-full flex flex-col md:flex-row items-center justify-between gap-10">
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#46627f]/80 font-bold italic">
                O escríbenos por WhatsApp:
              </p>
              <div className="flex gap-16">
                <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <span className="font-serif italic text-2xl text-[#46627f]/80 group-hover:text-[#46627f] transition-colors">Rafa</span>
                  <div className="w-2 h-2 rounded-full bg-[#46627f]/20 group-hover:bg-[#46627f] transition-colors"></div>
                </a>
                <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <span className="font-serif italic text-2xl text-[#2d2d2d]/80 group-hover:text-[#46627f] transition-colors">Marta</span>
                  <div className="w-2 h-2 rounded-full bg-[#46627f]/20 group-hover:bg-[#46627f] transition-colors"></div>
                </a>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactoHome;