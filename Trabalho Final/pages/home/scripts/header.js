export function initHeader() {
   const butonMenuHamburger = document.querySelector(
     ".header-content-menu-hamburguer"
   );
   const headerContent = document.querySelector(".header-content nav");

   butonMenuHamburger.addEventListener('click', () => {
      butonMenuHamburger.classList.toggle('expand')
      headerContent.classList.toggle('active')
   })
}
