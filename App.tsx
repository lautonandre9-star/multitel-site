
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import VirtualAssistant from './components/ui/VirtualAssistant';
import { SegmentProvider } from './src/context/SegmentContext';
import { LanguageProvider } from './src/context/LanguageContext';
import HomePage from './app/page';
import SobrePage from './app/sobre/page';
import MensagemGerenciaPage from './app/sobre/mensagem-da-gerencia/page';
import MissaoEValoresPage from './app/sobre/missao-e-valores/page';
import RecrutamentoPage from './app/sobre/recrutamento/page';
import ServicosPage from './app/servicos/page';
import ClientesPage from './app/clientes/page';
import BlogPage from './app/blog/page';
import ContactosPage from './app/contactos/page';
import AgroPage from './app/agro/page';
import ProjetosPage from './app/projetos/page';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <SegmentProvider>
      <LanguageProvider>
        <HashRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Header />
            {/* Removido o padding-top fixo para permitir que o Hero suba até o topo sob a navbar transparente */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sobre" element={<SobrePage />} />
                <Route path="/sobre/mensagem-da-gerencia" element={<MensagemGerenciaPage />} />
                <Route path="/sobre/missao-e-valores" element={<MissaoEValoresPage />} />
                <Route path="/sobre/recrutamento" element={<RecrutamentoPage />} />
                <Route path="/servicos" element={<ServicosPage />} />
                <Route path="/clientes" element={<ClientesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contactos" element={<ContactosPage />} />
                <Route path="/agro" element={<AgroPage />} />
                <Route path="/projetos" element={<ProjetosPage />} />
              </Routes>
            </main>
            <Footer />
            <VirtualAssistant />
          </div>
        </HashRouter>
      </LanguageProvider>
    </SegmentProvider>
  );
};

export default App;