import React from 'react';
import { motion } from 'framer-motion';

interface RibbonProps {
  id?: string;
  color1?: string;
  color2?: string;
  color3?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  strokeWidth?: number;
  curveType?: 's-curve' | 'timeline-node' | 'wave';
  showEndDot?: boolean;
  dotColor?: string;
  animateScroll?: boolean;
}

export const Ribbon: React.FC<RibbonProps> = ({
  id = 'ribbon-grad',
  color1 = '#0C3B2E',
  color2 = '#4F9D69',
  color3 = '#CFE8CF',
  className = '',
  width = '100%',
  height = '100%',
  strokeWidth = 3,
  curveType = 's-curve',
  showEndDot = false,
  dotColor = 'var(--amber-500)',
  animateScroll = false,
}) => {
  const gradientId = `ribbon-grad-${id}`;

  // S-Curve path
  const pathD =
    curveType === 'timeline-node'
      ? 'M 0 30 C 50 30, 70 8, 120 8'
      : curveType === 'wave'
      ? 'M 10 120 C 140 20, 240 220, 380 120 S 520 20, 660 120'
      : 'M 20 280 C 120 180, 180 340, 280 240 S 380 60, 480 140';

  return (
    <div className={`relative ${className}`} style={{ width, height }} aria-hidden="true">
      <svg
        viewBox={
          curveType === 'timeline-node'
            ? '0 0 130 38'
            : curveType === 'wave'
            ? '0 0 680 240'
            : '0 0 500 380'
        }
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color1} />
            <stop offset="50%" stopColor={color2} />
            <stop offset="100%" stopColor={color3} />
          </linearGradient>
          <filter id={`glow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <motion.path
          d={pathD}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#glow-${id})`}
          initial={animateScroll ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 0.9 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {showEndDot && (
          <motion.circle
            cx={curveType === 'timeline-node' ? 120 : 480}
            cy={curveType === 'timeline-node' ? 8 : 140}
            r="10"
            fill={dotColor}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              filter: 'drop-shadow(0 0 8px rgba(230, 81, 28, 0.6))',
            }}
          />
        )}
      </svg>
    </div>
  );
};

export default Ribbon;
