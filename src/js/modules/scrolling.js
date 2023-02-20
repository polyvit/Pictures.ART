const scrolling = (upSel) => {
  const upElem = document.querySelector(upSel),
    menuElem = document.querySelector(".header-menu");

  // Отображение стрелки для возврата наверх
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add("animated", "fadeIn");
      upElem.classList.remove("fadeOut");
    } else {
      upElem.classList.add("fadeOut");
      upElem.classList.remove("fadeIn");
    }
  });

  menuElem.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("menu-link")) {
      const href = e.target.firstElementChild.getAttribute("href");
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    } else {
      const href = e.target.getAttribute("href");
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });

  upElem.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#up").scrollIntoView({ behavior: "smooth" });
  });
};

export default scrolling;
