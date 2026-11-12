import React, { useState } from 'react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi! 👋 I am your ResourceRescue AI Assistant. Ask me about donating items, claiming surplus resources, or tracking your eco-impact!'
    }
  ]);

  // Smart rule-based & keyword AI responses tailored to ResourceRescue
  const generateAIResponse = (userText) => {
    const query = userText.toLowerCase();

    if (query.includes('donate') || query.includes('add') || query.includes('give')) {
      return 'To donate surplus items, click on "Add Resource" in the navigation bar. Fill in the item category, quantity, and pickup location so local communities can claim it!';
    }
    if (query.includes('find') || query.includes('search') || query.includes('claim') || query.includes('food')) {
      return 'Head over to the "Search Resources" page! You can filter available surplus food, electronics, and furniture by category or location and click "Claim" on any available item.';
    }
    if (query.includes('impact') || query.includes('co2') || query.includes('save') || query.includes('stats')) {
      return 'Every rescued item reduces landfill waste! Check the "Impact Dashboard" to see real-time metrics on total kilograms saved, meals rescued, and CO₂ emissions prevented.';
    }
    if (query.includes('hello') || query.includes('hi') || query.includes('hey')) {
      return 'Hello! How can I help you rescue or share resources today? 🌱';
    }
    return 'Great question! You can explore live listings on the Search page, post surplus items via Add Resource, or view community sustainability metrics on your Dashboard.';
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const botReply = { sender: 'bot', text: generateAIResponse(input) };

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput('');
  };

  return (
    <div className="ai-widget-container">
      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <span>🌿 ResourceRescue AI</span>
            <button onClick={() => setIsOpen(false)} className="ai-close-btn">✕</button>
          </div>

          <div className="ai-chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`ai-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="ai-chat-input-area">
            <input
              type="text"
              placeholder="Ask Eco-Assistant..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        className="ai-floating-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Ask ResourceRescue AI"
      >
        {isOpen ? '✕' : '🤖 AI Help'}
      </button>
    </div>
  );
};

export default AIAssistant;