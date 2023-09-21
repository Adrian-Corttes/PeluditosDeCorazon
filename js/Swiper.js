var swiper = new Swiper(".mySwiper", {
   slidesPerView: 5,
   spaceBetween: 1,
   loop: true,
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
 });