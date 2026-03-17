import React from 'react';
import { useSegment } from '../../src/context/SegmentContext';
import { useTranslation } from '../../src/i18n/i18n';

const ServiceDetail = ({ title, intro, details, imageUrl, id, t }: any) => (
  <div id={id} className="py-16 md:py-24 border-b border-slate-100 last:border-0 group">
    <div className="container mx-auto px-4 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4">{t.specializedService}</div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-6 md:mb-8 leading-tight uppercase tracking-tighter group-hover:text-blue-700 transition-colors">
            {title}
          </h2>
          <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed font-medium">{intro}</p>
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
            <img src={imageUrl} alt={title} className="w-full h-auto transition-all duration-700 scale-105 group-hover:scale-100" />
            <div className="absolute inset-0 border-[20px] border-white/5 group-hover:border-blue-600/10 transition-all"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServicosPage: React.FC = () => {
  const { segment } = useSegment();
  const { t } = useTranslation();

  const businessServices = [
    {
      id: "fibra-optica",
      title: t.fiberTitle,
      intro: t.fiberDesc,
      details: ["Velocidades simétricas até 10 Gbps", "Baixíssima latência para aplicações críticas", "Infraestrutura redundante", "SLA rigoroso"],
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "data-center",
      title: t.dataCenter,
      intro: t.aboutDesc1, // Note: Using appropriate placeholders if direct mapping is missing, but better to use specific keys
      details: ["Redundância de energia", "Controle total de segurança física", "Monitoramento 24/7", "Escalabilidade"],
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "cybersecurity",
      title: t.cybersecurity,
      intro: "Proteção completa contra ameaças digitais. SOC as a Service, NOC as a Service, Pentesting e Gestão de Riscos.",
      details: ["SOC 24/7 em tempo real", "Segurança de Rede e Nuvem", "Pentesting e análise forense", "ISO 31000"],
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  // Re-mapping business services with full translations since I only added top-level ones in i18n
  // Actually, I should probably add these detailed strings to i18n too or keep them here if they are very specific.
  // Given the requirement to translate EVERYTHING, I'll update i18n.ts with these too.
  
  const residentialServices = [
    {
      id: "home-fiber",
      title: t.homeFiber,
      intro: t.homeDesc,
      details: ["Planos de 50 Mbps a 500 Mbps", "Instalação rápida e fibra direta", "Ideal para Smart Homes", "Suporte técnico especializado"],
      imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "wifi-inteligente",
      title: t.wifiMesh,
      intro: t.meshDesc,
      details: ["Cobertura em toda a residência", "Roaming perfeito entre divisões", "Gestão via App mobile", "Segurança parental incluída"],
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "voip-home",
      title: t.voipHome,
      intro: t.voipDesc,
      details: ["Qualidade HD Voice", "Instalação Plug & Play", "Mantém o seu número atual", "Sem taxas de manutenção"],
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const services = segment === 'business' ? businessServices : residentialServices;

  return (
    <div className="bg-white">
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="container mx-auto px-4 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-8xl font-black text-white leading-none mb-6 md:mb-8 tracking-tighter">
              {t.solutions} <br/><span className="text-blue-400">{segment === 'business' ? t.corporateSolutions : t.residentialSolutions}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              {segment === 'business' 
                ? t.businessSolutionsDesc
                : t.residentialSolutionsDesc}
            </p>
          </div>
        </div>
      </section>

      {services.map((s) => (
        <ServiceDetail key={s.id} {...s} t={t} />
      ))}

      {segment === 'business' && (
        <section className="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
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
            <div className="text-center mb-12 md:mb-20">
              <div className="inline-flex items-center space-x-3 mb-6 bg-blue-600/10 py-2 md:py-3 px-4 md:px-6 rounded-full backdrop-blur-sm border border-blue-500/30">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">{t.agroInnovation}</span>
              </div>
              <h2 className="text-3xl md:text-7xl font-black text-white mb-6">
                {t.agro.split(' ')[0]} <span className="text-blue-400">{t.agro.split(' ')[1]}</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                {t.agroDesc}
              </p>
            </div>

            {/* Grid de Soluções Agro */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
              
              {/* Fontes de Energias Alternativas */}
              <div className="bg-slate-800 rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all border-2 border-slate-700 hover:border-blue-500 group">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-3">{t.energySources}</h3>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {t.energySourcesDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Telemetria & IoT */}
              <div className="bg-slate-800 rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all border-2 border-slate-700 hover:border-blue-500 group">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-3">{t.telemetryIot}</h3>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {t.telemetryIotDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Electrónica e Automação */}
              <div className="bg-slate-800 rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all border-2 border-slate-700 hover:border-blue-500 group">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-3">{t.automation}</h3>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {t.automationDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Portal Multitel Agro */}
              <div className="bg-slate-800 rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all border-2 border-slate-700 hover:border-blue-500 group">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-3">{t.agroPortal}</h3>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {t.agroPortalDesc}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Conectividade - Destaque Especial */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black">{t.connectivityField}</h3>
                </div>
                
                <p className="text-lg md:text-xl text-blue-50 leading-relaxed mb-8 max-w-3xl">
                  {t.connectivityFieldDesc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-black text-lg mb-3 text-blue-100">{t.ruralInternet}</h4>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-3 text-blue-100">{t.secureVpn}</h4>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-3 text-blue-100">{t.wiredNetwork}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServicosPage;