// https://school.programmers.co.kr/learn/courses/30/lessons/181887
function maxEvenOdd(num_list) {
  let even = 0;
  let odd = 0;

  // reduce 함수에 초기값을 주지 않으면 acc은 쓰레기값, index는 1부터 시작한다.
  // 초기값을 주면 acc = 초기값, index는 0부터 시작한다.
  num_list.reduce((_, cur, i) => (i % 2 ? (odd += cur) : (even += cur)), 0);
  return Math.max(even, odd);
}

console.log(maxEvenOdd([4, 2, 6, 1, 7, 6])); // 17
console.log(maxEvenOdd([-1, 2, 5, 6, 3])); // 8
