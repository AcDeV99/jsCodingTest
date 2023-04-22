function solution(n, k) {
  return Array(~~(n / k))
    .fill(k)
    .map((num, i) => num * (i + 1));
}

console.log(solution(10, 3)); // [3, 6, 9]
console.log(solution(15, 5)); // [5, 10, 15]
console.log(solution(21, 6));
