import React from 'react';

const AsteriskGlyph = () => (
  <span className="text-[#E6511C] mx-5 sm:mx-8 inline-block select-none" aria-hidden="true">
    ✦
  </span>
);

const marqueeItems = [
  'PEACE FOR DEVELOPMENT',
  'DEVELOPMENT FOR PEACE',
  'सेवा ही संकल्प',
  '23RD GOVERNOR OF NAGALAND',
  'LOK BHAVAN · KOHIMA',
  'DECATIVE STEWARDSHIP',
];

export const Marquee: React.FC = () => {
  const content = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="relative w-full bg-white border-y border-slate-200 py-3.5 sm:py-4 overflow-hidden select-none group-marquee">
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="animate-marquee-left flex items-center">
          {content.map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center font-micro text-xs sm:text-[13px] tracking-[0.2em] text-[#0E0E10]/90 font-medium uppercase"
            >
              <span>{item}</span>
              <AsteriskGlyph />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
