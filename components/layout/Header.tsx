
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

type Language = 'PT' | 'EN';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('PT');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    PT: {
      about: 'Quem Somos',
      services: 'Soluções',
      clients: 'Clientes',
      blog: 'Insights',
      cta: 'Orçamento',
      contact: 'Contacte-nos',
      location: 'Talatona, Luanda'
    },
    EN: {
      about: 'About Us',
      services: 'Solutions',
      clients: 'Clients',
      blog: 'Insights',
      cta: 'Get a Quote',
      contact: 'Contact Us',
      location: 'Talatona, Luanda'
    }
  };

  const t = translations[lang];

  const navLinks = [
    { name: t.about, path: '/sobre' },
    { name: t.services, path: '/servicos' },
    { name: t.clients, path: '/clientes' },
    { name: t.blog, path: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // URL do logo fornecido (utilizando o asset do sistema)
  const logoUrl = "https://api.screenshotone.com/take?url=https%3A%2F%2Fmultitel.co.ao&viewport_width=1280&viewport_height=720&block_ads=true&block_cookie_banners=true&block_trackers=true&delay=0&format=png"; 
  // Nota: Em ambiente real, use path local como "/logo.png"

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-700">
      {/* Top Bar */}
      <div className={`hidden md:block transition-all duration-500 origin-top ${
        isScrolled 
          ? 'h-0 opacity-0 -translate-y-full overflow-hidden' 
          : 'bg-slate-950/20 backdrop-blur-sm py-2.5 border-b border-white/5'
      }`}>
        <div className="container mx-auto px-4 md:px-12 flex justify-between items-center text-[10px] font-black text-white/70 uppercase tracking-[0.2em]">
          <div className="flex items-center space-x-8">
            <span className="flex items-center group cursor-pointer hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5 mr-2.5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg> 
              222 704 200
            </span>
            <span className="flex items-center group cursor-pointer hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5 mr-2.5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> 
              {t.location}
            </span>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
              <button 
                onClick={() => setLang('PT')}
                className={`px-3 py-1 rounded-full transition-all ${lang === 'PT' ? 'bg-blue-600 text-white shadow-lg' : 'hover:text-white'}`}
              >
                PT
              </button>
              <button 
                onClick={() => setLang('EN')}
                className={`px-3 py-1 rounded-full transition-all ${lang === 'EN' ? 'bg-blue-600 text-white shadow-lg' : 'hover:text-white'}`}
              >
                EN
              </button>
            </div>
            <div className="flex space-x-5 border-l border-white/10 pl-8 font-bold">
              <a href="#" className="hover:text-blue-500 transition-all">LINKEDIN</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-xl py-3' 
          : 'bg-transparent py-8'
      }`}>
        <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <div className="flex items-center">
              {/* Logo Image oficial substitui o bloco M */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 mr-4 overflow-hidden transition-transform duration-700 group-hover:scale-110">
                <img 
                  src="https://multitel.co.ao/wp-content/uploads/2021/10/Logo-Multitel-site.png" 
                  alt="Multitel Logo" 
                  className={`w-full h-full object-contain transition-all duration-500 ${!isScrolled ? 'brightness-0 invert' : ''}`}
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl md:text-2xl font-black tracking-tighter uppercase transition-colors duration-500 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                  MULTI<span className="text-blue-600">TEL</span>
                </span>
                <span className={`text-[8px] font-bold tracking-[0.3em] uppercase transition-opacity duration-500 ${isScrolled ? 'opacity-40' : 'opacity-60 text-white'}`}>
                  Data & Telecom
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all relative group py-2 ${
                  isScrolled 
                    ? (isActive(link.path) ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600') 
                    : (isActive(link.path) ? 'text-blue-500' : 'text-white/80 hover:text-white')
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 transition-all duration-500 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <Link to="/contactos">
              <Button size="sm" className={`rounded-none py-3.5 px-9 text-[10px] uppercase font-black tracking-[0.2em] shadow-2xl transition-all border-none ${
                isScrolled 
                ? 'bg-blue-700 hover:bg-blue-800 text-white shadow-blue-700/20' 
                : 'bg-white text-blue-900 hover:bg-gray-100'
              }`}>
                {t.cta}
              </Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 group" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-8 h-[2px] mb-2 transition-all duration-500 ${isScrolled ? 'bg-slate-900' : 'bg-white'}`}></div>
            <div className={`w-8 h-[2px] mb-2 transition-all duration-500 ${isScrolled ? 'bg-slate-900' : 'bg-white'}`}></div>
            <div className={`w-5 h-[2px] ml-auto transition-all duration-500 group-hover:w-8 ${isScrolled ? 'bg-slate-900' : 'bg-white'}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-slate-950 z-[100] transition-all duration-700 ease-expo ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="p-8 flex flex-col h-full">
          <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="self-end text-white text-5xl font-extralight mb-12"
          >
            &times;
          </button>
          <div className="flex flex-col space-y-10 items-center justify-center flex-grow">
            <div className="w-24 h-24 mb-6">
              <img src="https://multitel.co.ao/wp-content/uploads/2021/10/Logo-Multitel-site.png" alt="Logo" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-4xl font-black uppercase tracking-tighter text-white hover:text-blue-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;