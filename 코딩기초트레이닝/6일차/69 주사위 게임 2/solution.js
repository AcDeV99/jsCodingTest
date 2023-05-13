// https://school.programmers.co.kr/learn/courses/30/lessons/181930
function solution(a, b, c) {
  const nums = {
    num1: a ** 1 + b ** 1 + c ** 1,
    num2: a ** 2 + b ** 2 + c ** 2,
    num3: a ** 3 + b ** 3 + c ** 3,
  };
  if (a !== b && a !== c && b !== c) return nums.num1;
  else if (a === b && a === c) return nums.num1 * nums.num2 * nums.num3;
  else return nums.num1 * nums.num2;
}

console.log(solution(2, 6, 1)); // 9
console.log(solution(5, 3, 3)); // 473
console.log(solution(4, 4, 4)); // 110592
