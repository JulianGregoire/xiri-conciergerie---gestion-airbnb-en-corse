// @ts-nocheck

import React from 'react';
import { UserCheck, ShieldCheck, TrendingUp } from 'lucide-react';

const ValueBar: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-14 relative z-20 border-b border-xiri-navy/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-8 md:mb-10">
          <h2 className="text-[28px] md:text-[34px] font-serif text-xiri-navy leading-tight">
            Pourquoi des propriétaires exigeants choisissent Xiri.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <div className="flex gap-4 border border-xiri-navy/10 bg-xiri-bg/25 p-5">
            <div className="flex-shrink-0 w-11 h-11 bg-white flex items-center justify-center text-xiri-gold shadow-sm">
              <TrendingUp size={20} />
            </div>
            <div className="space-y-1">
              <h3 className="text-[20px] font-serif text-xiri-navy leading-snug">Revenu piloté</h3>
              <p className="text-[14px] text-xiri-navy/80 leading-relaxed font-medium">
                Pricing dynamique, diffusion multi-canaux et optimisation continue.
              </p>
            </div>
          </div>

          <div className="flex gap-4 border border-xiri-navy/10 bg-xiri-bg/25 p-5">
            <div className="flex-shrink-0 w-11 h-11 bg-white flex items-center justify-center text-xiri-gold shadow-sm">
              <UserCheck size={20} />
            </div>
            <div className="space-y-1">
              <h3 className="text-[20px] font-serif text-xiri-navy leading-snug">Délégation totale</h3>
              <p className="text-[14px] text-xiri-navy/80 leading-relaxed font-medium">
                Voyageurs, check-in, ménage, maintenance: un interlocuteur unique.
              </p>
            </div>
          </div>

          <div className="flex gap-4 border border-xiri-navy/10 bg-xiri-bg/25 p-5">
            <div className="flex-shrink-0 w-11 h-11 bg-white flex items-center justify-center text-xiri-gold shadow-sm">
              <ShieldCheck size={20} />
            </div>
            <div className="space-y-1">
              <h3 className="text-[20px] font-serif text-xiri-navy leading-snug">Cadre sécurisé</h3>
              <p className="text-[14px] text-xiri-navy/80 leading-relaxed font-medium">
                Process conformité, cautions et reporting transparent chaque mois.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueBar;
