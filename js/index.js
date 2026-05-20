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

/* модальное окно */

const btn = document.getElementById('modalOpen');
const body = document.body;
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__btn');


btn.addEventListener('click', function() {
    body.classList.add('active');
    modal.classList.add('active');
});

modalCloseBtn.addEventListener('click', function() {
    body.classList.remove('active');
    modal.classList.remove('active');
});

