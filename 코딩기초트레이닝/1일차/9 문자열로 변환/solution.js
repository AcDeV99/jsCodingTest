// 속도 : 4위
function solution(n) {
  return `${n}`;
}

// 속도 : 3위
function solution(n) {
  return String(n);
}

// 속도 : 2위
function solution(n) {
  return n.toString();
}

// 속도 : 2위
function solution(n) {
  return n + "";
}

// 속도 : 1위
const solution = String;

console.log(solution(123)); // "123"
console.log(solution(2573)); // "2573"
