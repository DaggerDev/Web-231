"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: William Renard
      Date: 3/2/2024

      Filename: project06-03.js
*/

let useShip = document.getElementById("useShip"); // get the checkbox for use shipping

// billing inputs
let firstnameBill = document.getElementById("firstnameBill");
let lastnameBill = document.getElementById("lastnameBill");
let address1Bill = document.getElementById("address1Bill");
let address2Bill = document.getElementById("address2Bill");
let cityBill = document.getElementById("cityBill");
let countryBill = document.getElementById("countryBill");
let codeBill = document.getElementById("codeBill"); // zipcode
let stateBill = document.getElementById("stateBill");

// shipping inputs
let firstnameShip = document.getElementById("firstnameShip");
let lastnameShip = document.getElementById("lastnameShip");
let address1Ship = document.getElementById("address1Ship");
let address2Ship = document.getElementById("address2Ship");
let cityShip = document.getElementById("cityShip");
let countryShip = document.getElementById("countryShip");
let codeShip = document.getElementById("codeShip"); // zipcode
let stateShip = document.getElementById("stateShip");

useShip.addEventListener("click", copyShippingToBilling); // creating the event listener.

function copyShippingToBilling() {
  if(useShip.checked == true) { // technically we could check if it was false and return and then run the functionality afterwards but either is fine in this case.
    firstnameBill.value = firstnameShip.value;
    lastnameBill.value = lastnameShip.value;
    address1Bill.value = address1Ship.value;
    address2Bill.value = address2Ship.value;
    cityBill.value = cityShip.value;
    countryBill.value = countryShip.value;
    codeBill.value = codeShip.value;
    stateBill.selectedIndex = stateShip.selectedIndex;
  }
}

let formElements = document.querySelectorAll("input[type=text]"); // get all nodes that are inputs
// this is because dropdowns have default values and therefore do not need to be checked for being empty. we only want the inputs.
let fieldCount = formElements.length; // get the length of the formElements node array.
let errorBox = document.getElementById("errorBox");

for(let i = 0; i < fieldCount; i++) { // loop through the total amount of form elements.
  formElements[i].addEventListener("invalid", showValidationError); // apply the event listener if the form input is empty or invalid.
}

// show validation function
function showValidationError(evt) {
  evt.preventDefault(); // prevents browsers from applying default actions in this event.
  errorBox.textContent = "Complete all highlighted fields";
}

