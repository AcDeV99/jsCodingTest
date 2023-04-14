// 배열 내 숫자 채우기
// let arr = Array(n)
// .fill()
// .map((v, i) => i + 1);

// 못 풀음
// function solution(n) {
//   let j = 4;
//   return Array(n)
//     .fill()
//     .map((v, i) => i + 1)
//     .filter((ele) => ele % j++ === 0 && j < n);
// }

// 답안
//Set() 함수는 객체를 만드는 것이고, push()가 아닌 add()함수를 사용한다.
//Set() 함수의 경우 길이는 length가 아닌 size를 사용한다.
//Set() 함수의 경우, 중복값은 받지 않기 때문에 이런 연산에는 적합하다.
function solution(n) {
  let arr = new Set();
  for (let i = 4; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) arr.add(i);
    }
  }
  return arr.size;
}

console.log(solution(10));
console.log(solution(15));
