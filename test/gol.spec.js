// Game of Life

const emptyGrid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

// production code
function gol(seed) {
  return emptyGrid;
}

function isAlive(x) {
  return x === 1;
}

// function countAlive(neighbours) {
//   return neighbours.filter(isAlive).length;
// }

function lives(iAmAlive, numAlive) {
  let cellLives = false;

  if (iAmAlive) {
    if (numAlive >= 2 && numAlive <= 3) {
      cellLives = true;
    }
  } else {
    if (numAlive === 3) {
      cellLives = true;
    }
  }

  return cellLives;
}

// tests

describe('A dead seed', () => {
  // beforeEach(function() { });
  // afterEach(function() { });

  it('returns a dead grid as well', () => {
    const seed = emptyGrid;
    const next = gol(seed);

    expect(next).to.be.deep.equal(emptyGrid);
  });
});


// TODO: no RED

// describe("A single live cell", function() {
//   // beforeEach(function() { });
//   // afterEach(function() { });

//   it('should die', function() {
//     const seed =[[0,0,0],[0,1,0],[0,0,0]];
//     const next = gol(seed);

//     expect(next).to.be.deep.equal(emptyGrid);
//   });
// })

describe('A live cell', () => {
  // beforeEach(function() { });
  // afterEach(function() { });

  // 1. Any live cell with fewer than two live neighbours dies, as if caused
  //  by under-population.
  it('should die by under population', () => {
    const iAmAlive = true;
    const neighbours = 0;

    const nextIAmAlive = lives(iAmAlive, neighbours);

    expect(nextIAmAlive).to.be.false();
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
  // beforeEach(function() { });
  // afterEach(function() { });

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
});
