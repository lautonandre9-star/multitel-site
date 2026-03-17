import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { useTranslation } from '../../src/i18n/i18n';

const VirtualAssistant: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { 
      role: 'assistant', 
      content: t.vaWelcome 
    }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const newMessages = [...messages, { role: 'user' as const, content: text }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { 
              role: 'system', 
              content: `Você é o Assistente Virtual da Multitel, uma das maiores empresas de telecomunicações de Angola. 
              Sua personalidade: Profissional, prestativo, moderno e focado em soluções.
              Domínio: Internet Fibra Óptica, Micro-onda, VSAT, Cloud, Data Center, Cybersecurity e Soluções B2C (Home).
              Regra: Responda sempre em Português de Angola, de forma concisa e amigável. Se não souber algo, peça para o usuário contatar a Linha Comercial: +244 222 704 200.` 
            },
            ...newMessages
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      const data = await response.json();
      const assistantMessage = data.choices[0].message.content;
      setMessages([...newMessages, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages([...newMessages, { role: 'assistant', content: t.vaError }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestion = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Tooltip */}
      {showTooltip && !isOpen && (
        <div className="mb-4 bg-white px-4 py-2 rounded-xl shadow-2xl border border-blue-100 animate-bounce relative group">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1 -right-1 bg-slate-200 rounded-full p-0.5 hover:bg-slate-300 transition-colors"
          >
            <X size={10} className="text-slate-600" />
          </button>
          <p className="text-sm font-bold text-blue-900 pr-2">{t.vaPrompt}</p>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-blue-100 rotate-45"></div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-[0_20px_50px_rgba(30,168,240,0.3)] border border-blue-100 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-sm uppercase tracking-wider leading-none">{t.vaTitle}</h4>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold text-blue-100 uppercase tracking-widest">{t.onlineNow}</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-lg transition-all">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-80 p-4 bg-slate-50 overflow-y-auto space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1 ${msg.role === 'assistant' ? 'bg-blue-100' : 'bg-slate-200'}`}>
                  {msg.role === 'assistant' ? (
                    <Bot size={16} className="text-blue-600" />
                  ) : (
                    <div className="text-[10px] font-bold text-slate-600">{t.vaYou}</div>
                  )}
                </div>
                <div className={`p-3 rounded-2xl shadow-sm border max-w-[80%] ${
                  msg.role === 'assistant' 
                    ? 'bg-white rounded-tl-none border-slate-100 text-slate-700' 
                    : 'bg-blue-600 rounded-tr-none border-blue-500 text-white'
                }`}>
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3 animate-pulse">
                <div className="w-8 h-8 bg-blue-50 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Bot size={16} className="text-blue-400" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              </div>
            )}

            {messages.length === 1 && !isLoading && (
              <div className="flex flex-col gap-2 mt-4 ml-11">
                {[t.vaSolution1, t.vaSolution2, t.vaSolution3].map((s) => (
                  <button 
                    key={s}
                    onClick={() => handleSuggestion(s)}
                    className="text-xs font-bold text-blue-600 bg-blue-50 py-2.5 px-4 rounded-xl border border-blue-200 hover:bg-blue-600 hover:text-white transition-all text-left shadow-sm hover:shadow-md"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer Input */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); }}
            className="p-4 bg-white border-t border-slate-100 flex items-center gap-2"
          >
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.vaPlaceholder} 
              className="flex-grow text-sm bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="disabled:opacity-50 disabled:scale-100 bg-blue-600 text-white p-3 rounded-xl hover:shadow-lg hover:shadow-blue-600/30 transition-all active:scale-95"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(30,168,240,0.4)] transition-all duration-500 hover:scale-110 active:scale-95 group ${
          isOpen ? 'bg-slate-900 border-2 border-slate-800' : 'bg-gradient-to-br from-blue-600 to-blue-700'
        }`}
      >
        {isOpen ? (
          <X className="text-white w-7 h-7" />
        ) : (
          <>
            <MessageSquare className="text-white w-7 h-7 group-hover:rotate-12 transition-transform" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-4 border-white rounded-full"></div>
          </>
        )}
      </button>
    </div>
  );
};

export default VirtualAssistant;
