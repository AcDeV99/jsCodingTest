function solution(arr) {
  const lenArr = arr.length;
  for (let i = 0; i < lenArr; i++) {
    for (let j = 0; j < lenArr; j++) {
      if (arr[i][j] !== arr[j][i]) return 0;
    }
  }
  return 1;
}

// function* range(start, end) {
//   let value = end === undefined ? 0 : start;
//   const endValue = end === undefined ? start : end;
//   while (value < endValue) {
//     yield value++;
//   }
// }

// function solution(arr) {
//   const n = arr.length;
//   for (const i of range(n)) {
//     for (const j of range(i)) {
//       if (arr[i][j] !== arr[j][i]) {
//         return 0;
//       }
//     }
//   }
//   return 1;
// }

describe('특별한 이차원 배열 2', () => {
  test('[[5, 192, 33], [192, 72, 95], [33, 95, 999]] => 1', () => {
    expect(
      solution([
        [5, 192, 33],
        [192, 72, 95],
        [33, 95, 999],
      ])
    ).toBe(1);
  });
  test('[[19, 498, 258, 587], [63, 93, 7, 754], [258, 7, 1000, 723], [587, 754, 723, 81]] => 0', () => {
    expect(
      solution([
        [19, 498, 258, 587],
        [63, 93, 7, 754],
        [258, 7, 1000, 723],
        [587, 754, 723, 81],
      ])
    ).toBe(0);
  });
});
