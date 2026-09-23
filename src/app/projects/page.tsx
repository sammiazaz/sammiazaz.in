"use client";

import React from 'react';
import TiltCard from '@/components/TiltCard';
import { ExternalLink, FileText, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const projectsData = [
  {
    num: "01",
    tag: "FULL STACK · AI TRAVEL PLATFORM",
    title: "TripNest",
    subtitle: "FULL STACK AI TRAVEL PLANNING PLATFORM",
    description: "Built a full-stack travel platform with component-based React.js frontend and scalable Node.js/Express.js backend, enabling users to discover destinations and manage trips. Designed secure REST APIs with authentication flows, applied system design principles, integrated MongoDB, and deployed on Vercel with Git/GitHub.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Vercel", "Git/GitHub"],
    image: "/images/tripnest.jpg",
    links: [
      { label: "View Project", url: "https://github.com/sammiazaz", type: "primary" },
      { label: "Source", url: "https://github.com/sammiazaz", type: "secondary", icon: "github" }
    ],
    fullWidth: true
  },
  {
    num: "02",
    tag: "HEALTHCARE · ML",
    title: "Human Heart Disease Prediction System",
    subtitle: "MACHINE LEARNING CLASSIFICATION PIPELINE",
    description: "Built a classification pipeline using Logistic Regression and Random Forest to predict heart disease risk from multiple health indicators, demonstrating Python and data analysis proficiency. Applied SMOTE to correct class imbalance and performed end-to-end data preprocessing with Pandas and NumPy.",
    tech: ["Python", "Scikit-learn", "SMOTE", "Pandas", "NumPy", "Random Forest"],
    image: "/images/heart.jpg",
    links: [
      { label: "Live Demo", url: "https://github.com/sammiazaz", type: "primary" },
      { label: "Code", url: "https://github.com/sammiazaz/heart-disease-pridiction-system-using-machine-learning", type: "secondary", icon: "github" }
    ]
  },
  {
    num: "03",
    tag: "CYBERSECURITY · AI",
    title: "Network Intrusion Detection System",
    subtitle: "CYBERSECURITY ANOMALY DETECTION PIPELINE",
    description: "Designed a real-time network intrusion detection system using supervised machine learning algorithms to identify malicious network traffic and anomaly patterns. Processed high-dimensional packet data and evaluated performance using precision-recall metrics.",
    tech: ["Python", "FastAPI", "Scikit-learn", "Pandas", "NumPy", "HTML5/CSS3", "JavaScript"],
    image: "/images/intrusion.jpg",
    links: [
      { label: "Live Demo", url: "https://ai-intrusion-detection-system.onrender.com/", type: "primary" },
      { label: "Code", url: "https://github.com/sammiazaz/AI-Intrusion-Detection-System", type: "secondary", icon: "github" },
      { label: "Case Study", url: "#", type: "secondary" }
    ]
  },
  {
    num: "04",
    tag: "NLP · RECOMMENDER",
    title: "Movie Recommendation Engine",
    subtitle: "CONTENT-BASED FILTERING & NLP SYSTEM",
    description: "Developed a personalized movie recommendation engine leveraging TF-IDF vectorization and Cosine Similarity to recommend movies based on genre, plot summaries, cast, and director metadata.",
    tech: ["Python", "NLP", "TF-IDF", "Streamlit", "TMDB API"],
    image: "/images/movie.jpg",
    links: [
      { label: "Live Demo", url: "https://github.com/sammiazaz", type: "primary" },
      { label: "Code", url: "https://github.com/sammiazaz", type: "secondary", icon: "github" }
    ]
  }
];

export default function ProjectsPage() {
  const fullWidthProject = projectsData[0];
  const gridProjects = projectsData.slice(1);

  const renderButtons = (links: any[]) => {
    return (
      <div className="flex flex-wrap items-center gap-3 mt-auto pt-6">
        {links.map((link, idx) => {
          if (link.type === 'primary') {
            return (
              <a 
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#EF4444] text-black font-bold text-[11px] rounded-xl hover:bg-[#EF4444]/90 transition-colors"
              >
                {link.label}
                <ArrowUpRight size={14} strokeWidth={3} />
              </a>
            )
          }
          return (
            <a 
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent border border-white/20 text-white font-semibold text-[11px] rounded-xl hover:bg-white/5 transition-colors"
            >
              {link.icon === 'github' && <GithubIcon size={14} />}
              {link.label}
            </a>
          )
        })}
      </div>
    );
  };

  const renderTechStack = (tech: string[]) => {
    return (
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t) => (
          <span key={t} className="px-2.5 py-1.5 bg-transparent border border-white/20 rounded-xl text-[9px] font-mono font-bold text-zinc-300 tracking-wider">
            {t}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="page selection:bg-[#EF4444]/30 px-4 sm:px-6 lg:px-8">
      <div className="page-container pt-3 md:pt-4">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-title text-white mb-3">Selected Work</h1>
          <p className="text-subheading max-w-lg">
            A selection of systems, products and experiments I&apos;ve built across full-stack development, AI/ML and software engineering.
          </p>
        </div>

        {/* Featured Full Width Project */}
        <div className="mb-8">
          <TiltCard withAnimatedBorder className="bg-[#111111] border border-white/5 rounded-3xl p-6 lg:p-10 relative overflow-hidden transition-colors duration-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              
              {/* Left Content */}
              <div className="flex flex-col h-full z-10">
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-label text-zinc-100">{fullWidthProject.num}</span>
                  <span className="text-label text-[#EF4444]">{fullWidthProject.tag.split('·')[0].trim()} · {fullWidthProject.tag.split('·')[1].trim()}</span>
                </div>
                
                <h2 className="text-heading text-white mb-2">{fullWidthProject.title}</h2>
                <h3 className="text-label text-[#EF4444] mb-6">{fullWidthProject.subtitle}</h3>
                
                <p className="text-body mb-10 max-w-md">
                  {fullWidthProject.description}
                </p>

                {renderTechStack(fullWidthProject.tech)}
                {renderButtons(fullWidthProject.links)}
              </div>

              {/* Right Image */}
              <div className="relative w-full aspect-[16/10] lg:aspect-[4/3] rounded-xl overflow-hidden border border-[#1F1F1F]">
                <img src={fullWidthProject.image} alt={fullWidthProject.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            </TiltCard>
          </div>

        {/* 2-Column Grid for Remaining Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {gridProjects.map((proj, index) => (
            <TiltCard key={index} withAnimatedBorder className="bg-[#111111] border border-white/5 rounded-3xl p-5 relative overflow-hidden transition-colors duration-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group flex flex-col h-full w-full">
              
              {/* Header Tags */}
              <div className="flex items-center justify-between mb-5 px-1">
                <span className="text-label text-zinc-100">{proj.num}</span>
                <span className="text-label text-[#EF4444]">{proj.tag}</span>
              </div>

              {/* Image */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#1F1F1F] mb-6">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-1">
                <h2 className="text-xl font-bold tracking-tight text-[#F5F5F5] mb-2">{proj.title}</h2>
                <h3 className="text-label text-[#EF4444] mb-4">{proj.subtitle}</h3>
                
                <p className="text-body mb-8 flex-grow">
                  {proj.description}
                </p>

                {renderTechStack(proj.tech)}
                <div className="mt-auto">
                  {renderButtons(proj.links)}
                </div>
              </div>

            </TiltCard>
          ))}
        </div>

      </div>
    </div>
  );
}

