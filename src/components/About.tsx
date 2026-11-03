import React from 'react';
import GlassPrism from './primitives/GlassPrism';
import Reveal from './ui/Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full bg-white px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
      {/* Titanium Slate Modern Architectural Block Card */}
      <div className="max-w-[1440px] mx-auto rounded-[28px] sm:rounded-[36px] bg-[#0E121B] text-white p-6 sm:p-10 lg:p-16 border border-white/[0.12] shadow-2xl overflow-hidden relative">
        {/* Ambient Top Glow */}
        <div
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full pointer-events-none opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #E6511C 0%, #FBA74E 50%, transparent 70%)' }}
        />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 relative z-10">
          
          {/* Left Column: Formal Executive Editorial Copy */}
          <div className="w-full lg:w-[58%] flex flex-col">
            <Reveal>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#E6511C] shadow-[0_0_8px_#E6511C]" />
                <span className="font-micro text-[11px] text-[#FBA74E] tracking-[0.14em]">
                  CHAPTER 01 · ROOTS & SERVICE
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-5 [text-wrap:balance]">
                From the lanes of Patna to the hills of Kohima.
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="font-body text-xs sm:text-sm lg:text-[15px] text-white/80 leading-[1.75] max-w-[540px] space-y-4">
                <p>
                  Born on 26 August 1953 in Patna to Shri Panna Lal Yadav and Smt. Rajkumari Devi, Nand Kishore Yadav’s earliest lessons were in service. He joined the Rashtriya Swayamsevak Sangh in 1969 and became active in the Akhil Bharatiya Vidyarthi Parishad in 1971 — early years that would shape five decades of public life.
                </p>
                <p>
                  While pursuing his Bachelor of Science at Magadh University, he answered Loknayak Jayaprakash Narayan’s call and boycotted his final examination in 1974 to join the JP Movement in full. He was elected President of the Patna City Chhatra Sangharsh Samiti, and spent approximately fifteen months in prison between 1974 and 1976 — a chapter that still defines his public identity.
                </p>
              </div>
            </Reveal>

            {/* 3D Glass Stat Modules with Neon Borders */}
            <Reveal delay={0.25}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10 max-w-[540px]">
                <div className="p-4 sm:p-5 rounded-[20px] bg-white/[0.05] border border-white/10 backdrop-blur-md shadow-lg">
                  <div className="font-micro text-[10px] text-[#FBA74E] tracking-[0.14em] mb-1.5 font-semibold">
                    ANCESTRAL LINEAGE
                  </div>
                  <div className="font-display text-sm font-semibold text-white">
                    Shri Panna Lal Yadav & Smt. Rajkumari Devi
                  </div>
                  <div className="font-body text-[11px] text-white/50 mt-1">
                    Patna, Bihar · Roots in grassroots service
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-[20px] bg-white/[0.05] border border-white/10 backdrop-blur-md shadow-lg">
                  <div className="font-micro text-[10px] text-[#38BDF8] tracking-[0.14em] mb-1.5 font-semibold">
                    STUDENT LEADERSHIP
                  </div>
                  <div className="font-display text-sm font-semibold text-white">
                    ABVP Patna · RSS Shakha (1969)
                  </div>
                  <div className="font-body text-[11px] text-white/50 mt-1">
                    State Marwari HS & Magadh University B.Sc.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 3D Glass Prism */}
          <div className="w-full lg:w-[40%] flex items-center justify-center pt-2 lg:pt-0">
            <GlassPrism />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
