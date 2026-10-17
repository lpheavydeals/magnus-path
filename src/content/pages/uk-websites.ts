import type { ServicePageData } from '../../data/types';

// UK round 2: business websites (WordPress agency, WooCommerce agency, WordPress support).
const ukBreadcrumb = [{ label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' }];

export const ukWebsitesPages: ServicePageData[] = [
  {
    slug: 'uk/wordpress-agency',
    kind: 'global',
    market: 'UK',
    twin: 'wordpress-website-development',
    title: 'WordPress Agency UK for Custom Builds | Magnus Path',
    description: 'WordPress agency for UK businesses and agencies: custom themes, Gutenberg blocks, ACF, cookie consent, accessibility and speed. GBP quotes after a free audit.',
    primaryKeyword: 'WordPress agency',
    navLabel: 'WordPress Agency (UK)',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'For UK businesses and agencies · Custom themes · Gutenberg · ACF',
    h1: 'A WordPress Agency for UK Sites *Built to Last*',
    intro: 'Magnus Path is a WordPress agency working with UK businesses, charities and digital agencies on custom builds. We develop lean themes with Gutenberg blocks and ACF, set up cookie consent that respects UK GDPR, check accessibility and keep pages quick. We have a London office and a Chennai delivery team, and we quote in GBP after a free audit.',
    icon: 'website',
    facts: ['Custom themes, Gutenberg blocks and ACF', 'Project, monthly or block of hours', 'London office, quoted in GBP'],
    headings: {
      pains: 'Why UK WordPress sites become *hard work*',
      includes: 'What our WordPress developers build for UK clients',
      process: 'From audit to launch in *4 steps*',
      guide: 'Choosing a WordPress agency in the UK: builds, compliance basics and working remotely',
    },
    pains: [
      { title: 'A theme that fights your editors', body: 'Off-the-shelf themes bury content in shortcodes and builder layers. Your marketing team wants to publish a case study or event page, but every change becomes a developer ticket.' },
      { title: 'Cookie banners that do not actually block', body: 'Many UK sites show a consent banner while analytics and ad tags fire before anyone clicks. It looks compliant, yet the tracking ignores the visitor’s choice.' },
      { title: 'Accessibility left until someone complains', body: 'Low-contrast text, missing labels on forms and menus you cannot use with a keyboard are common. Fixing them after launch costs more than building them right first time.' },
    ],
    includes: [
      { title: 'Custom WordPress themes', body: 'Block themes designed around your content and brand, with theme.json controlling colours, type and spacing, so pages stay consistent as the site grows.' },
      { title: 'Gutenberg blocks and ACF', body: 'Custom blocks and patterns for the sections you use often, with ACF fields for structured content such as team members, events, locations or downloads.' },
      { title: 'Page builders when they make sense', body: 'If your team already knows Elementor or another builder, we can work with it, keeping templates tidy and plugins few rather than forcing a rebuild.' },
      { title: 'Cookie consent and privacy basics', body: 'A consent banner that blocks non-essential tags until visitors agree, Google Consent Mode, and forms that collect only what you need. Your adviser signs off the policy wording.' },
      { title: 'Accessibility and speed checks', body: 'Testing against common WCAG checks such as contrast, headings, alt text, form labels and keyboard use, plus Core Web Vitals measured on real phones.' },
      { title: 'Hosting, security and handover', body: 'Advice on UK or European hosting, SSL, backups, login hardening and a short training session, with every account and the code in your name.' },
    ],
    platforms: ['WordPress', 'Gutenberg', 'ACF Pro', 'Elementor', 'theme.json', 'Rank Math', 'Cloudflare', 'GitHub'],
    process: [
      { title: 'Free audit and call', body: 'We review your current site or brief, hosting, plugins and analytics, then walk through what we found on a call in your UK morning.' },
      { title: 'Scope and GBP quote', body: 'A written scope listing templates, blocks, integrations and launch date, priced as a project, monthly developer or block of hours.' },
      { title: 'Design, build and review', body: 'Development on a staging site and in Git. You review progress daily and send feedback before lunch for same-day changes.' },
      { title: 'Launch and training', body: 'Redirects, consent, forms and speed checked before go-live, then a recorded training session and a support period for fixes.' },
    ],
    guide: [
      {
        heading: 'What a good WordPress agency does differently',
        paragraphs: [
          'WordPress runs a large share of UK websites, from local firms to universities and national charities, so there is no shortage of people who can install it. The difference between a cheap build and a good one shows up a year later. A careful WordPress agency builds a site your team can edit without breaking, that stays fast as content grows, and that another developer could pick up without starting again.',
          'That usually means a custom block theme, a short list of well-maintained plugins, code kept in Git and clear notes on how everything fits together. If a proposal leans on a multipurpose theme with dozens of plugins, ask what happens when one of them stops being updated.',
        ],
      },
      {
        heading: 'Custom themes, Gutenberg blocks, ACF and page builders',
        paragraphs: [
          'For most new UK business sites we recommend a block theme with custom Gutenberg blocks. Editors build pages from approved sections, design settings live in theme.json, and there is no heavy builder loading on every page. ACF adds structured fields where content repeats, such as staff profiles, branch details or course listings.',
          'Page builders are not always wrong. If your marketing team already works confidently in Elementor and the site is mostly landing pages, rebuilding everything in Gutenberg may not be worth the cost. We will say which route suits your team, not just which one we prefer.',
        ],
      },
      {
        heading: 'Cookie consent, UK GDPR and accessibility basics',
        paragraphs: [
          'Under UK GDPR and the cookie rules, analytics and advertising tags should not set non-essential cookies until a visitor agrees. We set up a consent platform, connect Google Consent Mode and test that tags really wait. We are not lawyers, so your privacy policy and cookie wording should be checked by a UK adviser.',
          'Accessibility deserves the same early attention. Building to common WCAG checks is cheaper during the build than after it. Public sector bodies have specific accessibility duties, so tell us early if that applies to you.',
        ],
        bullets: [
          'Colour contrast that passes for body text and buttons.',
          'One logical heading structure per page.',
          'Labels on every form field and clear error messages.',
          'Menus, sliders and pop-ups that work with a keyboard.',
          'Alt text written for meaning, not stuffed with keywords.',
        ],
      },
      {
        heading: 'Speed, hosting and security',
        paragraphs: [
          'Most slow WordPress sites are slow because of plugins, oversized images and cheap shared hosting, not because of WordPress itself. Choose managed hosting with server-level caching and data centres in the UK or Europe, put a CDN in front, and load scripts only on the pages that need them.',
          'Security follows the same discipline: fewer plugins, updates tested on staging, two-factor login for admins, off-site backups and someone checking the site each month. Ask any WordPress development company in the UK who will do that work after launch, and what it costs.',
        ],
      },
      {
        heading: 'How to choose a WordPress agency in the UK',
        paragraphs: [
          'Whether you hire a local studio, a freelancer or a remote WordPress developer, the questions are similar. The answers tell you more than a portfolio of screenshots.',
        ],
        bullets: [
          'Who will build the site, and can I speak to them before signing?',
          'Will you use a custom theme, a builder or a bought theme, and why?',
          'How will cookie consent and basic accessibility be tested?',
          'Will the code live in a Git repository and hosting account I own?',
          'What support is available after launch, and how are requests handled?',
        ],
      },
      {
        heading: 'Engagement options and white label WordPress development for UK agencies',
        paragraphs: [
          'We work in three ways. A project suits a new site or redesign with a defined scope. A monthly developer suits a steady flow of changes. A block of hours suits irregular work where you want someone who already knows the site. All three are quoted in GBP after a free audit.',
          'Many UK design and marketing agencies use us for white label WordPress development. We build from your Figma files in your repositories, follow your coding standards and stay out of client conversations unless you invite us. Your clients deal with your agency, and we never contact them directly.',
        ],
      },
      {
        heading: 'A WordPress developer in the UK or a remote team: how the day runs',
        paragraphs: [
          'We have a London office where you can meet us, but most delivery is done by our Chennai team, and India is 4.5 hours ahead of British Summer Time and 5.5 hours ahead in winter. Our working day overlaps your morning and early afternoon, so feedback sent before UK lunchtime is usually acted on the same day, and you see the changes on staging that afternoon. Calls fit that window, and the rest runs through a shared board and chat.',
          'The trade-off is honest: you can meet us at our London office, but most contact happens online rather than face to face, and we do not cover UK evenings or weekends. In return you get a WordPress agency with a steady team, a predictable daily handoff and written notes on every change, so nothing depends on someone remembering a phone call.',
        ],
      },
    ],
    related: [
      { label: 'E-commerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'WordPress website development services', href: '/wordpress-website-development/' },
      { label: 'WooCommerce agency for UK online shops', href: '/uk/woocommerce-agency/' },
      { label: 'WordPress support and maintenance plans in the UK', href: '/uk/wordpress-support/' },
      { label: 'Free website and e-commerce audit', href: '/free-ecommerce-audit/' },
    ],
    faqs: [
      { q: 'Can I hire a WordPress developer in the UK through you?', a: 'You can hire one of our WordPress developers to work on your UK site, but they are based in Chennai, not the UK. You get a named developer for a project, a monthly arrangement or a block of hours, working in your UK morning and early afternoon, quoted in GBP.' },
      { q: 'Do you have a UK office?', a: 'Yes. We have a London office (E18) where you can meet the team by appointment; most delivery is done by our Chennai, India team. Other calls happen over video in your morning or early afternoon, and day-to-day work runs through a shared project board and chat channel.' },
      { q: 'What does a WordPress development company in the UK usually charge?', a: 'Prices vary widely with scope: number of templates, custom blocks, integrations, content migration and accessibility work. We do not publish fixed prices for UK projects. Instead we quote in GBP after a free audit, with a written scope so you can compare like for like with other agencies.' },
      { q: 'Do you build with Gutenberg or Elementor?', a: 'For new builds we usually recommend a custom block theme with Gutenberg blocks and ACF, because it stays lighter and easier to maintain. If your team already relies on Elementor or another builder, we can work within it and keep the templates tidy rather than forcing a full rebuild.' },
      { q: 'Can you set up cookie consent that meets UK GDPR?', a: 'We set up a consent platform, connect Google Consent Mode and test that non-essential tags wait until visitors agree. We are not lawyers, so your privacy policy, cookie list and wording should be reviewed by a UK adviser before launch.' },
      { q: 'Do you offer white label WordPress development for UK agencies?', a: 'Yes. We build from your designs inside your repositories and project tools, follow your standards and report to your project manager. We sign an NDA, never contact your clients and remove our name from the code and admin areas, so the work is presented as yours.' },
      { q: 'Will our WordPress site be accessible?', a: 'We build and test against common WCAG checks, including contrast, headings, form labels, alt text and keyboard navigation. That covers the issues most visitors hit. If you are a public sector body with formal accessibility duties, tell us early so we can plan a fuller review.' },
    ],
  },
  {
    slug: 'uk/woocommerce-agency',
    kind: 'global',
    market: 'UK',
    twin: 'woocommerce-development',
    title: 'WooCommerce Agency UK for Growing Shops | Magnus Path',
    description: 'WooCommerce agency for UK shops: VAT-inclusive pricing, Klarna and Clearpay, Royal Mail and DPD labels, subscriptions, trade pricing and HPOS. GBP quotes.',
    primaryKeyword: 'WooCommerce agency',
    navLabel: 'WooCommerce Agency (UK)',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'For UK online shops · Builds · Fixes · Migrations',
    h1: 'A WooCommerce Agency for UK Shops *That Own Their Store*',
    intro: 'Magnus Path is a WooCommerce agency for UK shops that want full control of their store, data and checkout. We build and fix WooCommerce stores with VAT-inclusive prices, Klarna and Clearpay, carrier label integrations, subscriptions and trade pricing. We have a London office and a Chennai delivery team, and we quote in GBP after a free audit.',
    icon: 'website',
    facts: ['VAT-inclusive pricing set up', 'Royal Mail, DPD and Evri label links', 'Quoted in GBP after a free audit'],
    headings: {
      pains: 'Where UK WooCommerce shops *lose time and orders*',
      includes: 'What our WooCommerce developers handle for UK stores',
      process: 'How a WooCommerce project runs in *4 steps*',
      guide: 'WooCommerce development in the UK: VAT, payments, delivery and choosing the right platform',
    },
    pains: [
      { title: 'Prices that confuse UK shoppers', body: 'Product pages show prices without VAT, then the total jumps at checkout. Or VAT is displayed twice for trade buyers. Either way, shoppers stop trusting the numbers.' },
      { title: 'Packing orders by copy and paste', body: 'Staff retype addresses into carrier websites to print labels, then paste tracking numbers back into orders. It is slow, and one typo means a lost parcel.' },
      { title: 'A store that slows down every November', body: 'Years of plugins, a bloated orders table and shared hosting mean the shop crawls just as Black Friday traffic arrives, and checkout errors appear under load.' },
    ],
    includes: [
      { title: 'UK VAT and price display', body: 'Standard, reduced and zero rates set up, prices shown including VAT for consumers, excluding VAT for trade, and invoices that show the details your accountant asks for.' },
      { title: 'Payments UK shoppers use', body: 'Stripe with Apple Pay and Google Pay, PayPal, Klarna and Clearpay, configured and tested end to end, including refunds and partial refunds.' },
      { title: 'Carrier label integrations', body: 'Orders sent to Royal Mail Click & Drop, DPD or Evri tools so labels print in batches and tracking numbers return to the customer automatically.' },
      { title: 'Subscriptions and trade pricing', body: 'Recurring boxes and replenishment orders with WooCommerce Subscriptions, plus trade accounts with their own price lists, minimum orders and VAT-exclusive display.' },
      { title: 'Speed, HPOS and hosting', body: 'High-performance order storage enabled and tested with your plugins, caching that leaves the basket alone, and hosting sized for your peak days.' },
      { title: 'Migrations and peak readiness', body: 'Moves to WooCommerce from Shopify or other platforms and the other way round, with redirects, plus load and checkout testing before Black Friday.' },
    ],
    platforms: ['WooCommerce', 'WordPress', 'Stripe', 'PayPal', 'Klarna', 'Clearpay', 'Royal Mail Click & Drop', 'WooCommerce Subscriptions'],
    process: [
      { title: 'Free store audit', body: 'We review your shop, plugins, hosting, checkout and order flow, then talk you through the findings on a call in your UK morning.' },
      { title: 'Scope and GBP quote', body: 'A written list of fixes, features or the full build, with a fixed quote in GBP and a realistic date that avoids your peak trading weeks.' },
      { title: 'Build on staging', body: 'All work happens on a staging copy and in Git. We place test orders with each payment method and carrier before anything goes live.' },
      { title: 'Launch and support', body: 'A planned go-live, order and payment monitoring in the first days, and a support period with the option of a monthly plan afterwards.' },
    ],
    guide: [
      {
        heading: 'What a WooCommerce agency should cover for a UK shop',
        paragraphs: [
          'WooCommerce turns WordPress into a full online shop that you host and own. That ownership is its strength: no platform transaction fees on top of your payment provider, full access to your data and freedom to change almost anything. It also means someone has to look after hosting, updates and the checkout. A good WooCommerce agency handles both sides, the build and the upkeep, and tells you plainly which plugins and hosting you will pay for each year.',
          'For UK shops, the details that matter most are VAT display, payment methods, carrier integrations and how the store copes with peak weeks. If an agency’s proposal does not mention those, ask why.',
        ],
      },
      {
        heading: 'UK VAT and VAT-inclusive prices',
        paragraphs: [
          'UK consumers expect the price on the product page to include VAT. WooCommerce handles this well once the tax settings are right: prices entered including VAT, standard, reduced and zero-rate classes for products such as some children’s clothing or food, and a basket that does not shuffle the total at checkout.',
          'Trade customers are different. They usually want prices excluding VAT and invoices showing your VAT number. We configure the settings and test real baskets, but we are not tax advisers. Your accountant should confirm the rate for each product and any EU or Northern Ireland selling arrangements.',
        ],
      },
      {
        heading: 'Payments and delivery labels',
        paragraphs: [
          'Most UK shops start with Stripe for cards, Apple Pay and Google Pay, then add PayPal and a buy now, pay later option such as Klarna or Clearpay. Each extra method should earn its place, because every one adds settlement reports and refund steps for your team.',
          'On the delivery side, Royal Mail Click & Drop, DPD and Evri all offer ways to pull orders from WooCommerce, either through their own tools or a plugin. The aim is simple: no retyping addresses, labels printed in batches and tracking numbers sent to customers automatically.',
        ],
      },
      {
        heading: 'Subscriptions, trade pricing, HPOS and speed',
        paragraphs: [
          'WooCommerce suits shops that sell coffee, pet food or skincare on subscription, and brands that sell to retailers and salons as well as consumers. Subscriptions, trade price lists and minimum order rules can all run from one store and one stock pool.',
          'Speed is the trade-off for that flexibility. Enable high-performance order storage (HPOS) once your plugins support it, choose hosting built for WooCommerce, cache everything except the basket and checkout, and remove plugins nobody uses. A WooCommerce developer in the UK or overseas should test all of this before peak season, not during it.',
        ],
      },
      {
        heading: 'WooCommerce vs Shopify for UK shops: an honest comparison',
        paragraphs: [
          'We build on both, so we have no reason to push either. Shopify suits shops that want hosting, security and updates handled for them and can live within its checkout and app model. WooCommerce suits shops that want full ownership, unusual product logic, content-heavy sites or tight control over costs at scale.',
        ],
        bullets: [
          'Choose Shopify if your team is small and nobody wants to think about servers.',
          'Choose WooCommerce if you need custom pricing, bespoke checkout rules or deep WordPress content.',
          'Expect to pay for hosting and maintenance on WooCommerce, and for apps and plan fees on Shopify.',
          'Either way, plan migrations with a full redirect map so search rankings survive the move.',
        ],
      },
      {
        heading: 'Black Friday readiness and choosing a WooCommerce development partner in the UK',
        paragraphs: [
          'Start Black Friday preparation at least six weeks early. Check hosting limits, test discount rules and bundles, clear old plugins, and run test orders with every payment method on a phone. Then freeze big changes until after Boxing Day.',
          'When you compare WooCommerce development offers in the UK, ask who writes the code, whether it lives in a Git repository you own, how updates are tested and who answers when checkout breaks on a Saturday. A WooCommerce agency that cannot answer those questions clearly will struggle when something goes wrong in your busiest week.',
        ],
      },
      {
        heading: 'Hiring a WooCommerce developer in the UK or working remotely',
        paragraphs: [
          'Once a shop is live, most work is a stream of smaller jobs: a new shipping rule, a plugin conflict, a product option the theme does not support, a report the finance team needs. That work suits a WooCommerce developer who already knows your store, rather than a fresh agency project each time.',
          'We offer three ways to work: a fixed-price project, a monthly developer for an agreed number of days, or a block of hours you draw down as requests arrive. Whichever you choose, you get a named developer, work on staging, and code committed to a repository in your account.',
          'We have a London office where you can meet us, while most delivery is done by our Chennai team. India is 4.5 hours ahead of British Summer Time and 5.5 hours ahead in winter, so our day overlaps your morning and early afternoon. Issues raised before lunch are usually handled the same day, and calls fit that window. We do not offer UK evening or weekend cover, so we plan peak-season changes well in advance.',
        ],
      },
    ],
    related: [
      { label: 'E-commerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'WooCommerce development services', href: '/woocommerce-development/' },
      { label: 'WordPress agency for UK custom builds', href: '/uk/wordpress-agency/' },
      { label: 'WordPress and WooCommerce support in the UK', href: '/uk/wordpress-support/' },
      { label: 'Shopify agency for UK stores', href: '/uk/shopify-agency/' },
    ],
    faqs: [
      { q: 'Can I hire a WooCommerce developer in the UK through you?', a: 'You can work with one of our WooCommerce developers on your UK store, but they are based in Chennai, not the UK. You get a named developer who learns your plugins and order flow, works during your morning and early afternoon, and is quoted in GBP.' },
      { q: 'Do you have a UK office?', a: 'Yes. We have a London office (E18) where you can meet the team by appointment; most delivery is done by our Chennai, India team. India is 4.5 to 5.5 hours ahead of the UK, so calls happen in your morning or early afternoon and requests before lunch are usually handled the same day.' },
      { q: 'Can you set up VAT-inclusive prices in WooCommerce?', a: 'Yes. We configure WooCommerce to show prices including VAT for consumers, set up standard, reduced and zero-rate tax classes, and show VAT-exclusive prices to trade accounts where needed. We are not tax advisers, so your accountant should confirm the rate for each product.' },
      { q: 'Which payment methods can you add for UK shoppers?', a: 'Stripe for cards, Apple Pay and Google Pay, plus PayPal, Klarna and Clearpay. We set each one up, place test orders and check refunds work. We usually suggest starting with fewer methods and adding more only when customers ask for them.' },
      { q: 'Can WooCommerce print Royal Mail or DPD labels?', a: 'Yes, through the carrier’s own tools or a plugin. Orders can flow to Royal Mail Click & Drop, DPD or Evri systems, labels print in batches and tracking numbers return to the order so customers get them automatically. The right option depends on your carrier account.' },
      { q: 'Should a UK shop use WooCommerce or Shopify?', a: 'Shopify suits small teams who want hosting and security handled for them. WooCommerce suits shops that want full ownership, custom pricing or checkout rules, and strong content on WordPress. We build on both, so we will recommend whichever fits your products, team and budget.' },
      { q: 'What does WooCommerce development in the UK cost with you?', a: 'We quote in GBP after a free audit, because a speed fix, a new subscription feature and a full migration are very different jobs. You receive a written scope with a fixed price before work starts. Hosting, premium plugins and payment fees are paid separately.' },
    ],
  },
  {
    slug: 'uk/wordpress-support',
    kind: 'global',
    market: 'UK',
    twin: 'website-maintenance-services',
    title: 'WordPress Support UK: Monthly Maintenance | Magnus Path',
    description: 'WordPress support for UK businesses, shops and agencies: tested updates, off-site backups, monitoring, small changes and emergency fixes. Quoted in GBP.',
    primaryKeyword: 'WordPress support',
    navLabel: 'WordPress Support (UK)',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'For UK businesses, WooCommerce shops and agencies · Monthly plans',
    h1: 'WordPress Support for UK Sites, *Handled Before Lunch*',
    intro: 'Magnus Path offers monthly WordPress support for UK businesses, WooCommerce shops and agencies. We test updates on staging, keep off-site backups, monitor uptime and security, make small changes and help clean up after malware. We have a London office, and our Chennai team means requests sent before UK lunchtime are usually handled the same day. Plans are quoted in GBP.',
    icon: 'website',
    facts: ['Updates tested on staging first', 'Same-day work on requests before lunch', 'Quoted in GBP after a free audit'],
    headings: {
      pains: 'Why UK WordPress sites *go wrong quietly*',
      includes: 'What our WordPress maintenance plans cover',
      process: 'How support starts in *4 steps*',
      guide: 'WordPress support and maintenance in the UK: what to expect and how to compare plans',
    },
    pains: [
      { title: 'Updates clicked on the live site', body: 'Someone presses “update all” on a Friday afternoon, a plugin clashes with the theme and the contact form stops sending. Nobody notices until enquiries dry up.' },
      { title: 'Backups that live on the same server', body: 'The host keeps backups, but on the same account that was hacked or suspended. When the site goes down, the backups go with it.' },
      { title: 'A developer who is never free', body: 'The freelancer who built the site replies days later. Small changes queue up, and urgent problems wait behind someone else’s project.' },
    ],
    includes: [
      { title: 'Tested updates', body: 'WordPress core, plugin and theme updates applied on a staging copy first, checked visually and functionally, then pushed live with a backup taken just before.' },
      { title: 'Off-site backups', body: 'Daily backups stored away from your host, with a test restore each quarter so you know they actually work when needed.' },
      { title: 'Uptime and security monitoring', body: 'Uptime checks, malware scans, login protection and alerts for files that change unexpectedly, with action taken when something looks wrong.' },
      { title: 'Malware clean-up help', body: 'If a site is infected, we help isolate it, remove malicious code, restore clean files, reset credentials and close the hole that let it in.' },
      { title: 'Small changes each month', body: 'Text and image updates, new pages from existing blocks, plugin swaps and minor layout fixes, within the time agreed in your plan.' },
      { title: 'Form and checkout tests', body: 'Contact forms, newsletter sign-ups and, for WooCommerce support, test orders and payment checks after every round of updates.' },
    ],
    platforms: ['WordPress', 'WooCommerce', 'WP-CLI', 'UpdraftPlus', 'Wordfence', 'Cloudflare', 'UptimeRobot', 'GitHub'],
    process: [
      { title: 'Free health check', body: 'We review your hosting, plugins, theme, backups and security, then share a short report and talk it through in your UK morning.' },
      { title: 'Plan and GBP quote', body: 'We agree the plan, response times, monthly change allowance and who holds which logins, then confirm the price in GBP.' },
      { title: 'Onboarding and fixes', body: 'Staging set up, off-site backups and monitoring switched on, and any urgent problems from the health check fixed first.' },
      { title: 'Monthly care and reports', body: 'Updates, checks and your requests each month, with a plain-English report on what changed and anything that needs a decision.' },
    ],
    guide: [
      {
        heading: 'What WordPress support should include each month',
        paragraphs: [
          'Good WordPress support is mostly quiet work that prevents loud problems. Each month the site needs updates, backups, monitoring and a few checks that the things which make you money, such as forms and checkout, still work. Then there should be time left for the small changes your team asks for.',
        ],
        bullets: [
          'Core, plugin and theme updates tested on staging before going live.',
          'Daily off-site backups with an occasional test restore.',
          'Uptime and security monitoring with someone acting on alerts.',
          'Form, email and checkout tests after updates.',
          'A set allowance for small content and layout changes.',
          'A short monthly report written for non-developers.',
        ],
      },
      {
        heading: 'WordPress maintenance in the UK: why staging matters',
        paragraphs: [
          'Most broken WordPress sites break during updates, and most of those updates were applied straight to the live site. A staging copy lets us apply updates, check key pages and forms, and only then repeat the process on the live site. It takes longer, but it means problems appear where customers cannot see them.',
          'When you compare WordPress maintenance offers in the UK, ask exactly how updates are tested. If the answer is automatic updates with no checks, you are paying for monitoring, not maintenance.',
        ],
      },
      {
        heading: 'Response times by severity, and emergency fixes',
        paragraphs: [
          'Not every request is urgent, and a fair plan says so. We sort requests into three levels and agree response times for each when you sign up. Because our day overlaps your morning and early afternoon, requests sent before UK lunchtime are usually handled the same day.',
        ],
        bullets: [
          'Critical: the site is down, hacked or checkout is failing. We start as soon as we see the alert or message during our working hours.',
          'High: a key feature is broken, such as a form or payment method. Picked up the same working day.',
          'Normal: content changes and small improvements. Scheduled within the agreed turnaround.',
        ],
      },
      {
        heading: 'WooCommerce support needs extra checks',
        paragraphs: [
          'A WooCommerce shop has more moving parts than a brochure site: payment gateways, carrier plugins, subscriptions and tax settings. An update to any of them can stop orders without the site looking broken. WooCommerce support should include test orders after updates, checks that order emails send, and care around HPOS and database changes.',
          'We also plan around your trading calendar. Large updates are scheduled away from Black Friday, Christmas and Boxing Day, and only urgent security fixes go live during those weeks. Before each peak we also run a speed check, review hosting limits and place test orders with every payment method, so problems surface in October rather than on Black Friday morning.',
        ],
      },
      {
        heading: 'If your site is hacked: malware clean-up and emergency fixes',
        paragraphs: [
          'A hacked WordPress site usually shows itself through spam pages in Google, redirects to strange sites, a warning from your host or a sudden drop in enquiries. The first job is to contain it: take a fresh copy for evidence, put up a holding page if needed and change every password and key.',
          'Then comes the clean-up: removing malicious files and database entries, replacing core and plugin files with clean copies, and finding the way in, often an abandoned plugin or a reused password. Restoring a backup without closing that hole simply invites the attacker back. After clean-up we request a review in Search Console if Google has flagged the site, and keep a closer eye on it for the following weeks.',
        ],
      },
      {
        heading: 'Logins, ownership and agencies reselling support',
        paragraphs: [
          'You should own every account: domain, hosting, WordPress admin, premium plugin licences and backup storage. We work with our own user accounts and two-factor login, so access can be removed in minutes if you ever move on. Avoid any provider that holds your domain or hosting in its own name.',
          'Many UK agencies resell WordPress support under their own brand. We work inside your ticketing system, report to your account manager and stay invisible to your clients. Your agency sets the price and keeps the relationship, and we handle the updates, monitoring and changes behind the scenes.',
        ],
      },
      {
        heading: 'Comparing website maintenance services in the UK',
        paragraphs: [
          'Website maintenance services in the UK range from automated update plugins to full care plans from a named team. Price alone tells you little. Compare what is tested, where backups are stored, how fast urgent problems are picked up and how many hours of changes are included. Ask for a sample monthly report, too: it shows whether the provider explains its work or just sends a list of plugin version numbers. Good WordPress support should leave you understanding your own site better each month.',
          'We have a London office where you can meet us, but most delivery is done by our Chennai team, and India is 4.5 hours ahead of British Summer Time and 5.5 hours ahead in winter. That means we cover your morning and early afternoon, not UK evenings or weekends. Plans are quoted in GBP after a free health check.',
        ],
      },
    ],
    related: [
      { label: 'E-commerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'Website maintenance services and care plans', href: '/website-maintenance-services/' },
      { label: 'WordPress agency for UK custom builds', href: '/uk/wordpress-agency/' },
      { label: 'WooCommerce agency for UK online shops', href: '/uk/woocommerce-agency/' },
      { label: 'Free website and e-commerce audit', href: '/free-ecommerce-audit/' },
    ],
    faqs: [
      { q: 'What is included in WordPress maintenance in the UK?', a: 'Our WordPress maintenance plans include core, plugin and theme updates tested on staging, daily off-site backups, uptime and security monitoring, form tests, malware clean-up help and an allowance for small changes. You get a short monthly report in plain English explaining what we did and anything that needs your decision.' },
      { q: 'Do you have a UK office?', a: 'Yes. We have a London office (E18) where you can meet the team by appointment; most support work is done by our Chennai, India team. India is 4.5 to 5.5 hours ahead of the UK, so we cover your morning and early afternoon, and requests sent before lunch are usually handled the same day.' },
      { q: 'How quickly do you respond to WordPress support requests?', a: 'It depends on severity. Critical problems such as a hacked site or failing checkout are started as soon as we see them during our working hours. Broken features are picked up the same working day, and normal changes are scheduled within the turnaround agreed in your plan.' },
      { q: 'Do you offer WooCommerce support?', a: 'Yes. WooCommerce support adds test orders after updates, checks on payment gateways, carrier plugins and order emails, and care with HPOS and database changes. We also schedule big updates away from Black Friday and Christmas, so risky changes do not land in your busiest weeks.' },
      { q: 'How do your website maintenance services in the UK compare on price?', a: 'We quote in GBP after a free health check, because a small brochure site and a busy WooCommerce shop need very different amounts of work. You get a written plan stating what is included, response times and change hours, so you can compare it fairly with other providers.' },
      { q: 'Who owns the logins while you support our site?', a: 'You do. Your domain, hosting, WordPress admin, plugin licences and backup storage stay in your name. We use our own named user accounts with two-factor login, so you can see who did what and remove our access at any time without changing your own passwords.' },
      { q: 'Can our agency resell your WordPress support under our brand?', a: 'Yes. We work inside your ticketing or project tools, report to your account manager and never contact your clients directly. Reports can carry your agency branding. You set the price to your clients, and we handle updates, monitoring and change requests behind the scenes.' },
    ],
  },
];
