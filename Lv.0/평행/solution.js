// 두 점을 지나는 직선의 방정식
// m = y₂ - y₁ / x₂ - x₁
// m은 기울기로, 기울기가 같은 직선은 평행하다.

function solution(dots) {
  // 제한 사항
  if (dots.length !== 4) return 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 2; j++) {
      if (typeof dots[i][j] !== "number" || dots[i][j] < 0 || dots[i][j] > 100)
        return 0;
    }
  }

  if (
    (dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0]) ===
    (dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0])
  )
    return 1;
  if (
    (dots[0][1] - dots[2][1]) / (dots[0][0] - dots[2][0]) ===
    (dots[1][1] - dots[3][1]) / (dots[1][0] - dots[3][0])
  )
    return 1;
  if (
    (dots[0][1] - dots[3][1]) / (dots[0][0] - dots[3][0]) ===
    (dots[2][1] - dots[1][1]) / (dots[2][0] - dots[1][0])
  )
    return 1;
  return 0;
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
);
console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
);

// function solution(dots) {
//   // 제한 사항
//   if (dots.length !== 4) return 0;
//   for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 2; j++) {
//       if (typeof dots[i][j] !== "number" || dots[i][j] < 0 || dots[i][j] > 100)
//         return 0;
//     }
//   }

//   // 풀이
//   let answer = [];
//   for (let n = 0; n < Math.floor(dots.length / 2); n++) {
//     answer.push(
//       (dots[2 * n + 1][1] - dots[2 * n][1]) /
//         (dots[2 * n + 1][0] - dots[2 * n][0])
//     );
//   }

//   for (let i = 0; i < answer.length; i++) {
//     if (answer[0] !== answer[i]) return 0;
//   }
//   return 1;
// }

// console.log(
//   solution([
//     [1, 4],
//     [9, 2],
//     [3, 8],
//     [11, 6],
//   ])
// );

// console.log(
//   solution([
//     [3, 5],
//     [4, 1],
//     [2, 4],
//     [5, 10],
//   ])
// );

// if (dots.length !== 4) return 0;
// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 2; j++) {
//     if (typeof dots[i][j] !== "number" || dots[i][j] < 0 || dots[i][j] > 100)
//       return 0;
//   }
// }
// let m1 = (dots[1][1] - dots[0][1]) / (dots[1][0] - dots[0][0]);
// let m2 = (dots[3][1] - dots[2][1]) / (dots[3][0] - dots[2][0]);
// if (m2 === m1) return 1;
// else return 0;
