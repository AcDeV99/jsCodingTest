// function solution(chicken) {
//   let result = 0;
//   while (chicken >= 10) {
//     chicken /= 10;
//     result += chicken;
//   }

//   return Math.round(result);
// }

function solution(chicken) {
  return ~~(chicken * 0.111111);
}
console.log(solution(100));
console.log(solution(1081));
console.log(solution(1999));
