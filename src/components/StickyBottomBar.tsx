import React from 'react';
import { Product, CartItem } from '../types';

interface StickyBottomBarProps {
  activeView: 'store' | 'audit' | 'liquid';
  onSelectView: (view: 'store' | 'audit' | 'liquid') => void;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  cartCount: number;
  activeProduct?: Product | null;
  onAddToCart?: (item: CartItem) => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  activeView,
  onSelectView,
  onOpenCart,
  onOpenSearch,
  cartCount,
  activeProduct,
  onAddToCart
}) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden">
      
      {/* 1. PDP MOBILE STICKY BUY BAR (Visible if viewing PDP in store mode) */}
      {activeView === 'store' && activeProduct && onAddToCart && (
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-300 p-2.5 shadow-2xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src={activeProduct.images[0]}
              alt={activeProduct.title}
              className="w-10 h-12 object-cover border border-gray-200 flex-shrink-0"
            />
            <div className="min-w-0">
              <div className="text-[11px] font-bold text-gray-900 truncate">
                {activeProduct.title}
              </div>
              <div className="text-xs font-bold text-black">
                ₹{activeProduct.price}
              </div>
            </div>
          </div>

          <button
            id="mobile-sticky-pdp-add-btn"
            type="button"
            onClick={() => {
              // Trigger scroll to size selector or add default M
              const sizeBox = document.getElementById('size-selector-box');
              if (sizeBox) {
                sizeBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            className="bg-[#1C1C1C] text-white hover:bg-black font-bold text-xs uppercase px-4 py-3 tracking-wider flex items-center gap-1.5 flex-shrink-0 shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">shopping_bag</span>
            <span>Select Size &bull; Add</span>
          </button>
        </div>
      )}

      {/* 2. GLOBAL MOBILE BOTTOM NAVIGATION BAR */}
      <div className="bg-white border-t border-gray-200 px-6 py-2.5 flex items-center justify-around shadow-lg">
        
        {/* Shop Tab */}
        <button
          id="mobile-tab-shop-btn"
          type="button"
          onClick={() => onSelectView('store')}
          className="flex flex-col items-center py-1 text-black transition-colors"
        >
          <span className="material-symbols-outlined text-xl">storefront</span>
          <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5">Shop</span>
        </button>

        {/* Search Tab */}
        <button
          id="mobile-tab-search-btn"
          type="button"
          onClick={onOpenSearch}
          className="flex flex-col items-center py-1 text-gray-500 hover:text-black transition-colors"
        >
          <span className="material-symbols-outlined text-xl">search</span>
          <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5">Search</span>
        </button>

        {/* Bag Tab with Count */}
        <button
          id="mobile-tab-bag-btn"
          type="button"
          onClick={onOpenCart}
          className="flex flex-col items-center py-1 relative text-gray-500 hover:text-black transition-colors"
        >
          <span className="material-symbols-outlined text-xl">shopping_bag</span>
          <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5">Bag</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 right-2 bg-[#1C1C1C] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

      </div>
    </div>
  );
};
