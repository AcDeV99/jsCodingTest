function solution(myString) {
  return myString.split('x').map((v) => v.length);
}

describe('x 사이의 개수', () => {
  test('"oxooxoxxox" => [1, 2, 1, 0, 1, 0]', () => {
    expect(solution('oxooxoxxox')).toStrictEqual([1, 2, 1, 0, 1, 0]);
  });
  test('"xabcxdefxghi" => [0, 3, 3, 3]', () => {
    expect(solution('xabcxdefxghi')).toStrictEqual([0, 3, 3, 3]);
  });
});
