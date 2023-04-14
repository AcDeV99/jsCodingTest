function solution(num1, num2) {
  if (num1 > 0 && num1 <= 100 && num2 > 0 && num2 <= 100) {
    return parseInt((num1 / num2) * 1000);
  }
  return;
}

console.log(solution(3, 2));
console.log(solution(7, 3));
console.log(solution(1, 16));

// 정수부 반환 매서드 Math.trunc()
// ~~ 물결 연산자 2개 사용하면 정수부 반환
// Math.floor() 버림 함수
// parseInt() 문자열을 정수로 바꾸는 매서드

// ~-1 = 0
// ~0 = -1
// indexOf 메서드 사용할 때 씀.

// if (~"oh my god".indexOf("m")) {
//   alert("m이 요기잉네?");
// } else {
//   alert("m 따위 내가 먹었음.");
// }
