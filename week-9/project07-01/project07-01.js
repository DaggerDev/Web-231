"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: William Renard
      Date: 3/4/2024

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) {
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");
  e.preventDefault();
  let regex1 = /[A-Z]/; // this will select any character uppercase A - Z
  let regex2 = /\d/; // if I did just [0-9] it would just pick a single digit from a number like 1234 the 1 would be selected and nothing else
  let regex3 = /[$#!%]/;
  if(pwd.length < 8) {
    feedback.textContent = "Your password must be at least 8 characters.";
  } else if(regex1.test(pwd) == false) { // test if the password returns true when tested by the regex single Uppercase letter
    feedback.textContent = "Your password must include an uppercase letter.";
  } else if(regex2.test(pwd) == false) { // test if the password returns true when tested by the regex single digit
    feedback.textContent = "Your password must include a number.";
  } else if(regex3.test(pwd) == false) { // test if the password returns true when tested by the regex single special character $#!%
    feedback.textContent = "Your password must include one of the following: !$#%.";
  } else {
    signupForm.submit(); // submit the form so the form action will redirect us to formsubmit.html
  }
}
);
