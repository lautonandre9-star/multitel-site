import React from 'react';
import { Briefcase, Send, ChevronRight } from 'lucide-react';
import { useTranslation } from '../../../src/i18n/i18n';

const RecrutamentoPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-50 min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 mb-8 bg-blue-500/20 py-2 px-4 rounded-full backdrop-blur-sm border border-blue-400/30">
            <span className="text-blue-300 text-xs font-black uppercase tracking-[0.2em]">{t.whoWeAre}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            {t.joinTeam.split(' ').slice(0, -1).join(' ')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{t.joinTeam.split(' ').slice(-1)}</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t.joinTeamDesc}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Vagas Abertas Area (Empty State representation) */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Briefcase className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">{t.openVacancies}</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {t.openVacanciesDesc}
              </p>

              <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-8 text-center text-slate-500">
                {t.noVacancies}
              </div>
            </div>

            {/* Candidatura Espontânea */}
            <div className="bg-gradient-to-br from-blue-600 flex flex-col justify-between to-blue-800 p-10 rounded-3xl shadow-xl text-white">
              <div>
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black mb-4">{t.spontaneousApplication}</h2>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  {t.spontaneousDesc}
                </p>
              </div>

              <button className="w-full bg-white text-blue-700 py-4 px-6 rounded-xl font-bold uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center gap-2 group">
                {t.sendCv}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Summary Strip */}
      <section className="bg-slate-900 border-t-4 border-blue-600 text-white py-12 text-center shadow-inner">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-xl md:text-2xl font-light italic max-w-4xl mx-auto leading-relaxed text-slate-300">
            "{t.corporateExperience}"
          </p>
        </div>
      </section>

    </div>
  );
};

export default RecrutamentoPage;
