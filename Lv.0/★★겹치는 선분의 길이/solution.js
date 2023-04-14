// 문제 접근
// ① lines 배열의 내부 배열의 시작값과 끝값을 포함한 배열을 3개 생성한다.
// ② 생성한 배열들의 겹치는 값을 배열로 뺀다.
// ③ 그 길이의 합을 구한다.

// 겹치는 배열값 개수 구하는 방법
// function solution(lines) {
//   let line = new Array(200).fill(0);

//   lines.forEach(([a, b]) => {
//     for (; a < b; a++) line[a + 100]++;
//   });

//   return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
// }

// flat() : 증첩 배열 평탄화, 배열 구멍 제거
function solution(lines) {
  let min = Math.min(...lines.flat());
  let max = Math.max(...lines.flat());
  let arr = Array(max - min + 1).fill(0);
  console.log("min : " + min);
  console.log("max : " + max);
  console.log("arr : " + arr);

  // min 값을 더해서 음수를 아예 없앰.
  for (let line of lines) {
    if (min < 0) {
      line[0] += Math.abs(min);
      line[1] += Math.abs(min);
    }
    console.log(line);
    // for문으로 겹치는 범위에 1을 더함
    for (let i = line[0]; i < line[1]; i++) arr[i]++;
    console.log("arr : " + arr);
  }

  return arr.filter((v) => v > 1).length;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
);
console.log(
  solution([
    [-1, 1],
    [1, 3],
    [3, 9],
  ])
);
console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
);
console.log(
  solution([
    [0, 2],
    [-3, -1],
    [-2, 1],
  ])
);
