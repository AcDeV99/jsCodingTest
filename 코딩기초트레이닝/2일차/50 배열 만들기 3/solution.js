// intervals는 항상 [[a1, b1], [a2, b2]]의 꼴로 주어지며 각 구간은 닫힌 구간입니다.
// 닫힌 구간은 양 끝값과 그 사이의 값을 모두 포함하는 구간을 의미합니다.
function solution(arr, intervals) {
  return [
    ...arr.slice(intervals[0][0], intervals[0][1] + 1),
    ...arr.slice(intervals[1][0], intervals[1][1] + 1),
  ];
}

// 조금 더 빠름
function solution(arr, intervals) {
  const [[a1, b1], [a2, b2]] = intervals;
  return [...arr.slice(a1, b1 + 1), ...arr.slice(a2, b2 + 1)];
}

console.log(
  solution(
    [1, 2, 3, 4, 5],
    [
      [1, 3],
      [0, 4],
    ]
  )
); // [2, 3, 4, 1, 2, 3, 4, 5]
