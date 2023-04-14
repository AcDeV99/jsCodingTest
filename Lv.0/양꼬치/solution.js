function solution(n, k) {
  if (0 < n && n < 1000 && ~~(n / 10) <= k && k < 1000) {
    k -= ~~(n / 10);
    if (k < 0) k = 0;
    return 12000 * n + 2000 * k;
  }
}

console.log(solution(10, 3));
console.log(solution(64, 6));
