import React from 'react';

const ClientesPage: React.FC = () => {
  const sectors = [
    {
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
      name: "Banca e Finanças",
      description: "Fornecemos soluções de conectividade para instituições financeiras. Interligamos redes de balcões e centros de dados com fibra óptica dedicada, garantindo transações seguras, rápidas e sem interrupções.",
      features: ["Fibra óptica dedicada entre agências", "Conectividade de missão crítica 24/7", "Segurança e redundância de rede"],
      stats: { label: "Uptime", value: "99.99%" }
    },
    {
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
      name: "Petróleo e Gás",
      description: "Fornecemos soluções de conectividade para empresas do setor petrolífero. Conectividade resiliente via VSAT para operações offshore, garantindo comunicação estável entre plataformas e centros de comando.",
      features: ["Soluções VSAT para plataformas offshore", "Conectividade remota estável e segura", "Links redundantes para operações críticas"],
      stats: { label: "Cobertura", value: "18 Províncias" }
    },
    {
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>,
      name: "Administração Pública",
      description: "Fornecemos infraestrutura de telecomunicações para órgãos governamentais. Soluções escaláveis de conectividade que modernizam o atendimento ao cidadão e interligam ministérios e institutos públicos.",
      features: ["Infraestrutura de rede escalável", "Interligação de sedes governamentais", "Suporte à digitalização de serviços"],
      stats: { label: "Instituições", value: "50+" }
    },
    {
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>,
      name: "Indústria e Logística",
      description: "Fornecemos conectividade de alta performance para o setor industrial. Redes robustas para automação, gestão de armazéns em tempo real e comunicação entre unidades produtivas.",
      features: ["Conectividade para automação industrial", "Redes de baixa latência para IoT", "Interligação de fábricas e armazéns"],
      stats: { label: "Latência", value: "<10ms" }
    },
    {
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>,
      name: "Educação e Saúde",
      description: "Fornecemos soluções de telecomunicações de alta largura de banda para instituições de ensino e saúde. Conectividade estável para telemedicina, ensino remoto e gestão hospitalar.",
      features: ["Alta largura de banda para telemedicina", "Conectividade para e-learning e EAD", "Interligação de unidades de saúde"],
      stats: { label: "Instituições", value: "100+" }
    },
    {
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>,
      name: "Comércio e Retalho",
      description: "Fornecemos soluções de conectividade para cadeias de retalho. Interligação de pontos de venda, sistemas de pagamento seguros, gestão de inventário centralizada e comunicação entre filiais.",
      features: ["Conectividade para PDVs e filiais", "Redes seguras para sistemas de pagamento", "VPN corporativa entre lojas"],
      stats: { label: "PDVs Conectados", value: "500+" }
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Background Pattern */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 mb-8 bg-blue-500/20 py-3 px-6 rounded-full backdrop-blur-sm border border-blue-400/30">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-blue-300 text-xs font-black uppercase tracking-[0.3em]">Casos de Sucesso</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Confiança de <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Instituições Líderes</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
              Fornecemos as soluções de telecomunicações que conectam os pilares da economia angolana. Do sector bancário ao petrolífero, a nossa infraestrutura de rede suporta operações críticas em todo o território nacional.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-16">
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">500+</div>
                <div className="text-sm text-blue-300 uppercase tracking-widest">Clientes Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">99.99%</div>
                <div className="text-sm text-blue-300 uppercase tracking-widest">Uptime Garantido</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">18</div>
                <div className="text-sm text-blue-300 uppercase tracking-widest">Províncias</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">24/7</div>
                <div className="text-sm text-blue-300 uppercase tracking-widest">Suporte Ativo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Sectores Atendidos</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Presença consolidada nos pilares da <span className="text-blue-600">economia angolana</span>
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Fornecemos soluções de conectividade e telecomunicações para empresas de todos os sectores. Do sector bancário à exploração petrolífera, a nossa rede de fibra óptica, micro-onda e satélite suporta operações vitais em todo o território nacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white p-10 rounded-xl border-2 border-slate-100 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Icon Container */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-500 shadow-lg">
                  {sector.icon}
                </div>

                {/* Stats Badge */}
                <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
                  {sector.stats.label}: {sector.stats.value}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {sector.name}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {sector.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {sector.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2 shrink-0"></span>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Nossos Parceiros</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Conectando Angola com <span className="text-blue-600">parceiros globais</span>
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Trabalhamos com as principais instituições e empresas para garantir soluções de telecomunicações de classe mundial.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {/* Row 1 */}
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-slate-700 transition-colors font-bold text-2xl">ESPAES</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-orange-600 transition-colors font-bold text-xl">Banco BNI</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-blue-600 transition-colors font-bold text-xl">Caixa Angola</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-amber-700 transition-colors font-bold text-xl">BNA</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-yellow-500 transition-colors font-bold text-xl">SONILS</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-amber-600 transition-colors font-bold text-xl">BCS</div>
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-orange-600 transition-colors font-bold text-xl">ACCESS</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-green-700 transition-colors font-bold text-xl">BCA</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-orange-500 transition-colors font-bold text-xl">EMIS</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-green-600 transition-colors font-bold text-xl">Novagest</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-orange-600 transition-colors font-bold text-xl">PwC</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-blue-600 transition-colors font-bold text-xl">BPC</div>
            </div>

            {/* Row 3 */}
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-red-600 transition-colors font-bold text-xl">BFA</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-slate-800 transition-colors font-bold text-lg">ANGOLAPREV</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-blue-700 transition-colors font-bold text-xl">VTB África</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-amber-700 transition-colors font-bold text-xl">BIR</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-blue-700 transition-colors font-bold text-xl">BAI</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-slate-400 group-hover:text-red-600 transition-colors font-bold text-lg">Governo de Angola</div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <p className="text-slate-600 text-lg mb-6">Quer ser nosso parceiro?</p>
            <a href="/contactos">
              <button className="bg-blue-600 text-white px-10 py-4 font-black rounded-lg hover:bg-blue-700 transition-all uppercase tracking-widest text-sm shadow-xl hover:scale-105 transform">
                Entrar em Contacto
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'linear-gradient(45deg, #1e40af 25%, transparent 25%), linear-gradient(-45deg, #1e40af 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1e40af 75%), linear-gradient(-45deg, transparent 75%, #1e40af 75%)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              O que os nossos <span className="text-blue-400">clientes dizem</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800 p-10 rounded-xl border border-slate-700 hover:border-blue-500 transition-all">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed italic mb-6">
                "A Multitel fornece a conectividade de fibra óptica que interliga as nossas 50 agências em todo o país. A equipa de suporte técnico é extremamente competente e o serviço de NOC 24/7 garante que nunca temos downtime."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-lg mr-4">
                  AB
                </div>
                <div>
                  <div className="font-bold text-white">António Brito</div>
                  <div className="text-sm text-slate-400">CTO, Banco Nacional de Angola</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-10 rounded-xl border border-slate-700 hover:border-blue-500 transition-all">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed italic mb-6">
                "As soluções VSAT da Multitel foram essenciais para estabelecer conectividade estável nas nossas plataformas offshore. A tecnologia de telecomunicações via satélite garante comunicação em áreas onde a rede terrestre não chega."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-lg mr-4">
                  MC
                </div>
                <div>
                  <div className="font-bold text-white">Maria Costa</div>
                  <div className="text-sm text-slate-400">Diretora de TI, Sonangol E&P</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  A sua organização merece o melhor.
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Desenvolvemos soluções de telecomunicações personalizadas para necessidades complexas. Fibra óptica dedicada, VSAT, VPN corporativa, Data Center e muito mais - com gestor dedicado e suporte técnico 24/7.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contactos">
                  <button className="bg-white text-blue-600 px-10 py-5 font-black rounded-lg hover:bg-blue-50 transition-all uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl hover:scale-105 transform">
                    Solicitar Estudo de Caso
                  </button>
                </a>
                <a href="tel:+244222704200">
                  <button className="border-2 border-white text-white px-10 py-5 font-black rounded-lg hover:bg-white hover:text-blue-600 transition-all uppercase tracking-widest text-sm">
                    Ligar Agora
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientesPage;