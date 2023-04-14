// 등차수열, 등비수열 개념 사용
function solution(common) {
  // 제한사항
  const limits = common.filter(
    (param) =>
      param > -1000 && param < 2000 && common.length > 2 && common.length < 1000
  );

  let gongcha = limits[1] - limits[0];
  let gongbi = limits[1] / limits[0];
  if (gongbi === 0 || typeof gongbi !== "number") return;

  // 등차수열
  // 첫째항이 a, 공차가 d인 등차수열의 일반항 a 아래첨자 n = a + (n-1)d
  if (gongcha === limits[2] - limits[1]) {
    return Math.floor(limits[0] + limits.length * gongcha);
  }

  // 등비수열
  // 첫째항이 a, 공비가 r인 등비수열의 일반항 a 아래첨자 n = ar 위첨자 n-1
  if (gongbi === limits[2] / limits[1]) {
    return Math.floor(limits[0] * gongbi ** limits.length);
  }

  // 둘다 다음 값을 구하는 것이기 때문에 n-1에서 -1을 뺀 n으로 계산함.
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
console.log(solution([-1001, 3, 9, 27, 81, 3002]));
