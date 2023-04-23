function solution(str1, str2) {
  const [arrStr1, arrStr2] = [str1.split(''), str2.split('')];
  const result = [];
  arrStr1.forEach((str1, i) => {
    result.push(str1);
    result.push(arrStr2[i]);
  });
  return result.join('');
}

function solution(str1, str2) {
  let result = '';
  for (let i = 0, len = str1.length; i < len; i++) {
    result += str1[i] + str2[i];
  }
  return result;
}

console.log(solution('aaaaa', 'bbbbb')); // "ababababab"
