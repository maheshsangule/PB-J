import React, { useState } from 'react';
import { CartItem } from '../types';
import { productsData } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onAddToCart: (item: CartItem) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onAddToCart,
  onCheckout
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>('PBJ100');
  const [orderNote, setOrderNote] = useState('');
  const [showNoteInput, setShowNoteInput] = useState(false);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 1599;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = appliedPromo && subtotal >= 1599 ? 100 : 0;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  // Quick upsell recommendation (e.g. boxers)
  const upsellProduct = productsData.find((p) => p.id === 'pb-04') || productsData[3];

  const handleAddUpsell = () => {
    onAddToCart({
      product: upsellProduct,
      selectedSize: 'M',
      selectedColor: upsellProduct.colors[0],
      quantity: 1
    });
  };

  return (
    <div id="cart-drawer-modal" className="fixed inset-0 z-50 overflow-hidden font-sans" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div>
            <div className="p-4 sm:p-5 border-b border-gray-200/80 flex justify-between items-center bg-[#FAFAFA]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-[#111111]">shopping_bag</span>
                <h2 className="text-base font-normal tracking-wide text-[#111111]">
                  Shopping Bag ({items.reduce((s, i) => s + i.quantity, 0)})
                </h2>
              </div>
              <button
                id="close-cart-btn"
                type="button"
                onClick={onClose}
                className="p-1 text-gray-400 hover:text-black transition-colors"
                aria-label="Close Shopping Bag"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Free Shipping & Promo Threshold Progress Bar */}
            <div className="bg-[#F4F4F0] p-3.5 border-b border-gray-200/80 text-xs font-light">
              {remainingForFreeShipping > 0 ? (
                <div className="text-gray-800 mb-1.5 flex items-center justify-between">
                  <span>
                    Add <strong className="font-normal">₹{remainingForFreeShipping}</strong> more for <strong className="font-normal">FREE Express Shipping</strong> &amp; <strong className="font-normal">₹100 Off</strong>
                  </span>
                  <span className="text-[10px] font-normal text-gray-500">
                    {Math.round(progressPercent)}%
                  </span>
                </div>
              ) : (
                <div className="text-emerald-800 font-normal mb-1.5 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-emerald-700">check_circle</span>
                  <span>Unlocked: FREE Express Shipping + ₹100 Discount!</span>
                </div>
              )}
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    progressPercent >= 100 ? 'bg-emerald-600' : 'bg-[#111111]'
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Item List / Empty State */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-12 space-y-4 font-light">
                <span className="material-symbols-outlined text-4xl text-gray-300">
                  shopping_basket
                </span>
                <h3 className="text-base text-gray-800 font-light">Your bag is empty</h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Discover our pure Egyptian cotton shirts, Mulberry silk pyjamas, and tailored essentials.
                </p>
                <button
                  id="empty-cart-shop-now-btn"
                  type="button"
                  onClick={onClose}
                  className="inline-block bg-[#111111] text-white px-6 py-3 text-[10px] font-normal uppercase tracking-[0.18em] hover:bg-black"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="divide-y divide-gray-100 space-y-4">
                  {items.map((item, idx) => (
                    <div key={`${item.product.id}-${item.selectedSize}-${idx}`} className="pt-4 first:pt-0 flex gap-3.5">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.title}
                        className="w-18 h-22 object-cover border border-gray-200/80 flex-shrink-0 bg-gray-50"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="text-xs font-normal text-[#111111] leading-snug tracking-wide">
                              {item.product.title}
                            </h4>
                            <button
                              id={`remove-item-${idx}-btn`}
                              type="button"
                              onClick={() => onRemoveItem(idx)}
                              className="text-gray-400 hover:text-rose-600 p-0.5"
                              aria-label="Remove item"
                            >
                              <span className="material-symbols-outlined text-base">delete</span>
                            </button>
                          </div>
                          <div className="text-[10px] text-gray-500 mt-1 flex items-center gap-2 font-light">
                            <span className="bg-gray-100 px-1.5 py-0.5 border border-gray-200 font-normal text-gray-800">
                              Size: {item.selectedSize}
                            </span>
                            <span>Color: {item.selectedColor.name}</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-3">
                          {/* Quantity Stepper */}
                          <div className="inline-flex items-center border border-gray-200 bg-white">
                            <button
                              id={`qty-minus-${idx}-btn`}
                              type="button"
                              onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center text-xs font-light text-gray-700 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="w-7 text-center text-xs font-normal text-gray-900">
                              {item.quantity}
                            </span>
                            <button
                              id={`qty-plus-${idx}-btn`}
                              type="button"
                              onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center text-xs font-light text-gray-700 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-right">
                            <div className="text-xs font-normal text-[#111111]">
                              ₹{item.product.price * item.quantity}
                            </div>
                            {item.product.originalPrice && (
                              <div className="text-[10px] text-gray-400 font-light line-through">
                                ₹{item.product.originalPrice * item.quantity}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 1-Click Impulse Upsell Card */}
                {items.length > 0 && !items.some((i) => i.product.id === upsellProduct.id) && (
                  <div className="p-3 bg-[#FAF9F6] border border-gray-200/80 mt-4">
                    <div className="text-[9px] font-light uppercase tracking-[0.18em] text-gray-600 mb-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">stars</span>
                      <span>Recommended With Your Order</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <img
                        src={upsellProduct.images[0]}
                        alt={upsellProduct.title}
                        className="w-10 h-12 object-cover border border-gray-200"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-normal text-gray-900 truncate">
                          {upsellProduct.title}
                        </div>
                        <div className="text-xs text-gray-600 font-light">
                          ₹{upsellProduct.price}{' '}
                          <span className="text-[9px] text-rose-800 font-normal">(60% OFF)</span>
                        </div>
                      </div>
                      <button
                        id="add-upsell-cart-btn"
                        type="button"
                        onClick={handleAddUpsell}
                        className="px-2.5 py-1.5 bg-[#111111] text-white hover:bg-black text-[9px] font-normal uppercase tracking-[0.18em] whitespace-nowrap"
                      >
                        + Add ₹{upsellProduct.price}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer Calculations & Checkout Actions */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-gray-200/80 bg-[#FAFAFA] space-y-3 font-light">
              
              {/* Promo Code & Order Note Collapse */}
              <div className="flex items-center justify-between text-xs text-gray-600 pt-1">
                <button
                  id="toggle-order-note-btn"
                  type="button"
                  onClick={() => setShowNoteInput(!showNoteInput)}
                  className="underline hover:text-black"
                >
                  {showNoteInput ? 'Hide order note' : '+ Add gift note or instructions'}
                </button>
                {appliedPromo && (
                  <span className="text-[10px] font-normal text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                    PBJ100 Applied (-₹100)
                  </span>
                )}
              </div>

              {showNoteInput && (
                <textarea
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  placeholder="Special instructions for delivery or gift packaging..."
                  rows={2}
                  className="w-full p-2 text-xs border border-gray-200 bg-white focus:border-black focus:outline-hidden font-light"
                />
              )}

              {/* Price Calculation Breakdown */}
              <div className="space-y-1.5 text-xs text-gray-600 pt-2 border-t border-gray-200/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-normal text-gray-900">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-rose-800 font-normal">
                    <span>Discount (PBJ100)</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-normal text-emerald-700">
                    {remainingForFreeShipping === 0 ? 'FREE' : '₹99 (Free above ₹1,599)'}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-normal text-[#111111] pt-2 border-t border-gray-200/80">
                  <span>Total Amount</span>
                  <span className="font-medium">₹{finalTotal}</span>
                </div>
              </div>

              {/* Primary High-Contrast Checkout Button */}
              <button
                id="cart-checkout-cta-btn"
                type="button"
                onClick={onCheckout}
                className="w-full bg-[#111111] text-white hover:bg-black font-normal text-[11px] uppercase py-3.5 tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-xs active:scale-[0.99]"
              >
                <span className="material-symbols-outlined text-base">lock</span>
                <span>Proceed to Checkout &bull; ₹{finalTotal}</span>
              </button>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-3 text-[9px] text-gray-400 pt-1">
                <span>🔒 256-Bit SSL Encryption</span>
                <span>•</span>
                <span>⚡ UPI / Cards / COD</span>
                <span>•</span>
                <span>7-Day Easy Returns</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
