// 등차수열의 합
// total/num => 수열의 평균값
// num/2 => 수열의 마지막에서 중앙까지의 등차 계산
// ceil와 floor를 활용 수 있는 이유는 등차가 1이기때문이다.
function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2));

  return new Array(num).fill(0).map((el, i) => {
    return i + min;
  });
}

console.log(solution(3, 12));
console.log(solution(5, 15));
console.log(solution(4, 14));
console.log(solution(5, 5));
