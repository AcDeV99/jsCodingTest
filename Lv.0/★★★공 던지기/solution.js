function solution(numbers, k) {
  return numbers[(--k * 2) % numbers.length];
}
// k-1 후 2를 곱한 만큼 움직임,
// 움직이는 거리가 배열의 길이를 초과한 경우를 위해
// 배열길이로 모듈러연산
console.log(solution([1, 2, 3, 4], 2)); // 3
console.log(solution([1, 2, 3, 4, 5, 6], 5)); // 3
console.log(solution([1, 2, 3], 3)); // 2
