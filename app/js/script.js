const headerToggle = document.querySelector(".header__toggle");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");
header.addEventListener("click", () => {
  if (!header.classList.contains("open")) {
    header.classList.add("open");
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
    fadeElements.forEach((e) => e.classList.remove("has-fade"));
    document.body.classList.add("no-scroll");
  } else {
    header.classList.remove("open");
    overlay.classList.add("fade-out");
    overlay.classList.remove("fade-in");
    fadeElements.forEach((e) => e.classList.add("has-fade"));
    document.body.classList.remove("no-scroll");
  }
});
