const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  for (let i = 1; i <= +input[0]; i += 1) console.log("*".repeat(i));
});

console.log(solution(3));
// *
// **
// ***

// on() 메서드를 활용하여 이벤트와 콜백함수를 전달.
// 'line' 입력 받은 값을 한 줄씩 읽어 문자열 타입으로 전달하는 역할을 하는 이벤트.
// rl.close() 인터페이스를 종료. 무한히 입력 받는 것을 방지합니다.
// 그 후, 다시 이벤트로 close를 작성하여 입력이 끝난 후 실행되어야 할 함수를 작성합니다.
