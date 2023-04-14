function solution(queue1, queue2) {
  // 1. 각 큐의 합(sumAllQueue) 구하기: 두 큐의 모든 원소의 합을 구하고 2를 나눈다.
  // 2. (sumAllQueue 값 - 한 큐 내에서 모든 원소를 더한 값)을 해서
  // 결과가 +면 원소를 받고 -면 원소를 넘긴다.(단,가장 적합한 수부터) //넘기고 받을때마다 횟수 체크
  // 3. 자동으로 다른 큐도 완성
  // 4. 체크된 횟수값을 결과로 반환

  // 간과한 부분 : 두 큐의 길이가 같아야함. 서로 교환하는 것만 가능
  let que1 = [...queue1];
  let que2 = [...queue2];

  let sumAllQueue = [...queue1, ...queue2].reduce((acc, cur) => acc + cur) / 2;
  let sumQueue1 = [...queue1].reduce((acc, cur) => acc + cur);
  let diffValue = sumAllQueue - sumQueue1;
  let satifyValue = 0;
  let count = 0;
  if (diffValue > 0) {
    if (que2[0] - que1[0] == diffValue) {
      que1.push(que2.shift()); // push shift되는 개수에 따라 count 증가
      que2.push(que1.shift());
      count += 2;
    }
  }

  return que2;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
