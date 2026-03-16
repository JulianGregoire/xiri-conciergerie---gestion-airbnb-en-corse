import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Send, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let botText = "C'est une excellente question. Pour vous donner une réponse précise adaptée à votre bien, je vous invite à demander un audit gratuit via notre formulaire de contact ou à nous appeler directement.";
      
      const lowerInput = inputValue.toLowerCase();
      if (lowerInput.includes('tarif') || lowerInput.includes('prix') || lowerInput.includes('combien')) {
        botText = "Nos tarifs sont basés sur une commission de 12% à 18% selon le pack choisi (Essentiel, Performance ou Signature), uniquement sur les revenus générés. Il n'y a aucun frais fixe !";
      } else if (lowerInput.includes('service') || lowerInput.includes('faites quoi')) {
        botText = "Nous gérons tout de A à Z : création d'annonces optimisées, shooting photo pro, gestion des réservations, accueil voyageurs, ménage hôtelier, linge de maison et maintenance.";
      } else if (lowerInput.includes('corse') || lowerInput.includes('ajaccio') || lowerInput.includes('porto-vecchio')) {
        botText = "Nous avons une présence forte en Corse ! Nous gérons des propriétés d'exception sur toute l'île. Voulez-vous qu'un expert local vous rappelle ?";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: botText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 2000);
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
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Sparkles size={20} className="text-xiri-gold" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold uppercase tracking-widest">Assistant XIRI</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">En ligne</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#F8FAFC]">
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
                  onClick={handleSendMessage}
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
        className={`fixed bottom-6 right-28 md:right-32 z-50 w-14 h-14 md:w-16 md:h-16 bg-white border border-xiri-navy/5 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group ${isOpen ? 'ring-4 ring-xiri-gold/20' : ''}`}
        aria-label="Ouvrir le chat"
      >
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-full">
           <img src="/src/images/chatbot.png" alt="ChatBot" className={`w-30 h-30 object-cover transition-transform duration-500 ${isOpen ? 'scale-110' : 'scale-100'}`} />
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
