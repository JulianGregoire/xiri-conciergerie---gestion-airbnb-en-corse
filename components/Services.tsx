
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Globe, 
  Users, 
  Key, 
  Sparkles, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

const serviceSlides = [
  {
    icon: <Globe size={20} />,
    title: "Gestion d'annonces",
    points: [
      "Création d'un site internet dédié",
      "Diffusion multi-plateformes",
      "Visibilité maximale garantie"
    ],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Users size={20} />,
    title: "Sélection des voyageurs",
    points: [
      "Analyse rigoureuse des profils",
      "Respect de vos préférences",
      "Locations sereines et sécurisées"
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c29535a7?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Key size={20} />,
    title: "Check-in / Check-out",
    points: [
      "Accueil physique personnalisé",
      "Remise de clés sécurisée",
      "Conciergerie locale dédiée"
    ],
    image: "https://images.unsplash.com/photo-1531234799389-dcb7651eb0a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Sparkles size={20} />,
    title: "Ménage et blanchisserie",
    points: [
      "Ménage professionnel hôtelier",
      "Linge de maison premium",
      "Garantie propreté irréprochable"
    ],
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Assurances & cautions",
    points: [
      "Gestion des formalités légales",
      "Sécurisation des cautions",
      "Assurance Xiri & Co incluse"
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  }
];

const Services: React.FC<{ onServiceClick?: (id: string) => void }> = ({ onServiceClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(2.3);
  const [isPaused, setIsPaused] = useState(false);
  
  // Swipe/Drag states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setItemsToShow(2.5); 
      else if (window.innerWidth >= 1024) setItemsToShow(2.1);
      else if (window.innerWidth >= 768) setItemsToShow(1.5);
      else setItemsToShow(1.25);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = serviceSlides.length;
  const maxIndex = totalSlides - 1;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isPaused || isDragging) return;
    const interval = setInterval(nextSlide, 15000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused, isDragging]);

  // Drag Handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const x = 'touches' in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    setStartX(x);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const x = 'touches' in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    const walk = x - startX;
    setDragOffset(walk);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50; // pixels
    if (dragOffset < -threshold) {
      nextSlide();
    } else if (dragOffset > threshold) {
      prevSlide();
    }
    setDragOffset(0);
  };

  // Calcul du décalage pour centrer l'item actif
  const itemWidthPercent = 100 / itemsToShow;
  const centeringOffset = (100 - itemWidthPercent) / 2;

  return (
    <section id="services" className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="absolute left-[-5%] top-1/4 -rotate-90 hidden lg:block opacity-[0.03] pointer-events-none text-xiri-navy uppercase font-serif font-black tracking-[0.2em] text-[120px]">
        MAÎTRISE LOCALE
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="px-6 lg:px-24 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.6em] mb-6 block">Sérénité & Conformité</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-xiri-navy leading-[1.2]">
              L'art de déléguer&nbsp;<span className="font-light text-xiri-gold">l'exception</span>,<br />
              Pour une liberté&nbsp;<span className="font-light text-xiri-gold">retrouvée</span>.
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-4 bg-xiri-bg text-xiri-navy hover:bg-xiri-navy hover:text-white transition-all rounded-full border-none shadow-sm cursor-pointer"
              aria-label="Précédent"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 bg-xiri-bg text-xiri-navy hover:bg-xiri-navy hover:text-white transition-all rounded-full border-none shadow-sm cursor-pointer"
              aria-label="Suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          className="relative overflow-visible cursor-grab active:cursor-grabbing"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          ref={carouselRef}
        >
          <div className="overflow-visible select-none">
            <div 
              className={`flex transition-transform ${isDragging ? 'duration-0' : 'duration-1000 ease-in-out'}`}
              style={{ 
                transform: `translateX(calc(-${currentIndex * itemWidthPercent}% + ${centeringOffset}% + ${dragOffset}px))` 
              }}
            >
              {serviceSlides.map((slide, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 px-4 transition-all duration-700 opacity-100 scale-100"
                  style={{ width: `${itemWidthPercent}%` }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="bg-xiri-bg/20 border border-xiri-navy/5 p-6 lg:p-10 group h-full flex flex-col rounded-none transition-all duration-500 hover:shadow-2xl hover:bg-white hover:border-xiri-gold/20 pointer-events-none md:pointer-events-auto">
                    <div className="relative aspect-video mb-8 overflow-hidden framed-img shadow-lg rounded-none">
                      <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        draggable="false"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md w-10 h-10 flex items-center justify-center font-serif text-xiri-gold text-sm shadow-md">
                        0{idx + 1}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center text-xiri-gold rounded-none flex-shrink-0 group-hover:bg-xiri-navy group-hover:text-white transition-colors duration-500">
                        {slide.icon}
                      </div>
                      <h3 className="text-xl font-serif text-xiri-navy leading-tight">{slide.title}</h3>
                    </div>

                    <div className="space-y-4 flex-grow">
                      {slide.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="text-xiri-gold flex-shrink-0 mt-0.5" size={14} />
                          <p className="text-[13px] text-xiri-navy font-medium leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 mt-auto">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onServiceClick) onServiceClick(slide.title.toLowerCase().replace(/\s+/g, '-'));
                        }}
                        className="bg-xiri-navy text-white px-8 py-4 text-[9px] uppercase tracking-[0.3em] font-extrabold hover:bg-xiri-gold transition-all shadow-xl w-full border-none cursor-pointer pointer-events-auto"
                      >
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-24 flex justify-center gap-2 mt-12">
          {serviceSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all duration-500 rounded-none ${currentIndex === idx ? 'w-10 bg-xiri-gold' : 'w-4 bg-xiri-navy/10 hover:bg-xiri-navy/30'}`}
              aria-label={`Aller au slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
