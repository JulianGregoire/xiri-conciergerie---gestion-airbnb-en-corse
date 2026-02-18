
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Confier ma villa à Xiri a été ma meilleure décision. Une présence physique sur place et des réservations directes qui explosent.",
    author: "Jean-Pierre C.",
    location: "VILLA À PORTO-VECCHIO",
    avatar: "https://i.pravatar.cc/150?u=jp"
  },
  {
    text: "Enfin une conciergerie sérieuse en Corse. Le ménage est impeccable et le suivi via l'application me rassure énormément car je vis sur le continent.",
    author: "Lætitia S.",
    location: "APPARTEMENT À AJACCIO",
    avatar: "https://i.pravatar.cc/150?u=ls"
  },
  {
    text: "Xiri gère mes 3 bergeries. La rentabilité est exceptionnelle grâce à leur pack Performance et la visibilité internationale qu'ils m'offrent.",
    author: "Dominique M.",
    location: "INVESTISSEUR (BONIFACIO)",
    avatar: "https://i.pravatar.cc/150?u=dm"
  },
  {
    text: "Une équipe qui comprend les enjeux du luxe. Ma propriété de Calvi est gérée avec un soin méticuleux, comme si c'était la leur.",
    author: "Marc-Antoine B.",
    location: "DOMAINE À CALVI",
    avatar: "https://i.pravatar.cc/150?u=mab"
  },
  {
    text: "Le site web dédié créé par Xiri a totalement réduit ma dépendance à Airbnb. 40% de mes réservations sont désormais en direct.",
    author: "Sophie L.",
    location: "VILLA VUE MER (BASTIA)",
    avatar: "https://i.pravatar.cc/150?u=sl"
  },
  {
    text: "Réactivité exemplaire. Même en cas de petit souci technique, Xiri intervient dans l'heure. C'est le service que j'attendais.",
    author: "Pierre-Félix G.",
    location: "APPARTEMENT PREMIUM (PROPRIANO)",
    avatar: "https://i.pravatar.cc/150?u=pfg"
  },
  {
    text: "Une approche moderne de la conciergerie. L'IA de réponse aux voyageurs nous a permis de sécuriser des réservations même en pleine nuit.",
    author: "Marie-Claire D.",
    location: "VILLA PINARELLO",
    avatar: "https://i.pravatar.cc/150?u=mcd"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonials.length - itemsToShow;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section id="testimonials" className="py-40 bg-[#F8F8F8] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[250px] font-serif font-bold text-xiri-navy whitespace-nowrap leading-none uppercase tracking-tighter">
          CONFIANCE • CORSICA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.6em] mb-6 block">Témoignages Insulaires</span>
            <h2 className="text-5xl md:text-7xl font-serif text-xiri-navy leading-tight">
              Ils nous font <span className="">confiance</span> en Corse.
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className="p-5 bg-white shadow-lg text-xiri-navy hover:text-xiri-gold transition-all hover:scale-110 border-none cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="p-5 bg-white shadow-lg text-xiri-navy hover:text-xiri-gold transition-all hover:scale-110 border-none cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {testimonials.map((item, idx) => (
              <div 
                key={idx} 
                className="px-4 flex-shrink-0"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="bg-white p-10 h-full flex flex-col shadow-xl border border-xiri-navy/5 hover:shadow-2xl transition-shadow duration-500">
                  <div className="text-xiri-gold/20 mb-8">
                    <Quote size={32} />
                  </div>

                  <p className="text-[16px] text-[#000000] leading-relaxed mb-12 font-medium flex-grow">
                    "{item.text}"
                  </p>

                  <div className="flex items-center gap-5 pt-8 border-t border-xiri-navy/5">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-xiri-gold/20">
                      <img src={item.avatar} alt={item.author} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-[#000000]">{item.author}</h4>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-xiri-gold font-black">{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-xs mx-auto h-[2px] bg-xiri-navy/5 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-xiri-gold transition-all duration-1000 ease-in-out"
            style={{ 
              width: `${(itemsToShow / testimonials.length) * 100}%`,
              transform: `translateX(${(currentIndex / itemsToShow) * 100}%)`
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
