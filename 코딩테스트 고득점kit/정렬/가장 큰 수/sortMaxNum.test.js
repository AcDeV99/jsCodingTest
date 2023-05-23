function sortMaxNum(numbers) {
  let result = numbers
    .map((num) => num.toString())
    .sort((a, b) => b + a - (a + b))
    .join('');
  return result[0] === '0' ? '0' : result;
}

// toString() 필요 없이 템플릿 리터럴로 해결
// function solution(numbers) {
//   let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
//   return answer[0] === '0' ? '0' : answer;
// }

// a가 b보다 작은 경우(음수), a가 먼저 옴.
// a가 b보다 큰 경우(양수), a가 나중에 옴.

// a = 3, b = 30
// 303 - 330
// -27(음수)
// 결론 : 330

// 0만 있는 경우, 0으로 치환

function solution(numbers) {
  const buckets = [];

  for (const n of numbers) {
    const s = String(n),
      l = s.length;

    let j = '';
    for (let i = 0; i < 4; i++) {
      j += s[l > i ? i : i % l];
    }
    j = 9999 - j;

    buckets[j] = buckets[j] ? buckets[j] + s : s;
  }

  const ans = buckets.join``;

  return ans[0] === '0' ? '0' : ans;
}
/*
처음에 무식한(?) 방법으로 했다가 너무 느려서 다른 방법을 궁리하다가 radix sort 에서 아이디어를 빌려와봤습니다!
문제에서 최대 숫자가 1000 이라는 단서가 있었기 때문에 가능했습니다

기본적으로 사이즈 10000개 짜리 배열을 하나 만들고 주어진 숫자가 인덱스가 되는 방식입니다.
주어진 숫자가 4자 아래일 경우 (3 이라던가 54 이라던가)는 4자가 될때까지 반복하도록 했습니다.
3 이면 3333 취급, 35 면 3535 취급, 321 이면 3213 취급이되는거죠!

Radix sort(기수정렬)의 특성처럼 '비교'할 필요가 없는 소트 방식이기에 속도가 빠른게 장점인듯 하네요.
테스트 케이스 1번 이 23ms 걸렸어요!
자바스크립트 기본 소트로 풀면 100ms 이상 걸리는 것 같구요 ;)
*/

describe('가장 큰 수 정렬', () => {
  test('[6, 10, 2] = "6210"', () => {
    expect(sortMaxNum([6, 10, 2])).toBe('6210');
  });
  test('[3, 30, 34, 5, 9]	= "9534330"', () => {
    expect(sortMaxNum([3, 30, 34, 5, 9])).toBe('9534330');
  });
});
