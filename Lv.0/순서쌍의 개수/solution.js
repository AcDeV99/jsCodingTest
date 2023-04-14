function solution(n) {
  let count = 0;
  if (1 <= n && n <= 1000000) {
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) count++;
    }
    return count;
  }
}

console.log(solution(20));
console.log(solution(100));
