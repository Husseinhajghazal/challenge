let myBtn = document.getElementById("btn");
let num = document.querySelectorAll("#num");
let myResultBox = document.querySelector(".result-box");
let myRateBox = document.querySelector(".rating-box");
let myScore = document.querySelector(".score");

console.log(myScore);

myBtn.addEventListener("click", changeBox);

function changeBox() {
  myRateBox.classList.add("hide");
  myScore.textContent = chosedNum;
  myResultBox.classList.add("block");
}

num.forEach((e) => {
  e.addEventListener("click", changeColor);
});

function changeColor(event) {
  num.forEach((e) => {
    e.classList.remove("active");
  });
  event.target.classList.add("active");
  chosedNum = event.target.textContent;
}
