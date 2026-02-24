// @ts-nocheck
import React from 'react';
import { Search, Camera, Globe, TrendingUp, Key, BarChart3, ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Audit du bien",
    description: "Analyse approfondie de votre propriété et étude de marché locale. Nous vérifions la conformité légale (enregistrement, taxes) pour garantir une activité 100% en règle dès le premier jour.",
    icon: <Search className="w-6 h-6" />,
    reassurance: "Légalité garantie"
  },
  {
    number: "02",
    title: "Shooting & positionnement",
    description: "Shooting photo professionnel HDR et rédaction d'un storytelling captivant. Nous positionnons votre bien sur le segment luxe pour attirer une clientèle exigeante et respectueuse.",
    icon: <Camera className="w-6 h-6" />,
    reassurance: "Image de prestige"
  },
  {
    number: "03",
    title: "Mise en ligne",
    description: "Diffusion stratégique sur notre plateforme de réservation directe et sur les canaux mondiaux (Airbnb, Booking). Nous créons une visibilité maximale pour remplir votre calendrier.",
    icon: <Globe className="w-6 h-6" />,
    reassurance: "Visibilité mondiale"
  },
  {
    number: "04",
    title: "Stratégie pricing",
    description: "Nos algorithmes de prix dynamiques ajustent vos tarifs 24h/7 en fonction de la demande, de la météo et des événements en Corse pour maximiser vos revenus sans aucun effort.",
    icon: <TrendingUp className="w-6 h-6" />,
    reassurance: "Revenus optimisés"
  },
  {
    number: "05",
    title: "Gestion opérationnelle",
    description: "On se charge de tout : sélection des voyageurs, accueil physique, ménage aux standards hôteliers et maintenance technique. Vous ne faites rien, nous opérons sur place.",
    icon: <Key className="w-6 h-6" />,
    reassurance: "Délégation totale"
  },
  {
    number: "06",
    title: "Reporting mensuel",
    description: "Transparence absolue. Chaque mois, vous recevez un rapport détaillé de vos performances. Pas de frais cachés, pas de surprises, juste une gestion saine et sécurisée.",
    icon: <BarChart3 className="w-6 h-6" />,
    reassurance: "Zéro risque"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-40 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none flex items-center justify-center">
        <span className="text-[250px] font-serif font-black uppercase tracking-tighter text-xiri-navy rotate-12">
          PROCESS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-32 space-y-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-[1px] w-8 bg-xiri-gold"></span>
            <span className="text-xiri-gold text-[10px] font-black uppercase tracking-[0.5em]">Le Parcours Propriétaire</span>
            <span className="h-[1px] w-8 bg-xiri-gold"></span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-xiri-navy leading-tight">
            Comment fonctionne <br />la <span className="font-light">Gestion Xiri</span> ?
          </h2>
          <p className="text-[18px] text-[#0a0a0a] max-w-2xl mx-auto font-medium leading-relaxed pt-6">
            "Une méthodologie rigoureuse pour une sérénité totale. On gère tout, vous ne faites rien."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {steps.map((step, idx) => (
            <div key={idx} className="group relative">
              <div className="mb-10 flex items-end justify-between">
                <span className="text-8xl font-serif text-xiri-navy/30 leading-none transition-all duration-500 group-hover:text-xiri-gold group-hover:scale-110">
                  {step.number}
                </span>
                <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-xiri-gold shadow-sm group-hover:bg-xiri-navy group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                  {step.icon}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-serif text-xiri-navy tracking-wide">Étape {idx + 1} : {step.title}</h3>
                </div>
                <p className="text-[15px] text-[#0a0a0a] leading-relaxed font-medium">
                  {step.description}
                </p>
                <div className="flex items-center gap-2 pt-4">
                  <ShieldCheck size={14} className="text-xiri-gold" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-xiri-gold">{step.reassurance}</span>
                </div>
                <div className="h-[2px] w-12 bg-xiri-navy/10 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Cadre avec bords droits (rounded-none) pour une meilleure cohérence de proportion */}
        <div className="mt-40 p-12 lg:p-20 bg-xiri-navy rounded-none text-center space-y-8 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-32 -translate-y-32"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h4 className="text-3xl md:text-5xl font-serif text-white">
              Une transition <span className="text-xiri-gold">en douceur</span> vers la liberté.
            </h4>
            <p className="text-white text-[16px] font-medium leading-relaxed opacity-80">
              En moins de 15 jours, nous transformons votre bien en une source de revenus automatisée.
              Vous gardez le contrôle total sur votre calendrier, nous nous chargeons de l'excellence.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-xiri-navy px-12 py-6 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-xiri-gold hover:text-white transition-all shadow-xl border-none cursor-pointer"
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
