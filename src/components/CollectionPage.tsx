import React, { useState, useMemo } from 'react';
import { Product, CategoryType, CartItem } from '../types';
import { productsData } from '../data/products';

interface CollectionPageProps {
  category: CategoryType;
  onSelectCategory: (cat: CategoryType) => void;
  onSelectProduct: (productId: string) => void;
  onAddToCart: (item: CartItem) => void;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({
  category,
  onSelectCategory,
  onSelectProduct,
  onAddToCart
}) => {
  const [selectedFit, setSelectedFit] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'best-selling'>('featured');
  const [gridCols, setGridCols] = useState<2 | 4>(4);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  // Category title and subtitle mapping
  const categoryHeaders: Record<CategoryType, { title: string; subtitle: string; bannerImg?: string }> = {
    all: {
      title: 'The Full Wardrobe Collection',
      subtitle: 'Engineered from premium Egyptian cotton, French flax linen, and 100% Mulberry silk.'
    },
    shirts: {
      title: 'Architectural Shirts',
      subtitle: 'Tailored and relaxed silhouettes crafted with 80s 2-ply long-staple cotton.'
    },
    pyjamas: {
      title: 'Luxury Pyjamas & Loungewear',
      subtitle: 'Temperature-regulating silk satin and breathable brushed cotton sets.'
    },
    boxers: {
      title: 'Aero-Weave Cotton Boxers',
      subtitle: 'Concealed microfiber waistband, anti-roll hem, and breathable air weave.'
    },
    'lounge-pants': {
      title: 'Structured Lounge Pants',
      subtitle: 'Pleated french linen and organic heavyweight cotton for versatile daily wear.'
    }
  };

  const filteredProducts = useMemo(() => {
    let list = productsData.filter((p) => {
      if (category !== 'all' && p.category !== category) return false;
      if (selectedFit !== 'all' && p.fit !== selectedFit) return false;
      if (selectedSize !== 'all') {
        const hasSize = p.variants.some((v) => v.size === selectedSize && v.inStock);
        if (!hasSize) return false;
      }
      if (inStockOnly) {
        const hasAnyStock = p.variants.some((v) => v.inStock);
        if (!hasAnyStock) return false;
      }
      return true;
    });

    if (sortBy === 'price-low') {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list = [...list].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'best-selling') {
      list = [...list].sort((a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0));
    }
    return list;
  }, [category, selectedFit, selectedSize, inStockOnly, sortBy]);

  const activeHeader = categoryHeaders[category];

  return (
    <div className="bg-[#F9F9F9] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-gray-500 mb-4">
          <button 
            type="button" 
            onClick={() => onSelectCategory('all')} 
            className="hover:text-black"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-gray-900 font-bold capitalize">
            {category === 'all' ? 'All Collections' : category.replace('-', ' ')}
          </span>
        </nav>

        {/* Collection Header Banner */}
        <div className="bg-white p-6 sm:p-10 border border-gray-200 mb-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#606041] block mb-1">
              Curated Essentials
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1C1C1C] font-normal tracking-tight">
              {activeHeader.title}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed font-sans">
              {activeHeader.subtitle}
            </p>
          </div>

          {/* Category Switcher Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {(['all', 'shirts', 'pyjamas', 'boxers', 'lounge-pants'] as CategoryType[]).map((cat) => (
              <button
                key={cat}
                id={`cat-chip-${cat}-btn`}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                  category === cat
                    ? 'bg-[#1C1C1C] text-white border-black shadow-xs'
                    : 'bg-[#F5F5F0] text-gray-700 border-gray-200 hover:border-black'
                }`}
              >
                {cat === 'all' ? 'All' : cat.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* STICKY FILTER & SORT TOOLBAR */}
        <div className="sticky top-24 z-30 bg-white/95 backdrop-blur-xs border border-gray-200 p-3 sm:p-4 mb-8 shadow-xs flex flex-wrap items-center justify-between gap-4">
          
          {/* Left: Filter Toggle & Results Count */}
          <div className="flex items-center gap-4">
            <button
              id="filter-drawer-toggle-btn"
              type="button"
              onClick={() => setShowFilterDrawer(!showFilterDrawer)}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
            >
              <span className="material-symbols-outlined text-base">tune</span>
              <span>Filters {selectedFit !== 'all' || selectedSize !== 'all' || inStockOnly ? '(Active)' : ''}</span>
            </button>

            <span className="text-xs font-semibold text-gray-600">
              Showing <strong>{filteredProducts.length}</strong> styles
            </span>
          </div>

          {/* Right: Grid density & Sort Dropdown */}
          <div className="flex items-center gap-3">
            {/* Desktop Grid Switcher */}
            <div className="hidden sm:flex items-center border border-gray-300 bg-white">
              <button
                id="grid-density-2-btn"
                type="button"
                onClick={() => setGridCols(2)}
                className={`p-1.5 text-xs ${gridCols === 2 ? 'bg-black text-white' : 'text-gray-500 hover:text-black'}`}
                title="2 Columns"
              >
                <span className="material-symbols-outlined text-base">view_agenda</span>
              </button>
              <button
                id="grid-density-4-btn"
                type="button"
                onClick={() => setGridCols(4)}
                className={`p-1.5 text-xs ${gridCols === 4 ? 'bg-black text-white' : 'text-gray-500 hover:text-black'}`}
                title="4 Columns"
              >
                <span className="material-symbols-outlined text-base">grid_view</span>
              </button>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-1.5 text-xs">
              <label htmlFor="plp-sort-select" className="font-semibold text-gray-700 hidden sm:inline">
                Sort By:
              </label>
              <select
                id="plp-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-gray-300 text-xs font-semibold px-3 py-2 text-gray-900 focus:border-black focus:outline-hidden"
              >
                <option value="featured">Featured Curations</option>
                <option value="best-selling">Best Selling</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* ACTIVE FILTER CHIPS ROW */}
          {(selectedFit !== 'all' || selectedSize !== 'all' || inStockOnly) && (
            <div className="w-full flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
              <span className="text-[10px] uppercase font-bold text-gray-400">Active Filters:</span>
              {selectedFit !== 'all' && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-gray-100 px-2 py-0.5 border border-gray-300">
                  Fit: {selectedFit}
                  <button type="button" onClick={() => setSelectedFit('all')} className="hover:text-red-600 font-bold ml-1">×</button>
                </span>
              )}
              {selectedSize !== 'all' && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-gray-100 px-2 py-0.5 border border-gray-300">
                  Size: {selectedSize}
                  <button type="button" onClick={() => setSelectedSize('all')} className="hover:text-red-600 font-bold ml-1">×</button>
                </span>
              )}
              {inStockOnly && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-gray-100 px-2 py-0.5 border border-gray-300">
                  In-Stock Only
                  <button type="button" onClick={() => setInStockOnly(false)} className="hover:text-red-600 font-bold ml-1">×</button>
                </span>
              )}
              <button
                type="button"
                onClick={() => {
                  setSelectedFit('all');
                  setSelectedSize('all');
                  setInStockOnly(false);
                }}
                className="text-[11px] underline text-[#BA1A1A] font-semibold hover:text-black ml-2"
              >
                Clear All
              </button>
            </div>
          )}

        </div>

        {/* EXPANDABLE FILTER DRAWER ACCORDION */}
        {showFilterDrawer && (
          <div className="bg-white p-6 border border-gray-200 mb-8 animate-fadeIn space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Fit Filter */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-900 block mb-2">
                  Fit Preference
                </label>
                <div className="flex flex-wrap gap-2">
                  {['all', 'Tailored', 'Relaxed', 'Oversized'].map((fit) => (
                    <button
                      key={fit}
                      type="button"
                      onClick={() => setSelectedFit(fit)}
                      className={`px-3 py-1.5 text-xs font-semibold border ${
                        selectedFit === fit
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-black'
                      }`}
                    >
                      {fit === 'all' ? 'All Fits' : fit}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-900 block mb-2">
                  Size Availability
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {['all', 'XS', 'S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`w-9 h-8 text-xs font-bold border flex items-center justify-center ${
                        selectedSize === sz
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-black'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* In-Stock Toggle */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-900 block mb-2">
                  Inventory State
                </label>
                <label className="inline-flex items-center gap-2 cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 rounded-none border-gray-300 text-black focus:ring-black"
                  />
                  <span className="text-xs font-medium text-gray-800">
                    Hide Out of Stock Variants
                  </span>
                </label>
              </div>

            </div>

            <div className="flex justify-end pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setShowFilterDrawer(false)}
                className="px-4 py-2 bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-wider hover:bg-black"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* PRODUCT GRID */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white p-12 border border-gray-200 text-center space-y-3">
            <span className="material-symbols-outlined text-4xl text-gray-400">filter_alt_off</span>
            <h3 className="font-serif text-lg text-gray-800">No products match your filter criteria</h3>
            <p className="text-xs text-gray-500">
              Try adjusting your size or fit options to see available styles.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedFit('all');
                setSelectedSize('all');
                setInStockOnly(false);
              }}
              className="mt-2 inline-block bg-black text-white px-5 py-2 text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            className={`grid gap-4 sm:gap-6 ${
              gridCols === 2
                ? 'grid-cols-1 sm:grid-cols-2'
                : 'grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {filteredProducts.map((product) => {
              const isHovered = hoveredCardId === product.id;
              const hasSecondaryImg = product.images.length > 1;
              const activeImg = isHovered && hasSecondaryImg ? product.images[1] : product.images[0];

              return (
                <div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  onMouseEnter={() => setHoveredCardId(product.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  className="group bg-white border border-gray-200 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-black hover:shadow-md"
                >
                  {/* Visual Top Container */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 cursor-pointer"
                       onClick={() => onSelectProduct(product.id)}>
                    
                    <img
                      src={activeImg}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Badge Overlay */}
                    {product.badge && (
                      <div className="absolute top-2.5 left-2.5 z-10">
                        <span
                          className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 text-white ${
                            product.badge === 'Sale'
                              ? 'bg-[#BA1A1A]'
                              : product.badge === 'Signature'
                              ? 'bg-[#606041]'
                              : 'bg-[#1C1C1C]'
                          }`}
                        >
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Social Viewers Micro Counter */}
                    {product.viewersCountToday && (
                      <div className="absolute bottom-2.5 left-2.5 z-10 bg-white/90 backdrop-blur-xs px-2 py-0.5 text-[9px] font-semibold text-gray-700 border border-gray-200 hidden sm:flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>{product.viewersCountToday} browsing</span>
                      </div>
                    )}

                    {/* QUICK SIZE SLIDE-UP OVERLAY ON HOVER */}
                    <div
                      className={`absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-xs p-2.5 border-t border-gray-200 transition-all duration-300 transform ${
                        isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1 text-center">
                        Quick Add Size
                      </div>
                      <div className="flex justify-center gap-1">
                        {product.variants.map((v) => (
                          <button
                            key={v.id}
                            id={`quick-add-${product.id}-${v.size}-btn`}
                            type="button"
                            disabled={!v.inStock}
                            onClick={() => {
                              onAddToCart({
                                product,
                                selectedSize: v.size,
                                selectedColor: product.colors[0],
                                quantity: 1
                              });
                            }}
                            className={`w-7 h-7 text-[10px] font-bold border transition-colors flex items-center justify-center ${
                              v.inStock
                                ? 'border-gray-300 bg-white text-gray-900 hover:bg-black hover:text-white hover:border-black'
                                : 'border-gray-100 bg-gray-100 text-gray-300 line-through cursor-not-allowed'
                            }`}
                            title={v.inStock ? `Add Size ${v.size}` : `Size ${v.size} Sold Out`}
                          >
                            {v.size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 bg-white">
                    <div>
                      {/* Brand & Fit info */}
                      <div className="flex justify-between items-center text-[10px] font-semibold uppercase tracking-wider text-[#606041] mb-1">
                        <span>{product.brand}</span>
                        <span className="text-gray-400">{product.fit} Fit</span>
                      </div>

                      {/* Product Title */}
                      <h3
                        onClick={() => onSelectProduct(product.id)}
                        className="font-serif text-sm font-bold text-[#1C1C1C] hover:text-gray-600 transition-colors line-clamp-1 cursor-pointer"
                      >
                        {product.title}
                      </h3>

                      {/* Color Swatch Dots */}
                      <div className="flex items-center gap-1.5 mt-2">
                        {product.colors.map((c, idx) => (
                          <span
                            key={idx}
                            className="w-3 h-3 border border-gray-300 inline-block"
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                          />
                        ))}
                        <span className="text-[10px] text-gray-400 font-medium ml-1">
                          {product.colors.length} {product.colors.length > 1 ? 'shades' : 'shade'}
                        </span>
                      </div>
                    </div>

                    {/* Price & Discount */}
                    <div className="flex items-baseline justify-between pt-3 mt-3 border-t border-gray-100">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-bold text-[#1C1C1C]">
                          ₹{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>
                      {product.discountPercentage && (
                        <span className="text-[10px] font-extrabold text-[#BA1A1A] bg-red-50 px-1.5 py-0.5 border border-red-100">
                          {product.discountPercentage}% OFF
                        </span>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
