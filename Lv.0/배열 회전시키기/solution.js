function solution(numbers, direction) {
  if (numbers.length < 3 || numbers.length > 20) return;
  if (direction !== "right" && direction !== "left") return;

  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}

// 배열에 값을 추가하는 함수
// .push() : 배열의 맨 끝에 값을 추가한다.
// .unshift() : 배열의 맨 앞에 값을 추가한다.

// 배열에 값을 제거하는 함수
// .pop() : 배열의 맨 끝에 값을 제거한다.
// .shift() : 배열의 맨 앞에 값을 제거한다.

// 하나씩 밀림으로써 왼쪽 또는 오른쪽으로 배열을 회전시킬 수 있다.

console.log(solution([1, 2, 3], "right"));
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left"));
