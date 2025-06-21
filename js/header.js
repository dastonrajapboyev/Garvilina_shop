document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".header__nav");
  let overlay = document.querySelector(".header__nav__overlay");

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "header__nav__overlay";
    document.body.appendChild(overlay);
  }

  function closeMenu() {
    nav.classList.remove("open");
    burger.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  burger.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");
    burger.classList.toggle("open", isOpen);
    overlay.classList.toggle("active", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  overlay.addEventListener("click", closeMenu);

  // Optional: close on ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
});
