// @ts-nocheck
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Est-ce légal ?",
    answer: "Oui. Nous gérons toutes les démarches : déclaration en mairie, numéro d'enregistrement, taxe de séjour. Statut LMNP mis en place si souhaité."
  },
  {
    question: "Qui encaisse l'argent ?",
    answer: "Vous. Les paiements arrivent directement sur votre compte (Stripe perso pour les réservations directes, Airbnb pour les plateformes). Xiri prélève sa commission après coup."
  },
  {
    question: "Combien de jours puis-je louer ?",
    answer: "Pour une résidence secondaire, aucune limite. Vous pouvez maximiser toute l'année, haute saison comme basse saison."
  },
  {
    question: "Qui paie en cas de casse ?",
    answer: "Caution sécurisée (Swikly / Stripe) pour chaque séjour. En cas de dégradation, nous gérons le dossier et activons les assurances (AirCover ou privée)."
  },
  {
    question: "Comment sont sélectionnés les voyageurs ?",
    answer: "Vérification d'identité, historique Airbnb, motif du séjour. Aucun profil douteux ne passe. Votre bien mérite mieux."
  },
  {
    question: "Puis-je bloquer des dates ?",
    answer: "Oui. Via votre espace propriétaire, vous bloquez les dates que vous souhaitez en temps réel. Votre bien reste le vôtre."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 md:py-12 lg:py-14 relative overflow-hidden">

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-8 md:mb-10 space-y-3">
          <span className="text-xiri-gold text-[10px] font-black uppercase tracking-[0.25em] block">Sérénité Garantie</span>
          <h2 className="text-[26px] md:text-[30px] font-serif text-xiri-navy leading-tight">
            FAQ
          </h2>
          <p className="text-[15px] text-xiri-navy/80 font-medium mt-1">
            Toutes les réponses en un coup d'œil.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`border border-xiri-navy/5 transition-all duration-500 overflow-hidden rounded-2xl ${openIndex === index ? 'bg-[#F8FAFC] border-xiri-gold/20 shadow-lg' : 'bg-white'
                }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-serif text-xiri-gold opacity-40 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                  <h3 className="text-sm md:text-[15px] font-black uppercase tracking-widest text-xiri-navy">
                    {item.question}
                  </h3>
                </div>
                <div className={`transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-xiri-gold' : 'text-xiri-navy/20'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-6 pt-0 pl-16 pr-8">
                  <p className="text-[14px] text-[#000000] leading-relaxed font-medium border-l-2 border-xiri-gold/30 pl-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-8 bg-xiri-navy text-center space-y-5 relative group overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-xiri-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
          <div className="relative z-10 space-y-6">
            <h4 className="text-[24px] font-serif text-white">Une autre question ?</h4>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-medium">On répond sous 24h.</p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-xiri-gold text-white text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-xiri-navy transition-all shadow-xl rounded-xl"
            >
              Contacter un conseiller
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
