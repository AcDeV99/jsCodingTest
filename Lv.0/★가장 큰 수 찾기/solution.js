function solution(array) {
  if (array.length < 1 || array.length > 100) return;
  array = array.filter((ele, index) => {
    ele >= 0 && ele <= 1000;
    return array.indexOf(ele) === index;
  });
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}

console.log(solution([1, 8, 8, 3]));
console.log(solution([9, 10, 11, 8]));
