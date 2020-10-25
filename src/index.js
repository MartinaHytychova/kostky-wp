import './style.css';
import './index.html';

//roll a random number form 1 to 6
const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

//create a dice each one with its own button
const Dice = (props) => {
  const outerElm = document.createElement('div');
  outerElm.className = 'dice';
  const innerElm = document.createElement('div');
  innerElm.className = `dice__side dice__side--${props.side}`;
  const button = document.createElement('button');
  button.className = 'btn btn--small roll-btn';
  button.textContent = 'hodit';
  // click event to roll and show a random number(side) on a dice
  button.addEventListener('click', () => {
    innerElm.className = `dice__side dice__side--${roll()}`;
  });
  outerElm.appendChild(innerElm);
  outerElm.appendChild(button);
  return outerElm;
};

const diceRow = document.querySelector('#dice-row');

//create 6 dices in a dice row elm
let count = 1;
while (count <= 6) {
  diceRow.appendChild(Dice({ side: roll() }));
  count++;
}

// add a new dice in a row
const btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', () => {
  diceRow.appendChild(Dice({ side: roll() }));
});

// shuffle all dices at once
const btnShuffle = document.querySelector('#btn-shuffle');
btnShuffle.addEventListener('click', () => {
  const dices = document.querySelectorAll('.dice__side');
  for (let i = 0; i < dices.length; i++) {
    const diceElm = dices[i];
    diceElm.className = `dice__side dice__side--${roll()}`;
  }
});
