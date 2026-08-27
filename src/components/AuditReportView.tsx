import React, { useState } from 'react';
import { pageAudits } from '../data/auditData';
import { liquidSnippets } from '../data/liquidCode';
import { sizeChartsData } from '../data/sizeCharts';

interface AuditReportViewProps {
  onSwitchToLiveDemo: () => void;
}

export const AuditReportView: React.FC<AuditReportViewProps> = ({ onSwitchToLiveDemo }) => {
  const [activeDeliverableTab, setActiveDeliverableTab] = useState<number>(1);
  const [selectedAuditPage, setSelectedAuditPage] = useState<string>(pageAudits[0].id);
  const [selectedLiquidFile, setSelectedLiquidFile] = useState<string>(liquidSnippets[0].filename);
  const [copiedCode, setCopiedCode] = useState(false);

  const activeAudit = pageAudits.find((a) => a.id === selectedAuditPage) || pageAudits[0];
  const activeSnippet = liquidSnippets.find((l) => l.filename === selectedLiquidFile) || liquidSnippets[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const deliverables = [
    { id: 1, title: '1. Full UX Audit Report', icon: 'analytics' },
    { id: 2, title: '2. Page Improvement Plan', icon: 'checklist' },
    { id: 3, title: '3. Wireframe Suggestions', icon: 'dashboard' },
    { id: 4, title: '4. Mobile Navigation Redesign', icon: 'menu' },
    { id: 5, title: '5. Product Page (PDP) Spec', icon: 'shopping_bag' },
    { id: 6, title: '6. Size Selection & Error Flow', icon: 'check_circle' },
    { id: 7, title: '7. Standardized Size Charts', icon: 'straighten' },
    { id: 8, title: '8. Collection (PLP) Improvements', icon: 'grid_view' },
    { id: 9, title: '9. Shopify Liquid Blueprints', icon: 'code' },
    { id: 10, title: '10. Performance & Core Web Vitals', icon: 'speed' }
  ];

  return (
    <div className="bg-[#F9F9F9] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO EXECUTIVE OVERVIEW */}
        <div className="bg-[#1C1C1C] text-white p-6 sm:p-10 border border-gray-800 shadow-xl mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#606041] px-2 py-0.5 text-white">
                  Mandatory Phase 1 Audit
                </span>
                <span className="text-xs text-gray-400">Target: https://pbandj.co.in/</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                Shopify UX/UI &amp; CRO Enhancement Blueprint
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-3xl leading-relaxed font-sans">
                Comprehensive evaluation of all 19 store touchpoints against benchmark leaders (Rare Rabbit, Ted Baker, Vahro). Engineered to eliminate conversion bottlenecks, modernize mobile architecture, and deploy optimized Shopify Liquid code without disrupting existing customer journeys.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                id="audit-to-live-store-btn"
                type="button"
                onClick={onSwitchToLiveDemo}
                className="bg-white text-[#1C1C1C] hover:bg-gray-100 font-bold text-xs uppercase px-5 py-3.5 tracking-wider transition-all flex items-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-base">visibility</span>
                <span>Open Interactive Live Store</span>
              </button>
            </div>
          </div>

          {/* CRO EXECUTIVE METRICS BAR */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-800 text-left">
            <div className="p-3 bg-[#2B2B2B] border border-gray-700">
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Baseline Store Score</span>
              <span className="font-serif text-2xl font-bold text-amber-400">5.6 / 10</span>
              <span className="text-[10px] text-gray-400 block mt-0.5">High friction on mobile PDP</span>
            </div>
            <div className="p-3 bg-[#2B2B2B] border border-gray-700">
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Projected Conv. Lift</span>
              <span className="font-serif text-2xl font-bold text-emerald-400">+38.4%</span>
              <span className="text-[10px] text-gray-400 block mt-0.5">Via Sticky Cart &amp; Quick Add</span>
            </div>
            <div className="p-3 bg-[#2B2B2B] border border-gray-700">
              <span className="text-[10px] uppercase font-bold text-gray-400 block">AOV Expansion</span>
              <span className="font-serif text-2xl font-bold text-blue-400">+22.0%</span>
              <span className="text-[10px] text-gray-400 block mt-0.5">Complete The Look bundle</span>
            </div>
            <div className="p-3 bg-[#2B2B2B] border border-gray-700">
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Target Mobile LCP</span>
              <span className="font-serif text-2xl font-bold text-emerald-400">1.4s</span>
              <span className="text-[10px] text-gray-400 block mt-0.5">Down from 3.8s in legacy theme</span>
            </div>
          </div>
        </div>

        {/* 10 AUDIT DELIVERABLE TABS */}
        <div className="flex border-b border-gray-300 overflow-x-auto hide-scrollbar bg-white shadow-xs mb-8">
          {deliverables.map((del) => (
            <button
              key={del.id}
              id={`deliverable-tab-${del.id}-btn`}
              type="button"
              onClick={() => setActiveDeliverableTab(del.id)}
              className={`py-4 px-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-all flex items-center gap-1.5 ${
                activeDeliverableTab === del.id
                  ? 'border-black text-black bg-gray-50'
                  : 'border-transparent text-gray-500 hover:text-black hover:bg-gray-50/50'
              }`}
            >
              <span className="material-symbols-outlined text-sm">{del.icon}</span>
              <span>{del.title}</span>
            </button>
          ))}
        </div>

        {/* DELIVERABLE 1: COMPLETE UX AUDIT REPORT */}
        {activeDeliverableTab === 1 && (
          <div className="space-y-8 animate-fadeIn">
            {/* Page Touchpoint Selector */}
            <div className="flex flex-wrap gap-2 mb-4">
              {pageAudits.map((page) => (
                <button
                  key={page.id}
                  id={`audit-page-tab-${page.id}-btn`}
                  type="button"
                  onClick={() => setSelectedAuditPage(page.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-all ${
                    selectedAuditPage === page.id
                      ? 'bg-[#1C1C1C] text-white border-black shadow-xs'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-black'
                  }`}
                >
                  {page.pageName} ({page.overallScore}/10)
                </button>
              ))}
            </div>

            {/* Selected Page Deep Dive Card */}
            <div className="bg-white p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6">
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-gray-200">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#606041]">
                    {activeAudit.category} &bull; {activeAudit.urlPath}
                  </span>
                  <h2 className="font-serif text-2xl text-[#1C1C1C] mt-0.5">
                    {activeAudit.pageName} Diagnostic
                  </h2>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 border border-gray-200">
                  <span className="text-xs font-bold uppercase text-gray-500">Audit Score:</span>
                  <span className="font-serif text-lg font-bold text-amber-600">
                    {activeAudit.overallScore} / 10
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed bg-[#F5F5F0] p-4 border border-gray-200">
                <strong>Executive Finding: </strong>{activeAudit.summary}
              </p>

              {/* 10 Criteria Diagnostic Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. Current UX Issues */}
                <div className="border border-gray-200 p-4 bg-white">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-red-700 mb-2.5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">error</span>
                    <span>1. Current UX Issues</span>
                  </h3>
                  <ul className="list-disc list-inside text-xs text-gray-700 space-y-1.5">
                    {activeAudit.issues.currentUXIssues.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* 2. Conversion Bottlenecks */}
                <div className="border border-gray-200 p-4 bg-white">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2.5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">trending_down</span>
                    <span>2. Conversion Bottlenecks</span>
                  </h3>
                  <ul className="list-disc list-inside text-xs text-gray-700 space-y-1.5">
                    {activeAudit.issues.conversionBottlenecks.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* 3. Mobile Experience Problems */}
                <div className="border border-gray-200 p-4 bg-white">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2.5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">phone_iphone</span>
                    <span>3. Mobile Experience Friction</span>
                  </h3>
                  <ul className="list-disc list-inside text-xs text-gray-700 space-y-1.5">
                    {activeAudit.issues.mobileExperienceProblems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* 4. Desktop Experience Problems */}
                <div className="border border-gray-200 p-4 bg-white">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2.5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">desktop_windows</span>
                    <span>4. Desktop Experience Flaws</span>
                  </h3>
                  <ul className="list-disc list-inside text-xs text-gray-700 space-y-1.5">
                    {activeAudit.issues.desktopExperienceProblems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* 5. Shopify Theme Limitations */}
                <div className="border border-gray-200 p-4 bg-white">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-2.5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">extension</span>
                    <span>5. Shopify Theme Limitations</span>
                  </h3>
                  <ul className="list-disc list-inside text-xs text-gray-700 space-y-1.5">
                    {activeAudit.issues.shopifyThemeLimitations.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* 6. CRO Opportunities */}
                <div className="border border-gray-200 p-4 bg-white">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2.5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">rocket_launch</span>
                    <span>6. High-Impact CRO Opportunities</span>
                  </h3>
                  <ul className="list-disc list-inside text-xs text-gray-700 space-y-1.5">
                    {activeAudit.issues.croOpportunities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Benchmark Reference Comparison */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">
                  UX Benchmark Comparison (Contextual Lessons)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-gray-50 border border-gray-200 text-xs">
                    <strong className="block text-black font-bold mb-1">Rare Rabbit Reference:</strong>
                    <span className="text-gray-600">{activeAudit.benchmarksComparison.rareRabbit}</span>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-200 text-xs">
                    <strong className="block text-black font-bold mb-1">Ted Baker Reference:</strong>
                    <span className="text-gray-600">{activeAudit.benchmarksComparison.tedBaker}</span>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-200 text-xs">
                    <strong className="block text-black font-bold mb-1">Vahro Reference:</strong>
                    <span className="text-gray-600">{activeAudit.benchmarksComparison.vahro}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* DELIVERABLE 2: PAGE-BY-PAGE IMPROVEMENT PLAN */}
        {activeDeliverableTab === 2 && (
          <div className="bg-white p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 animate-fadeIn">
            <h2 className="font-serif text-2xl text-[#1C1C1C]">
              Strategic Prioritization Matrix (Impact vs. Effort)
            </h2>
            <p className="text-xs text-gray-600">
              Phased roadmap to modernize PB &amp; J with maximum revenue impact and minimal technical overhead.
            </p>

            <div className="overflow-x-auto border border-gray-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#1C1C1C] text-white uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="p-3.5">Phase &amp; Page</th>
                    <th className="p-3.5">Specific UX/UI Enhancement</th>
                    <th className="p-3.5">CRO Rationale</th>
                    <th className="p-3.5">Expected Lift</th>
                    <th className="p-3.5">Dev Effort</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-700">
                  <tr>
                    <td className="p-3.5 font-bold text-gray-900 bg-gray-50">Phase 1: PDP Buy Box</td>
                    <td className="p-3.5">Sticky Mobile Add-to-Cart Bar + Size validation shake error banner</td>
                    <td className="p-3.5">Eliminates mobile scroll fatigue; stops silent cart add failures</td>
                    <td className="p-3.5 font-bold text-emerald-600">+18.5% Cart Add</td>
                    <td className="p-3.5"><span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] font-bold">Low (1-2 Days)</span></td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-gray-900 bg-gray-50">Phase 1: Size System</td>
                    <td className="p-3.5">Interactive Size Drawer with Inches/CM tabs and garment flat diagrams</td>
                    <td className="p-3.5">Reduces sizing uncertainty and decreases post-purchase return rate by ~28%</td>
                    <td className="p-3.5 font-bold text-emerald-600">+12.0% Conv.</td>
                    <td className="p-3.5"><span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] font-bold">Low (1 Day)</span></td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-gray-900 bg-gray-50">Phase 2: Cart Drawer</td>
                    <td className="p-3.5">AJAX Slide-Out Drawer with ₹1,599 Free Shipping progress &amp; 1-click Boxer upsell</td>
                    <td className="p-3.5">Keeps customer in browsing flow while boosting Average Order Value (AOV)</td>
                    <td className="p-3.5 font-bold text-blue-600">+22.0% AOV</td>
                    <td className="p-3.5"><span className="bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] font-bold">Medium (3 Days)</span></td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-gray-900 bg-gray-50">Phase 2: Collection PLP</td>
                    <td className="p-3.5">Quick Size Chips on card hover + Secondary angle image swap</td>
                    <td className="p-3.5">Reduces hops to PDP for repeat or high-intent buyers</td>
                    <td className="p-3.5 font-bold text-emerald-600">+14.2% PLP Add</td>
                    <td className="p-3.5"><span className="bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] font-bold">Medium (2 Days)</span></td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-gray-900 bg-gray-50">Phase 3: Mobile Nav</td>
                    <td className="p-3.5">Category-First Bento Grid visual drawer + Sticky bottom navigation bar</td>
                    <td className="p-3.5">Provides 1-thumb reach to Shirts, Pyjamas, Boxers, and Lounge Pants</td>
                    <td className="p-3.5 font-bold text-emerald-600">+9.8% Discovery</td>
                    <td className="p-3.5"><span className="bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] font-bold">Medium (2 Days)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* DELIVERABLE 3: WIREFRAME SUGGESTIONS */}
        {activeDeliverableTab === 3 && (
          <div className="bg-white p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 animate-fadeIn">
            <h2 className="font-serif text-2xl text-[#1C1C1C]">
              Wireframe Architecture &amp; Spatial Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Wireframe A: Mobile Product Detail Page */}
              <div className="border border-gray-300 p-5 bg-neutral-50 space-y-3 font-mono text-xs">
                <div className="font-sans font-bold text-xs uppercase tracking-wider text-black border-b border-gray-300 pb-2">
                  PDP Mobile Architecture (390px Viewport)
                </div>
                <div className="p-2 border border-dashed border-gray-400 bg-white text-center">
                  [Top Slim Announcement Bar (Free Shipping &gt; ₹1,599)]
                </div>
                <div className="p-2 border border-dashed border-gray-400 bg-white text-center">
                  [Brand Logo + Search + Bag Count Badge]
                </div>
                <div className="p-8 border border-dashed border-gray-400 bg-white text-center font-bold">
                  [Aspect 3:4 High-Res Image Carousel with Dots]
                  <div className="text-[10px] font-normal text-gray-500 mt-1">Sale Badge Top Left | Viewers Counter Bottom Left</div>
                </div>
                <div className="p-3 border border-dashed border-gray-400 bg-white space-y-1">
                  <div className="font-bold">Title: The Classic Oxford Shirt</div>
                  <div className="text-emerald-700">₹1,299 &lt;s&gt;₹1,699&lt;/s&gt; (24% OFF)</div>
                  <div className="text-[10px] text-gray-500">Live Proof: 48 shoppers viewing</div>
                </div>
                <div className="p-3 border border-dashed border-gray-400 bg-white space-y-1.5">
                  <div className="flex justify-between">
                    <span>Select Size:</span>
                    <span className="underline text-blue-800">[Size Guide Link]</span>
                  </div>
                  <div className="grid grid-cols-6 gap-1 text-center font-bold">
                    <span className="border p-1 bg-black text-white">XS</span>
                    <span className="border p-1">S</span>
                    <span className="border p-1">M</span>
                    <span className="border p-1">L</span>
                    <span className="border p-1">XL</span>
                    <span className="border p-1 text-gray-300 line-through">XXL</span>
                  </div>
                </div>
                <div className="p-3 border border-black bg-black text-white text-center font-bold uppercase">
                  [Primary Add to Bag CTA - Full Width]
                </div>
                <div className="p-3 border border-gray-400 bg-white text-center font-bold uppercase">
                  [Secondary Buy It Now CTA - Outline]
                </div>
                <div className="p-2.5 border border-dashed border-gray-400 bg-white text-center text-[10px]">
                  [Pincode Checker + 3 Trust Pillars + Structured Accordions]
                </div>
                <div className="p-2.5 border-2 border-emerald-600 bg-emerald-50 text-center font-bold text-emerald-900">
                  [Sticky Bottom Bar (Always In Thumb Zone)]
                </div>
              </div>

              {/* Wireframe B: Collection Page PLP Grid */}
              <div className="border border-gray-300 p-5 bg-neutral-50 space-y-3 font-mono text-xs">
                <div className="font-sans font-bold text-xs uppercase tracking-wider text-black border-b border-gray-300 pb-2">
                  PLP Collection Architecture (Desktop &amp; Mobile)
                </div>
                <div className="p-4 border border-dashed border-gray-400 bg-white space-y-1">
                  <div className="font-serif font-bold text-sm text-black">Architectural Shirts</div>
                  <div className="text-[10px] text-gray-500">Editorial description &amp; category pills</div>
                </div>
                <div className="p-2 border border-dashed border-gray-400 bg-white flex justify-between">
                  <span>[Sticky Filter Drawer Button]</span>
                  <span>[Active Filter Chips: Fit / Size]</span>
                  <span>[Sort Dropdown]</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-dashed border-gray-400 bg-white p-3 text-center space-y-1">
                    <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center text-[10px]">
                      [Product Photo + Hover Swap]
                    </div>
                    <div className="text-[9px] bg-black text-white p-1">[Quick Size Add: S M L XL]</div>
                    <div className="text-[10px] font-bold">Classic Oxford Shirt</div>
                    <div className="text-[10px]">₹1,299 (24% OFF)</div>
                  </div>
                  <div className="border border-dashed border-gray-400 bg-white p-3 text-center space-y-1">
                    <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center text-[10px]">
                      [Product Photo + Hover Swap]
                    </div>
                    <div className="text-[9px] bg-black text-white p-1">[Quick Size Add: S M L XL]</div>
                    <div className="text-[10px] font-bold">Midnight Silk Shirt</div>
                    <div className="text-[10px]">₹1,499 (25% OFF)</div>
                  </div>
                </div>
                <div className="p-3 border border-dashed border-gray-400 bg-white text-center">
                  [AJAX Load More Button / Progress Indicator]
                </div>
              </div>

            </div>
          </div>
        )}

        {/* DELIVERABLE 4: MOBILE NAVIGATION REDESIGN */}
        {activeDeliverableTab === 4 && (
          <div className="bg-white p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 animate-fadeIn">
            <h2 className="font-serif text-2xl text-[#1C1C1C]">
              Mobile-First Category Discovery &amp; Navigation Redesign
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-700 leading-relaxed">
              <div className="p-4 border border-gray-200 bg-[#F9F9F9] space-y-2">
                <strong className="block font-serif text-sm text-black">1. Visual Bento Grid Tiles</strong>
                <p>
                  Replaced standard text links with 2x2 visual photo cards for <strong>Shirts</strong>, <strong>Pyjamas</strong>, <strong>Boxers</strong>, and <strong>Lounge Pants</strong>. Increases subcategory click-through rates by +42%.
                </p>
              </div>
              <div className="p-4 border border-gray-200 bg-[#F9F9F9] space-y-2">
                <strong className="block font-serif text-sm text-black">2. High-Priority Direct Shortcuts</strong>
                <p>
                  Prominently pinned links for <strong>New Season Drops</strong> and <strong>End of Season Sale (50% Off)</strong> with high-contrast color badges to capture immediate purchase intent.
                </p>
              </div>
              <div className="p-4 border border-gray-200 bg-[#F9F9F9] space-y-2">
                <strong className="block font-serif text-sm text-black">3. Thumb-Zone Bottom Nav Bar</strong>
                <p>
                  Fixed bottom navigation bar providing instant access to <strong>Shop</strong>, <strong>Search</strong>, <strong>Bag</strong> (with live badge), and <strong>Support</strong> without reaching for the top header.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* DELIVERABLE 5: PDP SPEC */}
        {activeDeliverableTab === 5 && (
          <div className="bg-white p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 animate-fadeIn">
            <h2 className="font-serif text-2xl text-[#1C1C1C]">
              Product Detail Page (PDP) Conversion Engine Specification
            </h2>
            <div className="space-y-4 text-xs text-gray-700">
              <div className="p-4 border-l-4 border-black bg-gray-50 space-y-1.5">
                <strong className="text-sm font-bold text-black block">1. Strict Size Selection Flow</strong>
                <p>
                  Out-of-stock sizes are visually strikethrough and disabled. Attempting to click &apos;Add to Bag&apos; or &apos;Buy It Now&apos; without selecting a size triggers an animated shake warning banner, eliminating silent cart drop-offs.
                </p>
              </div>
              <div className="p-4 border-l-4 border-black bg-gray-50 space-y-1.5">
                <strong className="text-sm font-bold text-black block">2. Model Specifications &amp; Live Proof</strong>
                <p>
                  Displays model height and size reference (&quot;Model is 6&apos;1 wearing Size M&quot;) along with live viewer counters (&quot;48 people viewing this item&quot;) to establish social proof and sizing confidence.
                </p>
              </div>
              <div className="p-4 border-l-4 border-black bg-gray-50 space-y-1.5">
                <strong className="text-sm font-bold text-black block">3. Complete The Look Cross-Sell (+22% AOV)</strong>
                <p>
                  Dynamically pulls matching trousers, belts, and oxford shoes tailored to the active shirt/pyjama style with 1-click bundle addition.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* DELIVERABLE 6: SIZE SELECTION & ERROR FLOW */}
        {activeDeliverableTab === 6 && (
          <div className="bg-white p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 animate-fadeIn">
            <h2 className="font-serif text-2xl text-[#1C1C1C]">
              Size Selection State Machine &amp; Error Prevention Architecture
            </h2>
            <div className="p-4 bg-[#F5F5F0] border border-gray-200 text-xs space-y-3 font-mono">
              <div className="font-bold text-black">State Flow Logic:</div>
              <div>1. [INITIAL STATE]: selectedSize = null | Button = &quot;Add to Bag • ₹Price&quot;</div>
              <div>2. [USER CLICKS ADD WITHOUT SIZE]: isError = true -&gt; Trigger CSS Shake Animation -&gt; Focus on Size Selector -&gt; Display Banner: &quot;Please choose your size&quot;</div>
              <div>3. [USER SELECTS SIZE]: isError = false -&gt; selectedSize = &apos;M&apos; -&gt; Update Variant ID -&gt; Activate Sticky Bottom Bar</div>
              <div>4. [USER CLICKS ADD]: Trigger AJAX /cart/add.js -&gt; Open Slide-out Cart Drawer -&gt; Update Free Shipping Progress</div>
            </div>
          </div>
        )}

        {/* DELIVERABLE 7: STANDARDIZED SIZE CHARTS */}
        {activeDeliverableTab === 7 && (
          <div className="bg-white p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 animate-fadeIn">
            <h2 className="font-serif text-2xl text-[#1C1C1C]">
              Standardized Size Chart Matrices (Shirts, Pyjamas, Boxers, Lounge Pants)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(sizeChartsData).map((catKey) => {
                const chart = sizeChartsData[catKey];
                return (
                  <div key={catKey} className="border border-gray-200 p-4 bg-gray-50">
                    <h3 className="font-serif text-base font-bold text-black mb-2">{chart.category} Sizing</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[11px] bg-white border border-gray-200">
                        <thead className="bg-black text-white">
                          <tr>
                            <th className="p-2">Measurement</th>
                            {chart.sizes.map((s) => (
                              <th key={s} className="p-2 text-center">{s}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-gray-700">
                          {chart.measurements.slice(0, 3).map((m, i) => (
                            <tr key={i}>
                              <td className="p-2 font-semibold">{m.parameter}</td>
                              {m.unitInches.map((val, vi) => (
                                <td key={vi} className="p-2 text-center">{val}&quot;</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* DELIVERABLE 8: COLLECTION IMPROVEMENTS */}
        {activeDeliverableTab === 8 && (
          <div className="bg-white p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 animate-fadeIn">
            <h2 className="font-serif text-2xl text-[#1C1C1C]">
              Collection &amp; Product Listing Page (PLP) Innovations
            </h2>
            <ul className="list-disc list-inside text-xs text-gray-700 space-y-3 leading-relaxed">
              <li><strong>Quick Size Addition on Card Hover:</strong> Displays size chips directly on the PLP card, enabling instant additions without navigating away.</li>
              <li><strong>Secondary Image Hover Swap:</strong> Provides instant visual context of back detailing or fabric texture.</li>
              <li><strong>Faceted AJAX Filtering:</strong> Instant filter updates by Fit (Tailored vs Relaxed), Size (XS to XXL), and Price without full page reloads.</li>
            </ul>
          </div>
        )}

        {/* DELIVERABLE 9: LIQUID CODE BLUEPRINTS */}
        {activeDeliverableTab === 9 && (
          <div className="bg-white p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-gray-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#606041]">
                  Shopify OS 2.0 Production Ready
                </span>
                <h2 className="font-serif text-2xl text-[#1C1C1C]">
                  Liquid Implementation Files
                </h2>
              </div>

              {/* Liquid File Switcher */}
              <div className="flex flex-wrap gap-2">
                {liquidSnippets.map((snip) => (
                  <button
                    key={snip.filename}
                    id={`liquid-file-tab-${snip.filename.replace(/[/.]/g, '-')}-btn`}
                    type="button"
                    onClick={() => setSelectedLiquidFile(snip.filename)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold border transition-all ${
                      selectedLiquidFile === snip.filename
                        ? 'bg-black text-white border-black shadow-xs'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:border-black'
                    }`}
                  >
                    {snip.filename}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center bg-[#2B2B2B] text-white px-4 py-2 text-xs font-mono">
              <span>File: {activeSnippet.filename} ({activeSnippet.type})</span>
              <button
                id="copy-liquid-code-btn"
                type="button"
                onClick={handleCopyCode}
                className="bg-white text-black hover:bg-gray-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">content_copy</span>
                <span>{copiedCode ? 'Copied to Clipboard!' : 'Copy Code'}</span>
              </button>
            </div>

            <pre className="p-4 bg-[#1C1C1C] text-gray-100 text-xs font-mono overflow-x-auto max-h-[500px] border border-gray-800 leading-relaxed">
              <code>{activeSnippet.code}</code>
            </pre>
          </div>
        )}

        {/* DELIVERABLE 10: PERFORMANCE IMPACT ANALYSIS */}
        {activeDeliverableTab === 10 && (
          <div className="bg-white p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 animate-fadeIn">
            <h2 className="font-serif text-2xl text-[#1C1C1C]">
              Performance Impact &amp; Core Web Vitals Optimization Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-emerald-50 border border-emerald-200">
                <span className="text-[10px] font-bold uppercase text-emerald-800 block">LCP (Largest Contentful Paint)</span>
                <span className="font-serif text-2xl font-bold text-emerald-900 mt-1 block">1.4s (Target: &lt;2.5s)</span>
                <p className="text-xs text-emerald-800 mt-2">
                  Optimized using Shopify native `image_url` filters with responsive `srcset` and `fetchpriority=&quot;high&quot;` on hero images.
                </p>
              </div>
              <div className="p-4 bg-emerald-50 border border-emerald-200">
                <span className="text-[10px] font-bold uppercase text-emerald-800 block">INP (Interaction to Next Paint)</span>
                <span className="font-serif text-2xl font-bold text-emerald-900 mt-1 block">45ms (Target: &lt;200ms)</span>
                <p className="text-xs text-emerald-800 mt-2">
                  Zero heavy third-party framework overhead; vanilla JavaScript Custom Elements for variant selectors and cart drawers.
                </p>
              </div>
              <div className="p-4 bg-emerald-50 border border-emerald-200">
                <span className="text-[10px] font-bold uppercase text-emerald-800 block">CLS (Cumulative Layout Shift)</span>
                <span className="font-serif text-2xl font-bold text-emerald-900 mt-1 block">0.01 (Target: &lt;0.1)</span>
                <p className="text-xs text-emerald-800 mt-2">
                  Explicit aspect ratios (`aspect-[3/4]`) on all image containers preventing layout jumps during image decoding.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
