// function solution(num_list, n) {
//   if (num_list.length % n !== 0) return;
//   if (num_list.length < 0 || num_list.length > 150) return;
//   if (n < 2 || n >= num_list.length) return;

//   let result = [];
//   for (let i = 0; i < num_list.length; i += n) {
//     result.push(num_list.slice(i, i + n));
//   }
//   return result;
// }

// function solution(num_list, n) {
//   var answer = [];

//   while (num_list.length) {
//     answer.push(num_list.splice(0, n));
//   }

//   return answer;
// }

function solution(num_list, n) {
  return Array(num_list.length / n)
    .fill([])
    .map(() => num_list.splice(0, n));
  // 0번 인덱스에서 n개 요소 제거 -> 0번 인덱스에서 n개씩 빼서 fill([])에서 []안에 채워서 Array()길이의 배열을 만든다.
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3));
