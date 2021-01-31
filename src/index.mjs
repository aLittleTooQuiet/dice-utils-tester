import diceUtils from 'dice-utils';

const {
  parseDieNotation,
  rollDie,
  roll,
} = diceUtils;

const iterations = process.argv[3] || 10000;
const dieString = process.argv[2];

const rolls = {};
let r;

for (let i = 0; i < iterations; i++) {
  r = roll(dieString);
  if (!rolls[r.total]) {
    rolls[r.total] = 1;
    continue;
  }
  rolls[r.total] += 1;
}

console.log(JSON.stringify(rolls))
