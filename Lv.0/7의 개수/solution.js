function solution(array) {
  return array.join().replace(/[^7]/g, '').length;
}

console.log(solution([7, 77, 17]));
console.log(solution([10, 29]));
