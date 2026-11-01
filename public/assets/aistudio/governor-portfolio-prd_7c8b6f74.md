# GOD-PRD — Portfolio Website for H.E. Shri Nand Kishore Yadav

**23rd Governor of Nagaland**

> **How to use this file:** Paste this ENTIRE document as a single prompt into Google AI Studio (Gemini, Build mode). Attach the reference hero image + the Governor portrait and gallery photos. Do not shorten it. The AI must follow every instruction verbatim. The goal is a single-shot, production-ready, mobile-first portfolio site that does NOT look AI-generated.

---

## 0. ROLE & PRIME DIRECTIVE FOR THE AI

You are a **Senior Product Designer + Senior Frontend Engineer** at a top-tier studio (think Linear, Vercel, Rauno, Emil Kowalski level). You are building a **single-page portfolio-style official website** for the sitting Governor of an Indian state. The site must feel:

- **Dignified and statesmanlike** (he is a constitutional head, not a creator)
- **Editorial, premium, Swiss-meets-Bihari-heritage**
- **Zero AI-slop energy** — no stock gradients, no generic card grids, no emoji icons, no lorem flavor
- **Alive** — tasteful motion everywhere, nothing static, nothing jarring
- **Mobile-flawless** — the hero must render perfectly on a 390px iPhone WITHOUT any post-launch tweaking by the user

Build it in **React + Vite + TailwindCSS + Framer Motion** (single `App.jsx`, components inline or split cleanly). Use **Lenis** for smooth scroll. Use **GSAP ScrollTrigger** for the horizontal gallery.

**Non-negotiables:**
1. Replicate the reference layout spiritually (warm gradient left panel + crisp white right panel in hero) but adapt copy and content to a Governor.
2. ONLY the hero and the scroll gallery contain photographs. Every other section uses **animated 3D gradient blobs, mesh gradients, and geometric shapes** — never stock imagery, never icons that look like Flaticon.
3. Each non-image section gets its own **unique bright 3D gradient palette** so scrolling feels like turning the pages of a design magazine.
4. All animation easings are `cubic-bezier(0.65, 0, 0.35, 1)` or `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out). No linear, no default ease.
5. Every interactive element has a hover state. Every section has entry animation on scroll.

---

## 1. SUBJECT RESEARCH (USE THIS COPY VERBATIM)

### 1.1 Identity
- **Full honorific:** His Excellency Shri Nand Kishore Yadav
- **Office:** 23rd Governor of Nagaland
- **Assumed office:** 13 March 2026
- **Appointed by:** President of India, Smt. Droupadi Murmu (on 5 March 2026)
- **Residence:** Lok Bhavan, Kohima
- **Chief Minister in office:** Shri Neiphiu Rio
- **Predecessor:** Shri Ajay Kumar Bhalla (Additional Charge)

### 1.2 Early Life
- **Born:** 26 August 1953, Patna, Bihar
- **Parents:** Shri Panna Lal Yadav and Smt. Raj Kumari Yadav
- **Education:**
  - Matriculation — State Marwari High School, 1969
  - Bachelor of Science — Magadh University

### 1.3 Ideological & Student Roots
- Joined the **Rashtriya Swayamsevak Sangh (RSS)** in 1969
- Became active in the **Akhil Bharatiya Vidyarthi Parishad (ABVP)** in 1971

### 1.4 Public Service Timeline (use these as timeline entries verbatim)
- **1978** — Councillor, Patna Municipal Corporation
- **1982** — Deputy Mayor, Patna Municipal Corporation
- **1990** — President, BJP Yuva Morcha, Bihar
- **1995** — General Secretary, BJP Bihar
- **1998–2003** — President, Bharatiya Janata Party, Bihar
- **Seven terms** — Member, Bihar Legislative Assembly (Patna East, later Patna Sahib)
- **2010–2013** — Minister of Public Works Department, Government of Bihar
- **2013–2015** — Leader of Opposition, Bihar Legislative Assembly
- **2017–2020** — Minister of Public Works Department, Government of Bihar
- **February 2024 – 2025** — 17th Speaker, Bihar Legislative Assembly
- **13 March 2026 – Present** — 23rd Governor of Nagaland

### 1.5 Ex-Officio Roles as Governor
- **Chief Rector**, Nagaland University
- **Visitor** — Global Open University, St. Joseph University, ICFAI University (Nagaland), Christian Institute of Health Science and Research

### 1.6 Governance Vision — Key Themes (use for the "Vision" section)
Cite from his public addresses:
- **"Peace for Development, and Development for Peace"** — his signature articulation
- Collective push for **inclusive development of Eastern Nagaland**
- Honouring the **5 February 2026 ENPO–GoI–Government of Nagaland agreement** on the Frontier Nagaland Territorial Authority
- Strengthening **Foothill Road and railway connectivity**
- Agriculture as the backbone — over **70% of Nagaland's population** lives rurally and depends on agriculture
- Establishing **premier educational institutions** within the state
- Youth to look **beyond government jobs** — entrepreneurship, skill-based careers, self-reliance
- **Preserving tribal heritage** of the Northeast (over **86.5% of Nagaland is tribal**)
- Empowering **women, farmers, artisans, and frontline workers**
- Fighting **unemployment, substance abuse, environmental degradation, social divisions**

### 1.7 Suggested Tagline Options (pick #1 by default)
1. **"In service of Nagaland. In service of Bharat."**
2. **"Peace for Development. Development for Peace."**
3. **"A life in public service."**

---

## 2. INFORMATION ARCHITECTURE

Single page, long-scroll, 8 sections in this exact order:

1. **Hero** — split layout with portrait (image)
2. **Marquee** — scrolling honorific/vision text, no image
3. **About / Early Life** — editorial two-column with 3D gradient blob
4. **Journey** — vertical timeline of career, 3D gradient shapes as timeline nodes
5. **Vision & Priorities** — six priority tiles with unique mini-gradient blocks per tile
6. **Horizontal Scroll Gallery** — the ONLY other image-heavy section (public appearances, events)
7. **Lok Bhavan / Office** — ex-officio roles, geometric gradient composition
8. **Footer / Contact** — official addresses, social, credits

---

## 3. DESIGN SYSTEM

### 3.1 Grid & Spacing
- Base unit: **8px**
- Container max-width: **1440px**, 7% side padding on desktop, **20px** on mobile
- Vertical rhythm between sections: **160px desktop / 96px mobile**
- Border radius scale: `6, 12, 20, 32, 56` (rounded-pill for CTAs)

### 3.2 Typography
Use these Google Fonts — load in `<head>`:
- **Display / Headlines:** `Fraunces` (variable, opsz 144, wght 400–900, slnt 0)
- **Body / UI:** `Inter` (variable, wght 300–700)
- **Micro / Labels:** `JetBrains Mono` (wght 400–600, uppercase, tracking 0.14em)

Type scale (clamp for fluid responsiveness — do NOT use fixed px for headings):
- **Hero display:** `clamp(72px, 14vw, 220px)` — Fraunces 500, opsz max, tracking -0.04em, leading 0.88
- **Section H2:** `clamp(44px, 7vw, 96px)` — Fraunces 500, tracking -0.03em
- **H3:** `clamp(24px, 2.6vw, 36px)` — Fraunces 500
- **Body L:** `20px / 1.55` — Inter 400
- **Body M:** `17px / 1.6` — Inter 400
- **Micro:** `12px` — JetBrains Mono, uppercase, tracking 0.14em

### 3.3 Color System (CSS variables on `:root`)
```
--ink: #0E0E10;              /* near-black for text */
--paper: #F6F2EC;            /* warm paper, main background */
--paper-pure: #FFFFFF;       /* white panels */
--rule: #1A1A1C;             /* divider lines */

/* Hero + brand accent — warm Bihari saffron inspired */
--amber-900: #4A1A02;
--amber-700: #9A3412;
--amber-500: #E6511C;        /* primary hero gradient tone */
--amber-300: #FBA74E;
--amber-100: #FFE6C2;

/* Section-specific bright 3D palettes (DO NOT MIX) */
--sec-vision-a: #7B5BFF;    --sec-vision-b: #FF6AD5;   --sec-vision-c: #27E8C0;
--sec-journey-a: #0057FF;   --sec-journey-b: #86B6FF;  --sec-journey-c: #FFD66B;
--sec-priority-a: #FF4D7E;  --sec-priority-b: #FF9A3C; --sec-priority-c: #FFE066;
--sec-office-a: #0C3B2E;    --sec-office-b: #4F9D69;   --sec-office-c: #CFE8CF;
--sec-footer-a: #0E0E10;    --sec-footer-b: #2A2A2E;   --sec-footer-c: #E6511C;
```

### 3.4 3D Gradient Blob System (CORE VISUAL LANGUAGE)
This is the signature look that replaces imagery. Build these as **inline SVG + CSS filter blur + mix-blend-mode: screen**, animated with Framer Motion. Three primitives:

**Primitive A — Mesh Blob**
- Two overlapping circles with heavy `filter: blur(80px)` and `mix-blend-mode: screen`
- Each circle animates `translate` on a slow loop (18–24s) with staggered phase

**Primitive B — Glass Prism**
- A rounded cube rendered in CSS `transform-style: preserve-3d` with three visible faces
- Faces use **backdrop-filter: blur(20px) saturate(180%)** over a conic gradient
- Slow rotateY animation (30s loop)

**Primitive C — Ribbon**
- SVG path with a 3-stop linear gradient along its length
- Path is `d="M..."` for an S-curve
- Animate `strokeDashoffset` on scroll via `useScroll` + `useTransform`

Each non-image section MUST use at least one of these primitives, scaled to be hero-level visually, never decorative-only.

---

## 4. SECTION-BY-SECTION SPECIFICATION

### SECTION 1 — HERO (replicates the reference exactly, adapted)

**Layout (desktop ≥1024px):**
- Full-viewport height (`100svh`, use svh not vh to avoid mobile browser chrome jank)
- Two-panel split: **LEFT 58% / RIGHT 42%**
- Rounded outer border radius `20px` with `12px` margin on all sides from viewport edge (so background `--ink` shows as a dark frame — matches the reference's dark border)
- **Left panel:**
  - Background: radial-gradient at 70% 50% from `--amber-300` through `--amber-500` to `--amber-900`
  - Overlay: a secondary conic-gradient at 20% 80%, 40% opacity, blended `overlay`
  - A silhouette portrait of the Governor (user uploads) positioned bottom-right, scaled to 95% of panel height, with `mix-blend-mode: luminosity` so it reads as a tonal silhouette rather than a photo
  - Giant display word **"SEVA"** (Hindi/Sanskrit for service) in Fraunces 500, color `--paper-pure`, positioned top-left, overlapping the portrait. On mobile this becomes **"SEVA"** stacked.
  - Below the display word, two-line tagline in Inter 400, 20px, white at 85% opacity:
    > *Designs of democracy. Decades of service.*
  - CTA pill: **"View Journey ↗"** — white background, `--ink` text, 56px tall, 32px side padding, rounded-full. On hover: scale 1.03, background shifts to `--amber-100`, arrow translates (6px, -6px).
  - Below CTA: a small "trusted by" style row — but instead show 4 small circular monochrome medallions representing: **RSS 1969**, **ABVP 1971**, **BJP Bihar 1998**, **Bihar Vidhan Sabha 2024**, with a "+" chip saying **"7× MLA"**. Caption below: *A life of grassroots service across five decades.*

- **Right panel (white):**
  - Nav bar: logo-mark top-left (an elegant monogram `NKY` in Fraunces, 22px, tracking -0.04em). Nav links top-right: **VISION · JOURNEY · OFFICE · CONTACT** in Micro type.
  - Below nav, a vertical rhythm:
    - Micro label: **"23RD GOVERNOR OF NAGALAND · SINCE 13 MARCH 2026"** with a 6px live-pulse amber dot
    - H2: *Shri Nand Kishore Yadav*
    - Short bio paragraph (3 lines): *A veteran parliamentarian from Bihar with over five decades in public life — Member of the Legislative Assembly for seven terms, Speaker of the Bihar Vidhan Sabha, and now the constitutional head of Nagaland.*
    - A testimonial-style quote card at bottom-right (replicating the James Carter card in the reference), content:
      > *"Peace for Development, and Development for Peace."*
      — **Shri Nand Kishore Yadav**, Independence Day Address, Kohima, 2026
    - Card has 1px border `#E7E2DA`, 20px radius, 24px padding, a soft `box-shadow: 0 20px 40px -20px rgba(14,14,16,0.12)`.

**Mobile hero (<768px) — THIS MUST BE PERFECT:**
- Height: `100svh`, min-height 680px
- Order: top half amber panel, bottom half white panel (vertical stack, 50/50)
- Display word "SEVA" scales to `clamp(96px, 32vw, 160px)`, placed top-left of amber panel
- Portrait silhouette anchors bottom-right of amber panel at 70% panel height
- White panel: nav collapses to logo + hamburger (hamburger opens a full-screen overlay menu, menu items in `clamp(32px, 9vw, 52px)` Fraunces)
- Hero quote card: full-width minus 20px padding, sits above fold
- CTA sticky at bottom with 20px bottom offset, 56px tall, full width minus 40px padding, uses `safe-area-inset-bottom`
- Micro label wraps gracefully; use `text-wrap: balance`
- Test checklist for AI: on iPhone 12 (390×844) — no horizontal scroll, no layout shift, portrait never crops the face, CTA always above home-indicator.

**Hero entry animation:**
- Amber panel scales from `scale(1.08)` to `1`, 1.2s expo-out
- Display word "SEVA" letters staggered up from `y:120, opacity:0` with 60ms stagger
- Nav links fade down from `y:-16` 0.6s delay 0.4s
- Quote card eases in from `y:40, opacity:0` 0.8s delay 0.9s

### SECTION 2 — MARQUEE STRIP

- Full-bleed horizontal strip, 180px tall desktop / 96px mobile
- Background `--ink`, text `--paper`
- Infinite horizontal scroll using `animation: marquee 40s linear infinite`
- Content repeats:
  > *PEACE FOR DEVELOPMENT · DEVELOPMENT FOR PEACE · सेवा ही संकल्प · 23RD GOVERNOR OF NAGALAND · ★ ·*
- Each `·` is actually an inline SVG star or 8-pointed asterisk from Fraunces
- On hover (desktop only), marquee slows to 20% speed via `animation-play-state`
- Reverses direction on alternating rows (if you add a second row at 120% opacity)

### SECTION 3 — ABOUT / EARLY LIFE

- Background: `--paper`
- Two-column, 60/40 split
- **LEFT:** editorial copy
  - Micro label: **"CHAPTER 01 · ROOTS"**
  - H2: *From the lanes of Patna to the hills of Kohima.*
  - Body paragraphs (write in warm, dignified editorial voice):

  > Born on 26 August 1953 in Patna to Shri Panna Lal Yadav and Smt. Raj Kumari Yadav, Nand Kishore Yadav's earliest lessons were in service. He completed his matriculation in 1969 from the State Marwari High School and went on to earn his Bachelor of Science from Magadh University.
  >
  > The same year he finished school, he joined the Rashtriya Swayamsevak Sangh — the beginning of a lifelong engagement with ideas of nation, discipline, and community. Student activism through the Akhil Bharatiya Vidyarthi Parishad followed in 1971, laying the groundwork for a public career defined by proximity to people and problems.

- **RIGHT:** a large 3D glass prism (Primitive B) — a rotating rounded cube with amber-to-rose conic gradient faces, each face carrying a Micro-type stat etched in white:
  - Face 1: **"B.Sc. · Magadh University"**
  - Face 2: **"RSS · 1969"**
  - Face 3: **"ABVP · 1971"**
- Prism rotates on Y-axis 30s loop. On scroll into view, it ALSO animates `rotateX` from `-20deg` to `0`, 1s expo-out.
- Mobile: prism stacks below copy, size 280×280, rotation preserved.

### SECTION 4 — JOURNEY (TIMELINE)

- Background: `--paper`, with a huge Primitive A mesh blob (`--sec-journey-*` palette) floating at top-right, 60% opacity, blur 100px
- Section intro:
  - Micro label: **"CHAPTER 02 · A LIFE IN PUBLIC OFFICE"**
  - H2: *Five decades. Seven terms. One pursuit.*
- Vertical timeline, center-aligned on desktop (zig-zag left/right), left-aligned on mobile
- Each node = a small Primitive C ribbon curve ending in a filled circle; year in Fraunces 500, 44px, next to it
- Timeline entries (use exactly the 1.4 timeline above)
- Entry animation: as each node scrolls into viewport, the ribbon's `strokeDashoffset` animates from length to 0, the year counts up from 00 to its actual value via a Framer Motion `useMotionValue` + `useTransform` with `useSpring`.
- Hover on any entry: the row expands by 24px, background turns `--amber-100` with 400ms ease, a Micro-type context line fades in to the right of the year explaining the role.
- Mobile: single column, nodes on left at 20px indent, line is a 1px `--rule` vertical. Hover becomes tap-to-expand with chevron rotate.

### SECTION 5 — VISION & PRIORITIES

- Background: full-bleed deep gradient from `--sec-vision-a` through `--sec-vision-b` to `--sec-vision-c`, animated via `background-position` on a 20s loop, 400% background-size
- Text color: `--paper-pure`
- Section intro:
  - Micro label (white at 70%): **"CHAPTER 03 · WHAT HE STANDS FOR"**
  - H2: *A vision shaped by soil, people, and purpose.*
- Six priority tiles in a `grid-cols-3` desktop / `grid-cols-1` mobile, 32px gap
- Each tile:
  - Rounded 32px, `backdrop-filter: blur(24px) saturate(140%)`, background `rgba(255,255,255,0.08)`, 1px white-at-14% border
  - 240px tall
  - Top-left: a UNIQUE 3D gradient mini-blob per tile (do NOT repeat palettes across tiles — each tile gets its own 3-color gradient pulled from a different section's palette)
  - H3 title + 2-line description

**Tiles (exact copy):**
1. **Peace for Development** — *Honouring the 5 February 2026 ENPO agreement and the Frontier Nagaland Territorial Authority as a milestone for the East.*
2. **Agriculture & Rural Livelihoods** — *Standing with the 70% of Nagaland's population whose lives rest on farming and allied work.*
3. **Connectivity & Infrastructure** — *Advancing the Foothill Road and railway projects to unlock the State's industrial and agricultural potential.*
4. **Youth & Enterprise** — *Encouraging a generation to look beyond government jobs — toward skill, entrepreneurship, and self-reliance.*
5. **Education for Nagaland, in Nagaland** — *Advocating premier national and regional institutions on Naga soil so students need not leave home to learn.*
6. **Tribal Heritage & Identity** — *Documenting, preserving and reinterpreting the heritage of the 86.5% of Nagaland that is tribal — in step with modern scholarship.*

**Tile hover (desktop):** tile lifts `y:-8`, inner gradient blob scales 1.15 and shifts hue by 20° via `filter: hue-rotate(20deg)`, border opacity goes to 36%, soft glow `box-shadow: 0 40px 80px -20px rgba(0,0,0,0.4)`. 500ms expo-out.

**Mobile:** tiles stack full-width, same hover applies to tap-active state.

### SECTION 6 — HORIZONTAL SCROLL GALLERY (ONLY other image section)

- Pinned section, GSAP ScrollTrigger pins the container and translates an inner `flex` row horizontally based on vertical scroll progress
- Background: `--ink`, text `--paper`
- Section intro (static, before pin):
  - Micro label: **"CHAPTER 04 · IN THE FIELD"**
  - H2: *The office, in motion.*
- 7 image cards horizontally (user uploads), each:
  - Portrait or landscape, 420px wide × 560px tall base, with 32px gap
  - Rounded 20px, 1px white-at-10% border
  - Caption below each image in Micro type: location, date, event (user fills these — leave as placeholders `[CAPTION 1]`, `[CAPTION 2]` ... `[CAPTION 7]`)
  - On hover: image scales 1.04, caption slides up with 2 extra lines of context fading in
- Smooth parallax: each image's `translateY` moves counter to scroll via `useScroll` + `useTransform`
- Mobile: horizontal scroll becomes a native swipe snap carousel (`scroll-snap-type: x mandatory`), each slide 85vw wide, 20px gap, no pin. Dots indicator below.

### SECTION 7 — LOK BHAVAN / OFFICE

- Background: `--sec-office-a` (deep forest green)
- A dramatic composition of 3 Primitive C ribbons overlapping in the right half, in the `--sec-office-*` palette, slowly animating along their stroke paths
- LEFT content:
  - Micro label (paper): **"CHAPTER 05 · THE OFFICE"**
  - H2 (paper): *From Lok Bhavan, in service of the State.*
  - Body:
    > As the constitutional head of Nagaland, the Governor presides over the State's legislative and executive balance. Beyond the Rajbhavan, Shri Yadav serves ex-officio as Chief Rector of Nagaland University and Visitor to five of the State's leading universities.
  - A list of ex-officio appointments, each row with a 1px separator and Micro-type institution name:
    - Nagaland University — *Chief Rector*
    - Global Open University — *Visitor*
    - St. Joseph University — *Visitor*
    - ICFAI University, Nagaland — *Visitor*
    - Christian Institute of Health Science and Research — *Visitor*
- On scroll into view, each row's underline animates left-to-right over 400ms, staggered 80ms.

### SECTION 8 — FOOTER / CONTACT

- Background: `--sec-footer-a`
- A giant Fraunces word mark at top of footer: **"सेवा"** (devanagari) rendered in `clamp(140px, 24vw, 420px)`, 500 weight, in `--amber-500`, with a vertical conic gradient fill (use SVG `<text>` with a gradient `fill`)
- Three columns:
  - **OFFICE** — Lok Bhavan, Kohima, Nagaland 797001 · lokbhavan.nagaland.gov.in
  - **CONNECT** — X / Twitter: `@nkishoreyadav` · Press & Media: `press@lokbhavan.nagaland.gov.in` (placeholder — mark as [verify])
  - **CONSTITUTIONAL ROLE** — Head of State · Chief Rector, Nagaland University · Visitor to 5 Universities
- Micro-type credit line at bottom: *An unofficial tribute site · Content sourced from public records · Last updated November 2026*
- Legal line: *Information presented is drawn from public domain sources including nagaland.gov.in, lokbhavan.nagaland.gov.in, and news agency reports.*
- A thin, animated horizontal rule (1px, `--amber-500`) that pulses opacity 100 → 40 → 100 on an 8s loop.

---

## 5. MOTION & INTERACTION LAYER (GLOBAL RULES)

- **Smooth scroll:** Lenis — `lerp: 0.085`, `wheelMultiplier: 1`, `smoothTouch: false` (don't smooth touch — kills native feel)
- **Cursor (desktop ≥1024px):** custom 10px circle, `mix-blend-mode: difference`, grows to 56px on any interactive element
- **Scroll reveals:** every section's heading uses `whileInView={{ opacity:1, y:0 }} initial={{ opacity:0, y:40 }} transition={{ duration:0.9, ease:[0.16,1,0.3,1] }}` and `viewport={{ once:true, margin:"-15% 0px" }}`
- **Marquee / infinite:** CSS keyframes, GPU-accelerated with `will-change: transform`
- **No motion when `prefers-reduced-motion: reduce`** — disable Lenis, swap Framer transitions to `duration: 0`, keep layouts intact
- **No parallax, no blobs, no custom cursor on mobile** — strip motion to just the fade-and-rise reveals and the marquee

---

## 6. MOBILE RESPONSIVE RULES (HARD REQUIREMENTS)

The hero MUST work out of the box on these devices without edits:

| Device | Width | Must-pass check |
|---|---|---|
| iPhone SE 2nd gen | 375px | Hero fits in 667px height, CTA visible without scroll |
| iPhone 12 / 13 / 14 | 390px | Portrait silhouette never crops the face; no overflow |
| iPhone 15 Pro Max | 430px | Nav hamburger tap target ≥ 44×44 |
| Pixel 7 | 412px | Marquee doesn't jitter |
| Galaxy S23 Ultra | 384px | Timeline rows don't horizontal-scroll |
| iPad Mini (portrait) | 744px | Should trigger desktop layout at 1024px, not before |

**Mobile rules:**
- Use `100svh` not `100vh` everywhere a full-screen height is used
- Use `env(safe-area-inset-*)` on all sticky elements
- Font sizes always use `clamp()`
- Tap targets ≥ 44×44
- No `position: fixed` elements except nav hamburger overlay
- Grids collapse: 3-col → 1-col, 2-col → 1-col at `<768px`
- Horizontal scroll gallery becomes native swipe carousel at `<1024px`
- Timeline becomes left-aligned single column at `<768px`
- Custom cursor completely disabled at `<1024px`
- All blobs render at 50% their desktop size on mobile and have `will-change: transform` for GPU

---

## 7. TECH STACK & FILE STRUCTURE

```
/src
  App.jsx                 ← main composition
  index.css               ← tailwind + CSS vars + fonts
  main.jsx
  components/
    Hero.jsx
    Marquee.jsx
    About.jsx
    Journey.jsx
    Vision.jsx
    Gallery.jsx
    Office.jsx
    Footer.jsx
    primitives/
      MeshBlob.jsx        ← Primitive A
      GlassPrism.jsx      ← Primitive B
      Ribbon.jsx          ← Primitive C
    ui/
      CustomCursor.jsx
      MarqueeLoop.jsx
      Reveal.jsx
```

Dependencies to install:
```
npm i framer-motion lenis gsap @gsap/react
```

Use `tailwind.config.js` with the full color token system above. Use `@layer utilities` for custom helpers like `.text-balance { text-wrap: balance }` and `.gradient-mesh { background-image: ... }`.

---

## 8. IMAGE PLACEHOLDERS (the user will swap in)

The AI must render these as `<img>` tags with:
- `alt` descriptive text
- `loading="lazy"` on all but hero
- `decoding="async"`
- A visible placeholder of a 3D gradient blob in the same aspect ratio while the real image is empty — so the layout looks finished even before images are uploaded

| Placeholder path | Where | Aspect |
|---|---|---|
| `/images/governor-hero.png` | Hero amber panel, silhouette | 3:4 portrait |
| `/images/gallery-01.jpg` ... `gallery-07.jpg` | Horizontal gallery | mix of 3:4 and 4:3 |

---

## 9. ANTI-SLOP CHECKLIST (THE AI MUST SELF-REVIEW)

Before marking build complete, verify:

- [ ] No section uses more than ONE display heading
- [ ] No section has centered body copy (left-align or editorial-align only; marquee is the only centered element)
- [ ] No emoji anywhere
- [ ] No lucide-react / heroicon default icons visible to the user — custom SVG only
- [ ] No `rounded-lg` default — only the custom radius scale
- [ ] No shadow-sm / shadow-md defaults — only the custom soft shadow spec
- [ ] Every heading uses Fraunces; every body uses Inter; every micro-label uses JetBrains Mono + uppercase + tracking
- [ ] Every button/link has a defined hover state in code, not just `:hover` inheriting from Tailwind
- [ ] At least 3 distinct animated gradient palettes visible on scroll
- [ ] Reduced-motion path is implemented
- [ ] Lighthouse mobile score ≥ 90 (performance), ≥ 95 (accessibility)
- [ ] Zero horizontal scroll on any viewport from 320px to 1920px

---

## 10. FINAL BUILD INSTRUCTION TO THE AI

Build this as **one self-contained React app** that compiles and runs on `npm run dev` without further edits. Inline all component logic. Include the full copy from Section 1 and Section 4 verbatim. Use the exact color variables from Section 3.3. Use placeholder divs with the exact gradient backgrounds specified so the design is complete even before the user swaps in their photos. Do NOT ask follow-up questions. Do NOT suggest alternative layouts. Build exactly what is specified.

When done, output the complete file tree with every file's full contents, in order:
1. `package.json`
2. `vite.config.js`
3. `tailwind.config.js`
4. `index.html`
5. `src/main.jsx`
6. `src/index.css`
7. `src/App.jsx`
8. Every component file in `/src/components/` and its subfolders

End of PRD.
