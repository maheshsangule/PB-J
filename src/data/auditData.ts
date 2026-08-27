import { PageAudit } from '../types';

export const pageAudits: PageAudit[] = [
  {
    id: 'audit-home',
    pageName: 'Home Page',
    urlPath: 'https://pbandj.co.in/',
    category: 'Core Landings',
    overallScore: 5.8,
    summary:
      'The current homepage lacks immediate value proposition clarity, premium visual hierarchy, and category-first discovery pathways. Hero banners suffer from text legibility issues and lack dynamic CTA triggers. Critical CRO elements like social proof, real customer reviews, and category bento navigation are missing.',
    issues: {
      currentUXIssues: [
        'Generic hero banner with unoptimized text overlay contrast on mobile screens',
        'Absence of category visual discovery grid above the fold (users must scroll past large uninformative banners)',
        'Monotonous card spacing with generic low-contrast typography lacking brand personality',
        'No direct "Quick Add" capability on homepage featured rails, requiring 3+ unnecessary page hops'
      ],
      conversionBottlenecks: [
        'No clear promotional value callout (e.g., "Flat 100 off above 1599") pinned or emphasized near decision areas',
        'Weak social proof signals; zero visible customer testimonials or verified buyer counts',
        'Lack of urgency or scarcity indicators on limited signature collections',
        'Slow slide transition speeds causing high bounce rate on mobile entry (estimated >55% bounce)'
      ],
      mobileExperienceProblems: [
        'Hero banner images get cropped awkwardly without responsive art direction (1:1 vs 16:9)',
        'Horizontal scroll carousels lack visual peek indicator (users do not realize more items exist)',
        'Touch targets for announcement bar and slide arrows are smaller than the 44px minimum touch standard'
      ],
      desktopExperienceProblems: [
        'Excessive empty whitespace stretching layouts on ultra-wide screens (>1440px)',
        'No desktop mega-menu hover preview for instant category discovery',
        'Footer spans 6+ vertical blocks with disorganized duplicate links'
      ],
      shopifyThemeLimitations: [
        'Default Dawn / Debut theme grid lacks custom aspect-ratio image preservation and secondary image hover swap',
        'Bloated render-blocking JS apps from previous uninstalled review/popup widgets slowing down LCP to 3.8s'
      ],
      croOpportunities: [
        'Add a curated "Category Bento Grid" (Shirts, Pyjamas, Boxers, Lounge Pants) with direct product count badges',
        'Introduce a dual CTA on Hero: "Shop New Arrivals" and "Explore Best Sellers"',
        'Implement dynamic sticky announcement banner with real-time countdown / threshold tracker'
      ],
      navigationIssues: [
        'Header logo takes too much vertical viewport height on mobile header (eating ~18% of screen height)',
        'Menu drawer does not showcase visual thumbnails for high-traffic categories'
      ],
      sizeSelectionIssues: [
        'No ability to filter home featured collections by available size directly'
      ],
      productDiscoveryIssues: [
        'Search bar hidden behind small icon without predictive search suggestions or trending tags'
      ],
      performanceRisks: [
        'Heavy uncompressed PNGs in hero section causing LCP degradation (>4.1s on 4G networks)'
      ]
    },
    wireframeSuggestions: [
      'Top: Slim 32px Announcement bar with auto-scrolling USP messages (Free Express Delivery | Flat 100 Off)',
      'Header: Fixed 64px compact bar with Logo, Mega Nav with visual category drops, and Bag counter',
      'Hero: Editorial split visual (55% photo / 45% typographic value hook) with sharp 0px contrast CTA button',
      'Category Bento: 4 visual portal cards with clean typography and hover zoom effect',
      'Curated Carousel: Best Sellers with Quick Size selector chips directly on product cards'
    ],
    benchmarksComparison: {
      rareRabbit: 'Employs crisp editorial grids, micro-interactions on hover, and high-density product discovery.',
      tedBaker: 'Utilizes sophisticated serif headlines, clear brand storytelling tabs, and subtle luxury neutral tones.',
      vahro: 'Pioneers ultra-fast mobile navigation with thumb-friendly category chips and bottom action bars.'
    }
  },
  {
    id: 'audit-shirts',
    pageName: 'Shirts Collection & PLP',
    urlPath: 'https://pbandj.co.in/collections/shirts',
    category: 'Collection Pages',
    overallScore: 6.1,
    summary:
      'The Shirts collection page suffers from sluggish filtering, lack of variant size availability at a glance, missing secondary angle hover images, and non-optimized mobile 2-column density. Users frequently encounter out-of-stock sizes only after clicking into the PDP.',
    issues: {
      currentUXIssues: [
        'Product cards only show a single front-facing image with no secondary back/detail shot on hover',
        'Size availability is completely hidden from collection view (customers waste clicks on sold-out sizes)',
        'No "Quick Add" or "Quick View" drawer for fast mobile cart additions'
      ],
      conversionBottlenecks: [
        'High drop-off rate between Collection Page and PDP (users fatigue after clicking 4 items with missing sizes)',
        'Discount badges are small, muted, and lack high-contrast urgency (e.g., 50% OFF)',
        'No sticky filter/sort bar on mobile while scrolling through long product lists'
      ],
      mobileExperienceProblems: [
        'Filter drawer takes full screen with clunky page reloads instead of instant asynchronous AJAX updates',
        'Product titles wrap awkwardly over 3 lines due to non-standard line clamps'
      ],
      desktopExperienceProblems: [
        'Sidebar filter occupies excessive width (320px) compressing 4-column product grid to awkward aspect ratios',
        'Sort dropdown requires 2 separate clicks to apply rather than instantaneous onChange trigger'
      ],
      shopifyThemeLimitations: [
        'Liquid collection loop loads all images synchronously without native browser lazyloading tags',
        'Faceted filtering triggers complete DOM re-render rather than Section Rendering API calls'
      ],
      croOpportunities: [
        'Add hover-activated Quick Size chips (S, M, L, XL) directly on the product card for 1-click cart addition',
        'Show real-time badge counters: "Only 3 left in Size M" or "Best Seller"',
        'Add Color Swatch preview dots that swap the card thumbnail dynamically'
      ],
      navigationIssues: [
        'Breadcrumb navigation is missing, leaving users stranded when navigating deep into sub-categories'
      ],
      sizeSelectionIssues: [
        'Inability to multi-select sizes (e.g. show items available in either S OR M) in standard theme filter'
      ],
      productDiscoveryIssues: [
        'No "Fit" filter (Tailored vs Relaxed vs Oversized) which is the #1 purchase criterion for shirt buyers'
      ],
      performanceRisks: [
        'Pagination requires complete page reload, flushing browser cache and resetting scroll position'
      ]
    },
    wireframeSuggestions: [
      'Top Sticky Toolbar: Filter Drawer toggle, Active Filters Chips, Grid Density Switcher (2 vs 4 cols), Sort Dropdown',
      'Card Layout: Aspect 3:4 portrait photo, subtle Badge top-left, Wishlist top-right, Hover image swap, Slide-up Quick Size bar on hover',
      'Card Typography: Brand PB & J, Product Title (1 line clamp), Price in bold with strike-through and discount percentage pill'
    ],
    benchmarksComparison: {
      rareRabbit: 'Shows instant size chips on hover with immediate stock indicators.',
      tedBaker: 'Presents fabric compositions and colorways clearly under each thumbnail.',
      vahro: 'Uses smooth infinite scroll or AJAX "Load More" with preserved scroll memory.'
    }
  },
  {
    id: 'audit-pdp',
    pageName: 'Product Detail Page (PDP)',
    urlPath: 'https://pbandj.co.in/products/*',
    category: 'Product Experience',
    overallScore: 5.4,
    summary:
      'The PDP is the largest revenue leak in the store. Key conversion blockers include a confusing size selection flow with no validation feedback, buried size chart link, lack of fabric close-ups, weak Buy Now execution, absent urgency triggers, and no sticky Add-to-Cart bar on mobile devices.',
    issues: {
      currentUXIssues: [
        'Size chart opens an unreadable, non-responsive generic image pop-up with tiny text requiring pinch-to-zoom',
        'Users can click "Add to Bag" without selecting a size, resulting in a generic silent error message',
        'Sold out sizes look identical to in-stock sizes until clicked (causing high friction)',
        'Product description is a monolithic block of unformatted text rather than organized structured accordions'
      ],
      conversionBottlenecks: [
        'Primary CTA "Add to Bag" is pushed below the fold on most mobile screens (>68% of Indian traffic)',
        'Secondary CTA "Buy It Now" redirects through clunky cart hops rather than direct express checkout',
        'No live viewers count or urgency indicators ("45 people viewed this today | 3 left in stock")',
        'No clear return & exchange policy summary visible next to the Add to Bag button (sparks cart abandonment)'
      ],
      mobileExperienceProblems: [
        'Thumbnails are vertical and push buy box down, or slider dots are invisible against white backgrounds',
        'When user scrolls past buy box, there is NO sticky bottom bar to capture intent',
        'Pincode delivery checker is slow and unreliable'
      ],
      desktopExperienceProblems: [
        'Image gallery uses rigid single-column stack that creates 2000px of dead blank whitespace on right column',
        'Zoom inspector is jerky and crops outside the viewport boundary'
      ],
      shopifyThemeLimitations: [
        'Liquid variant selector uses deprecated select dropdowns instead of modern radio pill buttons',
        'Cart drawer does not open automatically upon Add-to-Cart event'
      ],
      croOpportunities: [
        'Engineered Size Selector with strikethrough for out-of-stock and active high-contrast border state',
        'Interactive Size Guide Drawer with Inch / CM conversion tabs and garment measuring visual guide',
        'Sticky Bottom Add to Bag Bar on mobile with dynamic selected size and instant 1-tap checkout',
        '"Complete The Look" bundled cross-sell widget boosting AOV by an estimated +22%'
      ],
      navigationIssues: [
        'Back to category button is missing, forcing browser back button which loses scroll position'
      ],
      sizeSelectionIssues: [
        'No model height/wearing size reference (e.g., "Model is 6\'1 wearing Size M")',
        'No interactive fit predictor based on chest/waist measurements'
      ],
      productDiscoveryIssues: [
        'Related products module shows random inventory rather than curated complementary items'
      ],
      performanceRisks: [
        'Unoptimized 3000px photo uploads without WebP / AVIF responsive srcset decoding'
      ]
    },
    wireframeSuggestions: [
      'Desktop: 2-column layout (55% sticky thumbnail + main gallery, 45% purchase column with fixed scrolling)',
      'Mobile: Full-width swipeable carousel with active indicator pills and fullscreen zoom tap',
      'Buy Box: Title (Caslon serif) -> Price + Discount Pill -> Urgency Social Proof -> Color Swatches -> Size Pills -> Interactive Size Guide Trigger -> Primary Black Add to Bag -> Secondary Outline Buy Now -> 3 Key Trust USPs -> Accordions'
    ],
    benchmarksComparison: {
      rareRabbit: 'Features clean sticky buy bar, model specifications, and cross-sell outfit builder.',
      tedBaker: 'Excels with refined typography, bespoke fabric story accordion, and clear care guides.',
      vahro: 'Optimizes mobile thumb zone with instantaneous 1-click bottom sheet checkout.'
    }
  },
  {
    id: 'audit-pyjamas-boxers-lounge',
    pageName: 'Pyjamas, Boxers & Lounge Pants',
    urlPath: 'https://pbandj.co.in/collections/pyjamas',
    category: 'Category Specifics',
    overallScore: 5.9,
    summary:
      'Loungewear and intimate apparel categories (Boxers, Pyjamas, Lounge Pants) have distinct sizing and hygiene return considerations that the current store fails to address. Lack of multi-pack bundles, waistband specifications, and hygiene guarantees suppresses average order value.',
    issues: {
      currentUXIssues: [
        'Boxers lack bundle & save tiers (e.g. Pack of 3 / Pack of 5) which is the industry standard AOV driver',
        'Pyjamas and Lounge Pants lack inseam and waistband stretch measurements in size chart',
        'No visual representation of waistband construction (anti-roll elastic, drawstrings, button fly)'
      ],
      conversionBottlenecks: [
        'AOV is low in Boxers category (users buy 1 unit at ₹399 instead of 3-packs at ₹999)',
        'Customers hesitate on loungewear fits due to vague size descriptions'
      ],
      mobileExperienceProblems: [
        'Lack of fabric touch/feel zoom detail on silk vs cotton textures'
      ],
      desktopExperienceProblems: [
        'Missing side-by-side comparison between Silk Pyjamas and Cotton Pyjamas'
      ],
      shopifyThemeLimitations: [
        'Cannot bundle multiple variant sizes without custom Liquid bundle logic or Shopify Scripts/Functions'
      ],
      croOpportunities: [
        'Implement "Buy 2 Get 10% Off | Buy 3 Get 15% Off" volume tiered pricing widget',
        'Add dedicated Loungewear Size Matrix with waist stretch elasticity ranges',
        'Highlight hygiene sealed packaging & safe 7-day exchange guarantee'
      ],
      navigationIssues: [
        'Loungewear categories are buried under generic menus instead of highlighted lifestyle collections'
      ],
      sizeSelectionIssues: [
        'No waist size conversion guide (e.g., S=28-30, M=31-33, L=34-36, XL=37-39)'
      ],
      productDiscoveryIssues: [
        'Missing "Pair with Silk Shirt" cross-category suggestions on Lounge Pant pages'
      ],
      performanceRisks: [
        'Redundant tracking pixels slowing down cart additions on category pages'
      ]
    },
    wireframeSuggestions: [
      'Category Banner: Curated Loungewear headline with fabric badge (Mulberry Silk | Organic Cotton)',
      'Multi-Pack Upsell: Dynamic quantity selector with automatic tier discount computation',
      'Hygiene & Guarantee Seal: Trust badge row beneath Add to Bag'
    ],
    benchmarksComparison: {
      rareRabbit: 'Uses rich loungewear imagery with subtle lifestyle context.',
      tedBaker: 'Includes detailed loungewear gift boxing presentation.',
      vahro: 'Maximizes boxer multi-pack conversions with 1-click bundle builders.'
    }
  },
  {
    id: 'audit-cart-checkout',
    pageName: 'Cart & Slide-out Drawer Flow',
    urlPath: 'https://pbandj.co.in/cart',
    category: 'Cart & Checkout',
    overallScore: 5.2,
    summary:
      'Cart experience suffers from lack of a modern slide-out drawer (redirecting user to a separate clunky /cart page), missing free shipping threshold progress bar, no 1-click upsell items, and high cart abandonment during checkout transition.',
    issues: {
      currentUXIssues: [
        'Adding an item redirects user to a full page /cart, interrupting the shopping session',
        'No visual progress bar indicating how close the user is to Free Express Shipping (₹1,599 threshold)',
        'Missing cross-sell / impulse buy recommendations in the cart view (e.g. Boxers, Belts, Socks)'
      ],
      conversionBottlenecks: [
        'High cart abandonment (>72%) due to unexpected shipping fees revealed late in checkout',
        'Promo code box is hidden or confusingly placed',
        'No express payment buttons (UPI, Apple Pay, Google Pay, Paytm) above the checkout fold'
      ],
      mobileExperienceProblems: [
        'Quantity +/- buttons on mobile are too small and trigger double-tap zoom',
        'Cart totals do not update in real-time without manual page reload'
      ],
      desktopExperienceProblems: [
        'Cart page displays enormous empty areas if user has 1-2 items'
      ],
      shopifyThemeLimitations: [
        'Theme lacks modern AJAX Cart API integration with debounced item update listeners'
      ],
      croOpportunities: [
        'Slide-out Ajax Cart Drawer with smooth spring slide-in animation',
        'Dynamic Free Shipping Tier: "Add ₹300 more to unlock FREE Express Shipping & Flat ₹100 Off!"',
        'Curated 1-Click Upsell Carousel inside drawer with instant Add button',
        'Trust guarantees: 100% Secure Checkout, 7-Day Easy Returns, 100% Authentic Cotton'
      ],
      navigationIssues: [
        '"Continue Shopping" button closes drawer and preserves exact previous scroll position'
      ],
      sizeSelectionIssues: [
        'Inability to edit size/color directly from cart drawer without removing and re-adding'
      ],
      productDiscoveryIssues: [
        'Zero discovery once user opens cart in current site'
      ],
      performanceRisks: [
        'Third-party cart apps loading 400KB of external blocking scripts'
      ]
    },
    wireframeSuggestions: [
      'Header: "Your Shopping Bag (X items)" + Close X button',
      'Free Shipping Bar: Dynamic progress fill with remaining balance calculation',
      'Item List: Image thumbnail, Title, Selected Size & Color, Price, Quantity Stepper, Remove trash icon',
      'Upsell Module: "Recommended With Your Order" mini product cards with 1-tap add',
      'Footer: Order Note toggle, Discount code input, Subtotal, Savings pill, High-contrast Black Checkout CTA'
    ],
    benchmarksComparison: {
      rareRabbit: 'Has sleek slide-out drawer with dynamic AOV upsell items.',
      tedBaker: 'Provides transparent duty/shipping calculation and luxury gift wrapping option.',
      vahro: 'Uses rapid UPI 1-click express checkout trigger.'
    }
  },
  {
    id: 'audit-mobile-desktop-nav',
    pageName: 'Navigation (Mobile & Desktop)',
    urlPath: 'https://pbandj.co.in/',
    category: 'Navigation & Search',
    overallScore: 5.6,
    summary:
      'Navigation structure is text-heavy, uninspired, and does not guide first-time or returning customers effectively. Mobile navigation lacks visual category thumbnails, and desktop lacks a rich mega-menu.',
    issues: {
      currentUXIssues: [
        'Mobile hamburger menu opens a plain vertical list of text links with no visual distinction',
        'Desktop menu does not utilize mega-menu dropdowns with imagery and featured collections',
        'Search bar lacks instant predictive typeahead results with product previews'
      ],
      conversionBottlenecks: [
        'Crucial revenue-driving categories (e.g. New Arrivals, Best Sellers, Sale 50% Off) are buried',
        'No quick category bottom navigation bar on mobile'
      ],
      mobileExperienceProblems: [
        'Menu drawer does not support swipe-to-close gesture',
        'Deep nested categories require 3 taps to access'
      ],
      desktopExperienceProblems: [
        'Dropdown menus flicker on hover if mouse strays by 2px (needs safe triangle hover buffer)'
      ],
      shopifyThemeLimitations: [
        'Shopify Navigation Admin menu is not mapped to visual image assets in default theme'
      ],
      croOpportunities: [
        'Category-first mobile drawer featuring Bento image tiles for Shirts, Pyjamas, Boxers, and Lounge Pants',
        'Top priority quick-links: "New Arrivals", "Best Sellers", "End of Season Sale"',
        'Sticky mobile bottom navigation bar (Shop, Search, Bag with badge, Account)',
        'Predictive search drawer with trending keywords and popular collection tags'
      ],
      navigationIssues: [
        'Account and Order Tracking are hard to find on mobile'
      ],
      sizeSelectionIssues: [
        'Search does not allow searching directly by size (e.g. "Linen Shirt Size L")'
      ],
      productDiscoveryIssues: [
        'Zero-state search results page shows dead empty end without recommended alternatives'
      ],
      performanceRisks: [
        'Heavy fonts and SVG icon sets loading redundantly in header'
      ]
    },
    wireframeSuggestions: [
      'Mobile Drawer: Top brand header -> Quick Actions (Track Order, Help) -> Visual Category Bento Tiles -> Secondary Menu Links -> Social & Currency',
      'Desktop Header: Slim announcement -> Center Brand Logo -> Horizontal Menu with Mega Drops -> Right Actions (Search, Account, Wishlist, Cart Drawer Trigger)',
      'Search Overlay: Fullscreen clean overlay with Live Search Input -> Instant Results Grid (4 items) -> Trending Searches Pills'
    ],
    benchmarksComparison: {
      rareRabbit: 'Utilizes sophisticated dark/light mega menus with highlighted editorial campaigns.',
      tedBaker: 'Features bespoke category photography inside every dropdown level.',
      vahro: 'Uses bottom app-like navigation bar optimized for 1-handed thumb usage.'
    }
  }
];
