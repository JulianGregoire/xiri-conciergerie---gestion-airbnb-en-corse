// @ts-nocheck
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F0F7FA]/30 hidden lg:block -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

          {/* Left Side: Text and Info */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
            <div className="space-y-6">
              <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.6em] block">Prendre Contact</span>
              <h2 className="text-5xl md:text-7xl font-serif text-xiri-navy leading-tight">
                Écrivons <br />la <span className="italic">suite</span>.
              </h2>
              <p className="text-[16px] text-xiri-navy/60 leading-loose font-light max-w-md">
                Que vous soyez propriétaire d'une villa d'exception ou que vous souhaitiez confier votre appartement, nous sommes à votre écoute pour une étude personnalisée de votre projet.
              </p>
            </div>

            <div className="space-y-10 pt-8 border-t border-xiri-navy/5">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#F0F7FA] flex items-center justify-center text-xiri-gold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-xiri-navy/40 mb-1 font-bold">Ligne Directe</p>
                  <p className="text-lg font-serif text-xiri-navy">06 12 34 56 78</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#F0F7FA] flex items-center justify-center text-xiri-gold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-xiri-navy/40 mb-1 font-bold">Email</p>
                  <p className="text-lg font-serif text-xiri-navy">contact@xiri-co.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-16 framed-img shadow-[0_50px_100px_-20px_rgba(27,43,68,0.15)]">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group relative">
                    <input
                      type="text"
                      required
                      className="peer w-full bg-transparent border-b border-xiri-navy/10 py-4 outline-none focus:border-xiri-gold transition-all text-sm placeholder-transparent"
                      id="name"
                      placeholder="Nom"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-0 text-[10px] uppercase tracking-[0.3em] font-bold text-xiri-navy/40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-xiri-gold"
                    >
                      Nom Complet
                    </label>
                  </div>
                  <div className="group relative">
                    <input
                      type="email"
                      required
                      className="peer w-full bg-transparent border-b border-xiri-navy/10 py-4 outline-none focus:border-xiri-gold transition-all text-sm placeholder-transparent"
                      id="email"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-0 text-[10px] uppercase tracking-[0.3em] font-bold text-xiri-navy/40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-xiri-gold"
                    >
                      Email Professionnel
                    </label>
                  </div>
                </div>

                <div className="group relative">
                  <select
                    className="peer w-full bg-transparent border-b border-xiri-navy/10 py-4 outline-none focus:border-xiri-gold transition-all text-sm appearance-none"
                    id="property"
                  >
                    <option>Villa avec piscine</option>
                    <option>Appartement Premium</option>
                    <option>Domaine Privé</option>
                    <option>Autre</option>
                  </select>
                  <label
                    htmlFor="property"
                    className="absolute left-0 top-0 text-[10px] uppercase tracking-[0.3em] font-bold text-xiri-navy/40"
                  >
                    Type de bien
                  </label>
                </div>

                <div className="group relative">
                  <textarea
                    rows={4}
                    className="peer w-full bg-transparent border-b border-xiri-navy/10 py-4 outline-none focus:border-xiri-gold transition-all text-sm placeholder-transparent resize-none"
                    id="message"
                    placeholder="Message"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-0 text-[10px] uppercase tracking-[0.3em] font-bold text-xiri-navy/40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-xiri-gold"
                  >
                    Votre Message
                  </label>
                </div>

                <div className="pt-6">
                  <button className="group relative w-full bg-xiri-navy text-white overflow-hidden py-6 text-[11px] uppercase tracking-[0.4em] font-bold shadow-2xl transition-all hover:bg-black">
                    <span className="relative z-10">Envoyer ma demande</span>
                    <div className="absolute inset-0 bg-xiri-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-10"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
