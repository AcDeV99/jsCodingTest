// function solution(n) {
//   return ~~Math.sqrt(n) == Math.sqrt(n) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
// }

// 0.1ms 정도 빠름
function nextSqaure(n) {
  var result = 0;
  var x = 0;
  while (x * x < n) {
    x++;
  }
  if (x * x == n) {
    x++;
    result = x * x;
  } else {
    result = 'no';
  }
  return result;
}
console.log(solution(121));
console.log(solution(3));
