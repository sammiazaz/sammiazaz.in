"use client";

import React, { useState } from 'react';

const TABS = ["All", "Languages", "Frontend", "Backend", "Databases", "Tools & Cloud", "Core CS", "AI / ML"];

const skillsData = [
  // Languages
  { name: "JavaScript", level: "Expert", tag: "Languages" },
  { name: "Python", level: "Advanced", tag: "Languages" },
  { name: "Java", level: "Intermediate", tag: "Languages" },
  { name: "SQL", level: "Advanced", tag: "Languages" },
  { name: "C++", level: "Advanced", tag: "Languages" },
  { name: "TypeScript", level: "Intermediate", tag: "Languages" },

  // Frontend
  { name: "React.js", level: "Expert", tag: "Frontend" },
  { name: "HTML5 & CSS3", level: "Expert", tag: "Frontend" },
  { name: "Vite", level: "Advanced", tag: "Frontend" },
  { name: "Responsive Design", level: "Expert", tag: "Frontend" },
  { name: "Cross-browser Compatibility", level: "Advanced", tag: "Frontend" },
  { name: "Next.js (Learning)", level: "Intermediate", tag: "Frontend" },
  { name: "Tailwind CSS", level: "Advanced", tag: "Frontend" },

  // Backend
  { name: "Node.js", level: "Advanced", tag: "Backend" },
  { name: "Express.js", level: "Advanced", tag: "Backend" },
  { name: "REST API Development", level: "Expert", tag: "Backend" },
  { name: "Authentication (JWT & OAuth)", level: "Advanced", tag: "Backend" },

  // Databases
  { name: "MongoDB", level: "Advanced", tag: "Databases" },
  { name: "MySQL", level: "Advanced", tag: "Databases" },
  { name: "DBMS Architecture", level: "Advanced", tag: "Databases" },

  // Tools & Cloud
  { name: "Git & GitHub", level: "Expert", tag: "Tools & Cloud" },
  { name: "VS Code", level: "Expert", tag: "Tools & Cloud" },
  { name: "Postman", level: "Advanced", tag: "Tools & Cloud" },
  { name: "Vercel", level: "Advanced", tag: "Tools & Cloud" },
  { name: "AWS", level: "Intermediate", tag: "Tools & Cloud" },

  // Core CS
  { name: "Data Structures & Algorithms", level: "Expert", tag: "Core CS" },
  { name: "Object-Oriented Programming (OOP)", level: "Advanced", tag: "Core CS" },
  { name: "Database Management Systems", level: "Advanced", tag: "Core CS" },
  { name: "Operating Systems", level: "Advanced", tag: "Core CS" },
  { name: "Computer Networks", level: "Advanced", tag: "Core CS" },
  { name: "System Design Basics", level: "Intermediate", tag: "Core CS" },

  // AI / ML
  { name: "Scikit-learn", level: "Advanced", tag: "AI / ML" },
  { name: "Pandas & NumPy", level: "Advanced", tag: "AI / ML" },
  { name: "SMOTE (Class Balancing)", level: "Advanced", tag: "AI / ML" },
  { name: "Logistic Regression & Random Forest", level: "Advanced", tag: "AI / ML" },
];

const LEVEL_COLOR: Record<string, string> = {
  Expert:       "#EF4444",
  Advanced:     "#10B981",
  Intermediate: "#F59E0B",
  Beginner:     "#6B7280",
};

const LEVEL_BG: Record<string, string> = {
  Expert:       "rgba(239,68,68,0.08)",
  Advanced:     "rgba(16,185,129,0.08)",
  Intermediate: "rgba(245,158,11,0.08)",
  Beginner:     "rgba(107,114,128,0.08)",
};

export default function SkillsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? skillsData
    : skillsData.filter(s => s.tag === active);

  return (
    <div className="page selection:bg-[#EF4444]/30 px-4 sm:px-6 lg:px-8">
      <div className="page-container pt-3 md:pt-4 pb-12">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-title text-white mb-3">Technical Skills</h1>
          <p className="text-subheading max-w-xl">
            Tools, languages, and frameworks I use to build real products.
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-1.5 rounded-xl text-label transition-all duration-200 cursor-pointer ${
                active === tab
                  ? "bg-[#EF4444]/15 border border-[#EF4444]/60 text-[#EF4444]"
                  : "bg-transparent border border-white/10 text-zinc-500 hover:border-white/30 hover:text-zinc-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Pills Grid */}
        <div className="flex flex-wrap gap-3">
          {filtered.map(skill => (
            <div
              key={skill.name + skill.tag}
              className="group flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/5 bg-[#111111] hover:border-white/15 transition-all duration-300 cursor-default"
              style={{
                "--hover-bg": LEVEL_BG[skill.level],
              } as React.CSSProperties}
            >
              {/* Level dot */}
              <span
                className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-125"
                style={{ backgroundColor: LEVEL_COLOR[skill.level], boxShadow: `0 0 6px ${LEVEL_COLOR[skill.level]}` }}
              />
              <span className="text-body font-medium text-zinc-300 group-hover:text-white transition-colors whitespace-nowrap">
                {skill.name}
              </span>
              <span
                className="text-[9px] font-mono font-bold uppercase tracking-widest ml-1 transition-colors"
                style={{ color: LEVEL_COLOR[skill.level] }}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 pt-6 border-t border-white/5">
          <span className="text-label text-zinc-600">Proficiency:</span>
          {Object.entries(LEVEL_COLOR).map(([level, color]) => (
            <div key={level} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-label" style={{ color }}>{level}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

