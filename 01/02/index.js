import { input, testInput, stringToNumber, stringNumberMap } from './input.js';

let totalSum = 0;

for(const inputElement of input) {
// for(const inputElement of input.slice(0, 60)) {
// for(const inputElement of testInput) {
  // console.log(inputElement);
  const allElementInts = findAllInts(inputElement);
  const elementValue = allElementInts[0] * 10 + allElementInts[allElementInts.length - 1];

  // console.log(`${inputElement} -> ${elementValue} | ${allElementInts}`);

  totalSum += elementValue;
}

console.log(totalSum);


function findAllInts(element) {
  let allInts = [];
  let stringNumberList = Object.keys(stringToNumber);

  let stringedInt = '';
  let stringedIntIndex = 0;
  let joinedInt = '';
  let joinedIntIndex = 0;

  for (let i = 0; i <= element.length; i++) {
    let focusedChar = element.charAt(i);
    let nextChar = element.charAt(i + 1);
    let parsedChar = parseInt(focusedChar);

    // console.log(`---${focusedChar} - ${nextChar}---`);
    // console.log(`[${ stringedIntIndex }] ${ stringedInt } | [${ joinedIntIndex }] ${ joinedInt }`);

    if (stringNumberList.includes(stringedInt)) {
      allInts.push(stringToNumber[stringedInt]);
      stringedInt = '';
      stringedIntIndex = 0;
    }

    if (!isNaN(parsedChar)) {
      allInts.push(parsedChar);
      stringedInt = '';
      stringedIntIndex = 0;
      joinedInt = '';
      joinedIntIndex = 0;
      continue;
    }

    const stringedIntMapArray = stringNumberMap[stringedIntIndex];
    const joinedIntMapArray = stringNumberMap[joinedIntIndex];
    const initialJoinedIntMapArray = stringNumberMap[0];

    if(stringedIntMapArray != undefined && stringedIntMapArray.includes(stringedInt + focusedChar)) {
      stringedInt += focusedChar;
      stringedIntIndex++;
    } else {
      stringedInt = '';
      stringedIntIndex = 0;
    }

    if(joinedIntMapArray != undefined && joinedIntMapArray.includes(joinedInt + nextChar)) {
      joinedInt += nextChar;
      joinedIntIndex++;
      if(stringNumberList.includes(joinedInt)) {
        stringedInt = joinedInt.slice(0, joinedIntIndex - 1);
        stringedIntIndex = joinedIntIndex - 1;
        joinedInt = nextChar;
        joinedIntIndex = 1;
      }
    } else if(initialJoinedIntMapArray != undefined && initialJoinedIntMapArray.includes(nextChar)) {
      joinedInt = nextChar;
      joinedIntIndex = 1;
    } else {
      joinedInt = '';
      joinedIntIndex = 0;
    }
  }

  return allInts;
}

