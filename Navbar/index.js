// Making custom accordion using javascript
const accordions = document.querySelectorAll(".accordion");
const listItems = document.querySelectorAll(".main__nav_listItem");
const activeListItems = document.querySelectorAll(".main__nav_listItem.active");
const nav = document.querySelector(".navbar-expand-md nav");

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
