import Swiper from 'swiper';
import 'swiper/scss';
import { Scrollbar, Autoplay, Navigation, EffectFade } from 'swiper/modules';


export const useInsightSlider = () => {
    new Swiper('.insight__slider', {
        modules: [Scrollbar],
        slidesPerView: 'auto',
        spaceBetween: 32,
        centeredSlides: true,

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {
            993: {
                centeredSlides: false,
            },
        },
    });
};

export const usePartnersSlider = () => {
    new Swiper('.partners__slider', {
        modules: [Autoplay],
        slidesPerView: 4,
        spaceBetween: 80,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 0,
        },
        speed: 2500,
        reverseDirection: true,
        allowTouchMove: false,
    });
};

export const useTestimonialsSlider = () => {
    new Swiper('.testimonials__slider', {
        modules: [EffectFade, Navigation],
        slidesPerView: 'auto',
        spaceBetween: 22,
        loop: true,

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        navigation: {
            prevEl: '.testimonials__btn--prev',
            nextEl: '.testimonials__btn--next',
        },
    });
};
