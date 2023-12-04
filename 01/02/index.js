import { input, testInput } from './input.js';
import { stringToNumber, numberLength } from './models.js';

let totalSum = 0;

for(const inputElement of input) {
  const allElementInts = findAllInts(inputElement);
  const elementValue = allElementInts[0] * 10 + allElementInts[allElementInts.length - 1];

  totalSum += elementValue;
}

console.log(totalSum);


function findAllInts(element) {
  let allInts = [];

  for (let i = 0; i <= element.length; i++) {
    let focusedChar = element.charAt(i);
    let parsedChar = parseInt(focusedChar);

    if (!isNaN(parsedChar)) {
      allInts.push(parsedChar);
      continue;
    }

    if (focusedChar == 'o') {
      let stringedInt = element.slice(i, i + numberLength.one);
      if (stringToNumber[stringedInt]) {
        allInts.push(stringToNumber[stringedInt]);
        continue;
      }
    } else if (focusedChar == 't') {
      let stringedInt = element.slice(i, i + numberLength.two);
      if (stringToNumber[stringedInt]) {
        allInts.push(stringToNumber[stringedInt]);
        continue;
      }

      stringedInt = element.slice(i, i + numberLength.three);
      if (stringToNumber[stringedInt]) {
        allInts.push(stringToNumber[stringedInt]);
        continue;
      }
    } else if (focusedChar == 'f') {
      let stringedInt = element.slice(i, i + numberLength.four);
      if (stringToNumber[stringedInt]) {
        allInts.push(stringToNumber[stringedInt]);
        continue;
      }

      stringedInt = element.slice(i, i + numberLength.five);
      if (stringToNumber[stringedInt]) {
        allInts.push(stringToNumber[stringedInt]);
        continue;
      }
    } else if (focusedChar == 's') {
      let stringedInt = element.slice(i, i + numberLength.six);
      if (stringToNumber[stringedInt]) {
        allInts.push(stringToNumber[stringedInt]);
        continue;
      }

      stringedInt = element.slice(i, i + numberLength.seven);
      if (stringToNumber[stringedInt]) {
        allInts.push(stringToNumber[stringedInt]);
        continue;
      }
    } else if (focusedChar == 'e') {
      let stringedInt = element.slice(i, i + numberLength.eight);
      if (stringToNumber[stringedInt]) {
        allInts.push(stringToNumber[stringedInt]);
        continue;
      }
    } else if (focusedChar == 'n') {
      let stringedInt = element.slice(i, i + numberLength.nine);
      if (stringToNumber[stringedInt]) {
        allInts.push(stringToNumber[stringedInt]);
        continue;
      }
    }


  }

  return allInts;
}
