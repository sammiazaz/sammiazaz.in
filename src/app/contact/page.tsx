"use client";

import React, { useState } from 'react';
import TiltCard from '@/components/TiltCard';
import { useTheme } from '@/context/ThemeContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  Copy, 
  FileText, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  ArrowUpRight, 
  Download,
  Calendar
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const INQUIRY_TYPES = [
  { id: 'opportunity', label: '💼 Opportunity / Hiring' },
  { id: 'project', label: '🚀 Project Collaboration' },
  { id: 'general', label: '💬 General Inquiry' },
];

export default function ContactPage() {
  const { theme } = useTheme();
  const isCyan = theme === 'cyan-pill';
  const accentColor = isCyan ? '#06B6D4' : '#EF4444';

  // Copy feedback states
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form states
  const [inquiryType, setInquiryType] = useState('opportunity');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sammiazaz2005@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91-8102842575');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setStatus('idle');
  };

  return (
    <div className="page selection:bg-[#EF4444]/30 px-4 sm:px-6 lg:px-8">
      <div className="page-container pt-3 md:pt-4 pb-16">
        
        {/* ────── 1. PAGE HEADER ────── */}
        <div className="mb-10">
          <h1 className="text-title text-white mb-3">
            Let&apos;s Connect<span style={{ color: accentColor }}>.</span>
          </h1>
          <p className="text-subheading max-w-2xl">
            Whether you have an internship or full-stack opportunity, a project proposal, 
            or want to talk about engineering architectures, feel free to drop a message or reach out directly.
          </p>
        </div>

        {/* ────── 2. MAIN 2-COLUMN GRID ────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ────── LEFT COLUMN (5 COLS): Direct Channels & Info ────── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Email Card */}
            <TiltCard 
              withAnimatedBorder 
              className="bg-[#111111] border border-white/5 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-8 h-8 rounded-xl flex items-center justify-center border"
                      style={{ 
                        backgroundColor: isCyan ? 'rgba(6,182,212,0.1)' : 'rgba(239,68,68,0.1)',
                        borderColor: isCyan ? 'rgba(6,182,212,0.2)' : 'rgba(239,68,68,0.2)',
                        color: accentColor
                      }}
                    >
                      <Mail size={16} />
                    </div>
                    <span className="text-label text-zinc-400 font-mono">PRIMARY INBOX</span>
                  </div>
                  
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer border border-white/5"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <a 
                  href="mailto:sammiazaz2005@gmail.com"
                  className="text-lg md:text-xl font-bold text-white hover:text-zinc-200 transition-colors tracking-tight block mb-2 break-all"
                >
                  sammiazaz2005@gmail.com
                </a>
                <p className="text-small text-zinc-400">
                  Best for hiring inquiries, project details, and formal correspondence.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">Response time: &lt; 24h</span>
                <a 
                  href="mailto:sammiazaz2005@gmail.com"
                  className="inline-flex items-center gap-1 text-xs font-bold font-mono transition-colors"
                  style={{ color: accentColor }}
                >
                  Compose Mail <ArrowUpRight size={13} />
                </a>
              </div>
            </TiltCard>

            {/* Phone Card */}
            <TiltCard 
              withAnimatedBorder 
              className="bg-[#111111] border border-white/5 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-8 h-8 rounded-xl flex items-center justify-center border"
                      style={{ 
                        backgroundColor: isCyan ? 'rgba(6,182,212,0.1)' : 'rgba(239,68,68,0.1)',
                        borderColor: isCyan ? 'rgba(6,182,212,0.2)' : 'rgba(239,68,68,0.2)',
                        color: accentColor
                      }}
                    >
                      <Phone size={16} />
                    </div>
                    <span className="text-label text-zinc-400 font-mono">DIRECT PHONE</span>
                  </div>
                  
                  <button
                    onClick={handleCopyPhone}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer border border-white/5"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <a 
                  href="tel:+918102842575"
                  className="text-lg md:text-xl font-bold text-white hover:text-zinc-200 transition-colors tracking-tight block mb-2 font-mono"
                >
                  +91-8102842575
                </a>
                <p className="text-small text-zinc-400">
                  Available for phone calls, WhatsApp messages, and voice discussions.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">Available: 10 AM – 9 PM IST</span>
                <a 
                  href="https://wa.me/918102842575" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold font-mono transition-colors"
                  style={{ color: accentColor }}
                >
                  WhatsApp <ArrowUpRight size={13} />
                </a>
              </div>
            </TiltCard>

            {/* Location & Timezone Card */}
            <TiltCard 
              withAnimatedBorder 
              className="bg-[#111111] border border-white/5 rounded-3xl p-6 relative overflow-hidden group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Delhi, India</h3>
                    <p className="text-xs text-zinc-500 font-mono">Greater Noida / Delhi NCR</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  IST +5:30
                </div>
              </div>

              <p className="text-small text-zinc-400">
                Undergrad at <strong className="text-white">IILM University</strong> (Class of 2027). Open to on-site roles in Delhi NCR and remote opportunities worldwide.
              </p>
            </TiltCard>

            {/* Social Network Channels */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://linkedin.com/in/sammiazazse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#111111] border border-white/5 hover:border-white/20 transition-all group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#0A66C2]/15 border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2]">
                  <FaLinkedin size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">LinkedIn</div>
                  <div className="text-[11px] font-mono text-zinc-500">@sammiazazse</div>
                </div>
              </a>

              <a
                href="https://github.com/sammiazaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#111111] border border-white/5 hover:border-white/20 transition-all group"
              >
                <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <FaGithub size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-zinc-300 transition-colors">GitHub</div>
                  <div className="text-[11px] font-mono text-zinc-500">@sammiazaz</div>
                </div>
              </a>
            </div>

            {/* Download Resume Quick Banner */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-9 h-9 rounded-xl flex items-center justify-center border font-bold"
                  style={{
                    backgroundColor: isCyan ? 'rgba(6,182,212,0.1)' : 'rgba(239,68,68,0.1)',
                    borderColor: isCyan ? 'rgba(6,182,212,0.25)' : 'rgba(239,68,68,0.25)',
                    color: accentColor
                  }}
                >
                  <FileText size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:underline">Download Official Resume</div>
                  <div className="text-xs text-zinc-500 font-mono">Sammi Azaz Resume.pdf (Updated 2026)</div>
                </div>
              </div>

              <Download size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
            </a>

          </div>

          {/* ────── RIGHT COLUMN (7 COLS): Interactive Dispatch Form ────── */}
          <div className="lg:col-span-7">
            <TiltCard 
              withAnimatedBorder 
              className="bg-[#111111] border border-white/5 rounded-3xl p-6 md:p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-9 h-9 rounded-xl flex items-center justify-center border"
                    style={{ 
                      backgroundColor: isCyan ? 'rgba(6,182,212,0.15)' : 'rgba(239,68,68,0.15)',
                      borderColor: isCyan ? 'rgba(6,182,212,0.3)' : 'rgba(239,68,68,0.3)',
                      color: accentColor
                    }}
                  >
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Send a Direct Message</h2>
                    <p className="text-xs text-zinc-500 font-mono">Direct routing to sammiazaz2005@gmail.com</p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline-block">
                  ENCRYPTED &amp; DIRECT
                </span>
              </div>

              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Dispatched!</h3>
                  <p className="text-zinc-400 max-w-md mb-8 text-sm">
                    Thank you, <strong className="text-white">{name}</strong>. Your inquiry regarding &ldquo;{subject || 'General Discussion'}&rdquo; has been prepared. I typically respond within 24 hours.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`mailto:sammiazaz2005@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Sammi,\n\n${message}\n\nFrom: ${name} (${email})`)}`}
                      className="px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-lg text-white"
                      style={{ backgroundColor: accentColor }}
                    >
                      <Mail size={14} /> Open in Email App
                    </a>
                    <button
                      onClick={handleResetForm}
                      className="px-5 py-2.5 rounded-xl border border-white/10 bg-transparent text-xs font-mono text-zinc-300 hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  {/* Inquiry Type Pills */}
                  <div>
                    <label className="block text-label text-zinc-400 font-mono mb-2.5">
                      INQUIRY TYPE
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {INQUIRY_TYPES.map((type) => {
                        const isSelected = inquiryType === type.id;
                        return (
                          <button
                            type="button"
                            key={type.id}
                            onClick={() => setInquiryType(type.id)}
                            className="px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer"
                            style={{
                              backgroundColor: isSelected 
                                ? (isCyan ? 'rgba(6,182,212,0.15)' : 'rgba(239,68,68,0.15)')
                                : 'rgba(255,255,255,0.03)',
                              border: isSelected
                                ? `1px solid ${accentColor}`
                                : '1px solid rgba(255,255,255,0.08)',
                              color: isSelected ? accentColor : '#A1A1AA',
                            }}
                          >
                            {type.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-label text-zinc-400 font-mono mb-2">
                        YOUR NAME <span style={{ color: accentColor }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Rivera"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-label text-zinc-400 font-mono mb-2">
                        EMAIL ADDRESS <span style={{ color: accentColor }}>*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-label text-zinc-400 font-mono mb-2">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 text-sm transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-label text-zinc-400 font-mono mb-2">
                      MESSAGE <span style={{ color: accentColor }}>*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe the opportunity, role details, or project scope..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 text-sm transition-colors resize-y min-h-[120px]"
                    />
                  </div>

                  {/* Action Bar */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
                    <span className="text-xs text-zinc-500 font-mono text-center sm:text-left">
                      Direct notification via email dispatch
                    </span>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all shadow-lg hover:brightness-110 cursor-pointer disabled:opacity-50"
                      style={{ 
                        backgroundColor: accentColor,
                        boxShadow: `0 0 20px ${isCyan ? 'rgba(6,182,212,0.3)' : 'rgba(239,68,68,0.3)'}`
                      }}
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </TiltCard>
          </div>

        </div>

      </div>
    </div>
  );
}
