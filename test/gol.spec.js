// Game of Life

var emptyGrid =[[0,0,0],[0,0,0],[0,0,0]];

// production code
function gol(seed) {
  return emptyGrid;
}

function lives(iAmAlive, neighbours) {
  return false;
}

// tests

describe("A dead seed", function() {
  // beforeEach(function() { });
  // afterEach(function() { });

  it('returns a dead grid as well', function() {
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



describe("A live cell", function() {
  // beforeEach(function() { });
  // afterEach(function() { });

  // 1. Any live cell with fewer than two live neighbours dies, as if caused
  //  by under-population.
  it('should die by under population', function() {
    const iAmAlive = true
    const neighbours =[0,0,0, 0, 0, 0,0,0];

    const nextIAmAlive = lives(iAmAlive, neighbours);

    expect(nextIAmAlive).to.be.false;
  });


  // 2. Any live cell with two or three live neighbours lives on to the next
  //   generation.
  it('should lives when just the number of neighbours', function() {
    const iAmAlive = true
    const neighbours =[1,1,0, 0, 0, 0,0,0];

    const nextIAmAlive = lives(iAmAlive, neighbours);

    expect(nextIAmAlive).to.be.true;
  });
})
