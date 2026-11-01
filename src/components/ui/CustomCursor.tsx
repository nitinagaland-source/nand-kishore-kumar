import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop without reduced motion
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, select, textarea, [data-cursor], .interactive-target');
      if (interactive) {
        setIsHovered(true);
        const label = interactive.getAttribute('data-cursor-label') || '';
        setCursorText(label);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="custom-cursor flex items-center justify-center text-center leading-none"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        width: isHovered ? 56 : 10,
        height: isHovered ? 56 : 10,
        backgroundColor: '#FFFFFF',
      }}
      aria-hidden="true"
    >
      {isHovered && cursorText && (
        <span className="font-micro text-[9px] font-bold uppercase text-black tracking-[0.14em]">
          {cursorText}
        </span>
      )}
    </div>
  );
};

export default CustomCursor;
