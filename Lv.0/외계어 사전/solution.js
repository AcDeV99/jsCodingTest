// 주석 : 제한사항

const toLower = (spell, dic) => {
  // spell과 dic의 원소는 알파벳 소문자로만 이루어져 있습니다.
  for (let i = 0; i < spell.length; i++) {
    spell[i] = spell[i].toLowerCase();
  }
  for (let i = 0; i < dic.length; i++) {
    dic[i] = dic[i].toLowerCase();
  }
};

function solution(spell, dic) {
  let answer = 2;
  let count = 0;
  let dup = 0; // spell의 원소를 모두 사용해 만들 수 있는 단어는 dic에 두 개 이상 존재하지 않습니다. 체크 변수

  // 2 <= spell의 크기 <= 10
  if (spell.length < 2 || spell.length > 10) return answer;

  // spell의 원소의 길이는 1입니다.
  for (let i = 0; i < spell.length; i++) {
    if (spell[i].length != 1) return answer;
  }
  // 1 <= dic의 크기 <= 10
  if (dic.length < 1 || dic.length > 10) return answer;

  // 1 <= dic의 원소의 길이 <= 10
  for (let i = 0; i < dic.length; i++) {
    if (dic[i].length < 1 || dic[i].length > 10) return answer;
  }
  toLower(spell, dic);

  // dic과 spell 모두 중복된 원소를 갖지 않습니다.
  const distinctSpell = spell.filter((element, index) => {
    return spell.indexOf(element) === index;
  });
  const distinctDic = dic.filter((element, index) => {
    return dic.indexOf(element) === index;
  });

  for (let i = 0; i < distinctDic.length; i++) {
    for (let j = 0; j < distinctSpell.length; j++) {
      if (distinctDic[i].includes(distinctSpell[j]) == true) {
        count += 1;
      }
    }
    if (distinctDic[i].length == count && distinctSpell.length == count) {
      answer = 1;
      dup += 1;
    } else if (answer != 1) answer = 2;
    count = 0;
  }
  if (dup >= 2) {
    answer = 2;
    return answer;
  }
  return answer;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]));
console.log(solution(["z", "d", "X"], ["def", "dww", "Dzx", "loveaw", "ddzx"]));
console.log(
  solution(["s", "o", "m", "d", "s"], ["moos", "dzx", "smm", "smod", "somd"])
);
