const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoHeight: true,

  autoplay: {
    delay: 5500,
  },
  
  speed: 1000,

  simulateTouch: true,

  grabCursor: true,

  spaceBetween: 30,

});
