const menuBtn = document.querySelector("#icon-menu");
const closeBtn = document.querySelector("#icon-menu-close");
const nav = document.querySelector("#nav-menu");

menuBtn.addEventListener("click", () => {
  const behindMenu = document.querySelector("#nav-bg");

  nav.classList.add("show");
  behindMenu.classList.add("add");
});

closeBtn.addEventListener("click", () => {
  const behindMenu = document.querySelector("#nav-bg");

  nav.classList.remove("show");
  behindMenu.classList.remove("add");
});
