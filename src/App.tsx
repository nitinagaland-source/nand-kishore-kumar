/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Journey from './components/Journey';
import Vision from './components/Vision';
import Gallery from './components/Gallery';
import Office from './components/Office';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 1,
      // smoothTouch: false (kills native touch feel on mobile as per spec)
      touchMultiplier: 1,
    });
    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: 0, duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-[#0E0E10] selection:bg-[#E6511C] selection:text-white">
      {/* Custom Magnetic Cursor for Desktop (>=1024px) */}
      <CustomCursor />

      {/* Main Single Page Sections in Exact Order */}
      <main className="relative w-full">
        {/* Section 1: Hero (Split Amber/White Layout) */}
        <Hero onNavigate={handleNavigate} />

        {/* Section 2: Marquee Strip */}
        <Marquee />

        {/* Section 3: About / Early Life (Roots & 3D Glass Prism) */}
        <About />

        {/* Section 4: Journey / Timeline (Five Decades & Mesh Blob) */}
        <Journey />

        {/* Section 5: Vision & Priorities (Full Bleed Gradient & 6 Tiles) */}
        <Vision />

        {/* Section 6: Horizontal Scroll Gallery (In the Field) */}
        <Gallery />

        {/* Section 7: Lok Bhavan / Office (Ex-Officio Appointments) */}
        <Office />

        {/* Section 8: Footer / Contact (Devanagari SEVA Wordmark) */}
        <Footer />
      </main>
    </div>
  );
}
