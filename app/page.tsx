import React from 'react';
import Hero from '../components/sections/hero/Hero';
import ServicesOverview from '../components/sections/services/ServicesOverview';
import Sectors from '../components/sections/clients/Sectors';
import PartnersCarousel from '../components/sections/clients/PartnersCarousel';
import CTAFinal from '../components/sections/contact/CTAFinal';
import { useSegment } from '../src/context/SegmentContext';
import { useTranslation } from '../src/i18n/i18n';


const Highlights = () => {
  const { t } = useTranslation();
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">{t.highlightsTitle}</h2>
          <div className="w-20 h-1.5 bg-sky-400 mx-auto mt-6"></div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { title: t.highlight1Title, date: t.highlight1Date, img: "/assets/par.png" },
          { title: t.highlight2Title, date: t.highlight2Date, img: "/assets/cyber.jpg" },
          { title: t.highlight3Title, date: t.highlight3Date, img: "/assets/ceo.webp" }
        ].map((h, i) => (
          <div key={i} className="bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer">
            <div className="h-48 overflow-hidden">
              <img src={h.img} alt={h.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
            </div>
            <div className="p-8">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{h.date}</div>
              <h3 className="text-lg font-bold text-slate-900 leading-tight mb-6 group-hover:text-blue-600 transition-colors">{h.title}</h3>
              <span className="text-xs font-black uppercase text-blue-600 border-b-2 border-transparent group-hover:border-blue-600 transition-all">{t.seeDetails}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

const HomePage: React.FC = () => {
  const { segment } = useSegment();

  return (
    <>
      <Hero />
      <ServicesOverview />
      <Highlights />
      {segment === 'business' && (
        <>
          <Sectors />
          <PartnersCarousel />
        </>
      )}
      <CTAFinal />
    </>
  );
};

export default HomePage;