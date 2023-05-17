function solution(arr, delete_list) {
  return arr.filter((ele) => !delete_list.includes(ele));
}

describe('배열의 원소 삭제하기', () => {
  test('compare arr and delete_list : [293, 395, 678]', () => {
    expect(
      solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12])
    ).toStrictEqual([293, 395, 678]);
  });
  test('compare arr and delete_list : [110, 66, 439, 785, 1]', () => {
    expect(solution([110, 66, 439, 785, 1], [377, 823, 119, 43])).toStrictEqual(
      [110, 66, 439, 785, 1]
    );
  });
});
