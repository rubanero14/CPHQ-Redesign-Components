// Making custom accordion using javascript
const accordions = document.querySelectorAll(".accordion");
const listItems = document.querySelectorAll(".main__nav_listItem");
const activeListItems = document.querySelectorAll(".main__nav_listItem.active");
const nav = document.querySelector(".navbar-expand-xl nav");
const mobileNav = document.querySelector(".navbar-collapse.collapse");
const navbarToggler = document.querySelector(".navbar-toggler");
const header = document.querySelector(".navbar-expand-xl");
const mobileNavPanel = document.querySelector(".navbar-nav");

if (nav.classList.contains("desktop-nav")) {
  for (const li of listItems) {
    for (const ali of activeListItems) {
      li.addEventListener("click", () => {
        ali.classList.remove("active");
      });
    }
  }
}

// Logic for mobile navbar nested navigation
navbarToggler.addEventListener("click", () => {
  header.classList.toggle("active");
  mobileNav.classList.toggle("open");
  mobileNavPanel.classList.toggle("d-none");
});

for (const accordion of accordions) {
  if (nav.classList.contains("desktop-nav")) {
    nav.classList.toggle("desktop-nav");
  }

  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
    const panel = accordion.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
}
