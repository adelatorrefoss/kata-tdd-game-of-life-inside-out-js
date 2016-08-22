// Game of Life

// production code
function gol(seed) {
  return [[0,0,0],[0,0,0],[0,0,0]];
}

// tests

describe("A dead seed", function() {
  // beforeEach(function() { });
  // afterEach(function() { });

  it('returns a dead grid as well', function() {
    const emptyGrid =[[0,0,0],[0,0,0],[0,0,0]];
    const seed = [[0,0,0],[0,0,0],[0,0,0]];
    const next = gol(seed);

    expect(next).to.be.deep.equal(emptyGrid);
  });
});
