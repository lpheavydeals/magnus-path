// Single source of truth for business details.
// Values marked TODO are placeholders — they MUST match the Google Business Profile exactly before launch.
export const site = {
  name: 'Magnus Path',
  legalName: 'Magnus Path', // TODO: registered company name
  tagline: 'E-commerce websites, ads and SEO — one growth team.',
  url: 'https://www.magnuspath.com', // TODO: live domain
  phone: '+91 00000 00000', // TODO
  phoneHref: 'tel:+910000000000', // TODO
  whatsapp: 'https://wa.me/910000000000?text=Hi%20Magnus%20Path%2C%20I%27d%20like%20a%20free%20store%20audit', // TODO
  email: 'hello@magnuspath.com', // TODO
  address: {
    street: 'Street address', // TODO
    locality: 'Chennai',
    region: 'Tamil Nadu',
    postalCode: '600000', // TODO
    country: 'IN',
  },
  hours: 'Mon–Sat, 9:30 AM – 7:00 PM IST',
  formEndpoint: '#', // TODO: form handler (Web3Forms / Formspree / CRM webhook)
  social: {
    linkedin: '#', // TODO
    instagram: '#', // TODO
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
    ],
  },
  {
    label: 'SEO',
    href: '/ecommerce-seo/',
    children: [
      { label: 'E-commerce SEO', href: '/ecommerce-seo/', note: 'Rank your store on Google' },
      { label: 'Shopify SEO', href: '/shopify-seo/', note: 'Technical + content SEO' },
      { label: 'Amazon SEO', href: '/amazon-seo/', note: 'Listing optimisation' },
      { label: 'SEO Packages', href: '/ecommerce-seo-packages/', note: 'Plans & pricing' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries/',
    children: [
      { label: 'Manufacturers & Exporters', href: '/b2b-digital-marketing/', note: 'B2B lead generation' },
      { label: 'Fashion & Ethnic Wear', href: '/industries/fashion-apparel/' },
      { label: 'Beauty & Ayurveda', href: '/industries/beauty-ayurveda/' },
      { label: 'Food & FMCG', href: '/industries/food-fmcg/' },
    ],
  },
  {
    label: 'Resources',
    href: '/blog/',
    children: [
      { label: 'Case Studies', href: '/case-studies/', note: 'Results from our work' },
      { label: 'Guides & Blog', href: '/blog/', note: 'Websites, ads, SEO, export' },
      { label: 'Free Tools', href: '/tools/', note: 'ROAS & profit calculators' },
    ],
  },
  { label: 'Pricing', href: '/pricing/' },
];
