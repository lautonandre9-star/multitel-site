import React from 'react';

const ServiceDetail = ({ title, intro, details, imageUrl, id }: any) => (
  <div id={id} className="py-24 border-b border-slate-100 last:border-0 group">
    <div className="container mx-auto px-4 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4">Serviço Especializado</div>
          <h2 className="text-4xl font-black text-slate-950 mb-8 leading-tight uppercase tracking-tighter group-hover:text-blue-700 transition-colors">
            {title}
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">{intro}</p>
          <ul className="space-y-5">
            {details.map((d: string, i: number) => (
              <li key={i} className="flex items-start">
                <span className="w-5 h-5 bg-blue-50 text-blue-600 flex items-center justify-center rounded-full mr-4 shrink-0 mt-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </span>
                <span className="text-slate-700 text-sm font-semibold">{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-sm shadow-2xl">
            <img src={imageUrl} alt={title} className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
            <div className="absolute inset-0 border-[20px] border-white/5 group-hover:border-blue-600/10 transition-all"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServicosPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="pt-40 pb-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-none mb-8 tracking-tighter">Portfólio <br/><span className="text-blue-600">Corporativo</span></h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">Soluções integradas de telecomunicações desenhadas para suportar a infraestrutura crítica do seu negócio.</p>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES TELECOM */}
      <ServiceDetail 
        id="fibra-optica"
        title="Fibra Óptica"
        intro="Solução indispensável para empresas que procuram uma conexão rápida, segura e uma base sólida necessária para prosperar no mundo dos negócios de hoje."
        details={[
          "Velocidades simétricas até 10 Gbps",
          "Baixíssima latência para aplicações críticas",
          "Infraestrutura redundante e resiliente",
          "Acordos de Nível de Serviço (SLA) rigorosos"
        ]}
        imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
      />

      <ServiceDetail 
        id="micro-onda"
        title="Micro-Onda"
        intro="Ligações rápidas e fiáveis para a transmissão de dados em alta velocidade. Ideal para comunicações que requerem uma largura de banda significativa."
        details={[
          "Conexões ponto-a-ponto de alta capacidade",
          "Implementação rápida em áreas sem fibra",
          "Baixa interferência e alta estabilidade",
          "Suporte para conectividade de backup"
        ]}
        imageUrl="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200"
      />

      <ServiceDetail 
        id="wimax"
        title="Broadband (WiMax / Albentia)"
        intro="Simplificamos a conexão do seu negócio com tecnologias WiMax e Albentia para conectividade de alta performance."
        details={[
          "Cobertura em áreas urbanas e suburbanas",
          "Tecnologia WiMax e Albentia de última geração",
          "Instalação rápida e flexível",
          "Ideal para empresas em expansão"
        ]}
        imageUrl="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200"
      />

      <ServiceDetail 
        id="vsat"
        title="Soluções VSAT"
        intro="Garantimos comunicações fiáveis mesmo em zonas remotas, assegurando uma ligação estável via satélite para operações offshore e áreas sem cobertura terrestre."
        details={[
          "Cobertura total em 18 províncias",
          "Comunicações em áreas remotas e offshore",
          "Antenas de alto desempenho (C-Band)",
          "Backup redundante crítico"
        ]}
        imageUrl="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200"
      />

      {/* SOLUÇÕES DIGITOTAL */}
      <ServiceDetail 
        id="data-center"
        title="Data Center & Colocation"
        intro="Garantimos a integridade e disponibilidade dos dados da sua empresa. Infraestrutura de alto desempenho com segurança física e virtual."
        details={[
          "Redundância de energia (UPS, geradores)",
          "Controle total de segurança física",
          "Monitoramento em tempo real 24/7",
          "Escalabilidade e conformidade regulamentar"
        ]}
        imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200"
      />

      <ServiceDetail 
        id="vpn"
        title="VPN Corporativa"
        intro="Proteja a conexão da sua empresa com uma VPN segura e confiável. Acesso remoto sem comprometer a segurança."
        details={[
          "Criptografia AES-256 de nível militar",
          "Suporte OpenVPN, IPsec e L2TP",
          "Autenticação multifatorial (MFA)",
          "Monitoramento e auditoria contínua"
        ]}
        imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
      />

      <ServiceDetail 
        id="voip"
        title="Voz Fixa / VoIP"
        intro="Comunicação clara e confiável com o nosso serviço de Voz Fixa. Telefonia de alta qualidade com chamadas sem interrupções."
        details={[
          "Sistemas VoIP e linhas fixas",
          "PBX configurável e integração CRM",
          "Conferência, gravação e correio de voz",
          "Alta qualidade e escalabilidade"
        ]}
        imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
      />

      <ServiceDetail 
        id="email"
        title="Serviço de Email Corporativo"
        intro="Plataforma segura, confiável e com alta capacidade de armazenamento. Personalize seu domínio e amplie a produtividade."
        details={[
          "Suporte IMAP, POP3 e SMTP",
          "Servidores dedicados com anti-spam",
          "Criptografia e backup automático",
          "Integração com calendários e contactos"
        ]}
        imageUrl="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=1200"
      />

      {/* CYBERSECURITY */}
      <ServiceDetail 
        id="cybersecurity"
        title="Soluções de Cybersecurity"
        intro="Proteção completa contra ameaças digitais. SOC as a Service, NOC as a Service, Pentesting, Gestão de Riscos e muito mais."
        details={[
          "SOC 24/7 com monitoramento em tempo real",
          "Segurança de Rede, Endpoint, Nuvem e Mobile",
          "Pentesting e análise forense",
          "Gestão de Riscos (ISO 31000, FAIR)"
        ]}
        imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
      />

      {/* MULTITEL AGRO */}
      <ServiceDetail 
        id="multitel-agro"
        title="Soluções Multitel Agro"
        intro="Tecnologia aplicada ao agronegócio. Telemetria IoT, segurança eletrônica, conectividade rural e energias alternativas."
        details={[
          "Telemetria & IoT com sensores de solo e clima",
          "Videomonitoramento e controle de acesso",
          "Conectividade via Fibra, Rádio e Satélite",
          "Energia solar e eólica para autossuficiência"
        ]}
        imageUrl="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=1200"
      />
    </div>
  );
};

export default ServicosPage;