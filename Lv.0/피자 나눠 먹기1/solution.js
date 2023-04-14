function solution(n) {
  if (1 <= n && n <= 100) {
    return Math.ceil(n / 7);
  }
}

console.log(solution(7));
console.log(solution(1));
console.log(solution(15));
