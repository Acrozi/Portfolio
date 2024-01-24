function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const body = document.body;

  menuLinks.classList.toggle("open");
  icon.classList.toggle("open");
  body.classList.toggle("menu-open");
}

document.addEventListener("DOMContentLoaded", function () {
  const scrollArrows = document.querySelectorAll(".scroll-arrow");
  const scrollThreshold = 0.9; // Adjust this value (e.g., 0.7 means 70% of the window height)

  window.addEventListener("scroll", function () {
    scrollArrows.forEach((scrollArrow) => {
      const nextSection = document.querySelector(scrollArrow.getAttribute("href"));
      const nextSectionTop = nextSection.getBoundingClientRect().top;

      if (nextSectionTop <= window.innerHeight * scrollThreshold) {
        scrollArrow.closest('.scroll-arrow-container').classList.add("arrow-hidden");
      } else {
        scrollArrow.closest('.scroll-arrow-container').classList.remove("arrow-hidden");
      }
    });
  });

  scrollArrows.forEach((scrollArrow) => {
    scrollArrow.addEventListener("click", function (event) {
      event.preventDefault();

      const nextSection = document.querySelector(this.getAttribute("href"));

      nextSection.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});

