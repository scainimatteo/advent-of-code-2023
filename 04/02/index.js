import { input, testInput } from './input.js';

let totalSum = 0;

let scratchCardsInstances = Array(input.length).fill(1);
for (let i = 0; i < input.length; i++) {
  const game = input[i];
  let wonInstances = getWonInstances(game);

  for (let scratchCardsIndex = i + 1; scratchCardsIndex < i + 1 + wonInstances; scratchCardsIndex++) {
    scratchCardsInstances[scratchCardsIndex] += scratchCardsInstances[i];
  }
}

totalSum = scratchCardsInstances.reduce((adder, value) => adder += value);
console.log(totalSum);

function getWonInstances(game) {
  let totalWonInstances = 0;

  let gameValues = game.split(': ')[1].split(' | ');
  let winningNumbers = gameValues[0].split(' ').filter((value) => value != '').map((value) => parseInt(value)).sort((a, b) => a - b);
  let obtainedNumbers = gameValues[1].split(' ');

  for (const number of obtainedNumbers) {
    let isWinningNumber = checkWinningNumber(winningNumbers, parseInt(number));
    if (isWinningNumber) {
      totalWonInstances++;
    }
  }

  return totalWonInstances;
}

function checkWinningNumber(winningNumbers, number) {
  for (const winningNumber of winningNumbers) {
    if (number == winningNumber) {
      return true;
    } else if (number > winningNumber) {
      continue;
    } else if (number < winningNumber) {
      return false;
    }
  }
}