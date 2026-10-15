# Reference Teardown — Roveia Health (growth marketing for health brands)

Source: a 72-second screen recording shared by the client (15 Oct 2026). The live site could not be
reached from the build environment. Timestamps refer to that recording.

## 1. Design system

| Element | What they use |
|---|---|
| Background | White and very light blue-white; soft blue radial gradients in the hero and final CTA |
| Accent | A single bright blue, used for highlighted words, active states, pills and "+" marks |
| Type | One clean grotesk sans, **light weight (~300) at very large sizes**; key words in the accent colour ("Where **Health Brands** Come to Scale…") |
| Shapes | Large rounded cards (~24px radius), full-bleed rounded media panels, pill buttons |
| Imagery | Real photos and **video** of client products and founders; **blue claymorphic 3D icons** for services |
| Decoration | Small blue "+" crosses scattered across sections; a custom "+" cursor |
| Nav | Floating white pill navbar, centred, with a black "Get Started →" pill button |

## 2. Homepage, section by section

| # | Time | Section | Layout | Animation |
|---|---|---|---|---|
| 1 | 0:00–0:04 | **Hero:** "Where Health Brands Come to Scale Faster and Smarter" | Centred headline on a blue gradient | Headline reveals **word by word with blur-to-sharp + fade**; nav slides in after; a **video card rises from below and expands to full width as you scroll**, with the headline sitting on top of it |
| 2 | 0:05–0:10 | **Who We Work With** | Left: huge numbered list (01 Telehealth · 02 Health CPG · 03 Health Tech). Right: dark card with a 3D icon, description and client logos | **Pinned while scrolling.** The active item turns blue, an "Open ↗" pill follows the cursor, and the right card swaps content with a slide and fade |
| 3 | 0:11–0:20 | **Trusted by 100+ companies** | Full-bleed rounded dark panel. Left: vertical list of client names. Right: logo, category tags and a one-line description | **Pinned "slot-machine" list.** Names scroll up, the active one is white and the rest dimmed; the **background photo cross-fades** per client |
| 4 | 0:21–0:26 | **Case studies** | Full-width rounded image cards with name, summary and a blue "Read full case study" pill | **Stacking cards:** each card slides up over the previous one, which scales down slightly |
| 5 | 0:26–0:31 | **What We Do** | Row of service cards (Paid Acquisition, Creative Production, Email & SMS, Landing Pages & CRO, Influencer), each with a 3D icon, tag chips and a one-line promise | **Horizontal scroll driven by vertical scroll**; the active card is tinted light blue |
| 6 | 0:32–0:35 | **3 Step Growth Process** | Dark rounded panel. Left: sticky title. Right: Step 1/2/3 | Steps reveal one by one; **floating 3D objects (pills, DNA) drift with parallax** |
| 7 | 0:36–0:42 | **Hear from founders we've scaled** | Centred heading | **Testimonial cards (quote + founder video still) float across the screen** in a slow horizontal stream, passing over the heading with a slight tilt |
| 8 | 0:43 | **FAQ** | Two columns: heading on the left, questions with round arrow buttons on the right | Accordion |
| 9 | 0:44–0:47 | **Final CTA + footer** | "Where the next decade of health gets built" plus a Get Started button; the footer sits on the same background | **Animated flowing blue wave gradient** (shader or animated SVG) |

## 3. Inner page (category page, 0:48–1:10)

1. Hero on a soft gradient with a "Book a Discovery Call" pill
2. Row of **video testimonial thumbnails** with play buttons, and **partner badges** (Meta, Google, Omnisend, Klaviyo, Shopify)
3. Proof line ("150+ brands, $14M+ revenue generated") and a **client logo grid**
4. "We Understand Health CPG" with 3 cards, each with a **UI mock-up** (revenue counter, subscription stack, market size)
5. **Inline case study**: founder video, brand, challenge, what we did, results as stat chips (186%+, 137%, 6×, $100K→$2M ARR)
6. Dark "CPG Engine" panel with horizontal capability cards
7. "Same Engine, Different Categories": product-photo cards, each with a mini case study and result chips
8. **"We Don't Work With Every Health CPG Brand" / "We Work Best With:"**, a qualification list that filters out bad leads

## 4. Animation inventory, and how we would build each

| Animation | Build approach | Cost |
|---|---|---|
| Word-by-word blur reveal | CSS + a tiny splitter; text stays real HTML | ~1 KB |
| Scroll-expanding hero media | GSAP ScrollTrigger (or CSS scroll-driven animation) | GSAP core + ScrollTrigger ≈ 45 KB gz |
| Pinned list with swapping card | ScrollTrigger pin | shared |
| Slot-machine client list with background cross-fade | ScrollTrigger + CSS transforms | shared |
| Stacking case-study cards | CSS `position: sticky` (no JavaScript) | 0 KB |
| Horizontal service scroll | ScrollTrigger horizontal | shared |
| Floating 3D objects with parallax | CSS transforms + ScrollTrigger | shared |
| Floating testimonial stream | CSS keyframes marquee with depth | 0 KB |
| Wave gradient | Animated SVG / CSS (no WebGL) | ~2 KB |
| Smooth scrolling | Lenis | ≈ 4 KB gz |
| Custom "+" cursor | ~20 lines of JS, desktop pointer devices only | <1 KB |

Guardrails: all content is server-rendered HTML; animations start after the first paint; `prefers-reduced-motion`
turns them all off; the LCP element is the headline (text), never the video; videos are short muted
WebM/MP4 clips with a poster image, lazy-loaded below the fold.

## 5. Assets the design depends on

- **Real photos and short videos** (team, client products, founder testimonials). This is the biggest reason Roveia feels premium.
- **3D claymorphic icons** for services. A free CC0 set is available (e.g. 3dicons.co), or they can be commissioned in brand orange.
- Client logos, testimonials, and case-study numbers (real and approved).
