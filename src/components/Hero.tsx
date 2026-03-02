
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import heroImage from '../images/hero.xiri.jpg';
import heroImage1 from '../images/hero.xiri1.jpg';
import heroImage2 from '../images/hero.xiri2.jpg';
import heroImage3 from '../images/hero.xiri3.jpg';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [heroImage, heroImage1, heroImage2, heroImage3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

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
    <section id="home" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 z-10">
            <div className="space-y-4 animate-fade-in-up md:space-y-6">
              <span className="text-[10px] font-bold text-xiri-gold tracking-[0.6em] uppercase block">
                L'Excellence Immobilière
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-xiri-navy leading-[1.1] tracking-normal">
                Conciergerie et gestion de vos <span className="font-light text-xiri-gold">locations</span> courte durée
              </h1>
            </div>

            <p className="text-[15px] text-[#0a0a0a] leading-relaxed max-w-xl font-medium">
              Gestion de propriétés de prestige et services sur-mesure pour une sérénité absolue sur l'Île de Beauté.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-xiri-navy text-white px-8 py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-extrabold hover:bg-xiri-gold transition-all duration-300 shadow-xl rounded-none border-none cursor-pointer"
              >
                Confier mon bien
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-transparent text-xiri-navy border border-xiri-navy/20 px-8 py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-extrabold hover:bg-xiri-navy hover:text-white transition-all duration-300 rounded-none shadow-sm cursor-pointer"
              >
                Découvrir nos services
              </button>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2 relative h-[450px] sm:h-[500px] lg:h-[700px] rounded-none overflow-hidden shadow-2xl border border-xiri-navy/5">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <img
                  src={img.src}
                  alt={`Xiri Conciergerie - Hero ${index + 1}`}
                  className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${index === currentImageIndex ? 'scale-110' : 'scale-100'
                    }`}
                />
              </div>
            ))}

            {/* Elegant Xiri Badge */}
            <div className="absolute bottom-0 left-0 bg-white p-6 md:p-8 shadow-2xl border-t border-r border-xiri-navy/5 flex flex-col justify-center gap-2 rounded-none z-20 hidden md:flex">
              <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.4em]">Excellence</span>
              <span className="font-serif text-xl sm:text-2xl text-xiri-navy tracking-wide">Service Premium</span>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default Hero;

