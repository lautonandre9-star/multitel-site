import React from 'react';
import { Link } from 'react-router-dom';
import { useSegment } from '../../../src/context/SegmentContext';
import { useTranslation } from '../../../src/i18n/i18n';

const ServiceCard = ({ title, description, icon, tag }: { title: string, description: string, icon: React.ReactNode, tag: string }) => {
  const { t } = useTranslation();
  return (
    <div className="group relative bg-white p-6 md:p-10 border border-slate-100 hover:border-blue-600 transition-all duration-500 overflow-hidden">
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
        {t.exploreSpecs}
        <svg className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </Link>
    </div>
  );
};

const ServicesOverview: React.FC = () => {
  const { segment } = useSegment();
  const { t } = useTranslation();

  const businessServices = [
    {
      tag: "Fiber",
      title: t.fiberTitle,
      description: t.fiberDesc,
      icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    },
    {
      tag: "Microwave",
      title: t.microwaveTitle,
      description: t.microwaveDesc,
      icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/></svg>
    },
    {
      tag: "Broadband",
      title: t.broadbandTitle,
      description: t.broadbandDesc,
      icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    },
    {
      tag: "Satellite",
      title: t.vsatTitle,
      description: t.vsatDesc,
      icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.003 9.003 0 008.367-5.657l-4.577-1.294a5.004 5.004 0 01-7.58-7.58l-1.294-4.577A9.003 9.003 0 003 12c0 5 4 9 9 9z"/></svg>
    }
  ];

  const residentialServices = [
    {
      tag: "Home",
      title: t.homeTitle,
      description: t.homeDesc,
      icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
    },
    {
      tag: "Mesh",
      title: t.meshTitle,
      description: t.meshDesc,
      icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/></svg>
    },
    {
      tag: "Voicemail",
      title: t.voipTitle,
      description: t.voipDesc,
      icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
    },
    {
      tag: "Security",
      title: t.cctvTitle,
      description: t.cctvDesc,
      icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
    }
  ];

  const services = segment === 'business' ? businessServices : residentialServices;

  return (
    <section className="py-16 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-3xl mb-12 md:mb-24">
          <div className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-6">{t.expertise}</div>
          <h2 className="text-3xl md:text-6xl font-black text-slate-950 leading-[1.1] tracking-tighter">
            {segment === 'business' 
              ? <>{t.b2bHeadline1}<span className="text-blue-600">{t.b2bHeadline2}</span>{t.b2bHeadline3}</>
              : <>{t.resHeadline1}<span className="text-blue-600">{t.resHeadline2}</span>{t.resHeadline3}</>
            }
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-slate-100">
          {services.map((s) => (
            <ServiceCard 
              key={s.tag}
              tag={s.tag}
              title={s.title}
              description={s.description}
              icon={s.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;