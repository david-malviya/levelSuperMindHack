import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { MdSend } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import './chatbot.css';
import asset from "../../assets/bot2.avif";

export default function LangflowChat() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = { role: "user", content: message };
    setConversation((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:3000/api/message", { message });
      const botResponse = {
        role: "bot",
        content: response.data || "",
      };
      setConversation((prev) => [...prev, botResponse]);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderMarkdown = (content) => {
    return (
      <ReactMarkdown
        className="prose prose-invert custom-markdown-table"
        children={content}
        remarkPlugins={[remarkGfm]}
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a2a]">
      {/* Stars Background */}
      <div className="fixed inset-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <nav className="relative z-10 border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 flex items-center"
            >
              <HiArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8 relative z-10">
        <div className="bg-[#2a2a6a]/30 rounded-lg shadow-xl p-6 min-h-[80vh] max-h-[80vh] flex flex-col backdrop-blur-sm border border-purple-500/20">
          <div className="flex-1 mb-6 bg-[#0a0a2a]/50 rounded-lg p-4 overflow-y-scroll custom-scrollbar">
            {conversation.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
                <img
                  src={asset}
                  alt="Bot Logo"
                  className="h-16 w-16 object-cover bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-1"
                />
                <p className="text-lg">Ask me about your cosmic journey...</p>
              </div>
            ) : (
              <div className="space-y-4">
                {conversation.map((entry, index) => (
                  <div
                    key={index}
                    className={`flex ${entry.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] p-4 rounded-lg backdrop-blur-sm ${
                        entry.role === "user"
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          : "bg-[#2a2a6a]/50 text-gray-300 border border-purple-500/20"
                      }`}
                    >
                      <div className="flex gap-2 items-center mb-2">
                        {entry.role === "bot" && (
                          <img
                            src={asset}
                            alt="Bot Logo"
                            className="h-8 w-8 object-cover bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-0.5"
                          />
                        )}
                        <span className="font-medium">
                          {entry.role === "user" ? "You" : "Cosmic Guide"}
                        </span>
                      </div>
                      {renderMarkdown(entry.content)}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-[#2a2a6a]/50 p-4 rounded-lg text-gray-400 flex items-center gap-4 border border-purple-500/20">
                      <img
                        src={asset}
                        alt="Bot Logo"
                        className="h-8 w-8 object-cover bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-0.5"
                      />
                      <div className="space-y-2">
                        <div className="h-3 w-24 bg-purple-600/50 rounded animate-pulse"></div>
                        <div className="h-3 w-16 bg-purple-600/50 rounded animate-pulse"></div>
                        <div className="h-3 w-20 bg-purple-600/50 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={scrollRef}></div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about your cosmic journey..."
              className="flex-1 bg-[#2a2a6a]/50 text-white rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-500/20 placeholder-gray-400"
            />
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 rounded-full text-white flex items-center ${
                loading
                  ? "bg-gradient-to-r from-purple-600/50 to-pink-600/50 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
              }`}
            >
              <MdSend className="h-5 w-5 mr-2" />
              {loading ? "Reading stars..." : "Ask"}
            </button>
          </form>
          {error && (
            <div className="text-red-400 text-center mt-4 bg-red-900/20 py-2 px-4 rounded-full border border-red-500/20">
              {error}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}