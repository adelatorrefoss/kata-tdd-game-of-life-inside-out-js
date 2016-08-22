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

  it('should die by under population', function() {
    const iAmAlive = true
    const neighbours =[0,0,0, 0, 0, 0,0,0];

    const nextIAmAlive = lives(iAmAlive, neighbours);

    expect(nextIAmAlive).to.be.false;
  });
})
