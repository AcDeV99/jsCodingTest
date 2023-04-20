// function solution(num) {
//   return num % 2 === 0 ? 'Even' : 'Odd';
// }

// 0이외의 값은 true고 0이면 false인 것을 이용
function solution(num) {
  return num % 2 ? 'Odd' : 'Even';
}

console.log(solution(3));
console.log(solution(4));
