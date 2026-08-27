import { Product } from '../types';

export const productsData: Product[] = [
  {
    id: 'pb-01',
    title: 'The Classic Oxford Shirt',
    brand: 'PB & J',
    category: 'shirts',
    price: 1299,
    originalPrice: 1699,
    discountPercentage: 24,
    badge: 'New Arrival',
    sku: 'PBJ-SH-OXF-001',
    fit: 'Tailored',
    viewersCountToday: 48,
    rating: 4.9,
    reviewsCount: 38,
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: [
      { name: 'Maroon Crest Stripe', hex: '#632c37' },
      { name: 'Classic Crisp White', hex: '#FFFFFF' },
      { name: 'Sky Poplin Blue', hex: '#B8D0EB' }
    ],
    variants: [
      { id: 'v1', size: 'XS', inStock: true, inventoryCount: 5 },
      { id: 'v2', size: 'S', inStock: true, inventoryCount: 12 },
      { id: 'v3', size: 'M', inStock: true, inventoryCount: 8 },
      { id: 'v4', size: 'L', inStock: true, inventoryCount: 14 },
      { id: 'v5', size: 'XL', inStock: true, inventoryCount: 3 },
      { id: 'v6', size: 'XXL', inStock: false, inventoryCount: 0 }
    ],
    description:
      'A timeless staple. Tailored from premium, breathable organic 80s 2-ply cotton, this Oxford shirt offers a relaxed yet refined fit. Features include a classic button-down collar, single chest pocket, and a curved hem perfect for tucking in or leaving out.',
    fabricDetails:
      '100% Long-Staple Egyptian Cotton (80s 2-ply). Natural matte weave offering high breathability, thermal comfort in tropical climates, and anti-crease finishing.',
    careInstructions: [
      'Machine wash cold (30°C) with like colors',
      'Use gentle cycle with mild organic detergent',
      'Do not bleach or tumble dry high',
      'Warm iron or steam while slightly damp'
    ],
    shippingInfo:
      'Free express courier across India on orders above ₹1,599. Dispatches within 24-48 hours. Easy 7-day doorstep size exchange & returns policy.'
  },
  {
    id: 'pb-02',
    title: 'The Midnight Silk Pyjama Shirt',
    brand: 'PB & J',
    category: 'pyjamas',
    price: 1499,
    originalPrice: 1999,
    discountPercentage: 25,
    badge: 'Signature',
    sku: 'PBJ-PYJ-SLK-002',
    fit: 'Relaxed',
    viewersCountToday: 62,
    rating: 5.0,
    reviewsCount: 54,
    images: [
      'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: [
      { name: 'Midnight Black', hex: '#111111' },
      { name: 'Pearl Ivory', hex: '#F5F5F0' },
      { name: 'Deep Olive', hex: '#4A4A32' }
    ],
    variants: [
      { id: 'v21', size: 'XS', inStock: true, inventoryCount: 4 },
      { id: 'v22', size: 'S', inStock: true, inventoryCount: 15 },
      { id: 'v23', size: 'M', inStock: true, inventoryCount: 11 },
      { id: 'v24', size: 'L', inStock: false, inventoryCount: 0 },
      { id: 'v25', size: 'XL', inStock: true, inventoryCount: 2 },
      { id: 'v26', size: 'XXL', inStock: false, inventoryCount: 0 }
    ],
    description:
      'Crafted from 100% premium Mulberry silk satin, the Midnight Pyjama Shirt offers an unparalleled combination of fluid drape, featherlight skin feel, and architectural collar structure. Transitions effortlessly from luxury bedroom lounging to bespoke evening layering.',
    fabricDetails:
      '100% 22-Momme Grade 6A Mulberry Silk. Naturally hypoallergenic, temperature-regulating, and exceptionally soft with lustrous sheen.',
    careInstructions: [
      'Dry clean recommended or hand wash cold with silk wash',
      'Never wring; gently press in a dry towel',
      'Dry in shade away from direct sunlight',
      'Cool iron on reverse side using press cloth'
    ],
    shippingInfo:
      'Delivered in signature PB & J luxury embossed hard box. Complimentary express courier dispatch within 24 hours.'
  },
  {
    id: 'pb-03',
    title: 'The Essential Pure Linen Shirt',
    brand: 'PB & J',
    category: 'shirts',
    price: 899,
    originalPrice: 1798,
    discountPercentage: 50,
    badge: 'Sale',
    sku: 'PBJ-SH-LIN-003',
    fit: 'Relaxed',
    viewersCountToday: 89,
    rating: 4.8,
    reviewsCount: 64,
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: [
      { name: 'Pure White Linen', hex: '#FAF9F6' },
      { name: 'Sand Khaki', hex: '#D2B48C' },
      { name: 'Sage Green', hex: '#8A9A86' }
    ],
    variants: [
      { id: 'v31', size: 'XS', inStock: true, inventoryCount: 3 },
      { id: 'v32', size: 'S', inStock: true, inventoryCount: 9 },
      { id: 'v33', size: 'M', inStock: true, inventoryCount: 16 },
      { id: 'v34', size: 'L', inStock: false, inventoryCount: 0 },
      { id: 'v35', size: 'XL', inStock: true, inventoryCount: 4 },
      { id: 'v36', size: 'XXL', inStock: false, inventoryCount: 0 }
    ],
    description:
      'Woven from 100% certified French flax linen, this shirt is designed with a relaxed resort silhouette, camp collar, and mother-of-pearl buttons. Naturally aerating with relaxed drape that softens with every wash.',
    fabricDetails:
      '100% Normandy French Flax Linen (145 GSM). Enzyme pre-washed for velvety hand-feel without stiffness.',
    careInstructions: [
      'Machine wash gentle 30°C',
      'Hang dry in shade to preserve linen fiber longevity',
      'Warm steam iron if a crisp look is desired, or leave naturally crinkled'
    ],
    shippingInfo:
      'Flat 100 off automatically applied at checkout for orders above ₹1,599. Same-day dispatch.'
  },
  {
    id: 'pb-04',
    title: 'Aero Weave Premium Cotton Boxers',
    brand: 'PB & J',
    category: 'boxers',
    price: 399,
    originalPrice: 999,
    discountPercentage: 60,
    badge: 'Best Seller',
    sku: 'PBJ-BX-AER-004',
    fit: 'Relaxed',
    viewersCountToday: 112,
    rating: 4.9,
    reviewsCount: 120,
    images: [
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: [
      { name: 'Charcoal Minimalist', hex: '#2B2B2B' },
      { name: 'Chalk White', hex: '#F0F0F0' },
      { name: 'Navy Tartan Check', hex: '#1C2833' }
    ],
    variants: [
      { id: 'v41', size: 'S', inStock: true, inventoryCount: 20 },
      { id: 'v42', size: 'M', inStock: true, inventoryCount: 35 },
      { id: 'v43', size: 'L', inStock: true, inventoryCount: 18 },
      { id: 'v44', size: 'XL', inStock: true, inventoryCount: 14 },
      { id: 'v45', size: 'XXL', inStock: true, inventoryCount: 6 }
    ],
    description:
      'Engineered with micro-ventilated Aero Weave cotton and an anti-roll microfiber concealed waistband. Zero-pinch leg openings and a button-fly closure engineered for all-day seamless comfort.',
    fabricDetails:
      '100% Super-Combed Mercerized Cotton (60s count). Breathable weave with antimicrobial finish.',
    careInstructions: [
      'Machine wash warm 40°C',
      'Tumble dry low or air dry',
      'Do not dry clean'
    ],
    shippingInfo:
      'Packaged in reusable matte zip-pouch. Hygienically sealed. Non-returnable once opened for intimate hygiene, size exchange available prior to opening.'
  },
  {
    id: 'pb-05',
    title: 'Redwood Checks Cotton Pyjamas',
    brand: 'PB & J',
    category: 'pyjamas',
    price: 799,
    originalPrice: 1299,
    discountPercentage: 38,
    badge: 'Best Seller',
    sku: 'PBJ-PYJ-RED-005',
    fit: 'Relaxed',
    viewersCountToday: 41,
    rating: 4.7,
    reviewsCount: 29,
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: [
      { name: 'Redwood Madras Check', hex: '#7E2828' },
      { name: 'Olive Shadow Check', hex: '#4A5D23' }
    ],
    variants: [
      { id: 'v51', size: 'S', inStock: true, inventoryCount: 8 },
      { id: 'v52', size: 'M', inStock: true, inventoryCount: 14 },
      { id: 'v53', size: 'L', inStock: true, inventoryCount: 9 },
      { id: 'v54', size: 'XL', inStock: true, inventoryCount: 5 }
    ],
    description:
      'Classic yarn-dyed checks tailored from ultra-soft brushed cotton twill. Features deep dual side pockets, drawstring waistband, and piping accents along the hem.',
    fabricDetails: '100% Brushed Cotton Twill. Ultra-soft flannel touch with breathable air channels.',
    careInstructions: ['Machine wash warm', 'Medium iron', 'Line dry recommended'],
    shippingInfo: 'Standard 2-4 day shipping across India. Free shipping above ₹1,599.'
  },
  {
    id: 'pb-06',
    title: 'Architectural Linen Lounge Pants',
    brand: 'PB & J',
    category: 'lounge-pants',
    price: 1199,
    originalPrice: 1599,
    discountPercentage: 25,
    badge: 'New Arrival',
    sku: 'PBJ-LP-LIN-006',
    fit: 'Relaxed',
    viewersCountToday: 35,
    rating: 4.9,
    reviewsCount: 22,
    images: [
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: [
      { name: 'Oatmeal Natural', hex: '#D7D0C0' },
      { name: 'Pitch Black', hex: '#1A1A1A' },
      { name: 'Deep Olive', hex: '#4A4A32' }
    ],
    variants: [
      { id: 'v61', size: 'S', inStock: true, inventoryCount: 6 },
      { id: 'v62', size: 'M', inStock: true, inventoryCount: 12 },
      { id: 'v63', size: 'L', inStock: true, inventoryCount: 15 },
      { id: 'v64', size: 'XL', inStock: false, inventoryCount: 0 }
    ],
    description:
      'Designed with structural pleats, an elasticated waistband with concealed drawstring, and deep slash pockets. Tailored for effortless transition from home studio to casual urban dinner.',
    fabricDetails: '60% French Linen, 40% Organic Cotton Blend. Structured drape with breathability.',
    careInstructions: ['Machine wash cold', 'Hang dry in shade', 'Steam iron as required'],
    shippingInfo: 'Fast shipping across Tier 1 & Tier 2 cities in India.'
  },
  {
    id: 'pb-07',
    title: 'Mauve Grid Checks Tailored Shirt',
    brand: 'PB & J',
    category: 'shirts',
    price: 649,
    originalPrice: 1299,
    discountPercentage: 50,
    badge: 'Sale',
    sku: 'PBJ-SH-MVG-007',
    fit: 'Tailored',
    viewersCountToday: 53,
    rating: 4.6,
    reviewsCount: 19,
    images: [
      'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: [
      { name: 'Mauve Slate Check', hex: '#8B7D82' },
      { name: 'Charcoal Micro Grid', hex: '#3C3C3C' }
    ],
    variants: [
      { id: 'v71', size: 'S', inStock: true, inventoryCount: 5 },
      { id: 'v72', size: 'M', inStock: true, inventoryCount: 10 },
      { id: 'v73', size: 'L', inStock: true, inventoryCount: 7 },
      { id: 'v74', size: 'XL', inStock: false, inventoryCount: 0 }
    ],
    description:
      'Subtle geometric grid pattern woven on high-density compact cotton yarn. Features a semi-spread collar, mother-of-pearl buttons, and structured single-button cuffs.',
    fabricDetails: '100% Compact Cotton (70s count). Smooth hand-feel with light wrinkle-resistance.',
    careInstructions: ['Machine wash cold', 'Tumble dry low', 'Warm iron'],
    shippingInfo: 'Ships within 24 hours. COD and prepaid options available.'
  },
  {
    id: 'pb-08',
    title: 'Midnight Structured Cotton Lounge Pant',
    brand: 'PB & J',
    category: 'lounge-pants',
    price: 999,
    originalPrice: 1499,
    discountPercentage: 33,
    badge: 'Best Seller',
    sku: 'PBJ-LP-MID-008',
    fit: 'Tailored',
    viewersCountToday: 29,
    rating: 4.8,
    reviewsCount: 31,
    images: [
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=1000'
    ],
    colors: [
      { name: 'Midnight Black', hex: '#111111' },
      { name: 'Slate Heather', hex: '#4F5D65' }
    ],
    variants: [
      { id: 'v81', size: 'S', inStock: true, inventoryCount: 9 },
      { id: 'v82', size: 'M', inStock: true, inventoryCount: 18 },
      { id: 'v83', size: 'L', inStock: true, inventoryCount: 12 },
      { id: 'v84', size: 'XL', inStock: true, inventoryCount: 4 }
    ],
    description:
      'Heavyweight 280 GSM organic french terry lounge pant with tapered leg, ribbed cuffs, and matte black metal hardware on drawstring.',
    fabricDetails: '100% Organic GOTS Certified Cotton French Terry. Pre-shrunk and double bio-washed.',
    careInstructions: ['Machine wash cold with darks', 'Air dry in shade', 'Warm iron on reverse'],
    shippingInfo: 'Fast dispatch from Mumbai warehouse.'
  }
];

export const completeTheLookItems = [
  {
    id: 'ctl-1',
    title: 'Tailored Wool Trousers',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'ctl-2',
    title: 'Minimalist Leather Belt',
    price: 650,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'ctl-3',
    title: 'Classic Leather Oxfords',
    price: 2400,
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=1000'
  }
];
