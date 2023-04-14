function solution(n, numlist) {
  if (n < 1 || n > 1e4) return;
  if (numlist.length < 1 || numlist.length > 100) return;
  return numlist.filter((ele) => ele >= 1 && ele <= 1e5 && ele % n === 0);
}

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));
console.log(solution(5, [1, 9, 3, 10, 13, 5]));

console.log(solution(12, [2, 100, 120, 600, 12, 12]));
