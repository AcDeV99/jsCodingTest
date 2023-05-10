// https://school.programmers.co.kr/learn/courses/30/lessons/181854
function PlusNToArray(arr, n) {
  const arrLen = arr.length % 2;
  return arr.map((ele, i) =>
    arrLen ? (i % 2 ? ele : ele + n) : i % 2 ? ele + n : ele
  );
}

console.log(PlusNToArray([49, 12, 100, 276, 33], 27)); // [76, 12, 127, 276, 60]
console.log(PlusNToArray([444, 555, 666, 777], 100)); // [444, 655, 666, 877]
