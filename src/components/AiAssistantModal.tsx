"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, Terminal, User } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KNOWLEDGE_BASE: Record<string, string> = {
  about: "Sammi Azaz is a Full Stack Developer and Computer Science undergraduate at IILM University, Greater Noida (Class of 2027) based in Delhi, India. He specializes in building responsive React.js applications, scalable Node.js/Express.js REST APIs, and applied machine learning pipelines.",
  projects: "Top projects include:\n1. TripNest — Full Stack AI Travel Planning Platform with React.js, Node.js, Express.js, MongoDB, and REST APIs.\n2. Human Heart Disease Prediction System — Machine learning classification pipeline using Logistic Regression, Random Forest, SMOTE, and Pandas.\n3. Network Intrusion Detection System — Real-time cybersecurity anomaly detection pipeline.\n4. Movie Recommendation Engine — Content-based filtering NLP system.",
  experience: "Sammi served as a Web Developer Intern at Prodigy Infotech (Jun 2025 – Jul 2025, Remote), developing 3+ responsive web applications, optimizing cross-browser compatibility, and managing cloud deployments.",
  cp: "Sammi is an active competitive programmer with 895+ solved algorithmic problems across platforms. Peak LeetCode rating: 1950 (Top 3%), CodeChef: 1840 (4-Star), and Top 5 Institute Rank on GeeksforGeeks.",
  contact: "You can reach Sammi via email at sammiazaz2005@gmail.com, phone at +91-8102842575, LinkedIn at linkedin.com/in/sammiazazse, or explore his GitHub at github.com/sammiazaz.",
};

const SUGGESTIONS = [
  { label: "Who is Sammi Azaz?", key: "about" },
  { label: "What are his top projects?", key: "projects" },
  { label: "Internships & experience?", key: "experience" },
  { label: "Competitive programming stats?", key: "cp" },
  { label: "How to contact him?", key: "contact" },
];

export default function AiAssistantModal({ isOpen, onClose }: AiAssistantModalProps) {
  const { theme } = useTheme();
  const isCyanPill = theme === 'cyan-pill';
  const accentColor = isCyanPill ? '#06B6D4' : '#EF4444';

  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string }>>([
    {
      sender: 'ai',
      text: "Hi! I'm Sammi's AI Portfolio Assistant. Ask me anything about Sammi's skills, projects, background, or coding telemetry!",
    },
  ]);
  const [input, setInput] = useState('');

  const handleAsk = (queryKey?: string, customText?: string) => {
    const qText = customText || (queryKey ? SUGGESTIONS.find(s => s.key === queryKey)?.label : input);
    if (!qText?.trim()) return;

    const userMsg = { sender: 'user' as const, text: qText };
    let replyText = "I'm trained on Sammi's portfolio data! Check out his Projects, Persona, and Skills tabs for verified telemetry.";

    if (queryKey && KNOWLEDGE_BASE[queryKey]) {
      replyText = KNOWLEDGE_BASE[queryKey];
    } else {
      const lower = qText.toLowerCase();
      if (lower.includes('project') || lower.includes('work') || lower.includes('build')) {
        replyText = KNOWLEDGE_BASE.projects;
      } else if (lower.includes('cp') || lower.includes('contest') || lower.includes('leetcode') || lower.includes('rating') || lower.includes('codechef')) {
        replyText = KNOWLEDGE_BASE.cp;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('reach')) {
        replyText = KNOWLEDGE_BASE.contact;
      } else if (lower.includes('who') || lower.includes('about') || lower.includes('sammi') || lower.includes('college')) {
        replyText = KNOWLEDGE_BASE.about;
      }
    }

    setMessages(prev => [...prev, userMsg, { sender: 'ai', text: replyText }]);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-xl overflow-hidden border border-white/10 bg-[#111111]/95 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex flex-col max-h-[85vh]"
            style={{ borderRadius: isCyanPill ? '24px' : '16px' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 flex items-center justify-center shadow-lg"
                  style={{
                    borderRadius: isCyanPill ? '9999px' : '10px',
                    backgroundColor: `${accentColor}20`,
                    border: `1px solid ${accentColor}50`,
                  }}
                >
                  <Sparkles size={18} style={{ color: accentColor }} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    Sammi AI Copilot
                    <span className="text-[10px] px-2 py-0.5 font-mono text-zinc-400 bg-white/5 border border-white/10 rounded-full">
                      v2.4
                    </span>
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online • Portfolio Telemetry</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Quick Suggestions Chips */}
            <div className="px-6 py-3 border-b border-white/5 bg-black/30 flex items-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 whitespace-nowrap">
                Ask:
              </span>
              {SUGGESTIONS.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleAsk(item.key)}
                  className="px-3 py-1 text-[11px] font-medium text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors whitespace-nowrap cursor-pointer"
                  style={{ borderRadius: isCyanPill ? '9999px' : '8px' }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 max-h-[380px]">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.sender === 'ai' && (
                    <div
                      className="w-7 h-7 flex-shrink-0 flex items-center justify-center mt-0.5"
                      style={{
                        borderRadius: isCyanPill ? '9999px' : '6px',
                        backgroundColor: `${accentColor}15`,
                        color: accentColor,
                      }}
                    >
                      <Bot size={15} />
                    </div>
                  )}

                  <div
                    className={`px-4 py-3 text-xs leading-relaxed max-w-[85%] whitespace-pre-line ${
                      m.sender === 'user'
                        ? 'bg-zinc-800 text-white font-medium border border-white/10'
                        : 'bg-white/[0.03] text-zinc-300 border border-white/8'
                    }`}
                    style={{ borderRadius: isCyanPill ? '16px' : '10px' }}
                  >
                    {m.text}
                  </div>

                  {m.sender === 'user' && (
                    <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center mt-0.5 bg-zinc-800 rounded-full text-zinc-300 border border-white/10">
                      <User size={13} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-4 border-t border-white/10 bg-black/40">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAsk(undefined, input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question about Sammi..."
                  className="flex-1 px-4 py-2.5 text-xs text-white bg-zinc-900/90 border border-white/10 focus:outline-none focus:border-zinc-500 placeholder-zinc-500 transition-colors"
                  style={{ borderRadius: isCyanPill ? '9999px' : '10px' }}
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="px-4 py-2.5 text-xs font-bold text-black transition-all flex items-center gap-1.5 disabled:opacity-40 cursor-pointer"
                  style={{
                    borderRadius: isCyanPill ? '9999px' : '10px',
                    backgroundColor: accentColor,
                    color: '#000000',
                  }}
                >
                  <Send size={13} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
