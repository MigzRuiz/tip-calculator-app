/*
    1. Need to be able to enter bill
    2. Need to select a tip
        3. When tip is selected, tip color will change
    4. Need to select people
    5. Compute tip each person (bill * tip percent / people)
    6. Compute total amount per person (bill/peole + tip per person )
    7. Reset everything
*/

// Variables
const inputBill = document.querySelector(".input__bill");
const inputTip = document.querySelectorAll(".input__tip");
const inputPeople = document.querySelector(".input__people");
const outputPerson = document.querySelector(".output__amount-person");
const outputTotal = document.querySelector(".output__amount-total");
const resetBtn = document.querySelector(".input__reset");

let bill, currentTip, people, tipPerPerson, totalPerPerson;

// 1. Need to be able to enter bill
inputBill.addEventListener("change", (e) => {
  e.preventDefault();
  bill = parseInt(e.target.value);
  computeTipTotal();
});

// 2. Need to select a tip
inputTip.forEach((tipEl) => {
  tipEl.addEventListener("click", (e) => {
    e.preventDefault();

    currentTip = parseInt(e.target.innerText.replace("%", "")) / 100;
    computeTipTotal();

    // 3. When tip is selected, tip color will change
    inputTip.forEach((tEl) => {
      tEl.classList.remove("input__active");
    });
    tipEl.classList.add("input__active");
    console.log(currentTip);
  });
});

// 4. Need to select people
inputPeople.addEventListener("change", (e) => {
  e.preventDefault();
  people = parseInt(e.target.value);
  computeTipTotal();
});

const computeTipTotal = () => {
  // 5. Compute tip each person (bill * tip percent / people)
  tipPerPerson = (bill * currentTip) / people;
  outputPerson.textContent = tipPerPerson.toFixed(2);

  // 6. Compute total amount per person (bill/peole + tip per person )
  totalPerPerson = bill / people + tipPerPerson;
  outputTotal.textContent = "$" + totalPerPerson.toFixed(2);
};

// 7. Reset everything
resetBtn.addEventListener("click", (e) => {
  bill = 0;
  currentTip = 0;
  people = 0;
  tipPerPerson = 0;
  totalPerPerson = 0;

  inputBill.value = "";
  inputPeople.value = "";
  outputPerson.textContent = "$0.0";
  outputTotal.textContent = "$0.0";
});
