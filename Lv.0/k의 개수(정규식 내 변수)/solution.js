function solution(i, j, k) {
  if (i < 1 || i >= j || j > 1e5) return;
  if (k < 0 || k > 9) return;

  let str = "";
  while (j >= i) {
    str += String(i);
    i++;
  }
  let regex = new RegExp(`[^${k}]`, "g"); // 정규식 내 변수 사용할 때 사용
  return str.replace(regex, "").length;
}
// function solution(i, j, k) {
//   let a = "";
//   for (i; i <= j; i++) {
//     a += i;
//   }

//   return a.split(k).length - 1;
// }

console.log(solution(1, 13, 1));
console.log(solution(10, 50, 5));
console.log(solution(3, 10, 2));
