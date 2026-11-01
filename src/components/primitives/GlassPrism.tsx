import React from 'react';
import { motion } from 'framer-motion';

export const GlassPrism: React.FC = () => {
  return (
    <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] flex items-center justify-center [perspective:1200px]">
      {/* Background ambient light */}
      <div
        className="absolute inset-0 rounded-full blur-[80px] opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #FBA74E 0%, #E6511C 50%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ rotateX: -20, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full flex items-center justify-center"
      >
        <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px] preserve-3d animate-prism-spin">
          {/* Face 1: Front */}
          <div
            className="absolute inset-0 rounded-20 p-6 flex flex-col justify-between border border-white/30 text-white select-none"
            style={{
              transform: 'translateZ(100px) sm:translateZ(120px) lg:translateZ(140px)',
              background: 'conic-gradient(from 180deg at 50% 50%, #E6511C 0deg, #FF4D7E 180deg, #FBA74E 360deg)',
              backdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '0 20px 50px rgba(74, 26, 2, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.2)',
            }}
          >
            <div className="flex justify-between items-start">
              <span className="font-micro text-[11px] text-white/80 tracking-[0.14em]">01 · ACADEMICS</span>
              <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
            </div>
            <div>
              <div className="font-micro text-xs text-white/70 mb-1">FOUNDATION</div>
              <div className="font-micro text-[13px] sm:text-sm font-semibold tracking-[0.14em] text-white leading-tight">
                B.SC. · MAGADH UNIVERSITY
              </div>
            </div>
            <div className="text-[10px] font-micro text-white/60 border-t border-white/20 pt-2">
              STATE MARWARI HS · 1969
            </div>
          </div>

          {/* Face 2: Right */}
          <div
            className="absolute inset-0 rounded-20 p-6 flex flex-col justify-between border border-white/30 text-white select-none"
            style={{
              transform: 'rotateY(90deg) translateZ(100px) sm:translateZ(120px) lg:translateZ(140px)',
              background: 'conic-gradient(from 90deg at 50% 50%, #9A3412 0deg, #E6511C 160deg, #FFE6C2 360deg)',
              backdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '0 20px 50px rgba(74, 26, 2, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.2)',
            }}
          >
            <div className="flex justify-between items-start">
              <span className="font-micro text-[11px] text-white/80 tracking-[0.14em]">02 · GRASSROOTS</span>
              <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
            </div>
            <div>
              <div className="font-micro text-xs text-white/70 mb-1">DISCIPLINE</div>
              <div className="font-micro text-[13px] sm:text-sm font-semibold tracking-[0.14em] text-white leading-tight">
                RSS · 1969
              </div>
            </div>
            <div className="text-[10px] font-micro text-white/60 border-t border-white/20 pt-2">
              PATNA · FIVE DECADES
            </div>
          </div>

          {/* Face 3: Back */}
          <div
            className="absolute inset-0 rounded-20 p-6 flex flex-col justify-between border border-white/30 text-white select-none"
            style={{
              transform: 'rotateY(180deg) translateZ(100px) sm:translateZ(120px) lg:translateZ(140px)',
              background: 'conic-gradient(from 270deg at 50% 50%, #FF4D7E 0deg, #E6511C 180deg, #FBA74E 360deg)',
              backdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '0 20px 50px rgba(74, 26, 2, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.2)',
            }}
          >
            <div className="flex justify-between items-start">
              <span className="font-micro text-[11px] text-white/80 tracking-[0.14em]">03 · STUDENT ACTIVISM</span>
              <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
            </div>
            <div>
              <div className="font-micro text-xs text-white/70 mb-1">LEADERSHIP</div>
              <div className="font-micro text-[13px] sm:text-sm font-semibold tracking-[0.14em] text-white leading-tight">
                ABVP · 1971
              </div>
            </div>
            <div className="text-[10px] font-micro text-white/60 border-t border-white/20 pt-2">
              PUBLIC SERVICE AWAKENING
            </div>
          </div>

          {/* Face 4: Left */}
          <div
            className="absolute inset-0 rounded-20 p-6 flex flex-col justify-between border border-white/30 text-white select-none"
            style={{
              transform: 'rotateY(-90deg) translateZ(100px) sm:translateZ(120px) lg:translateZ(140px)',
              background: 'conic-gradient(from 0deg at 50% 50%, #4A1A02 0deg, #9A3412 180deg, #FBA74E 360deg)',
              backdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '0 20px 50px rgba(74, 26, 2, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.2)',
            }}
          >
            <div className="flex justify-between items-start">
              <span className="font-micro text-[11px] text-white/80 tracking-[0.14em]">SEVA · संकल्प</span>
              <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
            </div>
            <div>
              <div className="font-micro text-xs text-white/70 mb-1">MANDATE</div>
              <div className="font-micro text-[13px] sm:text-sm font-semibold tracking-[0.14em] text-white leading-tight">
                1953 · PATNA TO KOHIMA
              </div>
            </div>
            <div className="text-[10px] font-micro text-white/60 border-t border-white/20 pt-2">
              CONSTITUTIONAL HEAD
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GlassPrism;
