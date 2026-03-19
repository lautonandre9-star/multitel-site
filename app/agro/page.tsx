import React, { useState } from 'react';
import { useTranslation } from '../../src/i18n/i18n';
import { 
  Calendar, Clock, MapPin, Building2, Users, Target, CheckCircle2, 
  ArrowRight, Globe, Cpu, ChevronDown, ChevronUp, Send, Smartphone, Mail
} from 'lucide-react';

const AgroPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const structures = [
    { title: t.agroStructureExhibition, desc: t.agroStructureExhibitionDesc, icon: <Building2 className="w-8 h-8" /> },
    { title: t.agroStructureConference, desc: t.agroStructureConferenceDesc, icon: <Users className="w-8 h-8" /> },
    { title: t.agroStructureShowroom, desc: t.agroStructureShowroomDesc, icon: <Cpu className="w-8 h-8" /> },
    { title: t.agroStructureNetworking, desc: t.agroStructureNetworkingDesc, icon: <Globe className="w-8 h-8" /> },
  ];

  const packages = [
    { name: t.agroPkgVerde, price: "1.500.000,00 Kz" },
    { name: t.agroPkgSustentavelSmall, price: "2.600.000,00 Kz" },
    { name: t.agroPkgSustentavelLarge, price: "4.600.000,00 Kz" },
    { name: t.agroPkgPremium, price: "7.500.000,00 Kz" },
    { name: t.agroPkgTerra, price: "10.600.000,00 Kz" },
    { name: t.agroPkgEcoSustentavel, price: "15.650.000,00 Kz" },
    { name: t.agroPkgEcoMaster, price: "20.600.000,00 Kz" },
  ];

  const benefits = [
    t.agroBenefit1,
    t.agroBenefit2,
    t.agroBenefit3,
    t.agroBenefit4,
  ];

  const partners = [
    "Governo de Angola", "MINAGRIF", "MINTTICS", "MINDCOM", "G.P. Luanda",
    "TPA", "TV Zimbo", "BDA", "Jornal de Angola", "Rádio Nacional",
    "Rede Girassol", "RTP África", "NXT", "MAPA (Brasil)", "MCTI (Brasil)",
    "INIAV", "Finep", "IITA", "IDA"
  ];

  const faqs = [
    { q: t.agroFaqQ1, a: t.agroFaqA1 },
    { q: t.agroFaqQ2, a: t.agroFaqA2 },
    { q: t.agroFaqQ3, a: t.agroFaqA3 },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000" 
            alt="Agro Tech" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-12 relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 mb-8 bg-emerald-500/10 py-3 px-6 rounded-full backdrop-blur-md border border-emerald-500/30">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-emerald-400 text-xs md:text-sm font-black uppercase tracking-[0.3em]">{t.agroHeroTitle}</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter uppercase italic">
            Digital <span className="text-emerald-500 not-italic">Agro</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-300 font-medium max-w-4xl mx-auto leading-relaxed mb-12">
            {t.agroHeroSubtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 text-emerald-500 mb-4" />
              <p className="text-white font-black uppercase tracking-widest text-sm">{t.agroEventDate}</p>
            </div>
            <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0">
              <MapPin className="w-8 h-8 text-emerald-500 mb-4" />
              <p className="text-white font-black uppercase tracking-widest text-sm text-center">{t.agroEventLocation}</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-emerald-500 mb-4" />
              <p className="text-white font-black uppercase tracking-widest text-sm">{t.agroEventSchedule}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Sheet & Intro */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-emerald-600 font-black text-xs uppercase tracking-[0.4em] mb-4 italic">Ficha Técnica</div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-none tracking-tighter uppercase relative">
                Multitel 
                <span className="block text-emerald-500">Agro 2026</span>
                <span className="absolute -bottom-4 left-0 w-20 h-2 bg-emerald-500"></span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-xl">
                {t.agroDesc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><Target className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-black text-xs uppercase text-slate-400">Objetivo</h4>
                    <p className="font-bold text-slate-800">Transformação Digital</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><Users className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-black text-xs uppercase text-slate-400">{t.agroEventOrg}</h4>
                    <p className="font-bold text-slate-800">Multitel</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-2xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                {structures.map((s, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:border-emerald-500 transition-all group">
                    <div className="p-4 bg-slate-50 text-emerald-600 rounded-2xl mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all w-fit">
                      {s.icon}
                    </div>
                    <h3 className="font-black text-slate-900 mb-3 uppercase text-sm tracking-widest">{s.title}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 text-center mb-20">
          <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
            Oportunidades de Investimento
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter mb-6">{t.agroCostsTitle}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">{t.agroCostsInclude}</p>
        </div>

        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className="p-8 rounded-3xl border-2 border-slate-100 transition-all hover:scale-105 hover:border-emerald-500 bg-white flex flex-col justify-between group shadow-sm hover:shadow-xl">
                <div>
                  <h3 className="font-black uppercase tracking-widest text-xs mb-4 text-slate-400 group-hover:text-emerald-500 transition-colors uppercase">{pkg.name}</h3>
                  <div className="text-2xl font-black mb-2 text-slate-900 leading-tight">{pkg.price}</div>
                </div>
                <a href="#form" className="mt-8 py-3 px-6 rounded-xl bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest transition-all text-center hover:bg-emerald-600">
                  Reservar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-950 relative overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
               <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <img 
                 src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=1200" 
                 alt="Farmer using tablet" 
                 className="relative rounded-3xl shadow-2xl border border-white/10"
               />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter italic">
                {t.agroBenefitsTitle.split(' ')[0]} <span className="text-emerald-500 not-italic">{t.agroBenefitsTitle.split(' ').slice(1).join(' ')}</span>
              </h2>
              <div className="space-y-8">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0 border border-emerald-500/20">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <p className="text-lg text-slate-300 font-medium group-hover:text-white transition-colors">
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">{t.agroFaqTitle}</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900">{faq.q}</span>
                  {activeFaq === i ? <ChevronUp className="text-emerald-500" /> : <ChevronDown className="text-slate-400" />}
                </button>
                <div className={`transition-all duration-300 ${activeFaq === i ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0'} px-6 border-t border-slate-50 bg-slate-50/50`}>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section id="form" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none italic">
                Sua <span className="text-emerald-500 not-italic">Inscrição</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-12">
                Preencha o formulário para garantir sua vaga ou solicitar informações detalhadas sobre patrocínio e exposição.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-600">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="font-bold">+244 222 704 200</span>
                </div>
                <div className="flex items-center gap-4 text-slate-600">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="font-bold">digitalagro@multitel.co.ao</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-8 md:p-12 rounded-[40px] shadow-2xl shadow-emerald-500/5 border border-slate-100">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">{t.agroFormName}</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">{t.agroFormCompany}</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Minha Empresa S.A." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">{t.agroFormEmail}</label>
                  <input type="email" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="email@empresa.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">{t.agroFormPhone}</label>
                  <input type="tel" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="+244 ..." />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">{t.agroFormInterest}</label>
                  <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all appearance-none">
                    <option>{t.agroFormInterestVisit}</option>
                    <option>{t.agroFormInterestStand}</option>
                    <option>{t.agroFormInterestSponsor}</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">{t.agroFormMessage}</label>
                  <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-5 rounded-xl shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.02]">
                    {t.agroFormSubmit} <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <div className="text-emerald-600 font-black text-xs uppercase tracking-[0.4em] mb-4">Insights & Estratégia</div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">Prepare-se para o <span className="text-emerald-500 underline decoration-slate-200">Futuro</span></h2>
            </div>
            <a href="/blog" className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] border-b-2 border-emerald-500 pb-1 hover:text-emerald-600 transition-colors">Ver todos os artigos</a>
          </div>

          <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 group max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto overflow-hidden">
                <img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=1200" alt="Agro IoT" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <div className="flex items-center text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-4">
                  <span>Inovação</span>
                  <span className="mx-2 text-slate-300">•</span>
                  <span className="text-slate-400">18 Fev, 2024</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-950 mb-6 leading-tight">Multitel Agro: Tecnologia IoT Aplicada ao Agronegócio</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8">
                  Como sensores inteligentes e telemetria estão revolucionando a gestão agrícola em Angola, aumentando produtividade e reduzindo desperdícios.
                </p>
                <a href="/blog" className="inline-flex items-center gap-3 text-slate-950 font-black text-xs uppercase tracking-widest group/btn">
                  Ler Artigo Completo <ArrowRight size={16} className="text-emerald-500 group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">{t.agroPartnersTitle}</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
             {partners.map((partner, i) => (
               <div key={i} className="bg-white border border-slate-100 rounded-3xl flex items-center justify-center p-6 shadow-sm hover:shadow-md transition-all group aspect-square">
                 <span className="font-black text-[10px] md:text-xs text-slate-400 uppercase tracking-widest text-center group-hover:text-emerald-500 transition-colors">
                   {partner}
                 </span>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgroPage;
