import React from 'react';
import Reveal from './ui/Reveal';

interface VisionTileData {
  title: string;
  description: string;
  tag: string;
  gradientClass: string;
  borderColor: string;
  glowShadow: string;
  dotColor: string;
}

const visionTiles: VisionTileData[] = [
  {
    title: 'Peace for Development',
    description:
      'Honouring the 5 February 2026 ENPO agreement and the Frontier Nagaland Territorial Authority as a milestone for the East.',
    tag: 'PRIORITY 01',
    gradientClass: 'from-[#4F46E5] via-[#7C3AED] to-[#06B6D4]',
    borderColor: 'border-[#818CF8]/45',
    glowShadow: 'shadow-[0_15px_35px_rgba(79,70,229,0.3)]',
    dotColor: '#38BDF8',
  },
  {
    title: 'Agriculture & Rural Livelihoods',
    description:
      'Standing with the 70% of Nagaland’s population whose lives rest on farming and allied work.',
    tag: 'PRIORITY 02',
    gradientClass: 'from-[#047857] via-[#059669] to-[#10B981]',
    borderColor: 'border-[#34D399]/45',
    glowShadow: 'shadow-[0_15px_35px_rgba(5,150,105,0.3)]',
    dotColor: '#6EE7B7',
  },
  {
    title: 'Connectivity & Infrastructure',
    description:
      'Advancing the Foothill Road and railway projects to unlock the State’s industrial and agricultural potential.',
    tag: 'PRIORITY 03',
    gradientClass: 'from-[#1E40AF] via-[#2563EB] to-[#38BDF8]',
    borderColor: 'border-[#60A5FA]/45',
    glowShadow: 'shadow-[0_15px_35px_rgba(37,99,235,0.3)]',
    dotColor: '#93C5FD',
  },
  {
    title: 'Youth & Enterprise',
    description:
      'Encouraging a generation to look beyond government jobs — toward skill, entrepreneurship, and self-reliance.',
    tag: 'PRIORITY 04',
    gradientClass: 'from-[#C2410C] via-[#EA580C] to-[#F59E0B]',
    borderColor: 'border-[#FBA74E]/50',
    glowShadow: 'shadow-[0_15px_35px_rgba(234,88,12,0.3)]',
    dotColor: '#FDE047',
  },
  {
    title: 'Education for Nagaland, in Nagaland',
    description:
      'Advocating premier national and regional institutions on Naga soil so students need not leave home to learn.',
    tag: 'PRIORITY 05',
    gradientClass: 'from-[#6D28D9] via-[#9333EA] to-[#D946EF]',
    borderColor: 'border-[#C084FC]/50',
    glowShadow: 'shadow-[0_15px_35px_rgba(147,51,234,0.3)]',
    dotColor: '#F0ABFC',
  },
  {
    title: 'Tribal Heritage & Identity',
    description:
      'Documenting, preserving and reinterpreting the heritage of the 86.5% of Nagaland that is tribal — in step with modern scholarship.',
    tag: 'PRIORITY 06',
    gradientClass: 'from-[#9F1239] via-[#E11D48] to-[#FB7185]',
    borderColor: 'border-[#FDA4AF]/50',
    glowShadow: 'shadow-[0_15px_35px_rgba(225,29,72,0.3)]',
    dotColor: '#FECDD3',
  },
];

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="relative w-full bg-white px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
      {/* 3D Cosmic Holographic Gradient Block Card */}
      <div className="max-w-[1440px] mx-auto rounded-[28px] sm:rounded-[36px] overflow-hidden text-white p-6 sm:p-10 lg:p-16 animate-gradient-shift border border-white/15 shadow-2xl relative">
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        <div className="relative z-10">
          {/* Section Header */}
          <div className="max-w-xl mb-10 lg:mb-14">
            <Reveal>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#27E8C0] shadow-[0_0_8px_#27E8C0]" />
                <span className="font-micro text-[11px] text-[#27E8C0] tracking-[0.14em] font-bold">
                  CHAPTER 03 · WHAT HE STANDS FOR
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight [text-wrap:balance]">
                A vision shaped by soil, people, and purpose.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-body text-xs sm:text-sm text-white/80 mt-3 leading-relaxed">
                Six foundational pillars guiding constitutional stewardship, inclusive tribal progress, and regional prosperity across Nagaland.
              </p>
            </Reveal>
          </div>

          {/* 6 Tactile 3D Gradient Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {visionTiles.map((tile, idx) => (
              <Reveal key={idx} delay={0.06 * idx}>
                <div
                  className={`group relative h-full min-h-[230px] rounded-[24px] p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.01] bg-gradient-to-br ${tile.gradientClass} border ${tile.borderColor} ${tile.glowShadow} text-white select-none`}
                >
                  {/* Top highlight glare for 3D glass sheen */}
                  <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                  {/* Top index row */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-micro text-[10px] px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white tracking-[0.14em] font-bold">
                      {tile.tag}
                    </span>
                    <div
                      className="w-2.5 h-2.5 rounded-full shadow-md"
                      style={{ backgroundColor: tile.dotColor }}
                    />
                  </div>

                  {/* Bottom title & description */}
                  <div className="relative z-10 mt-6">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-snug mb-2.5 drop-shadow-sm">
                      {tile.title}
                    </h3>
                    <p className="font-body text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal">
                      {tile.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
