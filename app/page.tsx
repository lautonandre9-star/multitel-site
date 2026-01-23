import React from 'react';
import Hero from '../components/sections/hero/Hero';
import ServicesOverview from '../components/sections/services/ServicesOverview';
import Sectors from '../components/sections/clients/Sectors';
import CTAFinal from '../components/sections/contact/CTAFinal';

const InstitutionalVideo = () => (
  <section className="py-24 bg-slate-900 relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-12 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-6">27 Anos de História</div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
            A Ligar Angola <br/><span className="text-blue-600">ao Futuro.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Desde 1999, a Multitel tem sido o motor invisível que impulsiona as maiores corporações do país. A nossa jornada é feita de conexões reais e confiança inabalável.
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full border border-blue-600 flex items-center justify-center text-blue-600">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-white">Ver Filme Institucional</span>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-2 bg-blue-600/20 blur-2xl group-hover:bg-blue-600/40 transition-all"></div>
          <div className="relative aspect-video bg-slate-800 rounded-sm overflow-hidden shadow-2xl border border-white/5">
            {/* Vídeo institucional - video.mp4 */}
            <video 
              className="w-full h-full object-cover"
              poster="/assets/ceo.webp"
              controls
            >
              <source src="/assets/video.mp4" type="video/mp4" />
              O seu browser não suporta vídeos.
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Highlights = () => (
  <section className="py-32 bg-slate-50 relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
    <div className="container mx-auto px-4 md:px-12 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">Destaques</h2>
        <div className="w-20 h-1.5 bg-sky-400 mx-auto mt-6"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { title: "Multitel assina parceria com Grupo Desportivo Interclube", date: "Setembro 1, 2024", img: "/assets/par.png" },
          { title: "Tecnologia de ponta: Data Center e Infraestrutura", date: "Outubro 21, 2024", img: "/assets/cyber.jpg" },
          { title: "Conectividade global através de parcerias estratégicas", date: "Março 10, 2024", img: "/assets/ceo.webp" }
        ].map((h, i) => (
          <div key={i} className="bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer">
            <div className="h-48 overflow-hidden">
              <img src={h.img} alt={h.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </div>
            <div className="p-8">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{h.date}</div>
              <h3 className="text-lg font-bold text-slate-900 leading-tight mb-6 group-hover:text-blue-600 transition-colors">{h.title}</h3>
              <span className="text-xs font-black uppercase text-blue-600 border-b-2 border-transparent group-hover:border-blue-600 transition-all">Ver Detalhes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <InstitutionalVideo />
      <ServicesOverview />
      <Highlights />
      <Sectors />
      <CTAFinal />
    </>
  );
};

export default HomePage;