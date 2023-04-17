// // 정렬된 상태에서 기존의 평균 값 위치를 찾아서 + 1함.
// // 어차피 위치는 값에 따른 처음 것으로 찾아지기 때문에
// // 같은 값이 있어도 공동 등수가 매겨짐
// function solution(score) {
//   let avg = score.map((v) => (v[0] + v[1]) / 2);
//   let sorted = avg.slice().sort((a, b) => b - a);
//   return avg.map((v) => sorted.indexOf(v) + 1);
// }

// 본인보다 점수 높은 사람 + 1을 등수로 함.
function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);
console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);
