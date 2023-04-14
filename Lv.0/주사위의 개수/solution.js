function solution(box, n) {
  if (box.length !== 3 || n < 1 || n > 50) return;
  box = box.filter((ele) => ele >= 1 && ele <= 100 && ele >= n);
  return box.reduce((acc, cur) => {
    return acc * ~~(cur / n);
  }, 1);
}

// function solution(box, n) {
//   let [width, length, height] = box;

//   return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);

// }

//reduce() 마지막에 붙는 숫자가 acc의 초기값
console.log(solution([1, 1, 1], 1));
console.log(solution([10, 8, 6], 3));
