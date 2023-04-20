// function solution(phone_number) {
//   let answer = '';
//   for (let i = 0; i < phone_number.length - 4; i++) {
//     answer += '*';
//   }
//   for (let i = phone_number.length - 4; i < phone_number.length; i++) {
//     answer += phone_number[i];
//   }
//   return answer;
// }

// function solution(phone_number) {
//   return phone_number.replace(/\d(?=\d{4})/g, '*');
// }

function solution(s) {
  var result = '*'.repeat(s.length - 4) + s.slice(-4);
  return result;
}

console.log(solution('01033334444'));
console.log(solution('027778888'));
