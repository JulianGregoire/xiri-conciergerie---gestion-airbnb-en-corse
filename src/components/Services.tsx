// @ts-nocheck

import React from 'react';
import {
  Globe,
  Users,
  Key,
  Sparkles,
  ShieldCheck,
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
  return (
    <section id="services" className="py-10 md:py-14 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 px-6 lg:px-12">
        <div className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="max-w-3xl">
            <span className="text-xiri-gold text-[11px] font-bold uppercase tracking-[0.25em] mb-3 block">Services opérés de A à Z</span>
            <h2 className="text-[30px] md:text-[34px] font-serif text-xiri-navy leading-[1.2]">
              Une exécution terrain complète, pilotée comme un service pro.
            </h2>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-xiri-navy text-white px-6 py-3 text-[11px] uppercase tracking-[0.2em] font-extrabold hover:bg-xiri-gold transition-all duration-300 border-none cursor-pointer"
          >
            Demander un audit
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {serviceSlides.map((slide, idx) => (
            <div key={idx} className="bg-white border border-xiri-navy/10 p-5 md:p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-xiri-bg flex items-center justify-center text-xiri-gold flex-shrink-0">
                  {slide.icon}
                </div>
                <h3 className="text-[22px] font-serif text-xiri-navy leading-tight">{slide.title}</h3>
              </div>

              <div className="space-y-2 flex-grow">
                {slide.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-xiri-gold flex-shrink-0 mt-0.5" size={14} />
                    <p className="text-[14px] text-xiri-navy/80 font-medium leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <div className="pt-5 mt-auto">
                <button
                  onClick={() => {
                    if (onServiceClick) onServiceClick(slide.title.toLowerCase().replace(/\s+/g, '-'));
                  }}
                  className="bg-xiri-navy text-white px-6 py-3 text-[11px] uppercase tracking-[0.2em] font-extrabold hover:bg-xiri-gold transition-all w-full border-none cursor-pointer"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
