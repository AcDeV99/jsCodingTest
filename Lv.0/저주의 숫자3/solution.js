// result를 3으로 나머지 했을 때 숫자가 0이면 result++
// result에 숫자 3이 포함되면 result++
// 반복은 n까지
function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result++;
    while (result % 3 === 0 || String(result).includes('3')) {
      result++;
    }
  }
  return result;
}

console.log(solution(15));
console.log(solution(40));

function solution(n) {
  let arr = [];
  let num = 0;
  while (arr.length !== n && ++num)
    if (num % 3 !== 0 && !('' + num).includes('3')) arr.push(num);

  console.log(arr);
  return arr.pop();
}
