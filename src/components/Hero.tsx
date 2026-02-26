
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
            <div className="space-y-4 animate-fade-in-up">
              <span className="text-sm font-bold text-xiri-gold tracking-widest uppercase">
                L'Excellence Immobilière
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-gray-900 leading-[1.1] tracking-tight">
                Conciergerie et gestion de vos <span className="text-[#FF385C]">locations</span> courte durée
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl font-medium">
              Gestion de propriétés de prestige et services sur-mesure pour une sérénité absolue sur l'Île de Beauté.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#FF385C] hover:bg-[#E31C5F] text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-md"
              >
                Confier mon bien
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-gray-900 border border-gray-300 px-8 py-4 rounded-xl text-base font-bold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                Découvrir nos services
              </button>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2 relative h-[450px] sm:h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={img.src}
                  alt={`Xiri Conciergerie - Hero ${index + 1}`}
                  className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${
                    index === currentImageIndex ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
            ))}
            
            {/* Optional Floating Badge Airbnb Style */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FF385C] rounded-full flex items-center justify-center text-white font-bold text-xl">
                ★
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Service Premium</p>
                <p className="text-xs text-gray-500 font-medium">Superhost & Conciergerie</p>
              </div>
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

