// Toggle menu

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Interactive nav links {When click navigate to the page and automatically close the toggle}

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// After added ScrollReveal plugin

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header container
ScrollReveal().reveal(".header-container .section-subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header-container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header-container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// Room container
ScrollReveal().reveal(".room-card", {
  ...scrollRevealOption,
  interval: 500,
});

// Feature container
ScrollReveal().reveal(".feature-card", {
  ...scrollRevealOption,
  interval: 500,
});
