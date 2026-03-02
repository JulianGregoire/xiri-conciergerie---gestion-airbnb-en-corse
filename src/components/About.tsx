// @ts-nocheck
import React, { useEffect } from 'react';
import { ArrowRight, Minus, ShieldCheck } from 'lucide-react';

interface AboutProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

const About: React.FC<AboutProps> = ({ onNavigateHome, onNavigateContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-1000">
      {/* Hero Section Harmonisé avec l'Accueil */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-xiri-navy">
        <img
          src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=2000"
          alt="Corse Nature"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-[slow-zoom_30s_linear_infinite]"
        />
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-xiri-navy/20"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="space-y-8">
            <span className="text-xiri-gold text-[10px] md:text-[11px] uppercase tracking-[0.6em] font-extrabold block mb-4 drop-shadow-md animate-in slide-in-from-bottom-4 duration-700">
              Stratégie • Performance • Gestion
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.2] tracking-tight text-white drop-shadow-2xl animate-in slide-in-from-bottom-8 duration-1000">
              Notre <span className="font-light">approche</span>
            </h1>
            <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed font-semibold max-w-2xl mx-auto editorial-spacing drop-shadow-md animate-in slide-in-from-bottom-12 duration-1000">
              Une méthodologie immobilière premium, construite pour maximiser vos rendements tout en vous garantissant une tranquillité absolue.
            </p>
            <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent mx-auto mt-12 opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-32 lg:py-48 max-w-4xl mx-auto px-6 text-center">
        <p className="text-2xl md:text-3xl font-serif text-[#0a0a0a] leading-relaxed font-medium italic">
          "Xiri n'est pas une simple agence locale. C'est une ingénierie locative qui allie puissance technologique et ancrage physique pour transformer votre bien en un actif ultra-performant."
        </p>
      </section>

      {/* Pourquoi la Corse */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[3/4] overflow-hidden framed-img shadow-2xl">
                <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200" alt="Littoral Corse" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-12">
              <div className="space-y-6">
                <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.6em] block">01. Un maillage territorial maîtrisé</span>
                <h2 className="text-4xl md:text-6xl font-serif text-xiri-navy">Le pouvoir du <span className="">Réseau</span>.</h2>
              </div>
              <div className="space-y-8 text-[17px] text-[#0a0a0a] font-medium leading-loose">
                <p>
                  Nous nous développons de manière chirurgicale, région par région, en y implantant nos propres équipes. Pas de sous-traitance opaque ni de centralisation déconnectée du terrain.
                </p>
                <p>
                  Chaque conciergerie locale opère avec la même rigueur hôtelière et bénéficie de notre support global, garantissant une exécution premium et un entretien méticuleux de votre patrimoine, où qu'il soit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi le Luxe */}
      <section className="py-32 lg:py-56 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-16">
              <div className="space-y-6">
                <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.6em] block">02. Une présence omnicanale</span>
                <h2 className="text-4xl md:text-6xl font-serif text-xiri-navy">La puissance <span className="">Digitale</span>.</h2>
              </div>
              <p className="text-2xl font-serif text-xiri-navy border-l-2 border-xiri-gold pl-12 py-4 font-medium">
                "C'est la donnée qui dicte la performance, et notre réseau qui garantit l'expérience."
              </p>
              <div className="space-y-8 text-[17px] text-[#0a0a0a] font-medium leading-loose max-w-2xl">
                <p>
                  Un bien d'exception mérite une visibilité exceptionnelle. Nous déployons vos annonces simultanément sur Airbnb, Booking.com, Abritel, et notre propre réseau de réservation directe, en synchronisant parfaitement les calendriers.
                </p>
                <p>
                  Nous produisons les contenus (photographie haute définition, copywriting ciblé SEO) pour séduire une clientèle nationale et internationale exigeante, propulsant mécaniquement votre bien au sommet des résultats de recherche.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 pt-24">
              <div className="aspect-square overflow-hidden framed-img shadow-xl rotate-3 hover:rotate-0 transition-transform duration-1000">
                <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200" alt="Luxe Interior" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi le Direct */}
      <section className="py-32 lg:py-56 bg-xiri-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-32"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-16">
            <div className="space-y-6">
              <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.6em] block">03. Yield Management algorithmique</span>
              <h2 className="text-4xl md:text-6xl font-serif">Optimisation des <span className="">Revenus</span>.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-xiri-gold text-[11px] font-black uppercase tracking-widest">Tarification Dynamique</h4>
                <p className="text-white text-[16px] font-medium leading-relaxed">
                  Grâce à l'analyse de millions de données en temps réel, nos algorithmes ajustent les prix de vos nuitées quotidiennement. Nous maximisons le taux d'occupation en basse saison et le prix moyen en haute saison.
                </p>
              </div>
              <div className="space-y-6">
                <h4 className="text-xiri-gold text-[11px] font-black uppercase tracking-widest">Direct et Désintermédié</h4>
                <p className="text-white text-[16px] font-medium leading-relaxed">
                  Au-delà des plateformes classiques, notre force est de bâtir votre propre canal de réservation directe. Moins de commissions concédées aux géants du web équivaut à un niveau de rentabilité significativement supérieur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi la Transparence */}
      <section className="py-32 lg:py-56 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/5] overflow-hidden framed-img">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200" alt="Transparency" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-12">
              <div className="space-y-6">
                <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.6em] block">04. Confiance structurelle</span>
                <h2 className="text-4xl md:text-6xl font-serif text-xiri-navy">Une transparence <span className="">totale</span>.</h2>
              </div>
              <div className="space-y-8 text-[17px] text-[#0a0a0a] font-medium leading-loose">
                <p>
                  Avec Xiri, vous conservez un contrôle total. Les encaissements vous parviennent directement, et nous vous offrons une visibilité exhaustive sur nos actions. Un espace sécurisé vous permet de suivre l'évolution précise de la rentabilité de vos actifs.
                </p>
                <p>
                  De la gestion des litiges et cautions à l'optimisation fiscale de vos meublés de tourisme, nous vous déchargeons entièrement sans jamais vous déposséder de votre autonomie décisionnelle.
                </p>
              </div>
              <div className="pt-12">
                <button
                  onClick={onNavigateContact}
                  className="flex items-center gap-6 group text-xiri-navy text-[11px] font-black uppercase tracking-[0.4em] bg-transparent border-none cursor-pointer"
                >
                  Découvrir la Sérénité Xiri
                  <div className="w-16 h-px bg-xiri-gold group-hover:w-32 transition-all duration-700"></div>
                  <ShieldCheck size={18} className="text-xiri-gold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}} />
    </div>
  );
};

export default About;
