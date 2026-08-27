export type CategoryType = 'all' | 'shirts' | 'pyjamas' | 'boxers' | 'lounge-pants';

export interface ProductVariant {
  id: string;
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
  inStock: boolean;
  inventoryCount?: number;
}

export interface ProductColor {
  name: string;
  hex: string;
  imageIndex?: number;
}

export interface Product {
  id: string;
  title: string;
  brand: string;
  category: CategoryType;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  badge?: 'New Arrival' | 'Sale' | 'Best Seller' | 'Signature';
  images: string[];
  colors: ProductColor[];
  variants: ProductVariant[];
  description: string;
  fabricDetails: string;
  careInstructions: string[];
  shippingInfo: string;
  fit: 'Relaxed' | 'Oversized' | 'Tailored' | 'Regular';
  rating?: number;
  reviewsCount?: number;
  viewersCountToday?: number;
  sku: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: ProductColor;
  quantity: number;
}

export interface AuditCriterion {
  title: string;
  score: number; // 1 to 10
  severity: 'Critical' | 'High' | 'Medium' | 'Low' | 'Optimized';
  findings: string[];
  croImpact: string;
  recommendedFix: string;
}

export interface PageAudit {
  id: string;
  pageName: string;
  urlPath: string;
  category: string;
  overallScore: number;
  summary: string;
  issues: {
    currentUXIssues: string[];
    conversionBottlenecks: string[];
    mobileExperienceProblems: string[];
    desktopExperienceProblems: string[];
    shopifyThemeLimitations: string[];
    croOpportunities: string[];
    navigationIssues: string[];
    sizeSelectionIssues: string[];
    productDiscoveryIssues: string[];
    performanceRisks: string[];
  };
  wireframeSuggestions: string[];
  benchmarksComparison: {
    rareRabbit: string;
    tedBaker: string;
    vahro: string;
  };
}

export interface SizeChartData {
  category: string;
  sizes: string[];
  measurements: {
    parameter: string;
    unitInches: number[];
    unitCm: number[];
  }[];
  howToMeasure: {
    step: string;
    instruction: string;
  }[];
  fitAdvice: string;
}

export interface LiquidSnippet {
  filename: string;
  type: 'Section' | 'Snippet' | 'Asset' | 'Config';
  description: string;
  code: string;
}
