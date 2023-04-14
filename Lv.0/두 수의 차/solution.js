function solution(num1, num2) {
  if (num1 < -50000 || num1 > 50000) return;
  if (num2 < -50000 || num2 > 50000) return;

  return num1 - num2;
}

console.log(solution(2, 3));
console.log(solution(100, 2));
console.log(solution(50001, 1));
console.log(solution(-100000, 2000000));
