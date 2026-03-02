// @ts-nocheck
import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    id: '01',
    name: 'Pack ESSENTIEL',
    price: '12%',
    unit: 'commission sur revenus',
    description: 'Gestion opérationnelle locale et sérénité quotidienne.',
    features: [
      'Check-in / check-out',
      'Ménage et linge',
      'Support voyageurs',
      'Gestion incidents'
    ],
    recommended: false
  },
  {
    id: '02',
    name: 'Pack PERFORMANCE 360',
    price: '15%',
    unit: 'commission sur revenus',
    description: 'Le meilleur équilibre entre pilotage digital et opération premium.',
    features: [
      'Tout le Pack Essentiel',
      'Yield management avancé',
      'Optimisation multi-canaux',
      'Reporting mensuel détaillé'
    ],
    recommended: true
  },
  {
    id: '03',
    name: 'Pack SIGNATURE',
    price: '18%',
    unit: 'commission sur revenus',
    description: 'Accompagnement stratégique renforcé pour biens à haut potentiel.',
    features: [
      'Tout le Pack Performance',
      'Acquisition réservations directes',
      'Shooting & contenu premium',
      'Comité performance trimestriel'
    ],
    recommended: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-10 md:py-14 bg-white relative overflow-hidden border-y border-xiri-navy/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-10 md:mb-12 space-y-4">
          <span className="text-xiri-gold text-[11px] font-black uppercase tracking-[0.25em] block">Tarification claire</span>
          <h2 className="text-[30px] md:text-[34px] font-serif text-xiri-navy leading-tight tracking-tight">
            Comparez les packs en 30 secondes.
          </h2>
          <p className="text-[16px] text-xiri-navy/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Sans frais fixes ni coûts cachés. La commission est prélevée uniquement sur les revenus générés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-6 border flex flex-col rounded-2xl ${plan.recommended
                ? 'bg-xiri-navy text-white border-xiri-gold/40 shadow-[0_24px_60px_-20px_rgba(27,43,68,0.55)]'
                : 'bg-white text-xiri-navy border-xiri-navy/10'}
              `}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-xiri-gold text-white text-[10px] uppercase tracking-[0.18em] font-bold whitespace-nowrap rounded-full">
                  Recommandé
                </div>
              )}

              <p className={`text-[11px] uppercase tracking-[0.16em] font-black ${plan.recommended ? 'text-xiri-gold' : 'text-xiri-navy/50'}`}>
                {plan.name}
              </p>

              <div className="mt-3 mb-3">
                <p className="text-5xl font-serif leading-none">{plan.price}</p>
                <p className={`text-[11px] uppercase tracking-[0.12em] font-bold ${plan.recommended ? 'text-white/60' : 'text-xiri-navy/45'}`}>
                  {plan.unit}
                </p>
              </div>

              <p className={`text-[14px] leading-relaxed font-medium min-h-[62px] ${plan.recommended ? 'text-white/85' : 'text-xiri-navy/75'}`}>
                {plan.description}
              </p>

              <div className="mt-5 space-y-2.5 flex-grow">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <Check size={15} className={`${plan.recommended ? 'text-xiri-gold' : 'text-xiri-gold'} mt-0.5 flex-shrink-0`} />
                    <p className={`text-[13px] font-medium leading-relaxed ${plan.recommended ? 'text-white/90' : 'text-xiri-navy/80'}`}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`mt-6 py-3 text-[11px] uppercase tracking-[0.14em] font-extrabold border-none cursor-pointer transition-all ${plan.recommended
                  ? 'bg-xiri-gold text-white hover:bg-white hover:text-xiri-navy'
                  : 'bg-xiri-navy text-white hover:bg-xiri-gold'}
                } rounded-xl`}
              >
                Demander un audit
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white border border-xiri-navy/20 text-xiri-navy px-7 py-3 text-[11px] uppercase tracking-[0.14em] font-extrabold hover:bg-xiri-navy hover:text-white transition-all cursor-pointer rounded-xl"
          >
            Comparer avec mon bien
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
