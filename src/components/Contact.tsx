// @ts-nocheck
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 lg:py-48 relative overflow-hidden border-t border-xiri-navy/5">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">

          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="text-xiri-gold text-[11px] font-bold uppercase tracking-[0.25em] block">Prendre Contact</span>
              <h2 className="text-[30px] md:text-[34px] font-serif text-xiri-navy leading-tight">
                Nous Contacter
              </h2>
              <p className="text-[15px] text-xiri-navy/70 leading-relaxed font-medium max-w-md">
                Réponse sous 24h avec un plan d'action adapté à votre bien et à vos objectifs.
              </p>
            </div>

            <div className="space-y-6 pt-5 border-t border-xiri-navy/5">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#F0F7FA] flex items-center justify-center text-xiri-gold rounded-xl">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-xiri-navy/40 mb-1 font-bold">Ligne Directe</p>
                  <p className="text-lg font-serif text-xiri-navy">06 12 34 56 78</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#F0F7FA] flex items-center justify-center text-xiri-gold rounded-xl">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-xiri-navy/40 mb-1 font-bold">Email</p>
                  <p className="text-lg font-serif text-xiri-navy">contact@xiri-co.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-14 framed-img shadow-[0_32px_80px_-20px_rgba(27,43,68,0.25)] rounded-3xl">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group relative">
                    <input
                      type="text"
                      required
                      className="peer w-full bg-white border border-xiri-navy/10 py-5 px-6 rounded-2xl outline-none focus:border-xiri-gold transition-all text-base placeholder-transparent"
                      id="name"
                      placeholder="Nom"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-0 text-xs uppercase tracking-[0.3em] font-bold text-xiri-navy/40 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-xiri-gold"
                    >
                      Nom Complet
                    </label>
                  </div>
                  <div className="group relative">
                    <input
                      type="email"
                      required
                      className="peer w-full bg-white border border-xiri-navy/10 py-5 px-6 rounded-2xl outline-none focus:border-xiri-gold transition-all text-base placeholder-transparent"
                      id="email"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-0 text-xs uppercase tracking-[0.3em] font-bold text-xiri-navy/40 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-xiri-gold"
                    >
                      Email Professionnel
                    </label>
                  </div>
                </div>

                <div className="group relative">
                  <select
                    className="peer w-full bg-white border border-xiri-navy/10 py-5 px-6 rounded-2xl outline-none focus:border-xiri-gold transition-all text-base appearance-none"
                    id="property"
                  >
                    <option>Villa avec piscine</option>
                    <option>Appartement Premium</option>
                    <option>Domaine Privé</option>
                    <option>Autre</option>
                  </select>
                  <label
                    htmlFor="property"
                    className="absolute left-0 -top-2 text-xs uppercase tracking-[0.3em] font-bold text-xiri-navy/40 bg-white px-2"
                  >
                    Type de bien
                  </label>
                </div>

                <div className="group relative">
                  <textarea
                    rows={5}
                    className="peer w-full bg-white border border-xiri-navy/10 py-5 px-6 rounded-2xl outline-none focus:border-xiri-gold transition-all text-base placeholder-transparent resize-none"
                    id="message"
                    placeholder="Message"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-0 text-xs uppercase tracking-[0.3em] font-bold text-xiri-navy/40 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-xiri-gold"
                  >
                    Votre Message
                  </label>
                </div>

                <div className="pt-4">
                  <button className="group relative w-full bg-gradient-to-r from-xiri-gold to-[#D4B475] text-white overflow-hidden py-5 text-xs uppercase tracking-[0.25em] font-extrabold shadow-2xl shadow-xiri-gold/30 transition-all hover:scale-[1.02] rounded-2xl">
                    <span className="relative z-10">Envoyer ma demande</span>
                    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-10"></div>
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
