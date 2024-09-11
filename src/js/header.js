document.querySelector(".shop-menu > a").addEventListener("click", (e) => {
  e.preventDefault();

  const dropdownMenu = document.querySelector(".shop-menu .dropdown");

  document.querySelectorAll(".menu .dropdown").forEach((menu) => {
    if (menu !== dropdownMenu) {
      menu.style.display = "none";
    }
  });

  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".shop-menu")) {
    document.querySelector(".shop-menu .dropdown").style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cartTrigger = document.querySelector(".cart-trigger");
  const overlay = document.querySelector(".overlay");
  const cartBox = document.querySelector(".cart-box");
  const closeButton = document.querySelector(".cart-box .close-btn");

  if (cartTrigger) {
    cartTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      overlay.style.display = "block";
      cartBox.style.display = "block";
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      overlay.style.display = "none";
      cartBox.style.display = "none";
    });
  }

  if (overlay) {
    overlay.addEventListener("click", () => {
      overlay.style.display = "none";
      cartBox.style.display = "none";
    });
  }
});
