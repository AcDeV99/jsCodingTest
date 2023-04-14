function solution(numbers, num1, num2) {
  numbers = numbers.filter(
    (number) =>
      2 <= numbers.length &&
      numbers.length <= 30 &&
      0 <= number &&
      number <= 1000 &&
      0 <= num1 &&
      num1 < num2 &&
      num2 < numbers.length
  );
  return numbers.splice(num1, num2 - num1 + 1);
  // return numbers.slice(num1, num2 + 1);
}

// slice() 배열의 인자로 받는 "시작index"부터 "끝index"까지 자른 복사본을 리턴 한다.
// splice([시작인덱스], [삭제개수], [배열추가요소...]) 원본 배열을 변경
console.log(solution([1, 2, 3, 4, 5], 1, 3));
console.log(solution([1, 3, 5], 1, 2));
console.log(solution([1, 3, 5, 7, 9, 11, 13, 15, 17], 2, 4));
