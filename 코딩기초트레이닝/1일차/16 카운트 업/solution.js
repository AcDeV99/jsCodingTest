function solution(start, end) {
  return Array(end - start + 1)
    .fill(start)
    .map((ele, i) => ele + i);
}

console.log(solution(3, 10)); // [3, 4, 5, 6, 7, 8, 9, 10]
