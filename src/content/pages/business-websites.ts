import type { ServicePageData } from '../../data/types';

// Business websites (non-e-commerce) under the Websites pillar.
export const businessWebsitePages: ServicePageData[] = [
  {
    slug: 'corporate-website-development',
    kind: 'service',
    title: 'Corporate Website Development Company | Magnus Path',
    description: 'Corporate website development for manufacturers, exporters, B2B firms and service businesses in India. Fast, secure, SEO-ready company websites from ₹35,000.',
    primaryKeyword: 'corporate website development',
    navLabel: 'Corporate Website Development',
    breadcrumb: [{ label: 'Websites', href: '/ecommerce-website-development/' }],
    eyebrow: 'Corporate websites · Business websites · Custom web design',
    h1: 'Corporate Website Development That *Brings in Enquiries*',
    intro: 'Magnus Path offers corporate website development for manufacturers, exporters, B2B firms, schools, hospitals and professional service businesses across Tamil Nadu and India. We plan, design and build company websites that explain what you do in seconds, load fast, rank on Google and turn visitors into tracked enquiries your sales team can follow up.',
    icon: 'website',
    facts: ['Business sites from ₹35,000', 'Live in 3–8 weeks', 'Lead tracking built in'],
    headings: {
      pains: 'Why most company websites fail to win business',
      includes: 'What our corporate website development includes',
      process: 'Your company website in *4 steps*',
      pricing: 'Business website development pricing',
      guide: 'Corporate website development: a buyer’s guide for Indian businesses',
    },
    pains: [
      { title: 'A brochure nobody reads', body: 'The site was built years ago, says “quality products at competitive prices” and lists a phone number. Buyers cannot tell what you make, who you serve or why they should call you instead of the next supplier.' },
      { title: 'Enquiries that vanish', body: 'Contact forms land in an inbox nobody checks, there is no RFQ form for specific products, and nobody knows whether last month’s leads came from Google, LinkedIn or a trade fair.' },
      { title: 'Stuck with the original developer', body: 'Changing a phone number or adding a new product means emailing someone and waiting a week. Plugins are outdated, the SSL certificate lapses, and nobody owns the hosting login.' },
    ],
    includes: [
      { title: 'Positioning and site structure', body: 'We work out who your buyers are and what they need to see, then plan pages, navigation and messaging before any design starts. Clear answers to “what do you do and for whom” on every key page.' },
      { title: 'Professional website design', body: 'A custom design that fits your brand and industry, built mobile-first, with layouts for services, products, case pages, team and careers that your team can reuse as the business grows.' },
      { title: 'Product catalogues, spec sheets and RFQs', body: 'Structured product or service pages with downloadable spec sheets, certifications you actually hold, and RFQ or quote forms that capture quantity, application and destination country.' },
      { title: 'Careers, investor and compliance pages', body: 'Job listings with application forms, plus investor relations, CSR, policies and statutory disclosures where your company needs them, all easy to update from the CMS.' },
      { title: 'Speed, SEO and accessibility', body: 'Optimised images, clean code, schema markup, readable contrast and keyboard-friendly navigation, so the site loads quickly, ranks for what buyers search and works for every visitor.' },
      { title: 'Analytics, lead tracking and hosting', body: 'GA4 goals, call and WhatsApp click tracking, form-to-CRM or email routing, secure hosting, SSL, backups and 30 days of support after launch.' },
    ],
    platforms: ['WordPress', 'Webflow', 'Headless CMS', 'Astro', 'Google Analytics 4', 'Google Search Console', 'Zoho CRM', 'HubSpot', 'Cloudflare'],
    process: [
      { title: 'Discovery and sitemap', body: 'We meet your team, review competitors and your current site, and agree on audiences, pages, content owners and the CMS, with a fixed quote and timeline.' },
      { title: 'Content and design', body: 'We help shape the copy, then design the home page and key templates on desktop and mobile. You review real layouts with your own content.' },
      { title: 'Build and test', body: 'We develop the site, connect forms, tracking and CRM, migrate old content, set up redirects and test on real phones, browsers and slow connections.' },
      { title: 'Launch and handover', body: 'We go live, submit the sitemap to Google, train your team on editing and hand over every login, domain and hosting account in your company’s name.' },
    ],
    pricing: {
      from: '₹35,000',
      unit: 'one-time',
      note: 'A 5–10 page business website starts at ₹35,000. Custom corporate sites with product catalogues, multilingual content, careers or investor sections usually cost ₹75,000–2 lakh. You get a fixed quote after a free consultation.',
      items: ['5–10 page responsive business website', 'Mobile-first custom design', 'Enquiry, RFQ and WhatsApp lead capture', 'On-page SEO, speed and analytics setup', '30 days of post-launch support'],
    },
    guide: [
      {
        heading: 'What a corporate website needs to do in 2026',
        paragraphs: [
          'A corporate website is rarely where a deal closes, but it is almost always where a buyer checks you out. A procurement manager in Germany, a parent choosing a school in Coimbatore or a hospital administrator comparing vendors will visit your site before they call. If it is slow, vague or outdated, you lose the deal without ever knowing about it.',
          'Good corporate website development starts from that buyer’s questions, not from the company’s org chart. What do you make or offer? Who do you already serve? Can you handle my volume, specification or location? How do I get a quote? Every page should answer one of these quickly.',
        ],
      },
      {
        heading: 'Pages a professional business website should include',
        paragraphs: [
          'The right page list depends on your industry, but most company website development projects for manufacturers, exporters and B2B firms need a similar core. Schools, hospitals and real-estate firms swap the catalogue for courses, departments or projects, while the logic stays the same.',
        ],
        bullets: [
          'A home page that states what you do, for whom, and where, in one or two lines',
          'Service or product catalogue pages with specifications, applications and downloadable spec sheets',
          'RFQ or enquiry forms that ask for the details your sales team actually needs',
          'About, facilities and quality pages showing capacity, processes and the certifications you genuinely hold',
          'Careers with live openings and an application form',
          'Investor relations, CSR and compliance pages for listed or regulated companies',
          'Language versions for export markets or regional audiences, such as Tamil, Hindi or Arabic',
        ],
      },
      {
        heading: 'Choosing the right CMS for a company website',
        paragraphs: [
          'The content management system decides who can edit the site and how easily. WordPress suits most small and mid-sized businesses because it is familiar, flexible and affordable to maintain. A headless CMS paired with a fast front end suits larger corporate sites with many editors, several languages or content shared with apps and portals. Webflow works well for marketing-led teams that want visual control.',
          'We recommend a platform based on how often you will publish, how many people will edit and what your IT team can support, not on what we prefer to build. If you need a deeper comparison, our CMS website development page covers the options in detail.',
        ],
      },
      {
        heading: 'Speed, security and accessibility are not optional',
        paragraphs: [
          'Buyers on mobile data, overseas visitors on long connections and Google’s own ranking systems all reward fast pages. We compress images, avoid heavy sliders, load only the scripts a page needs and serve the site through a CDN. Custom web development services should leave you with a lean site, not a theme carrying features you never use.',
          'Security matters because a hacked corporate site damages trust and can get blacklisted by browsers. We set up SSL, firewalls, limited admin access, regular backups and an update routine. Accessibility, such as readable contrast, alt text, keyboard navigation and clear form labels, helps every visitor and is increasingly expected by large customers and government buyers.',
        ],
      },
      {
        heading: 'SEO, analytics and lead tracking from launch day',
        paragraphs: [
          'A corporate site should be found for the products and services you sell, not only your company name. That means a page per important offering, descriptive titles, schema markup, internal links and content written in the words buyers search with. For exporters, it can also mean country or language pages.',
          'Just as important is knowing what the site produces. We track form submissions, calls, WhatsApp clicks and brochure downloads in GA4, and route enquiries to email or a CRM such as Zoho or HubSpot. When you later run LinkedIn or Google ads, you can see which campaigns bring real enquiries.',
        ],
      },
      {
        heading: 'What corporate website development costs in India',
        paragraphs: [
          'A 5–10 page business website with a custom design, enquiry forms, basic SEO and analytics typically starts around ₹35,000. Custom corporate sites with large catalogues, multilingual content, investor pages or CRM integrations usually cost ₹75,000 to ₹2 lakh. Domain, hosting and premium plugins or CMS plans are separate running costs.',
          'When comparing quotes from a corporate website design company, check who owns the domain and hosting, whether content writing is included, how many revision rounds you get and what support looks like after launch. A cheaper quote that leaves you locked out of your own site costs more in the end.',
        ],
      },
      {
        heading: 'Why work with us on your company website',
        paragraphs: [
          'We are a Chennai team that builds websites and also runs SEO and B2B marketing, so our corporate website development is planned around the enquiries your site needs to generate, not just how it looks. Tamil Nadu businesses can meet us in person for workshops, and we work remotely with companies across India and abroad. Everything is registered in your name from day one.',
          'After launch, corporate website development does not stop. Products change, people join, certifications renew and new markets open. We offer maintenance plans for updates and security, and our SEO team can keep growing the traffic your new site was built to win.',
        ],
      },
    ],
    related: [
      { label: 'WordPress website design company', href: '/wordpress-website-development/' },
      { label: 'CMS and headless CMS web development', href: '/cms-website-development/' },
      { label: 'Website maintenance services', href: '/website-maintenance-services/' },
      { label: 'B2B digital marketing for manufacturers and exporters', href: '/b2b-digital-marketing/' },
      { label: 'Website development company in Chennai', href: '/chennai/website-development-company/' },
    ],
    faqs: [
      { q: 'How much does a corporate website cost in India?', a: 'A 5–10 page business website starts at about ₹35,000 one-time. Custom corporate sites with product catalogues, multilingual content, careers or investor sections usually cost ₹75,000 to ₹2 lakh. Domain, hosting and any paid plugins or CMS plans are separate running costs, which we list clearly in the quote.' },
      { q: 'How long does corporate website development take?', a: 'A standard 5–10 page business website usually takes 3–4 weeks. A custom corporate site with a large catalogue, several languages or CRM integrations typically takes 6–8 weeks. The biggest factor is how quickly content, photos and feedback come in from your team.' },
      { q: 'What is the difference between a business website and a corporate website?', a: 'A business website is usually a compact 5–10 page site explaining your services and capturing enquiries. A corporate website is larger, with product catalogues, multiple divisions, careers, investor or compliance pages and often several languages, and it typically has more people editing it.' },
      { q: 'Do you write the content for our company website?', a: 'We help with structure and messaging on every project, and full copywriting can be included. We interview your team, draft page copy around what buyers search for and send it for your review. Technical details such as specifications and certifications always come from you so nothing is overstated.' },
      { q: 'Can we update the website ourselves after launch?', a: 'Yes. We build on a CMS your team can use, set up editable blocks for common sections and record short training videos. Most clients update news, products, jobs and team details themselves and call us only for new features or design changes.' },
      { q: 'Will our corporate website be SEO-friendly?', a: 'Yes. Every site launches with a page for each key service or product, clean URLs, optimised titles and descriptions, schema markup, fast-loading images and a submitted sitemap. For ongoing rankings and content, our SEO team can continue the work as a monthly service.' },
      { q: 'Do you offer custom web design services for exporters?', a: 'Yes. For exporters we plan product pages around buyer specifications, add RFQ forms that capture quantity and destination, set up language or country versions where useful and make sure the site loads quickly for overseas visitors. These sites often work alongside our B2B digital marketing service.' },
      { q: 'Who owns the website, domain and hosting?', a: 'You do. We register or transfer the domain and hosting in your company’s name, hand over every login at launch and document the setup. If you ever move to another agency, you can take the site with you without asking our permission.' },
    ],
  },
  {
    slug: 'wordpress-website-development',
    kind: 'service',
    title: 'WordPress Website Design Company India | Magnus Path',
    description: 'WordPress website design company in Chennai building fast, secure, easy-to-edit WordPress sites with custom themes, Gutenberg blocks and SEO. From ₹30,000.',
    primaryKeyword: 'wordpress website design company',
    navLabel: 'WordPress Website Development',
    breadcrumb: [{ label: 'Websites', href: '/ecommerce-website-development/' }],
    eyebrow: 'WordPress design · WordPress development',
    h1: 'WordPress Website Design Company for Sites *Your Team Can Run*',
    intro: 'Magnus Path is a WordPress website design company in Chennai that builds fast, secure WordPress sites for businesses across India and abroad. We design lean custom themes with Gutenberg blocks your team can edit, keep plugins to the essentials and set up SEO, caching and backups so the site stays quick long after launch.',
    icon: 'website',
    facts: ['Sites from ₹30,000', 'Custom block themes', 'Easy editing for your team'],
    headings: {
      pains: 'Why so many WordPress sites end up slow and fragile',
      includes: 'What our WordPress website design services cover',
      process: 'Your WordPress website in *4 steps*',
      pricing: 'WordPress website development pricing',
      guide: 'WordPress website development: an honest guide before you build',
    },
    pains: [
      { title: 'Page builder bloat', body: 'A multipurpose theme plus a heavy page builder and thirty plugins loads megabytes of code on every page. The site scores poorly on Core Web Vitals and feels sluggish on mobile.' },
      { title: 'Updates nobody dares to run', body: 'Plugins have not been updated in a year because the last update broke the layout. Meanwhile, known vulnerabilities sit open and the site becomes an easy target.' },
      { title: 'Hard to edit without breaking things', body: 'Changing a heading means hunting through nested builder sections. One wrong drag and the mobile layout falls apart, so every edit goes back to a developer.' },
    ],
    includes: [
      { title: 'Custom WordPress theme design', body: 'A design built around your brand and content, developed as a lightweight block theme rather than a multipurpose theme with hundreds of unused options.' },
      { title: 'Gutenberg blocks for easy editing', body: 'Custom blocks and patterns for your common sections, such as service cards, testimonials and CTAs, so editors build pages safely without touching code.' },
      { title: 'Speed and hosting setup', body: 'Quality hosting, server and page caching, image optimisation, a CDN and only the scripts each page needs, tested on real mid-range phones.' },
      { title: 'Security and update routine', body: 'SSL, a firewall, limited admin roles, two-factor login, daily off-site backups and a tested process for core, theme and plugin updates.' },
      { title: 'SEO plugin and technical setup', body: 'Rank Math or Yoast configured properly, with clean permalinks, schema, XML sitemaps, redirects and Search Console connected from launch.' },
      { title: 'Migration and training', body: 'Moves from Wix, an old WordPress build or another CMS with content and URL redirects, plus recorded walkthroughs for your team and 30 days of support.' },
    ],
    platforms: ['WordPress', 'Gutenberg', 'Advanced Custom Fields', 'Rank Math', 'Yoast SEO', 'Cloudflare', 'WP Rocket', 'Wordfence'],
    process: [
      { title: 'Plan', body: 'We agree on pages, content types, integrations and editing needs, check whether WordPress is the right fit and share a fixed quote and timeline.' },
      { title: 'Design', body: 'Mobile and desktop designs for the home page and key templates, reviewed with your real content and adjusted until you approve.' },
      { title: 'Develop', body: 'We build the block theme and custom blocks, install only essential plugins, migrate content, set up redirects and test speed and security.' },
      { title: 'Launch and train', body: 'Go-live on tuned hosting with backups and monitoring, sitemap submitted to Google and a training session so your team can publish confidently.' },
    ],
    pricing: {
      from: '₹30,000',
      unit: 'one-time',
      note: 'WordPress websites start at ₹30,000 for a business site on a customised block theme. Larger sites with custom blocks, multilingual content or migrations are quoted after a free consultation. Online stores are built on WooCommerce and priced separately.',
      items: ['Custom-designed WordPress theme', 'Editable Gutenberg blocks and patterns', 'Rank Math or Yoast SEO setup', 'Caching, security and backup setup', '30 days of post-launch support'],
    },
    guide: [
      {
        heading: 'When WordPress is the right choice',
        paragraphs: [
          'WordPress runs a large share of the web for good reasons. It is open source, so you own your site and can move hosts or agencies freely. It has a huge pool of developers, so you are never dependent on one person. And it handles blogs, service pages, news and resources well, which suits most business websites.',
          'It is a strong fit when your team publishes regularly, wants control over SEO, and needs a budget-friendly site that can grow. It is less suited to sites that need complex app-like features, strict enterprise workflows or content shared across many channels, where a headless CMS can be a better choice. A good WordPress website design company will tell you when that is the case.',
        ],
      },
      {
        heading: 'Custom themes vs page builders: an honest view',
        paragraphs: [
          'Page builders such as Elementor, Divi and WPBakery let non-developers lay out pages visually. They are quick for prototypes and small sites, and some teams genuinely like them. The trade-off is weight: they add extra HTML, CSS and JavaScript to every page, and editors can easily break layouts on mobile.',
          'A custom block theme built on Gutenberg, WordPress’s own editor, is leaner and safer. We create blocks for the sections you actually use, lock the design where it matters and leave text and images open for editing. For most business sites this gives the best balance of speed and ease. If your team is already trained on Elementor and the site is small, we can work with it and keep it lean.',
        ],
      },
      {
        heading: 'Why WordPress sites get slow, and how to keep yours fast',
        paragraphs: [
          'WordPress itself is not slow. Sites become slow because of bloated themes, too many plugins, oversized images and cheap shared hosting. Fixing speed later is harder than building it in, so we plan for it from the first sprint.',
        ],
        bullets: [
          'Hosting with enough resources and a data centre close to your audience',
          'Page and object caching, plus a CDN such as Cloudflare for static files',
          'Images resized and served in modern formats, with lazy loading below the fold',
          'Scripts for forms, sliders or chat loaded only on pages that use them',
          'Fonts self-hosted and limited to the weights you actually need',
        ],
      },
      {
        heading: 'Plugin discipline, security and updates',
        paragraphs: [
          'Every plugin is code someone else wrote, running on your site. We install a plugin only when it solves a real need better than a few lines of custom code, choose well-maintained options and review the list at every update cycle. Fewer plugins mean fewer conflicts, fewer vulnerabilities and faster pages.',
          'Security rests on routine rather than one-time setup. That means keeping core, themes and plugins updated, testing updates on a staging copy first, using strong passwords and two-factor login, limiting admin accounts, and keeping off-site backups you can restore quickly. Our website maintenance plans cover this every month if you prefer not to manage it yourselves.',
        ],
      },
      {
        heading: 'SEO with Rank Math or Yoast',
        paragraphs: [
          'Rank Math and Yoast both handle titles, meta descriptions, sitemaps, schema and redirects well. The plugin matters less than how it is configured: archives that should not be indexed, consistent title templates, correct schema types and a clean URL structure. We set these up during WordPress website development rather than after launch.',
          'We also structure templates so headings are logical, images have descriptive alt text and internal links connect related pages. Plugins help, but rankings come from useful content on pages built to load quickly.',
        ],
      },
      {
        heading: 'How to choose a WordPress website design company in India',
        paragraphs: [
          'Plenty of agencies and freelancers build WordPress sites, and quotes vary widely. Before you hire a WordPress website design company, ask to see how they build: a custom block theme or a multipurpose theme plus a builder, how many plugins a typical site ships with, and how they handle updates after launch.',
          'Also check that the domain, hosting and admin logins will be in your name, that a staging site is used for testing, and that training is included. A WordPress website design company that answers these questions clearly is far more likely to leave you with a site your team can run for years.',
        ],
      },
      {
        heading: 'Moving to WordPress, and what it costs',
        paragraphs: [
          'Many businesses come to WordPress from Wix, Squarespace, an outdated custom CMS or an old WordPress build that has become unmanageable. A careful migration moves pages, posts, media and metadata, maps every old URL to its new address with 301 redirects and checks Search Console after launch, so you keep the rankings you have earned.',
          'Our WordPress website design services start at ₹30,000 one-time for a business site. Larger builds with custom blocks, multiple languages, member areas or complex migrations are quoted after scoping. If you want to sell online, we build stores on WooCommerce instead, which is covered on its own page.',
        ],
      },
    ],
    related: [
      { label: 'Hire a WordPress developer (US)', href: '/us/hire-wordpress-developer/' },
      { label: 'WooCommerce development for online stores', href: '/woocommerce-development/' },
      { label: 'Corporate website development', href: '/corporate-website-development/' },
      { label: 'WordPress website maintenance services', href: '/website-maintenance-services/' },
      { label: 'CMS web development services', href: '/cms-website-development/' },
      { label: 'SEO services for business websites', href: '/seo-services/' },
    ],
    faqs: [
      { q: 'How much does a WordPress website cost in India?', a: 'Our WordPress websites start at ₹30,000 one-time for a business site with a custom-designed theme, editable blocks, SEO plugin setup and security. Larger sites with custom functionality, multiple languages or complex migrations are quoted after scoping. Hosting, domain and any premium plugin licences are separate yearly costs.' },
      { q: 'Do you use Elementor or build custom WordPress themes?', a: 'We usually build lightweight custom block themes using Gutenberg, because they load faster and are harder for editors to break. If your team already knows Elementor and the site is small, we can build with it, keeping add-ons to a minimum and checking performance on mobile before launch.' },
      { q: 'Is WordPress secure enough for a business website?', a: 'Yes, when it is maintained properly. Most hacked WordPress sites run outdated plugins, weak passwords or poor hosting. We set up a firewall, two-factor login, limited admin roles and daily off-site backups, and we can handle monthly updates and monitoring through a website maintenance plan.' },
      { q: 'Can my team edit the WordPress site without a developer?', a: 'Yes. We build custom Gutenberg blocks and patterns for your common sections, so editors can add pages, update text and swap images without touching code. Design elements stay locked where needed, and we record short training videos covering the tasks your team does most often.' },
      { q: 'Should I use Rank Math or Yoast for SEO?', a: 'Both are solid, and either works well when configured correctly. Rank Math includes more features in its free version, while Yoast is long-established and very stable. We pick based on your needs, then set up titles, schema, sitemaps and indexing rules so the plugin actually helps rankings.' },
      { q: 'Can you migrate my site from Wix or another CMS to WordPress?', a: 'Yes. We move pages, blog posts, images and metadata, rebuild the design as a WordPress theme and set up 301 redirects from every old URL. After launch we monitor Search Console for errors so your existing Google rankings and backlinks carry over to the new site.' },
      { q: 'Do you build online stores on WordPress?', a: 'Yes, using WooCommerce, which adds products, cart, checkout and payments to WordPress. Store builds involve Indian payment gateways, COD, GST and courier integrations, so they are scoped and priced separately on our WooCommerce development page rather than under a standard WordPress website.' },
      { q: 'Do you work as a WordPress developer for clients outside Chennai?', a: 'Yes. We are a Chennai-based team and work with businesses across India and in the UK, UAE, Australia, Singapore and the USA. Projects run through video calls, shared design files and a project board, and Tamil Nadu clients can meet us in person.' },
    ],
  },
  {
    slug: 'cms-website-development',
    kind: 'service',
    title: 'CMS Web Development Services & Headless CMS | Magnus Path',
    description: 'CMS web development services in India: WordPress, headless CMS and Webflow sites with clear content models, editor roles, multilingual support. From ₹75,000.',
    primaryKeyword: 'cms web development services',
    navLabel: 'CMS Website Development',
    breadcrumb: [{ label: 'Websites', href: '/ecommerce-website-development/' }],
    eyebrow: 'CMS development · Headless CMS · Content modelling',
    h1: 'CMS Web Development Services Built Around *How You Publish*',
    intro: 'Magnus Path provides CMS web development services for companies that publish often, work in several languages or have many people editing one site. We help you choose between WordPress, a headless CMS and Webflow, model your content properly and build fast websites your editors can update without waiting on developers.',
    icon: 'ai',
    facts: ['CMS sites from ₹75,000', 'WordPress, headless or Webflow', 'Roles and approval workflows'],
    headings: {
      pains: 'Signs your current CMS is holding you back',
      includes: 'What our CMS development services include',
      process: 'Your CMS project in *4 steps*',
      pricing: 'CMS website development pricing',
      guide: 'CMS web development: how to choose and build the right system',
    },
    pains: [
      { title: 'Every change needs a developer', body: 'Content is hard-coded into templates or locked in a rigid page builder, so a new landing page or product update waits in a developer queue for days.' },
      { title: 'Messy, duplicated content', body: 'The same product details live on six pages, translations drift out of sync and nobody knows which version is current, because the CMS was never modelled around your content.' },
      { title: 'No control over who publishes what', body: 'Everyone has admin access, there is no review step and a mistaken edit goes live on the home page. Old CMS versions also bring security risks and slow pages.' },
    ],
    includes: [
      { title: 'CMS selection and architecture', body: 'A clear recommendation between WordPress, a headless CMS and Webflow based on your editors, channels, languages, integrations and budget, with the reasons written down.' },
      { title: 'Content modelling', body: 'Structured content types for products, services, locations, people, case pages and articles, with fields and relationships that keep information in one place.' },
      { title: 'Editor experience and workflows', body: 'Reusable components, live previews, roles and permissions, drafts, scheduled publishing and approval steps so the right people publish the right content.' },
      { title: 'Multilingual and multi-site setup', body: 'Language versions with proper hreflang tags, shared and localised fields, and translation workflows for exporters, regional audiences or multi-brand companies.' },
      { title: 'Fast front-end development', body: 'Templates built with a modern framework or lean theme, static or cached pages, optimised images and clean markup for strong Core Web Vitals.' },
      { title: 'Migration and SEO protection', body: 'Content moved from your old CMS with scripts where possible, URL mapping and 301 redirects, metadata carried over and Search Console checks after launch.' },
    ],
    platforms: ['WordPress', 'Strapi', 'Sanity', 'Contentful', 'Webflow', 'Astro', 'Next.js', 'Cloudflare'],
    process: [
      { title: 'Content audit and CMS choice', body: 'We review your existing content, editors, channels and integrations, then recommend a CMS and architecture with a fixed quote and timeline.' },
      { title: 'Content model and design', body: 'We define content types and fields, design page templates and components, and test the editing experience with your team before full build.' },
      { title: 'Build and migrate', body: 'We set up the CMS, build the front end, connect integrations and migrate content with redirects, testing speed, roles and previews along the way.' },
      { title: 'Launch and editor training', body: 'Go-live with monitoring and analytics, followed by role-based training and documentation so every editor knows how to publish safely.' },
    ],
    pricing: {
      from: '₹75,000',
      unit: 'one-time',
      note: 'CMS and headless CMS websites start at ₹75,000 one-time. Final cost depends on the number of content types, languages, integrations and the size of the migration. Some headless CMS platforms charge their own subscription. You get a fixed quote after scoping.',
      items: ['CMS selection and content model', 'Custom templates and reusable components', 'Editor roles, previews and workflows', 'Content migration with 301 redirects', 'Training and 30 days of support'],
    },
    guide: [
      {
        heading: 'What a CMS is, and why the choice matters',
        paragraphs: [
          'A content management system (CMS) is the software your team uses to create, edit and publish website content without writing code. It stores the text, images and data, and controls who can change what. The front end, the part visitors see, either comes from the same system or is built separately and pulls content from it.',
          'The CMS you choose shapes daily life for your marketing team for years. A good fit makes publishing quick and safe. A poor fit creates workarounds, duplicate content and constant developer requests. That is why CMS web development services should start with how your team works, not with a favourite tool.',
        ],
      },
      {
        heading: 'The main options: WordPress, headless CMS and Webflow',
        paragraphs: [
          'There is no single best CMS. Each of the common options suits a different kind of team and site.',
        ],
        bullets: [
          'WordPress: open source, widely known and affordable. Ideal for business sites, blogs and resource hubs where one team manages one website.',
          'Headless CMS (such as Strapi, Sanity or Contentful): content is stored as structured data and delivered through an API to a separate front end, apps or other channels. Suited to larger sites, many editors and multiple languages or brands.',
          'Webflow: a hosted visual builder with a built-in CMS. Good for design-led marketing teams that want visual control and do not need complex integrations.',
          'Self-hosted vs hosted: Strapi can run on your own servers, while Sanity and Contentful are hosted services with usage-based plans. Factor this into running costs.',
        ],
      },
      {
        heading: 'How to choose the right CMS for your business',
        paragraphs: [
          'Start with a few practical questions. How many people will edit content, and do they need approval steps? Will content appear only on the website, or also in an app, portal or kiosk? How many languages and regions do you need? What does your IT team allow for hosting and data? And what can you spend each year, not just on the build?',
          'If one team runs one site and budgets are modest, WordPress is usually right. If you have several channels, strict workflows or a large multilingual catalogue, headless is worth the extra build effort. A capable CMS development company will show you the trade-offs in writing and recommend the simplest option that meets your needs, including custom CMS development services only when off-the-shelf tools genuinely fall short.',
        ],
      },
      {
        heading: 'Content modelling and editor workflows',
        paragraphs: [
          'Content modelling means defining the types of content you publish, such as products, services, locations, team members or articles, and the fields each one has. Done well, a product specification lives in one place and appears wherever it is needed. Done badly, editors copy and paste the same details across pages and they drift apart.',
          'Workflows decide how content moves from draft to live. We set up roles such as author, editor and publisher, add previews so editors see changes before publishing, enable scheduled releases and keep version history so mistakes can be rolled back. For multilingual sites, we decide which fields are shared and which are translated, and set up hreflang so search engines serve the right language.',
        ],
      },
      {
        heading: 'Performance and SEO on a CMS website',
        paragraphs: [
          'A headless setup can be extremely fast because pages are often pre-built and served from a CDN. A traditional CMS can be fast too, with good hosting and caching. Either way, CMS web development services should deliver lean templates, optimised images and minimal third-party scripts.',
          'SEO needs to be designed into the content model. Editors should be able to set titles, meta descriptions, canonical URLs, social images and structured data for each page. With headless builds, we make sure sitemaps, redirects and rendered HTML are handled properly, because these do not come built in the way they do on WordPress.',
        ],
      },
      {
        heading: 'Migrating from an old CMS without losing rankings',
        paragraphs: [
          'Moving from an outdated CMS, such as an old Joomla, Drupal or custom PHP system, is often the trigger for a new build. A safe migration starts with an inventory of every URL and its traffic, then maps each one to a new address. Content is moved with scripts where possible and cleaned up as it goes, so the new site does not inherit years of clutter.',
          'We set up 301 redirects, carry over metadata, test on a staging site and watch Search Console closely after launch. Good CMS web development services treat migration as an SEO project, not just a copy-and-paste job, because lost URLs mean lost enquiries. Our CMS website development services start at ₹75,000 one-time, with the final quote depending on content types, languages, integrations and migration size.',
        ],
      },
    ],
    related: [
      { label: 'Corporate website development', href: '/corporate-website-development/' },
      { label: 'WordPress website design company', href: '/wordpress-website-development/' },
      { label: 'Website maintenance and CMS support', href: '/website-maintenance-services/' },
      { label: 'E-commerce website development', href: '/ecommerce-website-development/' },
      { label: 'SEO services for CMS websites', href: '/seo-services/' },
    ],
    faqs: [
      { q: 'What are CMS web development services?', a: 'CMS web development services cover choosing a content management system, designing how your content is structured, building the website templates and setting up editing, roles and workflows. They also include migrating content from an old system and training your team so they can publish and update the site without a developer.' },
      { q: 'What is a headless CMS, and do I need one?', a: 'A headless CMS stores content separately from the website design and delivers it through an API, so the same content can feed a website, app or other channels. It suits larger sites with many editors, several languages or multiple channels. Most single-team business websites are well served by WordPress instead.' },
      { q: 'How much does CMS website development cost?', a: 'Our CMS and headless CMS websites start at ₹75,000 one-time. The final price depends on the number of content types, languages, integrations and how much content needs migrating. Some headless platforms also charge a monthly or usage-based subscription, which we estimate for you during scoping.' },
      { q: 'Which CMS is best for a business website in India?', a: 'It depends on your team and plans. WordPress suits most small and mid-sized businesses because it is affordable and widely supported. Webflow suits design-led marketing teams. A headless CMS such as Strapi, Sanity or Contentful suits larger, multilingual or multi-channel sites with structured content and approval workflows.' },
      { q: 'Do you offer custom CMS development services?', a: 'We build custom content models, editor components and integrations on proven CMS platforms. We rarely recommend writing a CMS from scratch, because existing systems already handle security, roles, versions and media well. Building on them keeps costs lower and means other developers can support your site in future.' },
      { q: 'Can you migrate our website from an old CMS?', a: 'Yes. We migrate from older WordPress builds, Joomla, Drupal, Wix and custom systems. We inventory every URL, move content with scripts where possible, clean it up, set up 301 redirects and monitor Search Console after launch so your existing rankings carry over.' },
      { q: 'Is a headless CMS good for SEO?', a: 'Yes, when it is built properly. Headless sites are often very fast, which helps rankings. But sitemaps, redirects, metadata fields and server-rendered HTML must be built in deliberately, because they do not come by default. We design these into the content model so editors control SEO for every page.' },
    ],
  },
];
