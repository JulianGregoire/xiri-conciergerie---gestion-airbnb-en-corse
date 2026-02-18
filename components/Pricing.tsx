
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
    <section id="pricing" className="py-40 bg-white relative overflow-hidden">
      <div className="absolute inset-0 flex justify-between px-6 lg:px-12 opacity-[0.03] pointer-events-none">
        <div className="w-[1px] h-full bg-xiri-navy"></div>
        <div className="w-[1px] h-full bg-xiri-navy"></div>
        <div className="w-[1px] h-full bg-xiri-navy"></div>
        <div className="w-[1px] h-full bg-xiri-navy"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24 space-y-8">
          <div className="inline-block">
            <span className="text-xiri-gold text-[10px] font-black uppercase tracking-[0.8em] block mb-4">Clarté & Sérénité</span>
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-xiri-gold to-transparent"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-xiri-navy leading-tight tracking-tight">
            Transparence <br /><span className="font-light">Absolue</span>.
          </h2>
          <p className="text-[17px] text-[#000000] max-w-2xl mx-auto font-medium leading-relaxed opacity-70">
            "Une tarification juste, sans frais cachés. Nous ne sommes rémunérés que sur vos succès locatifs."
          </p>
        </div>

        {/* Card Container centered and wider */}
        <div className="flex justify-center items-center">
          <div 
            className="relative flex flex-col md:flex-row p-10 lg:p-20 transition-all duration-700 bg-xiri-navy text-white shadow-[0_60px_120px_-20px_rgba(27,43,68,0.5)] z-20 border-[1px] border-xiri-gold/30 max-w-5xl w-full gap-12 lg:gap-20"
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white border border-xiri-gold px-8 py-3 shadow-2xl flex items-center gap-3">
              <ShieldCheck size={14} className="text-xiri-gold animate-pulse" />
              <span className="text-xiri-gold text-[10px] font-black uppercase tracking-[0.5em] whitespace-nowrap">
                SÉRÉNITÉ OPTIMISÉE
              </span>
            </div>

            {/* Left side: Price and Description */}
            <div className="flex-1 space-y-12">
              <div className="relative">
                <div className="text-[11px] font-black tracking-[0.4em] uppercase mb-12 text-xiri-gold">
                  {plan.name}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-7xl md:text-9xl font-serif leading-none tracking-tighter text-white">
                    {plan.price}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
                    {plan.unit}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-[20px] lg:text-[24px] leading-relaxed font-serif text-white italic">
                  "{plan.tagline}"
                </p>
                <p className="text-[16px] leading-relaxed text-white/80 font-medium">
                  {plan.desc}
                </p>
              </div>

              <div className="w-24 h-[1px] bg-xiri-gold"></div>

              <button className="hidden md:block w-full py-8 text-[11px] font-black uppercase tracking-[0.6em] transition-all duration-500 shadow-xl border bg-xiri-gold border-xiri-gold text-white hover:bg-white hover:text-xiri-navy hover:border-white">
                {plan.cta}
              </button>
            </div>

            {/* Right side: Features */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-6 mb-12">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-4 py-3 border-b border-white/5 last:border-0">
                    <div className="mt-1 flex-shrink-0 w-4 h-4 flex items-center justify-center text-xiri-gold">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="text-[12px] uppercase tracking-[0.2em] font-bold text-white/90">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className="md:hidden w-full py-8 text-[11px] font-black uppercase tracking-[0.6em] transition-all duration-500 shadow-xl border bg-xiri-gold border-xiri-gold text-white hover:bg-white hover:text-xiri-navy hover:border-white">
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
