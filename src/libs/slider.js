import "swiper/css";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
(function () {
    const swiper = new Swiper(".featured-slider", {
        slidesPerView: "auto",
        modules: [Navigation],
        centeredSlides: true,
        observer: true,
        observeParents: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            300: {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 20,
            },
            580: {
                spaceBetween: 40,
                slidesPerView: "auto",
            },
        },
    });
})();
