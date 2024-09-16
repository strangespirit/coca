import Swiper from 'swiper';
import 'swiper/css';

export const useInsightSlider = () => {
    new Swiper('.insight__slider', {
        slidesPerView: 'auto',
        spaceBetween: 32,
        // loop: true,
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
