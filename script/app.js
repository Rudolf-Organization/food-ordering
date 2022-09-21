// swiper slider popular dishes
var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 20,
  // observer: true,
  // observeParents: true,
  loop: true,
  centerSlide: true,
  centeredSlides: true,
  // slideToClickedSlide: true,
  // watchSlidesVisibility: true,
  // watchSlidesProgress: true,
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    520: {
      slidesPerView: 4,
    },
    1250: {
      slidesPerView: 5,
    },
    1250: {
      slidesPerView: 6,
    },
  },
});
