console.log("hello world");

//VARIABLES
const input = document.querySelector(".input__bill");
const log = document.getElementById("log");

input.addEventListener("change", (e) => {
  e.preventDefault();
  console.log(e.target.value);
});
