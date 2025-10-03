import React, { useState, useEffect, useRef } from 'react';

// Define the structure for a message
interface Message {
    text: string;
    sender: 'user' | 'bot';
}

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [userInput, setUserInput] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([
        { text: "Welcome to DarshanX! How can I assist you?", sender: 'bot' }
    ]);

    const chatMessagesRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to the latest message
    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]);

    const getBotResponse = (userMessage: string): string => {
        const msg = userMessage.toLowerCase();
        if (msg.includes('hello') || msg.includes('hi')) return "Hello! Ask me about monasteries, VR, or our 'Time Travel' feature.";
        if (msg.includes('monasteries')) return "We feature over 25 historic monasteries, including Rumtek and Pemayangtse. Which would you like to know about?";
        if (msg.includes('vr')) return "Our 360° VR technology lets you virtually explore the monasteries. Just click on a location to begin!";
        if (msg.includes('time travel')) return "The 'Time Travel' feature shows you historical photos and information about the sites.";
        return "I'm not sure how to answer that. You can ask about 'monasteries', 'VR', or 'time travel'.";
    };

    const handleSendMessage = () => {
        if (userInput.trim() === '') return;

        const userMessage: Message = { text: userInput, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);

        const botResponseText = getBotResponse(userInput);
        const botMessage: Message = { text: botResponseText, sender: 'bot' };

        setTimeout(() => {
            setMessages(prev => [...prev, botMessage]);
        }, 500);

        setUserInput('');
    };

    return (
        // Main container uses fixed positioning
        <div className="fixed bottom-[30px] right-[30px] z-[1000]">
            {/* Chat Window */}
            <div
                className={`w-[350px] max-h-[500px] bg-slate-800 rounded-xl shadow-2xl flex flex-col absolute bottom-20 right-0 transition-all duration-300 ease-out
                ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-5 invisible'}`}
            >
                {/* Chat Header */}
                <div className="bg-slate-700 text-slate-100 p-4 flex justify-between items-center rounded-t-xl border-b border-slate-600">
                    <h3 className="font-semibold text-lg">DarshanX Guide</h3>
                    <button onClick={() => setIsOpen(false)} className="text-2xl hover:text-slate-300">&times;</button>
                </div>

                {/* Messages Body */}
                <div ref={chatMessagesRef} className="flex-grow p-5 overflow-y-auto">
                    <div className="flex flex-col space-y-3">
                        {messages.map((msg, index) => (
                            <div key={index} className={`py-2 px-4 rounded-2xl max-w-[80%] break-words
                                ${msg.sender === 'user'
                                    ? 'bg-purple-600 text-white self-end rounded-br-lg'
                                    : 'bg-slate-600 text-slate-200 self-start rounded-bl-lg'
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Input Footer */}
                <div className="p-4 border-t border-slate-600">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Ask a question..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            className="flex-grow bg-slate-700 text-slate-100 rounded-full border-none py-2 px-4 mr-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="bg-purple-600 text-white font-bold rounded-full py-2 px-5 cursor-pointer transition-colors hover:bg-purple-700 disabled:opacity-50"
                            disabled={!userInput.trim()}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>

            {/* Launcher Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-[60px] h-[60px] bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
                aria-label="Toggle chat"
            >
                {/* Conditionally render an icon based on the open state */}
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                )}
            </button>
        </div>
    );
};