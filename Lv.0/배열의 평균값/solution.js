function solution(numbers) {
  numbers = numbers.filter(
    (item) =>
      item >= 0 && item <= 1000 && numbers.length >= 1 && numbers.length <= 100
  );
  let sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return (sum / numbers.length).toFixed(1);
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]));

// function solution(numbers) {
//     var answer = 0;
//     for(i of numbers) {
//         answer += i
//     }
//     return answer / numbers.length;

// }
