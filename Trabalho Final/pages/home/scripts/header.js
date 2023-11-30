export function initHeader() {
   const butonMenuHamburger = document.querySelector(
     ".header-content-menu-hamburguer"
   );
   
   const dropdownButton = document.querySelector(".our-services");
   const dropdownContent = document.querySelector(".our-services-dropdown");

   const headerContent = document.querySelector(".header-content nav");

   butonMenuHamburger.addEventListener('click', () => {
      butonMenuHamburger.classList.toggle('expand')
      headerContent.classList.toggle('active')
   })

   dropdownButton.addEventListener('mouseover', () => {
      dropdownContent.classList.add('active')
   })

   dropdownButton.addEventListener("mouseleave", () => {
     dropdownContent.classList.remove("active");
   });
}
