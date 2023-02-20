const modals = () => {
  let btnPressed = false;

  function bindModal(
    elSelector,
    modalSelector,
    closeSelector,
    destroy = false
  ) {
    const allElements = document.querySelectorAll(elSelector),
      modalWindow = document.querySelector(modalSelector),
      closeButton = document.querySelector(closeSelector),
      allWindows = document.querySelectorAll("[data-modal]");

    allElements.forEach((el) => {
      el.addEventListener("click", (e) => {
        if (el.target) e.preventDefault();
        btnPressed = true;

        if (destroy) {
          el.remove();
        }

        allWindows.forEach((window) => {
          window.style.display = "none";
          window.classList.add("animated", "fadeIn");
        });
        modalWindow.style.display = "block";
        document.body.classList.add("modal-open");
      });
    });
    closeButton.addEventListener("click", () => {
      // allWindows.forEach((window) => {
      //   window.style.display = "none";
      // });
      modalWindow.style.display = "none";
      document.body.classList.remove("modal-open");
    });
    modalWindow.addEventListener("click", (e) => {
      if (e.target === modalWindow) {
        modalWindow.style.display = "none";
        document.body.classList.remove("modal-open");
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      let display;
      document.querySelectorAll("[data-modal]").forEach((window) => {
        if (getComputedStyle(window).display !== "none") {
          display = "block";
        }
      });
      if (!display) {
        document.querySelector(selector).style.display = "block";
        document.body.classList.add("modal-open");
      }
    }, time);
  }

  function openByScroll(selector) {
    window.addEventListener("scroll", () => {
      if (
        !btnPressed &&
        window.pageYOffset + document.documentElement.clientHeight >=
          document.documentElement.scrollHeight - 1
      ) {
        document.querySelector(selector).click();
      }
    });
  }

  bindModal(".button-design", ".popup-design", ".popup-design .popup-close");
  bindModal(
    ".button-consultation",
    ".popup-consultation",
    ".popup-consultation .popup-close"
  );
  bindModal(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);
  openByScroll(".fixed-gift");
  // showModalByTime(".popup-consultation", 5000);
};

export default modals;
