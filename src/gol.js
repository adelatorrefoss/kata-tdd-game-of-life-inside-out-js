// production code
'use strict';

// const R = require('../node_modules/ramda/dist/ramda');

const emptyGrid = [[false, false, false],
                   [false, false, false],
                   [false, false, false]];

// production code

function _countAlive(neighbours) {
  return neighbours.filter(x => x).length;
}

function lives(iAmAlive, numAlive) {
  let cellLives = false;

  if (iAmAlive) {
    if (numAlive >= 2 && numAlive <= 3) {
      cellLives = true;
    }
  } else if (numAlive === 3) {
    cellLives = true;
  }

  return cellLives;
}

function getNeighbours(i, j, grid) {
  const numRows = grid.length;
  const numCols = grid[0].length;

  const isValidPosition = (x, y) => {
    if (x >= 0 && x < numRows && y >= 0 && y < numCols) {
      return true;
    }
    return false;
  };

  const neighbours = [];
  for (let m = -1; m <= 1; m++) {
    for (let n = -1; n <= 1; n++) {
      if (isValidPosition(i + m, j + n)) {
        if (!(m === 0 && n === 0)) {
          neighbours.push(grid[i + m][j + n]);
        }
      }
    }
  }
  return neighbours;
}

function nextGol(seed) {
  const next = [];

  for (let i = 0; i < seed.length; i++) {
    const nextRow = [];

    for (let j = 0; j < seed[i].length; j++) {
      const x = seed[i][j];
      const neighbours = getNeighbours(i, j, seed);
      const nextX = lives(x, _countAlive(neighbours));
      nextRow.push(nextX);
    }

    next.push(nextRow);
  }
  return next;
}

function printGrid(grid, iteration) {
  console.log(`>> it ${iteration}`);
  grid.forEach((x) => {
    console.log(x);
  });
}

function evolution(seed, iterations = 10, print = false) {
  let i = 0;
  let next = seed;
  if (print) printGrid(next, 'SEED');
  while (!R.equals(next, emptyGrid) && i < iterations) {
    next = nextGol(next);
    i++;
    if (print) printGrid(next, i);
  }

  return [next, i];
}
