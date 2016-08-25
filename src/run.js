// Game Of Life Runner
//
// Example:
// $ node src/run.js "[[true, true, true],[false,true, true],[false,true,true]]" true


var g = require('../src/gol');

const main = () => {
  const seed = JSON.parse(process.argv[2]);
  const print = process.argv[3];

  g.evolution(seed, print);
};

if (require.main === module) {
  main();
}
