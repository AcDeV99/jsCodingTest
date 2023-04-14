function solution(age) {
  if (age > 0 && age <= 120) {
    return 2022 - age + 1;
  }
}

console.log(solution(40));
console.log(solution(23));

// new Date().getFullYear() : 현지 연도 반환
