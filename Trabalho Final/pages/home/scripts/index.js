import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

import { initHeader } from "./header.js";
import { initProductsSwiper } from "./products.js";
import { initPartnersSwiper } from "./partners.js";

initHeader();
initProductsSwiper(Swiper);
initPartnersSwiper(Swiper);
