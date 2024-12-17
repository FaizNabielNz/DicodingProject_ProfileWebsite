const navSlide = () => {
  const burgerNav = document.querySelector(".burgerNav");
  const headerNav = document.querySelector(".header-nav");

  burgerNav.addEventListener("click", () => {
    headerNav.classList.toggle("nav-active");
    burgerNav.classList.toggle("toggle-burger");
  });
};
navSlide();
