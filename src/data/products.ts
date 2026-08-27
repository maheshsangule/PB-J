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
      'https://lh3.googleusercontent.com/aida/AEtjO1XpLIYa-vBKs7qHXqC6rJ7WgmwxyqL2vHAg5KGanCMHzGSbqatm4kShwtbpXyKFq_A8HTgGy3eED1D9cxus9iFnWeXMTGtVj_PsyX8kYbAKbGxFOjKMz1dgNhRMisHgV_pDnlBJAoxB7GrzfqKoqh5_qrwnPj9q2S34vT-JgsuRMRZKNjXyOGuu-65wRT1M3Y0LT5bTlPMDt20uKpLFwN6axRDPhHS-FVOkjiCPmxM2c5p9b7XiXSuCCuk',
      'https://lh3.googleusercontent.com/aida/AEtjO1VSNSVN8Vk0b9u2GqkWEiMSZkww-lz015VCDIBxpl_5WjVFx1TztdN8HqT-nQGVGY0J17K2Zl847ftan-3JEW72YcSD_ayvZ39sD4Es5tTYwZ0GdIEcQz7hQdvC46npSxz_x8i9IHM7NQWZ0bg8Wy9erEvOKKA57S9pFKNtQL-dPXdlAH1iSETyWHVEbTS5OGWr7SHVQ0k9t-DH14zyRNRWB39CSgxcq9Kmm1MjmqDGrGwgvLvhURFDNhs',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAR6iwlbioOcS_ROQgmwvRDyfnTuDv_gTLtqaz7Rfq36zmJ8oPmHFjEQxaISTZB9hNxDhScm3EGbzOtaocbBUWHb9MuiffnIFAQS_WhzF_L664Y1bxghGuucjMYwKlDf5EG4Rhksyw5ZdL3XcMC9o7sulsBPjPJdJhTEf8C1Z4_xhM_VzILps2PSBj2iRjLWfck-z2BddgO_KbDfl9MkOX1RxwZjJbf-W1wNMnIpkq44pTEL74OBVvR'
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWVzsrHs15fZCCpwsUNYFUpW7wzprwxLg7VASDwBcHLJKF7xZKUnUuxgYUoGFmne3u0jk6FB4uUpWYzSttnfLyBFJiaTrKt6Xd1PXIDrw17YzKKdGZLfHzB96OeZRrGK9s74xN76MXI2lmpHYJPiCm5quQ3hEow_lSs435QvPtSBUCKuZe-wpvXnLUnpPoCtSjlMK-qn-nmx8tzOoo2fbDNyE_QB7qnvQTeNuNZoKSOel0u44qf6vh',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBY-2iVYDWZ50NKbtQ_GwupyxQtIL39SgNIUsu8ObY1x9f0n0k2v3q0CWC_WqV306pstDIV9dS-lKffXznSrtu865KKChv2MVVNoeV426fDAEu5GIEIduFxGIcW6FYgQkYQj0uPYkvK-YXD6nv8ruyjoHPVt2LPaZI8XgzJtvU3HXTyyPlNMJiUEdBUGVXsut2fe53LTauLWlVl52vKTMpqeFVSx--3fah4tOq3oHBvRjhyYBUxw5mZ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyREP6ZSZasiX4E4iD_hV9Iu_KsVS68Qbdl995OYMD3GImsrq_uaoHlDyAdHgiU_SIPzU4qkW6JPejPXG90-g_GDNkaNYbjNKkz38OiF75XB36R7JV7tbGFUj0Ahq-UFk4LHf6rRHIn-nanu1-EQiUF-_V1teH1IF7lrSh0cPvzh-8NXcSwRIS1DnhdeXmJkmHsyVMPfneqgSOffR3fyoe1gOenSueOFVFWU0RasYBidKMc2VzizH2'
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDLlIsUAL9D1-EV-UaGQMAEDNsRFqD0SGB3hj6BkS1leiQQB8RuWH30-MloPCoZ3qmn05RWep1kZPmbDB1IFX-jHEnSVlPp4ChIpR8tRBfkjNVURf3bixT5r0KSoIysrZgWDZdAzCaXZPekGo4HY1PjrKscMlQHxKYTh7Nu7zQw6buSA9bpC5RyJ03ElcUwxwrhQN0d8ovwRlrFMKjaqdcEV7tl4a31IX9vNVht2Zx25Bxrvv5hiLph',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBLVRclKxjvN9bczAMQQGStZpJVYl3XKBF5Oy-et_KPfNb1F0ScWBQP1sfPYiMF-xrRsIMjJbwF-612r4LFsTZ3ySrd6NRe_ZDZTokRWrhEokUjdaxjDUeujb7emLjcua88bHZguNrsQKN65mCL4jbd63j6mgTRGynSE6hKxwI2f89jqqSzz0v6HO8-JkIlZYMOoEocE4helKbylK3-VTqdyb0Sb9MkX5IYEHVT8-F4J9AB2sBbVfbJ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAR6iwlbioOcS_ROQgmwvRDyfnTuDv_gTLtqaz7Rfq36zmJ8oPmHFjEQxaISTZB9hNxDhScm3EGbzOtaocbBUWHb9MuiffnIFAQS_WhzF_L664Y1bxghGuucjMYwKlDf5EG4Rhksyw5ZdL3XcMC9o7sulsBPjPJdJhTEf8C1Z4_xhM_VzILps2PSBj2iRjLWfck-z2BddgO_KbDfl9MkOX1RxwZjJbf-W1wNMnIpkq44pTEL74OBVvR'
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALMwmxfJ2D0kcRxq2GjPHYJOWHoVpAX2z4K4bzhEChZfvXyPswjHCorIUZ1T6Q4_dsZljkMZwB-5bJDvBhj0TG3heiYBvptZHds6EKa33CuR8I3Hifv0DSn9KJdgduExJDs6bBDBKtvvU9EfdxsdN0uVze7uIlQLX_ELaI_t-RKGBmOOqYWeTewWVIRdI4WGEx_Q8uMs80vNpysR43B8w-HDJS0XBnWy7zdktw4_6MbHKkenSoDFL9',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDQhXoAQCQlFHiDRNy0W2ZUBPn4curzVchhrAhQEJZ0m8_-pzrAS2Z78BEVZ2BOsP4M_TKP5H6lPRuzBevCnZ05_XkHg0r8ioVelcXrUmm5dtO0FybopfEEMrnvqUeJU61deT_ocFx2LRi8L2XVi0XC6Y1tLSb3YmdFULH2_BONj2pBich6VZi8rFTI2ilXhCrG66p5H5AUNyPQwaEAIcXC6zeee0NKeRtBGLpNO-OOJxG4_LzCNMYv',
      'https://lh3.googleusercontent.com/aida/AEtjO1Xxw_VtAmdNlLxs9h601mxsRO_6DqUHGb07MjIbplfj9mG4YTQK2zHayqeMCrDf013yOj1OvpVQYYEiTWgbqiUZo0WTgRq2Wf-IBgpCKImmfrvKsouMkvxX59D70fnQiqPmWoAfDIwRjYMXw_tcSWtmIHAtPEH_yFdpQrqWAsXxjXd7-XcU_lHZG4_QToyEW8WSOChuTPmAT-PmWtfvGYzJ9olSmEwOrWz9VsbNApbbQqgFSkyrFcO0RyA'
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
      'https://lh3.googleusercontent.com/aida/AEtjO1VBzzyZCfo4lCS5N2khs4b-cP_6b56laOEEm2WuhPDM2xLRyE6Oqdlo-zKY50Vu1IHNVWjrh1ZO-QNIZE5-GwQ6_55awGi-HHT5mwvEMJvuDoTMu7Qgem_C5MPDWyqS5IIDSmV9p6nh7_N0RY0mgmDcnhmFnZ-_VjCTX6cxK8dPD2M35oY7JB8mQGom8XnsiHpPt9J6UdKFPHnY0wnfG1JPUalI3kPbMugl9ym9RxVZDyhnsMk2D_88uXg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAEVa9dBQjHxO67hltRTm_WUOvrIujSlXeUld9jjJX3ncAFS8BPkguyqJcc3rR2LD4jCj3cbVp7UEAMJSm0HLsTeVqUnBB_Ly42FgDcL2ssvpATY5AuzWD0tmmjU06NTix-4jjZ2nmes9uzGgh7OopKGomeNg0oZTZmJeKlM-gFOtNtvfNBIDjSdpP-GOYWBUTMQcKqspO_br_Jq-0-ixBGOw3vYycOBE-VKAgYt_vnc1b9UHUJzK49'
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpe-sDs_e1hgySzCStPJ_N6YwHgDfux8r2zpCBX27pb5UJAO6br93ptuFwEaqo1B8EzdY91NMNZVIc62qukvZNFsFrCrTUIXto_5idfbPHx94EeeSrdZuaI0S94ohjokP1Q_DvWMXur_16YORfOhb-N5sJEdjtU5mU64p8zKpKrF3ZjdWlyyVYlm8Jc5YqgovLexoq9CgXOvR93UD7vxc2Ka6ekwvnH3mkCelSYgpzHnfmrIEenmX4',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSbxIyWaLenbFZs3kgdThq-LdkvgpGSruRcmtXWqpWSaaCWYhhY2kg0fChvc1gJ225Xkz0k2rYWz4c2OF2a1J545Hz8nb2a1jjURbH2bhUDmmRDdbkBBY3xmH6xDcmoTbsfLO419vy3HqZ01cSMPyUJY2Q4SfzggDvmZgQVTWso33UaVbn5au3MxzY_1yoqc5yyAAU4KnFx8yfxznwRRdVgJG1vRW2c3k-QFBwsPRG8d9ty5EkyAnU'
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
      'https://lh3.googleusercontent.com/aida/AEtjO1UtM-D7P0fFaTPQ9xdbpctmfmc6SofyoY1TNkDJPz-qzsrnOerPPbCI7KR44i_w9eJMW5Rue5ogvTJ7vV6KYE30V_AiAxvZXtRUTpysrp7RpZMwsl89dZZHLBsvsE5uwFgXDr-uMIX_-6oyq6SmhnMzZCMFAsqKfnJlC-IxZvf-xJsDFxA5j4P_NkcdNz6GdgFhtLT52pOKel19k4_WQPLXEtHRdr0Qe38J9LFiYKYRw_lT-p83UlqllEM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDsqCfnIoAyD47B90gZHCWPF6DOECYoAMDNdFwrUn1n_J_IusY5A3AGPyBUui_XfL9DczvAUyWbHxc74114mVkN4HUzizGVPh53CTz_xREkUQ6OP0WHodarzd5VN56jmT-XPNwomHCpykb7o8FbOByqQCU0dVNdw3V0-2zHWZkbt4EXBkJ4zXLIw_sRnruyfgBRS9NgTiOYp4guI0QM3nJgqdAULBQSOg1zb2sFbUFr4WHceno7s8Ep'
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1i5v5FgJ6BS18zyMfkmGrY9BNARE0M8G4f91Oo6Vwc1tZl--SzzvE2_1tx0a8-Pv234nULU7pSJIwtfEOti2b82D04rZhy0nGSyA6LNv1Y-HhdTBz3IoNXXCo57G3Hxqw2cxF4vhgg68xviEXj2y8eQrI50dWnaUxocxRYI7d51e0upCBshdHeoLZCclUZFsixFYJMIna-7RQqL46DZBJVqW7WbMC6Mo84L77CdpvcUHhn-HeqozP',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSbxIyWaLenbFZs3kgdThq-LdkvgpGSruRcmtXWqpWSaaCWYhhY2kg0fChvc1gJ225Xkz0k2rYWz4c2OF2a1J545Hz8nb2a1jjURbH2bhUDmmRDdbkBBY3xmH6xDcmoTbsfLO419vy3HqZ01cSMPyUJY2Q4SfzggDvmZgQVTWso33UaVbn5au3MxzY_1yoqc5yyAAU4KnFx8yfxznwRRdVgJG1vRW2c3k-QFBwsPRG8d9ty5EkyAnU'
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1i5v5FgJ6BS18zyMfkmGrY9BNARE0M8G4f91Oo6Vwc1tZl--SzzvE2_1tx0a8-Pv234nULU7pSJIwtfEOti2b82D04rZhy0nGSyA6LNv1Y-HhdTBz3IoNXXCo57G3Hxqw2cxF4vhgg68xviEXj2y8eQrI50dWnaUxocxRYI7d51e0upCBshdHeoLZCclUZFsixFYJMIna-7RQqL46DZBJVqW7WbMC6Mo84L77CdpvcUHhn-HeqozP'
  },
  {
    id: 'ctl-2',
    title: 'Minimalist Leather Belt',
    price: 650,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC31RuPtmtMG-xDIyl7iGBGLjUGIz65bjcrrpa1SUaUyD2Zz9m-tnhmuFA0rv8psOtMG6ch6Xpyf1vfyOH7Wjjmn_E-E9UHkGje6fRfXIsQm56ZTpF1jRUqnQhn84ReRKbnQXwAwxkCCLv22oyrp55Cj6FM15btQXo_S01i1HXMFuRs3Hr4TebnnN0DymXaN6uaEihSQtDh2SQC6Q1Zqy3JuUfRXz3yiUaPAvDN00bLiZAfYa8apfhe'
  },
  {
    id: 'ctl-3',
    title: 'Classic Leather Oxfords',
    price: 2400,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDP8feDL2frzGuC09Ep4kbiEVtWttfSbCH2bq4HuICG2OkkzSPnqnWMnzRQICx19G1uozIAXGJMSw2my579tGVJCanrKfO2ujd4d9CwcaoyTVrH_fUj1iAteyhnIpTO6bz9e90Nn4YxJxMNvLzTfnG0i6AtTXcNkm9X9ATtdmb0en-xXxQvZM_Sd4FeQh9puJWKZkDfJij1SuySU44L2Lc9vZifQwXzCdUottsaymLvyhSD0aqLAqWs'
  }
];
