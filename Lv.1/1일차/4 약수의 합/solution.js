function solution(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
  return result.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(12));
console.log(solution(5));
