"use client";
import React, { useState } from "react";

const DeepSeekWidget = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ user: string; bot: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;
    
    setIsLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (data.error) {
        setChat([...chat, { user: message, bot: `Error: ${data.error}` }]);
      } else {
        setChat([...chat, { user: message, bot: data.reply }]);
      }
    } catch (error) {
      setChat([...chat, { user: message, bot: "Failed to get response from AI" }]);
    } finally {
      setIsLoading(false);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="p-4 border rounded-lg h-[600px] w-full max-w-md mx-auto flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4 text-indigo-700">DeepSeek Chat</h2>
      
      <div className="flex-1 overflow-y-auto mb-4 p-2 bg-white rounded-lg shadow-inner">
        {chat.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            Start a conversation with DeepSeek AI!
          </div>
        ) : (
          chat.map((c, idx) => (
            <div key={idx} className="mb-3">
              <p className="font-semibold text-indigo-600">You: {c.user}</p>
              <p className="text-gray-700 mt-1 ml-2">AI: {c.bot}</p>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-center my-2">
            <div className="animate-pulse text-gray-500">Thinking...</div>
          </div>
        )}
      </div>
      
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 border p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading}
          className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default DeepSeekWidget;