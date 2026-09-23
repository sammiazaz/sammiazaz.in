"use client";

import React from 'react';
import TiltCard from '@/components/TiltCard';
import { MapPin, Clock, GraduationCap, Mail, Code, Terminal, BarChart } from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const SOCIAL_LINKS = [
  { name: 'GitHub', handle: 'sammiazaz', url: 'https://github.com/sammiazaz', icon: GithubIcon, color: '#F5F5F5' },
  { name: 'LinkedIn', handle: 'sammiazazse', url: 'https://linkedin.com/in/sammiazazse', icon: LinkedinIcon, color: '#0A66C2' },
  { name: 'LeetCode', handle: 'sammiazaz', url: '#', icon: Code, color: '#FFA116' },
  { name: 'Codeforces', handle: 'sammiazaz', url: '#', icon: BarChart, color: '#1F8ACB' },
  { name: 'HackerRank', handle: 'sammiazaz', url: '#', icon: Terminal, color: '#00EA64' },
  { name: 'GeeksforGeeks', handle: 'sammiazaz', url: '#', icon: Code, color: '#2F8D46' },
  { name: 'X', handle: 'sammiazaz', url: '#', icon: TwitterIcon, color: '#F5F5F5' },
  { name: 'Email', handle: 'sammiazaz2005@gmail.com', url: 'mailto:sammiazaz2005@gmail.com', icon: Mail, color: '#EA4335' }
];

export default function PersonaPage() {
  return (
    <div className="page selection:bg-[#EF4444]/30 px-4 sm:px-6 lg:px-8">
      <div className="page-container pt-3 md:pt-4">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-title text-white mb-3">Identity &amp; Persona</h1>
          <p className="text-subheading max-w-lg">
            The core principles, background, and operational channels that define my engineering approach.
          </p>
        </div>

        {/* 1. Profile & College Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-24">
          
          {/* Left: Bio Text */}
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-title text-white mb-6">Hi, I&apos;m <span className="text-[#EF4444]">Sammi Azaz</span></h1>
            <p className="text-body mb-5">
              Full Stack Developer &amp; Computer Science undergraduate at <strong className="text-white font-semibold">IILM University, Greater Noida</strong> (Expected Graduation: <strong className="text-white font-semibold">August 2027</strong>). Hands-on experience building responsive React.js applications and scalable Node.js/Express.js REST APIs.
            </p>
            <p className="text-body mb-8">
              Skilled in MongoDB, MySQL, Git/GitHub, and deploying applications on cloud platforms (Vercel, AWS). Strong collaborator with a problem-solving mindset, currently expanding expertise in Next.js, TypeScript, and robust authentication systems (JWT, OAuth).
            </p>
            <div className="flex flex-wrap gap-2.5">
              <span className="px-3 py-1.5 bg-transparent border border-white/20 rounded-md text-[10px] font-mono font-bold text-zinc-300">Delhi, India</span>
              <span className="px-3 py-1.5 bg-transparent border border-white/20 rounded-md text-[10px] font-mono font-bold text-zinc-300">+91-8102842575</span>
              <span className="px-3 py-1.5 bg-transparent border border-white/20 rounded-md text-[10px] font-mono font-bold text-zinc-300">IILM University - 2027</span>
              <span className="px-3 py-1.5 bg-transparent border border-white/20 rounded-md text-[10px] font-mono font-bold text-zinc-300">CGPA: 7.05 / 10</span>
            </div>
          </div>

          {/* Right: Education Card */}
          <TiltCard withAnimatedBorder className="bg-[#111111] border border-white/5 rounded-3xl relative overflow-hidden transition-colors duration-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group h-full flex flex-col">
            
            {/* Top Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/5">
              <span className="text-label text-[#EF4444]">EDUCATION</span>
              <span className="text-label text-zinc-500 tracking-normal">GREATER NOIDA, IN</span>
            </div>

            {/* Image */}
            <div className="w-full h-40 md:h-48 relative border-b border-white/5">
              <img src="/images/iilm.jpg" alt="IILM Campus" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* College Info */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl flex items-center justify-center font-black text-sm tracking-tighter text-white">
                  IILM
                </div>
                <div>
                  <h3 className="text-[1.5rem] font-bold text-white leading-none mb-2">IILM University</h3>
                  <p className="text-small text-zinc-400 font-medium">B.Tech in Computer Science & Engineering</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
                <div className="bg-[#161616] border border-white/5 rounded-lg p-3">
                  <span className="block text-label text-zinc-500 mb-1">TIMELINE</span>
                  <span className="text-body font-bold text-white tracking-tight">2023–2027</span>
                </div>
                <div className="bg-[#161616] border border-white/5 rounded-lg p-3">
                  <span className="block text-label text-[#EF4444] mb-1">CUMULATIVE CGPA</span>
                  <span className="text-body font-bold text-white tracking-tight">7.05 / 10</span>
                </div>
                <div className="bg-[#161616] border border-white/5 rounded-lg p-3">
                  <span className="block text-label text-zinc-500 mb-1">STANDING</span>
                  <span className="text-body font-bold text-white tracking-tight">4th Year</span>
                </div>
              </div>
            </div>
          </TiltCard>

        </div>

        {/* 2. Core Manifest */}
        <TiltCard withAnimatedBorder className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden transition-colors duration-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] group w-full mb-6 lg:mb-8 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-xl text-label text-white">CORE PRINCIPLE</span>
            <span className="w-1 h-1 bg-[#EF4444] rounded-full"></span>
            <span className="text-label text-[#EF4444]">SIMPLICITY · RESILIENCE · UTILITY</span>
          </div>

          <blockquote className="text-heading text-white max-w-3xl mb-8">
            "Build systems that are <span className="text-[#EF4444]">simple to understand</span>, <span className="text-[#EF4444]">hard to break</span>, and <span className="text-[#EF4444]">useful in practice</span>."
          </blockquote>

          <p className="text-body max-w-3xl">
            I approach software engineering not as an exercise in adding complexity, but as a discipline of eliminating friction. Whether designing full-stack web platforms or training machine learning classification pipelines, the goal remains the same: clean architectures that deliver real-world precision and reliability.
          </p>
        </TiltCard>

        {/* 3. Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          
          {/* Pillar 01 */}
          <TiltCard withAnimatedBorder className="bg-[#111111] border border-white/5 rounded-3xl p-6 md:p-8 relative overflow-hidden transition-colors duration-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="text-2xl font-black text-white/10 group-hover:text-[#EF4444]/20 transition-colors">01</span>
              <span className="text-label text-[#EF4444]">FULL-STACK & SYSTEMS</span>
            </div>
            
            <h3 className="text-[1.125rem] font-bold text-white mb-4">Clean Boundaries & First Principles</h3>
            <p className="text-small text-zinc-400 mb-8 flex-grow">
              I structure applications with modular boundaries, clean API contracts, and defensive error handling. From React/Next.js interfaces to Node/Express and FastAPI servers, code should be self-documenting, maintainable, and built to scale effortlessly.
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2.5 py-1 bg-transparent border border-white/10 rounded-xl text-[9px] font-mono font-bold text-zinc-300">Modular Architecture</span>
              <span className="px-2.5 py-1 bg-transparent border border-white/10 rounded-xl text-[9px] font-mono font-bold text-zinc-300">REST & Async APIs</span>
            </div>
          </TiltCard>

          {/* Pillar 02 */}
          <TiltCard withAnimatedBorder className="bg-[#111111] border border-white/5 rounded-3xl p-6 md:p-8 relative overflow-hidden transition-colors duration-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="text-2xl font-black text-white/10 group-hover:text-[#EF4444]/20 transition-colors">02</span>
              <span className="text-label text-[#EF4444]">AI & APPLIED ML</span>
            </div>
            
            <h3 className="text-[1.125rem] font-bold text-white mb-4">Pragmatic AI Grounded in Real Data</h3>
            <p className="text-small text-zinc-400 mb-8 flex-grow">
              In artificial intelligence, I prioritize applied models that solve concrete operational challenges over hype. My focus centers on supervised classification pipelines, SMOTE data balancing, anomaly detection, and bridging models directly into production web apps.
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2.5 py-1 bg-transparent border border-white/10 rounded-xl text-[9px] font-mono font-bold text-zinc-300">Classification Pipelines</span>
              <span className="px-2.5 py-1 bg-transparent border border-white/10 rounded-xl text-[9px] font-mono font-bold text-zinc-300">FastAPI Inference</span>
            </div>
          </TiltCard>

          {/* Pillar 03 */}
          <TiltCard withAnimatedBorder className="bg-[#111111] border border-white/5 rounded-3xl p-6 md:p-8 relative overflow-hidden transition-colors duration-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="text-2xl font-black text-white/10 group-hover:text-[#EF4444]/20 transition-colors">03</span>
              <span className="text-label text-[#EF4444]">ENGINEERING DISCIPLINE</span>
            </div>
            
            <h3 className="text-[1.125rem] font-bold text-white mb-4">Continuous Algorithmic Craft</h3>
            <p className="text-small text-zinc-400 mb-8 flex-grow">
              Deep technical competence is built through consistent daily practice. With 895+ solved algorithmic problems across competitive platforms, I continually sharpen my problem-solving intuition, memory efficiency, and systematic debugging habits.
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2.5 py-1 bg-transparent border border-white/10 rounded-xl text-[9px] font-mono font-bold text-zinc-300">Algorithmic Rigor</span>
              <span className="px-2.5 py-1 bg-transparent border border-white/10 rounded-xl text-[9px] font-mono font-bold text-zinc-300">Performance Profiling</span>
            </div>
          </TiltCard>

        </div>

        {/* 4. Connect Channels */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-label text-[#EF4444]">NETWORK & CHANNELS</span>
              <div className="h-4 w-px bg-[#1F1F1F]"></div>
              <span className="px-2 py-0.5 bg-[#EF4444]/10 border border-[#EF4444]/20 text-[#EF4444] rounded text-label tracking-normal">Active Online</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    '--hover-color': link.color,
                    '--hover-bg': `${link.color}15`
                  } as React.CSSProperties}
                  className="relative flex flex-col p-5 bg-[#111111] border border-white/5 rounded-2xl group hover:border-[color:var(--hover-color)] hover:bg-[color:var(--hover-bg)] transition-all duration-300 overflow-hidden"
                >
                  <div className="relative z-10 mb-4 transition-transform duration-300 group-hover:-translate-y-1" style={{ color: link.color }}>
                    <Icon size={20} strokeWidth={2.5} />
                  </div>
                  <span className="relative z-10 text-[15px] font-bold text-zinc-200 mb-1 leading-tight">{link.name}</span>
                  <span className="relative z-10 text-[11px] font-mono font-medium text-zinc-600 group-hover:text-zinc-400 transition-colors">{link.handle}</span>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

