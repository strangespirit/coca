import Swiper from 'swiper';
import 'swiper/scss';
import { Navigation } from 'swiper/modules';

export const useArticlesSlider = () => {
    new Swiper('.articles__slider', {
        modules: [Navigation],
        slidesPerView: 'auto',
        spaceBetween: 32,
        centeredSlides: false,

        navigation: {
            prevEl: '.articles__button-prev',
            nextEl: '.articles__button-next',
        },
    });
};