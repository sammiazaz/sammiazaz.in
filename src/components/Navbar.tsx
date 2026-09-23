"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Sparkles, Palette, Menu, X } from 'lucide-react';
import AiAssistantModal from './AiAssistantModal';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, mode, toggleMode } = useTheme();
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isCyanPill = theme === 'cyan-pill';
  const isLight = mode === 'light';
  const accentColor = isCyanPill ? '#06B6D4' : '#EF4444';

  const links = [
    { name: 'HOME',        path: '/' },
    { name: 'PROJECTS',    path: '/projects' },
    { name: 'CREDENTIALS', path: '/credentials' },
    { name: 'PERSONA',     path: '/persona' },
    { name: 'SKILLS',      path: '/skills' },
    { name: 'CONTACT',     path: '/contact' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 flex flex-col items-center pt-3 sm:pt-5 px-3 sm:px-6 pointer-events-none">
        <nav
          className="w-full max-w-7xl pointer-events-auto flex items-center justify-between gap-2 sm:gap-6 px-3.5 sm:px-8 py-2 sm:py-3 transition-all duration-300"
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
          {/* ────── 1. LEFT PART: Logo & Name ────── */}
          <div className="flex items-center flex-1 justify-start min-w-0">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 sm:gap-2.5 group flex-shrink-0"
            >
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

          {/* ────── 2. CENTER PART: Desktop Navbar Tabs (Hidden on < lg) ────── */}
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

          {/* ────── 3. RIGHT PART: Actions & Mobile Hamburger ────── */}
          <div className="flex items-center flex-1 justify-end gap-1.5 sm:gap-2 flex-shrink-0">
            {/* Theme Switcher Icon Button */}
            <button
              onClick={toggleTheme}
              type="button"
              title={`Switch Style Theme (Current: ${isCyanPill ? 'Cyan Pill' : 'Crimson Current'})`}
              className={`
                relative hidden sm:flex items-center gap-1.5 px-2 sm:px-3 py-1.5 text-[11px] font-mono font-bold transition-all duration-300 cursor-pointer border
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
              <span className="hidden xl:inline text-[10px] tracking-wider font-mono">
                {isCyanPill ? 'CYAN' : 'CURRENT'}
              </span>
            </button>

            {/* Darkmode Toggle Icon Button */}
            <button
              onClick={toggleMode}
              type="button"
              title={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
              className={`
                hidden sm:flex p-1.5 sm:p-2.5 items-center justify-center transition-all duration-300 border cursor-pointer
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

            {/* ────── Mobile Hamburger Toggle Button (Visible on < lg) ────── */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className={`
                lg:hidden p-1.5 sm:p-2 flex items-center justify-center transition-all duration-300 border cursor-pointer
                ${isLight 
                  ? 'border-zinc-300 bg-zinc-100 hover:bg-zinc-200 text-zinc-900' 
                  : 'border-white/15 bg-black/40 hover:bg-white/10 text-white'}
              `}
              style={{
                borderRadius: isCyanPill ? '9999px' : '10px',
                color: mobileMenuOpen ? accentColor : undefined,
              }}
            >
              {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>

        {/* ────── MOBILE NAVIGATION DRAWER (Below Navbar) ────── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden pointer-events-auto mt-2 w-full max-w-7xl px-4 py-4 backdrop-blur-2xl border shadow-2xl flex flex-col gap-3.5 overflow-hidden"
              style={{
                background: isLight ? 'rgba(255,255,255,0.96)' : 'rgba(12,12,12,0.95)',
                borderColor: isLight 
                  ? 'rgba(0,0,0,0.15)' 
                  : (isCyanPill ? 'rgba(6, 182, 212, 0.4)' : 'rgba(239, 68, 68, 0.4)'),
                borderRadius: isCyanPill ? '24px' : '16px',
                boxShadow: isLight
                  ? '0 12px 40px rgba(0,0,0,0.12)'
                  : (isCyanPill
                      ? '0 12px 40px rgba(0,0,0,0.8), 0 0 20px rgba(6,182,212,0.15)'
                      : '0 12px 40px rgba(0,0,0,0.8), 0 0 20px rgba(239,68,68,0.15)'),
              }}
            >
              {/* Navigation Links Grid */}
              <div className="grid grid-cols-2 gap-2">
                {links.map((link) => {
                  const isActive = pathname === link.path || (link.path !== '/' && pathname?.startsWith(link.path));
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`
                        flex items-center justify-between px-3.5 py-2.5 text-xs font-bold tracking-wider transition-all duration-200 border
                        ${isActive
                          ? 'text-black font-extrabold shadow-sm'
                          : (isLight 
                              ? 'text-zinc-700 hover:text-black bg-zinc-100/80 border-zinc-200/80' 
                              : 'text-zinc-300 hover:text-white bg-white/[0.03] border-white/5')}
                      `}
                      style={{
                        borderRadius: isCyanPill ? '9999px' : '10px',
                        backgroundColor: isActive ? accentColor : undefined,
                        borderColor: isActive ? accentColor : undefined,
                      }}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />}
                    </Link>
                  );
                })}
              </div>

              {/* Action Toolbar Row Inside Mobile Menu */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 gap-2">
                {/* Theme Style Toggle */}
                <button
                  onClick={toggleTheme}
                  type="button"
                  className={`
                    flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 text-[11px] font-mono font-bold border transition-colors cursor-pointer
                    ${isLight ? 'bg-zinc-100 border-zinc-300 text-zinc-800' : 'bg-white/5 border-white/10 text-zinc-300'}
                  `}
                  style={{ borderRadius: isCyanPill ? '9999px' : '10px' }}
                >
                  <Palette size={13} style={{ color: accentColor }} />
                  <span>{isCyanPill ? 'Cyan' : 'Crimson'}</span>
                </button>

                {/* Dark/Light Mode Toggle */}
                <button
                  onClick={toggleMode}
                  type="button"
                  className={`
                    flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 text-[11px] font-mono font-bold border transition-colors cursor-pointer
                    ${isLight ? 'bg-zinc-100 border-zinc-300 text-zinc-800' : 'bg-white/5 border-white/10 text-zinc-300'}
                  `}
                  style={{ borderRadius: isCyanPill ? '9999px' : '10px' }}
                >
                  {isLight ? <Sun size={13} className="text-amber-500" /> : <Moon size={13} className="text-zinc-300" />}
                  <span>{isLight ? 'Light' : 'Dark'}</span>
                </button>

                {/* Copilot AI Button */}
                <button
                  onClick={() => { setAiModalOpen(true); setMobileMenuOpen(false); }}
                  type="button"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 text-[11px] font-bold border transition-all cursor-pointer shadow-sm text-white"
                  style={{
                    backgroundColor: accentColor,
                    borderColor: accentColor,
                    borderRadius: isCyanPill ? '9999px' : '10px',
                  }}
                >
                  <Sparkles size={13} />
                  <span>Ask AI</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* AI Assistant Modal */}
      <AiAssistantModal isOpen={aiModalOpen} onClose={() => setAiModalOpen(false)} />
    </>
  );
}
