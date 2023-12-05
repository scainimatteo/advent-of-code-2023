import { input, testInput } from './input.js';

let totalSum = 0;

for(let i = 0; i < input.length; i++) {
  let validInts = getValidInts(input[i], input[i - 1], input[i + 1]);

  totalSum += validInts.reduce((adder, value) => adder += value, 0);
}

console.log(totalSum);

function getValidInts(currentLine, previousLine, nextLine) {
  let validInts = [];
  let testedInt = 0;
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < currentLine.length + 1; i++) {
    const focusedChar = currentLine[i];
    const parsedChar = parseInt(focusedChar ?? '');

    if(!isNaN(parsedChar)) {
      if (testedInt == 0) {
        startIndex = i;
      }
      testedInt = testedInt * 10 + parsedChar;
      continue;
    }
    
    if (testedInt != 0) {
      endIndex = i - 1;
      // console.log(`---${testedInt}---`);
      let isValidInt = checkIfIsValidInt(startIndex, endIndex, currentLine, previousLine, nextLine);
      if (isValidInt) {
        validInts.push(testedInt);
      }
    }

    testedInt = 0;
    startIndex = 0;
    endIndex = 0;
  }

  return validInts;
}

function checkIfIsValidInt(startIndex, endIndex, currentLine, previousLine, nextLine) {
  if (currentLine[startIndex - 1] != undefined && currentLine[startIndex - 1] != '.') {
    return true;
  }
  if (currentLine[endIndex + 1] != undefined && currentLine[endIndex + 1] != '.') {
    return true;
  }

  if (previousLine != undefined) {
    for (let index = startIndex - 1; index <= endIndex + 1; index++) {
      const element = previousLine[index];
      if (element != undefined && element != '.') {
        return true;
      }
    }
  }
  if (nextLine != undefined) {
    for (let index = startIndex - 1; index <= endIndex + 1; index++) {
      const element = nextLine[index];
      if (element != undefined && element != '.') {
        return true;
      }
    }
  }

  return false;
}