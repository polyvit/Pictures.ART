const toggleHint = (event, index, message = "") => {
  const fileUploads = document.querySelectorAll(".file_upload"),
    element = fileUploads[index];

  if (event == "mouseenter") {
    let hint = document.createElement("div");
    hint.innerHTML = `<p class="text-hint">${message}</p>`;
    hint.classList.add("hint");
    document.querySelector("body").append(hint);
    const topX = element.getBoundingClientRect().x;
    const topY = element.getBoundingClientRect().y;
    console.log(topX, topY);
    hint.style.top = topY - 45 - 8 + "px";
    hint.style.left = topX + "px";
  }
  if (event == "mouseleave") {
    document.querySelector(".hint").remove();
  }
};

export default toggleHint;
