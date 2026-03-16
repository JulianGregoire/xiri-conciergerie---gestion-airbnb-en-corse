import * as React from 'react';
import { motion } from 'framer-motion';

const CalendlyEmbed: React.FC = () => {
    return (
        <section id="simulator" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-xiri-bg/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-xiri-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl opacity-50 -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Text Content */}
                    <div className="lg:col-span-4 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-5"
                        >
                            <div className="flex items-center gap-2">
                                <span className="h-[2px] w-8 bg-xiri-gold"></span>
                                <span className="text-xiri-gold text-[10px] font-black uppercase tracking-[0.6em]">Expertise Prédictive</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif text-xiri-navy leading-[1.1]">
                                Audit & <br />
                                <span className="relative inline-block text-xiri-gold italic font-light">
                                    Accompagnement
                                    <motion.span
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '100%' }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                        className="absolute -bottom-2 left-0 h-[3px] bg-xiri-gold/30 rounded-full"
                                    ></motion.span>
                                </span>
                            </h2>
                            <p className="text-[16px] text-xiri-navy/60 leading-relaxed font-light max-w-sm">
                                Réservez un échange téléphonique de 30 minutes avec un expert Xiri Conciergerie pour estimer le potentiel locatif de votre propriété.
                            </p>
                        </motion.div>
                    </div>

                    {/* Calendly Form */}
                    <div className="lg:col-span-8">
                        <motion.div
                            layout
                            className="bg-white rounded-[32px] shadow-[0_32px_80px_-20px_rgba(15,23,42,0.1)] border border-xiri-navy/5 overflow-hidden p-2 md:p-4"
                        >
                            <iframe
                                src="https://calendly.com/xirihouse34/30min?embed_domain=localhost&embed_type=Inline"
                                width="100%"
                                height="700"
                                frameBorder="0"
                                title="Calendly Scheduling Page"
                                style={{ minWidth: '320px', borderRadius: '24px' }}
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CalendlyEmbed;
