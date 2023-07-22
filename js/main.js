// Selecting DOM
const submit = document.getElementById('submit');
const result = document.getElementById('result');

// Function
function binary(e) {
  e.preventDefault();

  let num = document.getElementById('number').value;

  if (num === '') {
    alert('Please enter a number');
  } else if (num < 0) {
    alert('Please enter a positive number');
  } else {
    result.style.visibility = 'visible';
  }

  // Clearing Input
  let binaryNum = Number(num).toString(2);
  result.innerHTML = binaryNum;
}

// Adding Event Listener
submit.addEventListener('click', binary);