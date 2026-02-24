
// @ts-nocheck
import React from 'react';
import heroImage from '../images/hero.xiri.jpg';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Xiri Conciergerie - Gestion Airbnb en Corse"
          className="w-full h-full object-cover scale-105 animate-[slow-zoom_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-xiri-navy/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="space-y-4 animate-fade-in-up">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-xiri-gold font-extrabold block mb-4 drop-shadow-md">
              L'Excellence Immobilière en Corse
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.2] tracking-tight text-white drop-shadow-2xl">
              Conciergerie et <span className="font-light">gestion</span> <br />
              de vos locations courte durée
            </h1>
          </div>

          <p className="text-[16px] md:text-[18px] text-white leading-relaxed font-semibold max-w-2xl mx-auto editorial-spacing drop-shadow-md">
            Gestion de propriétés de prestige et services sur-mesure pour une sérénité absolue sur l'Île de Beauté.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-xiri-navy px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-extrabold hover:bg-xiri-gold hover:text-white transition-all shadow-2xl border-none cursor-pointer"
            >
              Confier mon bien
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="bg-transparent border border-white/60 backdrop-blur-md text-white px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-extrabold hover:bg-white/20 transition-all cursor-pointer"
            >
              Découvrir nos services
            </button>
          </div>
        </div>
      </div>


      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.5s ease-out;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default Hero;
