// Deterministic "hand-drawn" SVG paths, generated at build time (no JS shipped).
// Same input text → same wobble, so pages are stable between builds.

export function rng(seed: string) {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 3432918353), (h = (h << 13) | (h >>> 19));
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

const f = (n: number) => n.toFixed(2);

/** A wobbly rectangle in a 0–100 box (use with preserveAspectRatio="none"). Two passes look sketched. */
export function rectPath(seed: string, inset = 2, j = 1.4) {
  const r = rng(seed);
  const d = () => (r() - 0.5) * j * 2;
  const pass = () => {
    const a = [inset + d(), inset + d()], b = [100 - inset + d(), inset + d()];
    const c = [100 - inset + d(), 100 - inset + d()], e = [inset + d(), 100 - inset + d()];
    const mid = (p: number[], q: number[]) => [(p[0] + q[0]) / 2 + d(), (p[1] + q[1]) / 2 + d()];
    const [m1, m2, m3, m4] = [mid(a, b), mid(b, c), mid(c, e), mid(e, a)];
    return `M${f(a[0])} ${f(a[1])} Q${f(m1[0])} ${f(m1[1])} ${f(b[0] + d())} ${f(b[1])} Q${f(m2[0])} ${f(m2[1])} ${f(c[0])} ${f(c[1] + d())} Q${f(m3[0])} ${f(m3[1])} ${f(e[0] + d())} ${f(e[1])} Q${f(m4[0])} ${f(m4[1])} ${f(a[0] + d())} ${f(a[1] + d() * 1.5)}`;
  };
  return [pass(), pass()];
}

/** A wobbly circle/ellipse; overshoots its start like a pen stroke. */
export function circlePath(seed: string, cx = 50, cy = 50, rx = 46, ry = 46, j = 0.018) {
  const r = rng(seed);
  const pass = (rot: number) => {
    const pts: string[] = [];
    const n = 72;
    for (let i = 0; i <= n + 3; i++) {
      const t = rot + (i / n) * Math.PI * 2;
      const k = 1 + (r() - 0.5) * j * 2;
      pts.push(`${f(cx + Math.cos(t) * rx * k)} ${f(cy + Math.sin(t) * ry * k)}`);
    }
    return `M${pts[0]} ` + pts.slice(1).map((p) => `L${p}`).join(' ');
  };
  return [pass(r() * 6), pass(r() * 6)];
}

/** Wavy underline across a 0–100 × 0–10 box. */
export function squiggle(seed: string) {
  const r = rng(seed);
  let d = `M0 5`;
  for (let x = 0; x < 100; x += 8) d += ` Q${f(x + 4)} ${f(r() > 0.5 ? 1 : 9)} ${f(x + 8)} 5`;
  return d;
}
