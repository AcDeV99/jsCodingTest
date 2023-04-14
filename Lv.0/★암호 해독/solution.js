// function solution(cipher, code) {
//   if (cipher.length < 1 || cipher.length > 1000) return;
//   if (code >= 1 && cipher.length >= code) {
//     cipher = cipher.toLowerCase().replace(/[^a-z\s]/g, "");
//     let result = "";
//     for (let i = 1; i <= cipher.length / code; i++) {
//       result += cipher[code * i - 1];
//     }
//     return result;
//   }
// }

function solution(cipher, code) {
  return cipher
    .split("")
    .filter((v, i) => (i + 1) % code === 0)
    .join("");
}

console.log(solution("dfjardstddetckdaccccdegk", 4));
console.log(solution("pfqallllabwaoclk", 2));
