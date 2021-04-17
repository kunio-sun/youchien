// ハンバーガー
// $(function () {
//   $('.btn-trigger').on('click', function () {
//     $(this).toggleClass('active');
//     return false;
//   });
// });
$(function () {

  $(".sec-menu").on("click", function () {
    $('.nav').animate({
      right: 0
    }, 300);
    $(".nav-black").fadeIn();
  });

  $(".nav_close").on("click", function () {
    $('.nav').animate({
      right: -500
    }, 300);
    $(".nav-black").fadeOut();
  });
  $(".nav-black").on("click", function () {
    $('.nav').animate({
      right: -500
    }, 300);
    $(".nav-black").fadeOut();
  });

  var mySwiper = new Swiper('.swiper-container', {
    loopPreventsSlide: true,
    uniqueNavElements: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: false
    },
    // autoplay: {
    //   delay: 3000,
    //   stopOnLastSlide: false,
    //   disableOnInteraction: false,
    //   reverseDirection: false
    // },
    breakpoints: {
      1400: {
        spaceBetween: 12,
        slidesPerView: 4,
      },
      1080: {
        spaceBetween: 12,
        slidesPerView: 3,
      },
      720: {
        spaceBetween: 12,
        slidesPerView: 2,
      },
      580: {
        spaceBetween: 12,
        slidesPerView: 1,
      },
    },
  });

});
