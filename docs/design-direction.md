# Design Direction

Based on two reference videos shared by the client (15 Oct 2026). The site's **primary goals are
ranking (Google and AI search) and generating leads**, so every visual choice below is checked
against speed, readability and conversion.

## 1. What we take from each reference

| | Reference A — "CyFocus" (dark + red) | Reference B — "GOAT" (light + orange 3D) |
|---|---|---|
| Mood | Bold, premium, technical, confident | Friendly, airy, modern, optimistic |
| Colours | Signal red `#D22503`, charcoal `#232728` | Off-white `#F2F2F2`, soft orange glow `#F8985B` |
| Type | Large light-weight sans; tiny uppercase labels | Heavy condensed uppercase display headings |
| Signature elements | Wireframe mesh graphics, red-tinted portraits, red statement sections | Glossy 3D orange objects, blurred gradient glows, glass stat cards |
| Sections worth copying | Logo strip · big statement text that reveals on scroll · "Key Challenges We Solve" cards (one card turns red on hover) · service rows with "Learn more" · testimonial on red | Hero with huge headline · stats row (92% · 15+ · $8M+) · "How it works" numbered steps beside product mockups · minimal footer with subscribe |

## 2. Recommended direction: "Light base, dark drama"

The long service and blog pages use a **light base (B)**, because that's what ranks: 1,200–2,000
words of readable content. **Dark/red sections (A)** handle the high-impact moments: the hero, proof
and stats, testimonials, and the final call to action. Orange-red ties the two together.

### Colour tokens

| Token | Value | Use |
|---|---|---|
| `--accent` | `#E8410F` (signal orange-red, between A's red and B's orange) | Buttons, highlights, active card, links |
| `--accent-soft` | `#F8985B` | Gradient glows, illustrations |
| `--ink` | `#16181B` | Dark sections, headings on light |
| `--charcoal` | `#232728` | Cards on dark sections |
| `--paper` | `#F4F2EF` | Page background (warm off-white) |
| `--muted` | `#5C6166` | Body text secondary (passes WCAG AA on paper) |
| `--white` | `#FFFFFF` | Cards on light sections |

Contrast rule: all body text must reach **4.5:1** or better. Reference A's grey "reveal" text is
too faint as it stands, so the final revealed state must pass.

### Typography

- **Font (client decision, 16 Oct 2026): Plus Jakarta Sans for everything.** Earlier option: a condensed bold face such as *Oswald* or *Anton* (from B), uppercase for
  H1/H2. Long keyword H1s ("Shopify Development Company in India") still read well condensed.
- **Body and UI:** a clean geometric sans such as *Inter* or *Manrope* (A's feel), at 17–18px body
  size and 1.6 line height.
- Fonts are **self-hosted and subset**, using `font-display: swap`, with 2 families and 4 weights
  at most.

### Imagery and graphics

| Reference element | Our version | Why |
|---|---|---|
| Glossy 3D orange objects (B) | Pre-rendered **3D e-commerce objects** (shopping bag, parcel box, cart, growth arrow) in orange, exported as AVIF/WebP | Same look without WebGL; keeps the hero LCP under 2s |
| Wireframe mesh (A) | **SVG line meshes** in accent colour, used as section backgrounds | Tiny file size, scales, easy to animate with CSS |
| Red-tinted portraits (A) | **Real team photos** with an orange duotone treatment | Real faces build trust (E-E-A-T), unlike stock models |
| Phone mockups (B) | **Dashboard and store mockups**: ROAS charts, Amazon Ads console, Shopify store screens | Shows what clients actually get |
| Blurred orange glows (B) | CSS radial gradients | No image weight at all |

## 3. Homepage section flow

| # | Section | Style source | Goal |
|---|---|---|---|
| 1 | **Hero:** H1 "E-commerce Marketing Agency in Chennai" + one-line promise + [Get Free Store Audit] + [WhatsApp] + 3D object | B layout, A button style | Rank and capture leads |
| 2 | **Platform/partner logo strip:** Shopify · Amazon · Flipkart · Google · Meta · Blinkit | A | Trust |
| 3 | **Statement text reveal:** "We help Indian brands build stores that sell, ads that pay back, and rankings that compound." | A | Positioning |
| 4 | **Stats row (glass cards):** clients served · avg ROAS · revenue generated · years | B | Proof |
| 5 | **Key Challenges We Solve:** Low sales · High ACoS · No Google traffic → "See how we solve this" | A (active card turns orange) | Pain-point match |
| 6 | **What we offer:** Websites · Ads · SEO rows with sub-service links | A | Internal links to pillar pages |
| 7 | **How it works:** 01 Audit · 02 Plan · 03 Build & launch · 04 Grow & report, beside dashboard mockups | B | Reduce friction |
| 8 | **Case studies:** 2–3 cards with big numbers | A dark section | Proof |
| 9 | **Industries:** Fashion · Beauty & Ayurveda · Food · Manufacturers & Exporters | B cards | Relevance |
| 10 | **Testimonial on orange** | A | Trust |
| 11 | **FAQ:** 6–8 questions with FAQ schema | Light | SEO + AI answers |
| 12 | **Final CTA:** short audit form + WhatsApp | Dark | Lead capture |
| 13 | **Footer:** NAP, links to all pillars and locations, newsletter | B | Local SEO + crawl paths |

## 4. Guardrails: where the references conflict with SEO and leads

1. **The references are almost text-free.** They are design shots. Ranking pages need real content, so
   service pages will carry 1,200–2,000 words, styled into scannable blocks, tables and FAQs.
2. **No text inside images, canvas or video.** All headings and copy must be real HTML, so Google and
   AI crawlers can read them.
3. **Animations are CSS-only and light.** Scroll-reveal must not hide text from crawlers, it must
   respect `prefers-reduced-motion`, and there are no heavy animation or 3D libraries.
4. **The hero loads text first.** The H1 and CTA render without waiting for the image. Hero image
   ≤ 120 KB, with `fetchpriority="high"` set.
5. **Bigger navigation text.** The references use tiny nav labels. Ours will be 15–16px, with a
   visible "Get Free Audit" button.
6. **Lead features the references don't show:** a sticky mobile WhatsApp + Audit bar, a phone
   number in the header, "Starting from ₹" on service pages, and a trust badge row near every CTA.
7. **Performance budget:** LCP < 2.0s on 4G mobile, total page weight < 1 MB, Lighthouse SEO/Performance ≥ 95.

## 5. Open choices for the client

- Approve the "Light base, dark drama" direction (or go fully dark like A, or fully light like B)
- Final accent colour: red-leaning `#D22503` (A) vs orange-leaning `#F26A21` (B) vs the blended `#E8410F`
- Display font: Oswald (friendlier) vs Anton (punchier)
