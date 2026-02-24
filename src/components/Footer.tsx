// @ts-nocheck
import React from 'react';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateCity: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateHome, onNavigateAbout, onNavigateCity }) => {
  const handleLinkClick = (id: string) => {
    if (id === 'about') {
      onNavigateAbout();
      return;
    }

    if (['porto-vecchio', 'bonifacio', 'ajaccio', 'calvi', 'bastia'].includes(id)) {
      onNavigateCity(id);
      return;
    }

    onNavigateHome();

    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 100);
  };

  return (
    <footer className="bg-xiri-navy py-32 px-6 lg:px-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-xiri-navy via-xiri-gold to-xiri-navy"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">

          <div className="lg:col-span-4 space-y-10">
            <button onClick={() => handleLinkClick('home')} className="flex flex-col text-left bg-transparent border-none p-0 outline-none cursor-pointer group">
              <span className="text-xl font-serif font-medium tracking-[0.1em] text-white group-hover:text-xiri-gold transition-colors">XIRI CONCIERGERIE</span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-xiri-gold">EN CORSE</span>
            </button>
            <p className="text-[13px] text-white/60 leading-loose font-light max-w-xs">
              "Redéfinir l'hospitalité de luxe à travers une gestion immobilière personnalisée et un service de conciergerie irréprochable."
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-xiri-gold transition-colors">
                <span className="text-[11px] font-bold tracking-widest uppercase border-b border-white/10 pb-1">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-xiri-gold transition-colors">
                <span className="text-[11px] font-bold tracking-widest uppercase border-b border-white/10 pb-1">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h5 className="text-[10px] font-bold tracking-[0.3em] text-xiri-gold uppercase">Navigation</h5>
              <ul className="text-[11px] text-white/60 space-y-4 uppercase tracking-[0.2em] font-medium list-none p-0">
                <li>
                  <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer uppercase tracking-[0.2em] text-white/60">
                    Accueil
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer uppercase tracking-[0.2em] text-white/60">
                    Notre Vision
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('pricing')} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer uppercase tracking-[0.2em] text-white/60">
                    Nos Tarifs
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer uppercase tracking-[0.2em] text-white/60">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="text-[10px] font-bold tracking-[0.3em] text-xiri-gold uppercase">Destinations</h5>
              <ul className="text-[11px] text-white/60 space-y-4 uppercase tracking-[0.2em] font-medium list-none p-0">
                <li><button onClick={() => handleLinkClick('porto-vecchio')} className="hover:text-white transition-colors bg-transparent p-0 uppercase tracking-[0.2em] text-white/60">Porto-Vecchio</button></li>
                <li><button onClick={() => handleLinkClick('bonifacio')} className="hover:text-white transition-colors bg-transparent p-0 uppercase tracking-[0.2em] text-white/60">Bonifacio</button></li>
                <li><button onClick={() => handleLinkClick('ajaccio')} className="hover:text-white transition-colors bg-transparent p-0 uppercase tracking-[0.2em] text-white/60">Ajaccio</button></li>
                <li><button onClick={() => handleLinkClick('calvi')} className="hover:text-white transition-colors bg-transparent p-0 uppercase tracking-[0.2em] text-white/60">Calvi</button></li>
                <li><button onClick={() => handleLinkClick('bastia')} className="hover:text-white transition-colors bg-transparent p-0 uppercase tracking-[0.2em] text-white/60">Bastia</button></li>
              </ul>
            </div>
            <div className="space-y-6 col-span-2 md:col-span-1">
              <h5 className="text-[10px] font-bold tracking-[0.3em] text-xiri-gold uppercase">L'Agence</h5>
              <div className="text-[11px] text-white/60 space-y-4 uppercase tracking-[0.2em] font-light leading-relaxed">
                <p>12 Boulevard de l'Empereur,<br />20000 Ajaccio, Corse</p>
                <p>Ouvert du Lundi au Samedi<br />de 09:00 à 19:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/30">
            © {new Date().getFullYear()} XIRI CONCIERGERIE EN CORSE. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex space-x-12">
            <a href="#" className="text-[9px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
