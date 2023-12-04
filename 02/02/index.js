import { input, testInput } from './input.js';
import { coloredCubesLimits } from './models.js';

let totalSum = 0;

for(const inputElement of input) {
  const multipliedMinimumSet = computeString(inputElement);

  totalSum += multipliedMinimumSet;
}

console.log(totalSum);

function computeString(element) {
  let [gameTitle, gamesList] = element.split(': ', 2);
  let cubesState = {
    'red': 0,
    'green': 0,
    'blue': 0,
  };

  let draws = gamesList.split('; ');
  let cubes = draws.map((draw) => draw.split(', '));
  cubes = [].concat(...cubes);

  for (const cubeInfo of cubes) {
    const [value, color] = cubeInfo.split(' ');
    const numOfCubes = parseInt(value);

    if (cubesState[color] == 0 || numOfCubes > cubesState[color]) {
      cubesState[color] = numOfCubes;
    }
  }

  return Object.values(cubesState).reduce((multipliedValue, value) => multipliedValue * value, 1);
}
