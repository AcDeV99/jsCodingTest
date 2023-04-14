// function solution(n) {
//   if (n < 1 || n > 10) return;
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = -1; j < i; j++) {
//       result += "*";
//     }
//     result += "\n";
//   }
//   return result;
// }

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const num = Number(input[0]);
  let logStr = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      logStr += "*";
    }
    logStr += "\n";
  }
  console.log(logStr);
});

//역순 재귀함수
// function solution(n) {
//   let i = 0;
//   let result = "";
//   while (i < n) {
//     result += "*";
//     i++;
//   }
//   result += "\n";
//   if (n === 0) return result;
//   return result + solution(n - 1);
// }

console.log(solution(3));
console.log(solution(10));
