// function solution(arr, idx) {
//   const lenArr = arr.length;
//   for (let i = idx; i < lenArr; i++) {
//     if (arr[i] === 1) return i;
//   }
//   return -1;
// }

const solution = (a, i) => a.indexOf(1, i);

describe('가까운 1 찾기', () => {
  test('[0, 0, 0, 1], 1 => 3', () => {
    expect(solution([0, 0, 0, 1], 1)).toBe(3);
  });
  test('[1, 0, 0, 1, 0, 0], 4 => -1', () => {
    expect(solution([1, 0, 0, 1, 0, 0], 4)).toBe(-1);
  });
  test('[1, 1, 1, 1, 0], 3 => 3', () => {
    expect(solution([1, 1, 1, 1, 0], 3)).toBe(3);
  });
});
