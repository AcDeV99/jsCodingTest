// function solution(strArr) {
//   for (let i = 0, len = strArr.length; i < len; i++) {
//     strArr[i] = i % 2 ? strArr[i].toUpperCase() : strArr[i].toLowerCase();
//   }
//   return strArr;
// }

function solution(strArr) {
  return strArr.map((v, i) =>
    i % 2 === 0 ? v.toLowerCase() : v.toUpperCase()
  );
}

console.log(solution(["AAA", "BBB", "CCC", "DDD"])); // 	["aaa","BBB","ccc","DDD"]
console.log(solution(["aBc", "AbC"])); // ["abc","ABC"]
