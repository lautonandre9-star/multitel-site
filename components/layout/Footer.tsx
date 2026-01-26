
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-600/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="inline-block group">
               <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4 bg-white/5 p-2 rounded-sm border border-white/10 group-hover:border-blue-600 transition-colors">
                  <img 
                  src="/assets/logo.png" 
                  alt="Multitel Logo" 
                  className="w-9 h-9"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black tracking-tighter text-white uppercase leading-none">
                    MULTI<span className="text-blue-600">TEL</span>
                  </span>
                  <span className="text-[9px] font-bold text-blue-500 tracking-[0.4em] uppercase mt-1">Conectividade de Confiança</span>
                </div>
              </div>
            </Link>
            <p className="text-lg font-medium text-white/80 max-w-md leading-relaxed">
              Experiência no mercado empresarial angolano desde 1999, assentando na convergência de telecomunicações e infraestrutura crítica.
            </p>
            <Link to="/sobre" className="inline-flex items-center text-xs font-black uppercase tracking-[0.3em] text-blue-500 hover:text-white transition-colors group">
              Saber Mais 
              <svg className="w-5 h-5 ml-4 group-hover:translate-x-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black uppercase text-xs tracking-[0.4em] mb-10 relative">
              Serviços
              <span className="absolute -bottom-4 left-0 w-10 h-1 bg-blue-600"></span>
            </h4>
            <ul className="space-y-6 text-sm font-bold uppercase tracking-wider">
              <li><Link to="/servicos" className="hover:text-blue-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-700 mr-3"></span> VSat</Link></li>
              <li><Link to="/servicos" className="hover:text-blue-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-700 mr-3"></span> Internet Dedicada</Link></li>
              <li><Link to="/servicos" className="hover:text-blue-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-700 mr-3"></span> Data Center</Link></li>
              <li><Link to="/servicos" className="hover:text-blue-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-700 mr-3"></span> Cibersegurança</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-black uppercase text-xs tracking-[0.4em] mb-10 relative">
              Sede Central
              <span className="absolute -bottom-4 left-0 w-10 h-1 bg-blue-600"></span>
            </h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start">
                <span className="text-blue-600 mr-4 mt-1"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></span>
                <span className="font-bold text-white text-lg tracking-tighter">222 704 200</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-4 mt-1"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></span>
                <span className="leading-relaxed font-medium">Rua Cristiano dos Santos, nº 5 <br/>Bairro Miramar, Luanda, Angola.</span>
              </li>
            </ul>
            <div className="flex space-x-6 mt-10">
              <a href="#" className="text-white hover:text-blue-500 font-black text-xs transition-all tracking-[0.3em]">LINKEDIN</a>
              <a href="#" className="text-white hover:text-blue-500 font-black text-xs transition-all tracking-[0.3em]">FACEBOOK</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-24 pt-10 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase font-black tracking-[0.3em]">
          <p className="opacity-40">Copyrights © {new Date().getFullYear()} Multitel. Todos os direitos reservados.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <Link to="/" className="hover:text-blue-500 transition-colors">Mapa do Site</Link>
            <Link to="/" className="hover:text-blue-500 transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;