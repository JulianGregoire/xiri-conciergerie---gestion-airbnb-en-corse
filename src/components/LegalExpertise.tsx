// @ts-nocheck
import React from 'react';
import { ShieldCheck, Scale, Landmark, FileText, CheckCircle } from 'lucide-react';

const LegalExpertise: React.FC = () => {
  const points = [
    {
      icon: <Landmark className="w-8 h-8 text-xiri-gold" />,
      title: "LMNP Corse",
      desc: "Optimisation fiscale via le régime réel. Amortissez votre bien et déduisez 100% de nos frais de gestion. Revenus nets défiscalisés.",
      tag: "Fiscalité"
    },
    {
      icon: <Scale className="w-8 h-8 text-xiri-gold" />,
      title: "100% Légal & Déclaré",
      desc: "On gère les déclarations en mairie et l'obtention des numéros d'enregistrement. Vous êtes protégé contre tout risque administratif.",
      tag: "Réglementation"
    },
    {
      icon: <FileText className="w-8 h-8 text-xiri-gold" />,
      title: "Taxe de Séjour",
      desc: "Collecte, calcul et reversement automatique aux municipalités corses. Zéro erreur, zéro oubli, Xiri automatise tout l'administratif.",
      tag: "Administration"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-xiri-gold" />,
      title: "Protection Juridique",
      desc: "Gestion des cautions et intermédiation en cas de litige. Nous sécurisons chaque séjour pour que vous ne preniez aucun risque.",
      tag: "Sécurité"
    }
  ];

  return (
    <section id="legal-expertise" className="py-40 bg-xiri-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.8em] block">Cadre Légal Corse</span>
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                L'Art de gérer <br /><span className="font-light">en toute règle</span>.
              </h2>
            </div>

            <p className="text-white text-lg font-medium leading-loose max-w-md">
              "On gère tout, c’est légal, vous ne prenez aucun risque. Nous avons fait de la conformité juridique notre priorité absolue pour garantir votre sérénité."
            </p>

            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4 text-white">
                <CheckCircle size={18} className="text-xiri-gold" />
                <span className="text-[11px] uppercase tracking-widest font-black">Mise en conformité Ajaccio & Bonifacio</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <CheckCircle size={18} className="text-xiri-gold" />
                <span className="text-[11px] uppercase tracking-widest font-black">Gestion des résidences secondaires</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <CheckCircle size={18} className="text-xiri-gold" />
                <span className="text-[11px] uppercase tracking-widest font-black">Accompagnement expert LMNP</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {points.map((point, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md p-10 border border-white/10 hover:border-xiri-gold transition-all duration-700 group">
                  <div className="mb-8 p-4 bg-white/5 inline-block group-hover:bg-xiri-gold transition-colors duration-500">
                    {React.cloneElement(point.icon as React.ReactElement, { className: "group-hover:text-white transition-colors" })}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-xiri-gold block mb-4">{point.tag}</span>
                  <h3 className="text-xl font-serif text-white mb-4">{point.title}</h3>
                  <p className="text-[14px] text-white/90 leading-relaxed font-medium">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LegalExpertise;
