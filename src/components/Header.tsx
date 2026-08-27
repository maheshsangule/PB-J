import React, { useState, useEffect } from 'react';
import { CategoryType } from '../types';

interface HeaderProps {
  currentCategory: CategoryType;
  onSelectCategory: (cat: CategoryType) => void;
  activeView: 'store' | 'audit' | 'liquid';
  onSelectView: (view: 'store' | 'audit' | 'liquid') => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenMobileNav: () => void;
  onSelectProduct: (productId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCategory,
  onSelectCategory,
  activeView,
  onSelectView,
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenMobileNav,
  onSelectProduct
}) => {
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const announcements = [
    'FLAT ₹100 OFF ON ALL ORDERS ABOVE ₹1,599 | USE CODE: PBJ100',
    'COMPLIMENTARY EXPRESS DOORSTEP SHIPPING & EASY 7-DAY EXCHANGES',
    'NEW MONOCHROME SILK PYJAMAS & OXFORD SHIRTS JUST DROPPED'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [announcements.length]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#111111] text-white py-1.5 px-4 text-center text-[10px] font-light tracking-[0.15em] uppercase flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-xs hidden sm:inline text-gray-400">local_shipping</span>
        <span className="transition-opacity duration-300 text-gray-200">
          {announcements[announcementIndex]}
        </span>
      </div>

      {/* MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Mobile Hamburger & Search Trigger */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              id="mobile-nav-toggle-btn"
              type="button"
              onClick={onOpenMobileNav}
              className="p-1.5 text-gray-700 hover:text-black focus:outline-hidden"
              aria-label="Open Mobile Menu"
            >
              <span className="material-symbols-outlined text-xl">menu</span>
            </button>
            <button
              id="mobile-search-btn"
              type="button"
              onClick={onOpenSearch}
              className="p-1.5 text-gray-700 hover:text-black focus:outline-hidden"
              aria-label="Search"
            >
              <span className="material-symbols-outlined text-xl">search</span>
            </button>
          </div>

          {/* BRAND LOGO - Clean layout, zero gap above */}
          <div className="flex-shrink-0 flex items-center">
            <button
              id="brand-home-link-btn"
              type="button"
              onClick={() => {
                onSelectView('store');
                onSelectCategory('all');
              }}
              className="text-left group flex flex-col justify-center py-1"
            >
              <span className="text-base sm:text-lg font-normal tracking-[0.2em] text-[#111111] uppercase group-hover:opacity-70 transition-opacity leading-none">
                PB &amp; J
              </span>
              <span className="text-[8px] uppercase tracking-[0.25em] text-gray-500 font-light mt-1 leading-none">
                Pure Fabric &bull; Modern Fit
              </span>
            </button>
          </div>

          {/* DESKTOP MAIN NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-7">
            <button
              id="nav-cat-all-btn"
              type="button"
              onClick={() => {
                onSelectView('store');
                onSelectCategory('all');
              }}
              className={`text-[11px] uppercase font-light tracking-[0.18em] py-2 transition-all border-b ${
                currentCategory === 'all' && activeView === 'store'
                  ? 'border-black text-black font-normal'
                  : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
              }`}
            >
              All Essentials
            </button>
            <button
              id="nav-cat-shirts-btn"
              type="button"
              onClick={() => {
                onSelectView('store');
                onSelectCategory('shirts');
              }}
              className={`text-[11px] uppercase font-light tracking-[0.18em] py-2 transition-all border-b ${
                currentCategory === 'shirts' && activeView === 'store'
                  ? 'border-black text-black font-normal'
                  : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
              }`}
            >
              Shirts
            </button>
            <button
              id="nav-cat-pyjamas-btn"
              type="button"
              onClick={() => {
                onSelectView('store');
                onSelectCategory('pyjamas');
              }}
              className={`text-[11px] uppercase font-light tracking-[0.18em] py-2 transition-all border-b ${
                currentCategory === 'pyjamas' && activeView === 'store'
                  ? 'border-black text-black font-normal'
                  : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
              }`}
            >
              Pyjamas
            </button>
            <button
              id="nav-cat-boxers-btn"
              type="button"
              onClick={() => {
                onSelectView('store');
                onSelectCategory('boxers');
              }}
              className={`text-[11px] uppercase font-light tracking-[0.18em] py-2 transition-all border-b ${
                currentCategory === 'boxers' && activeView === 'store'
                  ? 'border-black text-black font-normal'
                  : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
              }`}
            >
              Boxers
            </button>
            <button
              id="nav-cat-lounge-btn"
              type="button"
              onClick={() => {
                onSelectView('store');
                onSelectCategory('lounge-pants');
              }}
              className={`text-[11px] uppercase font-light tracking-[0.18em] py-2 transition-all border-b ${
                currentCategory === 'lounge-pants' && activeView === 'store'
                  ? 'border-black text-black font-normal'
                  : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
              }`}
            >
              Lounge Pants
            </button>
            <button
              id="nav-sale-btn"
              type="button"
              onClick={() => {
                onSelectView('store');
                onSelectCategory('all');
              }}
              className="text-[11px] uppercase font-medium tracking-[0.18em] py-2 text-rose-700 hover:text-rose-900 flex items-center gap-1.5"
            >
              <span>Sale 50% Off</span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse"></span>
            </button>
          </nav>

          {/* DESKTOP RIGHT ACTIONS */}
          <div className="flex items-center space-x-3">
            <button
              id="desktop-search-btn"
              type="button"
              onClick={onOpenSearch}
              className="hidden lg:flex items-center gap-1.5 text-[11px] uppercase font-light tracking-[0.18em] text-gray-600 hover:text-black p-1.5 transition-colors"
              aria-label="Search Catalog"
            >
              <span className="material-symbols-outlined text-lg">search</span>
              <span>Search</span>
            </button>

            {/* Direct Quick PDP Link (Demo) */}
            <button
              id="quick-demo-pdp-btn"
              type="button"
              onClick={() => {
                onSelectView('store');
                onSelectProduct('pb-01');
              }}
              className="hidden sm:inline-flex text-[10px] font-normal uppercase tracking-[0.18em] px-3 py-1.5 bg-[#F4F4F0] hover:bg-[#EAEAE4] text-[#111111] border border-gray-200 transition-colors"
            >
              Featured PDP
            </button>

            {/* Shopping Bag Button */}
            <button
              id="shopping-bag-btn"
              type="button"
              onClick={onOpenCart}
              className="relative p-1.5 text-gray-800 hover:text-black flex items-center gap-1 group transition-colors"
              aria-label="View Shopping Bag"
            >
              <span className="material-symbols-outlined text-xl group-hover:scale-105 transition-transform">
                shopping_bag
              </span>
              <span className="hidden md:inline text-[11px] font-light uppercase tracking-[0.18em]">
                Bag
              </span>
              {cartCount > 0 && (
                <span className="bg-[#111111] text-white text-[9px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
