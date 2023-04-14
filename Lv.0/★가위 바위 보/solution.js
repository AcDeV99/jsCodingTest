// function solution(rsp) {
//   if (rsp.length <= 0 || rsp.length > 100) return;
//   rsp = rsp.replace(/[^025]/, "");
//   return rsp
//     .split("")
//     .map((element) => {
//       return element === "0"
//         ? "5"
//         : element === "2"
//         ? "0"
//         : element === "5"
//         ? "2"
//         : "";
//     })
//     .join("");
// }

/*
 가위는 2 바위는 0 보는 5
*/
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}

console.log(solution("21"));
console.log(solution("205"));
