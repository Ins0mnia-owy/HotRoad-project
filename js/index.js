new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    navigation: {
        prevEl: '.main-slider__btn-prev',
        nextEl: '.main-slider__btn-next',
    }
});