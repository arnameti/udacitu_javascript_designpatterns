const numberEl = document.querySelector(".number");
const catPic = document.querySelector(".cat-pic");

let number = 0;

catPic.addEventListener("click", function () {
  number++;
  numberEl.textContent = number;
});
