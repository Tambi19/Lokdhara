import React, { useState, useEffect, useRef } from 'react';

// Define the structure for a message
interface Message {
  text: string;
  sender: 'user' | 'bot';
}

// New: Define a structure for suggestions
interface Suggestion {
  text: string;
  payload: string;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    { text: "Welcome to Sanskriti-X ! I am your heritage guide. How can I assist you?", sender: 'bot' }
  ]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const chatMessagesRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getBotResponse = (userMessage: string): { text: string; suggestions?: Suggestion[] } => {
    const msg = userMessage.toLowerCase();
    if (msg.includes('hello') || msg.includes('hi')) {
      return {
        text: "Hello! I can tell you about our heritage sites, the 'Time Travel' feature, or our AR view.",
        suggestions: [
          { text: 'Explore Heritage Sites', payload: 'Heritage Sites' },
          { text: 'What is Time Travel?', payload: 'time travel' },
          { text: 'Tell me about AR', payload: 'AR view' },
        ],
      };
    }
    if (msg.includes('heritage sites')) {
      return { text: "We feature over 50+ historic Heritage Sites, including the Konark Sun Temple and Jagannath Temple. Which would you like to know more about?" };
    }
    if (msg.includes('ar view')) {
        return { text: "Our AR View technology brings history to life! Point your camera at supported sites to see digital overlays and information right on your screen." };
    }
    if (msg.includes('time travel')) {
      return { text: "The 'Time Travel' feature is a unique slider that lets you see how these magnificent sites looked in the past. It's like stepping back in time!" };
    }
    return { text: "I'm sorry, I'm not sure how to answer that. You can ask me about 'Heritage Sites', 'AR View', or 'Time Travel'." };
  };

  const handleSendMessage = (text = userInput) => {
    if (text.trim() === '') return;

    const userMessage: Message = { text, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    setIsTyping(true);
    const { text: botResponseText, suggestions } = getBotResponse(text);
    const botMessage: Message = { text: botResponseText, sender: 'bot' };

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, botMessage]);
       if (suggestions) {
            console.log(suggestions);
       }
    }, 1200);

    setUserInput('');
  };

  const handleSuggestionClick = (payload: string) => {
    handleSendMessage(payload);
  };

  return (
    <div className="fixed bottom-[20px] right-[20px] z-[1000] font-sans">
      {/* Chat Window */}
      <div
        // Updated: Increased size for better visibility
        className={`w-[360px] h-[560px] bg-[#2C2A3A] bg-[url('/parchment-texture.png')] bg-blend-overlay bg-opacity-80 rounded-2xl shadow-2xl flex flex-col
          absolute bottom-[85px] right-0 transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 transform translate-y-0 visible' : 'opacity-0 transform translate-y-4 invisible'}`}
      >
        {/* Chat Header */}
        <div className="bg-[#4D4A6A]/50 text-white p-4 flex justify-between items-center rounded-t-2xl border-b border-white/10 shadow-md">
          {/* Updated: Larger font size to match the new window size */}
          <h3 className="font-roboto font-bold text-2xl">Sanskriti X</h3>
          <button onClick={() => setIsOpen(false)} className="text-3xl text-white/70 hover:text-white transition-colors">&times;</button>
        </div>

        {/* Messages Body */}
        <div ref={chatMessagesRef} className="flex-grow p-5 overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`py-2.5 px-4 rounded-xl max-w-[85%] break-words shadow-sm
                ${msg.sender === 'user'
                  ? 'bg-[#8A63D2] text-white self-end rounded-br-none'
                  : 'bg-[#F5F1E9] text-[#4A4A4A] self-start rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="self-start flex items-center space-x-1.5 py-2 px-4 rounded-xl bg-[#F5F1E9]">
                  <span className="w-2 h-2 bg-[#9B9B9B] rounded-full animate-bounce delay-0"></span>
                  <span className="w-2 h-2 bg-[#9B9B9B] rounded-full animate-bounce delay-150"></span>
                  <span className="w-2 h-2 bg-[#9B9B9B] rounded-full animate-bounce delay-300"></span>
              </div>
            )}
          </div>
        </div>

        {/* Suggestion Chips */}
        {getBotResponse(messages[messages.length - 1]?.text)?.suggestions && !isTyping && (
            <div className="px-4 py-3 flex flex-wrap gap-2 border-t border-white/10">
                {getBotResponse(messages[messages.length - 1].text).suggestions?.map((s, i) => (
                    <button key={i} onClick={() => handleSuggestionClick(s.payload)}
                        className="text-sm border border-[#8A63D2] text-[#8A63D2] rounded-full px-3 py-1 hover:bg-[#8A63D2] hover:text-white transition-colors">
                        {s.text}
                    </button>
                ))}
            </div>
        )}

        {/* Input Footer */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Ask a question..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-grow bg-white/10 text-white rounded-full border-none py-3 px-5 mr-3 focus:outline-none focus:ring-2 focus:ring-[#8A63D2]"
            />
            <button
              onClick={() => handleSendMessage()}
              className="bg-[#8A63D2] text-white rounded-full p-3 transition-all hover:bg-[#7a58b5] disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!userInput.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[65px] h-[65px] bg-gradient-to-br from-[#A885E2] to-[#8A63D2] text-white rounded-full flex justify-center items-center cursor-pointer shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out"
        aria-label="Toggle chat"
      >
        {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
            // Updated: The new Namaste icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 12.75c1.285 0 2.427-.693 3-1.75h-6c.573 1.057 1.715 1.75 3 1.75z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a8.25 8.25 0 005.75-2.438v-2.812c0-.55-.45-1-1-1H7.25c-.55 0-1 .45-1 1v2.812A8.25 8.25 0 0012 21zm0 0a8.25 8.25 0 01-5.75-2.438" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.556 0-8.25 3.694-8.25 8.25 0 1.562.438 3.021 1.227 4.295V14.25h14.046v.295c.789-1.274 1.227-2.733 1.227-4.295C20.25 6.694 16.556 3 12 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5v-1.5c0-.414.336-.75.75-.75h4.5c.414 0 .75.336.75.75v1.5" />
            </svg>
        )}
      </button>
    </div>
  );
};