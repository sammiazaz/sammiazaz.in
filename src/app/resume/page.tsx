"use client";

import React, { useState } from 'react';
import TiltCard from '@/components/TiltCard';
import { useTheme } from '@/context/ThemeContext';
import { 
  Download, 
  ExternalLink, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  FolderGit2, 
  Award,
  X,
  CheckCircle2,
  Calendar
} from 'lucide-react';

const SKILLS_ROWS = [
  {
    category: "PROGRAMMING LANGUAGES",
    items: "JavaScript, Python, Java, SQL",
  },
  {
    category: "FRONTEND",
    items: "HTML5, CSS3, React.js, Vite, Responsive Design, Cross-browser Compatibility",
  },
  {
    category: "BACKEND",
    items: "Node.js, Express.js, REST API Development, Authentication & Authorization (JWT, OAuth)",
  },
  {
    category: "DATABASES",
    items: "MongoDB, MySQL",
  },
  {
    category: "DEVELOPER TOOLS",
    items: "Git, GitHub, VS Code, Postman, Vercel, AWS",
  },
  {
    category: "CORE CS",
    items: "Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, System Design Basics",
  },
  {
    category: "CURRENTLY LEARNING",
    items: "Next.js, TypeScript",
  },
];

export default function ResumePage() {
  const { theme } = useTheme();
  const isCyan = theme === 'cyan-pill';
  const accentColor = isCyan ? '#06B6D4' : '#EF4444';
  const [activeVersion, setActiveVersion] = useState<'new' | 'old'>('new');
  const [pdfModalOpen, setPdfModalOpen] = useState(false);

  return (
    <div className="page selection:bg-[#EF4444]/30 px-4 sm:px-6 lg:px-8">
      <div className="page-container pt-3 md:pt-4 pb-20 max-w-5xl">
        
        {/* ────── 1. HEADER SECTION ────── */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
          <div>
            {/* OLD / NEW Toggle Pill */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 mb-4 shadow-sm">
              <button
                type="button"
                onClick={() => setActiveVersion('old')}
                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                  activeVersion === 'old'
                    ? 'bg-white/20 text-white'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                OLD
              </button>
              <span className="text-zinc-700 text-xs">/</span>
              <button
                type="button"
                onClick={() => setActiveVersion('new')}
                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                  activeVersion === 'new'
                    ? 'text-white shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
                style={{
                  backgroundColor: activeVersion === 'new' ? accentColor : 'transparent'
                }}
              >
                NEW
              </button>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
              Curriculum Vitae
            </h1>
            <p className="text-sm md:text-[15px] text-zinc-400 max-w-2xl leading-relaxed">
              A chronological breakdown of my technical trajectory, software engineering experience, applied machine learning systems, and academic milestones.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 self-start md:self-auto flex-shrink-0 pt-2">
            <a
              href="/resume.pdf"
              download="Sammi_Azaz_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white transition-all duration-200 shadow-lg hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              style={{ 
                backgroundColor: accentColor,
                boxShadow: `0 0 20px ${isCyan ? 'rgba(6,182,212,0.3)' : 'rgba(239,68,68,0.3)'}`
              }}
            >
              <Download size={14} strokeWidth={2.5} />
              <span>Download PDF</span>
              <span>↓</span>
            </a>

            <button
              type="button"
              onClick={() => setPdfModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-zinc-200 hover:text-white hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5 active:translate-y-0 text-xs font-semibold transition-all duration-200 cursor-pointer"
            >
              <ExternalLink size={14} />
              <span>View PDF</span>
              <span>↗</span>
            </button>
          </div>
        </div>

        {/* ────── 2. SECTION 01: EDUCATION ────── */}
        <section className="mb-12">
          {/* Section Heading with Divider */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono font-bold" style={{ color: accentColor }}>
              01
            </span>
            <div 
              className="w-7 h-7 rounded-lg flex items-center justify-center border"
              style={{
                backgroundColor: isCyan ? 'rgba(6,182,212,0.1)' : 'rgba(239,68,68,0.1)',
                borderColor: isCyan ? 'rgba(6,182,212,0.2)' : 'rgba(239,68,68,0.2)',
                color: accentColor
              }}
            >
              <GraduationCap size={15} />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">Education</h2>
            <div className="flex-1 h-px bg-white/5 ml-2" />
          </div>

          {/* Education Card */}
          <TiltCard
            withAnimatedBorder
            className="bg-[#111111] border border-white/5 rounded-3xl p-6 relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
              <h3 className="text-base md:text-lg font-bold text-white">
                B.Tech - Computer Science &amp; Engineering
              </h3>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-400 self-start sm:self-auto">
                July 2023 – Aug 2027
              </span>
            </div>

            <div className="text-xs md:text-sm font-semibold mb-3" style={{ color: accentColor }}>
              IILM University, Greater Noida, India
            </div>

            <p className="text-xs text-zinc-400 flex items-start gap-2 leading-relaxed">
              <span className="text-zinc-600 font-bold">•</span>
              <span>
                <strong className="text-zinc-300 font-medium">Relevant Coursework:</strong> Data Structures &amp; Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, System Design Basics
              </span>
            </p>
          </TiltCard>
        </section>

        {/* ────── 3. SECTION 02: TECHNICAL SKILLS ────── */}
        <section className="mb-12">
          {/* Section Heading with Divider */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono font-bold" style={{ color: accentColor }}>
              02
            </span>
            <div 
              className="w-7 h-7 rounded-lg flex items-center justify-center border"
              style={{
                backgroundColor: isCyan ? 'rgba(6,182,212,0.1)' : 'rgba(239,68,68,0.1)',
                borderColor: isCyan ? 'rgba(6,182,212,0.2)' : 'rgba(239,68,68,0.2)',
                color: accentColor
              }}
            >
              <Code2 size={15} />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">Technical Skills</h2>
            <div className="flex-1 h-px bg-white/5 ml-2" />
          </div>

          {/* Technical Skills Stacked Rows Card */}
          <TiltCard
            withAnimatedBorder
            className="bg-[#111111] border border-white/5 rounded-3xl p-4 md:p-6 space-y-2.5"
          >
            {SKILLS_ROWS.map((row) => (
              <div 
                key={row.category}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-3.5 rounded-xl bg-transparent border border-white/5 hover:border-white/10 transition-colors"
              >
                <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500 w-48 flex-shrink-0">
                  {row.category}
                </span>
                <span className="text-xs md:text-sm font-medium text-zinc-200 leading-relaxed">
                  {row.items}
                </span>
              </div>
            ))}
          </TiltCard>
        </section>

        {/* ────── 4. SECTION 03: PROJECTS ────── */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono font-bold" style={{ color: accentColor }}>
              03
            </span>
            <div 
              className="w-7 h-7 rounded-lg flex items-center justify-center border"
              style={{
                backgroundColor: isCyan ? 'rgba(6,182,212,0.1)' : 'rgba(239,68,68,0.1)',
                borderColor: isCyan ? 'rgba(6,182,212,0.2)' : 'rgba(239,68,68,0.2)',
                color: accentColor
              }}
            >
              <FolderGit2 size={15} />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">Projects</h2>
            <div className="flex-1 h-px bg-white/5 ml-2" />
          </div>

          <div className="space-y-4">
            {/* TripNest */}
            <TiltCard
              withAnimatedBorder
              className="bg-[#111111] border border-white/5 rounded-3xl p-6 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                <h3 className="text-base md:text-lg font-bold text-white">
                  TripNest – Full Stack AI Travel Planning Platform
                </h3>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-400 self-start sm:self-auto">
                  2026
                </span>
              </div>

              <div className="text-xs md:text-sm font-semibold mb-3 font-mono" style={{ color: accentColor }}>
                React.js, Node.js, Express.js, MongoDB, REST APIs
              </div>

              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-start gap-2 leading-relaxed">
                  <span className="text-zinc-600 font-bold">•</span>
                  <span>Built a full-stack travel platform with component-based React.js frontend and scalable Node.js/Express.js backend, enabling users to discover destinations and manage trips.</span>
                </li>
                <li className="flex items-start gap-2 leading-relaxed">
                  <span className="text-zinc-600 font-bold">•</span>
                  <span>Designed secure REST APIs with authentication flows and applied basic system design principles; integrated MongoDB for data storage and deployed on Vercel with Git/GitHub.</span>
                </li>
                <li className="flex items-start gap-2 leading-relaxed">
                  <span className="text-zinc-600 font-bold">•</span>
                  <span>Developed a fully responsive, cross-browser compatible UI for consistent experience across desktop and mobile.</span>
                </li>
              </ul>
            </TiltCard>

            {/* Heart Disease System */}
            <TiltCard
              withAnimatedBorder
              className="bg-[#111111] border border-white/5 rounded-3xl p-6 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                <h3 className="text-base md:text-lg font-bold text-white">
                  Human Heart Disease Prediction System
                </h3>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-400 self-start sm:self-auto">
                  Dec 2025
                </span>
              </div>

              <div className="text-xs md:text-sm font-semibold mb-3 font-mono" style={{ color: accentColor }}>
                Python, Scikit-learn, SMOTE, Pandas
              </div>

              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-start gap-2 leading-relaxed">
                  <span className="text-zinc-600 font-bold">•</span>
                  <span>Built a classification pipeline using Logistic Regression and Random Forest to predict heart disease risk from multiple health indicators, demonstrating Python and data analysis proficiency.</span>
                </li>
                <li className="flex items-start gap-2 leading-relaxed">
                  <span className="text-zinc-600 font-bold">•</span>
                  <span>Applied SMOTE to correct class imbalance and performed end-to-end data preprocessing with Pandas and NumPy.</span>
                </li>
              </ul>
            </TiltCard>
          </div>
        </section>

        {/* ────── 5. SECTION 04: EXPERIENCE ────── */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono font-bold" style={{ color: accentColor }}>
              04
            </span>
            <div 
              className="w-7 h-7 rounded-lg flex items-center justify-center border"
              style={{
                backgroundColor: isCyan ? 'rgba(6,182,212,0.1)' : 'rgba(239,68,68,0.1)',
                borderColor: isCyan ? 'rgba(6,182,212,0.2)' : 'rgba(239,68,68,0.2)',
                color: accentColor
              }}
            >
              <Briefcase size={15} />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">Internships</h2>
            <div className="flex-1 h-px bg-white/5 ml-2" />
          </div>

          <TiltCard
            withAnimatedBorder
            className="bg-[#111111] border border-white/5 rounded-3xl p-6 relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
              <h3 className="text-base md:text-lg font-bold text-white">
                Web Developer Intern
              </h3>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-400 self-start sm:self-auto">
                Jun 2025 – Jul 2025
              </span>
            </div>

            <div className="text-xs md:text-sm font-semibold mb-3 font-mono" style={{ color: accentColor }}>
              Prodigy Infotech • Remote
            </div>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-zinc-600 font-bold">•</span>
                <span>Developed 3+ responsive web applications using HTML, CSS, and JavaScript with consistent, cross-browser compatible UI.</span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-zinc-600 font-bold">•</span>
                <span>Optimized application performance, accessibility, and cross-browser compatibility, improving user experience.</span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-zinc-600 font-bold">•</span>
                <span>Managed source code with Git/GitHub and deployed projects to cloud platforms in collaboration with the team.</span>
              </li>
            </ul>
          </TiltCard>
        </section>

        {/* ────── 6. SECTION 05: CERTIFICATIONS & HACKATHONS ────── */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono font-bold" style={{ color: accentColor }}>
              05
            </span>
            <div 
              className="w-7 h-7 rounded-lg flex items-center justify-center border"
              style={{
                backgroundColor: isCyan ? 'rgba(6,182,212,0.1)' : 'rgba(239,68,68,0.1)',
                borderColor: isCyan ? 'rgba(6,182,212,0.2)' : 'rgba(239,68,68,0.2)',
                color: accentColor
              }}
            >
              <Award size={15} />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">Certifications &amp; Hackathons</h2>
            <div className="flex-1 h-px bg-white/5 ml-2" />
          </div>

          <TiltCard
            withAnimatedBorder
            className="bg-[#111111] border border-white/5 rounded-3xl p-6 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs md:text-sm font-bold text-white">AWS Academy Machine Learning Foundations</div>
                  <div className="text-[11px] text-zinc-500 font-mono">AWS Academy Graduate • 2025</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs md:text-sm font-bold text-white">Web Development</div>
                  <div className="text-[11px] text-zinc-500 font-mono">Udemy Specialization • 2025</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs md:text-sm font-bold text-white">Java Programming: Beginner to Master</div>
                  <div className="text-[11px] text-zinc-500 font-mono">Udemy Masterclass • 2025</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs md:text-sm font-bold text-white">Google Cloud Agentic AI Day</div>
                  <div className="text-[11px] text-zinc-500 font-mono">Hack2Skill (Feb 2025) &amp; Bharatiya Antariksh Hackathon</div>
                </div>
              </div>
            </div>
          </TiltCard>
        </section>

        {/* ────── MODAL: FULLSCREEN EMBEDDED PDF VIEWER ────── */}
        {pdfModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div 
              className="absolute inset-0" 
              onClick={() => setPdfModalOpen(false)} 
            />

            <div className="relative z-10 w-full max-w-4xl h-[90vh] bg-[#111111] border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Sammi Azaz Resume.pdf</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="/resume.pdf"
                    download="Sammi_Azaz_Resume.pdf"
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-white transition-colors"
                    style={{ backgroundColor: accentColor }}
                  >
                    <Download size={12} /> Download
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-white/10 text-xs text-zinc-300 hover:text-white"
                  >
                    <ExternalLink size={12} /> New Tab
                  </a>
                  <button
                    onClick={() => setPdfModalOpen(false)}
                    className="p-1 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Iframe */}
              <div className="flex-1 w-full bg-[#0A0A0A]">
                <iframe
                  src="/resume.pdf#toolbar=0"
                  className="w-full h-full border-0"
                  title="PDF Viewer Modal"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
