// function solution(n) {
//   if (n < 0 || n > 1e6) return 0;
//   return String(n)
//     .split("")
//     .reduce((acc, ele) => acc + Number(ele), 0);
// }

function solution(n) {
  if (n > 0 && n <= 1e8) {
    return [...n.toString()].reduce((acc, ele) => acc + Number(ele), 0);
  }
}
console.log(solution(1234));
console.log(solution(930211));
console.log(solution(123));
console.log(solution(987));
