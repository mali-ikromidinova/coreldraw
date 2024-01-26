window.addEventListener("DOMContentLoaded", () => {
  const navigation = document.querySelector(".navigation"),
    navLink = document.querySelectorAll(".nav-link"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navigation.classList.toggle("navigation-active");
  });

  navLink.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger-active");
      navigation.classList.toggle("navigation-active");
    });
  });
});
