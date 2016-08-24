
var g = require('../src/gol');

const main = () => {
  process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);

    g.evolution([
          [true, false, true, false, false, false],
          [false, true, true, false, false, false],
          [false, true, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
          [false, false, false, false, false, false],
    ], true);

  });
};

if (require.main === module) {
  main();
}
