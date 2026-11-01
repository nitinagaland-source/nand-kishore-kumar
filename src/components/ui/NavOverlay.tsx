import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

const navItems = [
  { label: 'VISION', id: 'vision' },
  { label: 'JOURNEY', id: 'journey' },
  { label: 'OFFICE', id: 'office' },
  { label: 'GALLERY', id: 'gallery' },
  { label: 'CONTACT', id: 'contact' },
];

export const NavOverlay: React.FC<NavOverlayProps> = ({ isOpen, onClose, onNavigate }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-10 bg-[#F6F2EC] text-[#0E0E10] overflow-y-auto"
          style={{ paddingTop: 'max(24px, env(safe-area-inset-top))', paddingBottom: 'max(24px, env(safe-area-inset-bottom))' }}
        >
          {/* Header Row */}
          <div className="flex items-center justify-between w-full">
            <div className="font-display font-medium text-2xl tracking-[-0.04em]">
              NKY
            </div>
            <button
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[#0E0E10]/20 hover:bg-[#0E0E10]/5 transition-colors"
              aria-label="Close Navigation"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-8 my-auto py-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 * index, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
                className="text-left font-display text-[clamp(32px,9vw,52px)] font-medium text-[#0E0E10] hover:text-[#E6511C] transition-colors leading-none tracking-[-0.03em] flex items-center justify-between group"
              >
                <span>{item.label}</span>
                <span className="font-micro text-xs text-[#E6511C] opacity-0 group-hover:opacity-100 transition-opacity">
                  0{index + 1} ↗
                </span>
              </motion.button>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="border-t border-[#0E0E10]/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-micro text-[#0E0E10]/60">
            <div>23RD GOVERNOR OF NAGALAND</div>
            <div>LOK BHAVAN · KOHIMA</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavOverlay;
