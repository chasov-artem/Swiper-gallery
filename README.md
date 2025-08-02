# Swiper Gallery Theme - Shopify Test Task

A complete Shopify theme implementation featuring a Swiper gallery with color filtering and dynamic accordion functionality.

## 🎯 Features

### ✅ Swiper Gallery with Schema Settings

- **Responsive slides per view** for desktop, tablet, and mobile
- **Pagination toggle** - enable/disable pagination dots
- **Navigation arrows toggle** - enable/disable navigation arrows
- **Slide gap control** - customizable spacing between slides
- **Schema-based configuration** - all settings managed through Shopify admin

### ✅ Color Filtering System

- **Heart-shaped color buttons** with SVG icons
- **Dynamic filtering** without page reload
- **3-4 photos per color variant** as required
- **Smooth transitions** and visual feedback

### ✅ Dynamic Accordion (Bonus Feature)

- **Metafields integration** - content from product metafields
- **Empty content validation** - hides empty accordion items
- **Multiple/single open settings** - configurable behavior
- **Fallback content** - hardcoded content when metafields not set

### ✅ Responsive Design

- **Mobile-first approach** with breakpoints for all devices
- **Flexible layout** using CSS Grid and Flexbox
- **Touch-friendly interactions** for mobile devices

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript** - Interactive functionality
- **Liquid** - Shopify templating language
- **Swiper.js** - Touch-enabled slider library

## 📁 Project Structure

```
Swiper-gallery/
├── assets/
│   ├── theme.css          # Main stylesheet
│   ├── theme.js           # Main JavaScript
│   └── swiper-bundle.min.js
├── config/
│   ├── settings_schema.json  # Theme settings schema
│   └── settings_data.json    # Default settings
├── snippets/
│   ├── product-gallery.liquid    # Swiper gallery component
│   └── product-accordion.liquid  # Dynamic accordion component
├── templates/
│   ├── index.liquid        # Homepage template
│   └── product.liquid      # Product page template
├── index.html              # GitHub Pages demo
└── README.md
```

## 🚀 Installation & Deployment

### Local Development

1. Clone the repository
2. Install Shopify CLI: `npm install -g @shopify/cli`
3. Create a development store in Shopify
4. Deploy theme: `shopify theme push`

### GitHub Pages Demo

- Live demo available at: [GitHub Pages](https://your-username.github.io/Swiper-gallery/)
- Features complete functionality demonstration

## ⚙️ Configuration

### Swiper Gallery Settings

All settings are configurable through Shopify admin:

- **Slides per view (Desktop/Tablet/Mobile)**: Number of slides shown simultaneously
- **Show pagination**: Enable/disable pagination dots
- **Show navigation arrows**: Enable/disable navigation arrows
- **Slide gap**: Spacing between slides in pixels

### Color Filtering

- Automatically detects product color variants
- Heart-shaped buttons with color-coded SVG icons
- "All colors" option with white heart and red outline

### Dynamic Accordion

- **Metafields required**:
  - `Details` - Details content
  - `Care guide` - Care guide content
  - `Size guide` - Size guide content
  - `accordion_multiple` - Multiple open setting (true/false)
- **Fallback content** provided when metafields not set

## 🎨 Customization

### Adding New Colors

1. Add color variants in Shopify product options
2. Upload 3-4 images per color variant
3. Images are automatically filtered by color

### Styling Modifications

- Main styles in `assets/theme.css`
- Responsive breakpoints: 768px (tablet), 480px (mobile)
- Heart button styles: `.color-option.heart`

### Accordion Content

- Edit metafields in Shopify product settings
- Content validation prevents empty items
- Multiple/single open behavior configurable

## 📱 Responsive Design

### Breakpoints

- **Desktop**: 1024px+ - Full layout with side-by-side gallery and info
- **Tablet**: 768px-1023px - Stacked layout with adjusted spacing
- **Mobile**: 480px-767px - Compact layout with touch-optimized controls

### Features

- **Touch-friendly** heart buttons and accordion
- **Optimized images** with lazy loading
- **Smooth animations** and transitions
- **Accessible** keyboard navigation

## 🔧 Technical Implementation

### Swiper Integration

```javascript
// Responsive breakpoints with schema settings
const swiper = new Swiper(".product-swiper", {
  slidesPerView: slidesDesktop,
  spaceBetween: slideGap,
  pagination: showPagination ? { el: ".swiper-pagination" } : false,
  navigation: showNavigation
    ? { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
    : false,
  breakpoints: {
    320: { slidesPerView: slidesMobile },
    768: { slidesPerView: slidesTablet },
    1024: { slidesPerView: slidesDesktop },
  },
});
```

### Color Filtering

```javascript
// Filter slides by color without page reload
function filterSlidesByColor(color) {
  const slides = document.querySelectorAll(".swiper-slide");
  slides.forEach((slide) => {
    const slideColor = slide.dataset.color;
    if (color === "all" || slideColor === color) {
      slide.classList.remove("hidden");
    } else {
      slide.classList.add("hidden");
    }
  });
  swiper.update();
}
```

### Dynamic Accordion

```liquid
{% comment %} Metafields integration with validation {% endcomment %}
{% assign details_content = product.metafields.custom["Details"] %}
{% if details_content != blank %}
  <div class="accordion-item">
    <button class="accordion-header" type="button">
      <span class="accordion-title">Details</span>
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <div class="accordion-body">{{ details_content }}</div>
    </div>
  </div>
{% endif %}
```

## ✅ Requirements Checklist

### Main Requirements

- ✅ **Swiper gallery** with schema settings
- ✅ **Color filtering** without page reload
- ✅ **3-4 photos per color variant**
- ✅ **Responsive design** for all devices
- ✅ **HTML + CSS + JS + Liquid** implementation

### Bonus Requirements

- ✅ **Dynamic accordion** with metafields
- ✅ **Empty content validation**
- ✅ **Multiple/single open settings**
- ✅ **Fallback content** when metafields not set

### Deployment Requirements

- ✅ **Shopify CLI deployment** ready
- ✅ **GitHub repository** with complete code
- ✅ **GitHub Pages demo** available
- ✅ **Documentation** and setup instructions

## 🎯 Test Task Completion

This project fully implements all requirements from the Shopify test task:

1. **Swiper Gallery**: ✅ Complete with schema settings
2. **Color Filtering**: ✅ Working without page reload
3. **Photo Requirements**: ✅ 3-4 photos per color variant
4. **Bonus Accordion**: ✅ Dynamic with metafields
5. **Responsive Design**: ✅ All device sizes supported
6. **Technology Stack**: ✅ HTML + CSS + JS + Liquid

## 📞 Support

For questions or issues:

- Check the GitHub Pages demo for functionality
- Review the code structure in the repository
- All settings are configurable through Shopify admin

---

**Ready for deployment to Shopify development store!** 🚀
