const checkTestInputs = (selector) => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach((input) => {
    input.addEventListener("keypress", (e) => {
      if (!e.key.match(/[а-яё 0-9]/gi)) {
        e.preventDefault();
      }
    });
    // input.addEventListener("input", (e) => {
    //   const wordsArr = e.target.value.split(" ");
    //   const string = `${wordsArr[0]}${wordsArr[1]}`;
    //   for (let i = 0; i < string.length; i++) {
    //     if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 122) {
    //       input.value = "";
    //     }
    //   }
    // });
  });
};

export default checkTestInputs;
