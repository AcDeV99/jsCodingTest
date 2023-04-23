function solution(num_list) {
  let even = '';
  let odd = '';
  num_list.forEach((num) => {
    num % 2 ? (odd += String(num)) : (even += String(num));
  });
  return Number(even) + Number(odd);
}

console.log(solution([3, 4, 5, 2, 1])); // 393
console.log(solution([5, 7, 8, 3])); // 581
