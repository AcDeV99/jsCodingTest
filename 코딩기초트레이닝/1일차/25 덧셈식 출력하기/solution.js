const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  console.log(`${input[0]} + ${input[1]} = ${+input[0] + +input[1]}`);
});

solution(4, 5); // 4 + 5 = 9
