import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Reveal from './ui/Reveal';

interface TimelineItemData {
  year: string;
  role: string;
  organization: string;
  context: string;
  badge?: string;
  palette: {
    accent: string;
    bgGradient: string;
    borderColor: string;
    glowShadow: string;
    tagBg: string;
    tagText: string;
    dotGlow: string;
  };
}

const timelineData: TimelineItemData[] = [
  {
    year: '1969',
    role: 'Joined Rashtriya Swayamsevak Sangh',
    organization: 'Patna Shakha',
    context: 'Ideological foundation in discipline, nation-building, and selfless public service.',
    badge: 'FOUNDATION',
    palette: {
      accent: '#FBA74E',
      bgGradient: 'from-[#EA580C] via-[#D9480F] to-[#9A3412]',
      borderColor: 'border-[#FBA74E]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(249,115,22,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#FEF3C7]',
      dotGlow: 'bg-[#FBA74E] shadow-[0_0_14px_#FBA74E]',
    },
  },
  {
    year: '1971',
    role: 'Akhil Bharatiya Vidyarthi Parishad',
    organization: 'Student Leadership',
    context: 'Student activism begins, championing youth issues and democratic campus engagement.',
    badge: 'YOUTH ACTIVISM',
    palette: {
      accent: '#38BDF8',
      bgGradient: 'from-[#0369A1] via-[#0284C7] to-[#075985]',
      borderColor: 'border-[#38BDF8]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(14,165,233,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#E0F2FE]',
      dotGlow: 'bg-[#38BDF8] shadow-[0_0_14px_#38BDF8]',
    },
  },
  {
    year: '1974',
    role: 'President, Patna City Chhatra Sangharsh Samiti',
    organization: 'JP Movement',
    context: 'Answered Loknayak Jayaprakash Narayan’s call, boycotting B.Sc. exams to lead student resistance.',
    badge: 'CONVICTION',
    palette: {
      accent: '#FB7185',
      bgGradient: 'from-[#E11D48] via-[#BE123C] to-[#9F1239]',
      borderColor: 'border-[#FB7185]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(225,29,72,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#FFE4E6]',
      dotGlow: 'bg-[#FB7185] shadow-[0_0_14px_#FB7185]',
    },
  },
  {
    year: '1974–1976',
    role: 'Imprisoned for 15 Months',
    organization: 'The Emergency',
    context: 'Spent fifteen months in prison standing for constitutional democracy and democratic freedoms.',
    badge: 'RESISTANCE',
    palette: {
      accent: '#C084FC',
      bgGradient: 'from-[#7C3AED] via-[#6D28D9] to-[#5B21B6]',
      borderColor: 'border-[#C084FC]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(124,58,237,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#F3E8FF]',
      dotGlow: 'bg-[#C084FC] shadow-[0_0_14px_#C084FC]',
    },
  },
  {
    year: '1978',
    role: 'Councillor & President, Janata Yuva Morcha',
    organization: 'Patna Municipal Corporation · Patna District',
    context: 'First election victory, entering municipal governance to serve local wards and civic infrastructure.',
    badge: 'MUNICIPAL',
    palette: {
      accent: '#34D399',
      bgGradient: 'from-[#059669] via-[#047857] to-[#065F46]',
      borderColor: 'border-[#34D399]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(16,185,129,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#D1FAE5]',
      dotGlow: 'bg-[#34D399] shadow-[0_0_14px_#34D399]',
    },
  },
  {
    year: '1982',
    role: 'Deputy Mayor',
    organization: 'Patna Municipal Corporation',
    context: 'Elevated to executive city leadership, spearheading civic administration and municipal amenities.',
    badge: 'CITY LEADERSHIP',
    palette: {
      accent: '#FCD34D',
      bgGradient: 'from-[#D97706] via-[#B45309] to-[#92400E]',
      borderColor: 'border-[#FCD34D]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(217,119,6,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#FEF3C7]',
      dotGlow: 'bg-[#FCD34D] shadow-[0_0_14px_#FCD34D]',
    },
  },
  {
    year: '1983',
    role: 'President',
    organization: 'BJP Patna Metropolitan Unit',
    context: 'Built grassroots organizational networks across the capital city and metropolitan wards.',
    badge: 'ORGANIZATION',
    palette: {
      accent: '#60A5FA',
      bgGradient: 'from-[#2563EB] via-[#1D4ED8] to-[#1E40AF]',
      borderColor: 'border-[#60A5FA]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(37,99,235,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#DBEAFE]',
      dotGlow: 'bg-[#60A5FA] shadow-[0_0_14px_#60A5FA]',
    },
  },
  {
    year: '1983–1990',
    role: 'State General Secretary, Treasurer & Vice President',
    organization: 'BJP Yuva Morcha, Bihar',
    context: 'Seven years mobilizing youth across North and South Bihar for social reform and political empowerment.',
    badge: 'YOUTH WING',
    palette: {
      accent: '#2DD4BF',
      bgGradient: 'from-[#0D9488] via-[#0F766E] to-[#115E59]',
      borderColor: 'border-[#2DD4BF]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(13,148,136,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#CCFBF1]',
      dotGlow: 'bg-[#2DD4BF] shadow-[0_0_14px_#2DD4BF]',
    },
  },
  {
    year: '1990–1995',
    role: 'State President',
    organization: 'BJP Yuva Morcha, Bihar',
    context: 'Spearheaded state-wide youth mobilization across all districts of undivided Bihar.',
    badge: 'STATE PRESIDENT',
    palette: {
      accent: '#F0ABFC',
      bgGradient: 'from-[#C026D3] via-[#A21CAF] to-[#86198F]',
      borderColor: 'border-[#F0ABFC]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(192,38,211,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#FAE8FF]',
      dotGlow: 'bg-[#F0ABFC] shadow-[0_0_14px_#F0ABFC]',
    },
  },
  {
    year: '1995',
    role: 'Elected MLA (1st Term), Patna East',
    organization: 'State General Secretary, BJP Bihar',
    context: 'Entered the Bihar Legislative Assembly representing Patna East; steered party administrative strategy.',
    badge: 'MLA 1ST TERM',
    palette: {
      accent: '#38BDF8',
      bgGradient: 'from-[#0284C7] via-[#0369A1] to-[#0C4A6E]',
      borderColor: 'border-[#38BDF8]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(14,165,233,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#E0F2FE]',
      dotGlow: 'bg-[#38BDF8] shadow-[0_0_14px_#38BDF8]',
    },
  },
  {
    year: '1998–2003',
    role: 'State President',
    organization: 'BJP Bihar',
    context: 'Led the state unit through pivotal parliamentary victories and historic democratic realignments.',
    badge: 'PARTY PRESIDENT',
    palette: {
      accent: '#FBA74E',
      bgGradient: 'from-[#EA580C] via-[#C2410C] to-[#7C2D12]',
      borderColor: 'border-[#FBA74E]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(249,115,22,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#FEF3C7]',
      dotGlow: 'bg-[#FBA74E] shadow-[0_0_14px_#FBA74E]',
    },
  },
  {
    year: '2000',
    role: 'Re-elected MLA (2nd Term)',
    organization: 'Patna East Constituency',
    context: 'Won re-election with resounding popular mandate, championing urban connectivity and civic rights.',
    badge: 'MLA 2ND TERM',
    palette: {
      accent: '#34D399',
      bgGradient: 'from-[#059669] via-[#047857] to-[#064E3B]',
      borderColor: 'border-[#34D399]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(16,185,129,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#D1FAE5]',
      dotGlow: 'bg-[#34D399] shadow-[0_0_14px_#34D399]',
    },
  },
  {
    year: '2003',
    role: 'State Convener of NDA',
    organization: 'BJP National Executive · Central Disciplinary Committee',
    context: 'Coordinated alliance cohesion and contributed to national party policy at the highest deliberative level.',
    badge: 'NATIONAL LEVEL',
    palette: {
      accent: '#C084FC',
      bgGradient: 'from-[#7C3AED] via-[#6D28D9] to-[#4C1D95]',
      borderColor: 'border-[#C084FC]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(124,58,237,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#F3E8FF]',
      dotGlow: 'bg-[#C084FC] shadow-[0_0_14px_#C084FC]',
    },
  },
  {
    year: 'Feb 2005',
    role: 'Elected MLA (3rd Term)',
    organization: 'Patna East Constituency',
    context: 'Secured third consecutive legislative assembly victory during a pivotal turning point in Bihar’s governance.',
    badge: 'MLA 3RD TERM',
    palette: {
      accent: '#60A5FA',
      bgGradient: 'from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A]',
      borderColor: 'border-[#60A5FA]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(37,99,235,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#DBEAFE]',
      dotGlow: 'bg-[#60A5FA] shadow-[0_0_14px_#60A5FA]',
    },
  },
  {
    year: 'Nov 2005',
    role: 'Elected MLA (4th Term) & Cabinet Minister',
    organization: 'Minister, Road Construction & Tourism, Govt. of Bihar',
    context: 'Assumed cabinet office; initiated Bihar’s massive road modernization and heritage tourism revival.',
    badge: 'CABINET MINISTER',
    palette: {
      accent: '#FB7185',
      bgGradient: 'from-[#E11D48] via-[#BE123C] to-[#881337]',
      borderColor: 'border-[#FB7185]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(225,29,72,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#FFE4E6]',
      dotGlow: 'bg-[#FB7185] shadow-[0_0_14px_#FB7185]',
    },
  },
  {
    year: 'Apr 2008',
    role: 'Minister, Health Department',
    organization: 'Government of Bihar',
    context: 'Strengthened rural primary healthcare centers, hospital medical infrastructure, and essential drug supply.',
    badge: 'HEALTH PORTFOLIO',
    palette: {
      accent: '#2DD4BF',
      bgGradient: 'from-[#0D9488] via-[#0F766E] to-[#134E4A]',
      borderColor: 'border-[#2DD4BF]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(13,148,136,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#CCFBF1]',
      dotGlow: 'bg-[#2DD4BF] shadow-[0_0_14px_#2DD4BF]',
    },
  },
  {
    year: 'Nov 2010',
    role: 'Elected MLA (5th Term) & Minister',
    organization: 'Minister, Road Construction Department, Govt. of Bihar',
    context: 'Delivered historic bridges, major river crossings over the Ganga, and statewide four-lane corridors.',
    badge: 'MLA 5TH TERM',
    palette: {
      accent: '#FCD34D',
      bgGradient: 'from-[#D97706] via-[#B45309] to-[#78350F]',
      borderColor: 'border-[#FCD34D]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(217,119,6,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#FEF3C7]',
      dotGlow: 'bg-[#FCD34D] shadow-[0_0_14px_#FCD34D]',
    },
  },
  {
    year: 'Jun 2013',
    role: 'Leader of Opposition',
    organization: 'Bihar Legislative Assembly (served through 2015)',
    context: 'Held the executive accountable on the floor of the House with rigorous parliamentary debate.',
    badge: 'OPPOSITION LEADER',
    palette: {
      accent: '#F0ABFC',
      bgGradient: 'from-[#C026D3] via-[#A21CAF] to-[#701A75]',
      borderColor: 'border-[#F0ABFC]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(192,38,211,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#FAE8FF]',
      dotGlow: 'bg-[#F0ABFC] shadow-[0_0_14px_#F0ABFC]',
    },
  },
  {
    year: 'Nov 2015',
    role: 'Elected MLA (6th Term)',
    organization: 'Patna Sahib Constituency',
    context: 'Demonstrated enduring public trust by winning sixth term from the historic Patna Sahib seat.',
    badge: 'MLA 6TH TERM',
    palette: {
      accent: '#38BDF8',
      bgGradient: 'from-[#0369A1] via-[#0284C7] to-[#075985]',
      borderColor: 'border-[#38BDF8]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(14,165,233,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#E0F2FE]',
      dotGlow: 'bg-[#38BDF8] shadow-[0_0_14px_#38BDF8]',
    },
  },
  {
    year: 'Dec 2015',
    role: 'Chairman, Public Accounts Committee',
    organization: 'Bihar Legislative Assembly',
    context: 'Presided over financial stewardship, audit accountability, and public expenditure scrutiny.',
    badge: 'PAC CHAIRMAN',
    palette: {
      accent: '#34D399',
      bgGradient: 'from-[#059669] via-[#047857] to-[#065F46]',
      borderColor: 'border-[#34D399]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(16,185,129,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#D1FAE5]',
      dotGlow: 'bg-[#34D399] shadow-[0_0_14px_#34D399]',
    },
  },
  {
    year: 'Aug 2017 – Nov 2020',
    role: 'Minister, Road Construction Department',
    organization: 'Government of Bihar',
    context: 'Second ministerial tenure delivering flyovers, elevated ring roads, and national highway integration.',
    badge: 'PWD MINISTER',
    palette: {
      accent: '#FBA74E',
      bgGradient: 'from-[#EA580C] via-[#C2410C] to-[#7C2D12]',
      borderColor: 'border-[#FBA74E]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(249,115,22,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#FEF3C7]',
      dotGlow: 'bg-[#FBA74E] shadow-[0_0_14px_#FBA74E]',
    },
  },
  {
    year: 'Nov 2020',
    role: 'Elected MLA (7th Term)',
    organization: 'Patna Sahib Constituency',
    context: 'Re-elected for a seventh legislative term, cementing half a century of unbroken democratic service.',
    badge: 'MLA 7TH TERM',
    palette: {
      accent: '#60A5FA',
      bgGradient: 'from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A]',
      borderColor: 'border-[#60A5FA]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(37,99,235,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#DBEAFE]',
      dotGlow: 'bg-[#60A5FA] shadow-[0_0_14px_#60A5FA]',
    },
  },
  {
    year: 'Dec 2020',
    role: 'Chairman, Estimates Committee',
    organization: 'Bihar Legislative Assembly',
    context: 'Led budgetary assessment, economic efficiency reviews, and departmental planning recommendations.',
    badge: 'ESTIMATES CHAIR',
    palette: {
      accent: '#C084FC',
      bgGradient: 'from-[#7C3AED] via-[#6D28D9] to-[#4C1D95]',
      borderColor: 'border-[#C084FC]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(124,58,237,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#F3E8FF]',
      dotGlow: 'bg-[#C084FC] shadow-[0_0_14px_#C084FC]',
    },
  },
  {
    year: 'Sept 2022',
    role: 'Chairman, Internal Resources & Central Assistance Committee',
    organization: 'Bihar Legislative Assembly',
    context: 'Directed state revenue optimization, federal financial cooperation, and special grant utilization.',
    badge: 'FINANCIAL POLICY',
    palette: {
      accent: '#2DD4BF',
      bgGradient: 'from-[#0D9488] via-[#0F766E] to-[#115E59]',
      borderColor: 'border-[#2DD4BF]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(13,148,136,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#CCFBF1]',
      dotGlow: 'bg-[#2DD4BF] shadow-[0_0_14px_#2DD4BF]',
    },
  },
  {
    year: 'Feb 2024',
    role: '17th Speaker',
    organization: 'Bihar Legislative Assembly',
    context: 'Unanimously trusted constitutional arbiter, conducting parliamentary business with poise and discipline.',
    badge: 'ASSEMBLY SPEAKER',
    palette: {
      accent: '#F0ABFC',
      bgGradient: 'from-[#C026D3] via-[#A21CAF] to-[#701A75]',
      borderColor: 'border-[#F0ABFC]/60',
      glowShadow: 'shadow-[0_12px_35px_rgba(192,38,211,0.3)]',
      tagBg: 'bg-white/20',
      tagText: 'text-[#FAE8FF]',
      dotGlow: 'bg-[#F0ABFC] shadow-[0_0_14px_#F0ABFC]',
    },
  },
  {
    year: '13 Mar 2026',
    role: '23rd Governor of Nagaland',
    organization: 'Incumbent Constitutional Head',
    context: 'Appointed by President Smt. Droupadi Murmu as the constitutional head of the State of Nagaland.',
    badge: 'CONSTITUTIONAL HEAD',
    palette: {
      accent: '#FFE6C2',
      bgGradient: 'from-[#E6511C] via-[#C2410C] to-[#7C2D12]',
      borderColor: 'border-[#FFE6C2]/70',
      glowShadow: 'shadow-[0_16px_50px_rgba(230,81,28,0.5)]',
      tagBg: 'bg-white/25',
      tagText: 'text-white',
      dotGlow: 'bg-[#FFE6C2] shadow-[0_0_18px_#FFE6C2]',
    },
  },
];

const TimelineCard: React.FC<{ item: TimelineItemData; index: number }> = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div
      ref={ref}
      className={`relative w-full flex flex-col md:flex-row items-start md:items-center my-3 md:my-5 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* 3D Bright Colored Card */}
      <div className="w-full md:w-[46%] pl-10 md:pl-0">
        <motion.div
          whileHover={{ y: -4, scale: 1.015 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className={`group rounded-[24px] p-5 sm:p-6 transition-all duration-300 cursor-pointer border backdrop-blur-xl bg-gradient-to-br ${item.palette.bgGradient} ${item.palette.borderColor} ${item.palette.glowShadow} relative overflow-hidden`}
        >
          {/* Top highlight glare for 3D glass sheen */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

          {/* Top Row: Year + Tag + Chevron */}
          <div className="flex items-center justify-between gap-2 sm:gap-3 mb-2 flex-wrap">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-none drop-shadow-sm">
                {item.year}
              </span>
              <span
                className={`font-micro text-[9px] sm:text-[10px] px-2.5 py-0.5 rounded-full font-bold tracking-[0.14em] uppercase backdrop-blur-sm ${item.palette.tagBg} ${item.palette.tagText}`}
              >
                {item.badge || 'MANDATE'}
              </span>
            </div>

            <div className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors shadow-sm shrink-0">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>

          {/* Role & Organization */}
          <div className="font-display font-semibold text-sm sm:text-base lg:text-lg text-white leading-snug drop-shadow-sm">
            {item.role} <span style={{ color: item.palette.accent }}>·</span> {item.organization}
          </div>

          {/* Expandable Context Line */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isExpanded
                ? 'max-h-36 opacity-100 mt-3 pt-3 border-t border-white/20'
                : 'max-h-0 md:group-hover:max-h-36 opacity-0 md:group-hover:opacity-100 md:group-hover:mt-3 md:group-hover:pt-3 md:group-hover:border-t md:group-hover:border-white/20'
            }`}
          >
            <p className="font-body text-xs sm:text-sm text-white/95 leading-relaxed">
              {item.context}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Center 3D Node with Dynamic Glow matching card */}
      <div className="absolute left-3 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center z-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className={`w-4 h-4 rounded-full border-2 border-white/40 flex items-center justify-center ${item.palette.dotGlow}`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </motion.div>
      </div>

      <div className="hidden md:block w-[46%]" />
    </div>
  );
};

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="relative w-full bg-white px-3 sm:px-4 lg:px-6 py-4 sm:py-6 select-none">
      {/* Bright Aesthetic Multi-Color Luminous Block Card */}
      <div
        className="max-w-[1440px] mx-auto rounded-[28px] sm:rounded-[36px] text-white p-6 sm:p-10 lg:p-16 border border-indigo-400/25 shadow-2xl overflow-hidden relative"
        style={{
          background: 'linear-gradient(135deg, #1A1F3C 0%, #1E1B4B 35%, #0F2042 70%, #1A1538 100%)',
        }}
      >
        {/* Dynamic Multi-Color Radiant Background Blobs */}
        <div
          className="absolute -top-24 -right-20 w-[550px] h-[550px] rounded-full pointer-events-none opacity-50 blur-[90px]"
          style={{ background: 'radial-gradient(circle, #38BDF8 0%, #2563EB 50%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none opacity-45 blur-[90px]"
          style={{ background: 'radial-gradient(circle, #EC4899 0%, #8B5CF6 50%, transparent 70%)' }}
        />
        <div
          className="absolute top-2/3 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none opacity-40 blur-[90px]"
          style={{ background: 'radial-gradient(circle, #F59E0B 0%, #E6511C 50%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] rounded-full pointer-events-none opacity-40 blur-[90px]"
          style={{ background: 'radial-gradient(circle, #10B981 0%, #06B6D4 50%, transparent 70%)' }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="max-w-xl mb-12 lg:mb-16">
            <Reveal>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
                <span className="font-micro text-[11px] text-[#38BDF8] tracking-[0.14em] font-bold">
                  CHAPTER 04 · A LIFE IN PUBLIC OFFICE
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight [text-wrap:balance]">
                Five decades. Seven terms. One pursuit.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-body text-xs sm:text-sm text-white/85 mt-3 leading-relaxed">
                From student leadership and ward-level governance to executive cabinet portfolios, Speaker of the Assembly, and Governor of Nagaland.
              </p>
            </Reveal>
          </div>

          {/* Timeline Spine */}
          <div className="relative w-full">
            <div
              className="absolute left-3 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#38BDF8] via-[#C084FC] to-[#FBA74E] pointer-events-none opacity-80 shadow-[0_0_12px_#38BDF8]"
              aria-hidden="true"
            />

            <div className="relative flex flex-col w-full">
              {timelineData.map((item, idx) => (
                <TimelineCard key={idx} item={item} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
