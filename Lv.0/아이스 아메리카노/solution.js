// const solution = (money) => {
//   let result = [0];
//   if (0 < money && money <= 1e6) {
//     while (money >= 5500) {
//       result[0] += 1;
//       money -= 5500;
//     }
//     result[1] = money;
//     return result;
//   }
// };

const solution = (money) => {
  if (0 < money && money <= 1e6) {
    return [~~(money / 5500), money % 5500];
  }
};

console.log(solution(5500));
console.log(solution(15000));
console.log(solution(25000));
