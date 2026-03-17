import React from 'react';
import { useTranslation } from '../../../src/i18n/i18n';

const Sectors: React.FC = () => {
  const { t } = useTranslation();
  const sectors = [
    { name: t.sector1Name, desc: t.sector1Desc },
    { name: t.sector2Name, desc: t.sector2Desc },
    { name: t.sector3Name, desc: t.sector3Desc },
    { name: t.sector4Name, desc: t.sector4Desc },
    { name: t.sector5Name, desc: t.sector5Desc },
    { name: t.sector6Name, desc: t.sector6Desc }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4 italic">{t.sectorsServed}</h2>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              {t.sectorsHeadline1}<span className="text-blue-700">{t.sectorsHeadline2}</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {t.sectorsDesc}
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
            {/* Imagem juntos.jpg - equipa/colaboração empresarial */}
            <img 
              src="/assets/juntos.jpg" 
              alt={t.teamAlt} 
              className="relative z-10 rounded-xl shadow-2xl transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;