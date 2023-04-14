function solution(cap, n, deliveries, pickups) {
  // 제한 사항
  if (cap < 1 || cap > 50) return;
  if (n < 1 || n > 100000) return;
  if (
    deliveries.length != pickups.length ||
    deliveries.length != n ||
    pickups.length != n
  )
    return;

  // 7 ~ 20번 테스트에서 걸림.
  // if (deliveries.length < 0 || deliveries.length > 50) return;
  // if (pickups.length < 0 || pickups.length > 50) return;

  let distance = 0;
  for (let i = n - 1; i > -1; i--) {
    while (deliveries[i] > 0 || pickups[i] > 0) {
      deliveries[i] -= cap;
      pickups[i] -= cap;
      distance += 2 * (i + 1);
    }
    if (deliveries[i] < 0) {
      deliveries[i - 1] += deliveries[i];
    }
    if (pickups[i] < 0) {
      pickups[i - 1] += pickups[i];
    }
  }
  return distance;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]));
console.log(solution(3, 7, [4, 6, 8, 10, 2, 9, 7], [10, 12, 5, 9, 7, 5, 2]));
