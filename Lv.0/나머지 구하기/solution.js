function solution(num1, num2) {
  if (num1 > 0 && num1 <= 100 && num2 > 0 && num2 <= 100) {
    return num1 % num2;
  }
}

console.log(solution(3, 2));
console.log(solution(10, 5));
