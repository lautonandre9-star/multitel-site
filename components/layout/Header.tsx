import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Globe, ChevronDown, Building2, Home } from 'lucide-react';
import { useSegment } from '../../src/context/SegmentContext';
import { useLanguage } from '../../src/context/LanguageContext';
import { useTranslation } from '../../src/i18n/i18n';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { segment, setSegment } = useSegment();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl translate-y-[-32px]' : 'bg-sky-50/95 backdrop-blur-md shadow-sm translate-y-0'}`}>
      {/* Top Bar - Hidden on scroll or mobile depending on preference, here we keep it but the nav translates up */}
      <div className="bg-blue-950 text-white py-2 text-[10px] md:text-xs font-bold border-b border-white/5 relative z-50">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+244222704200" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone size={12} className="text-blue-400" />
              <span className="hidden sm:inline">{t.serviceLine}</span> +244 923 165 200
            </a>
            <a href="mailto:comercial@multitel.co.ao" className="hidden md:flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail size={12} className="text-blue-400" />
              comercial@multitel.co.ao
            </a>
          </div>
          <div className="flex items-center gap-4 divide-x divide-white/10">
            <div className="flex gap-3 pr-4">
              {['PT', 'EN', 'FR'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l as any)}
                  className={`hover:text-blue-400 transition-colors ${language === l ? 'text-blue-400' : 'text-slate-400'}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <div className="pl-4 flex items-center gap-2 text-slate-400">
              <Globe size={12} />
              <span>{t.angola}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 py-1">

          <div className="flex items-center gap-4 md:gap-12">
            {/* Logo */}
            <Link to="/" className="flex items-center group relative z-50">
              <div className="relative w-32 md:w-[420px] h-12 md:h-40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 -mt-1 md:-mt-4">
                <img
                  src="/assets/logo.svg"
                  alt="Multitel Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_20px_rgba(30,168,240,0.15)]"
                />
              </div>
            </Link>

            {/* Segment Switcher & Nav Items */}
            <div className="hidden lg:flex flex-col gap-2">
              {/* Segment Switcher */}
              <div className="flex bg-slate-100 p-1 rounded-full w-fit mb-1 border border-slate-200">
                <button
                  onClick={() => setSegment('business')}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${segment === 'business' ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-500 hover:text-blue-600'}`}
                >
                  <Building2 size={12} />
                  {t.businessServices}
                </button>
                <button
                  onClick={() => setSegment('residential')}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${segment === 'residential' ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-500 hover:text-blue-600'}`}
                >
                  <Home size={12} />
                  {t.residentialServices}
                </button>
              </div>

              {/* Main Nav */}
              <div className="flex items-center space-x-10">
                {['sobre', 'servicos', 'clientes', 'blog', 'projetos'].map((path) => {
                  const isSobre = path === 'sobre';
                  return (
                    <div key={path} className="relative group/nav">
                      <Link
                        to={`/${path}`}
                        className={`relative text-[13px] font-black uppercase tracking-widest transition-all flex items-center gap-1 ${isActive(`/${path}`) || (isSobre && location.pathname.startsWith('/sobre')) ? 'text-blue-600' : 'text-blue-950/80 hover:text-blue-600'
                          }`}
                      >
                        {isSobre ? t.whoWeAre : path === 'servicos' ? t.solutions : path === 'clientes' ? t.clients : path === 'blog' ? t.insights : t.projects}
                        {(isSobre || path === 'servicos') && (
                          <ChevronDown className="w-4 h-4 ml-1 transform group-hover/nav:rotate-180 transition-transform duration-300" />
                        )}
                        <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600 transition-all ${isActive(`/${path}`) || (isSobre && location.pathname.startsWith('/sobre')) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover/nav:opacity-100 group-hover/nav:scale-x-100'
                          }`}></span>
                      </Link>

                      {/* Dropdown for "Quem Somos" */}
                      {isSobre && (
                        <div className="absolute top-full left-0 mt-3 w-64 bg-white border border-sky-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover/nav:translate-y-0 text-left overflow-hidden border-t-4 border-t-blue-600">
                          <div className="py-2">
                            {[
                              { name: t.theCompany, path: '/sobre' },
                              { name: t.managementMessage, path: '/sobre/mensagem-da-gerencia' },
                              { name: t.missionValues, path: '/sobre/missao-e-valores' },
                              { name: t.recruitment, path: '/sobre/recrutamento' }
                            ].map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className={`block px-5 py-3.5 text-xs font-black uppercase tracking-widest transition-colors hover:bg-sky-50 hover:text-blue-600 ${location.pathname === subItem.path ? 'text-blue-600 bg-sky-50' : 'text-blue-950/70'}`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Dropdown for "Soluções" */}
                      {path === 'servicos' && (
                        <div className="absolute top-full left-0 mt-3 w-72 bg-white border border-sky-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover/nav:translate-y-0 text-left overflow-hidden border-t-4 border-t-blue-600">
                          <div className="p-4 grid grid-cols-1 gap-1">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">
                              {t.solutions} {segment === 'business' ? t.businessServices : t.residentialServices}
                            </p>
                            {(segment === 'business' ? [
                              { name: t.dedicatedFiber, path: '/servicos#fibra-optica' },
                              { name: t.dataCenter, path: '/servicos#data-center' },
                              { name: t.cybersecurity, path: '/servicos#cybersecurity' },
                              { name: t.agro, path: '/agro' }
                            ] : [
                              { name: t.homeFiber, path: '/servicos#home-fiber' },
                              { name: t.wifiMesh, path: '/servicos#wifi-mesh' },
                              { name: t.voipHome, path: '/servicos#voip-home' }
                            ]).map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className="block px-3 py-2.5 text-[11px] font-bold text-blue-950/70 hover:text-blue-600 hover:bg-sky-50 rounded-lg transition-all"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Button & Mobile Trigger */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden sm:flex flex-col items-end mr-4 text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter leading-none mb-1">{t.commercialLine}</p>
              <p className="text-sm font-black text-blue-900 leading-none tracking-tight">+244 222 704 200</p>
            </div>

            <Link to="/contactos">
              <button className="relative group px-4 md:px-8 py-2.5 md:py-3.5 bg-blue-600 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)] border border-blue-400/50 hover:-translate-y-0.5 shadow-lg shadow-blue-600/20">
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                <span className="relative flex items-center gap-2 md:gap-3 text-white font-black text-[10px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em]">
                  <span className="hidden sm:inline">{t.getQuote}</span>
                  <span className="sm:hidden">{t.budget}</span>
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </span>
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-blue-950 p-3 hover:bg-sky-100 rounded-xl transition-all border border-transparent hover:border-sky-200"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="py-6 space-y-6 border-t border-sky-100">
            {/* Mobile Segment Picker */}
            <div className="flex bg-slate-100 p-1 rounded-xl w-full">
              <button
                onClick={() => setSegment('business')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${segment === 'business' ? 'bg-blue-600 text-white shadow-xl' : 'text-slate-500'}`}
              >
                <Building2 size={14} /> {t.businessServices}
              </button>
              <button
                onClick={() => setSegment('residential')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${segment === 'residential' ? 'bg-blue-600 text-white shadow-xl' : 'text-slate-500'}`}
              >
                <Home size={14} /> {t.residentialServices}
              </button>
            </div>

            <div className="space-y-2">
              {['sobre', 'servicos', 'clientes', 'blog', 'projetos'].map((path) => {
                const isSobre = path === 'sobre';
                return (
                  <div key={path} className="space-y-2">
                    <Link
                      to={`/${path}`}
                      onClick={() => { if (!isSobre && path !== 'servicos') setIsOpen(false); }}
                      className={`flex items-center justify-between text-base font-black uppercase tracking-wide transition-all px-4 py-4 rounded-xl ${isActive(`/${path}`) || (isSobre && location.pathname.startsWith('/sobre')) || (path === 'servicos' && location.pathname.startsWith('/servicos')) ? 'text-blue-600 bg-blue-50' : 'text-blue-950 hover:text-blue-600 hover:bg-sky-50'
                        }`}
                    >
                      <span>{isSobre ? t.whoWeAre : path === 'servicos' ? t.solutions : path === 'clientes' ? t.clients : path === 'blog' ? t.insights : t.projects}</span>
                      {(isSobre || path === 'servicos') && <ChevronDown className={`w-5 h-5 transition-transform ${(isSobre && location.pathname.startsWith('/sobre')) || (path === 'servicos' && location.pathname.startsWith('/servicos')) ? 'rotate-180' : ''}`} />}
                    </Link>

                    {isSobre && (
                      <div className="pl-6 pr-4 space-y-2 my-2 border-l-2 border-sky-200 ml-4">
                        {[
                          { name: t.theCompany, path: '/sobre' },
                          { name: t.managementMessage, path: '/sobre/mensagem-da-gerencia' },
                          { name: t.missionValues, path: '/sobre/missao-e-valores' },
                          { name: t.recruitment, path: '/sobre/recrutamento' }
                        ].map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 text-xs font-bold rounded-lg transition-all ${location.pathname === subItem.path ? 'text-blue-600 bg-sky-50' : 'text-slate-600 hover:text-blue-600 hover:bg-sky-50'}`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {path === 'servicos' && (
                      <div className="pl-6 pr-4 space-y-2 my-2 border-l-2 border-sky-200 ml-4">
                        {(segment === 'business' ? [
                          { name: t.dedicatedFiber, path: '/servicos#fibra-optica' },
                          { name: t.dataCenter, path: '/servicos#data-center' },
                          { name: t.cybersecurity, path: '/servicos#cybersecurity' },
                          { name: t.agro, path: '/agro' }
                        ] : [
                          { name: t.homeFiber, path: '/servicos#home-fiber' },
                          { name: t.wifiMesh, path: '/servicos#wifi-mesh' },
                          { name: t.voipHome, path: '/servicos#voip-home' }
                        ]).map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 text-[11px] font-bold rounded-lg transition-all ${location.hash === subItem.path.split('#')[1] ? 'text-blue-600 bg-sky-50' : 'text-slate-600 hover:text-blue-600 hover:bg-sky-50'}`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Support Info */}
            <div className="bg-slate-50 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase">{t.commercialLine}</p>
                  <p className="text-sm font-black text-blue-950">+244 222 704 200</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                  <Globe size={18} />
                </div>
                <div className="flex gap-4">
                  {['PT', 'EN', 'FR'].map((l) => (
                    <button key={l} onClick={() => setLanguage(l as any)} className={`text-xs font-black ${language === l ? 'text-blue-600' : 'text-slate-400'}`}>{l}</button>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/contactos" onClick={() => setIsOpen(false)} className="block">
              <button className="w-full bg-blue-600 text-white px-8 py-5 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-blue-600/20 active:scale-[0.98] transition-all">
                {t.getQuote}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
