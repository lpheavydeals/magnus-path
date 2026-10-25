// Scroll & interaction motion. Progressive enhancement only: every element is fully visible without this file.
// GSAP and Lenis are loaded lazily, after the page is idle, so they never delay the first paint or input.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel as any)) as T[];

// Fade-up reveals
const revealEls = $$('[data-reveal]');
if (reduce || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach((el) => io.observe(el));
}

async function enhance() {
  const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([import('lenis'), import('gsap'), import('gsap/ScrollTrigger')]);
  gsap.registerPlugin(ScrollTrigger);

  // Smooth scrolling
  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  // Hero media panel grows to full width as it scrolls into view
  const panel = document.querySelector('[data-expand] .hero__panel');
  if (panel) {
    gsap.fromTo(panel, { scale: 0.8, borderRadius: 56 }, {
      scale: 1, borderRadius: 32, ease: 'none',
      scrollTrigger: { trigger: '[data-expand]', start: 'top 95%', end: 'top 20%', scrub: true },
    });
  }

  const mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', () => {
    // Services: horizontal scroll driven by vertical scroll
    const sec = document.querySelector<HTMLElement>('[data-hscroll]');
    const track = sec?.querySelector<HTMLElement>('[data-hscroll-track]');
    if (sec && track) {
      const dist = () => Math.max(0, track.scrollWidth - window.innerWidth + track.getBoundingClientRect().left + 40);
      gsap.to(track, {
        x: () => -dist(), ease: 'none',
        scrollTrigger: { trigger: sec, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true },
      });
    }

    // Industries: pinned list, active item + card swap
    const ind = document.querySelector<HTMLElement>('[data-pin-list]');
    if (ind) {
      const items = $$('[data-pin-item]', ind);
      const cards = $$('[data-pin-card]', ind);
      ScrollTrigger.create({
        trigger: ind, start: 'top top', end: '+=' + items.length * 55 + '%', pin: true,
        onUpdate: (self) => {
          const i = Math.min(items.length - 1, Math.floor(self.progress * items.length));
          items.forEach((el, k) => el.classList.toggle('is-active', k === i));
          cards.forEach((el, k) => el.classList.toggle('is-active', k === i));
        },
      });
    }
  });

  // Statement text lights up word by word
  $$('[data-lightup]').forEach((p) => {
    const spans = $$('span', p);
    ScrollTrigger.create({
      trigger: p, start: 'top 80%', end: 'bottom 40%', scrub: true,
      onUpdate: (s) => { const n = Math.round(s.progress * spans.length); spans.forEach((sp, i) => sp.classList.toggle('on', i < n)); },
    });
  });

  // Floating 3D objects (parallax)
  $$('[data-float]').forEach((el) => {
    gsap.to(el, { y: Number(el.dataset.float), ease: 'none', scrollTrigger: { trigger: el.closest('[data-float-scope]') || el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // Custom "+" cursor on mouse devices
  if (window.matchMedia('(pointer: fine)').matches) {
    const c = document.createElement('div');
    c.className = 'cursor'; c.textContent = '+'; c.setAttribute('aria-hidden', 'true');
    document.body.appendChild(c);
    gsap.set(c, { xPercent: -50, yPercent: -50 });
    const xTo = gsap.quickTo(c, 'x', { duration: 0.35, ease: 'power3' });
    const yTo = gsap.quickTo(c, 'y', { duration: 0.35, ease: 'power3' });
    window.addEventListener('pointermove', (e) => { c.classList.add('on'); xTo(e.clientX); yTo(e.clientY); });
    document.documentElement.addEventListener('pointerleave', () => c.classList.remove('on'));
  }

  ScrollTrigger.refresh();
}

if (!reduce) {
  const start = () => { enhance(); };
  if (document.readyState === 'complete') ('requestIdleCallback' in window ? requestIdleCallback(start, { timeout: 2000 }) : setTimeout(start, 200));
  else window.addEventListener('load', () => ('requestIdleCallback' in window ? requestIdleCallback(start, { timeout: 2000 }) : setTimeout(start, 200)), { once: true });
}
