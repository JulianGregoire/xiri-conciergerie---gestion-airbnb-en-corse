// @ts-nocheck
import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';

const plan = {
  id: "03",
  name: "Pack PERFORMANCE 360",
  price: "15%",
  unit: "COMMISSION SUR REVENUS",
  desc: "Accélérez votre rentabilité sans compromis.",
  tagline: "Excellence marketing et gestion invisible.",
  features: [
    "Inclusion Pack DIGITAL",
    "Marketing ciblé Europe",
    "Yield Management Expert",
    "Contenu visuel haute définition",
    "Audit de performance régulier",
    "Reporting mensuel détaillé"
  ],
  cta: "Viser l'Excellence",
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-14 md:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-10 md:mb-12 space-y-4">
          <span className="text-xiri-gold text-[11px] font-black uppercase tracking-[0.25em] block">Tarification claire</span>
          <h2 className="text-[30px] md:text-[34px] font-serif text-xiri-navy leading-tight tracking-tight">
            Un modèle simple: vous gagnez, nous performons.
          </h2>
          <p className="text-[16px] text-xiri-navy/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Sans frais fixes ni coûts cachés. Une commission unique alignée sur vos revenus.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div
            className="relative flex flex-col md:flex-row p-7 md:p-10 transition-all duration-700 bg-xiri-navy text-white shadow-[0_30px_70px_-20px_rgba(27,43,68,0.55)] z-20 border-[1px] border-xiri-gold/30 max-w-5xl w-full gap-8 md:gap-10"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white border border-xiri-gold px-6 py-2 shadow-xl flex items-center gap-2">
              <ShieldCheck size={14} className="text-xiri-gold animate-pulse" />
              <span className="text-xiri-gold text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
                SÉRÉNITÉ OPTIMISÉE
              </span>
            </div>

            <div className="flex-1 space-y-7">
              <div className="relative">
                <div className="text-[11px] font-black tracking-[0.2em] uppercase mb-6 text-xiri-gold">
                  {plan.name}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-6xl md:text-7xl font-serif leading-none tracking-tighter text-white">
                    {plan.price}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
                    {plan.unit}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[18px] lg:text-[20px] leading-relaxed font-serif text-white italic">
                  "{plan.tagline}"
                </p>
                <p className="text-[15px] leading-relaxed text-white/80 font-medium">
                  {plan.desc}
                </p>
              </div>

              <div className="w-24 h-[1px] bg-xiri-gold"></div>

              <button className="hidden md:block w-full py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-xl border bg-xiri-gold border-xiri-gold text-white hover:bg-white hover:text-xiri-navy hover:border-white">
                {plan.cta}
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 py-2 border-b border-white/5 last:border-0">
                    <div className="mt-1 flex-shrink-0 w-4 h-4 flex items-center justify-center text-xiri-gold">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="text-[12px] uppercase tracking-[0.12em] font-bold text-white/90">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className="md:hidden w-full py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-xl border bg-xiri-gold border-xiri-gold text-white hover:bg-white hover:text-xiri-navy hover:border-white">
                {plan.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
