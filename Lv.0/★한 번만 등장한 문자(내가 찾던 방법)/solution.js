// function solution(s) {
//   if (s.length <= 0 || s.length >= 1000) return;
//   s.toLowerCase();

//   let distinct = [...new Set(s)];
//   let str = s.split("");
//   let count = 0;
//   let result = "";
//   for (let i = 0; i < distinct.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (distinct[i] === str[j]) count++;
//     }
//     if (count === 1) {
//       result += distinct[i];
//     }
//     count = 0;
//   }
//   return result.split("").sort().join("");
// }

function solution(s) {
  return [...s]
    .filter((ele) => s.match(new RegExp(ele, "g")).length === 1)
    .sort()
    .join("");
}

console.log(solution("abcabcadc"));
console.log(solution("abdc"));
console.log(solution("hello"));
