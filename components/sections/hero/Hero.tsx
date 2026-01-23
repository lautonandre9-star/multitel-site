import React from 'react';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-slate-950">
      {/* Background dinâmico com gemini.png (Network Operations Center) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="/assets/gemini.png" 
          alt="Multitel Network Operations Center" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-3/5">
          <div className="inline-flex items-center space-x-3 mb-6 bg-blue-600/10 py-2 px-4 backdrop-blur-md border border-blue-600/20">
            <span className="w-8 h-[2px] bg-blue-600"></span>
            <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">Conectividade Corporativa</span>
          </div>
          <h1 className="text-6xl md:text-[90px] font-black text-white leading-[0.85] mb-8 tracking-tighter uppercase">
            A Internet <br/>
            <span className="text-blue-600">que move</span> <br/>
            Angola.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-tight max-w-xl font-medium">
            LIGAÇÕES DE CONFIANÇA DESDE 1999. <br/>
            <span className="text-sm font-bold opacity-60 mt-4 block uppercase tracking-widest text-blue-500">Robustez técnica e escala nacional.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contactos">
              <Button className="bg-blue-600 hover:bg-blue-700 py-6 px-12 rounded-none text-xs uppercase tracking-widest font-black shadow-2xl shadow-blue-600/30 border-none">
                Solicitar Proposta B2B
              </Button>
            </Link>
          </div>
        </div>

        {/* Visual lateral com colab.jpg (equipa/colaboradores) */}
        <div className="lg:w-2/5 hidden lg:block relative">
           <div className="w-full aspect-[4/5] bg-slate-900 shadow-2xl rounded-sm p-4 rotate-2 overflow-hidden border border-white/5">
              <img 
                src="/assets/colab.jpg" 
                alt="Executivos Multitel" 
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
              <div className="absolute bottom-8 left-8 bg-white p-6 text-slate-950 max-w-[200px] shadow-2xl">
                <div className="text-xs font-black uppercase tracking-widest mb-2 text-blue-600">Expertise B2B</div>
                <div className="text-lg font-bold leading-tight tracking-tighter italic">Compromisso com o seu Negócio.</div>
              </div>
           </div>
           
           <div className="absolute -top-10 -right-10 bg-blue-600 p-8 shadow-2xl space-y-3">
              <div className="text-3xl font-black text-white">24/7</div>
              <div className="text-[9px] font-black text-white/70 uppercase tracking-widest">Suporte <br/>Técnico Ativo</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;