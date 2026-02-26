import { useState, useEffect } from 'react';

const Footer = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date('2026-12-26T12:30:00');

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        setTimeLeft(`Faltan ${days} días`);
      } else {
        setTimeLeft("¡Hoy es el gran día!");
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 86400000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full bg-[#f4f1ea] pb-12 pt-4 relative overflow-hidden">
      {/* CAPA DE TEXTURA (Igual que en el Header) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.3] mix-blend-multiply z-0">
        <div 
          className="absolute inset-0 block md:hidden" 
          style={{ backgroundImage: "url('/paper-texture-mobile.webp')", backgroundSize: '400px' }}
        ></div>
        <div 
          className="absolute inset-0 hidden md:block" 
          style={{ backgroundImage: "url('/paper-texture.webp')", backgroundSize: '1200px' }}
        ></div>
      </div>

      <div className="max-w-5xl px-6 mx-auto relative z-10">
        <div className="w-full h-[1px] bg-[#46627f]/30 mb-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="flex items-center gap-3 text-[#46627f] text-[9px] md:text-[10px] uppercase tracking-[0.6em] font-bold">
            <span className="w-[1px] h-3 bg-[#46627f]/20"></span>
            <span className="text-[#46627f]/80">Muestra No Comercial</span>
          </div>

          <div className="flex items-center">
            <span className="text-[#46627f]/60 italic tracking-[0.2em] lowercase font-serif text-[13px] md:text-[14px]">
              {timeLeft}
            </span>
          </div>

          <a
            href="https://rdisquete.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 no-underline transition-all duration-500"
          >
            <span className="text-[#46627f]/50 group-hover:text-[#46627f]/80 text-[10px] italic font-serif lowercase tracking-tight transition-colors">
              concept by
            </span>
            <span className="text-[#46627f]/80 group-hover:text-[#46627f] text-[10px] uppercase tracking-[0.3em] font-black transition-all">
              RDisquete
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;