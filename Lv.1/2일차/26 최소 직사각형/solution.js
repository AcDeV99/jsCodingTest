// 완전 탐색 문제
function solution(sizes) {
  const w = [];
  const h = [];

  sizes.forEach((size) => {
    w.push(size[0]);
    h.push(size[1]);
  });

  for (let i = 0, len = w.length; i < len; i++) {
    if (w[i] < h[i]) {
      h.push(...w.splice(i, 1));
      w.push(...h.splice(i, 1));
    }
  }
  console.log(w);
  console.log(h);
  return Math.max(...w) * Math.max(...h);
}

// w, h 두 배열에서 가장 큰 값이 있는 쪽을 기준으로 가장 큰값보다 작은 반대 배열에 있는 Max값은
// 기존 배열의 배열값과 교환됨 그때 교환된 쪽이 Max값이 기준 배열의 Min값보다 작다면 가장 큰값끼리 곱함

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); // 120
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
); // 133
console.log(
  solution([
    [20, 10],
    [12, 18],
  ])
); // 240

console.log(
  solution([
    [91, 50],
    [77, 51],
    [50, 1],
    [50, 50],
  ])
); // 4641
console.log(
  solution([
    [3, 4],
    [2, 1],
  ])
); // 4641
