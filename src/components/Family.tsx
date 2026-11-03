import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';

interface FamilyRow {
  label: string;
  value: string;
}

const familyData: FamilyRow[] = [
  { label: 'FATHER', value: 'Late Shri Panna Lal Yadav' },
  { label: 'MOTHER', value: 'Late Smt. Rajkumari Devi' },
  { label: 'WIFE', value: 'Late Smt. Kiran Devi' },
  { label: 'CHILDREN', value: 'Two sons and two daughters, all married' },
  { label: 'HOMETOWN', value: 'Patna, Bihar' },
];

export const Family: React.FC = () => {
  return (
    <section id="family" className="relative w-full bg-white px-3 sm:px-4 lg:px-6 py-4 sm:py-6 select-none">
      {/* Editorial Card in --paper with soft border & shadow */}
      <div className="max-w-[1440px] mx-auto rounded-[28px] sm:rounded-[36px] bg-[#F6F2EC] text-[#0E0E10] p-6 sm:p-10 lg:p-16 border border-[#0E0E10]/[0.08] shadow-xl overflow-hidden relative">
        
        {/* Soft Mesh Blob in --amber-* palette, top-left, 40% opacity, blur 100px */}
        <div
          className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full pointer-events-none opacity-40 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #FBA74E 0%, #E6511C 50%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
          
          {/* Left Column (60%): Micro label CHAPTER 02 · FAMILY → H2 “A life anchored at home.” */}
          <div className="w-full lg:w-[56%] flex flex-col justify-center">
            <Reveal>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#E6511C] shadow-[0_0_8px_#E6511C]" />
                <span className="font-micro text-[11px] text-[#E6511C] tracking-[0.14em] font-bold">
                  CHAPTER 02 · FAMILY
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-fraunces font-normal text-3xl sm:text-4xl lg:text-5xl text-[#0E0E10] tracking-tight leading-[1.15] mb-5 [text-wrap:balance]">
                A life anchored at home.
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="font-body text-xs sm:text-sm lg:text-[15px] text-[#4A4A4E] leading-[1.75] max-w-lg mb-6">
                Rooted in the timeless ethos of Patna, Shri Yadav’s journey in public governance has been sustained by deep familial devotion, humility, and enduring principles passed across generations.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 border border-[#0E0E10]/10 backdrop-blur-sm w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E6511C]" />
                <span className="font-micro text-[10px] text-[#0E0E10]/80 tracking-[0.14em] font-semibold uppercase">
                  Grassroots Heritage · Patna, Bihar
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Column (40%): 5-Row Metadata Grid */}
          <div className="w-full lg:w-[44%] flex flex-col justify-center">
            <div className="flex flex-col w-full divide-y-0">
              {familyData.map((row, idx) => (
                <div
                  key={idx}
                  className="relative py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 px-2 sm:px-0"
                >
                  <span className="font-micro text-[11px] text-[#0E0E10]/60 tracking-[0.14em] font-semibold uppercase shrink-0">
                    {row.label}
                  </span>

                  <span className="font-fraunces italic font-normal text-base sm:text-lg lg:text-[20px] text-[#0E0E10] text-left sm:text-right leading-snug">
                    {row.value}
                  </span>

                  {/* Scroll-reveal underline drawing scaleX 0 → 1 origin-left over 400ms, staggered 60ms */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + idx * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute bottom-0 left-0 w-full h-[1px] origin-left pointer-events-none"
                    style={{ backgroundColor: 'rgba(14, 14, 16, 0.08)' }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Family;
