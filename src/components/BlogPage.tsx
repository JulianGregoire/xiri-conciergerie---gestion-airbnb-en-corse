
import React, { useState, useEffect } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { blogData } from '../data/blogData';

interface BlogPageProps {
  onArticleClick: (id: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onArticleClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('TOUS');

  const parseDate = (dateStr: string) => {
    const months: Record<string, number> = {
      'JANVIER': 0, 'FÉVRIER': 1, 'MARS': 2, 'AVRIL': 3, 'MAI': 4, 'JUIN': 5,
      'JUILLET': 6, 'AOÛT': 7, 'SEPTEMBRE': 8, 'OCTOBRE': 9, 'NOVEMBRE': 10, 'DÉCEMBRE': 11
    };
    const [day, month, year] = dateStr.split(' ');
    return new Date(parseInt(year), months[month.toUpperCase()], parseInt(day));
  };

  const articles = Object.values(blogData).sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
  const categories = ['TOUS', ...Array.from(new Set(articles.map(a => a.category.toUpperCase())))];

  const filteredArticles = selectedCategory === 'TOUS'
    ? articles
    : articles.filter(a => a.category.toUpperCase() === selectedCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-32 space-y-8">
          <div className="inline-block">
            <span className="text-xiri-gold text-[10px] font-black uppercase tracking-[0.8em] block mb-4">Blog Xiri Conciergerie</span>
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-xiri-gold to-transparent"></div>
          </div>
          <h1 className="text-6xl md:text-9xl font-serif text-xiri-navy leading-none tracking-tighter">
            Le Journal de <br /><span className="font-light">l'Exception</span>.
          </h1>
          <p className="text-xl text-xiri-navy/50 max-w-2xl mx-auto font-light leading-relaxed">
            Conseils d'experts, analyses immobilières et art de vivre au cœur de la Corse.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-24 border-b border-xiri-navy/5 pb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 text-[9px] font-bold tracking-[0.3em] uppercase transition-all border ${selectedCategory === cat
                    ? 'bg-xiri-navy text-white border-xiri-navy'
                    : 'bg-transparent text-xiri-navy/40 border-transparent hover:border-xiri-gold hover:text-xiri-gold'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative group w-full md:w-auto">
            <input
              type="text"
              placeholder="RECHERCHER..."
              className="bg-transparent border-b border-xiri-navy/10 py-3 pl-2 pr-10 text-[10px] tracking-[0.2em] uppercase font-bold focus:border-xiri-gold outline-none w-full md:w-64 transition-all"
            />
            <Search size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-xiri-navy/20 group-focus-within:text-xiri-gold" />
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-x-12 lg:gap-y-24">
          {filteredArticles.map((article, idx) => (
            <article
              key={idx}
              className="group flex flex-col h-full cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
              onClick={() => onArticleClick(article.id)}
            >
              <div className="relative h-[400px] mb-10 overflow-hidden framed-img transition-transform duration-1000 group-hover:-translate-y-3">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-xiri-navy/5 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-8 left-8 bg-white px-5 py-3 text-[10px] font-bold tracking-[0.4em] text-xiri-navy shadow-2xl">
                  {article.category}
                </div>
              </div>

              <div className="flex items-center gap-5 text-[10px] uppercase tracking-[0.3em] font-bold text-xiri-gold mb-8">
                <span>{article.date}</span>
                <span className="w-1.5 h-1.5 bg-xiri-navy/10 rounded-full"></span>
                <span className="text-xiri-navy/30">{article.readTime}</span>
              </div>

              <h3 className="text-3xl font-serif text-xiri-navy mb-8 leading-[1.2] group-hover:text-xiri-gold transition-colors duration-500">
                {article.title}
              </h3>

              <p className="text-[15px] text-xiri-navy/60 leading-relaxed font-light mb-10 flex-grow">
                "{article.excerpt}"
              </p>

              <div className="pt-10 mt-auto border-t border-xiri-navy/5">
                <div className="flex items-center justify-between group-hover:pr-4 transition-all duration-500">
                  <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] font-bold text-xiri-navy group-hover:gap-8 transition-all duration-500">
                    Découvrir l'article
                    <div className="h-[1px] w-12 bg-xiri-gold transition-all duration-700 group-hover:w-24"></div>
                  </div>
                  <ArrowRight size={18} className="text-xiri-gold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="py-40 text-center">
            <h3 className="text-3xl font-serif text-xiri-navy/30">Aucun article ne correspond à votre recherche.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
