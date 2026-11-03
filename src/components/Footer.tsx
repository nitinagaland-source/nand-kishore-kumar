import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative w-full bg-white px-3 sm:px-4 lg:px-6 py-4 sm:py-6 select-none">
      {/* Deep Obsidian Luxury Constitutional Footer Block */}
      <div className="max-w-[1440px] mx-auto rounded-[28px] sm:rounded-[36px] bg-[#0A0C10] text-white p-6 sm:p-10 lg:p-16 border border-white/[0.12] shadow-2xl overflow-hidden relative">
        
        {/* Ambient Top Glow Accents */}
        <div
          className="absolute -top-24 left-1/3 w-96 h-96 rounded-full pointer-events-none opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, #E6511C 0%, #FBA74E 40%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #27E8C0 0%, transparent 70%)' }}
        />

        {/* Pulsing 1.5px Amber Rule at Top */}
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#E6511C] to-transparent animate-pulse-rule mb-8 sm:mb-12 relative z-10" />

        <div className="relative z-10">
          
          {/* Refined Devanagari Wordmark "सेवा" */}
          <div className="relative w-full flex items-center justify-center my-2 sm:my-4 overflow-hidden">
            <svg
              className="w-full h-[90px] sm:h-[130px] lg:h-[170px] overflow-visible"
              viewBox="0 0 1000 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="sevaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFE6C2" />
                  <stop offset="35%" stopColor="#FBA74E" />
                  <stop offset="80%" stopColor="#E6511C" />
                  <stop offset="100%" stopColor="#9A3412" />
                </linearGradient>
                <filter id="sevaGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <text
                x="500"
                y="190"
                textAnchor="middle"
                className="font-devanagari font-bold text-[200px]"
                fill="url(#sevaGrad)"
                filter="url(#sevaGlow)"
                style={{
                  fontFamily: "'Noto Serif Devanagari', serif",
                  letterSpacing: '-0.02em',
                }}
              >
                सेवा
              </text>
            </svg>
          </div>

          {/* Tagline under wordmark */}
          <div className="text-center mb-10 sm:mb-14">
            <p className="font-display font-medium text-base sm:text-xl text-white/95 tracking-tight">
              “Peace for Development, and Development for Peace.”
            </p>
            <div className="inline-flex items-center gap-2 mt-2.5 px-3.5 py-1 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6511C] animate-pulse" />
              <span className="font-micro text-[10px] text-[#FBA74E] tracking-[0.14em] font-semibold">
                HIS EXCELLENCY SHRI NAND KISHORE YADAV · 23RD GOVERNOR OF NAGALAND
              </span>
            </div>
          </div>

          {/* Three Colorful 3D Sculpted Shape Cards Grid */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 pb-12">
              
              {/* ======================================================== */}
              {/* Card 1: RESIDENCE & OFFICIAL SEAT                         */}
              {/* Shape: Sculpted Diagonal Arch (TL & BR heavy curvature)  */}
              {/* Color: Warm Imperial Amber & Saffron 3D Gradient         */}
              {/* ======================================================== */}
              <motion.div
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col justify-between p-6 sm:p-7 rounded-tl-[38px] rounded-br-[38px] rounded-tr-[16px] rounded-bl-[16px] sm:rounded-tl-[46px] sm:rounded-br-[46px] sm:rounded-tr-[20px] sm:rounded-bl-[20px] bg-gradient-to-br from-[#4A1B07] via-[#632408] to-[#250901] border border-[#FBA74E]/50 shadow-[0_18px_45px_rgba(230,81,28,0.28)] overflow-hidden group cursor-default"
              >
                {/* 3D Glass Highlight Sheen */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FBA74E]/60 to-transparent pointer-events-none" />
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#FBA74E]/15 blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBA74E]/20 border border-[#FBA74E]/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFE6C2] animate-pulse" />
                      <span className="font-micro text-[10px] text-[#FFE6C2] tracking-[0.14em] font-bold">
                        01 · RESIDENCE & SEAT
                      </span>
                    </div>
                    {/* Architectural Seal Icon */}
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#FBA74E]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10v4M15 10v4" />
                      </svg>
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 tracking-tight group-hover:text-[#FFE6C2] transition-colors">
                    Lok Bhavan, Kohima
                  </h4>
                  <p className="font-body text-xs text-white/80 leading-relaxed mb-6">
                    Raj Bhavan Road, Kohima, Nagaland 797001
                  </p>
                </div>

                <div className="relative z-10 pt-2">
                  <a
                    href="https://lokbhavan.nagaland.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6511C] hover:bg-[#FBA74E] text-white hover:text-black font-micro text-[11px] font-bold transition-all duration-200 tracking-[0.1em] shadow-[0_4px_16px_rgba(230,81,28,0.4)]"
                  >
                    <span>lokbhavan.nagaland.gov.in</span>
                    <span>↗</span>
                  </a>
                </div>
              </motion.div>

              {/* ======================================================== */}
              {/* Card 2: CONNECT & PUBLIC SECRETARIAT                     */}
              {/* Shape: Arched Dome / High-Radius Rounded Top Vault       */}
              {/* Color: Electric Cobalt & Vivid Cyan 3D Gradient          */}
              {/* ======================================================== */}
              <motion.div
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col justify-between p-6 sm:p-7 rounded-t-[40px] rounded-b-[20px] sm:rounded-t-[48px] sm:rounded-b-[22px] bg-gradient-to-br from-[#082247] via-[#0E3C7A] to-[#04142B] border border-[#38BDF8]/50 shadow-[0_18px_45px_rgba(56,189,248,0.25)] overflow-hidden group cursor-default"
              >
                {/* 3D Glass Highlight Sheen */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#38BDF8]/60 to-transparent pointer-events-none" />
                <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-[#38BDF8]/15 blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8]/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BAE6FD] animate-pulse" />
                      <span className="font-micro text-[10px] text-[#BAE6FD] tracking-[0.14em] font-bold">
                        02 · PUBLIC SECRETARIAT
                      </span>
                    </div>
                    {/* Media Broadcast Icon */}
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#38BDF8]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <circle cx="12" cy="12" r="2" />
                        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
                      </svg>
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 tracking-tight group-hover:text-[#BAE6FD] transition-colors">
                    Governor's Secretariat
                  </h4>
                  <p className="font-body text-xs text-white/80 leading-relaxed mb-4">
                    Official Communications & Governor's Secretariat
                  </p>
                </div>

                <div className="relative z-10 flex flex-col gap-2 pt-3 border-t border-[#38BDF8]/25">
                  <a
                    href="https://twitter.com/nkishoreyadav"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#38BDF8] hover:text-white font-micro text-[11px] font-bold transition-colors tracking-[0.1em]"
                  >
                    <span>X / TWITTER: @nkishoreyadav</span>
                    <span>↗</span>
                  </a>
                  <span className="font-micro text-[10px] text-white/60 tracking-[0.1em]">
                    PRESS: press@lokbhavan.nagaland.gov.in
                  </span>
                </div>
              </motion.div>

              {/* ======================================================== */}
              {/* Card 3: CONSTITUTIONAL ROLE                              */}
              {/* Shape: Inverse Sculpted Arch (TR & BL heavy curvature)   */}
              {/* Color: Sovereign Emerald & Mint Green 3D Gradient        */}
              {/* ======================================================== */}
              <motion.div
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col justify-between p-6 sm:p-7 rounded-tr-[38px] rounded-bl-[38px] rounded-tl-[16px] rounded-br-[16px] sm:rounded-tr-[46px] sm:rounded-bl-[46px] sm:rounded-tl-[20px] sm:rounded-br-[20px] bg-gradient-to-br from-[#063022] via-[#0B4E38] to-[#031C13] border border-[#27E8C0]/50 shadow-[0_18px_45px_rgba(39,232,192,0.25)] overflow-hidden group cursor-default"
              >
                {/* 3D Glass Highlight Sheen */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#27E8C0]/60 to-transparent pointer-events-none" />
                <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-[#27E8C0]/15 blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27E8C0]/20 border border-[#27E8C0]/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A7F3D0] animate-pulse" />
                      <span className="font-micro text-[10px] text-[#A7F3D0] tracking-[0.14em] font-bold">
                        03 · CONSTITUTIONAL MANDATE
                      </span>
                    </div>
                    {/* Constitutional Shield Icon */}
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#27E8C0]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 tracking-tight group-hover:text-[#A7F3D0] transition-colors">
                    Constitutional Role
                  </h4>
                  <p className="font-body text-xs text-white/80 leading-relaxed mb-4">
                    Head of State of Nagaland · Chief Rector, Nagaland University · Visitor to 5 Universities & Autonomous Institutes
                  </p>
                </div>

                <div className="relative z-10 pt-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#27E8C0]/20 border border-[#27E8C0]/50 text-[#A7F3D0] font-micro text-[10px] font-bold tracking-[0.14em] shadow-[0_2px_12px_rgba(39,232,192,0.2)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27E8C0] animate-pulse" />
                    <span>ARTICLE 371A GUARANTOR</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </Reveal>

          {/* Bottom Credits & Legal Row */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white/50 font-micro text-[10px] tracking-[0.14em]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>OFFICIAL CONSTITUTIONAL PORTFOLIO · CONTENT SOURCED FROM PUBLIC RECORDS · LAST UPDATED NOVEMBER 2026</span>
            </div>
            <div>
              SOURCES: NAGALAND.GOV.IN · LOKBHAVAN.NAGALAND.GOV.IN · NEWS AGENCIES
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
