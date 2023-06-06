function solution(name) {
  let upDownCnt = 0;
  let len = name.length;
  let LRCnt = len - 1;

  for (let i = 0; i < len; i++) {
    let code = name[i].charCodeAt();
    code < 78 ? (code = code - 65) : (code = 91 - code);
    upDownCnt += code;
  }

  // 매 인덱스 위치 때마다 실행
  for (let i = 0; i < len; i++) {
    let nextIdx = i + 1;
    while (name[nextIdx] == 'A') nextIdx++;

    // 정방향 → 역방향 : 앞에서부터 현재 인덱스까지 왔다가 다시 돌아가서,
    // 뒤에서부터 nextIndex까지 가는 경우
    if (i * 2 + (len - nextIdx) < LRCnt) {
      LRCnt = i * 2 + (len - nextIdx);
    }

    // 역방향 → 정방향 : 뒤에서부터 nextIndex까지 왔다가 다시 돌아가서,
    // 앞에서부터 현재 인덱스 전까지 오는 경우
    if (i + (len - nextIdx) * 2 < LRCnt) {
      LRCnt = i + (len - nextIdx) * 2;
    }
  }

  return upDownCnt + LRCnt;
}

console.log(solution('JEROEN')); // 56
console.log(solution('JAN')); // 23
console.log(solution('JNA')); // 23
