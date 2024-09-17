import Swiper from 'swiper';
import 'swiper/css';
import { Scrollbar } from 'swiper/modules';

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

export const partnersSlider = () => {
    new Swiper('.partners__slider', {
        slidesPerView: 'auto',
        spaceBetween: 32,
        centeredSlides: true,
    });
};
