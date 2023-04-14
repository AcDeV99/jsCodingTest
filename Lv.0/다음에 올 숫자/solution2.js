const solution = (c) =>
  c[1] - c[0] === c[2] - c[1]
    ? c[c.length - 1] + (c[1] - c[0])
    : c[c.length - 1] * (c[1] / c[0]);

console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
