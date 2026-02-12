let mobileBtn = document.querySelector(".mobile-menu-btn");
let modal = document.querySelector(".mobile-modal");
let articleHeadings = document.querySelectorAll(".article h3");

mobileBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

modal.addEventListener("click", (e) => {
  modal.classList.add("hidden");
});
