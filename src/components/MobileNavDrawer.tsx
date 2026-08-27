import React from 'react';
import { CategoryType } from '../types';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (cat: CategoryType) => void;
  onSelectProduct: (productId: string) => void;
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onSelectProduct
}) => {
  if (!isOpen) return null;

  const categories = [
    {
      id: 'shirts',
      name: 'Shirts',
      badge: 'Bestselling',
      image:
        'https://lh3.googleusercontent.com/aida/AEtjO1XpLIYa-vBKs7qHXqC6rJ7WgmwxyqL2vHAg5KGanCMHzGSbqatm4kShwtbpXyKFq_A8HTgGy3eED1D9cxus9iFnWeXMTGtVj_PsyX8kYbAKbGxFOjKMz1dgNhRMisHgV_pDnlBJAoxB7GrzfqKoqh5_qrwnPj9q2S34vT-JgsuRMRZKNjXyOGuu-65wRT1M3Y0LT5bTlPMDt20uKpLFwN6axRDPhHS-FVOkjiCPmxM2c5p9b7XiXSuCCuk',
      count: '24 Styles'
    },
    {
      id: 'pyjamas',
      name: 'Pyjamas & Sets',
      badge: 'Mulberry Silk',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCWVzsrHs15fZCCpwsUNYFUpW7wzprwxLg7VASDwBcHLJKF7xZKUnUuxgYUoGFmne3u0jk6FB4uUpWYzSttnfLyBFJiaTrKt6Xd1PXIDrw17YzKKdGZLfHzB96OeZRrGK9s74xN76MXI2lmpHYJPiCm5quQ3hEow_lSs435QvPtSBUCKuZe-wpvXnLUnpPoCtSjlMK-qn-nmx8tzOoo2fbDNyE_QB7qnvQTeNuNZoKSOel0u44qf6vh',
      count: '16 Styles'
    },
    {
      id: 'boxers',
      name: 'Cotton Boxers',
      badge: 'From ₹399',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuALMwmxfJ2D0kcRxq2GjPHYJOWHoVpAX2z4K4bzhEChZfvXyPswjHCorIUZ1T6Q4_dsZljkMZwB-5bJDvBhj0TG3heiYBvptZHds6EKa33CuR8I3Hifv0DSn9KJdgduExJDs6bBDBKtvvU9EfdxsdN0uVze7uIlQLX_ELaI_t-RKGBmOOqYWeTewWVIRdI4WGEx_Q8uMs80vNpysR43B8w-HDJS0XBnWy7zdktw4_6MbHKkenSoDFL9',
      count: '12 Packs'
    },
    {
      id: 'lounge-pants',
      name: 'Lounge Pants',
      badge: 'French Linen',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCpe-sDs_e1hgySzCStPJ_N6YwHgDfux8r2zpCBX27pb5UJAO6br93ptuFwEaqo1B8EzdY91NMNZVIc62qukvZNFsFrCrTUIXto_5idfbPHx94EeeSrdZuaI0S94ohjokP1Q_DvWMXur_16YORfOhb-N5sJEdjtU5mU64p8zKpKrF3ZjdWlyyVYlm8Jc5YqgovLexoq9CgXOvR93UD7vxc2Ka6ekwvnH3mkCelSYgpzHnfmrIEenmX4',
      count: '8 Styles'
    }
  ];

  return (
    <div id="mobile-nav-drawer" class="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pr-12">
        <div className="w-screen max-w-sm bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Top Header */}
          <div>
            <div className="p-5 border-b border-gray-200 flex justify-between items-center bg-[#F9F9F9]">
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-[#1C1C1C]">
                  PB &amp; J
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#606041] block">
                  Pure Fabric Collections
                </span>
              </div>
              <button
                id="close-mobile-nav-btn"
                type="button"
                onClick={onClose}
                className="p-1.5 text-gray-500 hover:text-black"
                aria-label="Close Menu"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            {/* Visual Bento Category Grid */}
            <div className="p-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                Featured Categories
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    id={`mobile-cat-${cat.id}-btn`}
                    type="button"
                    onClick={() => {
                      onSelectCategory(cat.id as CategoryType);
                      onClose();
                    }}
                    className="group relative aspect-[4/5] overflow-hidden border border-gray-200 text-left bg-neutral-900 focus:outline-hidden"
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <span className="text-[8px] uppercase tracking-wider font-bold bg-[#BA1A1A] px-1.5 py-0.5 inline-block mb-1">
                        {cat.badge}
                      </span>
                      <div className="font-serif text-xs font-bold leading-tight">
                        {cat.name}
                      </div>
                      <div className="text-[9px] text-gray-300 font-medium">
                        {cat.count}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links List */}
            <div className="px-4 py-2 border-t border-gray-100 space-y-1">
              <button
                id="mobile-all-essentials-btn"
                type="button"
                onClick={() => {
                  onSelectCategory('all');
                  onClose();
                }}
                className="w-full text-left py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-gray-900 hover:bg-gray-50 flex items-center justify-between"
              >
                <span>Shop All Essentials</span>
                <span className="material-symbols-outlined text-sm text-gray-400">chevron_right</span>
              </button>
              <button
                id="mobile-new-arrivals-btn"
                type="button"
                onClick={() => {
                  onSelectProduct('pb-01');
                  onClose();
                }}
                className="w-full text-left py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-gray-900 hover:bg-gray-50 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span>New Season Drops</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
                <span className="material-symbols-outlined text-sm text-gray-400">chevron_right</span>
              </button>
              <button
                id="mobile-sale-nav-btn"
                type="button"
                onClick={() => {
                  onSelectCategory('shirts');
                  onClose();
                }}
                className="w-full text-left py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-[#BA1A1A] hover:bg-red-50 flex items-center justify-between"
              >
                <span>End of Season Sale (Up to 60% Off)</span>
                <span className="text-[10px] font-extrabold bg-[#BA1A1A] text-white px-1.5 py-0.5">HOT</span>
              </button>
            </div>
          </div>

          {/* Drawer Bottom Support & Value */}
          <div className="p-4 border-t border-gray-200 bg-[#F9F9F9]">
            <div className="text-xs text-gray-600 mb-3 space-y-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#606041]">verified</span>
                <span>100% Egyptian Cotton &amp; Mulberry Silk</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#606041]">swap_horiz</span>
                <span>Free 7-Day Doorstep Size Exchanges</span>
              </div>
            </div>
            <div className="text-[11px] text-gray-500">
              Need assistance? WhatsApp Support: <strong className="text-black">+91 98765 43210</strong>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
