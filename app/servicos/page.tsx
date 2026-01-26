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
      <section className="pt-40 pb-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="container mx-auto px-4 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter">Portfólio <br/><span className="text-blue-400">Corporativo</span></h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">Soluções integradas de telecomunicações desenhadas para suportar a infraestrutura crítica do seu negócio.</p>
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

      {/* MULTITEL AGRO - SEÇÃO ESPECIAL */}
      <section className="py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-12 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 mb-6 bg-blue-600/10 py-3 px-6 rounded-full backdrop-blur-sm border border-blue-500/30">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.3em]">Inovação no Agronegócio</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Soluções <span className="text-blue-400">Multitel Agro</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tecnologia de ponta aplicada ao agronegócio angolano. Conectividade, automação, segurança e sustentabilidade para o seu campo.
            </p>
          </div>

          {/* Grid de Soluções Agro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            
            {/* Fontes de Energias Alternativas */}
            <div className="bg-slate-800 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all border-2 border-slate-700 hover:border-blue-500 group">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-3">Fontes de Energias Alternativas</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Fornecemos soluções em energia solar e eólica para tornar a produção agrícola mais autossuficiente e econômica, com sistemas fotovoltaicos, armazenamento eficiente e monitoramento remoto.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      <span className="text-slate-300">Sistemas fotovoltaicos de alta eficiência</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      <span className="text-slate-300">Armazenamento de energia inteligente</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      <span className="text-slate-300">Monitoramento remoto de produção</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      <span className="text-slate-300">Energia eólica para áreas estratégicas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Telemetria & IoT */}
            <div className="bg-slate-800 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all border-2 border-slate-700 hover:border-blue-500 group">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-3">Telemetria & IoT</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Monitore sua produção agrícola em tempo real com sensores IoT e conectividade avançada. Colete e analise dados sobre solo, irrigação e clima para aumentar a eficiência e reduzir desperdícios.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      <span className="text-slate-300">Sensores de solo, irrigação e clima</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      <span className="text-slate-300">Tecnologia LoRaWAN para transmissão</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      <span className="text-slate-300">Dashboards personalizados em tempo real</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      <span className="text-slate-300">Análise de dados para decisões estratégicas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Electrónica e Automação */}
            <div className="bg-slate-800 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all border-2 border-slate-700 hover:border-blue-500 group">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-3">Electrónica e Automação</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Proteja seu campo com soluções avançadas de segurança e automação. Oferecemos videomonitoramento, controle de acesso remoto e sensores inteligentes para garantir máxima proteção e eficiência.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      <span className="text-slate-300">Câmeras IP e CCTV de alta resolução</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      <span className="text-slate-300">Sensores de movimento e alarmes</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      <span className="text-slate-300">Monitoramento via aplicativo móvel</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      <span className="text-slate-300">Detectores de fumaça e controle de acesso</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Portal Multitel Agro */}
            <div className="bg-slate-800 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all border-2 border-slate-700 hover:border-blue-500 group">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-3">Portal Multitel Agro</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    É uma plataforma digital integrada para gestão agrícola, conectando fornecedores de produtos e serviços, revendedores e instituições do sector. Permite o monitoramento de produção, logística e estoque.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      <span className="text-slate-300">Plataforma integrada para gestão agrícola</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      <span className="text-slate-300">Conexão entre fornecedores e revendedores</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      <span className="text-slate-300">Monitoramento de produção e logística</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                      <span className="text-slate-300">Gestão eficiente e estratégica de estoque</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Conectividade - Destaque Especial */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-15.857 21.213 0"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-black">Conectividade para o Campo</h3>
              </div>
              
              <p className="text-xl text-blue-50 leading-relaxed mb-8 max-w-3xl">
                Conectividade de alta performance para sua fazenda. Oferecemos soluções de internet, VPN e redes cabeadas para garantir comunicação estável e segura, mesmo em áreas remotas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-black text-lg mb-3 text-blue-100">Internet Rural</h4>
                  <ul className="space-y-2 text-blue-50">
                    <li className="flex items-start text-sm">
                      <span className="mr-2">✓</span>
                      <span>Fibra Óptica de alta velocidade</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2">✓</span>
                      <span>Conectividade via rádio (WiMax)</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2">✓</span>
                      <span>VSAT para áreas sem cobertura</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-black text-lg mb-3 text-blue-100">VPN Segura</h4>
                  <ul className="space-y-2 text-blue-50">
                    <li className="flex items-start text-sm">
                      <span className="mr-2">✓</span>
                      <span>Acesso remoto a sistemas internos</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2">✓</span>
                      <span>Criptografia de nível empresarial</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2">✓</span>
                      <span>Gestão centralizada de acesso</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-black text-lg mb-3 text-blue-100">Rede Cabeada</h4>
                  <ul className="space-y-2 text-blue-50">
                    <li className="flex items-start text-sm">
                      <span className="mr-2">✓</span>
                      <span>Infraestrutura de rede estável</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2">✓</span>
                      <span>Alto desempenho e confiabilidade</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="mr-2">✓</span>
                      <span>Suporte técnico dedicado 24/7</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicosPage;