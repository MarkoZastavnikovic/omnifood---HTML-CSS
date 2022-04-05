// Set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Making mobile navigation work

const btnNavOpenEl = document.querySelector(".menu-outline");
const btnNavCloseEl = document.querySelector(".close-outline");
const headerEl = document.querySelector(".header");
const navMainEl = document.querySelector(".nav-main");
const viewportHtml = document.querySelector("html");

btnNavOpenEl.addEventListener("click", function () {
  headerEl.classList.add("nav-open");
  viewportHtml.style.overflowY = "hidden";
});

btnNavCloseEl.addEventListener("click", function () {
  headerEl.classList.remove("nav-open");
  viewportHtml.style.overflowY = "visible";
});

navMainEl.addEventListener("click", function (e) {
  const target = e.target;
  if (target.classList.contains("nav-main-link")) {
    headerEl.classList.remove("nav-open");
    viewportHtml.style.overflowY = "visible";
  }
});

document.addEventListener("click", function (e) {
  const href = e.target.getAttribute("href");

  if (href === "#") {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (href !== "#" && href?.startsWith("#")) {
    e.preventDefault();
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
});

////////////////////////////////////////////////////////////////

window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

// document.querySelector(".logo").addEventListener("click", function () {
//   window.location = "/";
// });
