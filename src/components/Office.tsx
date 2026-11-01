import React from 'react';
import { motion } from 'framer-motion';
import Ribbon from './primitives/Ribbon';
import Reveal from './ui/Reveal';

interface ExOfficioRole {
  institution: string;
  role: string;
  location: string;
}

const exOfficioRoles: ExOfficioRole[] = [
  {
    institution: 'NAGALAND UNIVERSITY',
    role: 'Chief Rector',
    location: 'Central University · Lumami, Nagaland',
  },
  {
    institution: 'GLOBAL OPEN UNIVERSITY',
    role: 'Visitor',
    location: 'State University · Dimapur',
  },
  {
    institution: 'ST. JOSEPH UNIVERSITY',
    role: 'Visitor',
    location: 'Chümoukedima',
  },
  {
    institution: 'ICFAI UNIVERSITY, NAGALAND',
    role: 'Visitor',
    location: 'Sovima, Dimapur',
  },
  {
    institution: 'CHRISTIAN INSTITUTE OF HEALTH SCIENCE & RESEARCH',
    role: 'Visitor',
    location: 'Tertiary Medical Center · Dimapur',
  },
];

export const Office: React.FC = () => {
  return (
    <section id="office" className="relative w-full bg-white px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
      {/* Deep Regal Sovereign Emerald Forest Block Card */}
      <div className="max-w-[1440px] mx-auto rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#06241B] via-[#093829] to-[#041A13] text-white p-6 sm:p-10 lg:p-16 border border-emerald-500/25 shadow-2xl overflow-hidden relative">
        {/* Soft emerald / mint ambient auras */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #10B981 0%, #059669 50%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #27E8C0 0%, transparent 70%)' }}
        />

        {/* 3 Overlapping Animated Dynamic Ribbons */}
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full pointer-events-none opacity-35 overflow-hidden">
          <Ribbon
            id="office-1"
            color1="#27E8C0"
            color2="#10B981"
            color3="#064E3B"
            curveType="wave"
            strokeWidth={3}
            className="absolute top-10 right-0 w-[600px] h-[260px]"
            animateScroll
          />
          <Ribbon
            id="office-2"
            color1="#10B981"
            color2="#059669"
            color3="#022C22"
            curveType="s-curve"
            strokeWidth={2}
            className="absolute top-36 -right-12 w-[520px] h-[340px]"
            animateScroll
          />
          <Ribbon
            id="office-3"
            color1="#6EE7B7"
            color2="#047857"
            color3="#064E3B"
            curveType="wave"
            strokeWidth={2.5}
            className="absolute -bottom-10 right-8 w-[580px] h-[280px]"
            animateScroll
          />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
            
            {/* Left Column Content */}
            <div className="w-full lg:w-[54%] flex flex-col">
              <Reveal>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#27E8C0] shadow-[0_0_8px_#27E8C0]" />
                  <span className="font-micro text-[11px] text-[#27E8C0] tracking-[0.14em] font-bold">
                    CHAPTER 05 · THE OFFICE
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-5 [text-wrap:balance]">
                  From Lok Bhavan, in service of the State.
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="font-body text-xs sm:text-sm lg:text-[15px] text-white/80 leading-[1.75] max-w-lg mb-8">
                  As the constitutional head of Nagaland, the Governor presides over the State’s legislative and executive balance. Beyond the Rajbhavan, Shri Yadav serves ex-officio as Chief Rector of Nagaland University and as Visitor to five of the State’s leading universities.
                </p>
              </Reveal>

              {/* Ex-Officio Appointments List */}
              <div className="flex flex-col w-full max-w-lg">
                <div className="font-micro text-[10px] text-[#27E8C0] tracking-[0.14em] mb-2 font-bold">
                  EX-OFFICIO CONSTITUTIONAL & ACADEMIC APPOINTMENTS
                </div>

                {exOfficioRoles.map((role, idx) => (
                  <div key={idx} className="relative py-3 group">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-3">
                      <span className="font-display text-xs sm:text-[13px] font-bold text-white tracking-tight group-hover:text-[#27E8C0] transition-colors">
                        {role.institution}
                      </span>
                      <span className="font-display text-xs sm:text-sm font-semibold text-[#27E8C0] shrink-0">
                        {role.role}
                      </span>
                    </div>
                    <div className="font-body text-[11px] text-white/60 mt-0.5">
                      {role.location}
                    </div>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.08 + idx * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500/30 origin-left"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 3D Stewardship Card */}
            <div className="w-full lg:w-[42%] flex flex-col justify-center">
              <Reveal delay={0.25}>
                <div
                  className="rounded-[24px] p-6 sm:p-8 border border-emerald-400/30 text-white relative overflow-hidden shadow-[0_20px_50px_rgba(4,26,19,0.6)] bg-white/[0.05] backdrop-blur-xl"
                >
                  <div className="w-10 h-10 rounded-full border border-emerald-400/40 flex items-center justify-center mb-5 text-[#27E8C0] bg-emerald-950/60 shadow-inner">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18M4 18h16M6 10v8M10 10v8M14 10v8M18 10v8M12 3l9 5H3l9-5z" />
                    </svg>
                  </div>

                  <div className="font-micro text-[10px] text-[#27E8C0] tracking-[0.14em] mb-1.5 font-bold">
                    CONSTITUTIONAL STEWARDSHIP
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 leading-snug">
                    Guarantor of Accord, Union & Tribal Heritage
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed mb-5">
                    Exercising constitutional responsibilities under Article 371A of the Constitution of India, safeguarding Naga customary laws, land resources, and religious traditions while fostering accelerated development.
                  </p>

                  <div className="pt-4 border-t border-emerald-500/30 flex items-center justify-between text-[11px] font-micro text-[#27E8C0] font-semibold">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27E8C0] animate-pulse" />
                      RESIDENCE: LOK BHAVAN
                    </span>
                    <span>KOHIMA 797001</span>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Office;
