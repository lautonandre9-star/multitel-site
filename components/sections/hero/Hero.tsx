import React, { useState, useEffect } from 'react';
import { useSegment } from '../../../src/context/SegmentContext';
import { useTranslation } from '../../../src/i18n/i18n';

const businessSlides = [
  {
    src: '/assets/banner-servicos.png',
    alt: 'Multitel Serviços – Soluções de Conectividade Corporativa',
  },
  {
    src: '/assets/banner-caminho.png',
    alt: 'Multitel – O Caminho para o Futuro Digital de Angola',
  },
];

const residentialSlides = [
  {
    src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1920',
    alt: 'Multitel Home – A melhor internet para sua família',
  },
  {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1920',
    alt: 'Multitel – Conectando sua casa ao mundo',
  },
];

const Hero: React.FC = () => {
  const { segment } = useSegment();
  const { t } = useTranslation();

  const businessSlides = [
    {
      src: '/assets/banner-servicos.png',
      alt: t.heroBusiness1,
    },
    {
      src: '/assets/banner-caminho.png',
      alt: t.heroBusiness2,
    },
  ];

  const residentialSlides = [
    {
      src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1920',
      alt: t.heroResidential1,
    },
    {
      src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1920',
      alt: t.heroResidential2,
    },
  ];

  const slides = segment === 'business' ? businessSlides : residentialSlides;
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500);
    }, 5000); // 5 segundos

    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    if (index === current) return;
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 400);
  };

  return (
    <section className="relative w-full overflow-hidden pt-16 md:pt-20">
      {/* Slide images */}
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          className="w-full h-auto block"
          style={{
            display: i === current ? 'block' : 'none',
            opacity: i === current ? (fade ? 1 : 0) : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        />
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className="transition-all duration-300 rounded-full border-2 border-white/70 focus:outline-none"
            style={{
              width: i === current ? '28px' : '10px',
              height: '10px',
              backgroundColor: i === current ? '#2563eb' : 'rgba(255,255,255,0.5)',
              borderRadius: i === current ? '6px' : '50%',
            }}
          />
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-blue-600/80 text-white rounded-full p-2 transition-all duration-200 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-blue-600/80 text-white rounded-full p-2 transition-all duration-200 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;