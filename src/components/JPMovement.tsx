import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Ribbon from './primitives/Ribbon';

const StatCounter: React.FC<{ target: number; padZero?: boolean }> = ({ target, padZero = false }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { damping: 25, stiffness: 90 });
  const [displayNumber, setDisplayNumber] = useState(padZero ? '00' : '0');

  useEffect(() => {
    if (inView) {
      motionVal.set(target);
    }
  }, [inView, motionVal, target]);

  useEffect(() => {
    const unsubscribe = springVal.on('change', (latest) => {
      const rounded = Math.round(latest);
      if (padZero && target >= 10) {
        setDisplayNumber(rounded < 10 ? `0${rounded}` : `${rounded}`);
      } else {
        setDisplayNumber(`${rounded}`);
      }
    });
    return () => unsubscribe();
  }, [springVal, target, padZero]);

  return <span ref={ref}>{displayNumber}</span>;
};

export const JPMovement: React.FC = () => {
  const easeExpoOut = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="jp-movement" className="relative w-full bg-white px-3 sm:px-4 lg:px-6 py-4 sm:py-6 select-none">
      {/* Full-bleed --ink block card, 100svh on desktop, auto on mobile with 96px vertical padding */}
      <div className="max-w-[1440px] mx-auto rounded-[28px] sm:rounded-[36px] bg-[#0E0E10] text-[#F6F2EC] py-24 sm:py-28 lg:py-0 lg:min-h-[100svh] px-6 sm:px-10 lg:px-16 border border-white/10 shadow-2xl overflow-hidden relative flex items-center">
        
        {/* Soft Amber Glow Highlights */}
        <div
          className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #E6511C 0%, #FBA74E 50%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none opacity-15 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #9A3412 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        {/* Right half: 3 overlapping Ribbons (Primitive C) in gradient --amber-500 → --amber-300 */}
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full pointer-events-none opacity-30 lg:opacity-40 overflow-hidden">
          <Ribbon
            id="jp-ribbon-1"
            color1="#E6511C"
            color2="#FBA74E"
            color3="#FFE6C2"
            curveType="wave"
            strokeWidth={3.5}
            className="absolute top-12 -right-8 w-[640px] h-[280px]"
            animateScroll
          />
          <Ribbon
            id="jp-ribbon-2"
            color1="#FBA74E"
            color2="#E6511C"
            color3="#9A3412"
            curveType="s-curve"
            strokeWidth={2.5}
            className="absolute top-44 -right-16 w-[560px] h-[340px]"
            animateScroll
          />
          <Ribbon
            id="jp-ribbon-3"
            color1="#FFE6C2"
            color2="#FBA74E"
            color3="#E6511C"
            curveType="wave"
            strokeWidth={2.8}
            className="absolute -bottom-10 right-4 w-[600px] h-[300px]"
            animateScroll
          />
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 w-full max-w-4xl py-8">
          
          {/* Micro label */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: easeExpoOut }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#E6511C] shadow-[0_0_8px_#E6511C]" />
            <span className="font-micro text-[11px] text-[#FBA74E] tracking-[0.14em] font-bold uppercase">
              CHAPTER 03 · THE DEFINING CHAPTER
            </span>
          </motion.div>

          {/* H2 (Fraunces 500, clamp(44px, 7vw, 96px), tracking -0.03em) */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.85, delay: 0.08, ease: easeExpoOut }}
            className="font-fraunces font-medium text-[clamp(44px,7vw,96px)] leading-[1.05] tracking-[-0.03em] text-[#F6F2EC] mb-6 [text-wrap:balance]"
          >
            Fifteen months behind bars. One lifetime of conviction.
          </motion.h2>

          {/* Body (Inter 400, 20px, paper@85%, max-width 640px) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.85, delay: 0.16, ease: easeExpoOut }}
            className="font-body font-normal text-base sm:text-lg lg:text-[20px] text-[#F6F2EC]/85 leading-[1.7] max-w-[640px] space-y-4 mb-10"
          >
            <p>
              In 1974, Loknayak Jayaprakash Narayan called the nation’s youth to the streets. Nand Kishore Yadav answered — and walked away from the final examination of his Bachelor of Science to lead the Patna City Chhatra Sangharsh Samiti as its President.
            </p>
            <p>
              Between 1974 and 1976, during the Emergency, he spent approximately fifteen months in prison. A degree was postponed; a public life began.
            </p>
          </motion.div>

          {/* Two-stat row below the body (horizontal on desktop, stacked vertically on mobile under 640px) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.85, delay: 0.24, ease: easeExpoOut }}
            className="flex flex-col min-[640px]:flex-row items-start min-[640px]:items-baseline gap-8 min-[640px]:gap-14 pt-8 border-t border-white/10"
          >
            {/* Stat 1: 15 Months */}
            <div className="flex flex-col items-start">
              <span className="font-fraunces font-medium text-[clamp(80px,10vw,160px)] text-[#E6511C] leading-[0.9] tracking-tight">
                <StatCounter target={15} padZero />
              </span>
              <span className="font-micro text-[11px] sm:text-xs text-[#F6F2EC]/70 tracking-[0.14em] font-semibold uppercase mt-2">
                MONTHS IN PRISON · 1974–1976
              </span>
            </div>

            {/* Stat 2: 1 Degree */}
            <div className="flex flex-col items-start">
              <span className="font-fraunces font-medium text-[clamp(80px,10vw,160px)] text-[#E6511C] leading-[0.9] tracking-tight">
                <StatCounter target={1} />
              </span>
              <span className="font-micro text-[11px] sm:text-xs text-[#F6F2EC]/70 tracking-[0.14em] font-semibold uppercase mt-2">
                DEGREE BOYCOTTED FOR A CAUSE
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default JPMovement;
