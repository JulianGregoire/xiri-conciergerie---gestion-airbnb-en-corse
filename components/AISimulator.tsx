
import React, { useState, useMemo } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Sparkles, Loader2, MapPin, CheckCircle2, ArrowRight, TrendingUp, Calendar, Info, Mail, FileText, Download, Check, Share2, ShieldCheck } from 'lucide-react';

const AISimulator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [generatingReport, setGeneratingReport] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [fullReport, setFullReport] = useState<string | null>(null);
  const [result, setResult] = useState<{
    highSeason: string;
    lowSeason: string;
    annualRevenue: string;
    occupancyRate: string;
    advice: string;
    strategicValue: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    city: '',
    type: 'Villa avec piscine',
    amenities: [] as string[]
  });

  const amenitiesOptions = [
    "Vue Mer", "Piscine chauffée", "Accès Plage à pied", "Climatisation", "Cuisine d'été / BBQ", "Conciergerie 24/7"
  ];

  const comparisonData = useMemo(() => {
    if (!result) return null;
    const revenueValue = parseInt(result.annualRevenue.replace(/[^0-9]/g, ''));
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

  const handleEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.city) return;

    setLoading(true);
    setResult(null);
    setError(null);
    setShowEmailForm(false);
    setEmailSent(false);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Tu es un expert analyste du marché immobilier de prestige en Corse pour XIRI CONCIERGERIE. 
      Estime le potentiel locatif annuel pour ce bien :
      - Localisation : ${formData.city} (Corse)
      - Type de bien : ${formData.type}
      - Équipements : ${formData.amenities.join(', ')}
      
      Instructions :
      1. Les prix doivent refléter le marché haut de gamme actuel.
      2. Mets en avant l'excellence de la gestion déléguée.
      3. Propose un revenu annuel réaliste basé sur une saisonnalité corse classique.
      4. Le conseil doit être spécifique à la localisation.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              highSeason: { type: Type.STRING },
              lowSeason: { type: Type.STRING },
              annualRevenue: { type: Type.STRING },
              occupancyRate: { type: Type.STRING },
              advice: { type: Type.STRING },
              strategicValue: { type: Type.STRING }
            },
            required: ["highSeason", "lowSeason", "annualRevenue", "occupancyRate", "advice", "strategicValue"]
          }
        }
      });

      if (response.text) {
        setResult(JSON.parse(response.text));
      }
    } catch (err) {
      console.error("AI Error:", err);
      setError("Une erreur est survenue lors de l'analyse.");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateAndSendReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail || !result) return;

    setGeneratingReport(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const reportPrompt = `Rédige une note de synthèse professionnelle pour un propriétaire en Corse de la part de XIRI CONCIERGERIE.
      Détails : ${formData.type} à ${formData.city}. 
      Focus : Excellence opérationnelle, sécurité juridique et valorisation du bien. Ton : Sobre et luxueux.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: reportPrompt
      });

      if (response.text) {
        setFullReport(response.text);
        setEmailSent(true);
      }
    } catch (err) {
      console.error("Report Generation Error:", err);
      setError("Erreur lors de la génération du rapport.");
    } finally {
      setGeneratingReport(false);
    }
  };

  const downloadReport = () => {
    if (!fullReport) return;
    const element = document.createElement("a");
    const file = new Blob([`NOTE D'EXPERTISE XIRI CONCIERGERIE\n\n${fullReport}`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `Synthese_Xiri_${formData.city.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      window.scrollTo({ top: element.offsetTop - offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="ai-simulator" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white -z-10 rounded-l-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-xiri-gold"></span>
                <span className="text-xiri-gold text-[10px] font-black uppercase tracking-[0.5em]">Analyse de Potentiel</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif text-xiri-navy leading-tight mb-8">
                Valorisez votre <br /><span className="font-light">patrimoine</span>.
              </h2>
              <p className="text-[15px] text-xiri-navy/50 leading-relaxed font-light">
                Découvrez le rendement optimal de votre bien en déléguant sa gestion à nos spécialistes de l'immobilier insulaire.
              </p>
            </div>

            <form onSubmit={handleEstimate} className="bg-white p-8 lg:p-12 shadow-xl border border-xiri-navy/5 rounded-2xl space-y-10 mt-8">
              <div className="space-y-10">
                <div className="group relative pt-4">
                  <MapPin size={16} className="absolute right-0 top-8 text-xiri-navy/20 group-focus-within:text-xiri-gold transition-colors" />
                  <input 
                    type="text" 
                    required 
                    className="peer w-full bg-transparent border-b border-xiri-navy/10 py-4 outline-none focus:border-xiri-gold transition-all text-sm placeholder-transparent"
                    id="city-input"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                  <label htmlFor="city-input" className="absolute left-0 top-0 text-[9px] uppercase tracking-[0.3em] font-bold text-xiri-navy/40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-0 peer-focus:text-[9px] peer-focus:text-xiri-gold">
                    Localisation en Corse
                  </label>
                </div>

                <div className="group relative">
                  <select 
                    className="peer w-full bg-transparent border-b border-xiri-navy/10 py-4 outline-none focus:border-xiri-gold transition-all text-sm appearance-none cursor-pointer"
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                  >
                    <option>Villa d'exception</option>
                    <option>Appartement Vue Mer</option>
                    <option>Bergerie de charme</option>
                    <option>Propriété de village</option>
                  </select>
                  <label className="absolute left-0 top-0 text-[9px] uppercase tracking-[0.3em] font-bold text-xiri-navy/40">
                    Type de bien
                  </label>
                </div>

                <div className="pt-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-xiri-navy/40 mb-6 block">Prestations Premium</label>
                  <div className="flex flex-wrap gap-3">
                    {amenitiesOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleToggleAmenity(opt)}
                        className={`px-4 py-3 text-[9px] font-bold uppercase tracking-widest transition-all border rounded-full ${
                          formData.amenities.includes(opt) 
                          ? 'bg-xiri-navy text-white border-xiri-navy shadow-lg' 
                          : 'bg-white text-xiri-navy/60 border-xiri-navy/10 hover:border-xiri-gold hover:text-xiri-gold'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                disabled={loading || !formData.city}
                className="w-full group relative overflow-hidden bg-xiri-navy text-white py-6 rounded-xl text-[11px] uppercase tracking-[0.4em] font-bold shadow-2xl transition-all"
              >
                <div className="relative z-10 flex items-center justify-center gap-4">
                  {loading ? <Loader2 className="animate-spin" size={18} /> : <ShieldCheck size={18} className="text-xiri-gold" />}
                  {loading ? "ANALYSE EN COURS..." : "SIMULER LE RENDEMENT"}
                </div>
                <div className="absolute inset-0 bg-xiri-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-20"></div>
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 relative flex items-center">
            {!result && !loading && !error && (
              <div className="w-full text-center space-y-8 p-12 lg:p-24 border-2 border-dashed border-xiri-navy/5 rounded-[40px] bg-white/50 backdrop-blur-sm">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <ShieldCheck className="text-xiri-gold/30" size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-xiri-navy">Optimisez votre gestion</h3>
                  <p className="text-sm text-xiri-navy/40 font-light max-w-xs mx-auto">
                    Visualisez vos revenus nets avec une délégation complète à XIRI CONCIERGERIE.
                  </p>
                </div>
              </div>
            )}

            {loading && !showEmailForm && (
              <div className="w-full flex flex-col items-center justify-center space-y-12 py-24">
                <div className="relative">
                  <div className="w-32 h-32 border-4 border-xiri-navy/5 rounded-full"></div>
                  <div className="absolute top-0 left-0 w-32 h-32 border-4 border-xiri-gold border-t-transparent rounded-full animate-spin"></div>
                  <ShieldCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xiri-gold animate-pulse" size={24} />
                </div>
                <p className="text-[12px] uppercase tracking-[0.5em] text-xiri-navy font-black animate-pulse">Calcul des opportunités...</p>
              </div>
            )}

            {result && !loading && (
              <div className="w-full space-y-8 animate-in fade-in zoom-in-95 duration-700">
                <div className="w-full bg-white rounded-[40px] shadow-[0_50px_100px_-30px_rgba(27,43,68,0.2)] border border-xiri-navy/5 overflow-hidden">
                  <div className="bg-xiri-navy p-10 text-white flex justify-between items-center">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-xiri-gold mb-2">Note de Synthèse Immobilière</h4>
                      <p className="text-2xl font-serif">{formData.city} • <span className="">{formData.type}</span></p>
                    </div>
                    <div className="text-right">
                      <ShieldCheck className="text-xiri-gold ml-auto mb-2" size={24} />
                      <span className="text-[9px] uppercase tracking-widest font-bold text-white/40">Excellence</span>
                    </div>
                  </div>

                  <div className="p-10 lg:p-14 space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="p-8 bg-[#F8FAFC] rounded-2xl space-y-4 border border-xiri-navy/5">
                        <span className="text-[9px] uppercase tracking-widest font-bold text-xiri-navy/40">Revenu Annuel Estimé</span>
                        <p className="text-5xl font-serif text-xiri-navy tracking-tighter">{result.annualRevenue}</p>
                      </div>
                      <div className="p-8 bg-[#F8FAFC] rounded-2xl space-y-4 border border-xiri-navy/5">
                        <span className="text-[9px] uppercase tracking-widest font-bold text-xiri-navy/40">Projection d'Occupation</span>
                        <p className="text-5xl font-serif text-xiri-navy/60 tracking-tighter">{result.occupancyRate}</p>
                      </div>
                    </div>

                    <div className="py-12 border-y border-xiri-navy/5">
                      <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-xiri-navy mb-10 text-center">Optimisation du Rendement</h5>
                      <div className="space-y-12 max-w-lg mx-auto">
                        <div className="space-y-4">
                          <div className="flex justify-between items-end">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-xiri-navy/40">Gestion Classique</span>
                            <span className="text-xl font-serif text-xiri-navy/60">{comparisonData?.sansXiri.toLocaleString('fr-FR')} €</span>
                          </div>
                          <div className="h-2 w-full bg-xiri-navy/5 rounded-full overflow-hidden">
                            <div className="h-full bg-xiri-navy/20 w-[78%]"></div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between items-end">
                            <span className="text-[11px] font-black uppercase tracking-widest text-xiri-gold">Expertise XIRI</span>
                            <span className="text-2xl font-serif text-xiri-navy">{comparisonData?.revenueValue.toLocaleString('fr-FR')} €</span>
                          </div>
                          <div className="h-4 w-full bg-xiri-gold/10 rounded-full overflow-hidden">
                            <div className="h-full bg-xiri-gold w-full relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-xiri-gold/5 p-6 rounded-2xl border border-xiri-gold/10 text-center">
                          <p className="text-[11px] font-bold uppercase tracking-widest text-xiri-gold">Valorisation Additionnelle : +{comparisonData?.gainNet.toLocaleString('fr-FR')} € / an</p>
                        </div>
                      </div>
                    </div>

                    {!showEmailForm && !emailSent && (
                      <div className="flex flex-col md:flex-row gap-4">
                        <button 
                          onClick={() => setShowEmailForm(true)}
                          className="flex-1 flex items-center justify-center gap-4 group bg-xiri-navy text-white px-10 py-7 rounded-xl text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-black transition-all shadow-xl"
                        >
                          RECEVOIR L'ÉTUDE COMPLÈTE
                          <FileText size={18} className="text-xiri-gold" />
                        </button>
                        <button 
                          onClick={scrollToContact}
                          className="flex-1 flex items-center justify-center gap-4 group bg-xiri-gold text-white px-10 py-7 rounded-xl text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-xiri-navy transition-all shadow-xl"
                        >
                          PARLER À UN CONSEILLER
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    )}

                    {showEmailForm && !emailSent && (
                      <form onSubmit={handleGenerateAndSendReport} className="space-y-8 p-10 bg-[#F8FAFC] rounded-3xl border border-xiri-gold/20 animate-in slide-in-from-bottom-4 duration-500">
                        <div className="text-center space-y-4">
                          <h6 className="text-xl font-serif text-xiri-navy">Synthèse Personnalisée</h6>
                          <p className="text-xs text-xiri-navy/50 font-light">Recevez votre dossier d'expertise détaillant notre stratégie de valorisation pour votre bien.</p>
                        </div>
                        <div className="relative">
                          <Mail size={16} className="absolute left-0 top-4 text-xiri-gold" />
                          <input 
                            type="email" 
                            required 
                            placeholder="VOTRE EMAIL"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            className="w-full bg-transparent border-b border-xiri-gold/30 py-4 pl-10 outline-none focus:border-xiri-gold text-[10px] tracking-widest font-bold uppercase"
                          />
                        </div>
                        <button 
                          type="submit"
                          disabled={generatingReport}
                          className="w-full bg-xiri-navy text-white py-6 rounded-xl text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-black transition-all flex items-center justify-center gap-4"
                        >
                          {generatingReport ? <Loader2 className="animate-spin" size={16} /> : <ShieldCheck size={16} />}
                          {generatingReport ? "GÉNÉRATION DU DOSSIER..." : "ENVOYER MON DOSSIER"}
                        </button>
                      </form>
                    )}

                    {emailSent && (
                      <div className="p-12 bg-green-50 rounded-3xl border border-green-100 text-center space-y-8 animate-in zoom-in-95 duration-500">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                          <Check className="text-green-500" size={32} />
                        </div>
                        <div className="space-y-4">
                          <h6 className="text-2xl font-serif text-xiri-navy">Dossier Envoyé</h6>
                          <p className="text-[13px] text-xiri-navy/50 font-light leading-relaxed">
                            Votre synthèse pour <strong>{formData.city}</strong> est en route.<br /> 
                            Découvrez comment optimiser votre rentabilité sereinement.
                          </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                           <button 
                             onClick={downloadReport}
                             className="flex items-center justify-center gap-3 bg-xiri-navy text-white px-8 py-5 rounded-xl text-[10px] uppercase tracking-widest font-bold shadow-xl hover:bg-black transition-all"
                           >
                             <Download size={16} />
                             TÉLÉCHARGER LA NOTE
                           </button>
                           <button 
                             onClick={scrollToContact}
                             className="flex items-center justify-center gap-3 bg-xiri-gold text-white px-8 py-5 rounded-xl text-[10px] uppercase tracking-widest font-bold shadow-xl hover:bg-xiri-navy transition-all"
                           >
                             <ShieldCheck size={16} />
                             CONTACTER L'AGENCE
                           </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISimulator;
