import React, { useState } from 'react';
import { Product, ProductColor, CartItem } from '../types';
import { productsData, completeTheLookItems } from '../data/products';

interface ProductDetailPageProps {
  product: Product;
  onAddToCart: (item: CartItem) => void;
  onBuyNow: (item: CartItem) => void;
  onOpenSizeChart: (category: string) => void;
  onSelectProduct: (productId: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onAddToCart,
  onBuyNow,
  onOpenSizeChart,
  onSelectProduct
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sizeError, setSizeError] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>('fabric');
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setSizeError(false);
  };

  const handleAddAction = (isDirectBuy: boolean) => {
    if (!selectedSize) {
      setSizeError(true);
      // Auto-scroll to size box if needed
      const elem = document.getElementById('size-selector-box');
      if (elem) elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const item: CartItem = {
      product,
      selectedSize,
      selectedColor,
      quantity: 1
    };

    if (isDirectBuy) {
      onBuyNow(item);
    } else {
      onAddToCart(item);
    }
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setPincodeStatus('Available! Express Delivery by tomorrow with Cash on Delivery.');
    } else {
      setPincodeStatus('Please enter a valid 6-digit Indian pincode.');
    }
  };

  const relatedProducts = productsData
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-6 sm:py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-6 font-light">
          <button 
            type="button" 
            onClick={() => onSelectProduct('')} 
            className="hover:text-black transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <span className="capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-gray-900 font-normal truncate max-w-xs">{product.title}</span>
        </nav>

        {/* MAIN PDP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT 7 COLS: IMAGE GALLERY */}
          <div className="lg:col-span-7">
            <div className="flex flex-col-reverse md:flex-row gap-4 sticky top-20">
              
              {/* Thumbnail Rail (Desktop) */}
              <div className="hidden md:flex flex-col gap-3 w-20 flex-shrink-0">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    id={`thumb-img-${idx}-btn`}
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`border overflow-hidden aspect-[3/4] bg-white transition-all ${
                      selectedImageIndex === idx
                        ? 'border-black ring-1 ring-black'
                        : 'border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image Stage */}
              <div className="flex-1 relative bg-white border border-gray-200/80 overflow-hidden group">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={product.images[selectedImageIndex] || product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Badges */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#111111] text-white text-[9px] font-light px-3 py-1 uppercase tracking-[0.18em]">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Mobile Thumbnail Carousel Dots */}
                <div className="flex md:hidden justify-center gap-1.5 p-3 bg-white border-t border-gray-100">
                  {product.images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        selectedImageIndex === idx ? 'w-6 bg-black' : 'w-2 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT 5 COLS: BUY BOX & DECISION ENGINE */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-6">
            
            {/* Header Meta */}
            <div>
              <div className="flex justify-between items-center text-[9px] font-light uppercase tracking-[0.2em] text-gray-500 mb-1.5">
                <span>{product.brand}</span>
                <span className="text-gray-400 font-light">SKU: {product.sku}</span>
              </div>

              <h1 className="text-xl sm:text-2xl font-light text-[#111111] leading-tight tracking-tight">
                {product.title}
              </h1>

              {/* Rating & Reviews */}
              {product.rating && (
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-600 font-light">
                  <div className="flex text-amber-400 text-xs">
                    {'★'.repeat(5)}
                  </div>
                  <span className="font-normal">{product.rating}</span>
                  <span className="text-gray-400">({product.reviewsCount} verified reviews)</span>
                </div>
              )}
            </div>

            {/* Price Section */}
            <div className="flex items-baseline gap-3 pb-4 border-b border-gray-200/80">
              <span className="text-2xl sm:text-3xl font-light text-[#111111]">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through font-light">
                  ₹{product.originalPrice}
                </span>
              )}
              {product.discountPercentage && (
                <span className="text-[9px] font-normal text-rose-800 bg-rose-50 border border-rose-100 px-2 py-0.5 uppercase tracking-wider">
                  {product.discountPercentage}% OFF (Save ₹{product.originalPrice! - product.price})
                </span>
              )}
            </div>

            {/* Live Social Proof / Urgency Counter */}
            <div className="flex items-center gap-2.5 text-xs text-gray-600 font-light bg-[#F4F4F0] p-3 border border-gray-200/80">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"></span>
              <span>
                <strong className="font-normal text-gray-900">{product.viewersCountToday || 45} shoppers</strong> are viewing this item right now. Limited batch production!
              </span>
            </div>

            {/* Color Swatch Selection */}
            <div>
              <div className="flex justify-between text-[10px] font-normal uppercase tracking-[0.18em] text-gray-900 mb-2">
                <span>Color: <strong className="text-gray-600 font-light">{selectedColor.name}</strong></span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    id={`color-swatch-${idx}-btn`}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 border transition-all p-0.5 flex items-center justify-center ${
                      selectedColor.name === color.name
                        ? 'border-black ring-1 ring-black ring-offset-1'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                    title={color.name}
                  >
                    <span className="w-full h-full block" style={{ backgroundColor: color.hex }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection with Error Prevention Box */}
            <div id="size-selector-box" className="space-y-2">
              <div className="flex justify-between items-center text-[10px] font-normal uppercase tracking-[0.18em] text-gray-900">
                <span>
                  Select Size:{' '}
                  <strong className="text-black font-medium">
                    {selectedSize || 'Please choose'}
                  </strong>
                </span>
                
                {/* Size Guide Trigger */}
                <button
                  id="open-size-chart-btn"
                  type="button"
                  onClick={() => onOpenSizeChart(product.category)}
                  className="text-gray-600 underline underline-offset-4 hover:text-black transition-colors font-light flex items-center gap-1 text-xs"
                >
                  <span className="material-symbols-outlined text-sm">straighten</span>
                  <span>Size Chart</span>
                </button>
              </div>

              {/* Size Radio Pills */}
              <div className="grid grid-cols-6 gap-2">
                {product.variants.map((v) => {
                  const isSelected = selectedSize === v.size;
                  return (
                    <button
                      key={v.id}
                      id={`pdp-size-${v.size}-btn`}
                      type="button"
                      disabled={!v.inStock}
                      onClick={() => handleSizeSelect(v.size)}
                      className={`h-10 text-xs font-light border transition-all text-center flex flex-col items-center justify-center ${
                        isSelected
                          ? 'border-black bg-black text-white font-normal shadow-xs'
                          : v.inStock
                          ? 'border-gray-200 bg-white text-gray-900 hover:border-black'
                          : 'border-gray-200 bg-gray-100 text-gray-400 line-through cursor-not-allowed opacity-60'
                      }`}
                    >
                      <span>{v.size}</span>
                      {v.inStock && v.inventoryCount && v.inventoryCount <= 4 && (
                        <span className="text-[8px] font-light text-amber-600 -mt-0.5">
                          {v.inventoryCount} left
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Error Shake Alert Banner */}
              {sizeError && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs font-light flex items-center gap-2 animate-shake">
                  <span className="material-symbols-outlined text-base flex-shrink-0">error</span>
                  <span>Please choose your size before adding to shopping bag.</span>
                </div>
              )}
            </div>

            {/* PRIMARY & SECONDARY PURCHASE CTAS */}
            <div className="space-y-3 pt-2">
              <button
                id="pdp-add-to-bag-btn"
                type="button"
                onClick={() => handleAddAction(false)}
                className="w-full bg-[#111111] text-white hover:bg-black font-normal text-[11px] uppercase py-3.5 px-6 tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-xs active:scale-[0.99]"
              >
                <span className="material-symbols-outlined text-base">shopping_bag</span>
                <span>Add to Bag &bull; ₹{product.price}</span>
              </button>

              <button
                id="pdp-buy-now-btn"
                type="button"
                onClick={() => handleAddAction(true)}
                className="w-full bg-white text-[#111111] border border-[#111111] hover:bg-gray-50 font-normal text-[11px] uppercase py-3.5 px-6 tracking-[0.2em] transition-all flex items-center justify-center gap-2"
              >
                <span>Instant Buy Now</span>
              </button>
            </div>

            {/* Pincode & Delivery Checker */}
            <div className="p-4 bg-[#F4F4F0] border border-gray-200/80 space-y-2">
              <div className="text-[10px] font-normal uppercase tracking-[0.18em] text-gray-800 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-gray-600">local_shipping</span>
                <span>Check Delivery &amp; COD Availability</span>
              </div>
              <form onSubmit={handleCheckPincode} className="flex gap-2">
                <input
                  id="pincode-input"
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter 6-digit Pincode (e.g. 400001)"
                  className="flex-1 p-2 text-xs bg-white border border-gray-200 text-gray-900 focus:border-black focus:outline-hidden font-light"
                />
                <button
                  id="check-pincode-btn"
                  type="submit"
                  className="px-4 py-2 bg-[#111111] text-white text-[10px] font-normal uppercase tracking-[0.18em] hover:bg-black"
                >
                  Check
                </button>
              </form>
              {pincodeStatus && (
                <div className="text-xs font-light text-emerald-800 pt-1">
                  {pincodeStatus}
                </div>
              )}
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-light text-gray-600 pt-2 border-t border-gray-200/80">
              <div className="p-2.5 bg-gray-50/70 border border-gray-100">
                <span className="material-symbols-outlined text-base text-gray-600 block mb-1">verified</span>
                <strong className="block text-black font-normal">100% Pure Fabric</strong>
                <span>Certified Cotton</span>
              </div>
              <div className="p-2.5 bg-gray-50/70 border border-gray-100">
                <span className="material-symbols-outlined text-base text-gray-600 block mb-1">swap_horiz</span>
                <strong className="block text-black font-normal">Easy Doorstep</strong>
                <span>7-Day Exchange</span>
              </div>
              <div className="p-2.5 bg-gray-50/70 border border-gray-100">
                <span className="material-symbols-outlined text-base text-gray-600 block mb-1">local_shipping</span>
                <strong className="block text-black font-normal">Free Express</strong>
                <span>Orders &gt; ₹1,599</span>
              </div>
            </div>

            {/* Accordion Information Rows */}
            <div className="space-y-2.5 pt-4 border-t border-gray-200/80">
              
              {/* Fabric & Material Details */}
              <div className="border border-gray-200/80">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'fabric' ? null : 'fabric')}
                  className="w-full p-3 flex justify-between items-center text-[10px] font-normal uppercase tracking-[0.18em] text-gray-900 bg-white hover:bg-gray-50"
                >
                  <span>Fabric Composition &amp; Craft</span>
                  <span className="material-symbols-outlined text-base text-gray-500">
                    {openAccordion === 'fabric' ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openAccordion === 'fabric' && (
                  <div className="p-4 bg-gray-50/70 border-t border-gray-200/80 text-xs text-gray-600 leading-relaxed font-light space-y-2">
                    <p>{product.description}</p>
                    <p><strong className="font-normal text-gray-900">Fabric Specification: </strong>{product.fabricDetails}</p>
                  </div>
                )}
              </div>

              {/* Care Instructions */}
              <div className="border border-gray-200/80">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'care' ? null : 'care')}
                  className="w-full p-3 flex justify-between items-center text-[10px] font-normal uppercase tracking-[0.18em] text-gray-900 bg-white hover:bg-gray-50"
                >
                  <span>Wash &amp; Care Guide</span>
                  <span className="material-symbols-outlined text-base text-gray-500">
                    {openAccordion === 'care' ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openAccordion === 'care' && (
                  <div className="p-4 bg-gray-50/70 border-t border-gray-200/80 text-xs text-gray-600 leading-relaxed font-light">
                    <ul className="list-disc list-inside space-y-1.5">
                      {product.careInstructions.map((inst, i) => (
                        <li key={i}>{inst}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className="border border-gray-200/80">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                  className="w-full p-3 flex justify-between items-center text-[10px] font-normal uppercase tracking-[0.18em] text-gray-900 bg-white hover:bg-gray-50"
                >
                  <span>Shipping &amp; 7-Day Doorstep Returns</span>
                  <span className="material-symbols-outlined text-base text-gray-500">
                    {openAccordion === 'shipping' ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openAccordion === 'shipping' && (
                  <div className="p-4 bg-gray-50/70 border-t border-gray-200/80 text-xs text-gray-600 leading-relaxed font-light">
                    <p>{product.shippingInfo}</p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* COMPLETE THE LOOK BUNDLE MODULE */}
        <div className="mt-16 bg-white p-6 sm:p-10 border border-gray-200/80">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-gray-200/80">
            <div>
              <span className="text-[9px] font-light uppercase tracking-[0.25em] text-gray-500 block mb-1">
                Curated Ensemble
              </span>
              <h2 className="text-xl sm:text-2xl text-[#111111] font-light tracking-tight">Complete The Look</h2>
            </div>
            <span className="text-xs text-gray-500 font-light">
              Hand-styled pieces crafted to pair seamlessly with {product.title}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {completeTheLookItems.map((item) => (
              <div key={item.id} className="border border-gray-200/80 p-3 bg-[#FAFAFA] flex flex-col justify-between">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/5] object-cover bg-white mb-3"
                />
                <div>
                  <h4 className="text-xs font-normal text-gray-900 truncate tracking-wide">{item.title}</h4>
                  <div className="text-xs font-light text-[#111111] mt-1">₹{item.price}</div>
                </div>
                <button
                  id={`bundle-item-${item.id}-btn`}
                  type="button"
                  onClick={() => {
                    onAddToCart({
                      product: {
                        ...product,
                        id: item.id,
                        title: item.title,
                        price: item.price
                      },
                      selectedSize: 'M',
                      selectedColor: product.colors[0],
                      quantity: 1
                    });
                  }}
                  className="mt-3 w-full bg-white text-[#111111] border border-[#111111] hover:bg-black hover:text-white py-2 text-[10px] font-normal uppercase tracking-[0.18em] transition-colors"
                >
                  + Add to Bundle
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED PRODUCTS CAROUSEL */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <span className="text-[9px] font-light uppercase tracking-[0.25em] text-gray-500 block mb-1">
                More From Collection
              </span>
              <h2 className="text-xl sm:text-2xl text-[#111111] font-light tracking-tight">
                You May Also Like
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectProduct(rel.id)}
                  className="bg-white border border-gray-200/80 p-3 group cursor-pointer hover:border-black transition-all"
                >
                  <img
                    src={rel.images[0]}
                    alt={rel.title}
                    className="w-full aspect-[3/4] object-cover mb-3"
                  />
                  <div className="text-[9px] font-light uppercase tracking-[0.18em] text-gray-500">{rel.brand}</div>
                  <h4 className="text-xs font-normal text-gray-900 truncate group-hover:text-black tracking-wide">{rel.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-normal text-black">₹{rel.price}</span>
                    {rel.originalPrice && (
                      <span className="text-[10px] text-gray-400 font-light line-through">₹{rel.originalPrice}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
