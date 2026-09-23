"use client";

import React from 'react';
import {
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  CERTIFICATIONS_DATA,
  ACHIEVEMENTS_DATA,
  ADDITIONAL_CREDENTIALS_DATA,
  ExperienceItem,
  CertificationItem,
  AchievementItem,
  AdditionalCredentialItem,
} from '@/data/credentials';
import styles from './credentials.module.css';
import TiltCard from '@/components/TiltCard';
import { ArrowUpRight, CheckCircle2, ShieldCheck, FileText, Calendar, Building, Briefcase } from 'lucide-react';

export default function Credentials() {
  return (
    <div className={styles.container}>
      {/* ────── 1. PAGE HEADER ────── */}
      <header className={styles.header}>
        <h1 className={`text-title ${styles.title}`}>Credentials</h1>
        <p className={`text-body ${styles.subtitle}`}>
          Academic background, internships, certifications, and achievements.
        </p>
      </header>

      {/* ────── 2. EDUCATION ────── */}
      <section className={styles.section} aria-labelledby="section-edu">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>01</span>
          <h2 id="section-edu" className={styles.sectionTitle}>Education</h2>
        </div>

        <div className={styles.sectionBody}>
          <TiltCard
            withAnimatedBorder
            className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-3xl p-6 lg:p-8 flex flex-col gap-6 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group w-full"
          >
            <div className={styles.eduMain}>
              <div>
                <div className={styles.eduInstitution}>{EDUCATION_DATA.institution}</div>
                <div className={styles.eduDegree}>{EDUCATION_DATA.degree}</div>
                <div className={styles.eduSpecialization}>Specialization: {EDUCATION_DATA.specialization}</div>
              </div>

              {/* GPA & CPI Capsule */}
              <div className={styles.eduMetaCapsule}>
                <div>
                  <div className={styles.cgpaValue}>{EDUCATION_DATA.cgpa}</div>
                  <div className={styles.cgpaLabel}>Cumulative CGPA</div>
                </div>
                {EDUCATION_DATA.cpi && (
                  <>
                    <div className={styles.metaDivider} />
                    <div>
                      <div className={styles.cgpaValue}>{EDUCATION_DATA.cpi}</div>
                      <div className={styles.cgpaLabel}>Current CPI</div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} className="text-zinc-500" /> {EDUCATION_DATA.period}
              </span>
              <span className="flex items-center gap-1.5">
                <Building size={13} className="text-zinc-500" /> {EDUCATION_DATA.location}
              </span>
              {EDUCATION_DATA.transcriptRef && (
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <FileText size={13} className="text-zinc-500" /> Ref: {EDUCATION_DATA.transcriptRef}
                </span>
              )}
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck size={13} /> {EDUCATION_DATA.status}
              </span>
            </div>

            {/* Coursework Chips */}
            <div className={styles.courseworkList}>
              {EDUCATION_DATA.coursework.map((course, idx) => (
                <span key={idx} className={styles.courseChip}>
                  {course}
                </span>
              ))}
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ────── 3. INTERNSHIPS / EXPERIENCE ────── */}
      <section className={styles.section} aria-labelledby="section-exp">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>02</span>
          <h2 id="section-exp" className={styles.sectionTitle}>Experience & Internships</h2>
        </div>

        <div className={styles.sectionBody}>
          {EXPERIENCE_DATA.map((exp: ExperienceItem) => (
            <TiltCard
              key={exp.id}
              withAnimatedBorder
              className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-3xl p-6 lg:p-8 flex flex-col gap-4 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group w-full"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-[#EF4444]" />
                    <h3 className="text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                  </div>
                  <div className="text-sm font-semibold text-[#EF4444] font-mono">{exp.company} • {exp.location}</div>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">{exp.period}</span>
                  <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 size={12} /> {exp.type}</span>
                </div>
              </div>

              <ul className="space-y-2 mt-1">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-sm text-zinc-300 flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ────── 4. CERTIFICATIONS ────── */}
      <section className={styles.section} aria-labelledby="section-cert">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>03</span>
          <h2 id="section-cert" className={styles.sectionTitle}>Certifications</h2>
        </div>

        <div className={styles.sectionBody}>
          <div className={styles.archiveList}>
            {CERTIFICATIONS_DATA.map((cert: CertificationItem) => (
              <TiltCard
                key={cert.id}
                withAnimatedBorder
                className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-3xl p-4 sm:p-5 flex justify-between items-center transition-colors duration-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group w-full"
              >
                <div className={styles.itemLeft}>
                  <div className={styles.itemTitle}>
                    <span>{cert.name}</span>
                  </div>
                  <div className={styles.itemIssuer}>
                    {cert.issuer} {cert.credentialId && `• ID: ${cert.credentialId}`}
                  </div>
                </div>

                <div className={styles.itemRight}>
                  <span className={`${styles.statusBadge} ${cert.status === 'Verified' ? styles.verifiedBadge : ''}`}>
                    <CheckCircle2 size={11} />
                    <span>{cert.status}</span>
                  </span>

                  <span className={styles.itemDate}>{cert.date}</span>

                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 hover:text-white transition-colors"
                      title="View Certificate Verification"
                      aria-label={`View certificate for ${cert.name}`}
                    >
                      <ArrowUpRight size={15} className={styles.linkIcon} />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-zinc-600 px-1" title="Formal Verification Recorded">
                      Archived
                    </span>
                  )}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ────── 5. ACHIEVEMENTS & HACKATHONS ────── */}
      <section className={styles.section} aria-labelledby="section-ach">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>04</span>
          <h2 id="section-ach" className={styles.sectionTitle}>Achievements & Hackathons</h2>
        </div>

        <div className={styles.sectionBody}>
          <div className={styles.achievementGrid}>
            {ACHIEVEMENTS_DATA.map((ach: AchievementItem) => (
              <TiltCard
                key={ach.id}
                withAnimatedBorder
                className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-3xl p-5 md:p-6 flex flex-col justify-between transition-colors duration-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group h-full"
              >
                <div>
                  <div className={styles.achTop}>
                    <span className={styles.achOrg}>{ach.organization}</span>
                    <span className={styles.achMetric}>{ach.metric}</span>
                  </div>
                  <h3 className={styles.achTitle}>{ach.title}</h3>
                </div>
                <p className={styles.achHighlight}>{ach.highlight}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ────── 6. ADDITIONAL CREDENTIALS ────── */}
      <section className={styles.section} aria-labelledby="section-add">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>05</span>
          <h2 id="section-add" className={styles.sectionTitle}>Additional Credentials</h2>
        </div>

        <div className={styles.sectionBody}>
          <TiltCard
            withAnimatedBorder
            className="relative overflow-hidden bg-[#111111] border border-white/5 rounded-3xl overflow-hidden credentials-table-box transition-colors duration-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group w-full"
          >
            {ADDITIONAL_CREDENTIALS_DATA.map((item: AdditionalCredentialItem) => (
              <div key={item.id} className={styles.addCredRow}>
                <div>
                  <div className={styles.addCredTitle}>{item.title}</div>
                  <div className={styles.addCredIssuer}>{item.issuer} • {item.type}</div>
                </div>
                <div className={styles.addCredMeta}>
                  <span className="text-emerald-400 text-xs flex items-center gap-1 font-mono">
                    <CheckCircle2 size={12} /> {item.verification}
                  </span>
                  <span className="text-zinc-500 font-mono text-xs">{item.year}</span>
                </div>
              </div>
            ))}
          </TiltCard>
        </div>
      </section>
    </div>
  );
}
