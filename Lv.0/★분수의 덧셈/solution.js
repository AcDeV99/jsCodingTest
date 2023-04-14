function euclidean(su1, su2) {
  // 유클리드 호제법 gcd : 최대공약수 lcm : 최소공배수
  // 유클리드 호제법의 기본 원리는 num1를 num2로 나눈 나머지를 r이라고 했을 때,
  // GCD(num1, num2) = GCD(num2, r)과 같다는 것이다.
  // r이 0이라면, 그 때의 num2가 최대공약수이다.
  // GCD(24, 16) = GCD(16, 8) = GCD(8, 0)
  // GCD = 8
  const gcd = (num1, num2) =>
    num1 % num2 === 0 ? num2 : gcd(num2, num1 % num2);
  const lcm = (num1, num2) => (num1 * num2) / gcd(num1, num2);
  return [gcd(su1, su2), lcm(su1, su2)];
}

//console.log(euclidean(2, 3));

function solution(numer1, denom1, numer2, denom2) {
  if (
    numer1 <= 0 ||
    numer1 >= 1000 ||
    denom1 <= 0 ||
    denom1 >= 1000 ||
    numer2 <= 0 ||
    numer2 >= 1000 ||
    denom2 <= 0 ||
    denom2 >= 1000
  )
    return;

  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b)); // 최대공약수 공식
  let numer = numer1 * denom2 + numer2 * denom1; // 분자
  let denom = denom1 * denom2; // 분모
  console.log(numer, denom, gcd(numer, denom));
  return [numer / gcd(numer, denom), denom / gcd(numer, denom)]; // 최대공약수로 나눔으로써 기약분수 만듦.
}

console.log(solution(1, 2, 3, 4));
console.log(solution(9, 2, 1, 3));
console.log(solution(12, 24, 35, 22));
