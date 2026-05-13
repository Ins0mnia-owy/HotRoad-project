new Swiper('.swiper-container--main', {
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

new Swiper('.swiper-container--hits', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    navigation: {
        prevEl: '.hits__btn-prev',
        nextEl: '.hits__btn-next',
    }
});