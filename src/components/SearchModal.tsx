import React, { useState, useMemo } from 'react';
import { productsData } from '../data/products';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (productId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');

  const trendingTags = [
    'Oxford Shirts',
    'Silk Pyjamas',
    'Linen Shirts',
    'Aero Boxers',
    'Lounge Pants',
    'Black Pyjama'
  ];

  const results: Product[] = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return productsData.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.fit.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div id="search-modal" className="fixed inset-0 z-50 overflow-y-auto font-sans" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-start justify-center p-4 sm:p-6 lg:p-12">
        <div className="relative bg-white w-full max-w-3xl shadow-2xl border border-gray-200/80 mt-12 overflow-hidden">
          
          {/* Search Input Bar */}
          <div className="p-4 sm:p-6 border-b border-gray-200/80 flex items-center gap-3 bg-[#FAFAFA]">
            <span className="material-symbols-outlined text-xl text-gray-500">search</span>
            <input
              id="predictive-search-input"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search shirts, silk pyjamas, boxers, linen pants..."
              className="w-full bg-transparent text-sm sm:text-base text-gray-900 focus:outline-hidden font-light placeholder:text-gray-400 tracking-wide"
              autoFocus
            />
            {query && (
              <button
                id="clear-search-query-btn"
                type="button"
                onClick={() => setQuery('')}
                className="text-gray-400 hover:text-black p-1 text-xs font-light"
              >
                Clear
              </button>
            )}
            <button
              id="close-search-btn"
              type="button"
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-black"
              aria-label="Close search"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Trending Searches Tags */}
          <div className="p-4 sm:p-6 bg-white border-b border-gray-100 font-light">
            <div className="text-[9px] font-light uppercase tracking-[0.2em] text-gray-400 mb-2.5">
              Popular Searches
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingTags.map((tag) => (
                <button
                  key={tag}
                  id={`tag-${tag.replace(/\s+/g, '-').toLowerCase()}-btn`}
                  type="button"
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-xs font-light text-gray-800 transition-colors tracking-wide"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Search Results Display */}
          <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto font-light">
            {query.trim() === '' ? (
              <div className="text-center py-8 text-gray-400 text-xs">
                Type above to discover instant results across our apparel lines.
              </div>
            ) : results.length === 0 ? (
              <div className="text-center py-10">
                <span className="material-symbols-outlined text-3xl text-gray-300">
                  search_off
                </span>
                <p className="text-sm font-normal text-gray-700 mt-2">
                  No matches found for &quot;{query}&quot;
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Try searching for &quot;Oxford&quot;, &quot;Silk&quot;, or &quot;Linen&quot;.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {results.map((product) => (
                  <button
                    key={product.id}
                    id={`search-result-${product.id}-btn`}
                    type="button"
                    onClick={() => {
                      onSelectProduct(product.id);
                      onClose();
                    }}
                    className="flex items-center gap-3.5 p-2.5 border border-gray-200/80 hover:border-black transition-all text-left bg-white group"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-14 h-18 object-cover bg-gray-50 border border-gray-100 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] uppercase tracking-[0.18em] font-light text-gray-500">
                        {product.category}
                      </span>
                      <h4 className="text-xs font-normal text-gray-900 truncate group-hover:text-black mt-0.5 tracking-wide">
                        {product.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-normal text-[#111111]">
                          ₹{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-[10px] text-gray-400 line-through">
                            ₹{product.originalPrice}
                          </span>
                        )}
                        {product.badge && (
                          <span className="text-[8px] font-light bg-[#111111] text-white px-1.5 py-0.2 uppercase tracking-wider">
                            {product.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer Note */}
          <div className="p-3 bg-gray-50 border-t border-gray-200/80 text-center text-[10px] text-gray-400 font-light">
            Press ESC or click outside to dismiss search
          </div>

        </div>
      </div>
    </div>
  );
};
