function solution(numbers) {
  numbers = numbers.filter(
    (ele) =>
      ele >= -1e4 && ele <= 1e4 && numbers.length >= 2 && numbers.length <= 100
  );

  numbers = numbers.sort((a, b) => b - a);
  // return numbers[0] * numbers[1] >
  //   numbers[numbers.length - 1] * numbers[numbers.length - 2]
  //   ? numbers[0] * numbers[1]
  //   : numbers[numbers.length - 1] * numbers[numbers.length - 2];

  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}

console.log(solution([1, 2, -3, 4, -5]));
console.log(solution([0, -31, 24, 10, 1, 9]));
console.log(solution([10, 20, 30, 5, 5, 20, 5]));
