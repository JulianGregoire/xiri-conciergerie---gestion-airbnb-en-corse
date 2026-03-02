
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
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-white overflow-hidden border-b border-xiri-navy/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          <div className="lg:col-span-7 space-y-6 z-10">
            <span className="text-[11px] font-bold text-xiri-gold tracking-[0.28em] uppercase block">
              Conciergerie premium en Corse
            </span>

            <h1 className="text-[32px] sm:text-[40px] lg:text-[46px] font-serif text-xiri-navy leading-[1.15]">
              Confiez votre bien. Revenus optimisés, gestion 100% déléguée.
            </h1>

            <p className="text-[16px] text-xiri-navy/80 leading-relaxed max-w-2xl font-medium">
              Xiri pilote l'annonce, la sélection voyageurs, l'opérationnel terrain et le reporting mensuel.
              Vous gardez la visibilité financière, nous gérons l'exécution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="border border-xiri-navy/10 bg-xiri-bg/30 px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-xiri-navy/50 font-bold">Performance</p>
                <p className="text-[20px] font-semibold text-xiri-navy">+27% revenu moyen</p>
              </div>
              <div className="border border-xiri-navy/10 bg-xiri-bg/30 px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-xiri-navy/50 font-bold">Réactivité</p>
                <p className="text-[20px] font-semibold text-xiri-navy">Réponse &lt; 24h</p>
              </div>
              <div className="border border-xiri-navy/10 bg-xiri-bg/30 px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-xiri-navy/50 font-bold">Transparence</p>
                <p className="text-[20px] font-semibold text-xiri-navy">Reporting mensuel</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-xiri-navy text-white px-7 py-4 text-[11px] uppercase tracking-[0.2em] font-extrabold hover:bg-xiri-gold transition-all duration-300 border-none cursor-pointer"
              >
                Estimer ma rentabilité
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-xiri-navy border border-xiri-navy/20 px-7 py-4 text-[11px] uppercase tracking-[0.2em] font-extrabold hover:bg-xiri-navy hover:text-white transition-all duration-300 cursor-pointer"
              >
                Voir les services
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden shadow-xl border border-xiri-navy/5">
            <img
              src={heroImage.src}
              alt="Xiri Conciergerie"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-xiri-navy/90 text-white p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-xiri-gold">Pack Performance 360</p>
              <p className="text-[15px] font-medium">Une seule commission, exécution complète.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

