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
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-xs">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#606041] text-white py-2 px-4 text-center text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-sm hidden sm:inline">local_shipping</span>
        <span className="transition-opacity duration-300">
          {announcements[announcementIndex]}
        </span>
      </div>

      {/* MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Mobile Hamburger & Search Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              id="mobile-nav-toggle-btn"
              type="button"
              onClick={onOpenMobileNav}
              className="p-2 text-gray-800 hover:text-black focus:outline-hidden"
              aria-label="Open Mobile Menu"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
            <button
              id="mobile-search-btn"
              type="button"
              onClick={onOpenSearch}
              className="p-2 text-gray-800 hover:text-black focus:outline-hidden"
              aria-label="Search"
            >
              <span className="material-symbols-outlined text-2xl">search</span>
            </button>
          </div>

          {/* BRAND LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <button
              id="brand-home-link-btn"
              type="button"
              onClick={() => {
                onSelectView('store');
                onSelectCategory('all');
              }}
              className="text-left group"
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1C1C] block group-hover:opacity-80 transition-opacity">
                PB &amp; J
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#606041] block -mt-1 font-sans font-semibold">
                Pure Fabric &bull; Modern Fit
              </span>
            </button>
          </div>

          {/* DESKTOP MAIN NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              id="nav-cat-all-btn"
              type="button"
              onClick={() => {
                onSelectView('store');
                onSelectCategory('all');
              }}
              className={`text-xs uppercase font-bold tracking-widest py-2 transition-all border-b-2 ${
                currentCategory === 'all' && activeView === 'store'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-600 hover:text-black hover:border-gray-300'
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
              className={`text-xs uppercase font-bold tracking-widest py-2 transition-all border-b-2 ${
                currentCategory === 'shirts' && activeView === 'store'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-600 hover:text-black hover:border-gray-300'
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
              className={`text-xs uppercase font-bold tracking-widest py-2 transition-all border-b-2 ${
                currentCategory === 'pyjamas' && activeView === 'store'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-600 hover:text-black hover:border-gray-300'
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
              className={`text-xs uppercase font-bold tracking-widest py-2 transition-all border-b-2 ${
                currentCategory === 'boxers' && activeView === 'store'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-600 hover:text-black hover:border-gray-300'
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
              className={`text-xs uppercase font-bold tracking-widest py-2 transition-all border-b-2 ${
                currentCategory === 'lounge-pants' && activeView === 'store'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-600 hover:text-black hover:border-gray-300'
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
              className="text-xs uppercase font-bold tracking-widest py-2 text-[#BA1A1A] hover:text-red-700 flex items-center gap-1"
            >
              <span>Sale 50% Off</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#BA1A1A]"></span>
            </button>
          </nav>

          {/* DESKTOP RIGHT ACTIONS */}
          <div className="flex items-center space-x-4">
            <button
              id="desktop-search-btn"
              type="button"
              onClick={onOpenSearch}
              className="hidden lg:flex items-center gap-1 text-xs uppercase font-semibold tracking-wider text-gray-700 hover:text-black p-2"
              aria-label="Search Catalog"
            >
              <span className="material-symbols-outlined text-xl">search</span>
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
              className="hidden sm:inline-flex text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 bg-[#F5F5F0] hover:bg-[#EBEBE5] text-[#1C1C1C] border border-gray-300"
            >
              Featured PDP
            </button>

            {/* Shopping Bag Button */}
            <button
              id="shopping-bag-btn"
              type="button"
              onClick={onOpenCart}
              className="relative p-2 text-gray-900 hover:text-black flex items-center gap-1.5 group"
              aria-label="View Shopping Bag"
            >
              <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
                shopping_bag
              </span>
              <span className="hidden md:inline text-xs font-bold uppercase tracking-wider">
                Bag
              </span>
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 md:-top-1 md:-right-2 bg-[#1C1C1C] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white">
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
