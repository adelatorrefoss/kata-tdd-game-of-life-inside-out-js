// Game of Life

chai.config.truncateThreshold = 0;

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
  describe('a neighbourhood with single cell in the middle', () => {
    it('returns all neighbours are false', () => {
      const seed = [[false, false, false],
                    [false, true, false],
                    [false, false, false]];
      const neighbours = getNeighbours(1, 1, seed);

      expect(neighbours).to.be.deep.equal([false, false, false,
                                           false, false,
                                           false, false, false]);
    });
  });

  describe('a neighbourhood with a cell in the middle and some sorrounding', () => {
    it('returns neighbours', () => {
      const seed = [[true, false, true],
                    [true, true, true],
                    [true, false, true]];
      const neighbours = getNeighbours(1, 1, seed);

      expect(neighbours).to.be.deep.equal([true, false, true,
                                           true, true,
                                           true, false, true]);
    });
  });

  describe('a neighbourhood with a cell in the upper left corner and some sorrounding', () => {
    it('returns neighbours', () => {
      const seed = [[true, true, true],
                    [true, true, true],
                    [true, false, true]];
      const neighbours = getNeighbours(0, 0, seed);

      expect(neighbours).to.be.deep.equal([true, true, true]);
    });
  });


  describe('a grid all dead', () => {
    it('returns a dead grid as well', () => {
      const seed = emptyGrid;
      const next = nextGol(seed);

      expect(next).to.be.deep.equal(emptyGrid);
    });
  });

  describe('a single live cell', () => {
    it('should die', () => {
      const seed = [[false, false, false],
                    [false, true, false],
                    [false, false, false]];
      const next = nextGol(seed);

      expect(next).to.be.deep.equal(emptyGrid);
    });
  });

  describe('two cells', () => {
    it('should dead ', () => {
      const seed = [[false, false, false],
                    [true, true, false],
                    [false, false, false]];
      const next = nextGol(seed);

      expect(next).to.be.deep.equal([[false, false, false],
                                     [false, false, false],
                                     [false, false, false]]);
    });
  });

  describe('a minimal live config', () => {
    it('should lives ', () => {
      const seed = [[false, false, false],
                    [true, true, true],
                    [false, false, false]];
      const next = nextGol(seed);

      expect(next).to.be.deep.equal([[false, true, false],
                                     [false, true, false],
                                     [false, true, false]]);
    });
  });

  describe('a full grid', () => {
    it('should evolve accordly', () => {
      const seed = [[true, true, true],
                    [true, true, true],
                    [true, true, true]];
      const next = nextGol(seed);

      expect(next).to.be.deep.equal([[true, false, true],
                                     [false, false, false],
                                     [true, false, true]]);
    });
  });

  describe('a square', () => {
    it('should be stable', () => {
      const seed = [[true, true, false],
                    [true, true, false],
                    [false, false, false]];
      const next = nextGol(seed);

      expect(next).to.be.deep.equal([[true, true, false],
                                     [true, true, false],
                                     [false, false, false]]);
    });
  });
});

// describe('A evolution with', () => {
//   describe('a minimal live seed ', () => {
//     it('should evolve accordly', () => {
//       const seed = [[false, false, false],
//                     [true, true, true],
//                     [false, false, false]];
//       const next = nextGol(seed);

//       expect(next).to.be.deep.equal([[false, true, false],
//                                      [false, true, false],
//                                      [false, true, false]]);

//       expect(next).to.be.deep.equal([[false, false, false],
//                                      [false, false, false],
//                                      [false, false, false]]);
//     });
//   });
// });
