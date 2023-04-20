// function solution(s) {
//   return s.split('-').length === 2 ? +s.split('-')[1] * -1 : +s;
// }

// +기호가 단순 숫자만 되는 것이 아니라 +,- 등 기호에도 적용됨
function solution(s) {
  return +s;
}

console.log(solution('1234'));
console.log(solution('-1234'));
