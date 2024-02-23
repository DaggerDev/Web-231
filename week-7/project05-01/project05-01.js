"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: William Renard
      Date: 2/23/2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID; // id for the interval
// and the node list for questions
let questionList = document.querySelectorAll("div#quiz input");

startQuiz.addEventListener("click", () => { // click event listener.
  overlay.setAttribute("class", "showquiz"); // setting class attribute of the overlay so that the quiz becomes visible.
  timeID = setInterval(countdown, 1000); // using timeID variable to store interval ID so that we can clear it later in the countdown function.
});

function countdown() {
  if(timeLeft == 0) { // checking if timeLeft is = to 0, if so we're going to stop the interval and then check answers
    clearInterval(timeID); // stopping repeat interval by the ID set previously
    let totalCorrect = checkAnswers(); // totalCorrect will store the value returned by checkAnswers
    if(totalCorrect == correctAnswers.length) {
      // create alert that they got a 100.
      alert("You got a 100! Great job!");
    } else {
      alert("You missed " + (correctAnswers.length-totalCorrect) + "/" + correctAnswers.length + " questions."); // create alert
      overlay.setAttribute("class", "hidequiz"); // hide quiz by changing attribute
      timeLeft = quizTime; // reset timer
      quizClock.value = timeLeft; // reset clock display
    }
  } else { // if timeLeft is not 0
    timeLeft -= 1; // subtracting 1 second from the quiz time
    quizClock.value = timeLeft; // updating the quiz clock.
  }
}

function checkAnswers() {
  // 6c was written really quite poorly, but this is my understanding of what it is asking...
  // this function is only to check how *many* questions the student got correct.
  let answersRight = 0; // create a variable to return from the function
  for(let i = 0; i < correctAnswers.length; i++) { // loop based on the length of the correct answers array
    if(questionList[i].value == correctAnswers[i]) { // checking if the question matches the correct answer from the array
      answersRight++; // increment answersRight variable if question was correct.
    }
  }
  return answersRight; // return the variable
}





















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}

