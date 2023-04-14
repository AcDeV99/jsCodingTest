function solution(num1, num2) {
  if (num1 > 0 && num1 <= 100 && num2 > 0 && num2 <= 100)
    return parseInt(num1 / num2);
}

console.log(solution(10, 2));
console.log(solution(7, 2));
console.log(solution(7.3, 2));
console.log(solution(-12, 2));
