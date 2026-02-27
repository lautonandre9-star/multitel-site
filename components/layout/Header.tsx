import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-slate-950 via-blue-950/98 to-transparent backdrop-blur-md border-b border-blue-900/20">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo - MAIOR E MAIS VIBRANTE */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              {/* Logo Container */}
              <div className="relative w-32 h-32 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img
                src="/assets/logo.jpeg" 
                alt="Multitel Logo" 
                width={128}
                height={128}
                className="w-full h-full object-contain bg-transparent"
                   />
                    </div>          
                      </div>
            <div>
              <div className="text-white font-black text-2xl tracking-tight group-hover:text-blue-400 transition-colors">MULTITEL</div>
              <div className="text-blue-400 text-[9px] font-bold uppercase tracking-[0.3em] group-hover:text-blue-300 transition-colors">Data & Telecom</div>
            </div>
          </Link>

          {/* Navigation Links - MAIORES E COM ANIMAÇÕES */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link 
              to="/sobre" 
              className={`relative text-base font-black uppercase tracking-wider transition-all group ${
                isActive('/sobre') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              Quem Somos
              <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all ${
                isActive('/sobre') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/servicos" 
              className={`relative text-base font-black uppercase tracking-wider transition-all group ${
                isActive('/servicos') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              Soluções
              <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all ${
                isActive('/servicos') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/clientes" 
              className={`relative text-base font-black uppercase tracking-wider transition-all group ${
                isActive('/clientes') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              Clientes
              <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all ${
                isActive('/clientes') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/blog" 
              className={`relative text-base font-black uppercase tracking-wider transition-all group ${
                isActive('/blog') ? 'text-blue-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              Insights
              <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all ${
                isActive('/blog') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
              }`}></span>
            </Link>
          </div>

          {/* CTA Button - MAIOR E MAIS CHAMATIVO */}
          <div className="flex items-center space-x-4">
            <Link to="/contactos">
              <button className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-10 py-4 rounded-lg text-sm font-black uppercase tracking-widest transition-all hover:scale-105 shadow-xl shadow-blue-600/40 hover:shadow-blue-500/60 group overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative flex items-center gap-2">
                  Orçamento
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
              </button>
            </Link>

            {/* Mobile Menu Button - MAIOR */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-3 hover:bg-blue-600/20 rounded-lg transition-all"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - ANIMADO */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-4 border-t border-blue-900/20">
            <Link 
              to="/sobre" 
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-black uppercase tracking-wider transition-all px-4 py-3 rounded-lg ${
                isActive('/sobre') ? 'text-blue-400 bg-blue-600/10' : 'text-slate-300 hover:text-white hover:bg-blue-600/5'
              }`}
            >
              Quem Somos
            </Link>
            <Link 
              to="/servicos" 
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-black uppercase tracking-wider transition-all px-4 py-3 rounded-lg ${
                isActive('/servicos') ? 'text-blue-400 bg-blue-600/10' : 'text-slate-300 hover:text-white hover:bg-blue-600/5'
              }`}
            >
              Soluções
            </Link>
            <Link 
              to="/clientes" 
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-black uppercase tracking-wider transition-all px-4 py-3 rounded-lg ${
                isActive('/clientes') ? 'text-blue-400 bg-blue-600/10' : 'text-slate-300 hover:text-white hover:bg-blue-600/5'
              }`}
            >
              Clientes
            </Link>
            <Link 
              to="/blog" 
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-black uppercase tracking-wider transition-all px-4 py-3 rounded-lg ${
                isActive('/blog') ? 'text-blue-400 bg-blue-600/10' : 'text-slate-300 hover:text-white hover:bg-blue-600/5'
              }`}
            >
              Insights
            </Link>
            <Link 
              to="/contactos" 
              onClick={() => setIsOpen(false)}
              className="block"
            >
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-sm font-black uppercase tracking-widest shadow-xl">
                Orçamento
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;