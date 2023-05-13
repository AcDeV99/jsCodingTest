//school.programmers.co.kr/learn/courses/30/lessons/181919
// 콜라츠 문제 : 모든 자연수 x에 대해서 현재 값이 x이면
// x가 짝수일 때는 2로 나누고, x가 홀수일 때는 3 * x + 1로 바꾸는
// 계산을 계속해서 반복하면 언젠가는 반드시 x가 1이 되는지
// 묻는 문제
// 콜라츠 수열 : 위 과정에서 거쳐간 모든 수를 기록한 수열
https: function solution(n) {
  const result = [n];
  while (n != 1) {
    n % 2 ? (n = 3 * n + 1) : (n /= 2);
    result.push(n);
  }
  return result;
}

console.log(solution(10)); // [10, 5, 16, 8, 4, 2, 1]
