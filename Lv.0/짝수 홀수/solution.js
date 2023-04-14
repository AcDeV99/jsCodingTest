function solution(num_list) {
  let answer = [0, 0];
  if (num_list.length < 1 || num_list.length > 100) return;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0 || num_list[i] > 1000) continue;

    num_list[i] % 2 == 0 ? (answer[0] += 1) : (answer[1] += 1);
  }
  return answer;
}
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 5, 7]));
console.log(solution([1001, 1002, 1003]));
console.log(solution([-3, -2, -1, 0]));
console.log(
  solution([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    98, 99, 100, 101, 102, 103, 104, 105,
  ])
);

// function solution(num_list) {
//   var answer = [0, 0];
//   if (num_list.length < 1 || num_list.length > 100) return;

//   for (let a of num_list) {
//     if (num_list[a] < 0 || num_list[a] > 1000) continue;
//     answer[a % 2] += 1;
//   }

//   return answer;
// }
// console.log(solution([1, 2, 3, 4, 5, 1001, 1002, 1003]));
// console.log(solution([1, 3, 5, 7]));
