const pictureSize = (imgSelector) => {
  const blocks = document.querySelectorAll(imgSelector);

  // function showImg(block) {
  //   const img = block.querySelector("img");
  //   img.src = img.src.slice(0, -4) + "-1.png";
  //   block.querySelectorAll("p:not(.sizes-hit)").forEach((p) => {
  //     p.style.display = "none";
  //   });
  // }
  // function hideImg(block) {
  //   const img = block.querySelector("img");
  //   img.src = img.src.slice(0, -6) + ".png";
  //   block.querySelectorAll("p:not(.sizes-hit)").forEach((p) => {
  //     p.style.display = "block";
  //   });
  // }

  function showHideImg(event) {
    const img = this.querySelector("img");
    img.src =
      event.type === "mouseover"
        ? img.src.slice(0, -4) + "-1.png"
        : img.src.slice(0, -6) + ".png";
    this.querySelectorAll("p:not(.sizes-hit)").forEach((p) => {
      p.style.display = event.type === "mouseover" ? "none" : "block";
    });
  }

  blocks.forEach((block) => {
    block.addEventListener("mouseover", showHideImg.bind(block));
    block.addEventListener("mouseout", showHideImg.bind(block));
  });
};

export default pictureSize;
