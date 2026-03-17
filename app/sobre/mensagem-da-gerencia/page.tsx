import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../../src/i18n/i18n';

const MensagemGerenciaPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-3 mb-8 bg-blue-500/20 py-2 px-4 rounded-full backdrop-blur-sm border border-blue-400/30">
              <span className="text-blue-300 text-xs font-black uppercase tracking-[0.2em]">{t.whoWeAre}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              {t.managementMessageTitle.split(' ').slice(0, -1).join(' ')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{t.managementMessageTitle.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              {t.commitmentSector}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            <div className="lg:w-7/12 space-y-8 text-lg text-slate-700 leading-relaxed font-medium">
              <p className="first-letter:text-7xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
                {t.experienceYears}
              </p>
              
              <p>
                {t.agilitySolutions}
              </p>

              <div className="my-12 p-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl">
                <p className="text-2xl text-blue-900 font-bold italic leading-snug">
                  "{t.holisticMarket}"
                </p>
              </div>

              <p>
                {t.humanCapital}
              </p>

              <p>
                {t.teamMotto}
              </p>

              <p>
                {t.corporateExperience}
              </p>
            </div>

            <div className="lg:w-5/12 w-full sticky top-32">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src="/assets/ceo.webp" 
                  alt={t.leadershipTeam} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-8 pt-24 z-20">
                  <div className="flex gap-8 text-white">
                    <div>
                      <div className="text-4xl font-black mb-1">23+</div>
                      <div className="text-sm font-bold text-blue-300 uppercase tracking-widest">{t.yearsInnovation}</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black mb-1">100%</div>
                      <div className="text-sm font-bold text-blue-300 uppercase tracking-widest">{t.customerFocus}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Bottom CTA to About Hub */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8 text-center flex flex-col items-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{t.knowMoreOrganization}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/sobre/missao-e-valores" className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-bold rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                  {t.missionValues}
                  <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="/sobre" className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-bold rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                  {t.theCompany}
                  <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
        </div>
      </section>

    </div>
  );
};

export default MensagemGerenciaPage;
