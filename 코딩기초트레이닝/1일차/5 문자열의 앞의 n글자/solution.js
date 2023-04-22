function solution(my_string, n) {
  return my_string.substring(0, n);
}

// function solution(my_string, n) {
//   return my_string.slice(0, n);
// }

// function solution(my_string, n) {
//   return my_string.split("").splice(0, n).join("");
// }

// 문자열 계산은 substring이 제일 빠르다.
// slice와 splice의 차이는 slice는 원본 배열을 수정하지 않고 결과를 반환하고
// splice는 원본 배열을 수정한다. 그리고 slice는 문자열에도 쓸 수 있지만 splice는 사용할 수 없다.
// substring은 문자열에만 사용 가능하고 slice는 문자열, 배열 둘다 사용 가능하고   splice는 배열에만 사용 가능하다.

console.log(solution("ProgrammerS123", 11)); // "ProgrammerS"
console.log(solution("He110W0r1d", 5)); // "He110"
