// @ts-nocheck

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Confier ma villa à Xiri a été ma meilleure décision. Une présence physique sur place et des réservations directes qui explosent. Je recommande vivement leurs services pour une rentabilité optimale.",
    author: "Jean-Pierre C.",
    time: "il y a 3 semaines",
    avatar: "https://ui-avatars.com/api/?name=Jean-Pierre+C&background=f0f2f5&color=1B2B44&bold=true"
  },
  {
    text: "Enfin une conciergerie sérieuse en Corse. Le ménage est impeccable et le suivi via l'application me rassure énormément car je vis sur le continent. Très professionnels.",
    author: "Lætitia S.",
    time: "il y a 1 mois",
    avatar: "https://ui-avatars.com/api/?name=Laetitia+S&background=f0f2f5&color=C5A059&bold=true"
  },
  {
    text: "Xiri gère mes 3 bergeries. La rentabilité est exceptionnelle grâce à leur pack Performance et la visibilité internationale qu'ils m'offrent. Une vraie stratégie digitale.",
    author: "Dominique M.",
    time: "il y a 2 mois",
    avatar: "https://ui-avatars.com/api/?name=Dominique+M&background=f0f2f5&color=1B2B44&bold=true"
  },
  {
    text: "Une équipe qui comprend les enjeux du luxe. Ma propriété de Calvi est gérée avec un soin méticuleux, comme si c'était la leur. Excellent relationnel avec les équipes.",
    author: "Marc-Antoine B.",
    time: "il y a 3 mois",
    avatar: "https://ui-avatars.com/api/?name=Marc-Antoine+B&background=f0f2f5&color=C5A059&bold=true"
  },
  {
    text: "Le site web dédié créé par Xiri a totalement réduit ma dépendance à Airbnb. 40% de mes réservations sont désormais en direct. Un ROI imbattable et une gestion fluide.",
    author: "Sophie L.",
    time: "il y a 4 mois",
    avatar: "https://ui-avatars.com/api/?name=Sophie+L&background=f0f2f5&color=1B2B44&bold=true"
  },
  {
    text: "Réactivité exemplaire. Même en cas de petit souci technique, Xiri intervient dans l'heure. C'est le niveau de service premium que j'attendais pour mon investissement.",
    author: "Pierre-Félix G.",
    time: "il y a 5 mois",
    avatar: "https://ui-avatars.com/api/?name=Pierre-Felix+G&background=f0f2f5&color=C5A059&bold=true"
  },
  {
    text: "Une approche moderne de la conciergerie. L'intelligence artificielle pour la réactivité avec les voyageurs nous a permis de sécuriser des réservations même en pleine nuit. Bravo.",
    author: "Marie-Claire D.",
    time: "il y a 6 mois",
    avatar: "https://ui-avatars.com/api/?name=Marie-Claire+D&background=f0f2f5&color=1B2B44&bold=true"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3.5);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1.2);
      else if (window.innerWidth < 1024) setItemsToShow(2.5);
      else setItemsToShow(3.5);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonials.length - Math.floor(itemsToShow);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section id="testimonials" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col mb-20 gap-4 text-center">
          <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.6em]">Excellence Reconnue</span>
          <h2 className="text-4xl md:text-6xl font-serif text-xiri-navy">
            Ce que disent nos <span className="text-xiri-gold font-light">propriétaires</span>.
          </h2>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-[#fbbc04] fill-[#fbbc04]" />
              ))}
            </div>
            <span className="text-xl font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-500 font-medium">(130+ avis)</span>
          </div>
        </div>

        <div className="relative overflow-visible pb-12">
          {/* Controls */}
          <div className="absolute -top-16 right-0 flex gap-4 hidden md:flex">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-xiri-navy hover:text-xiri-gold transition-colors hover:shadow-lg border border-gray-100 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-xiri-navy hover:text-xiri-gold transition-colors hover:shadow-lg border border-gray-100 cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: \`translateX(-\${currentIndex * (100 / itemsToShow)}%)\`,
            }}
          >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="px-4 flex-shrink-0"
              style={{ width: \`\${100 / itemsToShow}%\` }}
              >
          {/* Google Review Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 flex flex-col h-full hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1">

            {/* Header: User Info */}
            <div className="flex items-center gap-4 mb-5">
              <div className="flex-shrink-0">
                <img src={item.avatar} alt={item.author} className="w-12 h-12 rounded-full object-cover" />
              </div>
              <div className="flex-grow">
                <h4 className="text-[15px] font-semibold text-gray-900 leading-tight">{item.author}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[13px] text-gray-500 font-medium">{item.time}</span>
                </div>
              </div>
              {/* Google G Logo */}
              <div className="flex-shrink-0 w-6 h-6 self-start mt-1">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="text-[#fbbc04] fill-[#fbbc04]" />
              ))}
            </div>

            {/* Review Text */}
            <div className="text-[15px] text-gray-700 leading-relaxed font-normal flex-grow">
              {item.text}
            </div>
          </div>
        </div>
            ))}
      </div>
    </div>

      </div >
    </section >
  );
};

export default Testimonials;
