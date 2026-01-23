
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './app/page';
import SobrePage from './app/sobre/page';
import ServicosPage from './app/servicos/page';
import ClientesPage from './app/clientes/page';
import BlogPage from './app/blog/page';
import ContactosPage from './app/contactos/page';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* Removido o padding-top fixo para permitir que o Hero suba até o topo sob a navbar transparente */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/clientes" element={<ClientesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contactos" element={<ContactosPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;