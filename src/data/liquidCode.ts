import { LiquidSnippet } from '../types';

export const liquidSnippets: LiquidSnippet[] = [
  {
    filename: 'sections/main-product.liquid',
    type: 'Section',
    description:
      'High-converting modern Shopify Product Detail Page (PDP) section with interactive image gallery, high-contrast typography, variant selectors, size validation, and schema markup.',
    code: `{% comment %}
  PB & J - Modern High-Converting Product Detail Page Section
  Compatible with Shopify OS 2.0 (Theme Architecture)
{% endcomment %}

{{ 'section-main-product.css' | asset_url | stylesheet_tag }}
<script src="{{ 'product-form.js' | asset_url }}" defer="defer"></script>

<section id="MainProduct-{{ section.id }}" class="pbj-pdp-section py-8 md:py-12 bg-[#F9F9F9]" data-section-id="{{ section.id }}">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      
      <!-- PRODUCT IMAGE GALLERY (7 cols on desktop) -->
      <div class="lg:col-span-7 product-gallery">
        <div class="flex flex-col-reverse md:flex-row gap-4 sticky top-24">
          
          <!-- Thumbnail Rail (Desktop) -->
          <div class="hidden md:flex flex-col gap-3 w-20 flex-shrink-0" id="GalleryThumbnails-{{ section.id }}">
            {% for image in product.images %}
              <button 
                type="button" 
                class="thumbnail-btn border {% if forloop.first %}border-black ring-1 ring-black{% else %}border-gray-200 hover:border-gray-400{% endif %} overflow-hidden aspect-[3/4] bg-white transition-all"
                data-media-id="{{ image.id }}"
                data-image-index="{{ forloop.index0 }}"
                aria-label="View product image {{ forloop.index }}"
              >
                <img 
                  src="{{ image | image_url: width: 160 }}" 
                  alt="{{ image.alt | default: product.title | escape }}" 
                  class="w-full h-full object-cover"
                  loading="lazy"
                  width="80"
                  height="106"
                >
              </button>
            {% endfor %}
          </div>

          <!-- Main Image Display / Mobile Swipe Carousel -->
          <div class="flex-1 relative overflow-hidden bg-white border border-gray-100 group">
            <div id="MainGallery-{{ section.id }}" class="flex md:block overflow-x-auto snap-x snap-mandatory hide-scrollbar">
              {% for image in product.images %}
                <div class="min-w-full snap-center relative aspect-[3/4] overflow-hidden" data-media-id="{{ image.id }}">
                  <img 
                    src="{{ image | image_url: width: 1200 }}" 
                    alt="{{ image.alt | default: product.title | escape }}" 
                    class="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 hover:scale-105"
                    loading="{% if forloop.first %}eager{% else %}lazy{% endif %}"
                    width="600"
                    height="800"
                  >
                </div>
              {% endfor %}
            </div>
            
            {% if product.compare_at_price > product.price %}
              <div class="absolute top-4 left-4 bg-[#BA1A1A] text-white text-xs font-semibold px-2.5 py-1 tracking-wider uppercase">
                {{ product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price | round }}% OFF
              </div>
            {% endif %}
          </div>
        </div>
      </div>

      <!-- PRODUCT BUY BOX & INFORMATION (5 cols on desktop) -->
      <div class="lg:col-span-5 product-info-column bg-white p-6 sm:p-8 border border-gray-200">
        
        <!-- Brand & Breadcrumbs -->
        <div class="text-xs font-medium uppercase tracking-widest text-[#606041] mb-2">
          {{ product.vendor | default: 'PB & J' }}
        </div>

        <!-- Product Title -->
        <h1 class="font-serif text-2xl sm:text-3xl text-[#1C1C1C] leading-tight mb-3">
          {{ product.title }}
        </h1>

        <!-- Price Section -->
        <div class="flex items-baseline gap-3 mb-4 pb-4 border-b border-gray-100">
          <span class="text-2xl font-bold text-[#1C1C1C]" id="Price-{{ section.id }}">
            {{ product.price | money }}
          </span>
          {% if product.compare_at_price > product.price %}
            <span class="text-base text-gray-400 line-through">
              {{ product.compare_at_price | money }}
            </span>
            <span class="text-xs font-bold text-[#BA1A1A] bg-red-50 px-2 py-0.5 border border-red-200">
              Save {{ product.compare_at_price | minus: product.price | money }}
            </span>
          {% endif %}
        </div>

        <!-- Social Proof / Real-time Urgency -->
        <div class="flex items-center gap-2 text-xs text-gray-600 bg-[#F5F5F0] p-2.5 mb-6 border border-gray-200">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span><strong>48 people</strong> viewed this item today. Selling fast!</span>
        </div>

        <!-- Dynamic Product Form Snippet -->
        {% render 'product-form', product: product, section_id: section.id %}

        <!-- Trust Badges & Value Props -->
        <div class="grid grid-cols-3 gap-2 my-6 pt-6 border-t border-gray-200 text-center text-[11px] text-gray-600">
          <div class="p-2 bg-gray-50 border border-gray-100">
            <span class="block font-bold text-gray-900 mb-0.5">100% Pure Fabric</span>
            <span>Handpicked Cotton</span>
          </div>
          <div class="p-2 bg-gray-50 border border-gray-100">
            <span class="block font-bold text-gray-900 mb-0.5">Easy Exchanges</span>
            <span>7-Day Doorstep Service</span>
          </div>
          <div class="p-2 bg-gray-50 border border-gray-100">
            <span class="block font-bold text-gray-900 mb-0.5">Free Express</span>
            <span>On Orders > ₹1,599</span>
          </div>
        </div>

        <!-- Structured Accordions for Fabric, Care & Delivery -->
        <div class="space-y-3 mt-6 border-t border-gray-200 pt-6" id="ProductAccordions-{{ section.id }}">
          
          <details class="group border border-gray-200 p-3.5 transition-all">
            <summary class="flex justify-between items-center cursor-pointer font-medium text-sm text-gray-900 list-none">
              <span>Fabric &amp; Craft Details</span>
              <span class="transition group-open:rotate-180 text-xs">▼</span>
            </summary>
            <div class="mt-3 text-xs text-gray-600 leading-relaxed space-y-2 border-t border-gray-100 pt-3">
              <p>{{ product.description }}</p>
              <p><strong>Composition:</strong> 100% Long-Staple Compact Egyptian Cotton (80s 2-ply count).</p>
            </div>
          </details>

          <details class="group border border-gray-200 p-3.5 transition-all">
            <summary class="flex justify-between items-center cursor-pointer font-medium text-sm text-gray-900 list-none">
              <span>Care Instructions</span>
              <span class="transition group-open:rotate-180 text-xs">▼</span>
            </summary>
            <div class="mt-3 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              <ul class="list-disc list-inside space-y-1">
                <li>Machine wash cold (30°C) with similar colors</li>
                <li>Do not bleach or tumble dry high</li>
                <li>Warm iron or steam while slightly damp</li>
              </ul>
            </div>
          </details>

          <details class="group border border-gray-200 p-3.5 transition-all">
            <summary class="flex justify-between items-center cursor-pointer font-medium text-sm text-gray-900 list-none">
              <span>Shipping &amp; Doorstep Exchanges</span>
              <span class="transition group-open:rotate-180 text-xs">▼</span>
            </summary>
            <div class="mt-3 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              <p>Dispatched within 24-48 hours from our Mumbai fulfillment hub. Enjoy hassle-free 7-day doorstep size exchanges.</p>
            </div>
          </details>

        </div>

      </div>
    </div>
  </div>

  <!-- Sticky Add to Cart (Included Snippet) -->
  {% render 'sticky-add-to-cart', product: product, section_id: section.id %}

  <!-- Size Chart Drawer Modal (Included Snippet) -->
  {% render 'size-chart-drawer', product: product %}
</section>

{% schema %}
{
  "name": "Main Product (CRO)",
  "settings": [
    {
      "type": "checkbox",
      "id": "enable_sticky_cart",
      "label": "Enable Sticky Add to Cart Bar",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "enable_social_proof",
      "label": "Show Live Viewers Social Proof",
      "default": true
    }
  ]
}
{% endschema %}`
  },
  {
    filename: 'snippets/product-form.liquid',
    type: 'Snippet',
    description:
      'Engineered AJAX Product Form with high-contrast size selector pills, out-of-stock validation, error shake animation, and direct Buy Now functionality.',
    code: `{% comment %}
  PB & J - High Converting Product Form Snippet
  Ensures rigorous size validation before cart submission
{% endcomment %}

<product-form class="product-form block">
  {% form 'product', product, id: 'ProductForm-Main', class: 'form', novalidate: 'novalidate', data-type: 'add-to-cart-form' %}
    <input type="hidden" name="id" value="" id="SelectedVariantId-{{ section_id }}">

    <!-- COLOR SWATCH SELECTION -->
    {%- for option in product.options_with_values -%}
      {%- if option.name == 'Color' or option.name == 'Colour' -%}
        <div class="variant-option-group mb-5">
          <div class="flex justify-between text-xs font-semibold uppercase tracking-wider text-gray-900 mb-2">
            <span>Color: <span class="font-normal text-gray-600" id="SelectedColorLabel">{{ option.selected_value }}</span></span>
          </div>
          <div class="flex flex-wrap gap-2.5">
            {%- for value in option.values -%}
              <label class="color-swatch-item cursor-pointer">
                <input 
                  type="radio" 
                  name="Color" 
                  value="{{ value | escape }}" 
                  class="sr-only peer"
                  {% if option.selected_value == value %}checked{% endif %}
                  onchange="document.getElementById('SelectedColorLabel').textContent = this.value;"
                >
                <div class="w-8 h-8 rounded-none border-2 border-transparent peer-checked:border-black peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-black transition-all flex items-center justify-center p-0.5">
                  <span class="w-full h-full bg-neutral-800 inline-block"></span>
                </div>
              </label>
            {%- endfor -%}
          </div>
        </div>
      {%- endif -%}
    {%- endfor -%}

    <!-- SIZE SELECTION WITH SIZE GUIDE TRIGGER -->
    <div class="variant-option-group mb-6">
      <div class="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-gray-900 mb-2.5">
        <span>Select Size: <span class="font-normal text-gray-600" id="SelectedSizeLabel">Please choose</span></span>
        <button 
          type="button" 
          id="OpenSizeGuideBtn" 
          class="text-[#606041] underline underline-offset-4 hover:text-black transition-colors font-medium flex items-center gap-1"
          onclick="window.dispatchEvent(new CustomEvent('pbj:open-size-chart'));"
        >
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 6H3v12h18V6zM7 6v4M12 6v6M17 6v4"/></svg>
          Size Chart &amp; Fit Guide
        </button>
      </div>

      <!-- Size Radio Pills -->
      <div class="grid grid-cols-6 gap-2" id="SizePillContainer">
        {%- for variant in product.variants -%}
          <label class="size-pill-label relative cursor-pointer">
            <input 
              type="radio" 
              name="size_selection" 
              value="{{ variant.id }}" 
              data-size-title="{{ variant.title }}"
              class="sr-only peer"
              {% unless variant.available %}disabled{% endunless %}
            >
            <div class="h-11 flex items-center justify-center text-xs font-bold border transition-all text-center select-none
              {% if variant.available %}
                border-gray-300 bg-white text-gray-900 hover:border-black peer-checked:bg-black peer-checked:text-white peer-checked:border-black
              {% else %}
                border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed line-through opacity-60
              {% endif %}">
              {{ variant.title }}
            </div>
          </label>
        {%- endfor -%}
      </div>

      <!-- Size Validation Error Banner -->
      <div id="SizeErrorMessage" class="hidden mt-2 p-2.5 bg-red-50 border border-red-300 text-[#BA1A1A] text-xs font-medium flex items-center gap-2">
        <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
        <span>Please select a size before adding to your shopping bag.</span>
      </div>
    </div>

    <!-- PRIMARY & SECONDARY ACTION BUTTONS -->
    <div class="space-y-3">
      <!-- Add to Bag CTA -->
      <button 
        type="submit" 
        id="AddToCartButton" 
        class="w-full bg-[#1C1C1C] text-white hover:bg-black font-semibold text-sm py-4 px-6 uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.99]"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
        <span id="AddToCartText">Add to Bag</span>
      </button>

      <!-- Buy It Now Instant Express Checkout CTA -->
      <button 
        type="button" 
        id="BuyNowButton" 
        class="w-full bg-white text-[#1C1C1C] border-2 border-[#1C1C1C] hover:bg-gray-50 font-semibold text-sm py-3.5 px-6 uppercase tracking-wider transition-all flex items-center justify-center gap-2"
      >
        <span>Buy It Now</span>
      </button>
    </div>
  {% endform %}
</product-form>`
  },
  {
    filename: 'snippets/size-chart-drawer.liquid',
    type: 'Snippet',
    description:
      'Comprehensive Size Chart & Measuring Guide Drawer with category-specific measurement tables, unit switchers (Inches / Centimeters), and fit advice.',
    code: `{% comment %}
  PB & J - Interactive Size Guide & Measurement Drawer
  Triggered via custom event: window.dispatchEvent(new CustomEvent('pbj:open-size-chart'));
{% endcomment %}

<div id="SizeChartDrawer" class="fixed inset-0 z-50 overflow-hidden hidden" aria-modal="true" role="dialog">
  <!-- Backdrop -->
  <div class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="closeSizeChart();"></div>

  <div class="fixed inset-y-0 right-0 max-w-full flex pl-10">
    <div class="w-screen max-w-xl bg-white shadow-2xl flex flex-col">
      
      <!-- Drawer Header -->
      <div class="p-6 border-b border-gray-200 flex justify-between items-center bg-[#F9F9F9]">
        <div>
          <h2 class="font-serif text-2xl text-[#1C1C1C]">Garment Size &amp; Fit Guide</h2>
          <p class="text-xs text-gray-500 mt-0.5">Accurate measurements taken flat across the garment</p>
        </div>
        <button type="button" onclick="closeSizeChart();" class="text-gray-400 hover:text-black p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- Unit Switcher Bar (Inches vs CM) -->
      <div class="px-6 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
        <span class="text-xs font-semibold uppercase tracking-wider text-gray-700">Measurement Units:</span>
        <div class="inline-flex border border-gray-300 bg-white p-0.5">
          <button type="button" id="UnitInchesBtn" class="px-3 py-1 text-xs font-bold bg-black text-white" onclick="setUnit('in');">INCHES (IN)</button>
          <button type="button" id="UnitCmBtn" class="px-3 py-1 text-xs font-medium text-gray-600 hover:text-black" onclick="setUnit('cm');">CENTIMETERS (CM)</button>
        </div>
      </div>

      <!-- Drawer Content Body -->
      <div class="flex-1 overflow-y-auto p-6 space-y-6">
        
        <!-- Sizing Table -->
        <div class="overflow-x-auto border border-gray-200">
          <table class="w-full text-left text-xs">
            <thead class="bg-[#1C1C1C] text-white uppercase text-[10px] tracking-wider">
              <tr>
                <th class="p-3">Measurement</th>
                <th class="p-3 text-center">XS</th>
                <th class="p-3 text-center">S</th>
                <th class="p-3 text-center">M</th>
                <th class="p-3 text-center">L</th>
                <th class="p-3 text-center">XL</th>
                <th class="p-3 text-center">XXL</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 text-gray-700" id="SizeTableBody">
              <tr>
                <td class="p-3 font-semibold text-gray-900 bg-gray-50">Chest Circumference</td>
                <td class="p-3 text-center" data-in="36" data-cm="91.4">36"</td>
                <td class="p-3 text-center" data-in="38" data-cm="96.5">38"</td>
                <td class="p-3 text-center" data-in="40" data-cm="101.6">40"</td>
                <td class="p-3 text-center" data-in="42" data-cm="106.7">42"</td>
                <td class="p-3 text-center" data-in="44" data-cm="111.8">44"</td>
                <td class="p-3 text-center" data-in="46" data-cm="116.8">46"</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-gray-900 bg-gray-50">Shoulder Width</td>
                <td class="p-3 text-center" data-in="16.5" data-cm="41.9">16.5"</td>
                <td class="p-3 text-center" data-in="17.5" data-cm="44.5">17.5"</td>
                <td class="p-3 text-center" data-in="18.0" data-cm="45.7">18.0"</td>
                <td class="p-3 text-center" data-in="18.75" data-cm="47.6">18.75"</td>
                <td class="p-3 text-center" data-in="19.5" data-cm="49.5">19.5"</td>
                <td class="p-3 text-center" data-in="20.25" data-cm="51.4">20.25"</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-gray-900 bg-gray-50">Garment Length</td>
                <td class="p-3 text-center" data-in="27.5" data-cm="69.9">27.5"</td>
                <td class="p-3 text-center" data-in="28.5" data-cm="72.4">28.5"</td>
                <td class="p-3 text-center" data-in="29.0" data-cm="73.7">29.0"</td>
                <td class="p-3 text-center" data-in="30.0" data-cm="76.2">30.0"</td>
                <td class="p-3 text-center" data-in="30.5" data-cm="77.5">30.5"</td>
                <td class="p-3 text-center" data-in="31.0" data-cm="78.7">31.0"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- How to Measure Visual Guide -->
        <div class="bg-[#F5F5F0] p-5 border border-gray-200">
          <h3 class="font-bold text-xs uppercase tracking-wider text-[#1C1C1C] mb-3">How to Measure Accurately</h3>
          <div class="space-y-3 text-xs text-gray-700 leading-relaxed">
            <p><strong>1. Chest:</strong> Measure around the fullest part of your chest, keeping the measuring tape horizontal under the armpits.</p>
            <p><strong>2. Shoulder:</strong> Measure straight across the back from the edge of one shoulder seam to the other.</p>
            <p><strong>3. Length:</strong> Measure from the top of the collar seam down to the bottom shirt hemline.</p>
          </div>
        </div>

        <!-- Brand Fit Advice -->
        <div class="text-xs text-gray-600 p-4 border-l-2 border-[#606041] bg-white shadow-xs">
          <strong>Fit Recommendation:</strong> Our Oxford and Tailored shirts feature a modern structured silhouette. If you prefer an oversized or relaxed streetwear drape, we recommend ordering one size up.
        </div>

      </div>

      <!-- Footer Action -->
      <div class="p-4 border-t border-gray-200 bg-gray-50">
        <button type="button" onclick="closeSizeChart();" class="w-full bg-[#1C1C1C] text-white py-3 text-xs uppercase font-bold tracking-wider hover:bg-black">
          Got It, Back to Product
        </button>
      </div>

    </div>
  </div>
</div>`
  },
  {
    filename: 'snippets/sticky-add-to-cart.liquid',
    type: 'Snippet',
    description:
      'Sticky Mobile & Desktop Bottom Buy Bar that automatically triggers when user scrolls past the main buy box, retaining selected variant and size.',
    code: `{% comment %}
  PB & J - Sticky Bottom Add to Cart Bar for Mobile & Desktop
  Dramatically boosts mobile conversion rates by capturing intent during PDP scrolling
{% endcomment %}

<div 
  id="StickyBuyBar" 
  class="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 p-3 z-40 transform translate-y-full transition-transform duration-300 shadow-xl"
>
  <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
    
    <!-- Product Micro Preview -->
    <div class="flex items-center gap-3">
      <img 
        src="{{ product.featured_image | image_url: width: 100 }}" 
        alt="{{ product.title | escape }}" 
        class="w-11 h-11 object-cover border border-gray-200 flex-shrink-0"
        loading="lazy"
      >
      <div class="hidden sm:block">
        <div class="text-xs font-bold text-gray-900 truncate max-w-xs">{{ product.title }}</div>
        <div class="text-xs text-gray-600">{{ product.price | money }}</div>
      </div>
    </div>

    <!-- Quick Size Selector in Sticky Bar -->
    <div class="flex items-center gap-3">
      <div class="hidden md:flex items-center gap-1.5">
        <span class="text-xs font-medium text-gray-500 mr-1">Size:</span>
        {%- for variant in product.variants -%}
          <button 
            type="button" 
            class="sticky-size-btn text-xs font-bold w-8 h-8 border {% if variant.available %}border-gray-300 hover:border-black{% else %}border-gray-100 text-gray-300 cursor-not-allowed{% endif %}"
            data-variant-id="{{ variant.id }}"
            {% unless variant.available %}disabled{% endunless %}
          >
            {{ variant.title }}
          </button>
        {%- endfor -%}
      </div>

      <!-- Quick Add CTA -->
      <button 
        type="button" 
        id="StickyAddToCartBtn"
        class="bg-[#1C1C1C] text-white hover:bg-black font-bold text-xs uppercase px-6 py-3 tracking-wider flex items-center gap-2 whitespace-nowrap"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
        <span>Add to Bag • {{ product.price | money }}</span>
      </button>
    </div>

  </div>
</div>`
  }
];
