// import { postData } from "../services/requests";

const drop = () => {
  console.log("Check 5");
  const uploadInputs = document.querySelectorAll("[name='upload']");

  // Отменяем стандартное поведение браузера по открытию фото
  ["dragenter", "dragleave", "dragover", "drop"].forEach((eventName) => {
    uploadInputs.forEach((input) => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });
  function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // Добавление подсвечивающей обводки
  function highlight(item) {
    item.closest(".file_upload").style.border = "5px solid blue";
  }
  function unhighlight(item) {
    item.closest(".file_upload").style.border = "none";
  }
  ["dragenter", "dragover"].forEach((eventName) => {
    uploadInputs.forEach((input) => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    uploadInputs.forEach((input) => {
      input.addEventListener(eventName, () => unhighlight(input), false);
    });
  });

  // Загрузка перетащенного файла
  uploadInputs.forEach((input) => {
    input.addEventListener("drop", (e) => {
      input.files = e.dataTransfer.files;
      let dots;
      const arr = input.files[0].name.split(".");
      arr[0].length > 6 ? (dots = "...") : (dots = ".");
      const name = arr[0].substring(0, 6) + dots + arr[1];
      input.previousElementSibling.textContent = name;
    });
  });
};

export default drop;
