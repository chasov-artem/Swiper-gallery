// Theme JavaScript - Main initialization
document.addEventListener("DOMContentLoaded", function () {
  initializeSwiper();
  initializeColorFilter();
  initializeAccordion();
});

// Initialize Swiper Gallery with responsive settings
function initializeSwiper() {
  const galleryContainer = document.querySelector(".product-gallery-container");
  if (!galleryContainer) return;

  // Get settings from data attributes for different devices
  const slidesDesktop = parseInt(galleryContainer.dataset.slidesDesktop) || 1;
  const slidesTablet = parseInt(galleryContainer.dataset.slidesTablet) || 1;
  const slidesMobile = parseInt(galleryContainer.dataset.slidesMobile) || 1;
  const showPagination = galleryContainer.dataset.showPagination === "true";
  const showNavigation = galleryContainer.dataset.showNavigation === "true";
  const slideGap = parseInt(galleryContainer.dataset.slideGap) || 0;

  // Initialize Swiper with responsive breakpoints
  const swiper = new Swiper(".product-swiper", {
    slidesPerView: slidesDesktop,
    spaceBetween: slideGap,
    loop: false,
    pagination: showPagination
      ? {
          el: ".swiper-pagination",
          clickable: true,
        }
      : false,
    navigation: showNavigation
      ? {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      : false,
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

  // Store swiper instance globally for color filtering functionality
  window.productSwiper = swiper;
}

// Initialize Color Filter functionality
function initializeColorFilter() {
  const colorOptions = document.querySelectorAll(".color-option");
  if (!colorOptions.length) return;

  // Add click event listeners to color buttons
  colorOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const selectedColor = this.dataset.color;

      // Update active state of color buttons
      colorOptions.forEach((opt) => opt.classList.remove("active"));
      this.classList.add("active");

      // Filter slides based on selected color
      filterSlidesByColor(selectedColor);
    });
  });
}

// Filter slides by color without page reload
function filterSlidesByColor(color) {
  const slides = document.querySelectorAll(".swiper-slide");
  const swiper = window.productSwiper;

  if (!slides.length || !swiper) return;

  // Count visible slides for this color
  let visibleSlides = 0;

  // Show/hide slides based on color selection
  slides.forEach((slide) => {
    const slideColor = slide.dataset.color;

    if (color === "all" || slideColor === color) {
      slide.classList.remove("hidden");
      visibleSlides++;
    } else {
      slide.classList.add("hidden");
    }
  });

  // Update swiper only if we have visible slides
  if (visibleSlides > 0) {
    // Force swiper to recalculate dimensions after filtering
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    // Go to first slide after filtering
    swiper.slideTo(0, 0);

    // Force another update after slide change
    setTimeout(() => {
      swiper.update();
    }, 100);
  }
}

// Initialize Dynamic Accordion functionality
function initializeAccordion() {
  const accordion = document.querySelector(".product-accordion");
  if (!accordion) return;

  const items = accordion.querySelectorAll(".accordion-item");
  const allowMultiple = accordion.dataset.multiple === "true";

  // Add click event listeners to accordion headers
  items.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", function () {
      const isActive = item.classList.contains("active");

      // Close other items if multiple items not allowed
      if (!allowMultiple) {
        items.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }
        });
      }

      // Toggle current accordion item
      if (isActive) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  });
}

// Utility function to get current device type
function getDeviceType() {
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

// Handle window resize for responsive behavior
window.addEventListener("resize", function () {
  if (window.productSwiper) {
    window.productSwiper.update();
  }
});
