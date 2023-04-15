// function fatorial(num) {
//   if (num > 1) return num * fatorial(num - 1);
//   return num;
// }
// function solution(balls, share) {
//   if (balls == share) return 1;
//   let total = fatorial(balls);
//   let shares = fatorial(share);
//   let totalShares = fatorial(balls - share);

//   return Math.round(total / (totalShares * shares));
// }

// console.log(solution(3, 2));
// console.log(solution(5, 3));

// 서로 다른 n개에서 m개를 뽑는 공식 : nPr / r!
// n : 전체 개수
// r : 고르는 개수
// nPr : n * n-1 * n-2 ...

function solution(balls, share) {
  let [total, shares] = [1, 1];
  for (let i = 0; i < share; i++) {
    total *= balls - i;
    shares *= share - i;
  }
  return total / shares;
}

console.log(solution(3, 2));
console.log(solution(5, 3));
