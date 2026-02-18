
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, MapPin } from 'lucide-react';
import { View } from '../types';

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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const citiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (citiesRef.current && !citiesRef.current.contains(event.target as Node)) {
        setIsCitiesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services = [
    { name: "Gestion d'annonces Airbnb", id: "gestion-airbnb" },
    { name: "Sélection des voyageurs", id: "selection-voyageurs" },
    { name: "Check-in / Check-out", id: "check-in-out" },
    { name: "Le ménage et le linge", id: "menage-linge" },
    { name: "Assurances & cautions", id: "assurances-cautions" },
    { name: "Maintenance & assistance", id: "maintenance-assistance" }
  ];

  const cities = [
    { name: "Porto-Vecchio", id: "porto-vecchio" },
    { name: "Bonifacio", id: "bonifacio" },
    { name: "Ajaccio", id: "ajaccio" },
    { name: "Calvi", id: "calvi" },
    { name: "Bastia", id: "bastia" }
  ];

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
    setIsServicesOpen(false);
    setIsCitiesOpen(false);
    
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

  const handleServiceClick = (id: string) => {
    onNavigateService(id);
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleCityClick = (id: string) => {
    onNavigateCity(id);
    setIsCitiesOpen(false);
    setIsMobileMenuOpen(false);
  };

  const isTransparent = currentView === 'home' && !isScrolled;

  return (
    <>
      <nav className={`w-full z-50 transition-all duration-700 ${!isTransparent ? 'fixed top-0 bg-white shadow-xl py-4' : 'absolute top-0 bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <button onClick={() => handleLinkClick('home')} className="flex flex-col items-center group cursor-pointer border-none bg-transparent text-left outline-none">
              <span className={`text-base md:text-lg font-serif font-medium tracking-[0.1em] transition-colors duration-500 ${!isTransparent ? 'text-xiri-navy' : 'text-white'}`}>XIRI CONCIERGERIE</span>
              <span className={`text-[8px] md:text-[9px] uppercase tracking-[0.5em] -mt-0.5 font-bold transition-colors duration-500 ${!isTransparent ? 'text-xiri-gold' : 'text-xiri-gold'}`}>EN CORSE</span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8 items-center">
              <button onClick={() => handleLinkClick('home')} className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-xiri-gold bg-transparent ${!isTransparent ? 'text-xiri-navy' : 'text-white'}`}>
                Accueil
              </button>
              
              <div className="relative" ref={dropdownRef}>
                <button 
                  onMouseEnter={() => { setIsServicesOpen(true); setIsCitiesOpen(false); }}
                  className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-xiri-gold bg-transparent ${!isTransparent ? 'text-xiri-navy' : 'text-white'}`}
                >
                  Services
                  <ChevronDown size={12} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <div 
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white shadow-2xl border border-xiri-navy/5 p-6 space-y-4 transition-all duration-500 origin-top ${isServicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                >
                  <div className="grid grid-cols-1 gap-4">
                    {services.map((service, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => handleServiceClick(service.id)}
                        className="group block border-b border-xiri-navy/5 pb-2 last:border-0 w-full text-left bg-transparent"
                      >
                        <p className="text-[10px] text-xiri-navy font-bold uppercase tracking-widest group-hover:text-xiri-gold transition-colors">{service.name}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative" ref={citiesRef}>
                <button 
                  onMouseEnter={() => { setIsCitiesOpen(true); setIsServicesOpen(false); }}
                  className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-xiri-gold bg-transparent ${!isTransparent ? 'text-xiri-navy' : 'text-white'}`}
                >
                  Destinations
                  <ChevronDown size={12} className={`transition-transform duration-300 ${isCitiesOpen ? 'rotate-180' : ''}`} />
                </button>

                <div 
                  onMouseLeave={() => setIsCitiesOpen(false)}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white shadow-2xl border border-xiri-navy/5 p-6 space-y-4 transition-all duration-500 origin-top ${isCitiesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                >
                  <div className="grid grid-cols-1 gap-4">
                    {cities.map((city, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => handleCityClick(city.id)}
                        className="group flex items-center gap-3 border-b border-xiri-navy/5 pb-2 last:border-0 w-full text-left bg-transparent"
                      >
                        <MapPin size={12} className="text-xiri-gold" />
                        <p className="text-[10px] text-xiri-navy font-bold uppercase tracking-widest group-hover:text-xiri-gold transition-colors">{city.name}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button onClick={() => handleLinkClick('about')} className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-xiri-gold bg-transparent ${!isTransparent ? 'text-xiri-navy' : 'text-white'}`}>
                Vision
              </button>
              <button onClick={() => handleLinkClick('blog')} className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-xiri-gold bg-transparent ${!isTransparent ? 'text-xiri-navy' : 'text-white'}`}>
                Blog
              </button>
              
              <button 
                onClick={() => handleLinkClick('contact')}
                className={`px-6 py-3 text-[10px] uppercase tracking-[0.3em] font-bold transition-all shadow-lg ${
                  !isTransparent 
                  ? 'bg-xiri-navy text-white hover:bg-black' 
                  : 'bg-white text-xiri-navy hover:bg-xiri-gold hover:text-white'
                }`}
              >
                ESTIMER MON BIEN
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`bg-transparent ${!isTransparent ? 'text-xiri-navy' : 'text-white'}`}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="h-full flex flex-col p-10">
            <div className="flex justify-between items-center mb-16">
              <div className="flex flex-col">
                <span className="text-lg font-serif font-medium tracking-[0.1em] text-xiri-navy">XIRI CONCIERGERIE</span>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-xiri-gold">EN CORSE</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-xiri-navy bg-transparent">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto space-y-8 pb-10">
              <button onClick={() => handleLinkClick('home')} className="block text-xl font-serif text-xiri-navy tracking-widest bg-transparent border-none p-0 text-left w-full">Accueil</button>
              
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-xiri-gold">Destinations</p>
                <div className="pl-4 space-y-4 border-l border-xiri-gold/20">
                  {cities.map((city, idx) => (
                    <button key={idx} onClick={() => handleCityClick(city.id)} className="block text-sm font-medium text-xiri-navy/80 bg-transparent border-none p-0 text-left">{city.name}</button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-xiri-gold">Services</p>
                <div className="pl-4 space-y-4 border-l border-xiri-gold/20">
                  {services.map((service, idx) => (
                    <button key={idx} onClick={() => handleServiceClick(service.id)} className="block text-sm font-medium text-xiri-navy/80 bg-transparent border-none p-0 text-left">{service.name}</button>
                  ))}
                </div>
              </div>

              <button onClick={() => handleLinkClick('about')} className="block text-xl font-serif text-xiri-navy tracking-widest bg-transparent w-full text-left">Vision</button>
              <button onClick={() => handleLinkClick('blog')} className="block text-xl font-serif text-xiri-navy tracking-widest bg-transparent w-full text-left">Blog</button>
            </div>

            <div className="mt-auto">
              <button 
                onClick={() => handleLinkClick('contact')}
                className="block w-full bg-xiri-navy text-white text-center py-6 text-[11px] uppercase tracking-[0.4em] font-bold shadow-xl border-none"
              >
                ESTIMER MON BIEN
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
