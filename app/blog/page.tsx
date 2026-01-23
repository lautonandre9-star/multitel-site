import React from 'react';

const BlogPost = ({ title, category, date, excerpt, imageUrl }: any) => (
  <article className="group cursor-pointer">
    <div className="overflow-hidden rounded-lg mb-6 h-64 bg-gray-100">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className="space-y-3">
      <div className="flex items-center text-xs font-bold text-blue-600 uppercase tracking-widest">
        <span>{category}</span>
        <span className="mx-2">•</span>
        <span className="text-slate-400">{date}</span>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{excerpt}</p>
      <div className="inline-flex items-center text-sm font-bold text-slate-900 border-b-2 border-transparent group-hover:border-blue-600 transition-all pt-2">
        Ler Artigo Completo
      </div>
    </div>
  </article>
);

const BlogPage: React.FC = () => {
  const posts = [
    {
      title: "O Impacto do 5G nas Operações Industriais em Angola",
      category: "Tecnologia",
      date: "15 Mai, 2024",
      excerpt: "Como a baixa latência e a densidade de conexão do 5G vão transformar a automação nas zonas económicas exclusivas angolanas.",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Cibersegurança Corporativa: Protegendo Infraestruturas Críticas",
      category: "Segurança",
      date: "22 Abr, 2024",
      excerpt: "Análise estratégica sobre as principais ameaças digitais enfrentadas pelo sector bancário e energético nacional este ano.",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Redundância de Rede: Por que a sua Empresa Precisa de Multi-homing",
      category: "Infraestrutura",
      date: "05 Mar, 2024",
      excerpt: "A importância de ter múltiplos caminhos de fibra óptica e satélite para evitar o downtime em momentos de manutenção internacional.",
      imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Multitel Agro: Tecnologia IoT Aplicada ao Agronegócio",
      category: "Inovação",
      date: "18 Fev, 2024",
      excerpt: "Como sensores inteligentes e telemetria estão revolucionando a gestão agrícola em Angola, aumentando produtividade e reduzindo desperdícios.",
      imageUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Data Centers em Angola: Conformidade e Soberania Digital",
      category: "Infraestrutura",
      date: "30 Jan, 2024",
      excerpt: "A importância de manter dados críticos em território nacional e como os Data Centers locais garantem conformidade regulamentar.",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "VPN Corporativa: Trabalho Remoto Seguro em 2024",
      category: "Segurança",
      date: "12 Jan, 2024",
      excerpt: "Melhores práticas para implementar VPNs empresariais com criptografia AES-256 e autenticação multifatorial para equipas distribuídas.",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="bg-white pb-24">
      <section className="py-24 bg-slate-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Insights & <span className="text-blue-600">Estratégia</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto italic">O seu recurso para tendências tecnológicas e decisões de infraestrutura no mercado de Angola.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {posts.map((p, i) => <BlogPost key={i} {...p} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;