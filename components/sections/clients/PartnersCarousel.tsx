import React from 'react';
import { useTranslation } from '../../../src/i18n/i18n';

const PartnersCarousel: React.FC = () => {
  const { t } = useTranslation();
  const row1 = [
    { name: "ESPAES", src: "/assets/espaes.png" },
    { name: "Banco BNI", src: "/assets/bni.png" },
    { name: "Caixa Angola", src: "/assets/caixa.png" },
    { name: "BNA", src: "/assets/bna.jfif" },
    { name: "SONILS", src: "/assets/sonils.png" },
    { name: "BCS", src: "/assets/bcs.png" },
    { name: "ACCESS", src: "/assets/access.jfif" },
    { name: "BCA", src: "/assets/bca.png" },
    { name: "EMIS", src: "/assets/emis.png" }
  ];

  const row2 = [
    { name: "Novagest", src: "/assets/novagest.jfif" },
    { name: "PwC", src: "/assets/pwc.jfif" },
    { name: "BPC", src: "/assets/bpc.png" },
    { name: "BFA", src: "/assets/bfa.png" },
    { name: "ANGOLAPREV", src: "/assets/angolaprev.jfif" },
    { name: "VTB África", src: "/assets/vtb.jfif" },
    { name: "BIR", src: "/assets/bir.png" },
    { name: "BAI", src: "/assets/bai.png" },
    { name: "Governo de Angola", src: "/assets/governo.png" },
    { name: "Multitel", src: "/assets/par.png" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-10 md:mb-16 text-center">
        <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em] mb-4">{t.ourPartners}</h2>
        <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 font-display">
          {t.partnersHeadline1}<span className="text-blue-600">{t.partnersHeadline2}</span>
        </h3>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
          {t.partnersDesc}
        </p>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee-reverse {
          animation: marquee 35s linear infinite reverse;
          display: flex;
          width: max-content;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="relative w-full overflow-hidden flex flex-col gap-10 bg-white py-10">
        {/* Left and Right Fade Effects */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Row 1 */}
        <div className="animate-marquee items-center gap-6 sm:gap-10 md:gap-14">
          {[...row1, ...row1].map((partner, idx) => (
            <div key={`row1-${idx}`} className="flex-shrink-0 flex items-center justify-center p-4 md:p-6 w-40 md:w-52 h-28 md:h-32 bg-white border border-slate-100 rounded-2xl hover:shadow-2xl hover:border-blue-100 transition-all group">
              <img src={partner.src} alt={partner.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300 transform" />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="animate-marquee-reverse items-center gap-6 sm:gap-10 md:gap-14">
          {[...row2, ...row2].map((partner, idx) => (
            <div key={`row2-${idx}`} className="flex-shrink-0 flex items-center justify-center p-4 md:p-6 w-40 md:w-52 h-28 md:h-32 bg-white border border-slate-100 rounded-2xl hover:shadow-2xl hover:border-blue-100 transition-all group">
              <img src={partner.src} alt={partner.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300 transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
