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
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#111111] font-sans pb-16 lg:pb-0">
      
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
        <div className="fixed top-20 right-4 z-50 bg-[#111111] text-white px-4 py-3 text-xs font-light shadow-2xl flex items-center gap-2 border border-gray-800 tracking-wide animate-slideDown">
          <span className="material-symbols-outlined text-sm text-emerald-400">check_circle</span>
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
                
                {/* 1. ELEGANT LUXURY HERO SECTION */}
                <section className="relative bg-[#0F0F0F] text-white overflow-hidden py-12 sm:py-20 border-b border-neutral-800">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      
                      {/* Left Editorial Copy */}
                      <div className="lg:col-span-7 space-y-5 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 text-[9px] font-light uppercase tracking-[0.25em] text-gray-300 rounded-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          <span>New Season 2026 &bull; Pure Egyptian Cotton</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl font-extralight tracking-tight leading-[1.15] text-white">
                          Pure Fabric.<br />Architectural Fit.
                        </h1>

                        <p className="text-xs sm:text-sm text-gray-300 max-w-lg leading-relaxed font-light tracking-wide">
                          Crafted for understated luxury. Explore our signature 80s 2-ply Oxford shirts, 100% Mulberry silk pyjamas, and breathable Aero-Weave cotton boxers.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                          <button
                            id="hero-shop-shirts-btn"
                            type="button"
                            onClick={() => setCurrentCategory('shirts')}
                            className="bg-white text-[#111111] hover:bg-gray-200 font-normal text-[11px] uppercase px-7 py-3.5 tracking-[0.2em] transition-all duration-300 shadow-xs"
                          >
                            Explore Shirts Collection
                          </button>
                          <button
                            id="hero-featured-pdp-btn"
                            type="button"
                            onClick={() => setSelectedProductId('pb-01')}
                            className="bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10 font-light text-[11px] uppercase px-7 py-3.5 tracking-[0.2em] transition-all duration-300"
                          >
                            View The Oxford Shirt
                          </button>
                        </div>

                        <div className="flex items-center gap-6 pt-4 text-[11px] text-gray-400 font-light tracking-wide">
                          <div>
                            <strong className="text-white font-normal block text-xs">100% Pure</strong>
                            <span>Egyptian Cotton</span>
                          </div>
                          <div className="h-5 w-px bg-neutral-800" />
                          <div>
                            <strong className="text-white font-normal block text-xs">7-Day Free</strong>
                            <span>Doorstep Exchanges</span>
                          </div>
                          <div className="h-5 w-px bg-neutral-800" />
                          <div>
                            <strong className="text-white font-normal block text-xs">₹100 Off</strong>
                            <span>Code: PBJ100</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Hero Image Frame */}
                      <div className="lg:col-span-5 relative">
                        <div 
                          className="relative aspect-[3/4] border border-neutral-800 bg-neutral-900 overflow-hidden shadow-2xl group cursor-pointer"
                          onClick={() => setSelectedProductId('pb-01')}
                        >
                          <img
                            src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1000"
                            alt="The Classic Oxford Shirt by PB & J"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4 text-white flex justify-between items-end">
                            <div>
                              <span className="text-[9px] uppercase tracking-[0.2em] font-light text-amber-300 block mb-0.5">Featured Style</span>
                              <div className="text-sm font-normal tracking-wide">The Classic Oxford Shirt</div>
                              <div className="text-xs font-light text-gray-300 mt-0.5">₹1,299 <span className="line-through text-gray-500 ml-1">₹1,699</span></div>
                            </div>
                            <span className="text-[10px] uppercase font-light tracking-[0.15em] bg-white text-black px-3 py-1.5 hover:bg-gray-200 transition-colors">
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
                    <span className="text-[9px] font-light uppercase tracking-[0.25em] text-gray-500 block mb-1">
                      Explore By Category
                    </span>
                    <h2 className="text-xl sm:text-2xl font-light tracking-tight text-[#111111]">
                      The Pure Essentials
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    
                    {/* Bento 1: Shirts */}
                    <button
                      id="bento-cat-shirts-btn"
                      type="button"
                      onClick={() => setCurrentCategory('shirts')}
                      className="group relative aspect-[3/4] overflow-hidden border border-gray-200/80 text-left bg-neutral-900 shadow-xs focus:outline-hidden"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1000"
                        alt="Shirts Category"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[8px] uppercase tracking-[0.2em] font-light bg-[#111111] px-2 py-0.5 inline-block mb-1.5 border border-white/10">
                          24 Styles
                        </span>
                        <div className="text-sm font-normal tracking-wide">Architectural Shirts</div>
                        <div className="text-xs font-light text-gray-300 flex items-center justify-between mt-1">
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
                      className="group relative aspect-[3/4] overflow-hidden border border-gray-200/80 text-left bg-neutral-900 shadow-xs focus:outline-hidden"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=1000"
                        alt="Pyjamas Category"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[8px] uppercase tracking-[0.2em] font-light bg-[#111111] px-2 py-0.5 inline-block mb-1.5 border border-white/10">
                          Mulberry Silk
                        </span>
                        <div className="text-sm font-normal tracking-wide">Luxury Pyjamas</div>
                        <div className="text-xs font-light text-gray-300 flex items-center justify-between mt-1">
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
                      className="group relative aspect-[3/4] overflow-hidden border border-gray-200/80 text-left bg-neutral-900 shadow-xs focus:outline-hidden"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=1000"
                        alt="Boxers Category"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[8px] uppercase tracking-[0.2em] font-light bg-rose-900 px-2 py-0.5 inline-block mb-1.5">
                          60% Off Packs
                        </span>
                        <div className="text-sm font-normal tracking-wide">Aero Boxers</div>
                        <div className="text-xs font-light text-gray-300 flex items-center justify-between mt-1">
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
                      className="group relative aspect-[3/4] overflow-hidden border border-gray-200/80 text-left bg-neutral-900 shadow-xs focus:outline-hidden"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=1000"
                        alt="Lounge Pants Category"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[8px] uppercase tracking-[0.2em] font-light bg-[#111111] px-2 py-0.5 inline-block mb-1.5 border border-white/10">
                          French Linen
                        </span>
                        <div className="text-sm font-normal tracking-wide">Lounge Pants</div>
                        <div className="text-xs font-light text-gray-300 flex items-center justify-between mt-1">
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
                <section className="bg-white py-16 border-t border-b border-gray-200/80">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                      <div className="flex justify-center text-amber-400 gap-1 text-xs mb-2">
                        {'★'.repeat(5)}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-light tracking-tight text-[#111111]">
                        Loved By Over 12,000+ Gentlemen Across India
                      </h2>
                      <p className="text-xs font-light text-gray-500 mt-1 tracking-wide">
                        4.9 Average Rating across verified shirt &amp; loungewear orders.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 bg-[#FAFAFA] border border-gray-200/80 space-y-3">
                        <div className="text-amber-400 text-xs">★★★★★</div>
                        <p className="text-xs text-gray-600 leading-relaxed font-light italic">
                          &quot;The Oxford shirt fabric is on par with Ralph Lauren at a fraction of the cost. The tailored fit is crisp without feeling restrictive at the shoulders.&quot;
                        </p>
                        <div className="pt-2 border-t border-gray-200/60 flex justify-between items-center text-xs">
                          <strong className="text-[#111111] font-medium">Karan M., Mumbai</strong>
                          <span className="text-[10px] text-emerald-700 font-medium">Verified Buyer</span>
                        </div>
                      </div>

                      <div className="p-6 bg-[#FAFAFA] border border-gray-200/80 space-y-3">
                        <div className="text-amber-400 text-xs">★★★★★</div>
                        <p className="text-xs text-gray-600 leading-relaxed font-light italic">
                          &quot;The Midnight Silk Pyjama Shirt is absolute perfection for evening lounging. Incredibly soft, breathable in Mumbai humidity, and looks bespoke.&quot;
                        </p>
                        <div className="pt-2 border-t border-gray-200/60 flex justify-between items-center text-xs">
                          <strong className="text-[#111111] font-medium">Rohan S., Delhi</strong>
                          <span className="text-[10px] text-emerald-700 font-medium">Verified Buyer</span>
                        </div>
                      </div>

                      <div className="p-6 bg-[#FAFAFA] border border-gray-200/80 space-y-3">
                        <div className="text-amber-400 text-xs">★★★★★</div>
                        <p className="text-xs text-gray-600 leading-relaxed font-light italic">
                          &quot;Swapped all my everyday boxers for PB &amp; J Aero-Weave. The waistband never rolls over and the cotton weave breathes like nothing else.&quot;
                        </p>
                        <div className="pt-2 border-t border-gray-200/60 flex justify-between items-center text-xs">
                          <strong className="text-[#111111] font-medium">Vikram T., Bengaluru</strong>
                          <span className="text-[10px] text-emerald-700 font-medium">Verified Buyer</span>
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
      <footer className="bg-[#111111] text-white border-t border-neutral-800 pt-12 pb-8 text-xs font-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Brand column */}
            <div className="space-y-3">
              <span className="text-lg font-normal tracking-[0.2em] block uppercase text-white">PB &amp; J</span>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                Modern, pure fabric menswear and loungewear. Engineered in Mumbai with 100% natural Egyptian cotton, Mulberry silk, and Normandy linen.
              </p>
              <div className="text-gray-400 text-[11px] font-light">
                Support: <strong className="text-white font-normal">care@pbandj.co.in</strong>
              </div>
            </div>

            {/* Collections */}
            <div className="space-y-2">
              <span className="font-normal uppercase tracking-[0.2em] text-gray-300 block mb-2 text-[10px]">
                Collections
              </span>
              <ul className="space-y-1.5 text-gray-400 font-light">
                <li><button type="button" onClick={() => { setActiveView('store'); setCurrentCategory('shirts'); }} className="hover:text-white transition-colors">Architectural Shirts</button></li>
                <li><button type="button" onClick={() => { setActiveView('store'); setCurrentCategory('pyjamas'); }} className="hover:text-white transition-colors">Mulberry Silk Pyjamas</button></li>
                <li><button type="button" onClick={() => { setActiveView('store'); setCurrentCategory('boxers'); }} className="hover:text-white transition-colors">Aero Weave Boxers</button></li>
                <li><button type="button" onClick={() => { setActiveView('store'); setCurrentCategory('lounge-pants'); }} className="hover:text-white transition-colors">Tailored Lounge Pants</button></li>
              </ul>
            </div>

            {/* Sizing & Client Service */}
            <div className="space-y-2">
              <span className="font-normal uppercase tracking-[0.2em] text-gray-300 block mb-2 text-[10px]">
                Customer Care
              </span>
              <ul className="space-y-1.5 text-gray-400 font-light">
                <li><button type="button" onClick={() => handleOpenSizeChart('shirts')} className="hover:text-white transition-colors">Garment Size Guide</button></li>
                <li><button type="button" onClick={() => showToast('7-Day Doorstep Returns: Contact care@pbandj.co.in')} className="hover:text-white transition-colors">7-Day Doorstep Returns</button></li>
                <li><button type="button" onClick={() => showToast('Free express shipping automatically applied on orders above ₹1,599')} className="hover:text-white transition-colors">Shipping &amp; Delivery Policy</button></li>
                <li><button type="button" onClick={() => setActiveView('audit')} className="hover:text-white transition-colors">CRO Audit Documentation</button></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <span className="font-normal uppercase tracking-[0.2em] text-gray-300 block text-[10px]">
                Join The PB &amp; J Society
              </span>
              <p className="text-gray-400 text-xs font-light">
                Subscribe for private drop previews and receive ₹100 off your initial order.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); showToast('Subscribed! Use code PBJ100 for ₹100 off.'); }} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-neutral-900 border border-neutral-800 text-xs text-white p-2.5 flex-1 focus:border-white focus:outline-hidden font-light"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black px-4 text-[10px] font-medium uppercase tracking-[0.18em] hover:bg-gray-200 transition-colors"
                >
                  Join
                </button>
              </form>
            </div>

          </div>

          <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-[11px] font-light">
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
