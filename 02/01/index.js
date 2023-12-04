import { input, testInput } from './input.js';
import { coloredCubesLimits } from './models.js';

let totalSum = 0;

for(const inputElement of input) {
  const [gameId, isGameValid] = computeString(inputElement);

  if (isGameValid) {
    totalSum += gameId;
  }

}

console.log(totalSum);

function computeString(element) {
  let [gameTitle, gamesList] = element.split(': ', 2);
  let isGameValid = true;

  let gameId = parseInt(gameTitle.substring(4));
  if (isNaN(gameId)) gameId = 0;

  let draws = gamesList.split('; ');
  let cubes = draws.map((draw) => draw.split(', '));
  cubes = [].concat(...cubes);

  for (const cubeInfo of cubes) {
    const [value, color] = cubeInfo.split(' ');
    const numOfCubes = parseInt(value);

    if (numOfCubes > coloredCubesLimits[color]) {
      isGameValid = false;
      break;
    }
  }

  return [gameId, isGameValid];
}
