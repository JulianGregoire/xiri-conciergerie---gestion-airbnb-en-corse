
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Est-ce légal ?",
    answer: "Absolument. La location saisonnière en France, et particulièrement en Corse, est strictement encadrée. Nous vous accompagnons dans toutes les démarches administratives : déclaration en mairie, obtention du numéro d'enregistrement et gestion de la taxe de séjour. Nous privilégions le statut LMNP (Loueur en Meublé Non Professionnel) qui offre des avantages fiscaux majeurs sur l'île."
  },
  {
    question: "Qui encaisse l’argent ?",
    answer: "C'est l'un de nos points forts : vous restez maître de votre trésorerie. Grâce à notre écosystème digital, les fonds des réservations directes sont versés sur votre compte Stripe personnel. Pour les plateformes comme Airbnb, les versements arrivent également sur votre compte. Xiri ne prélève sa commission qu'une fois l'argent en votre possession."
  },
  {
    question: "Combien de jours puis-je louer ?",
    answer: "S'il s'agit de votre résidence secondaire, il n'y a pas de limite de durée (contrairement à la limite de 120 jours pour une résidence principale). Vous avez une liberté totale pour maximiser votre rendement tout au long de l'année, de la haute saison estivale aux mois plus calmes mais très prisés du printemps corse."
  },
  {
    question: "Qui paie en cas de casse ?",
    answer: "La sécurité de votre patrimoine est notre priorité. Nous utilisons un système de caution sécurisée (empreinte bancaire) via Swikly ou Stripe pour chaque voyageur. En cas de dégradation constatée lors du check-out rigoureux, nous gérons intégralement le dossier de réclamation et l'activation des assurances (AirCover ou assurance privée) pour couvrir les frais de remise en état."
  },
  {
    question: "Comment sont sélectionnés les voyageurs ?",
    answer: "Nous ne laissons rien au hasard. Chaque profil est analysé : vérification d'identité, historique des commentaires sur les plateformes et motif du séjour. Nous privilégions une communication directe avant validation pour nous assurer que les voyageurs correspondent au standing de votre propriété et respecteront le voisinage."
  },
  {
    question: "Puis-je bloquer des dates ?",
    answer: "Bien entendu. Votre bien reste avant tout le vôtre. Via notre interface propriétaire, vous pouvez bloquer les dates de votre choix en temps réel pour votre usage personnel, votre famille ou vos amis. Nous recommandons simplement d'anticiper ces blocages avant l'ouverture des réservations pour la haute saison."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-40 bg-white relative overflow-hidden">
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-xiri-navy/5 hidden lg:block"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <span className="text-xiri-gold text-[10px] font-black uppercase tracking-[0.8em] block">Sérénité Garantie</span>
          <h2 className="text-5xl md:text-7xl font-serif text-xiri-navy leading-tight">
            Questions <br /><span className="font-light">Fréquentes</span>.
          </h2>
          <p className="text-[17px] text-[#000000] font-medium mt-8">
            "La clarté est le fondement d'une collaboration durable."
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`border border-xiri-navy/5 transition-all duration-500 overflow-hidden ${
                openIndex === index ? 'bg-[#F8FAFC] border-xiri-gold/20 shadow-lg' : 'bg-white'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-8 text-left group"
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
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-8 pt-0 pl-20 pr-12">
                  <p className="text-[15px] text-[#000000] leading-relaxed font-medium border-l-2 border-xiri-gold/30 pl-8">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-xiri-navy text-center space-y-8 relative group overflow-hidden">
          <div className="absolute inset-0 bg-xiri-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
          <div className="relative z-10 space-y-6">
            <h4 className="text-2xl font-serif text-white">Une question plus spécifique ?</h4>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-medium">Nos experts insulaires sont à votre disposition.</p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-5 bg-xiri-gold text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-xiri-navy transition-all shadow-xl"
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
