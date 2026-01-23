import React from 'react';

const Sectors: React.FC = () => {
  const sectors = [
    { name: "Banca e Finanças", desc: "Redes seguras e redundantes para operações financeiras críticas." },
    { name: "Petróleo e Gás", desc: "Conectividade remota e estável para operações em offshore e onshore." },
    { name: "Administração Pública", desc: "Infraestrutura escalável para a digitalização de serviços governamentais." },
    { name: "Indústria e Logística", desc: "Automação e gestão em tempo real de armazéns e linhas de produção." },
    { name: "Educação e Saúde", desc: "Soluções de alta largura de banda para telemedicina e ensino remoto." },
    { name: "Comércio e Retalho", desc: "Gestão centralizada de pontos de venda e inventário nacional." }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4 italic">Sectores Atendidos</h2>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Presença consolidada nos pilares da <span className="text-blue-700">economia angolana.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              A Multitel é o parceiro tecnológico de eleição para organizações que exigem o mais alto nível de fiabilidade. Do sector bancário à exploração de recursos naturais, a nossa rede suporta operações vitais em todo o território nacional.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {sectors.map((s, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-blue-600 font-bold mb-1">• {s.name}</span>
                  <span className="text-xs text-slate-500 uppercase tracking-tighter leading-snug">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100/50 -rotate-2 rounded-2xl z-0"></div>
            {/* Imagem juntos.PNG - equipa/colaboração empresarial */}
            <img 
              src="/assets/juntos.PNG" 
              alt="Equipa Multitel - Colaboração Profissional" 
              className="relative z-10 rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;