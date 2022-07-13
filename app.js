const number1El = document.querySelector(".number-1");
const number2El = document.querySelector(".number-2");

const catPic1 = document.querySelector(".cat-pic-1");
const catPic2 = document.querySelector(".cat-pic-2");

const catName1El = document.querySelector("#cat-name-1");
const catName2El = document.querySelector("#cat-name-2");

let number1 = 0;
let number2 = 0;
const catName1 = "Luna";
const catName2 = "Mimi";

catName1El.textContent = catName1;
catName2El.textContent = catName2;

catPic1.addEventListener("click", function () {
  number1++;
  number1El.textContent = number1;
});

catPic2.addEventListener("click", function () {
  number2++;
  number2El.textContent = number2;
});
