
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import heroImage from '../images/hero.xiri.jpg';
import heroImage1 from '../images/hero.xiri1.jpg';
import heroImage2 from '../images/hero.xiri2.jpg';
import heroImage3 from '../images/hero.xiri3.jpg';

const Hero: React.FC = () => {
  const images = [heroImage, heroImage1, heroImage2, heroImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [images.length]);

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
    <section id="home" className="relative pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16 overflow-hidden border-b border-xiri-navy/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          <div className="lg:col-span-7 space-y-6 z-10">
            <span className="text-[11px] font-bold text-xiri-gold tracking-[0.28em] uppercase block">
              Conciergerie premium en Corse
            </span>

            <h1 className="text-[32px] sm:text-[40px] lg:text-[46px] font-serif text-xiri-navy leading-[1.15]">
              Gestion de Locations Airbnb Haut de Gamme
            </h1>

            <p className="text-[16px] text-xiri-navy/80 leading-relaxed max-w-2xl font-medium">
              Xiri pilote l'annonce, la sélection voyageurs, l'opérationnel terrain et le reporting mensuel.
              Vous gardez la visibilité financière, nous gérons l'exécution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="border border-xiri-navy/10 bg-xiri-bg/30 px-4 py-3 rounded-xl">
                <p className="text-[10px] uppercase tracking-[0.18em] text-xiri-navy/50 font-bold">Performance</p>
                <p className="text-[20px] font-semibold text-xiri-navy">+27% revenu moyen</p>
              </div>
              <div className="border border-xiri-navy/10 bg-xiri-bg/30 px-4 py-3 rounded-xl">
                <p className="text-[10px] uppercase tracking-[0.18em] text-xiri-navy/50 font-bold">Réactivité</p>
                <p className="text-[20px] font-semibold text-xiri-navy">Réponse &lt; 24h</p>
              </div>
              <div className="border border-xiri-navy/10 bg-xiri-bg/30 px-4 py-3 rounded-xl">
                <p className="text-[10px] uppercase tracking-[0.18em] text-xiri-navy/50 font-bold">Transparence</p>
                <p className="text-[20px] font-semibold text-xiri-navy">Reporting mensuel</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-xiri-navy text-white px-7 py-4 text-[11px] uppercase tracking-[0.2em] font-extrabold hover:bg-xiri-gold transition-all duration-300 border-none cursor-pointer rounded-xl"
              >
                Estimer ma rentabilité
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-xiri-navy border border-xiri-navy/20 px-7 py-4 text-[11px] uppercase tracking-[0.2em] font-extrabold hover:bg-xiri-navy hover:text-white transition-all duration-300 cursor-pointer rounded-xl"
              >
                Voir les services
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[280px] sm:h-[340px] lg:h-[420px] overflow-hidden shadow-xl border border-xiri-navy/5 rounded-3xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  src={image.src}
                  alt={`Xiri Conciergerie ${index + 1}`}
                  className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${index === currentImageIndex ? 'scale-105' : 'scale-100'}`}
                />
              </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-xiri-navy/60 via-xiri-navy/20 to-transparent"></div>

            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-xiri-navy p-4 rounded-2xl">
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

