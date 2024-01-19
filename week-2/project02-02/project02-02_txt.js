/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: William Renard
      Date: 1-19-2024

      Filename: project02-02.js
 */

function verifyForm() {

  var name = document.getElementById('name').value;

  var email = document.getElementById('email').value;

  var phone = document.getElementById('phone').value;

  if (name === '' || email === '' || phone === '') {
    window.alert('Please fill in all fields.');
  }

  if (name !== '' && email !== '' && phone !== '') {
    window.alert('Thank you!');
  }
}

document.getElementById('submit').onclick = verifyForm;
