import { input, testInput } from './input.js';

let totalSum = 0;

for (const game of input) {
  let gamePoints = getGamePoints(game);
  
  totalSum += gamePoints;
}

console.log(totalSum);

function getGamePoints(game) {
  let totalWinningNumbers = 0;

  let gameValues = game.split(': ')[1].split(' | ');
  let winningNumbers = gameValues[0].split(' ').filter((value) => value != '').map((value) => parseInt(value)).sort((a, b) => a - b);
  let obtainedNumbers = gameValues[1].split(' ');

  for (const number of obtainedNumbers) {
    let isWinningNumber = checkWinningNumber(winningNumbers, parseInt(number));
    if (isWinningNumber) {
      totalWinningNumbers++;
    }
  }

  return totalWinningNumbers > 0
    ? Math.pow(2, totalWinningNumbers - 1)
    : 0;
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