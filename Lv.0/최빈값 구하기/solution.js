// function solution(array) {
//   const dist = Array.from(new Set(array)).sort((a, b) => a - b);
//   if (dist.length === 1) return dist[0];
//   const result = array
//     .reduce((accu, curr) => {
//       accu[curr] = (accu[curr] || 0) + 1;
//       return accu;
//     }, [])
//     .filter((ele) => ele !== null);
//   const sorts = [...result].sort((a, b) => a - b);
//   const dup = sorts
//     .reduce((accu, curr) => {
//       accu[curr] = (accu[curr] || 0) + 1;
//       return accu;
//     }, [])
//     .filter((ele) => ele !== null);
//   const max = Math.max(...result);

//   if (dup[dup.length - 1] > 1) return -1;
//   return dist[result.indexOf(max)];
// }

const solution = (array) => {
  const counter = array.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: (acc[cur] || 0) + 1,
    }),
    {}
  );

  const items = Object.keys(counter)
    .map((key) => [Number(key), counter[key]])
    .sort((a, b) => b[1] - a[1]);

  if (items[0][1] === items?.[1]?.[1]) {
    return -1;
  }

  return items[0][0];
};

function solution(array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}

console.log(solution([1, 2, 3, 3, 3, 3, 4]));
console.log(solution([0, 0]));

// 반례 dist sort() 해줌
console.log(solution([80, 80, 80, 9, 9]));

// 반례 최빈값이 겹치는데 3의 개수가 나오는거 dup으로 한번더 reduce 연산 반복해서 해결
console.log(solution([1, 1, 2, 2, 3]));
console.log(solution([1, 1, 5, 5, 3, 3]));
