import Swiper from 'swiper/bundle';

  // init Swiper:
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper1 = new Swiper('.swiper-container1', {
    // Optional parameters
    slidesPerView: 10,
    spaceBetween: 5,
    direction: 'horizontal',
    loop: true,
    speed: 5000,
    autoplay: {
      delay: 1,
    },
    autoplayDisableOnInteraction: false,
    freeMode: true,
    on: { // Приостановление листания при наведении
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
  });

