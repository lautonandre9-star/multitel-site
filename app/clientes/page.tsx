import React from 'react';

const ClientesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Confiança de <span className="text-blue-400">Instituições</span> Líderes</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Servimos os pilares da economia de Angola, providenciando a conectividade que sustenta o progresso nacional.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-10 border border-gray-100 bg-gray-50 rounded-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Banca e Finanças</h3>
              <p className="text-slate-600 leading-relaxed">
                As principais instituições financeiras de Angola confiam na Multitel para interligar as suas redes de balcões e centros de dados, garantindo transações seguras e sem interrupções. Redes redundantes para operações críticas.
              </p>
            </div>
            <div className="p-10 border border-gray-100 bg-gray-50 rounded-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Petróleo e Gás</h3>
              <p className="text-slate-600 leading-relaxed">
                Suportamos operações de exploração e produção com conectividade resiliente via VSAT, essencial para a monitorização de infraestruturas críticas em offshore e comunicação com centros de comando globais.
              </p>
            </div>
            <div className="p-10 border border-gray-100 bg-gray-50 rounded-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Administração Pública</h3>
              <p className="text-slate-600 leading-relaxed">
                Colaboramos com ministérios e institutos públicos na implementação de soluções que modernizam o atendimento ao cidadão e a gestão administrativa do Estado. Infraestrutura escalável para digitalização.
              </p>
            </div>
            <div className="p-10 border border-gray-100 bg-gray-50 rounded-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Indústria e Logística</h3>
              <p className="text-slate-600 leading-relaxed">
                Automação e gestão em tempo real de armazéns e linhas de produção. Conectividade robusta para operações industriais que exigem alta disponibilidade e baixa latência.
              </p>
            </div>
            <div className="p-10 border border-gray-100 bg-gray-50 rounded-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Educação e Saúde</h3>
              <p className="text-slate-600 leading-relaxed">
                Soluções de alta largura de banda para telemedicina e ensino remoto. Conectamos instituições de saúde e educação para garantir acesso a serviços essenciais em todo o país.
              </p>
            </div>
            <div className="p-10 border border-gray-100 bg-gray-50 rounded-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Comércio e Retalho</h3>
              <p className="text-slate-600 leading-relaxed">
                Gestão centralizada de pontos de venda e inventário nacional. Conectividade estável para sistemas de pagamento, ERP e comunicação entre filiais em todo o território.
              </p>
            </div>
          </div>

          <div className="mt-20 p-12 bg-slate-900 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">A sua organização merece o melhor.</h2>
              <p className="text-gray-400">Desenvolvemos soluções personalizadas para necessidades complexas com gestor dedicado e suporte 24/7.</p>
            </div>
            <a href="/contactos">
              <button className="bg-blue-600 text-white px-10 py-4 font-bold rounded-sm hover:bg-blue-700 transition-colors uppercase tracking-widest text-sm">
                Solicitar Estudo de Caso
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientesPage;