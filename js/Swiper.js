var swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  //Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  //Navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    520:{
      slidesPerView: 3,
    },
    950:{
      slidesPerView: 5,
    }
  }
});