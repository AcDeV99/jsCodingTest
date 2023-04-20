function solution(N) {
  return N.toString()
    .split('')
    .reduce((acc, cur) => +acc + +cur, 0);
}

//reduce 계산시 초기값 설정 안하면 문자열로 더해질 위험 있음.
console.log(solution(123));
console.log(solution(987));
