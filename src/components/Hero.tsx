import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import NavOverlay from './ui/NavOverlay';
import governorHdImg from '../assets/governor-cutout-hd.png';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(governorHdImg);
  const shouldReduceMotion = useReducedMotion();

  const easeExpoOut = [0.16, 1, 0.3, 1] as const;

  const medallions = [
    { label: 'RSS', year: '1969' },
    { label: 'ABVP', year: '1971' },
    { label: 'BJP', year: '1998' },
    { label: 'MLA', year: '×7' },
  ];

  const navLinks = [
    { label: 'VISION', id: 'vision' },
    { label: 'JOURNEY', id: 'journey' },
    { label: 'OFFICE', id: 'office' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <section className="relative w-full bg-white p-2 sm:p-3 lg:p-4 flex items-center justify-center select-none overflow-hidden">
      {/* Outer Card Container matching Reference exactly */}
      <div
        className="relative w-full max-w-[1440px] rounded-[24px] sm:rounded-[36px] overflow-hidden flex flex-col lg:block shadow-2xl border border-white/[0.08]"
        style={{
          background: 'radial-gradient(ellipse at 35% 45%, #FBA74E 0%, #E6511C 42%, #7A1F02 80%, #250700 100%)',
        }}
      >
        {/* Subtle decorative background arcs */}
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full border border-white/[0.12] pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-[640px] h-[640px] rounded-full border border-black/[0.15] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[20%] w-[480px] h-[480px] rounded-full bg-black/10 blur-2xl pointer-events-none" />

        {/* ========================================================================= */}
        {/* ============================= MOBILE LAYOUT (<1024px) =================== */}
        {/* ========================================================================= */}
        <div className="flex lg:hidden flex-col w-full text-white relative z-10">
          
          {/* Top Amber Showcase Zone: Governor Hero at Top Touching Baseline with 0 Gap */}
          <div className="relative w-full flex flex-col justify-between pt-5 px-5 sm:px-7 overflow-hidden border-b border-black/20">
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between w-full mb-3 z-30">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center bg-white/10 backdrop-blur-sm shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 2L15 8L22 9L17 14L18 21L12 17.5L6 21L7 14L2 9L9 8L12 2Z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-medium text-base text-white leading-none">
                    Nand Kishore Yadav
                  </span>
                  <span className="font-micro text-[9px] text-white/70 tracking-[0.14em] mt-0.5">
                    23RD GOVERNOR OF NAGALAND
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors shadow-sm"
                aria-label="Navigation Menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="8" x2="20" y2="8"></line>
                  <line x1="4" y1="16" x2="20" y2="16"></line>
                </svg>
              </button>
            </div>

            {/* Floating Top Badge */}
            <div className="flex justify-center z-20 my-2">
              <div className="px-3.5 py-1 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center gap-2 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFE6C2] animate-pulse" />
                <span className="font-micro text-[9px] text-white tracking-[0.14em] uppercase font-semibold">
                  23rd Governor · Lok Bhavan, Kohima
                </span>
              </div>
            </div>

            {/* GOVERNOR HD PORTRAIT: Positioned at bottom, touching border with ZERO gap */}
            <div className="relative w-full h-[320px] sm:h-[380px] flex items-end justify-center overflow-hidden">
              {/* Warm radiant halo behind head */}
              <div
                className="absolute top-6 w-60 h-60 rounded-full pointer-events-none opacity-65 blur-3xl"
                style={{ background: 'radial-gradient(circle, #FFE6C2 0%, #FBA74E 45%, transparent 70%)' }}
              />

              {/* Faded SEVA Backdrop Lettering */}
              <div className="absolute top-2 inset-x-0 flex justify-center pointer-events-none opacity-20 select-none">
                <span className="font-condensed font-bold text-[130px] sm:text-[150px] leading-none tracking-widest text-white">
                  SEVA
                </span>
              </div>

              {/* Governor Portrait Image Flush Against Baseline (0 Gap) */}
              <img
                src={imgSrc}
                onError={() => setImgSrc("https://i.ibb.co/VcZvQLk4/images-38-removebg-preview.png")}
                alt="H.E. Shri Nand Kishore Yadav, 23rd Governor of Nagaland"
                className="relative z-10 h-full w-auto max-w-full object-contain object-bottom align-bottom block select-none"
                style={{
                  filter: 'contrast(1.08) brightness(1.02) saturate(1.06) drop-shadow(0 15px 30px rgba(25, 5, 0, 0.55))',
                }}
                loading="eager"
              />
            </div>
          </div>

          {/* Mobile Text & Actions Zone */}
          <div className="p-5 sm:p-7 flex flex-col items-start">
            <h1 className="font-condensed font-bold text-[76px] sm:text-[96px] leading-[0.84] text-white tracking-[0.03em] uppercase">
              SEVA
            </h1>
            <div className="mt-2 text-white/90 font-body text-sm sm:text-base leading-snug">
              <p>Designs of democracy.</p>
              <p>Ideas that connect.</p>
            </div>

            <div className="mt-5">
              <button
                onClick={() => onNavigate('journey')}
                className="inline-flex items-center gap-2.5 h-11 px-6 rounded-pill bg-white text-[#0E0E10] font-body font-semibold text-xs uppercase tracking-[0.12em] shadow-[0_10px_24px_rgba(230,81,28,0.45)] active:scale-95 transition-transform"
              >
                <span>View Work</span>
                <span className="font-bold text-sm">↗</span>
              </button>
            </div>

            {/* Medallions Row */}
            <div className="mt-6 flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {medallions.map((med, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-full border-2 border-[#E6511C] bg-[#2E0B02] text-white flex flex-col items-center justify-center font-micro text-[8px] font-bold shadow-md"
                  >
                    <span>{med.label}</span>
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-[#E6511C] bg-white text-[#0E0E10] flex items-center justify-center font-micro text-[9px] font-bold shadow-md">
                  +50
                </div>
              </div>
              <span className="font-body text-xs text-white/80 ml-1">
                Five decades of grassroots service.
              </span>
            </div>
          </div>

          {/* Mobile White Card Section */}
          <div className="m-4 mt-1 rounded-[24px] bg-white text-[#0E0E10] p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-micro text-[10px] text-[#0E0E10]/70 tracking-[0.14em]">
                AVAILABLE FOR
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6511C]" />
            </div>

            <h2 className="font-display font-medium text-2xl text-[#0E0E10] tracking-tight mb-2.5">
              23rd Governor of Nagaland
            </h2>

            <p className="font-body text-xs text-[#4A4A4E] leading-relaxed mb-5">
              Veteran parliamentarian from Bihar with over five decades in public life — seven terms as MLA, Speaker of the Bihar Vidhan Sabha, and now constitutional head of Nagaland.
            </p>

            {/* Quote Card */}
            <div className="rounded-[18px] p-4 bg-[#F9F7F4] border border-[#ECE6DE] flex items-start justify-between gap-3">
              <div>
                <span className="font-display text-[#E6511C] text-xl leading-none block mb-1">
                  “
                </span>
                <p className="font-display italic text-xs text-[#0E0E10] leading-snug mb-1.5">
                  “Peace for Development, and Development for Peace.”
                </p>
                <div className="font-micro text-[8px] text-[#0E0E10]/60 tracking-[0.14em]">
                  <span className="font-semibold text-[#0E0E10]">SHRI NAND KISHORE YADAV</span>
                  <span className="block text-[#0E0E10]/40">INDEPENDENCE DAY ADDRESS · KOHIMA</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#E6511C] text-white flex items-center justify-center font-display text-[10px] font-bold shrink-0 shadow-sm">
                NKY
              </div>
            </div>
          </div>
        </div>


        {/* ========================================================================= */}
        {/* ============================= DESKTOP LAYOUT (>=1024px) ================= */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex w-full min-h-[660px] xl:h-[calc(100svh-48px)] relative z-10">
          
          {/* Left Panel: Brand + SEVA + Tagline + CTA + Medallions */}
          <div className="w-[56%] h-full p-10 xl:p-12 flex flex-col justify-between text-white relative z-10">
            {/* Top-Left Brand Lockup */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 2L15 8L22 9L17 14L18 21L12 17.5L6 21L7 14L2 9L9 8L12 2Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-medium text-lg text-white leading-none tracking-tight">
                  Nand Kishore Yadav
                </span>
                <span className="font-micro text-[9px] text-white/70 tracking-[0.14em] mt-0.5">
                  23RD GOVERNOR OF NAGALAND
                </span>
              </div>
            </div>

            {/* Center Left Typography: SEVA + Tagline + Button */}
            <div className="my-auto max-w-[420px]">
              <motion.h1
                initial={{ y: shouldReduceMotion ? 0 : 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: easeExpoOut }}
                className="font-condensed font-bold text-[clamp(96px,12vw,165px)] leading-[0.84] text-white tracking-[0.03em] uppercase drop-shadow-sm select-none"
              >
                SEVA
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: easeExpoOut }}
                className="mt-3 text-white/90 font-body text-base lg:text-[17px] leading-snug"
              >
                <p>Designs of democracy.</p>
                <p>Ideas that connect.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: easeExpoOut }}
                className="mt-6 xl:mt-8"
              >
                <button
                  onClick={() => onNavigate('journey')}
                  data-cursor-label="JOURNEY"
                  className="group inline-flex items-center gap-3 h-12 px-7 rounded-pill bg-white text-[#0E0E10] font-body font-semibold text-xs uppercase tracking-[0.12em] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] hover:bg-[#FFE6C2] active:scale-[0.98] shadow-[0_12px_28px_rgba(230,81,28,0.4)]"
                >
                  <span>View Work</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-sm font-bold">
                    ↗
                  </span>
                </button>
              </motion.div>
            </div>

            {/* Bottom Left Medallions */}
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex -space-x-2">
                  {medallions.map((med, idx) => (
                    <div
                      key={idx}
                      className="w-9 h-9 rounded-full border-2 border-[#E6511C] bg-[#2E0B02] text-white flex flex-col items-center justify-center font-micro text-[9px] font-bold shadow-md"
                      title={`${med.label} · ${med.year}`}
                    >
                      <span>{med.label}</span>
                    </div>
                  ))}
                  <div className="w-9 h-9 rounded-full border-2 border-[#E6511C] bg-white text-[#0E0E10] flex items-center justify-center font-micro text-[10px] font-bold shadow-md">
                    +50
                  </div>
                </div>
              </div>
              <p className="font-body text-xs text-white/80 max-w-[320px]">
                A life of grassroots service across five decades.
              </p>
            </div>
          </div>

          {/* Right Floating White Card (Exact proportions to match Reference) */}
          <div className="absolute right-3 top-3 bottom-3 w-[46%] xl:w-[44%] rounded-[24px] xl:rounded-[30px] bg-white text-[#0E0E10] p-7 xl:p-9 flex flex-col justify-between shadow-2xl z-10">
            {/* Top Navigation Row */}
            <div className="flex items-center justify-between w-full">
              <nav className="flex items-center gap-5 xl:gap-6 ml-auto">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => onNavigate(link.id)}
                    className="font-micro text-[11px] text-[#0E0E10]/70 hover:text-[#E6511C] transition-colors tracking-[0.14em] uppercase"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="w-10 h-10 ml-5 rounded-full bg-[#0E0E10]/5 hover:bg-[#0E0E10]/10 flex items-center justify-center transition-colors shrink-0"
                aria-label="Navigation Menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="8" x2="20" y2="8"></line>
                  <line x1="4" y1="16" x2="20" y2="16"></line>
                </svg>
              </button>
            </div>

            {/* Middle Content: Offset to the right to frame the portrait cleanly */}
            <div className="my-auto pl-24 xl:pl-28">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-micro text-[10px] text-[#0E0E10]/70 tracking-[0.14em]">
                  AVAILABLE FOR
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E6511C]" />
              </div>

              <h2 className="font-display font-medium text-2xl xl:text-3xl leading-[1.1] text-[#0E0E10] tracking-[-0.02em] mb-2.5">
                23rd Governor of Nagaland
              </h2>

              <p className="font-body text-xs xl:text-sm text-[#4A4A4E] leading-relaxed max-w-[320px]">
                Veteran parliamentarian from Bihar with over five decades in public life — seven terms as MLA, Speaker of the Bihar Vidhan Sabha, and now constitutional head of Nagaland.
              </p>
            </div>

            {/* Bottom Quote Card */}
            <div className="rounded-[18px] p-4 xl:p-5 bg-[#F9F7F4] border border-[#ECE6DE] shadow-sm flex items-start justify-between gap-4 ml-14 xl:ml-18">
              <div className="flex flex-col">
                <span className="font-display text-[#E6511C] text-xl leading-none mb-1 select-none">
                  “
                </span>
                <p className="font-display italic text-xs xl:text-sm text-[#0E0E10] leading-snug mb-1.5">
                  “Peace for Development, and Development for Peace.”
                </p>
                <div className="font-micro text-[9px] text-[#0E0E10]/60 tracking-[0.14em]">
                  <span className="font-semibold text-[#0E0E10]">SHRI NAND KISHORE YADAV</span>
                  <span className="block text-[8px] text-[#0E0E10]/40">INDEPENDENCE DAY ADDRESS · KOHIMA</span>
                </div>
              </div>

              <div className="w-9 h-9 rounded-full bg-[#E6511C] text-white flex items-center justify-center font-display text-xs font-bold shrink-0 shadow-sm">
                NKY
              </div>
            </div>
          </div>

          {/* ================= DESKTOP HERO PORTRAIT: TOUCHING BOTTOM BORDER FLUSH WITH 0 GAP ================= */}
          <div className="pointer-events-none z-20 absolute bottom-0 right-[34%] xl:right-[36%] w-[420px] xl:w-[460px] h-[88%] xl:h-[92%] flex items-end justify-center">
            {/* Ambient warm aura behind head and shoulders */}
            <div
              className="absolute top-10 w-72 h-72 rounded-full pointer-events-none opacity-50 blur-3xl"
              style={{ background: 'radial-gradient(circle, #FFE6C2 0%, #FBA74E 45%, transparent 70%)' }}
            />

            {/* Fine orbital ring slicing behind him */}
            <div className="absolute top-16 -left-12 w-80 h-80 rounded-full border border-white/20 pointer-events-none" />

            <motion.img
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: easeExpoOut }}
              src={imgSrc}
              onError={() => setImgSrc("https://i.ibb.co/VcZvQLk4/images-38-removebg-preview.png")}
              alt="H.E. Shri Nand Kishore Yadav, 23rd Governor of Nagaland"
              className="h-full w-auto max-w-full object-contain object-bottom align-bottom block select-none"
              style={{
                filter: 'contrast(1.08) brightness(1.02) saturate(1.06) drop-shadow(0 20px 30px rgba(35, 8, 0, 0.45))',
              }}
              loading="eager"
            />
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <NavOverlay
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={onNavigate}
      />
    </section>
  );
};

export default Hero;
