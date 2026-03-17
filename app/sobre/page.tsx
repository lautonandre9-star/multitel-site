import React from 'react';
import { useTranslation } from '../../src/i18n/i18n';

const SobrePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Institutional Hero */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="max-w-4xl">
              <div className="text-blue-400 font-black text-xs uppercase tracking-[0.4em] mb-6">{t.whoWeAre}</div>
              <h1 className="text-5xl md:text-[100px] font-black mb-8 leading-[0.85] tracking-tighter uppercase">
                {t.aboutTitle.split(' ')[0]} <br /><span className="text-blue-600">{t.aboutTitle.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed font-medium mb-8">
                {t.aboutDesc1}
              </p>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                {t.aboutDesc2}
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600 transform translate-x-4 flex translate-y-4 rounded-sm transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <img
                src="/assets/dsq.jpg"
                alt={t.aboutTitle}
                className="relative z-10 w-full object-cover rounded-sm shadow-2xl transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div className="p-10 border-l-4 border-blue-600 bg-slate-50">
              <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">{t.mission}</h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                {t.missionDesc}
              </p>
            </div>
            <div className="p-10 border-l-4 border-blue-600 bg-slate-50">
              <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">{t.vision}</h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                {t.visionDesc}
              </p>
            </div>
            <div className="p-10 border-l-4 border-blue-600 bg-slate-50">
              <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">{t.values}</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="font-bold">{t.value1}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="font-bold">{t.value2}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="font-bold">{t.value3}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="font-bold">{t.value4}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="font-bold">{t.value5}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - CEO e CTO */}
      <section className="py-16 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em] mb-6">{t.board}</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-tight">
              {t.leadership.split(' ')[0]} <span className="text-blue-600">{t.leadership.split(' ').slice(1).join(' ')}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* CEO */}
            <div className="bg-white p-12 border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
              <div className="flex flex-col items-center text-center gap-6 mb-8">
                <img
                  src="/assets/CEO.jpg"
                  alt="Kussi Bernardo - CEO"
                  width={480}
                  height={480}
                  className="object-contain bg-transparent rounded-sm w-full max-w-[480px] h-auto"
                />
                <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">Kussi Bernardo</h4>
                  <p className="text-sm font-black text-blue-600 uppercase tracking-widest">Chief Executive Officer</p>
                  <p className="text-xs text-slate-500 mt-2">{t.ceoExp}</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.ceoEdu1}</span>
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.ceoEdu2}</span>
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.ceoEdu3}</span>
                </p>
              </div>
            </div>

            {/* CTO */}
            <div className="bg-white p-12 border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
              <div className="flex flex-col items-center text-center gap-6 mb-8">
                <img
                  src="/assets/CTO.jpg"
                  alt="Leonel Augusto - CTO"
                  width={480}
                  height={480}
                  className="object-contain bg-transparent rounded-sm w-full max-w-[480px] h-auto"
                />
                <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">Leonel Augusto</h4>
                  <p className="text-sm font-black text-blue-600 uppercase tracking-widest">Chief Technology Officer</p>
                  <p className="text-xs text-slate-500 mt-2">{t.ctoExp}</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.ctoEdu1}</span>
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.ctoEdu2}</span>
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{t.ctoEdu3}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em] mb-6">{t.ourPeople}</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-tight mb-6">
              {t.multidisciplinaryTeam.split(' ').slice(0, -3).join(' ')} <span className="text-blue-600">{t.multidisciplinaryTeam.split(' ').slice(-3).join(' ')}</span>
            </h3>
            <p className="text-lg text-slate-600 italic">
              {t.teamMotto}
            </p>
          </div>
          <div className="rounded-sm overflow-hidden shadow-2xl relative group">
            <img
              src="/assets/juntos.jpg"
              alt="Equipa Multitel"
              className="w-full h-auto transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 text-white pr-6">
              <p className="text-lg md:text-xl font-bold tracking-tight">{t.teamPride}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Porquê Confiar na Multitel */}
      <section className="py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              {t.whyTrust.split(' ').slice(0, -1).join(' ')} <span className="text-blue-600">{t.whyTrust.split(' ').slice(-1)}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-10 bg-slate-800 rounded-sm hover:bg-slate-700 transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">{t.customSolutions}</h3>
              <p className="text-slate-400 leading-relaxed">
                {t.customSolutionsDesc}
              </p>
            </div>
            <div className="text-center p-10 bg-slate-800 rounded-sm hover:bg-slate-700 transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">{t.dedicatedManager}</h3>
              <p className="text-slate-400 leading-relaxed">
                {t.dedicatedManagerDesc}
              </p>
            </div>
            <div className="text-center p-10 bg-slate-800 rounded-sm hover:bg-slate-700 transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">{t.support247}</h3>
              <p className="text-slate-400 leading-relaxed">
                {t.support247Desc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobrePage;