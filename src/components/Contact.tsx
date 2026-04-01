// @ts-nocheck
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">

          {/* Left: info */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-[0.25em] block">Prendre Contact</span>
              <h2 className="text-[26px] md:text-[30px] font-serif text-xiri-navy leading-tight">
                Nous Contacter
              </h2>
              <p className="text-[14px] text-xiri-navy/70 leading-relaxed font-medium max-w-md">
                Réponse sous 24h avec un premier plan d'action pour votre bien.
              </p>
            </div>

            <div className="space-y-5 pt-5 border-t border-xiri-navy/5">
              <div className="flex items-center gap-5">
                <div className="w-11 h-11 bg-[#F0F7FA] flex items-center justify-center text-xiri-gold rounded-xl flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-xiri-navy/40 mb-0.5 font-bold">Ligne Directe</p>
                  <p className="text-base font-serif text-xiri-navy">07 82 31 22 06</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-11 h-11 bg-[#F0F7FA] flex items-center justify-center text-xiri-gold rounded-xl flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-xiri-navy/40 mb-0.5 font-bold">Email</p>
                  <p className="text-base font-serif text-xiri-navy">xirihouse34@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 md:p-8 shadow-[0_32px_80px_-20px_rgba(27,43,68,0.2)] rounded-3xl border border-xiri-navy/5">
              <form
                className="space-y-5"
                action="https://formbold.com/s/9xmDR"
                method="POST"
              >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-[0.25em] font-bold text-xiri-navy/50">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      required
                      id="name"
                      name="name"
                      placeholder="Jean Dupont"
                      className="w-full bg-[#F8FAFC] border border-xiri-navy/10 py-3.5 px-4 rounded-xl outline-none focus:border-xiri-gold focus:bg-white transition-all text-[14px] text-xiri-navy placeholder:text-xiri-navy/30"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-[0.25em] font-bold text-xiri-navy/50">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      id="email"
                      name="email"
                      placeholder="jean@example.com"
                      className="w-full bg-[#F8FAFC] border border-xiri-navy/10 py-3.5 px-4 rounded-xl outline-none focus:border-xiri-gold focus:bg-white transition-all text-[14px] text-xiri-navy placeholder:text-xiri-navy/30"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="property" className="text-[10px] uppercase tracking-[0.25em] font-bold text-xiri-navy/50">
                    Type de bien
                  </label>
                  <select
                    id="property"
                    name="property"
                    className="w-full bg-[#F8FAFC] border border-xiri-navy/10 py-3.5 px-4 rounded-xl outline-none focus:border-xiri-gold focus:bg-white transition-all text-[14px] text-xiri-navy appearance-none"
                  >
                    <option>Villa avec piscine</option>
                    <option>Appartement Premium</option>
                    <option>Domaine Privé</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-[0.25em] font-bold text-xiri-navy/50">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    name="message"
                    placeholder="Décrivez votre bien et vos objectifs..."
                    className="w-full bg-[#F8FAFC] border border-xiri-navy/10 py-3.5 px-4 rounded-xl outline-none focus:border-xiri-gold focus:bg-white transition-all text-[14px] text-xiri-navy placeholder:text-xiri-navy/30 resize-none"
                  ></textarea>
                </div>

                <button className="group relative w-full bg-gradient-to-r from-xiri-gold to-[#D4B475] text-white overflow-hidden py-4 text-[11px] uppercase tracking-[0.25em] font-extrabold shadow-xl shadow-xiri-gold/20 transition-all hover:scale-[1.01] rounded-xl">
                  <span className="relative z-10">Envoyer ma demande</span>
                  <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-10"></div>
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
