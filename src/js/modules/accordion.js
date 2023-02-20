const accordion = (pSel, divSel) => {
  const allP = document.querySelectorAll(pSel),
    blocks = document.querySelectorAll(divSel);

  // allP.forEach((p) => {
  //   p.addEventListener("click", function () {
  //     this.classList.toggle("active-style");
  //     this.nextElementSibling.classList.toggle("active-content");
  //   });
  // });

  blocks.forEach((block) => {
    block.classList.add("animated", "fadeInDown");
  }); // Присваивание анимационных классов

  allP.forEach((p) => {
    p.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        allP.forEach((p) => p.classList.remove("active", "active-style"));
        this.classList.add("active", "active-style");
      }
    });
  });
};

export default accordion;
