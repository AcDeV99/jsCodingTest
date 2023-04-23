function solution(arr) {
  const result = arr.map((ele) => {
    if (ele >= 50 && ele % 2 === 0) return ele / 2;
    else if (ele < 50 && ele % 2 === 1) return ele * 2;
    else return ele;
  });
  return result;
}

console.log(solution([1, 2, 3, 100, 99, 98])); // [2, 2, 6, 50, 99, 49]
