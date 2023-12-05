import { input, testInput } from './input.js';

let totalSum = 0;

for(let i = 0; i < input.length; i++) {
  let [ gearValues, hasValues ] = getGearValues(input[i], input[i - 1], input[i + 1]);

  if (hasValues) {
    totalSum += gearValues.reduce((adder, value) => adder = adder + value, 0);
  }
}

console.log(totalSum);

function getGearValues(currentLine, previousLine, nextLine) {
  let gearValues = [];

  for (let i = 0; i < currentLine.length + 1; i++) {
    if (currentLine[i] == '*') {
      let [ gearRatio, isValidGear ] = checkIfIsValidGear(i, currentLine, previousLine, nextLine);

      if (isValidGear) {
        gearValues.push(gearRatio);
      }
    }
  }

  return [ gearValues, gearValues.length > 0 ];
}

function checkIfIsValidGear(index, currentLine, previousLine, nextLine) {
  let adjacentInts = [];

  if (currentLine[index - 1] != undefined) {
    let parsedChar = parseInt(currentLine[index - 1]);

    if (!isNaN(parsedChar)) {
      let foundInt = getInt(currentLine, index - 1, parsedChar);

      if (!adjacentInts.includes(foundInt)) {
        adjacentInts.push(foundInt);
      }
    }
  }
  if (currentLine[index + 1] != undefined) {
    let parsedChar = parseInt(currentLine[index + 1]);

    if (!isNaN(parsedChar)) {
      let foundInt = getInt(currentLine, index + 1, parsedChar);

      if (!adjacentInts.includes(foundInt)) {
        adjacentInts.push(foundInt);
      }
    }
  }

  if (previousLine != undefined) {
    for (let i = index - 1; i <= index + 1; i++) {
      let parsedChar = parseInt( previousLine[i] );

      if (!isNaN(parsedChar)) {
        let foundInt = getInt(previousLine, i, parsedChar);

        if (!adjacentInts.includes(foundInt)) {
          adjacentInts.push(foundInt);
        }
      }
    }
  }
  if (nextLine != undefined) {
    for (let i = index - 1; i <= index + 1; i++) {
      let parsedChar = parseInt( nextLine[i] );

      if (!isNaN(parsedChar)) {
        let foundInt = getInt(nextLine, i, parsedChar);

        if (!adjacentInts.includes(foundInt)) {
          adjacentInts.push(foundInt);
        }
      }
    }
  }

  let multipliedInts = 1
  if(adjacentInts.length == 2) {
    multipliedInts = adjacentInts.reduce((multiplier, value) => multiplier *= value, 1);
  }
  return [ multipliedInts, adjacentInts.length == 2 ];
}

function getInt(line, index, initialValue) {
  let foundInt = `${ initialValue }`;
  
  for (let i = index + 1; i <= line.length; i++) {
    const parsedChar = parseInt( line[i] );

    if (isNaN(parsedChar)) {
      break;
    }
    
    foundInt = `${foundInt}${parsedChar}`;
  }

  for (let i = index - 1; i >= 0; i--) {
    const parsedChar = parseInt( line[i] );
    
    if (isNaN(parsedChar)) {
      break;
    }

    foundInt = `${parsedChar}${foundInt}`;
  }

  return parseInt( foundInt );
}