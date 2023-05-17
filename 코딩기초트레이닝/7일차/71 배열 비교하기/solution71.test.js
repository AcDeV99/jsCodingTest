function solution(arr1, arr2) {
  const lenArr1 = arr1.length;
  const lenArr2 = arr2.length;

  if (lenArr1 > lenArr2) return 1;
  else if (lenArr1 < lenArr2) return -1;
  else {
    let sumArr1 = arr1.reduce((acc, cur) => acc + cur, 0);
    let sumArr2 = arr2.reduce((acc, cur) => acc + cur, 0);
    if (sumArr1 > sumArr2) return 1;
    else if (sumArr1 < sumArr2) return -1;
    else return 0;
  }
}

describe('배열 비교하기', () => {
  test('compare arr1 and arr2 : -1', () => {
    expect(solution([49, 13], [70, 11, 2])).toBe(-1);
  });
  test('compare arr1 and arr2 : 1', () => {
    expect(solution([100, 17, 84, 1], [55, 12, 65, 36])).toBe(1);
  });
  test('compare arr1 and arr2 : 0', () => {
    expect(solution([1, 2, 3, 4, 5], [3, 3, 3, 3, 3])).toBe(0);
  });
});
