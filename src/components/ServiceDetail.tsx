// @ts-nocheck

import React, { useEffect } from 'react';
import { ArrowLeft, Minus } from 'lucide-react';
import type { ServiceData } from '../types';

interface ServiceDetailProps {
  service: ServiceData;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="fixed top-24 left-6 lg:left-12 z-50">
        <button
          onClick={onBack}
          className="group flex items-center gap-4 text-[9px] uppercase tracking-[0.4em] font-bold text-xiri-navy bg-white/80 backdrop-blur-md px-6 py-4 shadow-sm border border-xiri-navy/5 hover:bg-xiri-navy hover:text-white transition-all"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Retour
        </button>
      </div>

      <section className="relative min-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-[60vh] lg:h-screen sticky top-0 overflow-hidden">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover animate-[slow-zoom_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-xiri-navy/10"></div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-white">
          <div className="max-w-xl space-y-12">
            <div className="space-y-4">
              <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.8em] block">Expertise Xiri & Co</span>
              <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] text-xiri-navy">
                {service.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? 'font-light' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
            </div>

            <p className="text-xl md:text-2xl font-serif text-[#000000] leading-relaxed border-l-2 border-xiri-gold pl-8 font-medium">
              "L'excellence n'est pas un acte, c'est une habitude que nous cultivons sur chaque hectare de l'Île de Beauté."
            </p>

            <div className="pt-12">
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] font-black text-[#000000]">
                <div className="w-12 h-[1px] bg-xiri-gold"></div>
                Scroll pour explorer
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 lg:py-56 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

            <div className="lg:col-span-8 space-y-16">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif text-xiri-navy leading-tight max-w-lg">
                  Une vision <span className="">holistique</span> de la conciergerie.
                </h2>
                <div className="relative">
                  <p className="text-lg md:text-xl text-[#000000] leading-loose font-medium indent-12 first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:text-xiri-gold first-letter:mt-2">
                    {service.fullContent}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pt-16 border-t border-xiri-navy/5">
                {service.expertisePoints.map((point, idx) => (
                  <div key={idx} className="group space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-serif text-xiri-gold">0{idx + 1}</span>
                      <Minus className="text-xiri-navy/20 w-8" />
                    </div>
                    <h4 className="text-[12px] uppercase tracking-[0.3em] font-black text-[#000000] group-hover:text-xiri-gold transition-colors">
                      {point}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 lg:pt-32">
              <div className="sticky top-40 space-y-16">
                <div className="aspect-[3/4] overflow-hidden framed-img shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-1000">
                  <img
                    src={service.gallery[0]}
                    alt="Atmosphere"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-8">
                  <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-xiri-gold">La Méthode Xiri</h3>
                  <p className="text-[15px] text-[#000000] leading-relaxed font-medium">
                    "Nous ne gérons pas seulement des propriétés ; nous protégeons l'héritage de nos clients tout en offrant une immersion authentique aux voyageurs."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32 lg:pb-56">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-24">
            <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.6em] mb-4 block">Portfolio d'Ambience</span>
            <h2 className="text-4xl font-serif text-xiri-navy">L'Art de <span className="">vivre</span> en images.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-12 lg:space-y-24">
              <div className="aspect-[4/5] overflow-hidden framed-img -rotate-1 hover:rotate-0 transition-all duration-1000">
                <img src={service.gallery[1]} className="w-full h-full object-cover" alt="Detail view" />
              </div>
              <div className="max-w-xs ml-auto">
                <p className="text-[13px] text-[#000000] uppercase tracking-[0.2em] font-bold leading-loose">
                  Chaque détail est soigneusement orchestré pour refléter le caractère unique de votre patrimoine insulaire.
                </p>
              </div>
            </div>

            <div className="space-y-12 lg:space-y-24 lg:pt-48">
              <div className="aspect-square overflow-hidden framed-img rotate-1 hover:rotate-0 transition-all duration-1000">
                <img src={service.gallery[2]} className="w-full h-full object-cover" alt="Context view" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[60vh] relative flex items-center justify-center bg-xiri-navy overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200"
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-110"
          alt="Sea mood"
        />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h3 className="text-3xl md:text-5xl font-serif text-white leading-relaxed">
            "Rien n'est laissé au hasard, car en Corse, chaque détail raconte un secret."
          </h3>
        </div>
      </section>

      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.6em] block">Étude de Projet</span>
          <h2 className="text-5xl md:text-7xl font-serif text-xiri-navy leading-tight">
            Faites le premier pas vers une <span className="font-light text-xiri-gold">gestion sereine</span>.
          </h2>
          <p className="text-[17px] text-[#000000] leading-loose font-medium max-w-xl mx-auto">
            Contactez nos experts pour obtenir une simulation de rentabilité et un plan de gestion personnalisé pour votre bien.
          </p>

          <div className="pt-12">
            <button
              onClick={(e) => { e.preventDefault(); onBack(); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
              className="inline-block bg-xiri-navy text-white px-16 py-7 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-black transition-all shadow-2xl hover:-translate-y-1"
            >
              Inscrire mon bien
            </button>
          </div>
        </div>
      </section>

      <div className="py-12 border-t border-xiri-navy/5 text-center">
        <span className="text-[9px] uppercase tracking-[1em] text-xiri-navy/20">XIRI CONCIERGE • EDITION MMXXIV</span>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}} />
    </div>
  );
};

export default ServiceDetail;
