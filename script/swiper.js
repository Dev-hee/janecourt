var mySwiper = new Swiper('.swiper-container', {
  slidesPerView:3,
  slidesPerGroup:3,
  autoplay:{delay:3000},
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  
  slidesPerView:6,
  slidesPerGroup:2,
  autoplay:{delay:2000},
  scrollbar: {
  loop:true,
  el: ".swiper-scrollbar",
  },
});