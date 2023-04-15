// function solution(my_str, n) {
//   let result = [];
//   for (let i = 0; i < my_str.length; i += n) {
//     result.push(my_str.substring(i, n + i));
//   }
//   return result;
// }

console.log(solution('abc1Addfggg4556b', 6));
console.log(solution('abcdef123', 3));

// . : 공백 포함 아무 문자 1개에 대응
// {1, n} : 1개 이상, n개 이하 수량 한정자
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, 'g'));
}
