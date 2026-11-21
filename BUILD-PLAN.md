# SBLINX — Master Build Plan

> Personal brand + portfolio for a frontend & mobile engineer (React · React Native · TypeScript).
> Part 1 is the creative brief. Part 2 is the implementation spec for Claude Code.
> Contact details, stats and case studies are sourced from the resume. Open items are listed in §I.

---

# PART 1 — CREATIVE BRIEF

## 1. Website overview

| | |
|---|---|
| **Brand** | Sblinx |
| **Site type** | Personal brand + portfolio, single-page scroll story |
| **Primary goal** | Land a job. Every section adds hiring confidence: credibility → proof of shipped work → clarity of role → one obvious next step. |
| **Audience** | Hiring managers, engineering leads and recruiters at fintech, payments and product companies. Remote and international. Many will view on phones and slower connections, often in under 60 seconds. |
| **Primary CTA** | WhatsApp: "Let's talk" → `https://wa.me/2349085257457?text=…` ✅ |
| **Secondary CTAs** | LinkedIn `https://www.linkedin.com/in/aabdulbasit/` ✅, two CVs: `assets/Sblinx-CV-Frontend.pdf` (web resume ✅) and `assets/Sblinx-CV-Mobile.pdf` (React Native CV, converted from .docx ✅), GitHub `github.com/Skiblinx`, email `adeleyeabdulbasitdamilola@gmail.com` (from resume) |

**The 10-second test.** A recruiter landing on the hero must know within one screen: *who* (Sblinx), *what role* (Frontend & Mobile Engineer: React, Next.js, React Native, TypeScript; web + iOS + Android), *what niche* (fintech & payments product interfaces), *where* (Abuja, open to remote & relocation), and *how to act* (Let's talk / CV).

## 2. Core positioning

**What I help people do:**
> I build fast, reliable, polished web and mobile interfaces for fintech and payments teams, on every screen where trust, money and users meet.

**Positioning statement (internal):**
For fintech, payments and product companies that need frontend work users can trust with their money, Sblinx is a frontend & mobile engineer who ships web and native apps from one mind and brings an economist's understanding of money and incentives to an engineer's craft. Unlike engineers who only ship tickets, he ships products: he understands why a payment flow converts, why a dashboard earns trust, and why a millisecond matters.

**Tagline options (hero line):**
1. **"Interfaces people trust with their money."** ← recommended
2. "I turn complex money flows into clean, working software." (echoes the LinkedIn banner)
3. "Where product thinking meets production code."

**Mission:**
> To make financial products feel effortless: interfaces so clear, fast and dependable that people stop worrying about the software and start trusting what it does for them.

## 3. Narrative arc — economist's mindset → engineer's craft → fintech product builder

**Act I: The economist.** He studied how money moves and why people decide what they decide, and graduated with a 3.89/5.0 CGPA. Economics taught him to see systems, incentives and trade-offs before he saw syntax.

**Act II: The engineer.** He kept getting pulled toward the tools that *move* money, not the theory behind them. Four years of React, Next.js, TypeScript and React Native later, he builds the systems instead of just modelling them: a drag-and-drop builder that compiles to real code at Tailordom, an AI-powered HR suite at QuiickOps, then the full digital banking stack (mobile, web and admin) for a Nigerian commercial bank at Tech Services Limited.

**Act III: The fintech product builder.** Today he builds a marketplace admin platform with payments oversight as a contract engineer at OrgByte, and member management, education and payments products as a volunteer frontend engineer at MKAN. He thinks in products, money and users, not just components.

**Closing line:** "I don't just write the code. I understand the money moving through it."

## 4. Brand personality

| Trait | Expressed as | Not |
|---|---|---|
| **Confident** | Short declarative copy, huge type, generous negative space | Arrogant, buzzword-heavy |
| **Precise** | Mono labels, aligned grids, exact numbers, diff-style details | Cold, robotic |
| **Cinematic** | Scroll-scrubbed film, slow reveals, depth, light | Gimmicky, effect-for-effect's-sake |
| **Trustworthy** | Real companies, clear roles, verifiable stats, fast load | Vague claims, inflated metrics |
| **Futuristic edge** | Mint light on deep ink, subtle grain, code-comment motifs | Neon cyberpunk, matrix rain, generic holograms |

**Voice:** first person, calm, specific. "I build…", "I shipped…". Sentences short enough to read while scrolling.

**Feeling:** a late-night trading floor after the market closes. Quiet, dark, premium, with one precise mint light that says *everything is working*.

## 5. Visual direction (extracted from the LinkedIn banner)

Source: `media/Screenshot 2026-10-06 103806.png` (LinkedIn profile banner; the brief's `Media/linkedin-banner.*` path doesn't exist, so this screenshot is the source). Pixel-sampled palette:

| Role | Banner source | Token | Hex |
|---|---|---|---|
| Background (deep ink navy) | Banner base | `--ink-900` | `#0C1826` |
| Background raised | Banner gradient lift | `--ink-800` | `#111C2E` |
| Surface / cards | Banner lighter corners | `--ink-700` | `#172639` |
| **Primary accent (mint)** | "clean, working software" | `--mint` | `#7ED3B0` |
| Primary accent glow | derived | `--mint-glow` | `rgba(126,211,176,.35)` |
| **Secondary accent (diff rose)** | `- what's broken` diff line | `--rose` | `#D9828F` |
| Muted teal-grey | `{ — SOFTWARE ENGINEER` bracket label | `--slate-teal` | `#7D9DA2` |
| Text primary | Headline white | `--paper` | `#EEF3F6` |
| Text secondary | Subline grey | `--fog` | `#9AAAB8` |
| Hairlines | neutral | `--line` | `rgba(238,243,246,.08)` |
| Neutral deep | supporting | `--void` | `#070E17` |

**Visual mood (from banner):** dark gradient navy, faint diagonal constellation lines, mono-type "code comment" annotations (`// status`, `- what's broken`, `+ what works, and scales`), a bracket glyph `{ ]`. These become **signature motifs**:
- **Diff motif:** `-` rose / `+` mint lines used as micro-labels (e.g. `- slow checkouts` / `+ 1-tap payments`).
- **Bracket motif:** `{ —` precedes every section eyebrow, like the banner's `{ — SOFTWARE ENGINEER`.
- **Constellation lines:** faint SVG diagonal lines drifting with parallax in hero and CTA.
- **Comment labels:** `// 01 — mission` style section indices in mono.

Imagery rule: only Sblinx (consistent identity) + abstract light. No stock photos, no laptop-on-desk clichés, no floating holographic dashboards.

## 6. Higgsfield Seedance 2.0 asset generation

**Model:** Higgsfield · Seedance 2.0 · 16:9 master. **As generated:** 720p std, 8 s per clip (the 110-credit balance could not cover 3 × 1080p 10 s at 90 credits each). Regenerate at 1080p / 10 s later if credits allow; the pipeline below is unchanged.
**Identity reference (ALL generations):** `media/portfolio image.png`. Dark-skinned African man, late 20s, short cropped hair, clear/transparent rectangular glasses with lightly tinted lenses, short goatee, warm smile, charcoal blazer over a blue-and-white checked shirt. Keep wardrobe identical in all three scenes for continuity.

**Continuity decision: one continuous take, chained by frames.**
For the best scroll-scrub result, the three scenes play as **one unbroken camera move** cut into three clips:
- Generate Scene 1 from the identity reference.
- Extract Scene 1's **last frame** → use it as the **start frame** of Scene 2 (plus the identity reference).
- Extract Scene 2's last frame → start frame of Scene 3.

Each clip is still scrubbed by its own section (hero, story, final CTA), but because the end and start frames match, the site reads as one continuous film from the first scroll to the last. Each prompt specifies **slow, constant camera motion** with **no hard cuts and no fast action**. Scrubbing exposes jitter and cuts, and slow dolly/push moves scrub cleanly.

**Global prompt suffix (append to every scene):**
> cinematic, anamorphic 2.39 look framed in 16:9, shot on ARRI Alexa, 35mm, shallow depth of field, deep navy (#0C1826) shadows, single mint-green (#7ED3B0) practical light source, subtle rose (#D9828F) rim accent, fine film grain, volumetric haze, slow constant camera motion, no cuts, no readable text, no logos, code shown only as abstract glyphs, photoreal, consistent character from reference image

**Deliverables per scene:** `sceneN.mp4` master (1080p) → processed into WebP image sequences + mobile MP4 + poster (see §Technical).

## 7. The three cinematic scenes (software-engineering focus)

The film follows a feature through its life: **write → architect → ship**. Code appears as abstract mint glyphs, never readable text, because AI video garbles letters and readable fake code looks wrong to engineers.

### Scene 1 — "Render" (Hero)
*Concept: his keystrokes become a real app. Code → UI → a phone in his hand: frontend and mobile in one move.*
**Prompt:**
> Night, a minimal dark studio in Abuja, city lights soft through a window behind. The man from the reference image sits at a clean desk in front of a large ultrawide monitor and a mechanical keyboard; the monitor glows with dense columns of abstract mint-green code glyphs (unreadable, no real letters). He types calmly and focused. As he types, thin lines of mint light lift off the screen and float into the air in front of him, assembling piece by piece into a translucent, floating mobile app interface: rounded cards, a balance figure shape, a list of transaction rows, a primary button, all clean geometric shapes without legible text. The camera starts behind his shoulder looking at the monitor and slowly arcs around to a three-quarter front view as the interface finishes assembling. The finished interface glides down and settles perfectly onto the screen of a real smartphone on the desk, which lights up with it. He picks up the phone and taps it once; the glow reflects in his glasses and he gives a quiet, satisfied half-smile.
**Scrub mapping:** code lines lift as the hero headline assembles; the UI lands on the phone exactly when the role line and CTAs appear (web → mobile in one shot).

### Scene 2 — "The Component Tree" (Story)
*Concept: inside the architecture. Components, data flow, performance: engineering as structure.*
**Prompt:**
> Continuing from the start frame: the camera pushes slowly forward into the glowing phone screen in his hand and passes through it into a vast dark space where the app is revealed as its architecture: a huge luminous tree of nested translucent glass blocks (components) connected by thin glowing branches. Small pulses of mint light (data from APIs) travel up and down the branches. Some branches are tangled and the pulses there move slowly and flicker rose-pink. The man walks calmly along a walkway through this structure, reaches out and touches a tangled node; the branches untangle and re-route into a clean, symmetrical structure, and every pulse turns mint and flows faster and smoother. The camera tracks beside him at walking pace, then rises slowly to reveal the whole perfectly ordered tree glowing in unison, with him small at its base.
**Scrub mapping:** Act I (economist) = the structure seen from outside, systems thinking; Act II (engineer) = walking inside the architecture; Act III (fintech builder) = the refactor touch, everything flows faster (echoes the real "30% faster data loading" result).

### Scene 3 — "Ship It" (Final CTA)
*Concept: the deploy. The work leaves the machine and reaches real users.*
**Prompt:**
> Continuing from the start frame: the glowing component tree compresses into a single bright mint point that drops back into the ultrawide monitor in his night studio. On screen, a column of abstract progress bars fills and a row of small mint check-mark shapes lights up one by one. He presses a single key. The camera slowly pulls back from the screen, past him, and out through the window into the pre-dawn sky above Abuja, Aso Rock silhouetted on the horizon. Below, thousands of tiny phone and laptop screens across the city light up in a smooth rolling wave of mint-green, like a release rolling out to real users. The camera drifts back toward the window where he now stands, relaxed; he turns his head toward the camera and gives a warm, direct, inviting smile.
**Scrub mapping:** checks light up as "Let's build" lands; the rollout wave crosses the city with "what's next."; the direct smile coincides with the WhatsApp CTA reveal.

## 8. Website structure

```
00  Preloader            — counter 000 → 100, mint progress hairline, "SBLINX" wordmark
01  Nav (fixed)          — wordmark · Work · Story · CV ↓ · [Let's talk]
02  Hero                 — Scene 1 scrub (pinned ~250vh)
03  Stats strip          — animated counters
04  Mission              — kinetic statement
05  Three pillars        — horizontal pinned panels (desktop), stacked (mobile)
06  Story                — Scene 2 scrub (pinned ~350vh), 3 acts
07  Selected work        — 4 case studies
08  Featured / toolkit   — stack marquee + "how I work" + principles
09  Final CTA            — Scene 3 scrub (pinned ~220vh)
10  Footer
```

## 9. Section-by-section content

### 02 — Hero
- Eyebrow (mono, bracket motif): `{ — FRONTEND & MOBILE ENGINEER · REACT · REACT NATIVE · FINTECH`
- Headline (huge, split-line reveal): **Interfaces people** / **trust with their** / ***money.*** ("money." in mint)
- Subline: "I'm Sblinx, an economist turned engineer building fast, reliable web and mobile apps with React, Next.js, React Native and TypeScript, shipped to the browser, the App Store and Google Play. Based in Abuja · open to remote & relocation."
- CTAs: **[Let's talk ↗]** (WhatsApp, mint fill) · **[CV ↓]** (ghost split button: `Web` · `Mobile`, linking the two PDFs) · small `in` LinkedIn link
- Corner annotation (banner diff motif):
  ```
  // status
  - what's broken
  + what works, and scales
  ```
- Availability chip: `● Open to full-time roles: remote & relocation` (pulsing mint dot)
- Scroll cue: "Scroll" + thin animated line.

### 03 — Animated stats strip
All figures come from your two CVs.
| Stat | Label | Source |
|---|---|---|
| **4+** | Years shipping production React, Next.js & React Native apps | ✅ Resume |
| **5,000+** | Members using platforms I built and maintain (MKAN) | ✅ Resume |
| **30%** | Faster data loading on a commercial bank's platform | ✅ Resume |
| **25%** | Less build time per feature via a shared component library I built | ✅ Resume |

Secondary line under the strip (mono): `Shipped to App Store & Google Play · B.Sc. Economics · 3.89 / 5.0 CGPA`. The CGPA comes from your brief, not the resume, so it stays out of the headline stats.

Counters tick up from 0 with a slight digit "roll" when the strip enters view; a hairline grows beneath each.

### 04 — Mission
Eyebrow: `// 01 — mission`
Kinetic statement (word-by-word opacity scrub, 0.15 → 1):
> **"Financial products should feel effortless. I build the interfaces that make that true: clear enough to understand, fast enough to forget, reliable enough to trust."**

Below it, a diff pair in mono:
`- a balance nobody can explain`
`+ software people simply trust`

### 05 — Three pillars
Eyebrow: `// 02 — what I bring`

1. **Fintech & Payments Interfaces.** Banking apps, payments oversight, transaction monitoring, payouts, refunds and disputes, built with the care money demands: token handling, session timeouts, secure storage, and no transfer state nobody can explain.
   Tags: `Banking` `Payments oversight` `KYC onboarding` `Client-side security`
2. **Mobile & Web Product Engineering.** One codebase to iOS and Android, shipped through App Store and Google Play releases, next to the web platform and admin console of the same product. Biometric auth, secure token storage, certificate handling and platform-specific behaviour are handled, not hand-waved.
   Tags: `React Native` `iOS & Android` `App Store / Play releases` `Next.js` `TypeScript`
3. **Frontend Architecture & Performance.** I own a frontend codebase end to end: architecture, conventions, shared component libraries, testing and Core Web Vitals. I ship features *and* the foundations that make the next ones faster.
   Tags: `Component libraries` `Code splitting` `Jest / RTL` `Core Web Vitals`

Each panel: big outlined index numeral (`01`), title, body, tags, and a small diff line:
- 01: `- a transfer state nobody can explain` / `+ every state designed`
- 02: `- three apps, three truths` / `+ one product, every surface`
- 03: `- slow loads, slow shipping` / `+ 30% faster, 25% quicker to build`

### 06 — Story (Scene 2 scrub)
Eyebrow: `// 03 — the story`
Three acts overlay the pinned video, crossfading with scroll progress:
- **Act I · The Economist.** "I started by studying how money moves and why people decide. B.Sc. Economics, 3.89/5.0 CGPA. I learned to see systems, incentives and trade-offs before I wrote a line of code."
- **Act II · The Engineer.** "Then I wanted to build the systems, not just model them. Four years of React, Next.js, TypeScript and React Native: a drag-and-drop builder that compiles to real code, an AI-powered HR suite, and a React Native banking app shipped to iOS and Android with its web and core-banking platforms."
- **Act III · The Fintech Product Builder.** "Today I build the payments and operations console for a two-sided marketplace at OrgByte, built the crypto-to-fiat trading frontend for Flashchange, and maintain web and mobile platforms serving 5,000+ members at MKAN. I think in products, money and users, not just code."
- Closing kinetic line: **"I don't just write the code. I understand the money moving through it."**
- Progress rail on the left: `I · II · III` with a mint fill.

### 07 — Selected work / case studies
Eyebrow: `// 04 — selected work`
Heading: **Shipped. In production. With real money on the line.**

Each case study = large card: index, product, company, role, period, problem, what I built (3 bullets), stack, impact, plus a stylised UI visual (CSS/SVG abstract mockup in brand colours; swap for real screenshots later, optional).

1. **Taskdog Admin & Payments Oversight** · OrgByte · Frontend Engineer · Feb 2026 – Present
   *Problem:* A two-sided services marketplace (customer + vendor apps) ran operations through scattered manual processes.
   *Built:* The admin platform the ops team works from; payments oversight (transaction monitoring, vendor payouts, refunds, dispute resolution); booking management, vendor admin and an internal support console.
   *Stack:* React · Next.js · TypeScript · REST
   *Impact:* "One console replacing scattered manual processes for both sides of the marketplace."
2. **Maalify & Majalis 365** · MKAN Nigeria · Frontend Engineer (Volunteer) · 2022 – Present
   *Problem:* A national membership organisation needed self-service, contributions and office operations in one place.
   *Built:* Maalify (web + React Native member self-service: profiles, recurring contribution payments, financial statements); Majalis 365 (finance & collections, member wallets, records across jurisdictions, education modules); role-scoped access with single-session sign-in across modules.
   *Stack:* React · Next.js · React Native · TypeScript
   *Impact:* "5,000+ members in production, on web and mobile."
3. **Digital Banking Platforms** · Tech Services Limited · Frontend Engineer · Feb 2025 – Dec 2025
   *Problem:* A Nigerian commercial bank needed customer, agent and back-office experiences that never disagree about a balance.
   *Built:* The customer React Native app (one codebase, released to App Store and Google Play), the web platform and the core-banking/admin console; auth, session handling and transaction integrations; mobile security (secure token storage, session timeout, biometric auth, certificate handling).
   *Stack:* React · React Native · TypeScript
   *Impact:* "30% faster data loading; shared component library cut feature build time by 25%."
4. **Crypto-to-Fiat Exchange** · Flashchange · Frontend Engineer
   *Problem:* Users swapping crypto for fiat need certainty about where their money is at every second.
   *Built:* Trading and KYC onboarding frontend: multi-currency swaps, live rates, and transaction states that never leave a user unsure whether their money moved; idempotent submissions and honest pending states.
   *Stack:* React · TypeScript
   *Impact:* "No ambiguous transaction states." (dates not on either CV, so the card shows no period)
5. **AI-assisted Website Builder** · Tailordom · Frontend Engineer · Oct 2023 – Jan 2026
   *Problem:* Users wanted to design visually but leave with real, production-ready code.
   *Built:* A custom drag-and-drop editor in vanilla JS that compiles to React, HTML and Tailwind CSS; AI generation of page sections from a prompt; admin dashboard and in-app help-desk.
   *Stack:* Vanilla JavaScript · React · Tailwind CSS
   *Impact:* "One design, exported as working code in whichever stack the user needs."

Compact row beneath the five cards: **Also shipped:** QuiickOps, the frontend of an AI-powered HR suite (leave, recruitment, onboarding, performance analytics dashboard) · Dec 2023 – Nov 2025.

Interaction: cards pin & stack (each next card slides over the previous, scaling it down slightly) on desktop; simple vertical reveal on mobile.

### 08 — Featured: toolkit & how I work
Eyebrow: `// 05 — toolkit`
- **Infinite stack marquee** (two rows, opposite directions, speed reacts to scroll velocity):
  Row 1: React Native · iOS · Android · TypeScript · JavaScript (ES6+) · React · Next.js · Node.js · Tailwind CSS · CSS Modules
  Row 2: Redux Toolkit · Zustand · REST · GraphQL · Axios · Jest · React Testing Library · Core Web Vitals · Git/GitHub · Figma
- **How I work** (4 short principles, mono numbered):
  1. *Understand the money first.* Every flow starts with who pays, who's paid, and what can go wrong.
  2. *Own the codebase, not just the ticket.* Architecture, conventions, tests and performance.
  3. *Honest states.* Idempotent submissions, honest pending states, failures that explain themselves.
  4. *Polish is a feature.* Speed, clarity and motion are how users judge trust.
- **Elsewhere** cards: GitHub (`github.com/Skiblinx`) · LinkedIn · previous portfolio (`blinxz.netlify.app`).

### 09 — Final CTA (Scene 3 scrub)
- Eyebrow: `{ — NEXT RELEASE`
- Huge kinetic headline: **Let's build** / **what's next.**
- Sub: "Hiring for frontend or mobile (React / React Native), especially fintech, payments or product? I reply fast."
- **[Let's talk on WhatsApp ↗]** large magnetic mint button
- Secondary row: `CV: Web ↓` · `CV: Mobile ↓` · `LinkedIn ↗` · `Abuja, Nigeria · GMT+1 · Remote / Relocation`

### 10 — Footer
- Giant outlined wordmark **SBLINX** spanning full width (fills mint on hover/scroll)
- Columns: Navigate (Work, Story, Toolkit) · Connect (WhatsApp, LinkedIn, CV) · Status (`// building fintech interfaces · Abuja`)
- Live local time in Abuja (WAT), "Back to top ↑", © 2026 Sblinx.

## 10. Complete visual style guide

### Color tokens
```css
--void:#070E17; --ink-900:#0C1826; --ink-800:#111C2E; --ink-700:#172639;
--mint:#7ED3B0; --mint-soft:#A8E6CC; --mint-glow:rgba(126,211,176,.35);
--rose:#D9828F; --slate-teal:#7D9DA2;
--paper:#EEF3F6; --fog:#9AAAB8; --line:rgba(238,243,246,.08);
```
- Ratio: 85% ink, 10% paper text, 4% mint, 1% rose. Rose is *only* for "before/broken" diff lines.
- Contrast: paper on ink-900 ≈ 15:1; mint on ink-900 ≈ 10:1; fog on ink-900 ≈ 6.8:1 (all AA+).
- Background treatment: ink-900 with a radial lift (`ink-800`) top-left, plus a fixed SVG noise grain overlay at 5–7% opacity, plus faint constellation lines.

### Spacing & layout
- 12-col grid, max-width 1440px, gutter `clamp(16px, 2vw, 32px)`, side padding `clamp(16px, 5vw, 80px)`.
- Section vertical rhythm `clamp(96px, 16vh, 200px)`.
- Radius: 2px (buttons/chips), 20px (cards). Hairline borders `1px var(--line)`.

### Components
- **Primary button:** mint fill, ink text, 999px pill, arrow icon that slides out/in on hover, magnetic pull, mint glow.
- **Ghost button:** 1px paper/20% border, fills paper on hover with ink text.
- **Chips/tags:** mono 12px uppercase, 1px line border.
- **Cards:** ink-800, line border, inner mint radial glow following the cursor.

## 11. Typography
| Use | Family | Weight | Size |
|---|---|---|---|
| Display | **Clash Display** (Fontshare). Fallback: **Space Grotesk** (Google) | 500–600 | `clamp(3.25rem, 10vw, 11rem)`, line-height .9, tracking -0.04em |
| Headings | Clash Display / Space Grotesk | 500 | `clamp(2rem, 5vw, 4.5rem)` |
| Body | **Inter** (Google) | 400/500 | `clamp(1rem, 1.1vw, 1.2rem)`, lh 1.6 |
| Mono / labels | **JetBrains Mono** (Google), matching the banner's code labels | 400/500 | 12–14px, uppercase, tracking .12em |

> Tech constraint: stylesheets may load from Google Fonts. Use **Space Grotesk** as the display face to keep everything on Google Fonts (Clash Display only if self-hosted in `/assets/fonts`).

Italic accent: the key word of each headline ("money.", "next.") in mint; optional serif italic (**Instrument Serif**) for one word per section for editorial contrast.

## 12. Animation direction
- **Easing:** `expo.out` for reveals, `power3.inOut` for transitions, `none` for scrubs.
- **Durations:** micro 0.25s, reveals 1.0–1.4s, staggers 0.04–0.08s/char-line.
- **Kinetic type:** headlines split into lines → words → chars (custom vanilla splitter). Lines rise from `yPercent:110` under `overflow:hidden` masks; mission text scrubs word opacity; final CTA letters assemble with slight rotation/blur.
- **Scroll-scrubbed film:** canvas image sequences for scenes 1–3, frame index tied to ScrollTrigger progress.
- **Stats:** count-up with digit roll + hairline draw.
- **Section transitions:** clip-path wipes (`inset()` from bottom), background color shifts between ink tones.
- **Preloader:** counter tied to real asset loading of the first ~30 hero frames, then curtain lifts with clip-path and hero type reveals.
- **Ambient:** constellation lines drift slowly, grain flickers (stepped animation), availability dot pulses.

## 13. Interaction design
- Custom cursor (desktop, fine pointer only): small mint dot + trailing ring; grows with label "View" on cards, "Talk" on CTA; hidden on touch.
- Magnetic buttons (CTA, nav CTA).
- Card hover: cursor-following radial glow, image parallax inside card, arrow slide.
- Nav: hides on scroll down, reappears on scroll up; blurred ink background after hero; active section indicator.
- Marquee speeds up/reverses with scroll velocity.
- Footer wordmark fills with mint as you reach the end.
- All interactive elements keyboard-focusable with a visible mint focus ring.

## 14. Scroll behavior
- **Lenis** smooth scroll (`lerp: 0.1`, `smoothWheel: true`), synced to GSAP ticker; ScrollTrigger uses Lenis scroll.
- Pinned sections: Hero (250vh), Pillars horizontal (≈ panels × 100vw), Story (350vh), Work stack (per card), Final CTA (220vh).
- **Hero autoplay → scroll handoff:** after the preloader, the hero film plays on its own at real-time speed up to 60% (code lifting off the screen, UI assembling). The first scroll hands control to ScrollTrigger, and the film continues forward from wherever autoplay reached (film = base + (1 − base) × scroll progress, eased over 0.7s so it never jumps). Story and CTA films stay purely scroll-scrubbed.
- Anchor links scroll via `lenis.scrollTo`.
- Scroll progress hairline at top of viewport (mint).

## 15. Mobile behavior
- **Breakpoint < 768px or `pointer: coarse`:** no image-sequence scrubbing. Each scene uses a **short compressed 9:16-cropped MP4** (`sceneN-mobile.mp4`, ~720p, <2.5 MB, muted, `playsinline`, autoplay when in view via IntersectionObserver, paused out of view) with a poster frame.
- **Save-Data / slow connection** (`navigator.connection.saveData` or `effectiveType` 2g/3g): posters only, no video.
- Pillars: vertical stack, not horizontal pin. Work cards: vertical reveal.
- Lenis disabled on touch (native scroll); GSAP reveals kept but lighter.
- Headline sizes via `clamp`; tap targets ≥ 48px; sticky bottom "Let's talk" pill appears after the hero.
- 16px gutters, no horizontal overflow.

## 16. Technical implementation (summary)
Static: `index.html`, `style.css`, `script.js`, `/assets`. Vanilla JS. GSAP + ScrollTrigger + Lenis via CDN. Details in Part 2.

---

# PART 2 — IMPLEMENTATION INSTRUCTIONS FOR CLAUDE CODE

## A. File structure
```
/index.html
/style.css
/script.js
/assets/
  /video/        scene1.mp4 scene2.mp4 scene3.mp4 (masters, not loaded by site)
                 scene1-mobile.mp4 scene2-mobile.mp4 scene3-mobile.mp4
  /frames/scene1/ 0001.webp … (desktop scrub sequences, ~120 frames each)
  /frames/scene2/ …
  /frames/scene3/ …
  /posters/      scene1.webp scene2.webp scene3.webp (+ -mobile variants)
  /img/          portrait.webp, og-image.jpg (1200×630), favicon.svg
  /work/         taskdog.webp maalify.webp banking.webp tailordom.webp (optional)
  Sblinx-CV-Frontend.pdf  (✅)
  Sblinx-CV-Mobile.pdf    (✅)
/BUILD-PLAN.md
```
All paths relative (`assets/...`).

## B. Asset pipeline
1. **Generate** 3 clips with Higgsfield Seedance 2.0 (1080p, 10s, 16:9) using the prompts in §7, the identity reference `media/portfolio image.png`, and last-frame → start-frame chaining.
2. **Extract last frames** for chaining: `ffmpeg -sseof -0.1 -i scene1.mp4 -frames:v 1 scene1-last.png`.
3. **Desktop frame sequences** (12 fps × 10s = 120 frames, 1600px wide, WebP q≈62):
   `ffmpeg -i scene1.mp4 -vf "fps=12,scale=1600:-2" -c:v libwebp -quality 62 assets/frames/scene1/%04d.webp`
   Target ≈ 40–70 KB/frame → ≈ 5–8 MB per scene, loaded progressively.
4. **Mobile video** (9:16 centre crop, 720p, H.264, no audio, faststart):
   `ffmpeg -i scene1.mp4 -vf "crop=ih*9/16:ih,scale=720:-2" -an -c:v libx264 -crf 28 -preset slow -movflags +faststart assets/video/scene1-mobile.mp4`
5. **Posters**: first frame of each scene → WebP (desktop 1600w, mobile 720w).
6. **OG image** 1200×630: ink background, portrait, "Sblinx: Frontend & Mobile Engineer · Fintech & Payments".
7. **Until videos exist:** site must render beautifully with posters / the portrait plus CSS-gradient "light" placeholders; the frame loader fails gracefully if a sequence is missing.

## C. index.html requirements
- `<!doctype html>`, `lang="en"`, viewport meta, `theme-color #0C1826`.
- `<title>Sblinx: Frontend & Mobile Engineer · React, React Native · Fintech</title>`
- Meta description: "Sblinx is a frontend & mobile engineer (React, Next.js, React Native, TypeScript) building fast, reliable fintech and payments apps for web, iOS and Android. Based in Abuja, open to remote & relocation."
- Open Graph: `og:title`, `og:description`, `og:type=website`, `og:image=assets/img/og-image.jpg` (absolute URL once domain is known), `og:url`; Twitter `summary_large_image`.
- JSON-LD `Person` schema: name Sblinx, jobTitle, address Abuja NG, knowsAbout [...], sameAs [LinkedIn, GitHub].
- Preconnect + Google Fonts (Space Grotesk, Inter, JetBrains Mono, Instrument Serif italic).
- CDN scripts (defer, at end of body):
  - `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
  - `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
  - `https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js`
- Semantic landmarks: `header`, `nav`, `main`, `section[aria-labelledby]`, `footer`. Skip-to-content link.
- Canvas scenes have `aria-hidden="true"`; all copy is real DOM text (SEO + accessibility).
- `<noscript>` fallback: content visible, no pinning.
- CTA href: `https://wa.me/2349085257457?text=Hi%20Sblinx%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20talk%20about%20an%20opportunity.` with `target="_blank" rel="noopener"`. Number stored once in a `data-whatsapp` attribute on `<body>` and applied by JS to every `[data-cta="whatsapp"]`.

## D. style.css requirements
- `:root` tokens from §10; dark-only theme (brand is dark), `color-scheme: dark`, explicit `body` background.
- Fluid type with `clamp()`; `.line-mask{overflow:hidden}` for reveals.
- Grain: fixed `::after` overlay with inline SVG `feTurbulence` data-URI, `pointer-events:none`, stepped `transform` animation.
- Lenis CSS (`html.lenis{height:auto}` etc.).
- `@media (prefers-reduced-motion: reduce)`: disable animations/transitions, no pinning visuals, show posters, all text visible.
- `@media (max-width: 767px)`: stacked layouts, mobile video, sticky CTA pill.
- `@media (hover:hover) and (pointer:fine)`: custom cursor enabled.
- No horizontal overflow (`overflow-x: clip` on body).

## E. script.js architecture
```
const CONFIG = { whatsapp:'2349085257457', linkedin:'https://www.linkedin.com/in/aabdulbasit/', frames:{scene1:120,scene2:120,scene3:120} };
const isMobile = matchMedia('(max-width:767px), (pointer:coarse)').matches;
const reduced  = matchMedia('(prefers-reduced-motion: reduce)').matches;
const saveData = navigator.connection?.saveData || /2g|3g/.test(navigator.connection?.effectiveType||'');

init():
  applyLinks()               // WhatsApp + LinkedIn hrefs
  if (reduced) return staticMode()
  initLenis()                // desktop only; sync lenis.on('scroll', ScrollTrigger.update); gsap.ticker
  splitText()                // vanilla splitter → .line > .word > .char
  preloader()                // waits for first 30 frames of scene1 (or poster on mobile), max 3.5s timeout
  heroScene()                // FrameSequence(canvas, 'assets/frames/scene1/', 120) + pinned ST scrub
  statsCounters()
  missionScrub()
  pillarsHorizontal()        // ScrollTrigger.matchMedia: desktop horizontal, mobile reveal
  storyScene()               // FrameSequence scene2 + act crossfades + progress rail
  workStack()
  marquee()                  // velocity-reactive
  ctaScene()                 // FrameSequence scene3 + kinetic headline
  cursor(); magnetic(); navBehavior(); progressBar(); abujaClock()

class FrameSequence:
  - canvas sized to devicePixelRatio (capped at 2), "cover" draw
  - progressive loading: priority frames (every 8th) first, then fill gaps; draw nearest loaded frame
  - lazy: begins loading when section is within 1.5 viewports (IntersectionObserver)
  - onerror → falls back to poster <img>
  - render via requestAnimationFrame only when frame index changes

Mobile path: <video playsinline muted loop preload="none" poster> per scene; play/pause via IntersectionObserver; saveData → posters only.
```
- Use `ScrollTrigger.matchMedia` (or `gsap.matchMedia`) to separate desktop/mobile timelines.
- Debounced resize → `ScrollTrigger.refresh()`.

## F. Performance budget
- Initial load (HTML+CSS+JS+fonts+poster+first 30 frames) < 1.8 MB desktop, < 600 KB mobile.
- Fonts `display=swap`; preload hero poster.
- Images `loading="lazy" decoding="async"` below the fold; explicit width/height to avoid CLS.
- Lighthouse targets: Performance ≥ 85 mobile, Accessibility ≥ 95, SEO 100.

## G. Accessibility
- WCAG AA contrast, visible focus states, `aria-label`s on icon links, reduced-motion respected, all meaning carried in text (not video), semantic headings (one `h1`).

## H. Build order
1. Scaffold files, tokens, fonts, base layout, all copy (static & complete even without JS).
2. Hero + preloader + nav.
3. Stats, mission, pillars.
4. Story, work, toolkit, CTA, footer.
5. FrameSequence engine + mobile video fallback + posters/placeholder handling.
6. Cursor, magnetic, marquee, polish.
7. Reduced-motion, mobile QA (375px), no-JS check, meta/OG validation.
8. Generate Higgsfield assets → process with ffmpeg → drop into `/assets` → tune scrub mappings.

## I. Pre-publish checklist
- [x] WhatsApp number: +234 908 525 7457
- [x] LinkedIn: linkedin.com/in/aabdulbasit
- [x] CVs: assets/Sblinx-CV-Frontend.pdf + assets/Sblinx-CV-Mobile.pdf
- [x] Stats and case studies: sourced from resume
- [ ] Confirm 3.89/5.0 CGPA shown as a secondary line (not on resume)
- [ ] Real product screenshots (optional)
- [ ] Final domain for absolute OG URLs
- [ ] Higgsfield credits for 3 × 10s 1080p Seedance 2.0 generations
