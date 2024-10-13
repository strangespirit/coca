import Swiper from 'swiper';
import 'swiper/scss';

export const useHeroSlider = () => {
    new Swiper('.hero__slider', {
        slidesPerView: 'auto',
        spaceBetween: 32,
        centeredSlides: true,

        breakpoints: {
            993: {
                centeredSlides: false,
            },
        },
    });
};