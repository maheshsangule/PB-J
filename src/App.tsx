import React, { useState } from 'react';
import { CategoryType, CartItem } from './types';
import { productsData } from './data/products';
import { Header } from './components/Header';
import { MobileNavDrawer } from './components/MobileNavDrawer';
import { CollectionPage } from './components/CollectionPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { SizeChartModal } from './components/SizeChartModal';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { AuditReportView } from './components/AuditReportView';
import { StickyBottomBar } from './components/StickyBottomBar';

export function App() {
  const [activeView, setActiveView] = useState<'store' | 'audit' | 'liquid'>('store');
  const [currentCategory, setCurrentCategory] = useState<CategoryType>('all');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  
  // Initial shopping cart
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: productsData[0],
      selectedSize: 'M',
      selectedColor: productsData[0].colors[0],
      quantity: 1
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [sizeChartCategory, setSizeChartCategory] = useState('shirts');
  
  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === newItem.product.id &&
          item.selectedSize === newItem.selectedSize &&
          item.selectedColor.name === newItem.selectedColor.name
      );

      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, newItem];
    });

    setIsCartOpen(true);
    showToast(`Added ${newItem.product.title} (Size ${newItem.selectedSize}) to bag!`);
  };

  const handleBuyNow = (item: CartItem) => {
    handleAddToCart(item);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    showToast('Item removed from shopping bag.');
  };

  const handleOpenSizeChart = (cat: string) => {
    setSizeChartCategory(cat);
    setIsSizeChartOpen(true);
  };

  const handleCheckout = () => {
    alert(
      'Proceeding to 256-bit encrypted checkout. In production, this connects directly to the Shopify Checkout API with UPI / Card / COD options.'
    );
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const activeProduct = productsData.find((p) => p.id === selectedProductId) || null;

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9] text-[#1C1C1C] font-sans pb-16 lg:pb-0">
      
      {/* GLOBAL HEADER */}
      <Header
        currentCategory={currentCategory}
        onSelectCategory={(cat) => {
          setCurrentCategory(cat);
          setSelectedProductId(null);
        }}
        activeView={activeView}
        onSelectView={(v) => {
          setActiveView(v);
          if (v === 'store') setSelectedProductId(null);
        }}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMobileNav={() => setIsMobileNavOpen(true)}
        onSelectProduct={(id) => setSelectedProductId(id)}
      />

      {/* TOAST NOTIFICATION POPUP */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#1C1C1C] text-white px-4 py-3 text-xs font-semibold shadow-2xl flex items-center gap-2 border border-gray-700 animate-slideDown">
          <span className="material-symbols-outlined text-base text-emerald-400">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* MAIN VIEWPORT BODY */}
      <main className="flex-1">
        
        {/* MODE A & B: CRO AUDIT REPORT OR LIQUID BLUEPRINTS */}
        {(activeView === 'audit' || activeView === 'liquid') && (
          <AuditReportView
            onSwitchToLiveDemo={() => {
              setActiveView('store');
              setSelectedProductId(null);
            }}
          />
        )}

        {/* MODE C: LIVE STORE PROTOTYPE */}
        {activeView === 'store' && (
          <>
            {/* VIEW 1: PRODUCT DETAIL PAGE */}
            {selectedProductId && activeProduct ? (
              <ProductDetailPage
                product={activeProduct}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
                onOpenSizeChart={handleOpenSizeChart}
                onSelectProduct={(id) => setSelectedProductId(id || null)}
              />
            ) : currentCategory !== 'all' ? (
              /* VIEW 2: CATEGORY SPECIFIC COLLECTION (PLP) */
              <CollectionPage
                category={currentCategory}
                onSelectCategory={setCurrentCategory}
                onSelectProduct={(id) => setSelectedProductId(id)}
                onAddToCart={handleAddToCart}
              />
            ) : (
              /* VIEW 3: HOMEPAGE (EDITORIAL HERO + BENTO + CURATED COLLECTIONS) */
              <div>
                
                {/* 1. EDITORIAL HERO SECTION */}
                <section className="relative bg-[#1C1C1C] text-white overflow-hidden py-16 sm:py-24 border-b border-gray-800">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      
                      {/* Left Editorial Copy */}
                      <div className="lg:col-span-7 space-y-6 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2B2B2B] border border-gray-700 text-[10px] font-bold uppercase tracking-widest text-gray-300">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          <span>New Season 2026 Drop &bull; Pure Egyptian Cotton</span>
                        </div>

                        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1]">
                          Pure Fabric.<br />Architectural Fit.
                        </h1>

                        <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed font-sans font-normal">
                          Crafted for understated luxury. Explore our signature 80s 2-ply Oxford shirts, 100% Mulberry silk pyjamas, and breathable Aero-Weave cotton boxers.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                          <button
                            id="hero-shop-shirts-btn"
                            type="button"
                            onClick={() => setCurrentCategory('shirts')}
                            className="bg-white text-[#1C1C1C] hover:bg-gray-100 font-bold text-xs uppercase px-7 py-4 tracking-widest transition-all shadow-md active:scale-[0.99]"
                          >
                            Explore Shirts Collection
                          </button>
                          <button
                            id="hero-featured-pdp-btn"
                            type="button"
                            onClick={() => setSelectedProductId('pb-01')}
                            className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-bold text-xs uppercase px-7 py-4 tracking-widest transition-all"
                          >
                            View The Oxford Shirt
                          </button>
                        </div>

                        <div className="flex items-center gap-6 pt-4 text-xs text-gray-400">
                          <div>
                            <strong className="text-white font-bold block text-sm">100% Pure</strong>
                            <span>Egyptian Cotton</span>
                          </div>
                          <div className="h-6 w-px bg-gray-700" />
                          <div>
                            <strong className="text-white font-bold block text-sm">7-Day Free</strong>
                            <span>Doorstep Exchanges</span>
                          </div>
                          <div className="h-6 w-px bg-gray-700" />
                          <div>
                            <strong className="text-white font-bold block text-sm">₹100 Off</strong>
                            <span>Code: PBJ100</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Hero Image Frame */}
                      <div className="lg:col-span-5 relative">
                        <div className="relative aspect-[3/4] border-2 border-gray-700 bg-neutral-900 overflow-hidden shadow-2xl group cursor-pointer"
                             onClick={() => setSelectedProductId('pb-01')}>
                          <img
                            src="https://lh3.googleusercontent.com/aida/AEtjO1XpLIYa-vBKs7qHXqC6rJ7WgmwxyqL2vHAg5KGanCMHzGSbqatm4kShwtbpXyKFq_A8HTgGy3eED1D9cxus9iFnWeXMTGtVj_PsyX8kYbAKbGxFOjKMz1dgNhRMisHgV_pDnlBJAoxB7GrzfqKoqh5_qrwnPj9q2S34vT-JgsuRMRZKNjXyOGuu-65wRT1M3Y0LT5bTlPMDt20uKpLFwN6axRDPhHS-FVOkjiCPmxM2c5p9b7XiXSuCCuk"
                            alt="The Classic Oxford Shirt by PB & J"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4 text-white flex justify-between items-end">
                            <div>
                              <span className="text-[9px] uppercase tracking-widest font-bold text-amber-400">Featured Style</span>
                              <div className="font-serif text-lg font-bold">The Classic Oxford Shirt</div>
                              <div className="text-xs text-gray-300">₹1,299 <span className="line-through text-gray-500">₹1,699</span></div>
                            </div>
                            <span className="text-xs uppercase font-bold bg-white text-black px-3 py-1.5 hover:bg-gray-200">
                              Shop Now &rarr;
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </section>

                {/* 2. VISUAL BENTO CATEGORY TILES */}
                <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-8">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#606041] block mb-1">
                      Explore By Category
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1C1C]">
                      The Pure Essentials
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    
                    {/* Bento 1: Shirts */}
                    <button
                      id="bento-cat-shirts-btn"
                      type="button"
                      onClick={() => setCurrentCategory('shirts')}
                      className="group relative aspect-[3/4] overflow-hidden border border-gray-200 text-left bg-neutral-900 shadow-xs focus:outline-hidden"
                    >
                      <img
                        src="https://lh3.googleusercontent.com/aida/AEtjO1XpLIYa-vBKs7qHXqC6rJ7WgmwxyqL2vHAg5KGanCMHzGSbqatm4kShwtbpXyKFq_A8HTgGy3eED1D9cxus9iFnWeXMTGtVj_PsyX8kYbAKbGxFOjKMz1dgNhRMisHgV_pDnlBJAoxB7GrzfqKoqh5_qrwnPj9q2S34vT-JgsuRMRZKNjXyOGuu-65wRT1M3Y0LT5bTlPMDt20uKpLFwN6axRDPhHS-FVOkjiCPmxM2c5p9b7XiXSuCCuk"
                        alt="Shirts Category"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[9px] uppercase tracking-wider font-bold bg-[#1C1C1C] px-2 py-0.5 inline-block mb-1.5">
                          24 Styles
                        </span>
                        <div className="font-serif text-lg font-bold">Architectural Shirts</div>
                        <div className="text-xs text-gray-300 flex items-center justify-between mt-1">
                          <span>From ₹649</span>
                          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </div>
                      </div>
                    </button>

                    {/* Bento 2: Pyjamas */}
                    <button
                      id="bento-cat-pyjamas-btn"
                      type="button"
                      onClick={() => setCurrentCategory('pyjamas')}
                      className="group relative aspect-[3/4] overflow-hidden border border-gray-200 text-left bg-neutral-900 shadow-xs focus:outline-hidden"
                    >
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWVzsrHs15fZCCpwsUNYFUpW7wzprwxLg7VASDwBcHLJKF7xZKUnUuxgYUoGFmne3u0jk6FB4uUpWYzSttnfLyBFJiaTrKt6Xd1PXIDrw17YzKKdGZLfHzB96OeZRrGK9s74xN76MXI2lmpHYJPiCm5quQ3hEow_lSs435QvPtSBUCKuZe-wpvXnLUnpPoCtSjlMK-qn-nmx8tzOoo2fbDNyE_QB7qnvQTeNuNZoKSOel0u44qf6vh"
                        alt="Pyjamas Category"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[9px] uppercase tracking-wider font-bold bg-[#606041] px-2 py-0.5 inline-block mb-1.5">
                          Mulberry Silk
                        </span>
                        <div className="font-serif text-lg font-bold">Luxury Pyjamas</div>
                        <div className="text-xs text-gray-300 flex items-center justify-between mt-1">
                          <span>From ₹799</span>
                          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </div>
                      </div>
                    </button>

                    {/* Bento 3: Boxers */}
                    <button
                      id="bento-cat-boxers-btn"
                      type="button"
                      onClick={() => setCurrentCategory('boxers')}
                      className="group relative aspect-[3/4] overflow-hidden border border-gray-200 text-left bg-neutral-900 shadow-xs focus:outline-hidden"
                    >
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuALMwmxfJ2D0kcRxq2GjPHYJOWHoVpAX2z4K4bzhEChZfvXyPswjHCorIUZ1T6Q4_dsZljkMZwB-5bJDvBhj0TG3heiYBvptZHds6EKa33CuR8I3Hifv0DSn9KJdgduExJDs6bBDBKtvvU9EfdxsdN0uVze7uIlQLX_ELaI_t-RKGBmOOqYWeTewWVIRdI4WGEx_Q8uMs80vNpysR43B8w-HDJS0XBnWy7zdktw4_6MbHKkenSoDFL9"
                        alt="Boxers Category"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[9px] uppercase tracking-wider font-bold bg-[#BA1A1A] px-2 py-0.5 inline-block mb-1.5">
                          60% Off Packs
                        </span>
                        <div className="font-serif text-lg font-bold">Aero Boxers</div>
                        <div className="text-xs text-gray-300 flex items-center justify-between mt-1">
                          <span>From ₹399</span>
                          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </div>
                      </div>
                    </button>

                    {/* Bento 4: Lounge Pants */}
                    <button
                      id="bento-cat-lounge-btn"
                      type="button"
                      onClick={() => setCurrentCategory('lounge-pants')}
                      className="group relative aspect-[3/4] overflow-hidden border border-gray-200 text-left bg-neutral-900 shadow-xs focus:outline-hidden"
                    >
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpe-sDs_e1hgySzCStPJ_N6YwHgDfux8r2zpCBX27pb5UJAO6br93ptuFwEaqo1B8EzdY91NMNZVIc62qukvZNFsFrCrTUIXto_5idfbPHx94EeeSrdZuaI0S94ohjokP1Q_DvWMXur_16YORfOhb-N5sJEdjtU5mU64p8zKpKrF3ZjdWlyyVYlm8Jc5YqgovLexoq9CgXOvR93UD7vxc2Ka6ekwvnH3mkCelSYgpzHnfmrIEenmX4"
                        alt="Lounge Pants Category"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[9px] uppercase tracking-wider font-bold bg-[#1C1C1C] px-2 py-0.5 inline-block mb-1.5">
                          French Linen
                        </span>
                        <div className="font-serif text-lg font-bold">Lounge Pants</div>
                        <div className="text-xs text-gray-300 flex items-center justify-between mt-1">
                          <span>From ₹999</span>
                          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </div>
                      </div>
                    </button>

                  </div>
                </section>

                {/* 3. FEATURED PRODUCTS (PLP INTEGRATION) */}
                <CollectionPage
                  category="all"
                  onSelectCategory={setCurrentCategory}
                  onSelectProduct={(id) => setSelectedProductId(id)}
                  onAddToCart={handleAddToCart}
                />

                {/* 4. VERIFIED REVIEWS & SOCIAL PROOF */}
                <section className="bg-white py-16 border-t border-b border-gray-200">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                      <div className="flex justify-center text-amber-500 mb-2">
                        {'★'.repeat(5)}
                      </div>
                      <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1C1C]">
                        Loved By Over 12,000+ Gentlemen Across India
                      </h2>
                      <p className="text-xs text-gray-500 mt-1">
                        4.9 Average Rating across verified shirt &amp; loungewear orders.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 bg-[#F9F9F9] border border-gray-200 space-y-3">
                        <div className="text-amber-500 text-sm">★★★★★</div>
                        <p className="text-xs text-gray-700 leading-relaxed italic">
                          &quot;The Oxford shirt fabric is on par with Ralph Lauren at a fraction of the cost. The tailored fit is crisp without feeling restrictive at the shoulders.&quot;
                        </p>
                        <div className="pt-2 border-t border-gray-200 flex justify-between items-center text-xs">
                          <strong className="text-black">Karan M., Mumbai</strong>
                          <span className="text-[10px] text-emerald-700 font-bold">Verified Buyer</span>
                        </div>
                      </div>

                      <div className="p-6 bg-[#F9F9F9] border border-gray-200 space-y-3">
                        <div className="text-amber-500 text-sm">★★★★★</div>
                        <p className="text-xs text-gray-700 leading-relaxed italic">
                          &quot;The Midnight Silk Pyjama Shirt is absolute perfection for evening lounging. Incredibly soft, breathable in Mumbai humidity, and looks bespoke.&quot;
                        </p>
                        <div className="pt-2 border-t border-gray-200 flex justify-between items-center text-xs">
                          <strong className="text-black">Rohan S., Delhi</strong>
                          <span className="text-[10px] text-emerald-700 font-bold">Verified Buyer</span>
                        </div>
                      </div>

                      <div className="p-6 bg-[#F9F9F9] border border-gray-200 space-y-3">
                        <div className="text-amber-500 text-sm">★★★★★</div>
                        <p className="text-xs text-gray-700 leading-relaxed italic">
                          &quot;Swapped all my everyday boxers for PB &amp; J Aero-Weave. The waistband never rolls over and the cotton weave breathes like nothing else.&quot;
                        </p>
                        <div className="pt-2 border-t border-gray-200 flex justify-between items-center text-xs">
                          <strong className="text-black">Vikram T., Bengaluru</strong>
                          <span className="text-[10px] text-emerald-700 font-bold">Verified Buyer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            )}
          </>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-[#1C1C1C] text-white border-t border-gray-800 pt-12 pb-8 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Brand column */}
            <div className="space-y-3">
              <span className="font-serif text-2xl font-bold tracking-tight block">PB &amp; J</span>
              <p className="text-gray-400 text-xs leading-relaxed">
                Modern, pure fabric menswear and loungewear. Engineered in Mumbai with 100% natural Egyptian cotton, Mulberry silk, and Normandy linen.
              </p>
              <div className="text-gray-400 text-[11px]">
                Support: <strong className="text-white">care@pbandj.co.in</strong>
              </div>
            </div>

            {/* Collections */}
            <div className="space-y-2">
              <span className="font-bold uppercase tracking-widest text-gray-300 block mb-2 text-[11px]">
                Collections
              </span>
              <ul className="space-y-1.5 text-gray-400">
                <li><button type="button" onClick={() => { setActiveView('store'); setCurrentCategory('shirts'); }} className="hover:text-white">Architectural Shirts</button></li>
                <li><button type="button" onClick={() => { setActiveView('store'); setCurrentCategory('pyjamas'); }} className="hover:text-white">Mulberry Silk Pyjamas</button></li>
                <li><button type="button" onClick={() => { setActiveView('store'); setCurrentCategory('boxers'); }} className="hover:text-white">Aero Weave Boxers</button></li>
                <li><button type="button" onClick={() => { setActiveView('store'); setCurrentCategory('lounge-pants'); }} className="hover:text-white">Tailored Lounge Pants</button></li>
              </ul>
            </div>

            {/* Sizing & Client Service */}
            <div className="space-y-2">
              <span className="font-bold uppercase tracking-widest text-gray-300 block mb-2 text-[11px]">
                Customer Care
              </span>
              <ul className="space-y-1.5 text-gray-400">
                <li><button type="button" onClick={() => handleOpenSizeChart('shirts')} className="hover:text-white">Garment Size Guide</button></li>
                <li><button type="button" onClick={() => showToast('7-Day Doorstep Returns: Contact care@pbandj.co.in')} className="hover:text-white">7-Day Doorstep Returns</button></li>
                <li><button type="button" onClick={() => showToast('Free express shipping automatically applied on orders above ₹1,599')} className="hover:text-white">Shipping &amp; Delivery Policy</button></li>
                <li><button type="button" onClick={() => setActiveView('audit')} className="hover:text-white">CRO Audit Documentation</button></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <span className="font-bold uppercase tracking-widest text-gray-300 block text-[11px]">
                Join The PB &amp; J Society
              </span>
              <p className="text-gray-400 text-xs">
                Subscribe for private drop previews and receive ₹100 off your initial order.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); showToast('Subscribed! Use code PBJ100 for ₹100 off.'); }} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-[#2B2B2B] border border-gray-700 text-xs text-white p-2.5 flex-1 focus:border-white focus:outline-hidden"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black px-4 text-xs font-bold uppercase tracking-wider hover:bg-gray-200"
                >
                  Join
                </button>
              </form>
            </div>

          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-[11px]">
            <div>
              &copy; {new Date().getFullYear()} PB &amp; J (pbandj.co.in). All rights reserved. Powered by Shopify OS 2.0.
            </div>
            <div className="flex items-center gap-3">
              <span>⚡ UPI Enabled</span>
              <span>•</span>
              <span>🔒 256-Bit Encryption</span>
              <span>•</span>
              <span>🚚 Express Courier</span>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE BOTTOM NAVIGATION & STICKY PURCHASE BAR */}
      <StickyBottomBar
        activeView={activeView}
        onSelectView={(v) => {
          setActiveView(v);
          if (v === 'store') setSelectedProductId(null);
        }}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        cartCount={totalCartCount}
        activeProduct={activeProduct}
        onAddToCart={handleAddToCart}
      />

      {/* DRAWERS & MODALS */}
      <MobileNavDrawer
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onSelectCategory={(cat) => {
          setCurrentCategory(cat);
          setSelectedProductId(null);
        }}
        onSelectProduct={(id) => setSelectedProductId(id)}
      />

      <SizeChartModal
        isOpen={isSizeChartOpen}
        onClose={() => setIsSizeChartOpen(false)}
        defaultCategory={sizeChartCategory}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onAddToCart={handleAddToCart}
        onCheckout={handleCheckout}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(id) => setSelectedProductId(id)}
      />

    </div>
  );
}

export default App;
