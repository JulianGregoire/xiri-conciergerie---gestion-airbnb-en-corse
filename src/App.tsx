
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueBar from './components/ValueBar';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import BlogPage from './components/BlogPage';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import About from './components/About';
import LocalSEOPage from './components/LocalSEOPage';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import ArticleDetail from './components/ArticleDetail';
import type { View } from './types';
import { servicesData } from './data/servicesData';
import { blogData } from './data/blogData';
import { localSeoData } from './data/localSeoData';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);

  const navigateToService = (id: string) => {
    setSelectedServiceId(id);
    setSelectedArticleId(null);
    setSelectedCityId(null);
    setView('service');
    window.scrollTo(0, 0);
  };

  const navigateToArticle = (id: string) => {
    setSelectedArticleId(id);
    setSelectedServiceId(null);
    setSelectedCityId(null);
    setView('article');
    window.scrollTo(0, 0);
  };

  const navigateToCity = (id: string) => {
    setSelectedCityId(id);
    setSelectedArticleId(null);
    setSelectedServiceId(null);
    setView('local-seo');
    window.scrollTo(0, 0);
  };

  const navigateToBlog = () => {
    setView('blog');
    setSelectedArticleId(null);
    setSelectedServiceId(null);
    setSelectedCityId(null);
    window.scrollTo(0, 0);
  };

  const navigateToAbout = () => {
    setView('about');
    setSelectedArticleId(null);
    setSelectedServiceId(null);
    setSelectedCityId(null);
    window.scrollTo(0, 0);
  };

  const navigateHome = () => {
    setView('home');
    setSelectedServiceId(null);
    setSelectedArticleId(null);
    setSelectedCityId(null);
  };

  const navigateToContact = () => {
    if (view !== 'home') {
      navigateHome();
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('contact');
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      }
    }
  };

  const selectedService = selectedServiceId ? servicesData[selectedServiceId] : null;
  const selectedArticle = selectedArticleId ? blogData[selectedArticleId] : null;
  const selectedCity = selectedCityId ? localSeoData[selectedCityId] : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentView={view}
        onNavigateService={navigateToService} 
        onNavigateHome={navigateHome} 
        onNavigateBlog={navigateToBlog}
        onNavigateAbout={navigateToAbout}
        onNavigateCity={navigateToCity}
      />
      
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero />
            <ValueBar />
            <Services onServiceClick={navigateToService} />
            <HowItWorks />
            <Pricing />
            <Testimonials />
            <FAQ />
            <Contact />
            <div className="h-20 lg:hidden" aria-hidden="true"></div>

            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
                }
              }}
              className="fixed bottom-4 left-4 right-4 z-40 lg:hidden bg-xiri-navy text-white py-4 text-[11px] uppercase tracking-[0.14em] font-bold shadow-xl border-none cursor-pointer"
            >
              Estimer ma rentabilité
            </button>
          </>
        )}
        
        {view === 'blog' && (
          <BlogPage onArticleClick={navigateToArticle} />
        )}

        {view === 'about' && (
          <About onNavigateHome={navigateHome} onNavigateContact={navigateToContact} />
        )}

        {view === 'local-seo' && selectedCity && (
          <LocalSEOPage 
            city={selectedCity} 
            onNavigateHome={navigateHome} 
            onNavigateContact={navigateToContact} 
          />
        )}
        
        {view === 'service' && selectedService && (
          <ServiceDetail 
            service={selectedService} 
            onBack={navigateHome} 
          />
        )}

        {view === 'article' && selectedArticle && (
          <ArticleDetail 
            article={selectedArticle} 
            onBack={view === 'blog' ? navigateToBlog : navigateHome} 
          />
        )}
      </main>
      
      <Footer 
        onNavigateHome={navigateHome} 
        onNavigateAbout={navigateToAbout} 
        onNavigateCity={navigateToCity}
      />
    </div>
  );
};

export default App;
