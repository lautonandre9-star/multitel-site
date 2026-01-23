import React from 'react';
import Button from '../../components/ui/Button';

const ContactosPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="pt-40 pb-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-none tracking-tighter">Canais de <br/><span className="text-blue-600">Proximidade</span></h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">Estamos disponíveis para consultas comerciais, suporte técnico e parcerias institucionais em todo o país.</p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Direct Channels */}
            <div className="lg:col-span-1 space-y-12">
              <div className="space-y-6">
                <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Central de Apoio</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase mb-2">Comercial & Vendas</h4>
                    <p className="text-lg text-slate-600 font-bold hover:text-blue-600 transition-colors">venda@multitel.co.ao</p>
                    <p className="text-slate-500 text-sm mt-1">+244 222 704 200</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase mb-2">Suporte Técnico (NOC)</h4>
                    <p className="text-lg text-slate-600 font-bold hover:text-blue-600 transition-colors">suporte@multitel.co.ao</p>
                    <p className="text-slate-500 text-sm mt-1">Disponível 24/7 para clientes activos</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase mb-2">Gestão de Talentos</h4>
                    <p className="text-lg text-slate-600 font-bold hover:text-blue-600 transition-colors">rh@multitel.co.ao</p>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-slate-900 text-white rounded-sm">
                <h4 className="font-black uppercase text-xs tracking-widest mb-4 text-blue-500">Sede Luanda</h4>
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
                <h2 className="text-3xl font-black text-slate-950 mb-10 uppercase tracking-tighter">Solicitação de Proposta</h2>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nome do Responsável</label>
                      <input type="text" className="w-full bg-slate-50 border-b border-slate-200 py-4 px-0 focus:border-blue-600 outline-none transition-colors font-semibold" placeholder="Insira o seu nome" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Organização / NIF</label>
                      <input type="text" className="w-full bg-slate-50 border-b border-slate-200 py-4 px-0 focus:border-blue-600 outline-none transition-colors font-semibold" placeholder="Nome da empresa" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Corporativo</label>
                      <input type="email" className="w-full bg-slate-50 border-b border-slate-200 py-4 px-0 focus:border-blue-600 outline-none transition-colors font-semibold" placeholder="seuemail@empresa.ao" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Serviço Pretendido</label>
                      <select className="w-full bg-slate-50 border-b border-slate-200 py-4 px-0 focus:border-blue-600 outline-none transition-colors font-semibold appearance-none">
                        <option>Fibra Óptica</option>
                        <option>Internet Dedicada (DIA)</option>
                        <option>Micro-Onda</option>
                        <option>WiMax / Albentia</option>
                        <option>Rede VSAT (Satélite)</option>
                        <option>Data Center / Colocation</option>
                        <option>VPN Corporativa</option>
                        <option>Voz IP / VoIP</option>
                        <option>Cybersecurity</option>
                        <option>Soluções Multitel Agro</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Detalhes do Projecto</label>
                    <textarea rows={5} className="w-full bg-slate-50 border-b border-slate-200 py-4 px-0 focus:border-blue-600 outline-none transition-colors font-semibold" placeholder="Descreva brevemente a sua necessidade técnica..."></textarea>
                  </div>

                  <Button className="w-full py-6 rounded-none text-xs uppercase tracking-[0.2em] font-black" size="lg">
                    Submeter para Avaliação Técnica
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