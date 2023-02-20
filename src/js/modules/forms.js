import { postData } from "../services/requests";
// import toggleHint from "./toggleHint";

const forms = () => {
  const forms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    uploadInputs = document.querySelectorAll("[name='upload']"),
    // fileUploads = document.querySelectorAll(".file_upload"),
    comment = document.querySelector("form textarea");

  const message = {
    loading: "Идет загрузка",
    error: "Что-то пошло не так",
    success: "Спасибо, менеджер скоро свяжется с вами",
    spinner: "assets/img/spinner.gif",
    ok: "assets/img/ok.png",
    fail: "assets/img/fail.png",
  };

  const path = {
    designer: "assets/server.php",
    question: "assets/question.php",
  };

  const clearInputs = () => {
    inputs.forEach((input) => (input.value = ""));
    uploadInputs.forEach((upload) => {
      upload.previousElementSibling.textContent = "Файл не выбран";
    });
    comment.value = "";
  };

  uploadInputs.forEach((item, index) => {
    item.addEventListener("input", () => {
      let dots;
      const arr = item.files[0].name.split(".");
      arr[0].length > 6 ? (dots = "...") : (dots = ".");
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
      let button = item.previousElementSibling.previousElementSibling;
      button.textContent = "Загружено";
    });
  });

  // fileUploads.forEach((item, index) => {
  //   item.addEventListener("mouseenter", function (e) {
  //     console.log("it works");
  //     toggleHint(e.type, index, "Вы можете перетянуть файл с компьютера");
  //   });
  //   item.addEventListener("mouseleave", function (e) {
  //     toggleHint(e.type, index);
  //   });
  // });

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Элемент, в котором будет картинка и текст
      let statusElement = document.createElement("div");
      statusElement.classList.add("status");
      form.parentNode.appendChild(statusElement);

      // Скрываем форму (вместо нее будет изображение)
      form.classList.add("animated", "fadeOutUp");
      setTimeout(() => {
        form.style.display = "none";
      }, 400);

      // Элемент картинки
      let statusImg = document.createElement("img");
      statusImg.setAttribute("src", message.spinner);
      statusImg.classList.add("animated", "fadeInUp");
      statusElement.appendChild(statusImg);
      // Элемент текстовой подписи
      let textMessage = document.createElement("div");
      textMessage.textContent = message.loading;
      statusElement.appendChild(textMessage);

      const formData = new FormData(form);
      formData.append("key", "1234");

      let api;
      form.closest(".popup-design") || form.classList.contains("upload_form")
        ? (api = path.designer)
        : (api = path.question);

      postData(api, formData)
        .then((result) => {
          console.log(result);
          statusImg.setAttribute("src", message.ok);
          textMessage.textContent = message.success;
        })
        .catch((e) => {
          statusImg.setAttribute("src", message.fail);
          textMessage.textContent = message.error;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusElement.remove();
            form.style.display = "block";
            form.classList.remove("fadeOutUp");
            form.classList.add("fadeInUp");
          }, 5000);
        });
    });
  });
};

export default forms;
