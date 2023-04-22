function solution(start, end) {
  return Array(start - end + 1)
    .fill(start)
    .map((ele, i) => ele - i);
}

console.log(solution(10, 3)); // [10, 9, 8, 7, 6, 5, 4, 3]
