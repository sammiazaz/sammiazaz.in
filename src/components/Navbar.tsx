"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Sparkles, 
  Palette, 
  Home, 
  FolderGit2, 
  Award, 
  User, 
  Code2, 
  Mail 
} from 'lucide-react';
import AiAssistantModal from './AiAssistantModal';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, mode, toggleMode } = useTheme();
  const [aiModalOpen, setAiModalOpen] = useState(false);

  const isCyanPill = theme === 'cyan-pill';
  const isLight = mode === 'light';
  const accentColor = isCyanPill ? '#06B6D4' : '#EF4444';

  const links = [
    { name: 'HOME',        shortName: 'Home',   path: '/',            icon: Home },
    { name: 'PROJECTS',    shortName: 'Work',   path: '/projects',    icon: FolderGit2 },
    { name: 'CREDENTIALS', shortName: 'Creds',  path: '/credentials', icon: Award },
    { name: 'PERSONA',     shortName: 'About',  path: '/persona',     icon: User },
    { name: 'SKILLS',      shortName: 'Skills', path: '/skills',      icon: Code2 },
    { name: 'CONTACT',     shortName: 'Contact',path: '/contact',     icon: Mail },
  ];

  return (
    <>
      {/* ════════════ TOP NAVBAR (Logo & Header Icons) ════════════ */}
      <div className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-3 sm:pt-5 px-3 sm:px-6 pointer-events-none">
        <nav
          className="w-full max-w-7xl pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-3.5 sm:px-8 py-2 sm:py-3 transition-all duration-300"
          style={{
            background: isLight ? 'rgba(255,255,255,0.88)' : 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: isLight
              ? '1px solid rgba(0,0,0,0.15)'
              : (isCyanPill ? '1.5px solid rgba(6, 182, 212, 0.45)' : '1.5px solid rgba(239, 68, 68, 0.45)'),
            borderRadius: isCyanPill ? '9999px' : '16px',
            minHeight: '56px',
            boxShadow: isLight
              ? '0 8px 32px rgba(0,0,0,0.08)'
              : (isCyanPill
                  ? '0 8px 32px rgba(0,0,0,0.6), 0 0 16px rgba(6,182,212,0.15)'
                  : '0 8px 32px rgba(0,0,0,0.6), 0 0 16px rgba(239,68,68,0.15)'),
          }}
        >
          {/* ────── LEFT PART: Logo & Name ────── */}
          <div className="flex items-center flex-1 justify-start min-w-0">
            <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group flex-shrink-0">
              <div
                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center font-mono font-black text-xs transition-all duration-300 shadow-sm group-hover:scale-105"
                style={{
                  borderRadius: isCyanPill ? '9999px' : '10px',
                  backgroundColor: isCyanPill ? 'rgba(6, 182, 212, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                  border: isCyanPill ? '1px solid rgba(6, 182, 212, 0.4)' : '1px solid rgba(239, 68, 68, 0.4)',
                  color: accentColor,
                }}
              >
                SA
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-xs sm:text-sm tracking-tight transition-colors flex items-center gap-0.5 whitespace-nowrap ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                  Sammi Azaz
                  <span style={{ color: accentColor }}>.</span>
                </span>
                <span className="text-[8px] sm:text-[9px] text-zinc-500 font-mono tracking-wider -mt-0.5">DEV • CP</span>
              </div>
            </Link>
          </div>

          {/* ────── CENTER PART: Desktop Tabs (Visible on Desktop >= lg) ────── */}
          <div className="hidden lg:flex items-center justify-center gap-1 flex-shrink-0">
            {links.map((link) => {
              const isActive = pathname === link.path || (link.path !== '/' && pathname?.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`
                    relative flex-shrink-0 px-3.5 sm:px-4 py-2 text-xs font-bold tracking-widest whitespace-nowrap transition-colors duration-300
                    ${isActive 
                      ? 'text-black font-extrabold' 
                      : (isLight ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white')}
                  `}
                  style={{ borderRadius: isCyanPill ? '9999px' : '10px' }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 transition-colors duration-300"
                      style={{
                        borderRadius: isCyanPill ? '9999px' : '10px',
                        backgroundColor: accentColor,
                        boxShadow: isCyanPill
                          ? '0 0 16px rgba(6,182,212,0.6)'
                          : '0 0 14px rgba(239,68,68,0.5)',
                      }}
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* ────── RIGHT PART: Theme Icon, DarkMode Icon, AI Icon (Always Visible on Top) ────── */}
          <div className="flex items-center flex-1 justify-end gap-1.5 sm:gap-2 flex-shrink-0">
            {/* Theme Switcher Icon Button */}
            <button
              onClick={toggleTheme}
              type="button"
              title={`Switch Style Theme (Current: ${isCyanPill ? 'Cyan Pill' : 'Crimson Current'})`}
              className={`
                relative flex items-center gap-1.5 px-2 sm:px-3 py-1.5 text-[11px] font-mono font-bold transition-all duration-300 cursor-pointer border
                ${isLight 
                  ? 'border-zinc-300 bg-zinc-100 hover:bg-zinc-200 text-zinc-800' 
                  : 'border-white/10 bg-black/40 hover:bg-white/5 text-zinc-300 hover:text-white'}
              `}
              style={{ borderRadius: isCyanPill ? '9999px' : '10px' }}
            >
              <span
                className="w-2.5 h-2.5 transition-all shadow-sm flex-shrink-0"
                style={{
                  borderRadius: isCyanPill ? '9999px' : '3px',
                  backgroundColor: accentColor,
                  boxShadow: `0 0 8px ${accentColor}`,
                }}
              />
              <Palette size={13} className="opacity-80 flex-shrink-0" />
              <span className="hidden md:inline text-[10px] tracking-wider font-mono">
                {isCyanPill ? 'CYAN' : 'CURRENT'}
              </span>
            </button>

            {/* Darkmode Toggle Icon Button */}
            <button
              onClick={toggleMode}
              type="button"
              title={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
              className={`
                p-1.5 sm:p-2.5 flex items-center justify-center transition-all duration-300 border cursor-pointer
                ${isLight 
                  ? 'border-zinc-300 bg-zinc-100 hover:bg-zinc-200 text-zinc-800' 
                  : 'border-white/10 bg-black/40 hover:bg-white/5 text-zinc-300 hover:text-white'}
              `}
              style={{ borderRadius: isCyanPill ? '9999px' : '10px' }}
            >
              {isLight ? (
                <Sun size={14} className="text-amber-500 hover:rotate-45 transition-transform" />
              ) : (
                <Moon size={14} className="text-zinc-300 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* AI Assistant Icon Button */}
            <button
              onClick={() => setAiModalOpen(true)}
              type="button"
              title="Open Sammi AI Assistant"
              className={`
                relative p-1.5 sm:p-2.5 flex items-center justify-center transition-all duration-300 border cursor-pointer group
                ${isLight 
                  ? 'border-zinc-300 bg-zinc-100 hover:bg-zinc-200 text-zinc-900' 
                  : 'border-white/15 bg-black/40 hover:bg-white/10 text-white'}
              `}
              style={{ borderRadius: isCyanPill ? '9999px' : '10px' }}
            >
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: accentColor }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: accentColor }}
                />
              </span>
              <Sparkles size={14} style={{ color: accentColor }} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </nav>
      </div>

      {/* ════════════ MOBILE FLOATING BOTTOM NAVIGATION BAR (< lg) ════════════ */}
      <div className="fixed bottom-3 sm:bottom-4 left-0 right-0 z-40 flex justify-center px-3 sm:px-4 pointer-events-none lg:hidden">
        <nav
          aria-label="Mobile Navigation"
          className="pointer-events-auto w-full max-w-md flex items-center justify-around px-1.5 sm:px-2 py-1.5 backdrop-blur-2xl transition-all duration-300 shadow-2xl"
          style={{
            background: isLight ? 'rgba(255,255,255,0.92)' : 'rgba(10,10,10,0.85)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: isLight
              ? '1px solid rgba(0,0,0,0.15)'
              : (isCyanPill ? '1.5px solid rgba(6, 182, 212, 0.45)' : '1.5px solid rgba(239, 68, 68, 0.45)'),
            borderRadius: isCyanPill ? '9999px' : '18px',
            boxShadow: isLight
              ? '0 12px 36px rgba(0,0,0,0.1)'
              : (isCyanPill
                  ? '0 12px 36px rgba(0,0,0,0.8), 0 0 20px rgba(6,182,212,0.2)'
                  : '0 12px 36px rgba(0,0,0,0.8), 0 0 20px rgba(239,68,68,0.2)'),
          }}
        >
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.path || (link.path !== '/' && pathname?.startsWith(link.path));
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`
                  relative flex-1 flex flex-col items-center justify-center py-1 px-1 transition-all duration-200 select-none
                  ${isActive 
                    ? 'font-bold' 
                    : (isLight ? 'text-zinc-500 hover:text-black' : 'text-zinc-400 hover:text-white')}
                `}
                style={{ borderRadius: isCyanPill ? '9999px' : '12px' }}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-bottom-nav-active"
                    className="absolute inset-0"
                    style={{
                      borderRadius: isCyanPill ? '9999px' : '12px',
                      backgroundColor: isCyanPill ? 'rgba(6, 182, 212, 0.16)' : 'rgba(239, 68, 68, 0.16)',
                      border: isCyanPill ? '1px solid rgba(6, 182, 212, 0.45)' : '1px solid rgba(239, 68, 68, 0.45)',
                      boxShadow: isCyanPill ? '0 0 10px rgba(6, 182, 212, 0.25)' : '0 0 10px rgba(239, 68, 68, 0.25)',
                    }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex flex-col items-center gap-0.5">
                  <Icon 
                    size={17} 
                    style={{ color: isActive ? accentColor : undefined }}
                    className="transition-transform duration-200" 
                  />
                  <span 
                    className="text-[9px] font-mono tracking-tight"
                    style={{ color: isActive ? accentColor : undefined }}
                  >
                    {link.shortName}
                  </span>
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* AI Assistant Modal */}
      <AiAssistantModal isOpen={aiModalOpen} onClose={() => setAiModalOpen(false)} />
    </>
  );
}
