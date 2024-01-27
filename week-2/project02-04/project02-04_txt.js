/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: William Renard
      Date: 1-26-2024

      Filename: project02-04.js
 */

const chicken_price = 10.95;
const halibut_price = 13.95;
const burger_price = 9.95;
const salmon_price = 18.95;
const salad_price = 7.95;
const sales_tax = 0.07;

// no matter if someone ticks or unticks the checkbox this will run which is good for responsiveness.
document.getElementById("chicken").addEventListener("click", () => {
  calcTotal();
});

document.getElementById("halibut").addEventListener("click", () => {
  calcTotal();
});

document.getElementById("salad").addEventListener("click", () => {
  calcTotal();
});

document.getElementById("salmon").addEventListener("click", () => {
  calcTotal();
});

document.getElementById("burger").addEventListener("click", () => {
  calcTotal();
});

function calcTotal() {
  let cost = 0;
  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;

  // I was doing if statements but the assignment said to see Figure 2-21 which uses the ? operator.
  cost += buyChicken ? chicken_price : 0;
  cost += buyHalibut ? halibut_price : 0;
  cost += buyBurger ? burger_price : 0;
  cost += buySalmon ? salmon_price : 0;
  cost += buySalad ? salad_price : 0;

  let tax = cost * sales_tax;
  let totalCost = cost + tax;
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
