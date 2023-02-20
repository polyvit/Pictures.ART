import { getResource } from "../services/requests";

const calc = (size, material, options, promo, result) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promoBlock = document.querySelector(promo),
    resultBlock = document.querySelector(result);

  let sum = 0;
  let sizeVal = 0;

  const calcFunc = async function (e) {
    const result = await getResource("assets/prices.json");
    if (e.target.id == "size") {
      sizeVal = result.prices[e.target.selectedIndex - 1];
    }

    sum = Math.round(sizeVal * +materialBlock.value + +optionsBlock.value);

    if (sizeBlock.value === "" || materialBlock.value === "") {
      resultBlock.textContent = "Пожалуйста,выберите размер и материал картины";
    } else if (promoBlock.value === "IWANTPOPART") {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };

  sizeBlock.addEventListener("change", calcFunc);
  materialBlock.addEventListener("change", calcFunc);
  optionsBlock.addEventListener("change", calcFunc);
  promoBlock.addEventListener("input", calcFunc);
};

export default calc;
