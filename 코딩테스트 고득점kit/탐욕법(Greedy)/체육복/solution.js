function solution(n, lost, reserve) {
  const all = {};
  let result = 0;

  for (let i = 1; i <= n; i++) {
    all[i] = 0;
  }
  for (let i = 0; i < lost.length; i++) {
    all[lost[i]]--;
  }
  for (let i = 0; i < reserve.length; i++) {
    all[reserve[i]]++;
  }
  for (let i = 1; i <= n; i++) {
    if (all[i] + all[i + 1] === 0) {
      all[i] = 0;
      all[i + 1] = 0;
    }
  }
  for (let i = 1; i <= n; i++) {
    if (all[i] >= 0) result++;
  }
  return result;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
console.log(solution(6, [1, 3, 5], [2, 3, 5])); // 6

// n : 전체 학생 수
// lost : 도난당한 학생 번호
// reserve : 여벌의 체육복이 있는 학생 번호
