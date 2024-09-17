import Swiper from 'swiper';
import 'swiper/css';
import { Scrollbar } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

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
