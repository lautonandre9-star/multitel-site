import React from 'react';

const SobrePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Institutional Hero */}
      <section className="pt-48 pb-32 bg-slate-950 text-white relative">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-6">Quem Somos</div>
            <h1 className="text-6xl md:text-[100px] font-black mb-8 leading-[0.85] tracking-tighter uppercase">
              Solidez <br/><span className="text-blue-600">e Confiança</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-2xl mb-8">
              A Multitel - Serviços de Telecomunicações Lda., tem como atividade principal a exploração e prestação de serviços de Telecomunicações nacional e internacional, de Internet e dados, bem como serviços diversos na área das Tecnologias de Informação e Comunicação (TIC).
            </p>
            <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-2xl">
              Somos detentores de uma licença de Multisserviços de comunicação de dados de uso público, outorgado pelo INACOM.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="p-10 border-l-4 border-blue-600 bg-slate-50">
              <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Missão</h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                Contribuir para a inclusão digital e desenvolvimento das TICs no mercado através de soluções inovadoras e experiências de valor.
              </p>
            </div>
            <div className="p-10 border-l-4 border-blue-600 bg-slate-50">
              <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Visão</h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                Ser reconhecida como um provedor de serviços integrados de excelência em Telecomunicações, Tecnologias e Sistemas de Informação através de relações de confiança com os clientes e parceiros.
              </p>
            </div>
            <div className="p-10 border-l-4 border-blue-600 bg-slate-50">
              <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Valores</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="font-bold">Rigor</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="font-bold">Proximidade com os clientes</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="font-bold">Inovação</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="font-bold">Excelência</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="font-bold">Responsabilidade Social</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - CEO e CTO */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em] mb-6">Nosso Board</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-tight">
              Liderança <span className="text-blue-600">Experiente</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* CEO */}
            <div className="bg-white p-12 border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-24 h-24 bg-blue-600 rounded-sm flex items-center justify-center text-white font-black text-3xl">
                  KB
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">Kussi Bernardo</h4>
                  <p className="text-sm font-black text-blue-600 uppercase tracking-widest">Chief Executive Officer</p>
                  <p className="text-xs text-slate-500 mt-2">Mais de 22 anos de experiência no sector de Telecomunicações</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Mestre em Gestão Estratégica de Tecnologia de Informação (Fundação Getúlio Vargas, Brasil)</span>
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Pós-Graduação em Design Thinking e Inovação (Emiritus)</span>
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Licenciado em Engenharia Eletrónica e Gestão (Middlesex University, Reino Unido)</span>
                </p>
              </div>
            </div>

            {/* CTO */}
            <div className="bg-white p-12 border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-24 h-24 bg-blue-600 rounded-sm flex items-center justify-center text-white font-black text-3xl">
                  LA
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">Leonel Augusto</h4>
                  <p className="text-sm font-black text-blue-600 uppercase tracking-widest">Chief Technology Officer</p>
                  <p className="text-xs text-slate-500 mt-2">Mais de 24 anos de experiência em Telecomunicações & TI</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Pós-Graduação em Gestão de Empresas (Universidade Católica de Lisboa, Portugal)</span>
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Licenciado em Engenharia Informática (Universidade Agustinho Neto)</span>
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Participante do programa de Mestrado & Doutoramento (Atlantic International University, USA)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em] mb-6">Nossas Pessoas</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-tight mb-6">
              Uma Equipa <span className="text-blue-600">Multidisciplinar</span> ao seu Serviço
            </h3>
            <p className="text-lg text-slate-600 italic">
              O nosso talento coletivo impulsiona o sucesso dos nossos clientes. Com a nossa cultura comprometida com a excelência e com o foco na inovação.
            </p>
          </div>
          <div className="rounded-sm overflow-hidden shadow-2xl relative group">
            <img 
              src="/assets/juntos.PNG" 
              alt="Equipa Multitel" 
              className="w-full h-auto grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-xl font-bold tracking-tight">Orgulho em servir as maiores instituições do país.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Porquê Confiar na Multitel */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Porquê confiar na <span className="text-blue-600">Multitel?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-10 bg-slate-800 rounded-sm hover:bg-slate-700 transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">Soluções Personalizadas</h3>
              <p className="text-slate-400 leading-relaxed">
                Com foco em entender suas particularidades, criamos estratégias adaptadas que garantem eficiência e resultados satisfatórios.
              </p>
            </div>
            <div className="text-center p-10 bg-slate-800 rounded-sm hover:bg-slate-700 transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">Gestor Dedicado</h3>
              <p className="text-slate-400 leading-relaxed">
                Temos um gestor exclusivo para seu projecto, sendo seu ponto principal de contacto. Ele oferece acompanhamento próximo e assegura que suas expectativas sejam atendidas.
              </p>
            </div>
            <div className="text-center p-10 bg-slate-800 rounded-sm hover:bg-slate-700 transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">Atendimento 24/7</h3>
              <p className="text-slate-400 leading-relaxed">
                Garantimos atendimento 24/7. Nossa equipe está sempre disponível, assegurando a continuidade das operações da sua empresa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobrePage;