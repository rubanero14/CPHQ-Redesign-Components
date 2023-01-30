// Making custom accordion using javascript
const acc = document.querySelectorAll(".accordion");
const toggler = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar-expand-md");

// Logic for mobile navbar nested navigation
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", () => {
    acc[i].classList.toggle("active");
    const panel = acc[i].nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
}

// Mobile navigation toggler logic
toggler.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
