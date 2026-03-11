import React, { useState, useMemo, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Loader2,
  MapPin,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Mail,
  FileText,
  Download,
  Check,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Home,
  Waves,
  Euro,
  BarChart3
} from 'lucide-react';

interface SimulationResult {
  highSeason: string;
  lowSeason: string;
  annualRevenue: string;
  occupancyRate: string;
  advice: string;
  strategicValue: string;
}

const AISimulator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<SimulationResult | null>(null);

  const [formData, setFormData] = useState({
    city: '',
    type: 'Villa d\'exception',
    amenities: [] as string[]
  });

  const amenitiesOptions = [
    "Vue Mer", "Piscine chauffée", "Accès Plage à pied", "Climatisation", "Cuisine d'été / BBQ", "Conciergerie 24/7"
  ];

  const propertyTypes = [
    { id: 'villa', label: 'Villa d\'exception', icon: <Home size={18} /> },
    { id: 'apt', label: 'Appartement Vue Mer', icon: <Waves size={18} /> },
    { id: 'bergerie', label: 'Bergerie de charme', icon: <Waves size={18} /> },
    { id: 'propriete', label: 'Propriété de village', icon: <Home size={18} /> },
  ];

  const comparisonData = useMemo(() => {
    if (!result) return null;
    const revenueValue = parseInt(result.annualRevenue.replace(/[^0-9]/g, ''));
    if (isNaN(revenueValue)) return { revenueValue: 0, sansXiri: 0, gainNet: 0 };
    const sansXiri = Math.round(revenueValue * 0.78);
    const gainNet = revenueValue - sansXiri;
    return { revenueValue, sansXiri, gainNet };
  }, [result]);

  const handleToggleAmenity = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const runSimulation = async () => {
    setLoading(true);
    setError(null);
    setStep(4);

    try {
      const apiKey = import.meta.env.PUBLIC_GEMINI_API_KEY;

      // Fallback if no API Key is provided for demo purposes
      if (!apiKey || apiKey === 'YOUR_API_KEY') {
        setTimeout(() => {
          setResult({
            highSeason: "12 500 € / mois",
            lowSeason: "4 200 € / mois",
            annualRevenue: "84 000 €",
            occupancyRate: "72%",
            advice: "Votre bien à " + formData.city + " présente un fort potentiel, notamment grâce à ses équipements premium. Nous conseillons un repositionnement tarifaire dynamique.",
            strategicValue: "Optimisation du taux d'occupation via multi-diffusion."
          });
          setLoading(false);
        }, 2500);
        return;
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Tu es un expert analyste du marché immobilier de prestige en France pour XIRI CONCIERGERIE. 
      Estime le potentiel locatif annuel pour ce bien :
      - Localisation : ${formData.city} (France)
      - Type de bien : ${formData.type}
      - Équipements : ${formData.amenities.join(', ')}
      
      Réponds UNIQUEMENT en format JSON avec les clés suivantes :
      {
        "highSeason": "Prix estimé haute saison (ex: 8000 € / semaine)",
        "lowSeason": "Prix estimé basse saison (ex: 3000 € / semaine)",
        "annualRevenue": "Revenu annuel total estimé (ex: 95000 €)",
        "occupancyRate": "Taux d'occupation estimé (ex: 65%)",
        "advice": "Conseil spécifique de 2 phrases",
        "strategicValue": "Valeur ajoutée de la gestion Xiri en 1 phrase"
      }`;

      const res = await model.generateContent(prompt);
      const text = res.response.text();
      const cleanJson = text.replace(/```json|```/g, '').trim();
      setResult(JSON.parse(cleanJson));
    } catch (err) {
      console.error("Simulation error:", err);
      setError("Une erreur est survenue lors de l'analyse. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setResult(null);
    setFormData({
      city: '',
      type: 'Villa d\'exception',
      amenities: []
    });
  };

  return (
    <section id="ai-simulator" className="py-24 md:py-32 lg:py-48 bg-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-xiri-bg/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-xiri-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Text Content */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-12 bg-xiri-gold"></span>
                <span className="text-xiri-gold text-[11px] font-black uppercase tracking-[0.6em]">Expertise Prédictive</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-xiri-navy leading-[1.1]">
                Valorisez votre <br />
                <span className="relative inline-block text-xiri-gold italic font-light">
                  patrimoine
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-[3px] bg-xiri-gold/30 rounded-full"
                  ></motion.span>
                </span>
                .
              </h2>
              <p className="text-[17px] text-xiri-navy/60 leading-relaxed font-light max-w-md">
                Libérez le plein potentiel de votre propriété. Notre algorithme analyse le marché en temps réel pour une projection de revenus nette et transparente.
              </p>
            </motion.div>

            {/* Stepper Dots */}
            <div className="flex gap-3 pt-4">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-[3px] transition-all duration-500 rounded-full ${step === s ? 'w-12 bg-xiri-gold' : 'w-4 bg-xiri-navy/10'}`}
                ></div>
              ))}
            </div>
          </div>

          {/* Form / Result Card */}
          <div className="lg:col-span-7">
            <motion.div
              layout
              className="bg-white rounded-[32px] shadow-[0_32px_80px_-20px_rgba(15,23,42,0.1)] border border-xiri-navy/5 overflow-hidden p-8 md:p-12"
            >
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    <div className="space-y-2">
                      <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-widest">Étape 01</span>
                      <h3 className="text-3xl font-serif text-xiri-navy">Où se situe votre bien ?</h3>
                    </div>
                    <div className="relative pt-6">
                      <MapPin className="absolute left-0 bottom-4 text-xiri-gold" size={20} />
                      <input
                        type="text"
                        placeholder="Ex: Paris, Cannes, Megève, Ajaccio..."
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-xiri-navy/10 py-3 pl-8 outline-none focus:border-xiri-gold transition-all text-lg font-serif placeholder:text-xiri-navy/20"
                      />
                    </div>
                    <button
                      onClick={nextStep}
                      disabled={!formData.city}
                      className="w-full bg-xiri-navy text-white py-6 rounded-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-[11px] hover:bg-xiri-gold transition-all disabled:opacity-50"
                    >
                      Suivant <ChevronRight size={16} />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    <div className="space-y-2">
                      <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-widest">Étape 02</span>
                      <h3 className="text-3xl font-serif text-xiri-navy">Quel est le type de propriété ?</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {propertyTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => {
                            setFormData({ ...formData, type: type.label });
                            nextStep();
                          }}
                          className={`flex items-center gap-4 p-6 rounded-2xl border-2 transition-all text-left ${formData.type === type.label
                            ? 'border-xiri-gold bg-xiri-gold/5 text-xiri-navy'
                            : 'border-xiri-navy/5 hover:border-xiri-navy/20'
                            }`}
                        >
                          <div className={`p-3 rounded-xl ${formData.type === type.label ? 'bg-xiri-gold text-white' : 'bg-xiri-bg text-xiri-gold'}`}>
                            {type.icon}
                          </div>
                          <span className="font-bold text-sm uppercase tracking-wider">{type.label}</span>
                        </button>
                      ))}
                    </div>
                    <button onClick={prevStep} className="text-xiri-navy/40 uppercase tracking-widest text-[10px] font-black flex items-center gap-2 hover:text-xiri-navy transition-colors">
                      <ChevronLeft size={14} /> Retour
                    </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    <div className="space-y-2">
                      <span className="text-xiri-gold text-[10px] font-bold uppercase tracking-widest">Étape 03</span>
                      <h3 className="text-3xl font-serif text-xiri-navy">Équipements & Prestations</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {amenitiesOptions.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleToggleAmenity(opt)}
                          className={`px-5 py-4 rounded-full border-2 transition-all font-bold uppercase tracking-widest text-[10px] ${formData.amenities.includes(opt)
                            ? 'bg-xiri-navy text-white border-xiri-navy shadow-lg'
                            : 'bg-white text-xiri-navy/60 border-xiri-navy/10 hover:border-xiri-gold hover:text-xiri-gold'
                            }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={runSimulation}
                      className="w-full bg-xiri-gold text-white py-6 rounded-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-[11px] hover:bg-xiri-navy shadow-xl shadow-xiri-gold/20 transition-all"
                    >
                      Générer mon étude <Sparkles size={16} />
                    </button>
                    <button onClick={prevStep} className="text-xiri-navy/40 uppercase tracking-widest text-[10px] font-black flex items-center gap-2 hover:text-xiri-navy transition-colors">
                      <ChevronLeft size={14} /> Retour
                    </button>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="min-h-[400px] flex flex-col items-center justify-center"
                  >
                    {loading ? (
                      <div className="text-center space-y-8">
                        <div className="relative">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="w-24 h-24 border-b-2 border-xiri-gold rounded-full"
                          ></motion.div>
                          <ShieldCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xiri-gold" size={32} />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-2xl font-serif text-xiri-navy animate-pulse">Analyse en cours...</h4>
                          <p className="text-xs text-xiri-navy/40 uppercase tracking-widest">Croisement des données marché à {formData.city}</p>
                        </div>
                      </div>
                    ) : error ? (
                      <div className="text-center space-y-6">
                        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
                          <ShieldCheck size={32} />
                        </div>
                        <p className="text-xiri-navy/70">{error}</p>
                        <button onClick={resetForm} className="bg-xiri-navy text-white px-8 py-4 rounded-xl font-bold uppercase text-[10px] tracking-widest">Réessayer</button>
                      </div>
                    ) : result && (
                      <div className="w-full space-y-10 animate-in fade-in duration-1000">
                        {/* Final Dashboard View */}
                        <div className="flex justify-between items-start border-b border-xiri-navy/5 pb-8">
                          <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-xiri-gold mb-2">Note d'expertise</h4>
                            <p className="text-2xl font-serif text-xiri-navy">{formData.city} • <span className="opacity-50">{formData.type}</span></p>
                          </div>
                          <BarChart3 className="text-xiri-gold" size={24} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="p-6 bg-xiri-bg/25 rounded-3xl border border-xiri-navy/5 space-y-2">
                            <span className="text-[9px] font-bold uppercase tracking-widest text-xiri-navy/40">Revenu Annuel Projeté</span>
                            <p className="text-4xl font-serif text-xiri-navy">{result.annualRevenue}</p>
                          </div>
                          <div className="p-6 bg-xiri-bg/25 rounded-3xl border border-xiri-navy/5 space-y-2">
                            <span className="text-[9px] font-bold uppercase tracking-widest text-xiri-navy/40">Taux d'Occupation</span>
                            <p className="text-4xl font-serif text-xiri-navy/60">{result.occupancyRate}</p>
                          </div>
                        </div>

                        {/* Revenue Comparison */}
                        <div className="space-y-6 bg-xiri-navy text-white p-8 rounded-[32px] overflow-hidden relative">
                          <div className="absolute top-0 right-0 p-8 opacity-10">
                            <TrendingUp size={80} />
                          </div>
                          <div className="relative z-10 space-y-8">
                            <div className="space-y-4">
                              <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest opacity-60">
                                <span>Gestion Standard</span>
                                <span>{comparisonData?.sansXiri.toLocaleString('fr-FR')} €</span>
                              </div>
                              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: '78%' }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                  className="h-full bg-white/30"
                                ></motion.div>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="flex justify-between items-end">
                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-xiri-gold">Signature XIRI</span>
                                <span className="text-3xl font-serif">{comparisonData?.revenueValue.toLocaleString('fr-FR')} €</span>
                              </div>
                              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: '100%' }}
                                  transition={{ duration: 1.2, delay: 0.8 }}
                                  className="h-full bg-xiri-gold"
                                ></motion.div>
                              </div>
                            </div>
                            <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                              <div className="w-10 h-10 bg-xiri-gold/20 rounded-full flex items-center justify-center text-xiri-gold">
                                <Euro size={18} />
                              </div>
                              <p className="text-[11px] font-bold uppercase tracking-widest">Gain supplémentaire net : <span className="text-xiri-gold">+{comparisonData?.gainNet.toLocaleString('fr-FR')} € / an</span></p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <button
                            onClick={() => {
                              const contactSection = document.getElementById('contact');
                              contactSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="flex-1 bg-gradient-to-r from-xiri-gold to-[#D4B475] text-white py-6 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl shadow-xiri-gold/20"
                          >
                            Demander l'étude complète
                          </button>
                          <button
                            onClick={resetForm}
                            className="px-8 bg-xiri-bg text-xiri-navy py-6 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-xiri-navy/5 transition-all"
                          >
                            Nouvelle étude
                          </button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISimulator;
