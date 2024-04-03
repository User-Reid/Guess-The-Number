'use strict';
/*
// this is the exact same way we would select a class using CSS
console.log(document.querySelector('.message').textContent); //querySelector is basically a method that is avaialbe on the document object.
// we pass in the string and we want to pass in the element with the class of ".message", if it were id it would be #message

//===document.querySelector('.message') first selects the ELEMENT. the result of the QUERY SELECTOR is going to be an ELEMENT.
//=== then on that new ELEMENT, it is going to read the TEXTCONTENT PROPERTY

//===so far, console.log(document.querySelector('.message').textContent); simply is just logging the textcontent of the 'message' class.

// ======== .71
*/
//
// DOM = Document Object Model. : Allows javascript to access html elements and sytles to manipulate them. It is a connection point between html documents and javascript code.
// Dom is automatically created and is stored in tree structure.

// Web API's are like libraries that can interact with Javascript.

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number! 🥳🎉🎊';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
// we are changing the number class's text content to 13
document.querySelector('.score').textContent = 10;
// we are changing the number class's text content to 10

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// An EVENT is something that happens on the page. example:
// an EVENT listener we can wait for an event to happen, and then react to it.

//ALOT OF REFACTORING WAS DONE ON THE CODE BELOW//====================

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('Please input a number 😡🤬');

    //When Player Wins
  } else if (guess === secretNumber) {
    displayMessage('CONGRATULATIONS!! YOU GUESSED THE RIGHT NUMBER!🎊🎉🎊🥳');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'You are guessing too high'
          : 'You are guessing too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You have lost the game.😭😭😭😭😭');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing!');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
});
