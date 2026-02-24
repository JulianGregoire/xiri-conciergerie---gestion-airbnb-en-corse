
// @ts-nocheck
import React from 'react';
import { ExternalLink } from 'lucide-react';
import corseImg from '../image/corse.png';
import finistereImg from '../image/finister.png';
import heraultImg from '../image/herault.png';

const RelatedSites: React.FC = () => {
  const otherSites = [
    {
      title: "Maison d’Hôte en Corse",
      category: "CHARME & AUTHENTICITÉ",
      description: "Une immersion confidentielle dans le maquis. Pierres ancestrales et hospitalité traditionnelle au cœur de l'île.",
      image: corseImg,
      link: "#"
    },
    {
      title: "Mobilhome au Finistère",
      category: "ÉVASION IODÉE",
      description: "Le confort moderne face à la puissance de l'Atlantique. Une escale nature sur les côtes sauvages de Bretagne.",
      image: finistereImg,
      link: "#"
    },
    {
      title: "Maison d’Hôte au Hérault",
      category: "DOUCEUR OCCITANE",
      description: "L'élégance du Sud entre vignes et oliviers. Une parenthèse de sérénité dans l'arrière-pays héraultais.",
      image: heraultImg,
      link: "#"
    }
  ];

  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.01] pointer-events-none w-full text-center">
        <span className="text-[300px] font-serif font-black tracking-tighter text-xiri-navy uppercase">
          L'UNIVERS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-28 space-y-6">
          <span className="text-xiri-gold text-[10px] font-black uppercase tracking-[0.8em] block">Nos Autres Destinations</span>
          <h2 className="text-5xl md:text-7xl font-serif text-xiri-navy leading-tight">
            Explorez notre <br /><span className="font-light">Collection Privée</span>.
          </h2>
          <div className="w-24 h-[1px] bg-xiri-gold mx-auto mt-12"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {otherSites.map((site, idx) => (
            <a
              key={idx}
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block space-y-10"
            >
              <div className="relative aspect-[3/4] overflow-hidden framed-img transition-transform duration-1000 group-hover:-translate-y-4">
                <img
                  src={site.image}
                  alt={site.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-xiri-navy/5 group-hover:bg-transparent transition-colors duration-500"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-black uppercase tracking-widest text-xiri-gold">Accéder au site</span>
                      <ExternalLink size={14} className="text-xiri-navy" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-center md:text-left px-4 md:px-0">
                <span className="text-[9px] font-bold text-xiri-gold uppercase tracking-[0.4em]">
                  {site.category}
                </span>
                <h3 className="text-3xl font-serif text-xiri-navy group-hover:text-xiri-gold transition-colors duration-500">
                  {site.title}
                </h3>
                <p className="text-[14px] text-[#000000] leading-relaxed font-medium max-w-xs mx-auto md:mx-0">
                  "{site.description}"
                </p>

                <div className="pt-6">
                  <div className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-xiri-navy">
                    Découvrir
                    <div className="w-12 h-[1px] bg-xiri-navy/10 group-hover:w-24 group-hover:bg-xiri-gold transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedSites;
