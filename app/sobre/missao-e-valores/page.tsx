import React from 'react';
import { Target, Eye, ShieldCheck, HeartHandshake, Zap, Trophy, Users } from 'lucide-react';
import { useTranslation } from '../../../src/i18n/i18n';

const MissaoEValoresPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 mb-6 md:mb-8 bg-blue-500/20 py-2 px-4 rounded-full backdrop-blur-sm border border-blue-400/30">
            <span className="text-blue-300 text-xs font-black uppercase tracking-[0.2em]">{t.whoWeAre}</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            {t.missionVisionValues.split(',')[0]}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{t.missionVisionValues.split(',')[1].split(' e ')[0]}</span> {t.missionVisionValues.split(' e ')[1]}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t.principlesDesc}
          </p>
        </div>
      </section>

      {/* Missão e Visão Cards Section */}
      <section className="py-16 md:py-24 bg-slate-50 relative -mt-8 md:-mt-10 rounded-t-[2.5rem] md:rounded-t-[3rem] z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] text-center pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            
            {/* Missão */}
            <div className="flex-1 bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-8 border-blue-600 hover:-translate-y-2 transition-transform duration-500 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                <Target className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 font-display">{t.ourMission}</h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium px-2 md:px-4">
                "{t.missionDesc}"
              </p>
            </div>
 
            {/* Visão */}
            <div className="flex-1 bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-8 border-cyan-500 hover:-translate-y-2 transition-transform duration-500 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                <Eye className="w-8 h-8 md:w-10 md:h-10 text-cyan-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 font-display">{t.ourVision}</h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium px-2 md:px-4">
                "{t.visionDesc}"
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-16 md:py-24 bg-white text-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em] mb-4">{t.pillars}</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 font-display">
              {t.ourValues.split(' ')[0]} <span className="text-blue-600">{t.ourValues.split(' ')[1]}</span>
            </h3>
            <div className="w-20 md:w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 max-w-6xl mx-auto">
            
            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-xl hover:bg-white transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 rotate-3 group-hover:rotate-0">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-700">{t.rigor}</h4>
            </div>

            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-xl hover:bg-white transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 -rotate-3 group-hover:rotate-0">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-700">{t.proximity}</h4>
            </div>

            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-xl hover:bg-white transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 rotate-3 group-hover:rotate-0">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-700">{t.innovation}</h4>
            </div>

            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-xl hover:bg-white transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 -rotate-3 group-hover:rotate-0">
                <Trophy className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-700">{t.excellence}</h4>
            </div>

            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-xl hover:bg-white transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 rotate-3 group-hover:rotate-0">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-700">{t.socialResponsibility}</h4>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Summary Strip */}
      <section className="bg-blue-900 text-white py-12 text-center">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-lg md:text-2xl font-light italic max-w-4xl mx-auto leading-relaxed">
            "{t.corporateExperience}"
          </p>
        </div>
      </section>

    </div>
  );
};

export default MissaoEValoresPage;
