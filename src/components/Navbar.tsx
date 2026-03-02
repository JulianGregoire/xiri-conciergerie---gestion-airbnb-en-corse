// @ts-nocheck

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { View } from '../types';

interface NavbarProps {
  currentView: View;
  onNavigateService: (id: string) => void;
  onNavigateHome: () => void;
  onNavigateBlog: () => void;
  onNavigateAbout: () => void;
  onNavigateCity: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigateService, onNavigateHome, onNavigateBlog, onNavigateAbout, onNavigateCity }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { id: 'services', label: 'Services' },
    { id: 'how-it-works', label: 'Méthode' },
    { id: 'pricing', label: 'Tarifs' },
    { id: 'testimonials', label: 'Avis' },
    { id: 'faq', label: 'FAQ' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    if (id === 'blog') {
      onNavigateBlog();
      setIsMobileMenuOpen(false);
      return;
    }

    if (id === 'about') {
      onNavigateAbout();
      setIsMobileMenuOpen(false);
      return;
    }

    onNavigateHome();
    setIsMobileMenuOpen(false);

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

  const isTransparent = currentView === 'home' && !isScrolled;

  return (
    <>
      <nav className={`w-full fixed top-0 z-50 transition-all duration-500 ${!isTransparent ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <button onClick={() => handleLinkClick('home')} className="flex flex-col items-center group cursor-pointer border-none bg-transparent text-left outline-none">
              <span className={`text-base md:text-lg font-serif font-medium tracking-[0.08em] transition-colors duration-500 ${!isTransparent ? 'text-xiri-navy' : 'text-white'}`}>XIRI CONCIERGERIE</span>
              <span className="text-[9px] uppercase tracking-[0.22em] -mt-0.5 font-bold text-xiri-gold">RÉSEAU PREMIUM</span>
            </button>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-[11px] uppercase tracking-[0.14em] font-bold transition-all hover:text-xiri-gold bg-transparent ${!isTransparent ? 'text-xiri-navy' : 'text-white'}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleLinkClick('contact')}
                className={`px-5 py-3 text-[11px] uppercase tracking-[0.12em] font-bold transition-all border ${!isTransparent ? 'border-xiri-navy text-xiri-navy hover:bg-xiri-navy hover:text-white' : 'border-white text-white hover:bg-white hover:text-xiri-navy'} cursor-pointer rounded-xl`}
              >
                Estimer ma rentabilité
              </button>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`bg-transparent ${!isTransparent ? 'text-xiri-navy' : 'text-white'}`}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        <div className={`lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="h-full flex flex-col p-8">
            <div className="flex justify-between items-center mb-10">
              <div className="flex flex-col">
                <span className="text-lg font-serif font-medium tracking-[0.1em] text-xiri-navy">XIRI CONCIERGERIE</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-xiri-gold">RÉSEAU PREMIUM</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-xiri-navy bg-transparent">
                <X size={32} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto space-y-5 pb-8">
              <button onClick={() => handleLinkClick('home')} className="block text-[22px] font-serif text-xiri-navy bg-transparent border-none p-0 text-left w-full">Accueil</button>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="block text-[22px] font-serif text-xiri-navy bg-transparent border-none p-0 text-left w-full"
                >
                  {link.label}
                </button>
              ))}
              <button onClick={() => handleLinkClick('about')} className="block text-[22px] font-serif text-xiri-navy bg-transparent border-none p-0 text-left w-full">Notre approche</button>
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <button
                onClick={() => handleLinkClick('contact')}
                className="block w-full bg-xiri-navy text-white text-center py-4 text-[11px] uppercase tracking-[0.12em] font-bold shadow-xl border-none rounded-xl"
              >
                ESTIMER MA RENTABILITÉ
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
