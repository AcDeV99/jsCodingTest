function solution(num1, num2) {
  if (num1 >= 0 && num1 <= 10000 && num2 >= 0 && num2 <= 10000) {
    return num1 === num2 ? 1 : -1;
  }
}

console.log(solution(2, 3));
console.log(solution(11, 11));
console.log(solution(7, 99));
