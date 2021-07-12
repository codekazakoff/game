

new Swiper(".image-slider", {
  // strelka
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    // bullet
    // type: "bullets",
    // clickable: true,

    // // dynamocBullet
    // dynamicBullets: true,

    // renderBullet: function (index, className) {
    //   return `<span class=${className}>${index + 1}</span>`;
    // },

    //  Fraksiya
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return `Фото <span class=${currentClass}></span> из  <span class=${totalClass}></span>`;
    },

    // ProgresBar
    // type: "progressbar",
  },

  // clickable: true,

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  simulateTouch: true,

  touchRatio: 1,

  touchAngle: 45,
  // slider cursori grab boladi
  grabCursor: true,
  // slideClicked ishlidi
  slideToClickedSlide: true,

  // browserdan oladi slide-1,slide-2 va haakozo
  hashNavigation: {
    watchState: true,
  },
  // klavituraga ham ishlidi
  keyboard: {
    enabled: true,
    onlyInViewport: true,

    pageUpDown: true,
  },
  // mishkani scroli bn touchpadga ishlidi
  mousewheel: {
    sensitivity: 1,

    // eventsTarget: ".image-slider",
  },
  // heightini ozicha oladi
  autoHeight: true,
  //  groupalab oladi va bittalab korssatadi
  slidesPerView: 2.2,


});
