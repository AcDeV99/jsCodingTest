// https://school.programmers.co.kr/learn/courses/30/lessons/181865
function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  switch (op) {
    case "+":
      return Number(a) + Number(b);
    case "-":
      return a - b;
    case "*":
      return a * b;
    default:
      break;
  }
}

console.log(solution("43 + 12")); // 55
console.log(solution("0 - 7777")); // -7777
console.log(solution("40000 * 40000")); // 1600000000
