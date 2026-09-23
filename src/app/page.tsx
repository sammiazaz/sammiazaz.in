"use client";

import Link from 'next/link';
import { MapPin, Download, Mail, ArrowDown, Code2, BarChart2, MapPin as MapPinIcon, Clock, RefreshCw, CheckCircle2, ExternalLink, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import TiltCard from '@/components/TiltCard';

/* ─────────────── FLIP PILL ─────────────── */
type CardData = { letter: string; icon: React.ReactNode; href: string };

function FlipPill({ cards }: { cards: CardData[] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex items-center gap-2 px-4 py-4 rounded-xl border border-white/8 bg-zinc-900/80 backdrop-blur-sm transition-all duration-300 cursor-pointer select-none flip-pill-container"
      style={{
        borderColor: hovered ? 'rgba(255,255,255,0.4)' : undefined,
        backgroundColor: hovered ? 'rgba(39,39,42,0.8)' : undefined,
        boxShadow: hovered ? '0 0 30px rgba(255,255,255,0.08)' : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {cards.map(({ letter, icon, href }, i) => (
        <a key={i} href={href} target={href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer" onClick={e => { if (href === '#') e.preventDefault(); }}
          style={{ perspective: '800px' }}>
          <span className="relative flex items-center justify-center w-12 h-12"
            style={{ transformStyle: 'preserve-3d', transform: hovered ? 'rotateX(180deg)' : 'rotateX(0deg)',
              transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: `${i * 80}ms` }}>
            <span className="absolute inset-0 flex items-center justify-center rounded-xl border border-white/8 bg-[#111111] text-zinc-300 font-mono font-bold text-base flip-pill-letter"
              style={{ backfaceVisibility: 'hidden' }}>{letter}</span>
            <span className="absolute inset-0 flex items-center justify-center rounded-xl bg-[#EF4444] text-white flip-pill-letter"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)',
                boxShadow: hovered ? '0 0 16px rgba(239,68,68,0.4)' : 'none', transition: 'box-shadow 0.3s ease' }}>
              {icon}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}

/* ─────────────── CP DATA ─────────────── */
const platformsData = {
  leetcode: { id: 'leetcode', name: 'LeetCode', num: '01', solved: 75, total: 4042,
    difficulty: { easy: { solved: 24, total: 962, percent: 2.5 }, medium: { solved: 44, total: 2109, percent: 2.1 }, hard: { solved: 7, total: 971, percent: 0.7 } },
    performance: [{ label: 'Contest Rating', value: '1950' }, { label: 'Peak Rating', value: '1950' }, { label: 'Global Standing', value: 'Top 3%' }, { label: 'Acceptance Rate', value: '72.5%' }, { label: 'Current Streak', value: '120 days' }, { label: 'Active Coding Days', value: '540 days' }] },
  codechef: { id: 'codechef', name: 'CodeChef', num: '02', solved: 285, total: 3500,
    difficulty: { easy: { solved: 150, total: 1000, percent: 15.0 }, medium: { solved: 100, total: 1500, percent: 6.6 }, hard: { solved: 35, total: 1000, percent: 3.5 } },
    performance: [{ label: 'Current Rating', value: '1840' }, { label: 'Highest Rating', value: '1840 (4 Star)' }, { label: 'Global Rank', value: '1,245' }, { label: 'Country Rank', value: '890' }, { label: 'Contests Attended', value: '42' }, { label: 'Active Coding Days', value: '310 days' }] },
  gfg: { id: 'gfg', name: 'GeeksforGeeks', num: '03', solved: 340, total: 2000,
    difficulty: { easy: { solved: 200, total: 800, percent: 25.0 }, medium: { solved: 110, total: 800, percent: 13.7 }, hard: { solved: 30, total: 400, percent: 7.5 } },
    performance: [{ label: 'Coding Score', value: '1450' }, { label: 'Institute Rank', value: 'Top 5' }, { label: 'Global Standing', value: 'Top 10%' }, { label: 'Accuracy', value: '68.4%' }, { label: 'Current Streak', value: '45 days' }, { label: 'Active Coding Days', value: '180 days' }] },
  hackerrank: { id: 'hackerrank', name: 'HackerRank', num: '04', solved: 195, total: 1500,
    difficulty: { easy: { solved: 120, total: 600, percent: 20.0 }, medium: { solved: 60, total: 600, percent: 10.0 }, hard: { solved: 15, total: 300, percent: 5.0 } },
    performance: [{ label: 'Problem Solving', value: '5 Stars' }, { label: 'C++ Badge', value: '5 Stars' }, { label: '10 Days of JS', value: 'Gold' }, { label: 'Global Standing', value: 'Top 5%' }, { label: 'Certificates', value: '3 Verified' }, { label: 'Active Coding Days', value: '120 days' }] },
  overall: { id: 'overall', name: 'Overall Stats', num: '05', solved: 895, total: 11042,
    difficulty: { easy: { solved: 1, total: 1, percent: 1 }, medium: { solved: 1, total: 1, percent: 1 }, hard: { solved: 1, total: 1, percent: 1 } },
    performance: [] },
};

const ROLES = ["Full Stack Developer", "React & Node.js Engineer", "CS Undergrad @ IILM"];

/* ─────────────── MAIN PAGE ─────────────── */
export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [activeTab, setActiveTab] = useState<keyof typeof platformsData>('leetcode');
  const activeData = platformsData[activeTab];

  useEffect(() => {
    const role = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < role.length) timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 55);
      else timeout = setTimeout(() => setTyping(false), 2000);
    } else {
      if (displayed.length > 0) timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      else { setRoleIndex(i => (i + 1) % ROLES.length); setTyping(true); }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  let easyDash = 0, medDash = 0, hardDash = 0, easyC = 0, medC = 0, hardC = 0;
  if (activeTab !== 'overall') {
    const t = activeData.solved;
    easyC = 2 * Math.PI * 42; medC = 2 * Math.PI * 32; hardC = 2 * Math.PI * 22;
    easyDash = (activeData.difficulty.easy.solved / t) * easyC;
    medDash = (activeData.difficulty.medium.solved / t) * medC;
    hardDash = (activeData.difficulty.hard.solved / t) * hardC;
  }

  const CARDS: CardData[] = [
    { letter: 'C', icon: <FaGithub size={18} />,   href: 'https://github.com/sammiazaz' },
    { letter: 'O', icon: <FaLinkedin size={18} />, href: 'https://linkedin.com/in/sammiazazse' },
    { letter: 'N', icon: <FaTwitter size={18} />,  href: '#' },
    { letter: 'T', icon: <Mail size={18} />,        href: 'mailto:sammiazaz2005@gmail.com' },
    { letter: 'A', icon: <Code2 size={18} />,       href: '#' },
    { letter: 'C', icon: <BarChart2 size={18} />,   href: '#' },
    { letter: 'T', icon: <Code2 size={18} />,       href: '#' },
  ];

  return (
    <div className="w-full selection:bg-[#EF4444]/30">

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[calc(100vh-var(--navbar-height))] flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-xl"
            style={{ background: 'radial-gradient(ellipse at center, rgba(239,68,68,0.08) 0%, transparent 70%)' }} />
        </div>

        <div className="z-10 flex flex-col items-center w-full max-w-4xl">
          <div className="flex items-center gap-2 px-4 py-2 mb-10 rounded-xl border border-white/8 bg-white/[0.03] backdrop-blur-sm hero-badge">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4444] opacity-60"></span>
              <span className="relative inline-flex rounded-xl h-1.5 w-1.5 bg-[#EF4444]"></span>
            </span>
            <span className="text-label text-zinc-400">Available for opportunities</span>
            <span className="w-px h-3 bg-zinc-700" />
            <MapPinIcon size={11} className="text-zinc-500" />
            <span className="text-label text-zinc-500">Delhi, India</span>
          </div>

          <h1 className="text-display text-white text-center tracking-tight mb-4 leading-none">
            Sammi Azaz<span className="text-[#EF4444]">.</span>
          </h1>

          <div className="h-9 flex items-center justify-center mb-8">
            <span className="text-subheading text-zinc-400 text-center font-mono">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-[#EF4444] ml-0.5 animate-pulse align-middle" />
            </span>
          </div>

          <p className="text-body text-center max-w-xl mb-10">
            Full Stack Developer specializing in{' '}
            <span className="text-white font-medium">responsive React.js applications</span>,{' '}
            <span className="text-white font-medium">scalable Node.js/Express.js REST APIs</span>, and{' '}
            <span className="text-white font-medium">applied machine learning systems</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Link href="/resume"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-label font-bold cursor-pointer hero-cta hero-primary-cta">
              <FileText size={14} /> View Resume
            </Link>
            <a href="mailto:sammiazaz2005@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-transparent text-label text-zinc-300 hover:bg-white/5 hover:border-white/20 cursor-pointer hero-cta hero-secondary-cta">
              <Mail size={14} /> Get In Touch
            </a>
          </div>

          <FlipPill cards={CARDS} />
        </div>

        <div className="absolute bottom-8 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer group">
          <span className="text-label group-hover:text-zinc-400 transition-colors">Scroll to explore</span>
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section id="about" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="page-container">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 bg-[#EF4444] rounded-full"></span>
              <span className="text-label text-[#EF4444]">/ ABOUT</span>
            </div>
            <h2 className="text-title text-white mb-3">About Me</h2>
            <p className="text-subheading">A brief overview of who I am, my philosophy, and my coding journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <TiltCard withAnimatedBorder className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-colors duration-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group h-full">
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-1.5 h-1.5 bg-[#EF4444] rounded-full"></span>
                  <span className="text-label text-zinc-500">/ ABOUT</span>
                </div>
                <p className="text-body text-zinc-300">
                  I&apos;m <strong className="text-white font-medium">Sammi Azaz</strong> — a Full Stack Developer &amp; CS undergrad at <strong className="text-white font-medium">IILM University</strong> (Class of 2027) based in Delhi, India. With hands-on experience building full-stack platforms like <strong className="text-white font-medium">TripNest</strong> and ML classification systems, I care deeply about clean system architecture, RESTful API design, and intuitive user experiences.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-900">
                <p className="text-small text-zinc-500 italic">&ldquo;Simplicity, resilience, and real-world utility.&rdquo;</p>
              </div>
            </TiltCard>

            <TiltCard withAnimatedBorder className="bg-[#111111] border border-white/5 rounded-3xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px] transition-colors duration-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group h-full">
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-xl z-10 backdrop-blur-md">
                <span className="w-1.5 h-1.5 bg-[#EF4444] rounded-full opacity-70"></span>
                <MapPin size={12} className="text-zinc-400" />
                <span className="text-small text-zinc-300 ml-1">Delhi, India</span>
                <span className="text-label bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-xl ml-1">FOCUS</span>
              </div>
              <div className="absolute top-6 right-6 flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-xl z-10 backdrop-blur-md">
                <Clock size={12} className="text-zinc-400" />
                <span className="text-small text-zinc-300 font-mono">IST +5:30</span>
              </div>
              <div className="relative w-48 h-48 mt-6 rounded-xl border border-zinc-800 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.03)] group transition-all duration-700 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                <div className="absolute inset-0 rounded-xl border border-zinc-700/50" style={{ transform: 'rotateX(60deg)' }}></div>
                <div className="absolute inset-0 rounded-xl border border-zinc-700/50" style={{ transform: 'rotateY(60deg)' }}></div>
                <div className="absolute inset-0 rounded-xl border border-zinc-700/50" style={{ transform: 'rotateY(120deg)' }}></div>
                <div className="w-40 h-40 rounded-xl bg-[radial-gradient(circle,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:6px_6px] opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                  style={{ WebkitMaskImage: 'radial-gradient(circle, black, transparent 70%)' }}></div>
                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-[#EF4444] rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
              </div>
              <div className="absolute bottom-6 flex items-center gap-2 bg-zinc-900/40 border border-zinc-800 px-4 py-1.5 rounded-xl z-10">
                <RefreshCw size={12} className="text-zinc-400" />
                <span className="text-label text-zinc-400">Drag to rotate</span>
              </div>
            </TiltCard>

            <TiltCard withAnimatedBorder className="md:col-span-2 relative bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-10 overflow-hidden min-h-[300px] flex flex-col justify-center transition-colors duration-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group w-full">
              <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-12 relative z-10 h-full w-full">
                <div className="w-full md:w-auto self-start">
                  <p className="text-label text-zinc-500 font-mono mb-4">TRANSCRIPT REF : 24A12RES897</p>
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-label text-white">ACADEMIC TREND</h3>
                    <span className="text-label bg-zinc-800 text-white px-2 py-0.5 rounded-xl border border-zinc-700">6/8 SEMS</span>
                    <div className="flex items-center gap-1 border border-zinc-700 bg-zinc-900/50 px-2 py-0.5 rounded-xl cursor-pointer hover:bg-zinc-800 transition-colors">
                      <CheckCircle2 size={10} className="text-zinc-400" />
                      <span className="text-label text-zinc-300">VERIFY</span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-display text-white">6.86</span>
                    <span className="text-label text-zinc-500">CURRENT CPI</span>
                  </div>
                  <p className="text-small text-zinc-400 mb-8">Consistent growth across 6 sems, peak 8.03 SPI in Sem 5</p>
                  <div className="flex items-center gap-4 text-label">
                    <div className="flex items-center gap-2"><span className="w-2 h-0.5 bg-[#EF4444] rounded-sm"></span><span className="text-[#EF4444]">SPI</span></div>
                    <div className="flex items-center gap-2"><span className="w-2 h-0.5 bg-white rounded-sm"></span><span className="text-white">CPI</span></div>
                  </div>
                </div>
                <div className="w-full md:w-[450px] h-40 relative flex items-end">
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
                    <span className="text-8xl font-black tracking-tighter whitespace-nowrap">IILM - UN</span>
                  </div>
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                    <line x1="0" y1="100" x2="400" y2="100" stroke="#222" strokeWidth="1" />
                    <line x1="0" y1="50" x2="400" y2="50" stroke="#222" strokeWidth="1" strokeDasharray="4 4" />
                    <polyline points="20,95 92,90 164,50 236,45 308,10 380,45" fill="none" stroke="#EF4444" strokeWidth="2.5" />
                    <circle cx="20" cy="95" r="3.5" fill="#EF4444" /><circle cx="92" cy="90" r="3.5" fill="#EF4444" />
                    <circle cx="164" cy="50" r="3.5" fill="#EF4444" /><circle cx="236" cy="45" r="3.5" fill="#EF4444" />
                    <circle cx="308" cy="10" r="3.5" fill="#EF4444" /><circle cx="380" cy="45" r="3.5" fill="#EF4444" />
                    <polyline points="20,95 92,93 164,75 236,65 308,55 380,60" fill="none" stroke="white" strokeWidth="2" />
                    <circle cx="20" cy="95" r="3.5" fill="white" /><circle cx="92" cy="93" r="3.5" fill="white" />
                    <circle cx="164" cy="75" r="3.5" fill="white" /><circle cx="236" cy="65" r="3.5" fill="white" />
                    <circle cx="308" cy="55" r="3.5" fill="white" /><circle cx="380" cy="60" r="3.5" fill="white" />
                    <text x="20" y="115" fill="#555" fontSize="10" textAnchor="middle" className="font-mono">S1</text>
                    <text x="92" y="115" fill="#555" fontSize="10" textAnchor="middle" className="font-mono">S2</text>
                    <text x="164" y="115" fill="#555" fontSize="10" textAnchor="middle" className="font-mono">S3</text>
                    <text x="236" y="115" fill="#555" fontSize="10" textAnchor="middle" className="font-mono">S4</text>
                    <text x="308" y="115" fill="#555" fontSize="10" textAnchor="middle" className="font-mono">S5</text>
                    <text x="380" y="115" fill="#555" fontSize="10" textAnchor="middle" className="font-mono">S6</text>
                  </svg>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ══════════ COMPETITIVE PROGRAMMING ══════════ */}
      <section id="competitive" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="page-container">
          <div className="mb-10">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4444] opacity-50"></span>
                <span className="relative inline-flex rounded-xl h-1.5 w-1.5 bg-[#EF4444]"></span>
              </span>
              <span className="text-label text-[#EF4444] font-mono">Competitive Coding</span>
            </div>
            <h2 className="text-title text-white mb-4">Competitive Journey</h2>
            <p className="text-subheading max-w-2xl">A visual overview of problem solving, consistency and competitive programming progress across multiple platforms.</p>
          </div>

          {/* Platform Tabs */}
          <div className="flex overflow-x-auto gap-2 mb-8 border-b border-[#1F1F1F]" role="tablist">
            {Object.values(platformsData).map((p) => {
              const isActive = activeTab === p.id;
              return (
                <button key={p.id} role="tab" aria-selected={isActive}
                  onClick={() => setActiveTab(p.id as keyof typeof platformsData)}
                  className={`flex-shrink-0 relative flex items-center gap-3 px-6 py-4 text-sm transition-all duration-300 outline-none rounded-t-xl group ${
                    isActive ? 'text-[#F5F5F5] font-semibold bg-[#111111] border-x border-t border-[#1F1F1F]'
                      : 'text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-zinc-900/30 border border-transparent'}`}>
                  <span className="font-mono text-[10px] opacity-70">{p.num}</span>
                  <span className="tracking-wide">{p.name}</span>
                  <span className={`font-mono text-xs ${isActive ? 'text-[#EF4444]' : 'opacity-40 group-hover:opacity-60'}`}>{p.solved}</span>
                  {isActive && <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#EF4444] shadow-[0_-2px_8px_rgba(239,68,68,0.4)]"></div>}
                </button>
              );
            })}
          </div>

          {/* Analytics Container */}
          <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-8 lg:p-10 relative overflow-hidden transition-all duration-500 mb-8">
            {activeTab === 'overall' ? (
              <div className="animate-in fade-in duration-500">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-label text-zinc-500 font-mono"><span>Global Telemetry</span></div>
                    <h3 className="text-heading text-white">Overall Stats</h3>
                  </div>
                  <div className="md:text-right border-l border-[#1F1F1F] pl-6 md:border-none md:pl-0 flex items-center gap-8 md:justify-end">
                    <div className="text-left md:text-right">
                      <div className="text-3xl font-bold leading-none mb-2 tracking-tighter text-[#F5F5F5]">72.5%</div>
                      <div className="text-[11px] text-zinc-500 font-medium">Avg Acceptance</div>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-3xl font-bold leading-none mb-2 tracking-tighter text-[#F5F5F5]">215<span className="text-lg text-zinc-500 font-medium ml-1">d</span></div>
                      <div className="text-[11px] text-zinc-500 font-medium">Longest Streak</div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-px bg-[#1F1F1F] mb-10"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="flex flex-col h-full pr-0 lg:pr-8 border-r-0 lg:border-r border-[#1F1F1F]">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-label text-zinc-500">Platform Distribution</h3>
                      <div className="text-label text-zinc-500 font-mono tracking-normal">GFG • CC • HR • LC</div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start gap-10 sm:gap-12 mt-2">
                      <div className="relative w-36 flex-shrink-0">
                        <div className="w-36 h-36 relative">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="42" fill="none" stroke="#1A1A1A" strokeWidth="4" />
                            <circle cx="50" cy="50" r="33" fill="none" stroke="#1A1A1A" strokeWidth="4" />
                            <circle cx="50" cy="50" r="24" fill="none" stroke="#1A1A1A" strokeWidth="4" />
                            <circle cx="50" cy="50" r="15" fill="none" stroke="#1A1A1A" strokeWidth="4" />
                            <circle cx="50" cy="50" r="42" fill="none" stroke="#10B981" strokeWidth="4" strokeDasharray={`${(340/895)*(2*Math.PI*42)} ${2*Math.PI*42}`} strokeDashoffset="0" strokeLinecap="round" style={{ transformOrigin:'50% 50%', transform:'rotate(-90deg)' }} />
                            <circle cx="50" cy="50" r="33" fill="none" stroke="#8B5CF6" strokeWidth="4" strokeDasharray={`${(285/895)*(2*Math.PI*33)} ${2*Math.PI*33}`} strokeDashoffset="0" strokeLinecap="round" style={{ transformOrigin:'50% 50%', transform:'rotate(-90deg)' }} />
                            <circle cx="50" cy="50" r="24" fill="none" stroke="#3B82F6" strokeWidth="4" strokeDasharray={`${(195/895)*(2*Math.PI*24)} ${2*Math.PI*24}`} strokeDashoffset="0" strokeLinecap="round" style={{ transformOrigin:'50% 50%', transform:'rotate(-90deg)' }} />
                            <circle cx="50" cy="50" r="15" fill="none" stroke="#EAB308" strokeWidth="4" strokeDasharray={`${(75/895)*(2*Math.PI*15)} ${2*Math.PI*15}`} strokeDashoffset="0" strokeLinecap="round" style={{ transformOrigin:'50% 50%', transform:'rotate(-90deg)' }} />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-heading text-white tracking-tight">895</span>
                            <span className="text-label text-zinc-500">Solved</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 w-full space-y-5 pt-1">
                        {[{name:'GeeksforGeeks',val:340,total:895,color:'#10B981'},{name:'CodeChef',val:285,total:895,color:'#8B5CF6'},{name:'HackerRank',val:195,total:895,color:'#3B82F6'},{name:'LeetCode',val:75,total:895,color:'#EAB308'}].map(p => (
                          <div key={p.name} className="w-full">
                            <div className="flex justify-between items-end mb-2">
                              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor:p.color}}></span><span className="text-[13px] font-semibold text-[#F5F5F5]">{p.name}</span></div>
                              <div className="text-[12px] font-mono font-bold text-[#F5F5F5]">{p.val}</div>
                            </div>
                            <div className="w-full h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
                              <div className="h-full rounded-xl transition-all duration-[1500ms] ease-out" style={{width:`${(p.val/p.total)*100}%`,backgroundColor:p.color}}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col h-full pl-0 lg:pl-4">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-label text-zinc-500">Difficulty Breakdown</h3>
                      <div className="text-label text-zinc-500 font-mono tracking-normal">Verified</div>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="grid grid-cols-4 gap-4 py-2 border-b border-[#1F1F1F]/60 text-label text-zinc-500 px-2 mb-2">
                        <div className="col-span-1">Platform</div><div className="text-center text-[#EF4444]">Easy</div><div className="text-center text-[#F59E0B]">Med</div><div className="text-center text-[#EF4444]">Hard</div>
                      </div>
                      {[{name:'GFG',color:'#10B981',e:200,m:110,h:30},{name:'CodeChef',color:'#8B5CF6',e:150,m:100,h:35},{name:'HackerRank',color:'#3B82F6',e:120,m:60,h:15},{name:'LeetCode',color:'#EAB308',e:24,m:44,h:7}].map(p => (
                        <div key={p.name} className="grid grid-cols-4 gap-4 py-4 border-b border-[#1F1F1F]/60 group hover:bg-white/[0.02] transition-colors px-2 rounded-lg items-center last:border-0">
                          <div className="flex items-center gap-2.5 col-span-1"><span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor:p.color}}></span><span className="text-[13px] text-[#A1A1AA] group-hover:text-zinc-300 font-medium">{p.name}</span></div>
                          <div className="text-center text-[13px] font-mono font-bold text-[#F5F5F5]">{p.e}</div>
                          <div className="text-center text-[13px] font-mono font-bold text-[#F5F5F5]">{p.m}</div>
                          <div className="text-center text-[13px] font-mono font-bold text-[#F5F5F5]">{p.h}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in duration-500" key={activeData.id}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-label text-zinc-500 font-mono">
                      <span>Platform Focus</span><span>/</span>
                      <a href="#" className="text-white hover:text-[#EF4444] transition-colors flex items-center gap-1 group">@SAMMIAZAZ <ExternalLink size={10} className="opacity-50 group-hover:opacity-100" /></a>
                    </div>
                    <h3 className="text-heading text-white">{activeData.name}</h3>
                  </div>
                  <div className="md:text-right border-l border-[#1F1F1F] pl-6 md:border-none md:pl-0">
                    <div className="text-5xl font-bold leading-none mb-2 tracking-tighter text-[#F5F5F5]">{activeData.solved}</div>
                    <div className="text-[11px] text-zinc-500 font-medium">Problems Solved / {activeData.total.toLocaleString()}</div>
                  </div>
                </div>
                <div className="w-full h-px bg-[#1F1F1F] mb-10"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="flex flex-col h-full pr-0 lg:pr-8 border-r-0 lg:border-r border-[#1F1F1F]">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-label text-zinc-500">Difficulty Distribution</h3>
                      <div className="text-label text-zinc-500 font-mono">Easy • Med • Hard</div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start gap-10 sm:gap-12 mt-2">
                      <div className="relative w-36 flex-shrink-0">
                        <div className="w-36 h-36 relative">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="42" fill="none" stroke="#1A1A1A" strokeWidth="4.5" />
                            <circle cx="50" cy="50" r="32" fill="none" stroke="#1A1A1A" strokeWidth="4.5" />
                            <circle cx="50" cy="50" r="22" fill="none" stroke="#1A1A1A" strokeWidth="4.5" />
                            <circle cx="50" cy="50" r="42" fill="none" stroke="#EF4444" strokeWidth="4.5" strokeDasharray={`${easyDash} ${easyC}`} strokeDashoffset="0" strokeLinecap="round" style={{ transformOrigin:'50% 50%', transform:'rotate(-90deg)', transition:'stroke-dasharray 1.5s cubic-bezier(0.4,0,0.2,1)' }} />
                            <circle cx="50" cy="50" r="32" fill="none" stroke="#F59E0B" strokeWidth="4.5" strokeDasharray={`${medDash} ${medC}`} strokeDashoffset="0" strokeLinecap="round" style={{ transformOrigin:'50% 50%', transform:'rotate(-90deg)', transition:'stroke-dasharray 1.5s cubic-bezier(0.4,0,0.2,1)' }} />
                            <circle cx="50" cy="50" r="22" fill="none" stroke="#EF4444" strokeWidth="4.5" strokeDasharray={`${hardDash} ${hardC}`} strokeDashoffset="0" strokeLinecap="round" style={{ transformOrigin:'50% 50%', transform:'rotate(-90deg)', transition:'stroke-dasharray 1.5s cubic-bezier(0.4,0,0.2,1)' }} />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-heading text-white tracking-tight">{activeData.solved}</span>
                            <span className="text-label text-zinc-500">Solved</span>
                          </div>
                        </div>
                        <div className="mt-8 text-center">
                          <div className="text-label text-zinc-500 mb-1.5">Total Problems</div>
                          <div className="text-heading font-mono text-white leading-none">{activeData.total.toLocaleString()}</div>
                        </div>
                      </div>
                      <div className="flex-1 w-full space-y-7 pt-2">
                        {[{label:'Easy',color:'#EF4444',data:activeData.difficulty.easy},{label:'Medium',color:'#F59E0B',data:activeData.difficulty.medium},{label:'Hard',color:'#EF4444',data:activeData.difficulty.hard}].map((d,idx) => (
                          <div key={d.label} className="w-full">
                            <div className="flex justify-between items-end mb-2.5">
                              <div className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor:d.color}}></span><span className="text-[13px] font-semibold text-[#F5F5F5]">{d.label}</span></div>
                              <div className="flex items-center gap-4">
                                <div className="text-[11px] font-mono"><span className="text-[#F5F5F5] font-bold">{d.data.solved}</span><span className="text-zinc-600"> / {d.data.total.toLocaleString()}</span></div>
                                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-md border" style={{backgroundColor:`${d.color}1A`,color:d.color,borderColor:`${d.color}33`}}>{d.data.percent.toFixed(1)}%</span>
                              </div>
                            </div>
                            <div className="w-full h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
                              <div className="h-full rounded-xl transition-all duration-[1500ms] ease-out" style={{width:`${(d.data.solved/d.data.total)*100}%`,backgroundColor:d.color}}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col h-full pl-0 lg:pl-4">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-label text-zinc-500">Performance Profile</h3>
                      <div className="text-label text-zinc-500 font-mono">Verified Telemetry</div>
                    </div>
                    <div className="flex flex-col space-y-1">
                      {activeData.performance.map((metric, idx) => (
                        <div key={idx} className="flex justify-between items-center py-3.5 border-b border-[#1F1F1F]/60 last:border-0 group hover:bg-white/[0.02] transition-colors px-3 -mx-3 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="w-1 h-1 rounded-full bg-[#333333] group-hover:bg-[#EF4444] transition-colors group-hover:shadow-[0_0_5px_rgba(239,68,68,0.5)]"></span>
                            <span className="text-[13px] text-[#A1A1AA] group-hover:text-zinc-300 transition-colors font-medium">{metric.label}</span>
                          </div>
                          <span className="text-sm font-bold font-mono text-[#F5F5F5] tracking-tight">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}

