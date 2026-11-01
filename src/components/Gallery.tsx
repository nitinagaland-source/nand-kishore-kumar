import React, { useRef, useState } from 'react';
import Reveal from './ui/Reveal';

interface GalleryItem {
  id: number;
  imageSrc: string;
  tag: string;
  location: string;
  date: string;
  event: string;
  context: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageSrc: 'https://i.ibb.co/RTVqvjTM/images-43.jpg',
    tag: 'CEREMONIAL',
    location: 'KOHIMA',
    date: '13 MARCH 2026',
    event: 'SWEARING-IN AT RAJ BHAVAN',
    context: 'Assumed constitutional office as the 23rd Governor of Nagaland, administered by the Chief Justice.',
  },
  {
    id: 2,
    imageSrc: 'https://i.ibb.co/0pgtV07M/images-42.jpg',
    tag: 'GOVERNANCE',
    location: 'LOK BHAVAN',
    date: 'APRIL 2026',
    event: 'ENPO ACCORD DELIBERATIONS',
    context: 'Reviewing implementation frameworks for the Frontier Nagaland Territorial Authority with state leadership.',
  },
  {
    id: 3,
    imageSrc: 'https://i.ibb.co/q35MkdQ9/images-41.jpg',
    tag: 'INFRASTRUCTURE',
    location: 'FOOTHILL CORRIDOR',
    date: 'MAY 2026',
    event: 'STRATEGIC HIGHWAY & RAIL SURVEY',
    context: 'Technical review of the Foothill connectivity corridor linking remote districts to commercial arteries.',
  },
  {
    id: 4,
    imageSrc: 'https://i.ibb.co/WWVVVHKn/images-40.jpg',
    tag: 'ACADEMICS',
    location: 'NAGALAND UNIVERSITY',
    date: 'JUNE 2026',
    event: 'CHIEF RECTOR ADDRESS AT LUMAMI',
    context: 'Convening academic council and encouraging tribal research chairs and premier technical curricula.',
  },
  {
    id: 5,
    imageSrc: 'https://i.ibb.co/B2Hkn0kt/images-39.jpg',
    tag: 'COMMUNITY',
    location: 'MON & MOKOKCHUNG',
    date: 'JULY 2026',
    event: 'TRIBAL ELDERS & GAON BURAS SAMVAD',
    context: 'Direct grassroots listening session with village councils on rural healthcare and youth livelihoods.',
  },
];

export const Gallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 380;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="gallery" className="relative w-full bg-white px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
      {/* Dark Cinema Block Card */}
      <div className="max-w-[1440px] mx-auto rounded-[28px] sm:rounded-[36px] bg-[#141418] text-[#F6F2EC] p-6 sm:p-10 lg:p-14 border border-white/10 shadow-2xl overflow-hidden relative select-none">
        
        {/* Header with Title and Small Arrow Navigation Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <Reveal>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#E6511C] shadow-[0_0_8px_#E6511C]" />
                <span className="font-micro text-[11px] text-[#E6511C] tracking-[0.14em] font-bold">
                  CHAPTER 04 · IN THE FIELD
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F6F2EC] tracking-tight leading-tight [text-wrap:balance]">
                The office, in motion.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-body text-xs sm:text-sm text-[#F6F2EC]/70 mt-2 max-w-md">
                Glimpses of constitutional engagements, district tours, academic convocations, and public assemblies across Nagaland.
              </p>
            </Reveal>
          </div>

          {/* Small Sideways Scroll Arrow Buttons */}
          <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'border-white/20 bg-white/10 text-white hover:bg-white/20 hover:scale-105 active:scale-95 shadow-sm'
                  : 'border-white/10 bg-white/5 text-white/30 cursor-not-allowed'
              }`}
              aria-label="Scroll gallery left"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>

            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'border-[#E6511C] bg-[#E6511C] text-white hover:bg-[#EA580C] hover:scale-105 active:scale-95 shadow-sm'
                  : 'border-white/10 bg-white/5 text-white/30 cursor-not-allowed'
              }`}
              aria-label="Scroll gallery right"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* ================= EXACTLY 5 HORIZONTAL CARDS WITH PROVIDED IMAGES ================= */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 -mx-2 px-2"
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative w-[300px] sm:w-[340px] lg:w-[360px] h-[460px] rounded-[22px] border border-white/10 bg-[#1A1A20] shadow-xl overflow-hidden shrink-0 snap-start transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Photo Area (Top 65%) */}
              <div className="relative w-full h-[65%] overflow-hidden bg-black/40">
                <img
                  src={item.imageSrc}
                  alt={`${item.event} - ${item.location}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-micro text-[9px] font-bold tracking-[0.14em]">
                  {item.tag}
                </div>
              </div>

              {/* Caption Area (Bottom 35%) */}
              <div className="p-4 sm:p-5 h-[35%] flex flex-col justify-between bg-[#1A1A20] border-t border-white/10">
                <div>
                  <div className="font-micro text-[10px] text-[#E6511C] tracking-[0.14em] font-semibold mb-1">
                    [{item.location} — {item.date}]
                  </div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white leading-snug line-clamp-1">
                    {item.event}
                  </h4>
                </div>
                <p className="font-body text-xs text-white/70 line-clamp-2 leading-relaxed">
                  {item.context}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
