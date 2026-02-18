
import React, { useEffect, useState } from 'react';
import { ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { ArticleData } from '../types';

interface ArticleDetailProps {
  article: ArticleData;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-1000">
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-xiri-navy/5">
        <div 
          className="h-full bg-xiri-gold transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="fixed top-24 left-6 lg:left-12 z-50">
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 text-[9px] uppercase tracking-[0.4em] font-bold text-xiri-navy bg-white/80 backdrop-blur-md px-6 py-4 shadow-sm border border-xiri-navy/5 hover:bg-xiri-navy hover:text-white transition-all"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Retour
        </button>
      </div>

      <header className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <img 
          src={article.image} 
          className="absolute inset-0 w-full h-full object-cover animate-[slow-zoom_30s_linear_infinite]"
          alt={article.title}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <div className="space-y-6">
            <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.8em] block drop-shadow-lg">
              Le Blog Xiri • {article.category}
            </span>
            <h1 className="text-5xl md:text-8xl font-serif leading-tight drop-shadow-2xl">
              {article.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-[10px] uppercase tracking-[0.3em] font-black text-white">
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-xiri-gold" />
                {article.readTime} Lecture
              </span>
              <span className="w-1 h-1 bg-xiri-gold rounded-full"></span>
              <span>{article.date}</span>
            </div>
          </div>
        </div>
      </header>

      <article className="py-32 lg:py-48 max-w-4xl mx-auto px-6">
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row gap-12 items-start border-b border-xiri-navy/5 pb-16">
            <div className="md:w-1/3">
              <div className="sticky top-40 space-y-6">
                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-[#000000]">Écrit par</p>
                <div className="space-y-2">
                  <p className="text-lg font-serif text-xiri-navy">{article.author}</p>
                  <p className="text-[10px] uppercase tracking-widest text-xiri-gold font-black">Expertise Corse</p>
                </div>
                
                <div className="pt-8 flex gap-4 text-xiri-navy/20">
                  <Facebook size={18} className="hover:text-xiri-navy cursor-pointer transition-colors" />
                  <Twitter size={18} className="hover:text-xiri-navy cursor-pointer transition-colors" />
                  <Linkedin size={18} className="hover:text-xiri-navy cursor-pointer transition-colors" />
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="text-2xl md:text-3xl font-serif text-[#000000] leading-relaxed mb-12 font-semibold">
                "{article.excerpt}"
              </p>
              
              <div className="space-y-8 text-lg md:text-xl text-[#000000] leading-loose font-medium">
                {article.content.map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? "first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:text-xiri-gold first-letter:mt-2" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-xiri-navy p-12 lg:p-20 text-center space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-32 -translate-y-32 group-hover:scale-110 transition-transform duration-1000"></div>
            <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.6em] relative z-10">Aller plus loin</span>
            <h3 className="text-3xl md:text-5xl font-serif text-white relative z-10">
              Prêt à optimiser la <span className="">gestion</span> de votre bien ?
            </h3>
            <button 
              onClick={(e) => { e.preventDefault(); onBack(); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
              className="relative z-10 bg-white text-xiri-navy px-12 py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-xiri-gold hover:text-white transition-all shadow-xl"
            >
              Consultation Gratuite
            </button>
          </div>
        </div>
      </article>

      <footer className="py-24 border-t border-xiri-navy/5 text-center">
        <button 
          onClick={onBack}
          className="text-[10px] uppercase tracking-[0.5em] font-black text-[#000000] hover:text-xiri-gold transition-colors"
        >
          Retour
        </button>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.2); }
        }
      `}} />
    </div>
  );
};

export default ArticleDetail;
