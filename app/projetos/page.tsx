import React from 'react';
import { useTranslation } from '../../src/i18n/i18n';
import { ArrowRight, Sprout, Wifi, Cpu, Zap, Shield, Globe } from 'lucide-react';

const ProjetosPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* ─── HERO ─── */}
      <section className="relative pt-36 md:pt-56 pb-20 md:pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1464925257126-6450e871c667?auto=format&fit=crop&q=80&w=2000"
            alt="Multitel Projetos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
        </div>

        <div className="container mx-auto px-4 md:px-12 relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 mb-8 bg-sky-500/10 py-3 px-6 rounded-full backdrop-blur-md border border-sky-500/30">
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
            <span className="text-sky-400 text-xs font-black uppercase tracking-[0.3em]">{t.projectsTag}</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter uppercase italic">
            {t.projectsHero1} <span className="text-sky-400 not-italic">{t.projectsHero2}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
            {t.projectsHeroDesc}
          </p>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-12 max-w-4xl text-center">
          <div className="text-sky-600 font-black text-xs uppercase tracking-[0.4em] mb-4">{t.projectsIntroTag}</div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter mb-8 uppercase">
            {t.projectsIntroTitle}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.projectsIntroDesc}
          </p>
        </div>
      </section>

      {/* ─── MULTITEL AGRO CARD (FEATURED) ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <div className="text-emerald-600 font-black text-xs uppercase tracking-[0.4em] mb-4">{t.projectsFeatured}</div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase">{t.projectsOurProjects}</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto mt-6" />
          </div>

          {/* Agro Project — Featured Card */}
          <div className="group relative bg-gradient-to-br from-slate-950 via-emerald-950/80 to-slate-950 rounded-[40px] overflow-hidden shadow-2xl border border-emerald-500/20 mb-12">
            {/* BG Image and glow */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-cover opacity-20 saturate-0 group-hover:saturate-100 transition-all duration-1000"
                alt="Agro Background"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/90 to-slate-950" />
            </div>
            {/* BG Patterns & Glow */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-cover saturate-0 opacity-30" 
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,197,94,0.15),transparent)]" />
            <div
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '30px 30px' }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left: image */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=1200"
                  alt="Multitel Agro — Drone sobrevoando campo agrícola"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/80 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent lg:hidden" />
                {/* Badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    {t.projectAgroLive}
                  </span>
                </div>
              </div>

              {/* Right: content */}
              <div className="p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
                {/* Visual decoration overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover saturate-0"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-transparent to-transparent" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center">
                      <Sprout className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">{t.projectsMultitelProject}</div>
                      <div className="text-white font-black text-xl tracking-tight">Multitel Agro</div>
                    </div>
                  </div>

                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                  {t.projectAgroTitle}
                </h3>

                <p className="text-slate-400 font-medium leading-relaxed mb-8 text-base">
                  {t.projectAgroDesc}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {[
                    { icon: <Wifi className="w-3 h-3" />, label: t.projectAgroFeat1 },
                    { icon: <Cpu className="w-3 h-3" />, label: t.projectAgroFeat2 },
                    { icon: <Zap className="w-3 h-3" />, label: t.projectAgroFeat3 },
                    { icon: <Shield className="w-3 h-3" />, label: t.projectAgroFeat4 },
                    { icon: <Globe className="w-3 h-3" />, label: t.projectAgroFeat5 },
                  ].map((feat, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider rounded-lg">
                      {feat.icon} {feat.label}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="/agro-landing.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-4 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-sm uppercase tracking-widest px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl shadow-emerald-500/25 w-fit"
                >
                  {t.projectAgroLearnMore}
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          </div>

          {/* ─── Coming Soon Cards ─── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Multitel Smart Cities', desc: t.projectComingSoonDesc, color: 'sky' },
              { title: 'Multitel Education', desc: t.projectComingSoonDesc, color: 'violet' },
            ].map((proj, i) => (
              <div key={i} className="relative bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-10 overflow-hidden opacity-60">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[80px] font-black text-slate-100 uppercase rotate-[-15deg] select-none">{t.comingSoon}</span>
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-slate-200 rounded-2xl mb-6" />
                  <h3 className="text-2xl font-black text-slate-400 tracking-tighter uppercase mb-3">{proj.title}</h3>
                  <p className="text-sm text-slate-400">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjetosPage;
