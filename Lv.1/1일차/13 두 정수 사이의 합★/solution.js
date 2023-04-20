// function solution(a, b) {
//   if (a === b) return a;
//   let answer = 0;
//   if (a > b) {
//     for (let i = b; a >= i; i++) {
//       answer += i;
//     }
//   } else {
//     for (let i = a; i <= b; i++) {
//       answer += i;
//     }
//   }
//   return answer;
// }

// 가우스 덧셈
// 처음 숫자와 마지막 숫자를 더한 합 = (a + b)
// 더할 숫자의 개수 총합의 1/2 = (Math.abs(a - b) + 1) / 2
function solution(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
