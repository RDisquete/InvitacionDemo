import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Invitación', href: '/invitacion' },
    { name: 'Fotos', href: '/fotos' },
    { name: 'Contacto', href: '/contacto' }
  ];

  const closeMenu = (): void => setIsMenuOpen(false);

  const textColor = isScrolled ? 'text-[#f4f1ea]' : 'text-[#46627f]';
  const borderColor = isScrolled ? 'bg-[#f4f1ea]' : 'bg-[#46627f]';
  const desktopItems = menuItems.filter(item => item.href !== '/');

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-[#46627f] py-2 shadow-lg' 
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <AnimatePresence>
          {isScrolled && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none mix-blend-multiply overflow-hidden"
            >
              <div 
                className="absolute inset-0 block md:hidden" 
                style={{ backgroundImage: "url('/paper-texture-mobile.webp')", backgroundSize: '400px' }}
              ></div>
              <div 
                className="absolute inset-0 hidden md:block" 
                style={{ backgroundImage: "url('/paper-texture.webp')", backgroundSize: '1200px' }}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 max-w-4xl px-6 mx-auto">
          <nav className="flex items-center justify-between md:justify-center">
            
            <div className="items-center justify-end flex-1 hidden gap-8 md:flex">
              {desktopItems.slice(0, 2).map((item) => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className={`group relative text-[10px] uppercase tracking-[0.3em] font-extrabold ${textColor} transition-all duration-500`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-[1.5px] ${borderColor} transition-all duration-500 ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>

            <div className="flex md:hidden">
              <button onClick={() => setIsMenuOpen(true)} className={`${textColor} p-2`} aria-label="Abrir menú">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              </button>
            </div>

            <div className="flex-shrink-0 px-4 md:px-10">
              <Link to="/" onClick={closeMenu} className="block group">
                <img 
                  src="/RMlogo.webp" 
                  alt="Logo" 
                  className={`transition-all duration-700 transform ease-in-out group-hover:scale-110 ${
                    isScrolled 
                      ? 'h-10 md:h-12 brightness-0 invert' 
                      : 'h-16 md:h-24 brightness-100'
                  }`}
                />
              </Link>
            </div>

            <div className="items-center justify-start flex-1 hidden gap-8 md:flex">
              {desktopItems.slice(2, 4).map((item) => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className={`group relative text-[10px] uppercase tracking-[0.3em] font-extrabold ${textColor} transition-all duration-500`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-[1.5px] ${borderColor} transition-all duration-500 ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>

            <div className="w-10 md:hidden"></div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#f4f1ea] flex flex-col items-center justify-center"
          >
            <div 
              className="absolute inset-0 opacity-[0.25] pointer-events-none block md:hidden" 
              style={{ backgroundImage: "url('/paper-texture-mobile.webp')", backgroundSize: '400px' }}
            ></div>
            <div 
              className="absolute inset-0 opacity-[0.25] pointer-events-none hidden md:block" 
              style={{ backgroundImage: "url('/paper-texture.webp')", backgroundSize: '800px' }}
            ></div>
            
            <button onClick={closeMenu} className="absolute top-8 right-6 text-[#46627f] p-2">
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative z-10 flex flex-col items-center gap-8">
              {menuItems.map((item, index) => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  onClick={closeMenu} 
                  className={`text-3xl font-serif italic text-[#46627f] hover:opacity-60 transition-all duration-500 ${
                    location.pathname === item.href ? 'translate-x-2' : ''
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-8 w-12 h-[1px] bg-[#46627f]/20"></div>
              <p className="text-[9px] uppercase tracking-[0.5em] text-[#46627f]/40 font-black italic">Demo Version</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;