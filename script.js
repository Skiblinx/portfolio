/* ==========================================================================
   SBLINX — script.js
   Vanilla JS + GSAP/ScrollTrigger + Lenis (CDN).
   ========================================================================== */
(() => {
  'use strict';

  const body = document.body;
  const root = document.documentElement;

  const CONFIG = {
    whatsapp: body.dataset.whatsapp || '2349085257457',
    linkedin: body.dataset.linkedin || 'https://www.linkedin.com/in/aabdulbasit/',
    message: "Hi Sblinx, I saw your portfolio and I'd like to talk about an opportunity.",
  };

  const mq = (q) => window.matchMedia(q).matches;
  const isMobile = mq('(max-width: 767px)');
  const isTouch = mq('(pointer: coarse)');
  const prefersReduced = mq('(prefers-reduced-motion: reduce)');
  const conn = navigator.connection || {};
  const saveData = !!conn.saveData || /2g/.test(conn.effectiveType || '');
  const hasGSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

  if (saveData) root.classList.add('save-data');

  /* ---------- Links (always) ---------- */
  const waHref = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.message)}`;
  document.querySelectorAll('[data-cta="whatsapp"]').forEach((a) => (a.href = waHref));
  document.querySelectorAll('[data-cta="linkedin"]').forEach((a) => (a.href = CONFIG.linkedin));

  /* ---------- Abuja clock (always) ---------- */
  const clock = document.querySelector('[data-clock]');
  if (clock) {
    const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Lagos' });
    const tick = () => {
      try { clock.textContent = fmt.format(new Date()); } catch (e) {}
    };
    tick();
    setInterval(tick, 30000);
  }

  /* ---------- Poster fallbacks (always) ---------- */
  document.querySelectorAll('.scene__poster').forEach((img) => {
    const miss = () => img.classList.add('is-missing');
    if (img.complete && img.naturalWidth === 0) miss();
    img.addEventListener('error', miss);
  });

  /* ---------- Static mode (reduced motion or GSAP unavailable) ---------- */
  if (prefersReduced || !hasGSAP) {
    root.classList.add('reduced');
    document.querySelectorAll('[data-count]').forEach((el) => {
      const n = +el.dataset.count;
      el.textContent = el.dataset.format === 'comma' ? n.toLocaleString('en-US') : n;
    });
    return;
  }

  /* ======================================================================
     Animated mode
     ====================================================================== */
  root.classList.add('anim');
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Lenis smooth scroll (desktop / fine pointer) ---------- */
  let lenis = null;
  if (!isTouch && typeof window.Lenis !== 'undefined') {
    try {
      lenis = new window.Lenis({ lerp: 0.1, smoothWheel: true });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    } catch (e) {
      lenis = null;
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id.length < 2 || a.dataset.cta) return;
      try {
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        if (lenis) lenis.scrollTo(target, { duration: 1.6 });
        else target.scrollIntoView({ behavior: 'smooth' });
      } catch (err) {}
    });
  });

  /* ---------- Text splitting ---------- */
  document.querySelectorAll('[data-split] .l').forEach((l) => {
    l.innerHTML = `<span class="li">${l.innerHTML}</span>`;
  });

  function splitWords(el) {
    const out = [];
    const walk = (node, parent) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 3) {
          const parts = child.textContent.split(/(\s+)/);
          const frag = document.createDocumentFragment();
          parts.forEach((p) => {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(' ')); return; }
            const s = document.createElement('span');
            s.className = 'w';
            s.textContent = p;
            frag.appendChild(s);
            out.push(s);
          });
          parent.replaceChild(frag, child);
        } else if (child.nodeType === 1) {
          child.classList.add('w');
          out.push(child);
        }
      });
    };
    walk(el, el);
    return out;
  }

  /* ---------- Scene Media Engine (Desktop + Mobile) ---------- */
  class SceneMedia {
    constructor(sceneEl) {
      this.scene = sceneEl;
      this.name = sceneEl.dataset.scene;
      this.poster = sceneEl.querySelector('.scene__poster');
      this.video = sceneEl.querySelector('.scene__video');
      this.targetTime = 0;
      this.ready = false;
      this.readyCallbacks = [];
      this.isSeeking = false;

      // Select device-appropriate poster & video source
      const isDesk = !isMobile;
      const chosenSrc = isDesk
        ? (this.video?.dataset.srcDesktop || this.video?.dataset.src)
        : (this.video?.dataset.srcMobile || this.video?.dataset.src);
      const chosenPoster = isDesk
        ? (this.video?.dataset.posterDesktop || this.poster?.getAttribute('src'))
        : (this.video?.dataset.posterMobile || this.poster?.getAttribute('src'));

      if (this.poster && chosenPoster && this.poster.getAttribute('src') !== chosenPoster) {
        this.poster.src = chosenPoster;
      }

      if (saveData || prefersReduced) {
        this.markReady();
        return;
      }

      if (this.video && chosenSrc) {
        this.video.preload = isDesk ? 'auto' : 'metadata';
        this.video.src = chosenSrc;

        const onVideoReady = () => {
          this.scene.classList.add('has-video');
          this.markReady();
        };

        if (this.video.readyState >= 2) {
          onVideoReady();
        } else {
          this.video.addEventListener('loadeddata', onVideoReady, { once: true });
          this.video.addEventListener('canplay', onVideoReady, { once: true });
        }
        this.video.addEventListener('error', () => this.markReady(), { once: true });

        // Non-recursive seek synchronization
        this.video.addEventListener('seeked', () => {
          this.isSeeking = false;
          if (
            isFinite(this.targetTime) &&
            Math.abs(this.video.currentTime - this.targetTime) > 0.15
          ) {
            this.isSeeking = true;
            try { this.video.currentTime = this.targetTime; } catch (e) { this.isSeeking = false; }
          }
        });

        try { this.video.load(); } catch (e) {}
      } else {
        this.markReady();
      }
    }

    markReady() {
      if (this.ready) return;
      this.ready = true;
      this.readyCallbacks.forEach((cb) => {
        try { cb(); } catch (e) {}
      });
    }

    onReady(cb) {
      if (this.ready) cb();
      else this.readyCallbacks.push(cb);
    }

    play() {
      if (!this.video || saveData || prefersReduced) return Promise.resolve();
      try {
        const p = this.video.play();
        return p && p.catch ? p.catch(() => {}) : Promise.resolve();
      } catch (e) {
        return Promise.resolve();
      }
    }

    pause() {
      if (this.video && !this.video.paused) {
        try { this.video.pause(); } catch (e) {}
      }
    }

    setProgress(p) {
      if (!this.video || saveData || prefersReduced) return;
      const dur = this.video.duration;
      if (!dur || !isFinite(dur) || isNaN(p)) return;

      const clampedP = Math.min(Math.max(0, p), 0.999);
      const target = clampedP * dur;
      if (!isFinite(target) || isNaN(target)) return;

      this.targetTime = target;
      if (!this.isSeeking && !this.video.seeking && Math.abs(this.video.currentTime - target) > 0.05) {
        this.isSeeking = true;
        try {
          this.video.currentTime = target;
        } catch (e) {
          this.isSeeking = false;
        }
      }
    }
  }

  const scenes = {};
  document.querySelectorAll('.scene').forEach((sceneEl) => {
    const key = sceneEl.dataset.scene;
    if (key) scenes[key] = new SceneMedia(sceneEl);
  });

  // Mobile: play scenes smoothly when scrolled into view
  if (isMobile && !saveData && !prefersReduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(({ target: sceneEl, isIntersecting }) => {
        const media = scenes[sceneEl.dataset.scene];
        if (!media) return;
        if (isIntersecting) {
          media.play();
        } else {
          media.pause();
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.scene').forEach((s) => io.observe(s));
  }

  /* ---------- Preloader ---------- */
  function preloader() {
    return new Promise((resolve) => {
      const loader = document.querySelector('.loader');
      const countEl = document.querySelector('[data-loader-count]');
      const bar = document.querySelector('.loader__bar span');
      const state = { v: 0 };
      let finished = false;

      const updateUI = () => {
        if (countEl) countEl.textContent = String(Math.round(state.v)).padStart(3, '0');
        if (bar) bar.style.transform = `scaleX(${state.v / 100})`;
      };

      if (loader) gsap.set(loader, { clipPath: 'inset(0 0 0% 0)' });
      if (lenis) lenis.stop();

      // Phase 1: progress smoothly toward 90%
      const initialTween = gsap.to(state, {
        v: 90,
        duration: 1.2,
        ease: 'power1.out',
        onUpdate: updateUI,
      });

      // Phase 2: complete to 100% and lift curtain
      const finishLoader = () => {
        if (finished) return;
        finished = true;
        initialTween.kill();
        gsap.to(state, {
          v: 100,
          duration: 0.4,
          ease: 'power2.out',
          onUpdate: updateUI,
          onComplete: () => {
            if (loader) {
              gsap.to(loader, {
                clipPath: 'inset(0 0 100% 0)',
                duration: 0.9,
                ease: 'expo.inOut',
                onComplete: () => {
                  try { loader.remove(); } catch (e) { loader.style.display = 'none'; }
                  if (lenis) lenis.start();
                  resolve();
                },
              });
            } else {
              if (lenis) lenis.start();
              resolve();
            }
            setTimeout(resolve, 350);
          },
        });
      };

      const heroMedia = scenes.scene1;
      if (heroMedia) heroMedia.onReady(finishLoader);
      else {
        const poster = document.querySelector('.hero .scene__poster');
        if (!poster || poster.complete) finishLoader();
        else { poster.addEventListener('load', finishLoader); poster.addEventListener('error', finishLoader); }
      }
      setTimeout(finishLoader, 1200);
    });
  }

  /* ---------- Hero ---------- */
  function heroIntro() {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.from('.hero__title .li', { yPercent: 110, duration: 1.4, stagger: 0.09 })
      .to('.hero [data-reveal]', { opacity: 1, y: 0, duration: 1.1, stagger: 0.08 }, '-=1.0')
      .to(['.hero__diff', '.scroll-cue'], { opacity: 1, duration: 1, stagger: 0.1 }, '-=0.8')
      .from('.constellation path', { strokeDasharray: 2000, strokeDashoffset: 2000, duration: 2.4, ease: 'power2.inOut' }, 0);
  }

  /*
   * Hero film: plays after preloader (up to HERO_AUTO_END, real-time speed),
   * then scroll takes over smoothly and carries it forward.
   */
  const HERO_AUTO_END = 0.6;
  const heroFilm = { p: 0, base: 0, handedOff: false, toP: null, st: null };

  function heroAutoplay() {
    const heroMedia = scenes.scene1;
    if (!heroMedia || isMobile || heroFilm.handedOff || (heroFilm.st && heroFilm.st.progress > 0.002)) return;

    heroMedia.play();
    const track = () => {
      if (heroFilm.handedOff) return;
      if (heroMedia.video && heroMedia.video.duration && isFinite(heroMedia.video.duration) && heroMedia.video.duration > 0) {
        const p = heroMedia.video.currentTime / heroMedia.video.duration;
        if (!isNaN(p) && isFinite(p)) {
          heroFilm.p = p;
          if (p >= HERO_AUTO_END) {
            heroMedia.pause();
            return;
          }
        }
      }
      requestAnimationFrame(track);
    };
    requestAnimationFrame(track);
  }

  function heroHandoff() {
    if (heroFilm.handedOff) return;
    heroFilm.handedOff = true;
    const heroMedia = scenes.scene1;
    if (heroMedia) {
      heroMedia.pause();
      if (heroMedia.video && heroMedia.video.duration && isFinite(heroMedia.video.duration) && heroMedia.video.duration > 0) {
        const base = heroMedia.video.currentTime / heroMedia.video.duration;
        if (!isNaN(base) && isFinite(base)) {
          heroFilm.base = base;
        }
      }
    }
  }

  function heroScroll() {
    const heroMedia = scenes.scene1;
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      heroFilm.toP = gsap.quickTo(heroFilm, 'p', {
        duration: 0.7,
        ease: 'power3.out',
        onUpdate: () => {
          if (heroMedia && typeof heroFilm.p === 'number' && isFinite(heroFilm.p)) {
            heroMedia.setProgress(heroFilm.p);
          }
        },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero',
          pin: '.hero .pin',
          start: 'top top',
          end: '+=160%',
          scrub: true,
          onUpdate: (self) => {
            if (!heroMedia) return;
            if (!heroFilm.handedOff) {
              if (self.progress < 0.002) return;
              heroHandoff();
            }
            if (heroFilm.toP) {
              heroFilm.toP(heroFilm.base + (1 - heroFilm.base) * self.progress);
            }
          },
        },
      });
      heroFilm.st = tl.scrollTrigger;
      if (tl.scrollTrigger && tl.scrollTrigger.progress > 0.002) heroHandoff();
      tl.to('.constellation', { yPercent: -12, ease: 'none', duration: 1 }, 0)
        .to('.scroll-cue', { opacity: 0, duration: 0.1 }, 0)
        .to('.hero__content', { yPercent: -10, opacity: 0, ease: 'power1.in', duration: 0.3 }, 0.7)
        .to('.hero__diff', { opacity: 0, duration: 0.2 }, 0.7);
    });
  }

  /* ---------- Generic reveals ---------- */
  function reveals() {
    const revealEls = gsap.utils.toArray('[data-reveal]').filter((el) => !el.closest('.hero'));
    if (revealEls.length) {
      ScrollTrigger.batch(revealEls, {
        start: 'top 88%',
        once: true,
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.08 }),
      });
    }

    const splitEls = gsap.utils.toArray('[data-split]').filter(
      (el) => !el.classList.contains('hero__title') && !el.classList.contains('cta__title')
    );
    splitEls.forEach((el) => {
      const items = el.querySelectorAll('.li');
      if (items.length) {
        gsap.from(items, {
          yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: 0.08,
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        });
      }
    });
  }

  /* ---------- Stats ---------- */
  function stats() {
    const section = document.querySelector('.stats');
    if (!section) return;
    ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        document.querySelectorAll('[data-count]').forEach((el, i) => {
          const end = +el.dataset.count;
          const o = { v: 0 };
          gsap.to(o, {
            v: end, duration: 2.2, delay: i * 0.12, ease: 'expo.out',
            onUpdate: () => {
              const n = Math.round(o.v);
              el.textContent = el.dataset.format === 'comma' ? n.toLocaleString('en-US') : n;
            },
          });
          gsap.from(el, { yPercent: 40, opacity: 0, duration: 1, delay: i * 0.12, ease: 'expo.out' });
        });
        gsap.from('.stat__line', { scaleX: 0, duration: 1.6, ease: 'expo.out', stagger: 0.12 });
        gsap.from('.stat__label', { opacity: 0, y: 12, duration: 1, ease: 'expo.out', stagger: 0.12, delay: 0.2 });
      },
    });
  }

  /* ---------- Mission ---------- */
  function mission() {
    const el = document.querySelector('[data-words]');
    if (!el) return;
    const words = splitWords(el);
    if (!words.length) return;
    gsap.fromTo(words, { opacity: 0.14 }, {
      opacity: 1, ease: 'none', stagger: 0.05,
      scrollTrigger: { trigger: el, start: 'top 78%', end: 'bottom 50%', scrub: true },
    });
  }

  /* ---------- Pillars (horizontal on desktop) ---------- */
  function pillars() {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      const track = document.querySelector('.pillars__track');
      if (!track) return;
      const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
      if (dist() < 40) return;
      gsap.to(track, {
        x: () => -dist(),
        ease: 'none',
        scrollTrigger: {
          trigger: '.pillars',
          pin: '.pillars__pin',
          start: 'top top',
          end: () => '+=' + dist(),
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });
    const pillarsTrack = document.querySelector('.pillars__track');
    if (pillarsTrack) {
      gsap.from('.pillar', {
        opacity: 0, y: 60, duration: 1.2, ease: 'expo.out', stagger: 0.1,
        scrollTrigger: { trigger: pillarsTrack, start: 'top 85%', once: true },
      });
    }
  }

  /* ---------- Story ---------- */
  function story() {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      const seq = scenes.scene2;
      const acts = gsap.utils.toArray('.act');
      const railItems = gsap.utils.toArray('.story__rail li');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.story',
          pin: '.story .pin',
          start: 'top top',
          end: '+=320%',
          scrub: true,
          onUpdate: (self) => {
            if (seq) seq.setProgress(self.progress);
            const idx = Math.min(2, Math.floor(self.progress * 3.6));
            railItems.forEach((li, i) => li.classList.toggle('on', i <= idx));
          },
        },
      });
      tl.to('.story__fill', { scaleX: 1, ease: 'none', duration: acts.length }, 0);
      acts.forEach((act, i) => {
        tl.fromTo(act, { opacity: 0, y: 40, filter: 'blur(8px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.3, ease: 'power2.out' }, i);
        if (i < acts.length - 1) tl.to(act, { opacity: 0, y: -40, filter: 'blur(8px)', duration: 0.3, ease: 'power2.in' }, i + 0.7);
      });
    });
    mm.add('(max-width: 767px)', () => {
      gsap.utils.toArray('.act').forEach((act) => {
        gsap.fromTo(act, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: act, start: 'top 85%', once: true } });
      });
    });
  }

  /* ---------- Work: stacked cards ---------- */
  function work() {
    const mm = gsap.matchMedia();
    const cards = gsap.utils.toArray('.case');
    mm.add('(min-width: 1025px) and (min-height: 720px)', () => {
      cards.forEach((card, i) => {
        card.style.position = 'sticky';
        card.style.top = `${90 + i * 14}px`;
        const next = cards[i + 1];
        if (!next) return;
        gsap.to(card, {
          scale: 0.94, filter: 'brightness(0.55)', ease: 'none',
          scrollTrigger: { trigger: next, start: 'top bottom', end: `top ${90 + (i + 1) * 14}px`, scrub: true },
        });
      });
      return () => cards.forEach((c) => { c.style.position = ''; c.style.top = ''; });
    });
    cards.forEach((card) => {
      const visual = card.querySelector('.case__visual');
      if (visual) {
        gsap.from(visual, {
          opacity: 0, y: 60, duration: 1.3, ease: 'expo.out',
          scrollTrigger: { trigger: card, start: 'top 80%', once: true },
        });
      }
      const details = card.querySelectorAll('.case__meta, .case__title, .case__problem, .case__list li, .case .tags, .case__impact');
      if (details.length) {
        gsap.from(details, {
          opacity: 0, y: 24, duration: 1, ease: 'expo.out', stagger: 0.05,
          scrollTrigger: { trigger: card, start: 'top 80%', once: true },
        });
      }
    });

    // Live-rate flicker on the Flashchange mock
    const rate = document.querySelector('[data-rate]');
    if (rate) {
      let base = 412800;
      setInterval(() => {
        base += Math.round((Math.random() - 0.5) * 900);
        rate.textContent = '₦ ' + base.toLocaleString('en-US');
      }, 2200);
    }
  }

  /* ---------- Marquee (scroll-velocity reactive) ---------- */
  function marquee() {
    const rows = gsap.utils.toArray('.marquee__row');
    let boost = 0;
    let dirSign = 1;
    const marqueeSection = document.querySelector('.marquee');
    if (marqueeSection) {
      ScrollTrigger.create({
        trigger: marqueeSection,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          boost = Math.min(Math.abs(self.getVelocity()) / 120, 14);
          dirSign = self.direction;
        },
      });
    }
    rows.forEach((row) => {
      const inner = row.querySelector('.marquee__inner');
      if (!inner) return;
      row.appendChild(inner.cloneNode(true)).setAttribute('aria-hidden', 'true');
      const dir = +row.dataset.dir || 1;
      let x = dir > 0 ? 0 : -inner.offsetWidth;
      gsap.ticker.add((t, dt) => {
        const w = inner.offsetWidth;
        if (!w) return;
        const speed = (0.6 + boost) * dir * dirSign;
        x -= speed * (dt / 16.67);
        if (x <= -w) x += w;
        if (x > 0) x -= w;
        row.style.transform = `translate3d(${x}px,0,0)`;
      });
    });
    gsap.ticker.add(() => (boost *= 0.92));
  }

  /* ---------- Final CTA ---------- */
  function cta() {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      const seq = scenes.scene3;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.cta',
          pin: '.cta .pin',
          start: 'top top',
          end: '+=130%',
          scrub: true,
          onUpdate: (self) => { if (seq) seq.setProgress(self.progress); },
        },
      });
      tl.from('.cta .eyebrow', { opacity: 0, y: 20, duration: 0.1 }, 0.05)
        .from('.cta__title .li', { yPercent: 110, rotate: 3, duration: 0.25, stagger: 0.08, ease: 'power3.out' }, 0.1)
        .from(['.cta__sub', '.cta .btn--xl', '.cta__row'], { opacity: 0, y: 30, duration: 0.15, stagger: 0.06 }, 0.4)
        .to({}, { duration: 0.3 });
    });
    mm.add('(max-width: 767px)', () => {
      gsap.from('.cta__title .li', { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: '.cta', start: 'top 70%', once: true } });
      gsap.from(['.cta__sub', '.cta .btn--xl', '.cta__row'], { opacity: 0, y: 24, duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: '.cta', start: 'top 60%', once: true } });
    });
  }

  /* ---------- Footer ---------- */
  function footer() {
    const word = document.querySelector('[data-fill]');
    const footerEl = document.querySelector('.footer');
    if (!word || !footerEl) return;
    gsap.fromTo(word, { '--fill': '0%' }, {
      '--fill': '100%', ease: 'none',
      scrollTrigger: { trigger: footerEl, start: 'top 80%', end: 'bottom bottom', scrub: true },
    });
    gsap.from(word, { yPercent: 30, ease: 'none', scrollTrigger: { trigger: footerEl, start: 'top bottom', end: 'bottom bottom', scrub: true } });
  }

  /* ---------- Chrome: nav, progress, sticky CTA ---------- */
  function chrome() {
    const nav = document.querySelector('[data-nav]');
    const bar = document.querySelector('.progress span');
    const sticky = document.querySelector('.sticky-cta');
    let lastY = 0;
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const y = self.scroll();
        if (bar) bar.style.transform = `scaleX(${self.progress})`;
        if (nav) {
          nav.classList.toggle('is-solid', y > 60);
          nav.classList.toggle('is-hidden', y > lastY && y > 400);
        }
        lastY = y;
      },
    });
    if (sticky) {
      ScrollTrigger.create({
        trigger: '.stats', start: 'top 80%', endTrigger: '.cta', end: 'top 60%',
        onToggle: (self) => sticky.classList.toggle('is-on', self.isActive),
      });
    }
    const links = document.querySelectorAll('.nav__links a[href^="#"]');
    links.forEach((a) => {
      const href = a.getAttribute('href');
      if (!href || href.length < 2) return;
      try {
        const sec = document.querySelector(href);
        if (!sec) return;
        ScrollTrigger.create({
          trigger: sec, start: 'top 50%', end: 'bottom 50%',
          onToggle: (self) => a.classList.toggle('is-active', self.isActive),
        });
      } catch (e) {}
    });
  }

  /* ---------- Pointer: cursor, magnetic, glow ---------- */
  function pointer() {
    if (isTouch || !mq('(hover: hover) and (pointer: fine)')) return;
    body.classList.add('has-cursor');
    const cur = document.querySelector('.cursor');
    if (!cur) return;
    const dot = cur.querySelector('.cursor__dot');
    const ring = cur.querySelector('.cursor__ring');
    const label = cur.querySelector('.cursor__label');
    if (!dot || !ring) return;

    const pos = { x: innerWidth / 2, y: innerHeight / 2 };
    const ringPos = { ...pos };
    window.addEventListener('mousemove', (e) => {
      pos.x = e.clientX; pos.y = e.clientY;
      dot.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
    });
    gsap.ticker.add(() => {
      ringPos.x += (pos.x - ringPos.x) * 0.18;
      ringPos.y += (pos.y - ringPos.y) * 0.18;
      ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`;
    });
    document.addEventListener('mouseover', (e) => {
      const labelled = e.target.closest('[data-cursor]');
      const link = e.target.closest('a, button');
      cur.classList.toggle('is-label', !!labelled);
      cur.classList.toggle('is-hover', !labelled && !!link);
      if (label) label.textContent = labelled ? labelled.dataset.cursor : '';
    });
    document.addEventListener('mouseleave', () => cur.classList.remove('is-label', 'is-hover'));

    document.querySelectorAll('[data-magnetic]').forEach((el) => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.3);
        yTo((e.clientY - r.top - r.height / 2) * 0.4);
      });
      el.addEventListener('mouseleave', () => { xTo(0); yTo(0); });
    });

    document.querySelectorAll('[data-glow]').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });
  }

  /* ---------- Boot ---------- */
  heroScroll();
  reveals();
  stats();
  mission();
  pillars();
  story();
  work();
  marquee();
  cta();
  footer();
  chrome();
  pointer();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
  });
  window.addEventListener('load', () => ScrollTrigger.refresh());

  preloader().then(() => {
    heroIntro();
    heroAutoplay();
  });
})();
