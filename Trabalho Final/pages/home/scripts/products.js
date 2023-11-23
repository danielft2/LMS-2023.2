export function initProductsSwiper(Swiper) {
  let paginations = [];

  const swiper = new Swiper(".swiper.products", {
    orientation: "horizontal",
    spaceBetween: 32,
    slidesPerView: "auto",
    resizeObserver: true,
    updateOnWindowResize: true,
    navigation: {
      nextEl: ".carousel-next",
      prevEl: ".carousel-prev",
    },
    pagination: {
      el: ".products-pagination",
    },
    on: {
      init: () => {
        paginations = document.querySelectorAll(
          ".products-pagination .swiper-pagination-bullet"
        );
      },
    },
  });

  function navigateByPagination(index) {
    if (index > swiper.realIndex) return swiper.slideTo(index);
    else if (index === swiper.realIndex) return;
    else return swiper.slideTo(index);
  }

  paginations.forEach((item, index) => {
    item.addEventListener("click", () => navigateByPagination(index));
  });
}
