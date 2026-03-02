// @ts-nocheck

import React from 'react';
import { UserCheck, ShieldCheck } from 'lucide-react';

const ValueBar: React.FC = () => {
  return (
    <section className="bg-white py-24 md:py-32 relative z-20 border-b border-xiri-navy/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

          <div className="flex gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 bg-xiri-bg flex items-center justify-center text-xiri-gold group-hover:bg-xiri-navy group-hover:text-white transition-all duration-500 rounded-2xl shadow-sm">
              <UserCheck size={28} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-xiri-navy tracking-normal leading-snug">
                Une stratégie <br /><span className="font-light">digitale de pointe</span>
              </h3>
              <p className="text-[15px] text-[#0a0a0a] leading-relaxed font-medium">
                Nous optimisons vos annonces via des algorithmes de tarification dynamique et une diffusion multi-plateforme. Notre objectif premier : maximiser vos revenus locatifs.
              </p>
            </div>
          </div>

          <div className="flex gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 bg-xiri-bg flex items-center justify-center text-xiri-gold group-hover:bg-xiri-navy group-hover:text-white transition-all duration-500 rounded-2xl shadow-sm">
              <ShieldCheck size={28} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-xiri-navy tracking-normal leading-snug">
                Un ancrage <br /><span className="font-light">régional d'excellence</span>
              </h3>
              <p className="text-[15px] text-[#0a0a0a] leading-relaxed font-medium">
                Forts d'un réseau maîtrisé, nous déployons une exigence hôtelière haut de gamme grâce à des équipes locales expertes, garantissant un entretien rigoureux et une sérénité absolue.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueBar;
