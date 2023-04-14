function solution(numbers) {
  let nums = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let result = numbers;
  for (let i = 0; i < 10; i++) {
    result = result.replace(new RegExp(`${nums[i]}`, 'g'), i);
  }
  return parseInt(result);
}

console.log(solution('onetwothreefourfivesixseveneightnine'));
console.log(solution('onefourzerosixseven'));

// function solution(numbers) {
//   const obj = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };

//   const num = numbers.replace(
//     /zero|one|two|three|four|five|six|seven|eight|nine/g,
//     (v) => {
//       return obj[v];
//     }
//   );

//   return Number(num);
// }
