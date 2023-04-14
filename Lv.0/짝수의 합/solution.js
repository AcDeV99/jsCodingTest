function solution(n) {
  if (n <= 0 || n > 1000) return 0;
  n = ~~n;
  let result = 0;
  for (let i = 0; i <= n; i += 2) {
    result += i;
  }
  return result;
}

console.log(solution(10.6));
console.log(solution(4));
console.log(solution(-1));
console.log(solution(1));
console.log(solution(0));
console.log(solution(1000));
console.log(solution(1001));
