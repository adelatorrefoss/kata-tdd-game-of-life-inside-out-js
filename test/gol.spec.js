// Game of Life

chai.config.truncateThreshold = 0;


const emptyGrid = [[false, false, false],
                   [false, false, false],
                   [false, false, false]];

// production code

function countAlive(neighbours) {
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
  for (let m = -1; m === 1; m++) {
    for (let n = -1; n === 1; n++) {
      if (isValidPosition(i + m, j + n)) {
        neighbours.push(grid[i + m][j + n]);
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
      const nextX = lives(x, countAlive(neighbours));
      nextRow.push(nextX);
    }

    next.push(nextRow);
  }
  return next;
}

// tests

describe('Given a single cell that is', () => {
  describe('A live cell', () => {
    // beforeEach(function() { });
    // afterEach(function() { });

    // 1. Any live cell with fewer than two live neighbours dies, as if caused
    //  by under-population.
    it('should die by under population', () => {
      const iAmAlive = true;
      const neighbours = 0;

      const nextIAmAlive = lives(iAmAlive, neighbours);

      expect(nextIAmAlive).to.be.false;
    });


    // 2. Any live cell with two or three live neighbours lives on to the next
    //   generation.
    it('should lives when just the number of neighbours', () => {
      const iAmAlive = true;
      const numNeighbours = 2;

      const nextIAmAlive = lives(iAmAlive, numNeighbours);

      expect(nextIAmAlive).to.be.true;
    });


    it('should lives when just the maximum number of neighbours', () => {
      const iAmAlive = true;
      const numNeighbours = 3;

      const nextIAmAlive = lives(iAmAlive, numNeighbours);

      expect(nextIAmAlive).to.be.true;
    });

    // 3. Any live cell with more than three live neighbours
    //  dies, as if by over-population.
    it('should lives when just the number of neighbours', () => {
      const iAmAlive = true;
      const numNeighbours = 4;

      const nextIAmAlive = lives(iAmAlive, numNeighbours);

      expect(nextIAmAlive).to.be.false;
    });
  });

  describe('A dead cell', () => {
    // 4. Any dead cell with exactly three live neighbours
    //   becomes a live cell, as if by reproduction.
    it('should lives by reproduction when exact neighbours', () => {
      const iAmAlive = false;
      const numNeighbours = 3;

      const nextIAmAlive = lives(iAmAlive, numNeighbours);

      expect(nextIAmAlive).to.be.true;
    });

    it('should remains dead by reproduction when less than exact neighbours',
       () => {
         const iAmAlive = false;
         const numNeighbours = 2;

         const nextIAmAlive = lives(iAmAlive, numNeighbours);

         expect(nextIAmAlive).to.be.false;
       });

    it('should remains dead by reproduction when more than exact neighbours',
       () => {
         const iAmAlive = false;
         const numNeighbours = 4;

         const nextIAmAlive = lives(iAmAlive, numNeighbours);

         expect(nextIAmAlive).to.be.false;
       });
  });
});


describe('Given a grid that is', () => {
  // describe('a grid all dead', () => {
  //   it('returns a dead grid as well', () => {
  //     const seed = emptyGrid;
  //     const next = nextGol(seed);

  //     expect(next).to.be.deep.equal(emptyGrid);
  //   });
  // });

  // describe('a single live cell', () => {
  //   it('should die', () => {
  //     const seed = [[false, false, false],
  //                   [false, true, false],
  //                   [false, false, false]];
  //     const next = nextGol(seed);

  //     expect(next).to.be.deep.equal(emptyGrid);
  //   });
  // });

  // // TODO: 2 cells not neighbours

  // describe('a minimal live config', () => {
  //   it('should lives ', () => {
  //     const seed = [[false, false, false],
  //                   [true, true, true],
  //                   [false, false, false]];
  //     const next = nextGol(seed);

  //     expect(next).to.be.deep.equal([[false, false, false],
  //                                    [false, true, false],
  //                                    [false, false, false]]);
  //   });
  // });

  describe('a neighbourhood with single cell', () => {
    it('returns all neighbours are false', () => {
      const seed = [[false, false, false],
                    [true, true, true],
                    [false, false, false]];
      const neighbours = getNeighbours(1, 1, seed);

      expect(neighbours).to.be.deep.equal([false, false, false,
                                     false, false,
                                     false, false, false]);
    });
  });
});
