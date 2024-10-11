import Swiper from 'swiper';
import 'swiper/scss';
import { Scrollbar, EffectCoverflow } from 'swiper/modules';


export const useTeamSlider = () => {
    new Swiper('.team__slider', {
        modules: [EffectCoverflow, Scrollbar],
        slidesPerView: 'auto',
        spaceBetween: 32,
        centeredSlides: true,

        effect: 'coverflow',
        coverflow: {
            rotate: 50,
            scale: 1,
            slideShadows: true,
        },

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