import React from 'react';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';

const CTAFinal: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-20"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 max-w-3xl mx-auto leading-tight">
          Pronto para elevar o padrão tecnológico da sua <span className="text-blue-500">organização?</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Contacte os nossos especialistas comerciais e obtenha um estudo de viabilidade técnica para a sua infraestrutura.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/contactos">
            <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-blue-900/40">Pedir Proposta Comercial</Button>
          </Link>
          <a href="tel:+244222704200">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-600 text-white hover:bg-white hover:text-slate-900">
              Ligar: +244 222 704 200
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;