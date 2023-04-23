// 더 빠름
function solution(arr) {
  const result = [];
  arr.forEach((ele) => {
    for (let i = 0, len = ele; i < len; i++) {
      result.push(ele);
    }
  });
  return result;
}

function solution(arr) {
  return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}

console.log(solution([5, 1, 4])); // [5, 5, 5, 5, 5, 1, 4, 4, 4, 4]
console.log(solution([6, 6])); // [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
console.log(solution([1])); // [1]
