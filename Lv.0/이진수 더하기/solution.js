function solution(bin1, bin2) {
  if (
    bin1.length < 1 ||
    bin2.length < 1 ||
    bin1.length > 10 ||
    bin2.length > 10
  )
    return;
  bin1.replace(/[^01]/g, "");
  bin2.replace(/[^01]/g, "");
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

//parseInt(변수,2) : 2진수였던 변수를 10진수 값으로 반환
//toString(2) : 2진수 변환

console.log(solution("10", "11"));
console.log(solution("1001", "1111"));
