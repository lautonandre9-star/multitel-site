import React from 'react';
import Button from '../../components/ui/Button';
import { useTranslation } from '../../src/i18n/i18n';

const ContactosPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <section className="pt-40 pb-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
              {t.proximityChannels.split(' ')[0]} <br/>
              <span className="text-blue-400">{t.proximityChannels.split(' ')[1]} {t.proximityChannels.split(' ')[2]}</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">{t.proximityDesc}</p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Direct Channels */}
            <div className="lg:col-span-1 space-y-12">
              <div className="space-y-6">
                <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">{t.supportCenter}</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase mb-2">{t.salesLine}</h4>
                    <p className="text-lg text-slate-600 font-bold hover:text-blue-600 transition-colors">venda@multitel.co.ao</p>
                    <p className="text-slate-500 text-sm mt-1">+244 222 704 200</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase mb-2">{t.techSupport}</h4>
                    <p className="text-lg text-slate-600 font-bold hover:text-blue-600 transition-colors">suporte@multitel.co.ao</p>
                    <p className="text-slate-500 text-sm mt-1">Disponível 24/7 para clientes activos</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase mb-2">{t.talentManagement}</h4>
                    <p className="text-lg text-slate-600 font-bold hover:text-blue-600 transition-colors">rh@multitel.co.ao</p>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-slate-800 text-white rounded-sm border border-slate-700">
                <h4 className="font-black uppercase text-xs tracking-widest mb-4 text-blue-400">{t.headquartersLuanda}</h4>
                <p className="text-sm leading-relaxed text-slate-300">
                  Rua Cristiano dos Santos, nº 5<br/>
                  Bairro Miramar, Distrito Urbano do Sambizanga<br/>
                  Luanda, Angola
                </p>
              </div>
            </div>

            {/* B2B Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-16 border border-slate-100 shadow-2xl shadow-slate-200/50">
                <h2 className="text-3xl font-black text-slate-950 mb-10 uppercase tracking-tighter">{t.proposalRequest}</h2>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.responsibleName}</label>
                      <input type="text" className="w-full bg-slate-50 border-b border-slate-200 py-4 px-0 focus:border-blue-600 outline-none transition-colors font-semibold" placeholder="Insira o seu nome" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.organizationNif}</label>
                      <input type="text" className="w-full bg-slate-50 border-b border-slate-200 py-4 px-0 focus:border-blue-600 outline-none transition-colors font-semibold" placeholder="Nome da empresa" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.corporateEmail}</label>
                      <input type="email" className="w-full bg-slate-50 border-b border-slate-200 py-4 px-0 focus:border-blue-600 outline-none transition-colors font-semibold" placeholder="seuemail@empresa.ao" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.intendedService}</label>
                      <select className="w-full bg-slate-50 border-b border-slate-200 py-4 px-0 focus:border-blue-600 outline-none transition-colors font-semibold appearance-none">
                        <option>{t.fiberTitle}</option>
                        <option>{t.dedicatedInternet}</option>
                        <option>{t.microwaveTitle}</option>
                        <option>{t.wimax}</option>
                        <option>{t.vsat}</option>
                        <option>{t.dataCenter}</option>
                        <option>{t.vpn}</option>
                        <option>{t.voipTitle}</option>
                        <option>{t.cybersecurity}</option>
                        <option>{t.agro}</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.projectDetails}</label>
                    <textarea rows={5} className="w-full bg-slate-50 border-b border-slate-200 py-4 px-0 focus:border-blue-600 outline-none transition-colors font-semibold" placeholder="Descreva brevemente a sua necessidade técnica..."></textarea>
                  </div>

                  <Button className="w-full py-6 rounded-none text-xs uppercase tracking-[0.2em] font-black" size="lg">
                    {t.submitTechnical}
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactosPage;