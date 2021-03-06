const task = require("./task");
const { timing, sec, sum } = require("../utils");

let times = [];

const appTime = timing(() => {
  times = ["red", "green", "yellow", "blue"].map(task);
});

console.log(`\nsum time: ${sec(sum(times))}`);
console.log(`\napp time: ${sec(appTime)}`);
