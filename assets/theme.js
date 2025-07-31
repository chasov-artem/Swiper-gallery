// Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
  initializeSwiper();
  initializeColorFilter();
  initializeAccordion();
});

// Initialize Swiper Gallery
function initializeSwiper() {
  const galleryContainer = document.querySelector('.product-gallery-container');
  if (!galleryContainer) return;

  // Get settings from data attributes
  const slidesDesktop = parseInt(galleryContainer.dataset.slidesDesktop) || 1;
  const slidesTablet = parseInt(galleryContainer.dataset.slidesTablet) || 1;
  const slidesMobile = parseInt(galleryContainer.dataset.slidesMobile) || 1;
  const showPagination = galleryContainer.dataset.showPagination === 'true';
  const showNavigation = galleryContainer.dataset.showNavigation === 'true';
  const slideGap = parseInt(galleryContainer.dataset.slideGap) || 20;

  const swiper = new Swiper('.product-swiper', {
    slidesPerView: slidesDesktop,
    spaceBetween: slideGap,
    loop: false,
    pagination: showPagination ? {
      el: '.swiper-pagination',
      clickable: true,
    } : false,
    navigation: showNavigation ? {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    } : false,
    breakpoints: {
      320: {
        slidesPerView: slidesMobile,
        spaceBetween: slideGap,
      },
      768: {
        slidesPerView: slidesTablet,
        spaceBetween: slideGap,
      },
      1024: {
        slidesPerView: slidesDesktop,
        spaceBetween: slideGap,
      },
    },
  });

  // Store swiper instance globally for color filtering
  window.productSwiper = swiper;
}

// Initialize Color Filter
function initializeColorFilter() {
  const colorOptions = document.querySelectorAll('.color-option');
  if (!colorOptions.length) return;

  colorOptions.forEach(option => {
    option.addEventListener('click', function() {
      const selectedColor = this.dataset.color;
      
      // Update active state
      colorOptions.forEach(opt => opt.classList.remove('active'));
      this.classList.add('active');
      
      // Filter slides
      filterSlidesByColor(selectedColor);
    });
  });
}

// Filter slides by color
function filterSlidesByColor(color) {
  const slides = document.querySelectorAll('.swiper-slide');
  const swiper = window.productSwiper;
  
  if (!slides.length || !swiper) return;

  slides.forEach(slide => {
    const slideColor = slide.dataset.color;
    
    if (slideColor === color) {
      slide.classList.remove('hidden');
    } else {
      slide.classList.add('hidden');
    }
  });

  // Update swiper after filtering
  swiper.update();
  swiper.slideTo(0);
}

// Initialize Accordion
function initializeAccordion() {
  const accordion = document.querySelector('.product-accordion');
  if (!accordion) return;

  const items = accordion.querySelectorAll('.accordion-item');
  const allowMultiple = accordion.dataset.multiple === 'true';

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', function() {
      const isActive = item.classList.contains('active');

      if (!allowMultiple) {
        // Close all other items
        items.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
      }

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

// Utility function to get device type
function getDeviceType() {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
  if (window.productSwiper) {
    window.productSwiper.update();
  }
}); 