// @ts-nocheck
import React from 'react';
import { CreditCard, Heart, ShieldCheck } from 'lucide-react';

const Ecosystem: React.FC = () => {
  const advantages = [
    {
      title: "Encaissement Direct",
      description: "Les fonds transitent sur votre compte personnel. Une transparence financière absolue soutenue par notre ingénierie technique.",
      icon: <CreditCard className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Expertise Règlementaire",
      description: "Respect strict des normes locales : déclarations, taxes et conformités administratives sont opérées par nos experts.",
      icon: <ShieldCheck className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Gestion Passive de Luxe",
      description: "Profitez de votre investissement en toute sérénité. De la sélection à la maintenance, nous veillons sur votre patrimoine.",
      icon: <Heart className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="pt-16 pb-40 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F0F7FA]/20 -z-0 rounded-l-[100px] hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-32">
          <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.6em] mb-6 block">Confidentialité & Maîtrise</span>
          <h2 className="text-5xl md:text-7xl font-serif text-xiri-navy leading-tight mb-8">
            Une délégation <br /><span className="">sur-mesure</span>.
          </h2>
          <p className="text-[17px] text-[#0a0a0a] leading-relaxed font-medium max-w-xl editorial-spacing">
            Nous avons conçu un écosystème où l'excellence opérationnelle rencontre la sécurité juridique, pour une valorisation pérenne de vos actifs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {advantages.map((adv, idx) => (
            <div key={idx} className="group">
              <div className="relative h-[300px] mb-10 overflow-hidden framed-img transition-transform duration-700 group-hover:-translate-y-3 text-black">
                <img
                  src={adv.image}
                  alt={adv.title}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-xiri-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white shadow-xl flex items-center justify-center text-xiri-gold transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  {adv.icon}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-serif text-xiri-navy tracking-wide leading-snug">
                  {adv.title}
                </h3>
                <p className="text-[15px] text-[#0a0a0a] leading-relaxed font-medium">
                  {adv.description}
                </p>
                <div className="pt-4 overflow-hidden">
                  <div className="h-[2px] w-12 bg-xiri-gold group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
