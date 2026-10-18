# Hand-drawn diagrams ("figures") on every page

Goal: help people **read and remember** the page, not add keywords. Each landing page gets **2 figures** placed inside
its guide (`figures` field, see `Figure` in `src/data/types.ts`); each blog post gets 2 in its frontmatter (`figures:`).
The look is hand-drawn (component `src/components/figures/SketchFigure.astro`); all text is real HTML.

## Pick the type that fits the idea
| Type | Use it for | Example |
|---|---|---|
| `mindmap` | The parts of a service or system (what's included, what affects results) | "Shopify store" → Design · Payments · Shipping · SEO |
| `matrix` (2×2) | A decision: who should do what, which option fits which situation | Volume × margin → "Test now / Small test / Wait / Later" |
| `venn` | Two things that work best together, or us + the client | "Paid ads" + "SEO" → "Traffic you own and rent" |
| `steps` | A specific sequence that is **not** the page's 4-step process (e.g. a migration, an audit checklist, a launch week) | Backup → Staging → Update → Test → Live |

Do not repeat the page's "process" section as a steps figure. Vary the types across pages in the same file.

## Writing rules
- Plain, specific words a buyer would use. No keyword stuffing; a keyword may appear naturally in the caption at most once.
- Short: mindmap center ≤24 chars, 4 branches (label ≤14) × 2–3 items (≤30); matrix cols ≤22, rows ≤26, 4 cells
  (title ≤18, body ≤64; order top-left, top-right, bottom-left, bottom-right); venn titles ≤26, bodies ≤64, overlap ≤34;
  steps 3–5 (title ≤18, body ≤44); caption one sentence ≤110.
- Same facts rules as the page: no invented numbers, prices only from the brief, correct spelling for the market
  (US English on /us/, British on /uk/ and /uae/, Australian on /australia/, Indian English elsewhere).
- `after`: index of the guide section the figure follows (0 = first). Put each figure right after the section it explains;
  never two figures after the same section.
- `node --experimental-strip-types scripts/check-pages.mjs <file>` validates figures too.
