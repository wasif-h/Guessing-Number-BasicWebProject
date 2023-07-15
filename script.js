'use strict';

//secret Number fix - random
// click on check - message
// life update

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let life = 7;
let highScore = 0;

// after clicking check button -----------------------------------------------

document.querySelector('.check').addEventListener('click', function () {
  let collectNumber = Number(document.querySelector('.guess').value);

  if (!collectNumber) {
    document.querySelector('.message').textContent = 'No Number';
  }
  //winning conditions
  else if (collectNumber == secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number ';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.border = '20px dashed grey';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    highScore = life * 5;
    document.querySelector('.highscore').textContent = highScore;



  } else if (collectNumber > secretNumber) {
    document.querySelector('.message').textContent = 'Hint - Too High';

    if (life < 2) {
      document.querySelector('.message').textContent = 'You Dumb, You Lose';
      document.querySelector('body').style.backgroundColor = 'red';
    } else {
      life--;
      document.querySelector('.life').textContent = life;
    }
  } else if (collectNumber < secretNumber) {
    document.querySelector('.message').textContent = 'Hint - Too Low';

    if (life < 2) {
      document.querySelector('.message').textContent = 'You Dumb, You Lose';
      document.querySelector('body').style.backgroundColor = 'red';
    } else {
      life--;
      document.querySelector('.life').textContent = life;
    }
  } else {
    document.querySelector('.message').textContent = 'Invalid Input';
  }
});

// after clicking again button ---------------------------------------------

document.querySelector('.again').addEventListener('click', function () {
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  let life = 7;
  document.querySelector('.life').textContent = life;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('body').style.backgroundColor = '#001C30';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.border = '0px';
 

});
