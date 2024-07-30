var maintop = new Swiper('.maintop', {
  slidesPerView:3,
  slidesPerGroup:3,
  autoplay:{delay:2000},
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var snsswiper = new Swiper(".snsswiper", {
  slidesPerView:5,
  spaceBetween:10,
  slidesPerGroup:5,
  autoplay:{delay:2000},
  scrollbar: {
    el: "#sns .swiper-scrollbar",
  },
});