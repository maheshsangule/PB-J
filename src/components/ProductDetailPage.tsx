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
    <div className="bg-[#F9F9F9] min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-gray-500 mb-6">
          <button 
            type="button" 
            onClick={() => onSelectProduct('')} 
            className="hover:text-black"
          >
            Home
          </button>
          <span>/</span>
          <span className="capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-gray-900 font-bold truncate max-w-xs">{product.title}</span>
        </nav>

        {/* MAIN PDP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT 7 COLS: IMAGE GALLERY */}
          <div className="lg:col-span-7">
            <div className="flex flex-col-reverse md:flex-row gap-4 sticky top-24">
              
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
                        ? 'border-black ring-2 ring-black'
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
              <div className="flex-1 relative bg-white border border-gray-200 overflow-hidden group">
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
                    <span className="bg-[#BA1A1A] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
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
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6">
            
            {/* Header Meta */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-[#606041] mb-1.5">
                <span>{product.brand}</span>
                <span className="text-gray-400 font-medium">SKU: {product.sku}</span>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1C1C] leading-tight">
                {product.title}
              </h1>

              {/* Rating & Reviews */}
              {product.rating && (
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-700">
                  <div className="flex text-amber-500">
                    {'★'.repeat(5)}
                  </div>
                  <span className="font-bold">{product.rating}</span>
                  <span className="text-gray-400">({product.reviewsCount} verified reviews)</span>
                </div>
              )}
            </div>

            {/* Price Section */}
            <div className="flex items-baseline gap-3 pb-4 border-b border-gray-200">
              <span className="text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-base text-gray-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
              {product.discountPercentage && (
                <span className="text-xs font-bold text-[#BA1A1A] bg-red-50 border border-red-200 px-2 py-0.5 uppercase">
                  {product.discountPercentage}% OFF (Save ₹{product.originalPrice! - product.price})
                </span>
              )}
            </div>

            {/* Live Social Proof / Urgency Counter */}
            <div className="flex items-center gap-2.5 text-xs text-gray-700 bg-[#F5F5F0] p-3 border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"></span>
              <span>
                <strong>{product.viewersCountToday || 45} shoppers</strong> are viewing this item right now. Limited batch production!
              </span>
            </div>

            {/* Color Swatch Selection */}
            <div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
                <span>Color: <strong className="text-gray-600 font-medium">{selectedColor.name}</strong></span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    id={`color-swatch-${idx}-btn`}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`w-9 h-9 border-2 transition-all p-0.5 flex items-center justify-center ${
                      selectedColor.name === color.name
                        ? 'border-black ring-2 ring-black ring-offset-1'
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
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-gray-900">
                <span>
                  Select Size:{' '}
                  <strong className="text-black font-extrabold">
                    {selectedSize || 'Please choose'}
                  </strong>
                </span>
                
                {/* Size Guide Trigger */}
                <button
                  id="open-size-chart-btn"
                  type="button"
                  onClick={() => onOpenSizeChart(product.category)}
                  className="text-[#606041] underline underline-offset-4 hover:text-black transition-colors font-medium flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">straighten</span>
                  <span>Size Chart &amp; Fit Guide</span>
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
                      className={`h-11 text-xs font-bold border transition-all text-center flex flex-col items-center justify-center ${
                        isSelected
                          ? 'border-black bg-black text-white shadow-xs'
                          : v.inStock
                          ? 'border-gray-300 bg-white text-gray-900 hover:border-black'
                          : 'border-gray-200 bg-gray-100 text-gray-400 line-through cursor-not-allowed opacity-60'
                      }`}
                    >
                      <span>{v.size}</span>
                      {v.inStock && v.inventoryCount && v.inventoryCount <= 4 && (
                        <span className="text-[8px] font-normal text-amber-500 -mt-0.5">
                          {v.inventoryCount} left
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Error Shake Alert Banner */}
              {sizeError && (
                <div className="p-3 bg-red-50 border border-red-300 text-[#BA1A1A] text-xs font-medium flex items-center gap-2 animate-shake">
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
                className="w-full bg-[#1C1C1C] text-white hover:bg-black font-bold text-xs uppercase py-4 px-6 tracking-widest transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.99]"
              >
                <span className="material-symbols-outlined text-base">shopping_bag</span>
                <span>Add to Bag &bull; ₹{product.price}</span>
              </button>

              <button
                id="pdp-buy-now-btn"
                type="button"
                onClick={() => handleAddAction(true)}
                className="w-full bg-white text-[#1C1C1C] border-2 border-[#1C1C1C] hover:bg-gray-50 font-bold text-xs uppercase py-3.5 px-6 tracking-widest transition-all flex items-center justify-center gap-2"
              >
                <span>Instant Buy Now (1-Tap Checkout)</span>
              </button>
            </div>

            {/* Pincode & Delivery Checker */}
            <div className="p-4 bg-[#F5F5F0] border border-gray-200 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-800 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-[#606041]">local_shipping</span>
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
                  className="flex-1 p-2 text-xs bg-white border border-gray-300 text-gray-900 focus:border-black focus:outline-hidden"
                />
                <button
                  id="check-pincode-btn"
                  type="submit"
                  className="px-4 py-2 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-wider hover:bg-black"
                >
                  Check
                </button>
              </form>
              {pincodeStatus && (
                <div className="text-xs font-semibold text-emerald-800 pt-1">
                  {pincodeStatus}
                </div>
              )}
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-gray-700 pt-2 border-t border-gray-200">
              <div className="p-2.5 bg-gray-50 border border-gray-100">
                <span className="material-symbols-outlined text-base text-[#606041] block mb-1">verified</span>
                <strong className="block text-black">100% Pure Fabric</strong>
                <span>Certified Cotton</span>
              </div>
              <div className="p-2.5 bg-gray-50 border border-gray-100">
                <span className="material-symbols-outlined text-base text-[#606041] block mb-1">swap_horiz</span>
                <strong className="block text-black">Easy Doorstep</strong>
                <span>7-Day Exchange</span>
              </div>
              <div className="p-2.5 bg-gray-50 border border-gray-100">
                <span className="material-symbols-outlined text-base text-[#606041] block mb-1">local_shipping</span>
                <strong className="block text-black">Free Express</strong>
                <span>Orders &gt; ₹1,599</span>
              </div>
            </div>

            {/* Accordion Information Rows */}
            <div className="space-y-2.5 pt-4 border-t border-gray-200">
              
              {/* Fabric & Material Details */}
              <div className="border border-gray-200">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'fabric' ? null : 'fabric')}
                  className="w-full p-3.5 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-gray-900 bg-white hover:bg-gray-50"
                >
                  <span>Fabric Composition &amp; Craft</span>
                  <span className="material-symbols-outlined text-base text-gray-500">
                    {openAccordion === 'fabric' ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openAccordion === 'fabric' && (
                  <div className="p-4 bg-gray-50/70 border-t border-gray-200 text-xs text-gray-700 leading-relaxed space-y-2">
                    <p>{product.description}</p>
                    <p><strong>Fabric Specification: </strong>{product.fabricDetails}</p>
                  </div>
                )}
              </div>

              {/* Care Instructions */}
              <div className="border border-gray-200">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'care' ? null : 'care')}
                  className="w-full p-3.5 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-gray-900 bg-white hover:bg-gray-50"
                >
                  <span>Wash &amp; Care Guide</span>
                  <span className="material-symbols-outlined text-base text-gray-500">
                    {openAccordion === 'care' ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openAccordion === 'care' && (
                  <div className="p-4 bg-gray-50/70 border-t border-gray-200 text-xs text-gray-700 leading-relaxed">
                    <ul className="list-disc list-inside space-y-1.5">
                      {product.careInstructions.map((inst, i) => (
                        <li key={i}>{inst}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className="border border-gray-200">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                  className="w-full p-3.5 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-gray-900 bg-white hover:bg-gray-50"
                >
                  <span>Shipping &amp; 7-Day Doorstep Returns</span>
                  <span className="material-symbols-outlined text-base text-gray-500">
                    {openAccordion === 'shipping' ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openAccordion === 'shipping' && (
                  <div className="p-4 bg-gray-50/70 border-t border-gray-200 text-xs text-gray-700 leading-relaxed">
                    <p>{product.shippingInfo}</p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* COMPLETE THE LOOK BUNDLE MODULE (+22% AOV Booster) */}
        <div className="mt-16 bg-white p-6 sm:p-10 border border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-gray-200">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#606041]">
                Curated Ensemble
              </span>
              <h2 className="font-serif text-2xl text-[#1C1C1C]">Complete The Look</h2>
            </div>
            <span className="text-xs text-gray-500 font-medium">
              Hand-styled pieces crafted to pair seamlessly with {product.title}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {completeTheLookItems.map((item) => (
              <div key={item.id} className="border border-gray-200 p-3 bg-[#F9F9F9] flex flex-col justify-between">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/5] object-cover bg-white mb-3"
                />
                <div>
                  <h4 className="font-serif text-xs font-bold text-gray-900 truncate">{item.title}</h4>
                  <div className="text-xs font-bold text-[#1C1C1C] mt-1">₹{item.price}</div>
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
                  className="mt-3 w-full bg-white text-[#1C1C1C] border border-[#1C1C1C] hover:bg-black hover:text-white py-2 text-[11px] font-bold uppercase tracking-wider transition-colors"
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
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#606041] block mb-1">
                More From Collection
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1C1C]">
                You May Also Like
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectProduct(rel.id)}
                  className="bg-white border border-gray-200 p-3 group cursor-pointer hover:border-black transition-all"
                >
                  <img
                    src={rel.images[0]}
                    alt={rel.title}
                    className="w-full aspect-[3/4] object-cover mb-3"
                  />
                  <div className="text-[10px] font-semibold uppercase text-[#606041]">{rel.brand}</div>
                  <h4 className="font-serif text-xs font-bold text-gray-900 truncate group-hover:text-black">{rel.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-bold text-black">₹{rel.price}</span>
                    {rel.originalPrice && (
                      <span className="text-[10px] text-gray-400 line-through">₹{rel.originalPrice}</span>
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
