const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    allBtns = menu.querySelectorAll("li"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    allPhotos = wrapper.querySelectorAll(".all"),
    noParagraph = document.querySelector(".portfolio-no");

  function showPhotos(photo) {
    photo.style.display = "block";
    photo.classList.add("animated", "fadeIn");
  }

  const checkClassAndShow = (e) => {
    let targetClass = e.target.classList[0];
    allPhotos.forEach((item) => {
      item.style.display = "none";
      item.classList.remove("animated", "fadeIn");
    });
    noParagraph.style.display = "none";
    noParagraph.classList.remove("animated", "fadeIn");
    if (targetClass == "grandmother" || targetClass == "granddad") {
      noParagraph.style.display = "block";
      noParagraph.classList.add("animated", "fadeIn");
    } else {
      document
        .getElementsByClassName(targetClass)
        .forEach((photo) => showPhotos(photo));
    }
  };

  const filterByBtn = () => {
    allBtns.forEach((btn) => {
      btn.addEventListener("click", checkClassAndShow);
    });
  };
  filterByBtn();

  menu.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.tagName === "LI") {
      allBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      target.classList.add("active");
    }
  });
};

export default filter;
