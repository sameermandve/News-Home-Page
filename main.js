const menuBtn = document.querySelector("#icon-menu");
const closeBtn = document.querySelector("#icon-menu-close");
const nav = document.querySelector("#nav-menu");

menuBtn.addEventListener("click", () => {
  const body = document.getElementsByTagName("body");
  const behindMenu = document.querySelector("#wrapper");

  nav.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("show");
});
