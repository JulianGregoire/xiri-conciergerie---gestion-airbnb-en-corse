// @ts-nocheck
import React, { useEffect } from 'react';
import { ShieldCheck, MapPin, CheckCircle, ArrowRight, Star } from 'lucide-react';
import type { LocalCityData } from '../types';

interface LocalSEOPageProps {
  city: LocalCityData;
  onNavigateContact: () => void;
  onNavigateHome: () => void;
}

const LocalSEOPage: React.FC<LocalSEOPageProps> = ({ city, onNavigateContact, onNavigateHome }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = city.metaTitle;
  }, [city]);

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-1000">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-xiri-navy">
        <img
          src={city.heroImg}
          alt={city.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 animate-[slow-zoom_30s_linear_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-xiri-navy/20 to-xiri-navy/80"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <MapPin size={16} className="text-xiri-gold" />
            <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[1em] block">Corse • {city.name}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
            Conciergerie <br /><span className="font-light">{city.name}</span>.
          </h1>
          <p className="text-white text-lg md:text-xl font-black tracking-widest uppercase mb-12">
            Gestion Immobilière • Haute Couture • Performance
          </p>
          <div className="w-px h-24 bg-gradient-to-b from-xiri-gold to-transparent mx-auto"></div>
        </div>
      </section>

      <div className="bg-xiri-gold py-6 text-white overflow-hidden whitespace-nowrap">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-20">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.4em]">
              <span>Excellence</span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Sérénité</span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Maîtrise</span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Confidentialité</span>
            </div>
          ))}
        </div>
      </div>

      <section className="py-32 lg:py-48 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif text-xiri-navy leading-tight">
              L'excellence immobilière à <span className="">{city.name}</span>.
            </h2>
            <div className="w-20 h-1 bg-xiri-gold"></div>
          </div>
          <div className="space-y-8">
            <p className="text-xl text-[#000000] leading-relaxed font-semibold">
              "{city.intro}"
            </p>
            <p className="text-[16px] text-[#000000] leading-loose font-medium">
              Déléguer la gestion de votre propriété à {city.name} s'inscrit dans une démarche de valorisation pérenne. Xiri & Co assure une présence physique et une expertise hôtelière de pointe pour une rentabilité optimale.
            </p>
            <button
              onClick={onNavigateContact}
              className="flex items-center gap-4 text-xiri-navy text-[11px] font-black uppercase tracking-[0.3em] group"
            >
              Expertise de mon bien à {city.name}
              <ArrowRight size={16} className="text-xiri-gold group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-8">
              <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.6em] block">Savoir-faire Local</span>
              <h3 className="text-4xl font-serif text-xiri-navy">Présence de terrain à <br />{city.name}.</h3>
              <p className="text-[15px] text-[#000000] font-medium leading-relaxed">
                {city.localExpertise}
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 border border-xiri-navy/5 shadow-xl space-y-6">
                <ShieldCheck size={32} className="text-xiri-gold" />
                <h4 className="text-lg font-serif text-xiri-navy">Conformité Administrative</h4>
                <p className="text-[14px] text-[#000000] leading-relaxed font-medium">
                  Nous supervisons l'ensemble des formalités à {city.name} : enregistrement mairie, collecte des taxes et normes de sécurité, garantissant une activité rigoureuse.
                </p>
              </div>
              <div className="bg-white p-10 border border-xiri-navy/5 shadow-xl space-y-6">
                <Star size={32} className="text-xiri-gold" />
                <h4 className="text-lg font-serif text-xiri-navy">Relais Opérationnel</h4>
                <p className="text-[14px] text-[#000000] leading-relaxed font-medium">
                  Nous appliquons les codes de l'hôtellerie de luxe pour satisfaire la clientèle exigeante de {city.name}. Une délégation fluide et une exécution irréprochable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.6em] block mb-4">Secteurs d'Intervention</span>
            <h2 className="text-4xl md:text-6xl font-serif text-xiri-navy">Où <span className="">l'Exception</span> réside.</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {city.neighborhoods.map((n, i) => (
              <div key={i} className="px-10 py-6 border border-xiri-navy/10 rounded-full flex items-center gap-4 group hover:border-xiri-gold transition-colors">
                <div className="w-2 h-2 bg-xiri-gold rounded-full opacity-40 group-hover:opacity-100"></div>
                <span className="text-[11px] font-black uppercase tracking-widest text-[#000000]">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 lg:py-56 bg-xiri-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <span className="text-[300px] font-serif font-black uppercase tracking-tighter select-none">{city.name}</span>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">
            Votre patrimoine à {city.name} entre <span className="text-xiri-gold">mains expertes</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
            <div className="space-y-4">
              <CheckCircle size={24} className="text-xiri-gold mx-auto" />
              <p className="text-[11px] uppercase tracking-widest font-black">Accompagnement d'exception</p>
            </div>
            <div className="space-y-4">
              <CheckCircle size={24} className="text-xiri-gold mx-auto" />
              <p className="text-[11px] uppercase tracking-widest font-black">Liberté absolue</p>
            </div>
            <div className="space-y-4">
              <CheckCircle size={24} className="text-xiri-gold mx-auto" />
              <p className="text-[11px] uppercase tracking-widest font-black">Sécurité maximale</p>
            </div>
          </div>
          <div className="pt-12">
            <button
              onClick={onNavigateContact}
              className="bg-white text-xiri-navy px-16 py-7 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-xiri-gold hover:text-white transition-all shadow-2xl"
            >
              Valoriser mon bien à {city.name}
            </button>
          </div>
        </div>
      </section>

      <div className="py-24 text-center">
        <button
          onClick={onNavigateHome}
          className="text-[#000000] text-[9px] uppercase tracking-[0.5em] hover:text-xiri-gold transition-colors font-black"
        >
          Retour à l'accueil global
        </button>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default LocalSEOPage;
