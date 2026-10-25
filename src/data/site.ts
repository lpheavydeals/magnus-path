// Single source of truth for business details.
// Values marked TODO are placeholders — they MUST match the Google Business Profile exactly before launch.
export const site = {
  name: 'Billion Ecommerce Agency',
  legalName: 'Billion Ecommerce Agency', // TODO: registered company name
  tagline: 'E-commerce websites, ads and SEO — one growth team.',
  url: 'https://www.billionecommerceagency.com', // TODO: live domain
  phone: '+91 80984 25000', // Chennai head office
  phoneHref: 'tel:+918098425000',
  whatsapp: 'https://wa.me/918098425000?text=Hi%20Billion%20Ecommerce%20Agency%2C%20I%27d%20like%20a%20free%20store%20audit',
  email: 'contact@billionecommerceagency.com',
  address: {
    street: 'Street address', // TODO
    locality: 'Chennai',
    region: 'Tamil Nadu',
    postalCode: '600000', // TODO
    country: 'IN',
  },
  hours: 'Mon–Sat, 9:30 AM – 7:00 PM IST',
  // Staffed offices: clients can meet the team at each one. Each must match its own Google Business Profile.
  // `open` feeds openingHoursSpecification (local time); `gbp` = Google Business Profile URL, `map` = Google Maps link.
  offices: [
    { id: 'chennai', label: 'Chennai (head office)', street: 'Street address', locality: 'Chennai', region: 'Tamil Nadu', postalCode: '600000', country: 'IN', countryName: 'India', phone: '+91 80984 25000', phoneHref: 'tel:+918098425000', hours: 'Mon–Sat, 9:30 AM – 7:00 PM IST', open: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:30', closes: '19:00' }, gbp: '#', map: '#' }, // TODO address, Google Business Profile + Maps links
    { id: 'bengaluru', label: 'Bengaluru', street: 'Street address', locality: 'Bengaluru', region: 'Karnataka', postalCode: '560000', country: 'IN', countryName: 'India', phone: '+91 80984 25000', phoneHref: 'tel:+918098425000', hours: 'Mon–Sat, 9:30 AM – 7:00 PM IST', open: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:30', closes: '19:00' }, gbp: '#', map: '#' }, // TODO address, Google Business Profile + Maps links
    { id: 'london', label: 'London', street: '16 Avondale Court', locality: 'London', region: 'England', postalCode: 'E18 2RD', country: 'GB', countryName: 'United Kingdom', phone: '+44 0000 000000', phoneHref: 'tel:+440000000000', hours: 'Mon–Fri, 9:30 AM – 6:00 PM UK time', open: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:30', closes: '18:00' }, gbp: '#', map: '#' }, // TODO phone, Google Business Profile + Maps links
  ],
  // Google PageSpeed Insights API key for the free website checker (free; restrict it to the live domain in Google Cloud).
  psiKey: '', // TODO
  formEndpoint: '#', // TODO: form handler (Web3Forms / Formspree / CRM webhook)
  social: {
    linkedin: '#', // TODO
    instagram: 'https://www.instagram.com/magnus_path_marketing/',
    youtube: '#', // TODO
  },
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string; note?: string }[] };

export const nav: NavItem[] = [
  {
    label: 'Websites',
    href: '/ecommerce-website-development/',
    children: [
      { label: 'E-commerce Website Development', href: '/ecommerce-website-development/', note: 'Custom & platform builds' },
      { label: 'Shopify Development', href: '/shopify-development/', note: 'Stores built to convert' },
      { label: 'WooCommerce Development', href: '/woocommerce-development/', note: 'WordPress e-commerce' },
      { label: 'Corporate Website Development', href: '/corporate-website-development/', note: 'Professional business websites' },
      { label: 'WordPress Website Development', href: '/wordpress-website-development/', note: 'Easy-to-edit websites' },
      { label: 'Website Maintenance', href: '/website-maintenance-services/', note: 'Monthly care plans' },
    ],
  },
  {
    label: 'Ads',
    href: '/performance-marketing/',
    children: [
      { label: 'Performance Marketing', href: '/performance-marketing/', note: 'Meta & Google Ads' },
      { label: 'Amazon Advertising', href: '/amazon-marketing-agency/', note: 'Sponsored Products, Brands, DSP' },
      { label: 'Amazon Account Management', href: '/amazon-account-management/', note: 'Listings, ops, growth' },
      { label: 'Flipkart Account & Ads', href: '/flipkart-account-management/', note: 'PLA & brand ads' },
      { label: 'Quick Commerce Ads', href: '/quick-commerce-marketing/', note: 'Blinkit · Zepto · Instamart' },
      { label: 'Ecommerce PPC', href: '/ecommerce-ppc-agency/', note: 'Google Shopping & PMax' },
      { label: 'Meta & Facebook Ads', href: '/meta-ads-agency/', note: 'Facebook, Instagram, WhatsApp' },
      { label: 'ChatGPT Ads', href: '/chatgpt-ads-agency/', note: 'Ads in ChatGPT answers' },
    ],
  },
  {
    label: 'SEO',
    href: '/ecommerce-seo/',
    children: [
      { label: 'E-commerce SEO', href: '/ecommerce-seo/', note: 'Rank your store on Google' },
      { label: 'Shopify SEO', href: '/shopify-seo/', note: 'Technical + content SEO' },
      { label: 'Amazon SEO', href: '/amazon-seo/', note: 'Listing optimisation' },
      { label: 'SEO Packages', href: '/ecommerce-seo-packages/', note: 'SEO plans' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries/',
    children: [
      { label: 'Manufacturers & Exporters', href: '/b2b-digital-marketing/', note: 'B2B lead generation' },
      { label: 'Fashion & Ethnic Wear', href: '/industries/fashion-apparel/' },
      { label: 'Beauty & Ayurveda', href: '/industries/beauty-ayurveda/' },
      { label: 'Skincare Brands', href: '/industries/skincare-marketing-agency/' },
      { label: 'Haircare Brands', href: '/industries/haircare-marketing-agency/' },
      { label: 'Jewellery Brands', href: '/industries/jewellery-marketing-agency/' },
      { label: 'Food & FMCG', href: '/industries/food-fmcg/' },
      { label: 'Supplements & Nutrition', href: '/industries/supplement-marketing-agency/' },
      { label: 'All industries', href: '/industries/', note: '16 categories we work with' },
    ],
  },
  {
    label: 'Resources',
    href: '/blog/',
    children: [
      { label: 'Case Studies', href: '/case-studies/', note: 'Results from our work' },
      { label: 'Guides & Blog', href: '/blog/', note: 'Websites, ads, SEO, export' },
      { label: 'Free Tools', href: '/tools/', note: 'Store checker & calculators' },
      { label: 'Ecommerce Website Checker', href: '/tools/ecommerce-website-checker/', note: 'Free speed & conversion check' },
      { label: 'Free Resources', href: '/resources/', note: 'Checklists, templates, sale calendar' },
    ],
  },
];

export type Office = (typeof site.offices)[number];
export const officeFor = (city: string): Office =>
  site.offices.find((o) => /bangalore|bengaluru/i.test(city) ? o.id === 'bengaluru' : /london|uk/i.test(city) ? o.id === 'london' : o.id === 'chennai')!;
