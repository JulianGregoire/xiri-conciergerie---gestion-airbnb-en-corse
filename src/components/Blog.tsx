// @ts-nocheck
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { blogData } from '../data/blogData';

interface BlogProps {
  onArticleClick: (id: string) => void;
  onSeeAll: () => void;
}

const Blog: React.FC<BlogProps> = ({ onArticleClick, onSeeAll }) => {
  const parseDate = (dateStr: string) => {
    const months: Record<string, number> = {
      'JANVIER': 0, 'FÉVRIER': 1, 'MARS': 2, 'AVRIL': 3, 'MAI': 4, 'JUIN': 5,
      'JUILLET': 6, 'AOÛT': 7, 'SEPTEMBRE': 8, 'OCTOBRE': 9, 'NOVEMBRE': 10, 'DÉCEMBRE': 11
    };
    const [day, month, year] = dateStr.split(' ');
    return new Date(parseInt(year), months[month.toUpperCase()], parseInt(day));
  };

  const articles = Object.values(blogData)
    .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
    .slice(0, 3);

  return (
    <section id="blog" className="py-40 bg-white relative overflow-hidden">
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-xiri-navy/5 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.6em] mb-6 block">Actualités & Conseils</span>
            <h2 className="text-5xl md:text-7xl font-serif text-xiri-navy leading-tight">
              Le Blog de la <br /><span className="">Conciergerie</span>.
            </h2>
          </div>
          <button
            onClick={onSeeAll}
            className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] font-bold text-xiri-navy hover:text-xiri-gold transition-colors pb-2 border-b border-xiri-navy/10 bg-transparent"
          >
            Voir tous les articles
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="group flex flex-col h-full cursor-pointer"
              onClick={() => onArticleClick(article.id)}
            >
              <div className="relative h-[300px] mb-10 overflow-hidden framed-img transition-transform duration-700 group-hover:-translate-y-2">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-xiri-navy/5 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-6 left-6 bg-white px-4 py-2 text-[9px] font-bold tracking-[0.3em] text-xiri-navy shadow-xl">
                  {article.category}
                </div>
              </div>

              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-xiri-gold mb-6">
                <span>{article.date}</span>
                <span className="w-1 h-1 bg-xiri-navy/20 rounded-full"></span>
                <span className="text-[#000000] font-black">{article.readTime}</span>
              </div>

              <h3 className="text-2xl font-serif text-xiri-navy mb-6 leading-snug group-hover:text-xiri-gold transition-colors">
                {article.title}
              </h3>

              <p className="text-[15px] text-[#000000] leading-relaxed font-medium mb-8 flex-grow">
                {article.excerpt}
              </p>

              <div className="pt-8 mt-auto border-t border-xiri-navy/5">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-xiri-navy group-hover:gap-5 transition-all">
                  Lire l'article
                  <div className="h-[1px] w-8 bg-xiri-gold transition-all group-hover:w-16"></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
