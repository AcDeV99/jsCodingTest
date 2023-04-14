function solution(nums) {
  //제한사항
  if (1 > nums.length || nums.length > 10000 || nums.length % 2 != 0) return;
  nums = nums.filter((x) => x >= 1 && x <= 200000);

  let count = nums.length / 2; // 뽑을 수 있는 종류 최대 개수
  nums = nums.filter((element, index) => nums.indexOf(element) === index); // 중복 제거한 종류 개수
  let kinds = Math.min(count, nums.length);

  // 1차원 배열이 아니면 return
  if (kinds == 0) return;
  return kinds;
}

console.log(solution([1, 2, 3, 4, 5, 3, 2, 5, 7, 3, 1, 2, 3, 9]));
console.log(solution([1, 2, 3, 4, 5, 3, 2, 5, 7, 3, 1, 2, 3])); // 홀수 개수
console.log(solution([3, -1, 1, -2, 2, 3, 2000001, 300000])); // 범위 외 값 제외
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
console.log(
  solution([
    [3, 3, 3, 2, 2, 2],
    [3, 3, 2, 1],
  ])
); // 1차원 배열이 아님
