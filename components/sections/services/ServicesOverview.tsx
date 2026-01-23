import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, tag, key }: { title: string, description: string, icon: React.ReactNode, tag: string, key?: React.Key }) => (
  <div className="group relative bg-white p-10 border border-slate-100 hover:border-blue-600 transition-all duration-500 overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
      <span className="text-[10px] font-black text-slate-200 uppercase tracking-widest leading-none rotate-90 inline-block origin-right">{tag}</span>
    </div>
    <div className="w-14 h-14 bg-slate-50 text-blue-700 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 rounded-sm">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-4 text-slate-900 leading-tight tracking-tighter uppercase">{title}</h3>
    <p className="text-slate-500 leading-relaxed mb-8 text-sm">
      {description}
    </p>
    <Link to="/servicos" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-blue-700 hover:text-blue-900 transition-colors">
      Explorar Especificações
      <svg className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
    </Link>
  </div>
);

const ServicesOverview: React.FC = () => {
  const services = [
    {
      tag: "Fiber",
      title: "Fibra Óptica",
      description: "Solução indispensável para empresas que procuram uma conexão rápida, segura e uma base sólida necessária para prosperar no mundo dos negócios de hoje.",
      icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    },
    {
      tag: "Microwave",
      title: "Micro-Onda",
      description: "Ligações rápidas e fiáveis para a transmissão de dados em alta velocidade, ideal para comunicações que requerem uma largura de banda significativa.",
      icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/></svg>
    },
    {
      tag: "Broadband",
      title: "WiMax / Albentia",
      description: "Simplificamos a conexão do seu negócio com tecnologias WiMax e Albentia para conectividade de alta performance em áreas estratégicas.",
      icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    },
    {
      tag: "Satellite",
      title: "Soluções VSAT",
      description: "Garantimos comunicações fiáveis mesmo em zonas remotas, assegurando uma ligação estável via satélite para operações offshore e áreas sem cobertura terrestre.",
      icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.003 9.003 0 008.367-5.657l-4.577-1.294a5.004 5.004 0 01-7.58-7.58l-1.294-4.577A9.003 9.003 0 003 12c0 5 4 9 9 9z"/></svg>
    }
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-3xl mb-24">
          <div className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-6">Expertise Multitel</div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 leading-[1.1] tracking-tighter">
            Especialistas em <span className="text-blue-600">Telecomunicações B2B</span> de alto impacto.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-slate-100">
          {services.map((s, idx) => <ServiceCard key={idx} {...s} />)}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;