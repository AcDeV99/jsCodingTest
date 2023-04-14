const solution = (array, n) => {
  array = array.filter(
    (item) =>
      1 <= array.length &&
      array.length <= 100 &&
      0 <= item &&
      item <= 1000 &&
      0 <= n &&
      n <= 1000
  );
  return array.filter((ele) => n === ele).length;
};

console.log(solution([1, 1, 1, 3, 2, 3, 4, 5], 3));
console.log(solution([0, 2, 3, 4], 1));
