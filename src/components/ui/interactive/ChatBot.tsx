import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Send, X, MessageSquare, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from "@google/generative-ai";
import chatbotIcon from '../../../assets/images/ui/chatbot.png';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  time: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Quels sont vos tarifs ?",
    "Gérez-vous mon secteur ?",
    "Comment ça marche ?",
    "Garantissez-vous les revenus ?"
  ];

  const systemPrompt = `Tu es l'assistant IA Expert de XIRI CONCIERGERIE. Ton rôle est d'aider les propriétaires de résidences secondaires à maximiser leurs revenus locatifs.
  
  CONTEXTE XIRI :
  - Services : Gestion A-Z, Création d'annonces, Ménage hôtelier, Blanchisserie, Accueil 24/7, Maintenance.
  - Tarifs : Commission de 12% à 18% sur les revenus (Essentiel, Performance, Signature). Pas de frais fixes.
  - Secteurs : Corse (Calvi, Lumio, Sant'Ambroggio), Hérault, Savoie, Finistère Sud.
  - Avantages : Stratégie multi-plateformes (Airbnb, Booking), shooting photo pro, revenus garantis par l'optimisation.
  
  TON STYLE : Premium, professionnel, accueillant, concis.
  CONSIGNE : Si la question est trop précise, propose toujours un audit gratuit ou un rappel par un expert. Ne donne jamais de prix fixes sans préciser que c'est sur commission.
  SUPPORT TECHNIQUE : En cas de problème technique sur le site ou le chatbot, invite l'utilisateur à contacter Julian Gregoire au 07 82 31 22 06.`;

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('xiri_chat_history');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse chat history");
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('xiri_chat_history', JSON.stringify(messages));
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        const welcomeMessage: Message = {
          id: '1',
          type: 'bot',
          text: "Bonjour ! Je suis l'assistant Xiri. Comment puis-je vous aider aujourd'hui ? Je peux vous renseigner sur nos services de conciergerie ou nos tarifs.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([welcomeMessage]);
        setIsTyping(false);
      }, 1500);
    }
  }, [isOpen]);

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.PUBLIC_GEMINI_API_KEY;
      if (!apiKey || apiKey === 'YOUR_API_KEY') {
        throw new Error("API Key missing");
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const chat = model.startChat({
        history: messages.map(m => ({
          role: m.type === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }],
        })),
        generationConfig: {
          maxOutputTokens: 250,
        },
      });

      const result = await chat.sendMessage([
        { text: systemPrompt },
        { text: messageText }
      ]);
      const response = await result.response;
      const botText = response.text();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: botText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error("AI Error:", err);
      // Fallback
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: "Je rencontre une petite difficulté technique. Pour une assistance immédiate, vous pouvez contacter Julian Gregoire au 07 82 31 22 06. Sinon, laissez-moi vos coordonnées pour qu'un conseiller vous rappelle.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    } finally {
      setIsTyping(false);
    }
  };

  const clearHistory = () => {
    if (confirm("Voulez-vous effacer l'historique de la conversation ?")) {
      localStorage.removeItem('xiri_chat_history');
      setMessages([]);
    }
  };

  return (
    <>
      {/* Trigger Button handled in FloatingContact.astro but we expose the state here if needed */}
      <button 
        id="chatbot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="hidden" // Hidden trigger for DOM manipulation if needed, but we'll use a global event or prop
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 w-[350px] md:w-[400px] h-[550px] bg-white rounded-[24px] shadow-[0_20px_60px_-15px_rgba(27,43,68,0.3)] border border-xiri-navy/5 flex flex-col z-[100] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-xiri-navy p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden p-1.5 shadow-inner">
                  <img src={chatbotIcon.src} alt="Xiri AI" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold uppercase tracking-widest">Assistant XIRI</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">En ligne</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={clearHistory}
                  className="text-white/20 hover:text-white transition-colors p-2"
                  title="Effacer l'historique"
                >
                  <RotateCcw size={16} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/40 hover:text-white transition-colors p-2"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#F8FAFC]">
              {messages.length === 0 && !isTyping && (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6 opacity-60">
                  <div className="w-16 h-16 bg-xiri-navy/5 rounded-full flex items-center justify-center">
                    <MessageSquare size={32} className="text-xiri-navy/20" />
                  </div>
                  <p className="text-sm font-medium text-xiri-navy italic">
                    Posez votre première question pour démarrer l'assistance...
                  </p>
                </div>
              )}
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[14px] leading-relaxed shadow-sm ${
                    msg.type === 'user' 
                      ? 'bg-xiri-navy text-white rounded-br-none' 
                      : 'bg-white text-xiri-navy border border-xiri-navy/5 rounded-bl-none'
                  }`}>
                    {msg.text}
                    <div className={`text-[9px] mt-1 opacity-50 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-xiri-navy/5 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-xiri-gold rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-xiri-gold rounded-full animate-bounce [animation-delay:-0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-xiri-gold rounded-full animate-bounce [animation-delay:-0.4s]"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Sugestions */}
            <div className="px-5 py-3 bg-white border-t border-xiri-navy/5 overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSendMessage(s)}
                  className="px-4 py-2 bg-[#F8FAFC] border border-xiri-navy/5 rounded-full text-[11px] font-bold text-xiri-navy/70 hover:bg-xiri-gold hover:text-white hover:border-xiri-gold transition-all"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-xiri-navy/5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Écrivez votre message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="w-full bg-[#F8FAFC] border border-xiri-navy/10 py-3.5 pl-4 pr-12 rounded-xl outline-none focus:border-xiri-gold transition-all text-sm text-xiri-navy placeholder:text-xiri-navy/30"
                />
                <button 
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-xiri-navy text-white rounded-lg flex items-center justify-center hover:bg-xiri-gold transition-colors disabled:opacity-20"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-[9px] text-center mt-3 text-xiri-navy/40 uppercase tracking-widest font-bold">
                Xiri Management & Conciergerie
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual trigger button that will be exported to FloatingContact */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 md:w-16 md:h-16 bg-white border border-xiri-navy/5 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group ${isOpen ? 'ring-4 ring-xiri-gold/20' : ''}`}
        aria-label="Ouvrir le chat"
      >
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-full p-2">
           <img src={chatbotIcon.src} alt="ChatBot" className={`w-full h-full object-contain transition-transform duration-500 ${isOpen ? 'scale-110' : 'scale-100'}`} />
           <div className="absolute inset-0 bg-xiri-navy/0 group-hover:bg-xiri-navy/5 transition-colors"></div>
        </div>
        {!isOpen && (
           <div className="absolute -top-1 -right-1 w-5 h-5 bg-xiri-gold text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white animate-bounce">
             1
           </div>
        )}
      </button>
    </>
  );
};

export default ChatBot;
