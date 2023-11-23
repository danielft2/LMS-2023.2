export function initPartnersSwiper(Swiper) {
   new Swiper(".swiper.partenrs", {
      orientation: "horizontal",
      slidesPerView: 1,
      loop: true,
      autoplay: { delay: 1500 },
      pagination: { el: ".partners-pagination" }
   });
}
