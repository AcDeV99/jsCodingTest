// function solution(quiz) {
//   let quizs = quiz.map((ele) => ele.split(' = '));
//   let result = [];
//   let xy;
//   for (let i = 0; i < quizs.length; i++) {
//     quizs[i][0].split(' - ').length == 2
//       ? (xy =
//           parseInt(quizs[i][0].split(' - ')[0]) -
//           parseInt(quizs[i][0].split(' - ')[1]))
//       : (xy =
//           parseInt(quizs[i][0].split(' + ')[0]) +
//           parseInt(quizs[i][0].split(' + ')[1]));
//     xy == Number(quizs[i][1]) ? result.push('O') : result.push('X');
//   }
//   return result;
// }

function solution(quiz) {
  let answer = [];
  quiz.forEach((val) => {
    const [x, sign, y, , z] = val.split(' ');
    let sum = 0;
    sign === '+' ? (sum = +x + +y) : (sum = +x - +y);
    sum === Number(z) ? answer.push('O') : answer.push('X');
  });
  return answer;
}

console.log(solution(['3 - 4 = -3', '5 + 6 = 11']));
console.log(
  solution(['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2'])
);
