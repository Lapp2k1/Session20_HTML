// const container = document.getElementById("list");
// for (let i = 0; i < 3; i++) {
//   container.insertAdjacentHTML("beforebegin", `<li>${i}</li>`);
// }
// btn.addEventListener("click", (e) => {
//   // Callback body
// });
// const changecolor = setTimeout(function () {
//   document.getElementById("hello").style.color = "red";
// }, 2000);
// clearTimeout(changecolor);
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const changecolor2 = setInterval(function () {
  document.getElementById("hello").style.color = getRandomColor();
}, 1000);
let input = document.getElementById("input");
let btn = document.getElementById("btn");

let result = document.getElementById("result");
btn.onclick = function () {
  result.innerHTML = input.value.toUpperCase();
};
