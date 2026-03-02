// @ts-nocheck
import React from 'react';
import { Search, Globe, Key, ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Audit & cadrage",
    description: "Analyse du bien, potentiel locatif, contraintes légales et objectifs de revenu.",
    icon: <Search className="w-6 h-6" />,
    reassurance: "Légalité garantie"
  },
  {
    number: "02",
    title: "Mise en marché",
    description: "Photos, annonce optimisée, diffusion multi-canaux et stratégie de prix dynamique.",
    icon: <Globe className="w-6 h-6" />,
    reassurance: "Visibilité pilotée"
  },
  {
    number: "03",
    title: "Exploitation continue",
    description: "Accueil voyageurs, opérations terrain, maintenance et reporting mensuel transparent.",
    icon: <Key className="w-6 h-6" />,
    reassurance: "Délégation totale"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-10 md:py-14 bg-white relative overflow-hidden border-y border-xiri-navy/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-10 md:mb-12 space-y-4">
          <span className="text-xiri-gold text-[11px] font-black uppercase tracking-[0.25em]">Processus propriétaire</span>
          <h2 className="text-[30px] md:text-[34px] font-serif text-xiri-navy leading-tight">
            De la prise en charge à la performance, en 3 étapes.
          </h2>
          <p className="text-[16px] text-xiri-navy/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Un cadre clair, des responsabilités définies, une exécution mesurable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {steps.map((step, idx) => (
            <div key={idx} className="border border-xiri-navy/10 p-5 md:p-6">
              <div className="mb-5 flex items-end justify-between">
                <span className="text-5xl font-serif text-xiri-navy/25 leading-none">
                  {step.number}
                </span>
                <div className="w-11 h-11 bg-xiri-bg flex items-center justify-center text-xiri-gold shadow-sm">
                  {step.icon}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[22px] font-serif text-xiri-navy tracking-wide">{step.title}</h3>
                <p className="text-[14px] text-xiri-navy/80 leading-relaxed font-medium">
                  {step.description}
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <ShieldCheck size={14} className="text-xiri-gold" />
                  <span className="text-[11px] uppercase tracking-[0.18em] font-black text-xiri-gold">{step.reassurance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-8 md:p-10 bg-xiri-navy text-center space-y-5 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h4 className="text-[26px] md:text-[32px] font-serif text-white">
              Mise en route opérationnelle en moins de 15 jours.
            </h4>
            <p className="text-white text-[15px] font-medium leading-relaxed opacity-85">
              Vous gardez la maîtrise des décisions, nous pilotons l'exécution quotidienne.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-xiri-navy px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-xiri-gold hover:text-white transition-all shadow-xl border-none cursor-pointer"
            >
              Lancer l'Audit de mon bien
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
