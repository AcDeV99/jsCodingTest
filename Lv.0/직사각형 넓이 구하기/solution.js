// function solution(dots) {
//   let sums = dots.map((dot) => {
//     return dot.reduce((acc, cur) => acc + cur);
//   });
//   let [sumMin, sumMax] = [Math.min(...sums), Math.max(...sums)];
//   let [min, max] = [dots[sums.indexOf(sumMin)], dots[sums.indexOf(sumMax)]];
//   return (max[0] - min[0]) * (max[1] - min[1]);
// }
function solution(dots) {
  let x = [],
    y = [];

  for (let pos of dots) {
    x.push(pos[0]);
    y.push(pos[1]);
  }

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}
console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);
