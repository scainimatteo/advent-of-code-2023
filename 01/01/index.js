import { input } from './input.js';

let totalSum = 0;

for(const inputElement of input) {
  const firstInt = findFirstInt(inputElement);
  const lastInt = findLastInt(inputElement);
  const elementNumber = firstInt*10 + lastInt;
  totalSum += elementNumber;
}

console.log(totalSum);

function findFirstInt(element) {
  for (let i = 0; i <= element.length; i++) {
    let parsedChar = parseInt(element.charAt(i));
    if (!isNaN(parsedChar)) {
      return parsedChar;
    }
  }
}

function findLastInt(element) {
  for (let i = element.length; i >= 0; i--) {
    let parsedChar = parseInt(element.charAt(i));
    if (!isNaN(parsedChar)) {
      return parsedChar;
    }
  }
}
